const validateMainForm = (e) => {
	e.preventDefault();
	let _m = [];
	if(document.getElementById('name_txt').value.length < 2) {
		_m.push( createCustomElement('li',{},[
			msjContactLang({
				es:'El nombre es requerido',
				en:'Name is required'
			})
		]) );
	}
	if( !email_rx.test(document.getElementById('email_txt').value)) {
		_m.push( createCustomElement('li',{},[
			msjContactLang({
				es:'El correo es requerido y debe ser válido',
				en:'Email is required and most be valid'
			})
		]) );
	}
	if(document.getElementById('phone_txt').value.length < 6) {
		_m.push( createCustomElement('li',{},[
			msjContactLang({
				es:'El teléfono es requerido',
				en:'Phone is required'
			})
		]) );
	}
	if(document.getElementById('service_txt').value.length < 2) {
		_m.push( createCustomElement('li',{},[
			msjContactLang({
				es:'El servicio es requerido',
				en:'Service is required'
			})
		]) );
	}
	if(document.getElementById('msj_txt').value.length < 2) {
		_m.push( createCustomElement('li',{},[
			msjContactLang({
				es:'El mensaje o comentario es requerido',
				en:'Message or comments is required'
			})
		]) );
	}

	if(_m.length != 0) {
		appendModal( createCustomElement('ul',{},_m), msjContactLang({
			es:'Atención',
			en:'Warning'
		}) );
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
		.then((res) => res.text() )
		.then((data) => {
			document.getElementById('name_txt').value = '';
			document.getElementById('email_txt').value = '';
			document.getElementById('phone_txt').value = '';
			document.getElementById('service_txt').value = '';
			document.getElementById('msj_txt').value = '';

			appendModal(
				createCustomElement('ul',{}, [
					msjContactLang({
						es:'El mensaje ha sido enviado',
						en:'Message has been send.'
					})
				]), msjContactLang({
					es:'Listo',
					en:'Done'
				})
			);
		});
	}
};
const msjContactLang = (obj) => {
	return obj[lang];
};