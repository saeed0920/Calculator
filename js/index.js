"use strict";

const selectElement = function (className) {
  return document.querySelector(className);
};

const selectElementAll = function (className) {
  return document.querySelectorAll(className);
};

const removeClass = function (elementName, className) {
  return elementName.classList.remove(className);
};

const addClass = function (elementName, className) {
  return elementName.classList.add(className);
};

const moonIcon = selectElement(".moon-icon");
const lightIcon = selectElement(".light-icon");
let darkMode = false;

const changeTheme = function () {
  const html = selectElement("html");
  if (darkMode) {
    addClass(html, "dark");
  } else {
    removeClass(html, "dark");
  }
};
moonIcon.addEventListener("click", () => {
  darkMode = true;
  changeTheme();
});
lightIcon.addEventListener("click", () => {
  darkMode = false;
  changeTheme();
});
