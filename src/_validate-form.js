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
	if(document.getElementById('service_txt').value.length < 2) {
		_m.push( createCustomElement('li',{},['El servicio es requerido']) );
	}
	if(document.getElementById('msj_txt').value.length < 2) {
		_m.push( createCustomElement('li',{},['El mensaje o comentario es requerido']) );
	}

	if(_m.length != 0) {
		appendModal( createCustomElement('ul',{},_m), 'Atención' );
	} else {
		let _d = new FormData();
		_d.append( 'name_txt', document.getElementById('name_txt').value );
		_d.append( 'email_txt', document.getElementById('email_txt').value );
		_d.append( 'phone_txt', document.getElementById('phone_txt').value );
		_d.append( 'service_txt', document.getElementById('service_txt').value );
		_d.append( 'msj_txt', document.getElementById('msj_txt').value );
		fetch('/form/', {
			method: 'POST',
			body: _d
		})
		.then((res) => res.json() )
		.then((data) => { console.log( data ) });
	}
};