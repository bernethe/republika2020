'use strict';
//npm install --save-dev @babel/core @babel/cli @babel/preset-env

const main = () => {
	document.getElementById('menu_btn').addEventListener('click', toggleMenu, !1);
	let _cp = document.body.dataset.page;
	if (window[_cp] && typeof window[_cp] === 'function') {
		window[_cp]();
	}
};
const toggleMenu = () => {
	document.getElementById('menu_btn').classList.toggle('opened');
	document.querySelector('header.main-header').classList.toggle('opened');
};
document.addEventListener('DOMContentLoaded', main, !1);