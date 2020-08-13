'use strict';
//npm install --save-dev @babel/core @babel/cli @babel/preset-env
let lang = 'es';

const main = () => {
	lang = document.getElementsByTagName('html')[0].getAttribute('lang');
	document.getElementById('menu_btn').addEventListener('click', toggleMenu, !1);
	let _cp = document.body.dataset.page;
	if (window[_cp] && typeof window[_cp] === 'function') {
		window[_cp]();
	}
	if(document.getElementById('mainForm')) {
		document.getElementById('mainForm').addEventListener('submit', validateMainForm, !1);
	}
	AOS.init();
};
document.addEventListener('DOMContentLoaded', main, !1);