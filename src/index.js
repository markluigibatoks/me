import Drawer from "./scripts/Drawer"
import QuickHacks from "./scripts/QuickHacks"

document.addEventListener('DOMContentLoaded', function () {
  new Drawer('#drawer', '#drawer-toggle', '#drawer-close')
  new QuickHacks()

  const contactUsForm = document.querySelector('#contact-us-form');
  if (contactUsForm) {
    new FormContactUs('#contact-us-form');
  }

  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    new FormNewsletter('#newsletter-form');
  }
});
