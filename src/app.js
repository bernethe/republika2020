'use strict';
//npm install --save-dev @babel/core @babel/cli @babel/preset-env

const main = () => {
	if(document.getElementById('menu_btn')) {
		document.getElementById('menu_btn').addEventListener('click', () => {
			document.getElementById('menu_btn').classList.toggle('opened');
			document.querySelector('header.main-header').classList.toggle('opened');
		}, !1);
	}
	let _cp = document.body.dataset.page;
	if (window[_cp] && typeof window[_cp] === 'function') {
		window[_cp]();
	}
};

document.addEventListener('DOMContentLoaded', main, !1);