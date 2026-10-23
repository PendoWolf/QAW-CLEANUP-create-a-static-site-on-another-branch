// Harbor Notes: the little behavior the static pages need, with no framework.

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
