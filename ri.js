"use strict";

var index = function index() {
  new Glide('.glide-slider', {
    autoplay: 7500
  }).mount();
};
'use strict'; //npm install --save-dev @babel/core @babel/cli @babel/preset-env

var main = function main() {
  document.getElementById('menu_btn').addEventListener('click', toggleMenu, !1);
  var _cp = document.body.dataset.page;

  if (window[_cp] && typeof window[_cp] === 'function') {
    window[_cp]();
  }

  AOS.init();
};

var toggleMenu = function toggleMenu() {
  document.getElementById('menu_btn').classList.toggle('opened');
  document.querySelector('header.main-header').classList.toggle('opened');
};

document.addEventListener('DOMContentLoaded', main, !1);

//# sourceMappingURL=ri.js.map