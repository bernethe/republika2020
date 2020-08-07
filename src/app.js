'use strict';
//npm install --save-dev @babel/core @babel/cli @babel/preset-env

const toggleMenu = () => {
	document.getElementById('menu_btn').classList.toggle('opened');
	document.querySelector('header.main-header').classList.toggle('opened');
};
const validateMainForm = (e) => {
	e.preventDefault();
	let _m = [];
	if(document.getElementById('name_txt').value.length < 2) {
		_m.push( createCustomElement('li',{},['El nombre es requerido']) );
	}
	if( !email_rx.test(document.getElementById('email_txt').value)) {
		_m.push( createCustomElement('li',{},['El correo es requerido y debe ser válido']) );
	}
	if(document.getElementById('phone_txt').value.length < 6) {
		_m.push( createCustomElement('li',{},['El teléfono es requerido']) );
	}

	if(_m.length != 0) {
		appendModal( createCustomElement('ul',{},_m), 'Atención' )
	}
};

const main = () => {
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