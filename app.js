// Harbor Notes: the little behavior the static pages need, with no framework.
// Every page loads this file; each block runs only on the page that has its elements.

// Novus by Pendo: boot the SDK once per page load. The install snippet in each
// page's <head> defines the `pendo` stub. An empty visitor id lets the SDK reuse
// a known visitor from cookies/localStorage, or start a new anonymous one.
pendo.initialize({
  visitor: {
    id: "",
  },
});

const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    document.getElementById("newsletter-status").textContent =
      `Thanks! Updates will go to ${email}.`;
    // Track a valid newsletter sign-up (the submit event only fires after
    // HTML5 validation passes). The email address is PII, so it is not sent.
    pendo.track("newsletter_subscribed", {
      form_id: "newsletter-form",
      source_page: window.location.pathname,
    });
    newsletterForm.reset();
  });
}

const featureTour = document.getElementById("feature-tour");
if (featureTour) {
  featureTour.addEventListener("click", () => {
    document.getElementById("feature-tour-status").textContent =
      "The tour starts with your first notebook.";
  });
}

const billingToggle = document.getElementById("billing-toggle");
if (billingToggle) {
  let yearly = false;
  billingToggle.addEventListener("click", () => {
    yearly = !yearly;
    document.querySelectorAll(".price").forEach((price) => {
      price.textContent = yearly ? price.dataset.yearly : price.dataset.monthly;
    });
    billingToggle.textContent = yearly
      ? "Show monthly prices"
      : "Show yearly prices";
  });
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contact-name").value;
    document.getElementById("contact-status").textContent =
      `Thanks, ${name}! We'll reply within a day.`;
    // Track a completed contact request (the submit event only fires after
    // HTML5 validation passes). Name, email and message text are PII, so only
    // the message length is sent.
    pendo.track("contact_message_sent", {
      form_id: "contact-form",
      message_length: document.getElementById("contact-message").value.length,
      source_page: window.location.pathname,
    });
    contactForm.reset();
  });
}
