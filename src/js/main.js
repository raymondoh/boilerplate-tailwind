// Import your main SCSS file
import "../scss/main.scss";
//import initializeSwiper from "./swiperSetup.js";

import {
  setActiveLink,
  //handleDesktopSubMenuAccessibility,
  handleMobileSubMenuAccessibility,
  mobileMenuToggle,
  handleNavigation,
} from "./headerFunctions";

import { initializeScroll } from "./scrollToTop";

document.addEventListener("DOMContentLoaded", () => {
  setActiveLink("#desktop-nav");
  setActiveLink("#mobile-nav");
  //handleDesktopSubMenuAccessibility();
  //handleMobileSubMenuAccessibility();
  mobileMenuToggle();
  handleNavigation();
  initializeScroll();
  //initializeSwiper();
});
