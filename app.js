// Harbor Notes: the little behavior the static pages need, with no framework.
// Every page loads this file; each block runs only on the page that has its elements.

const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    document.getElementById("newsletter-status").textContent =
      `Thanks! Updates will go to ${email}.`;
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
    contactForm.reset();
  });
}
