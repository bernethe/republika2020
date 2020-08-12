// const docid_rx = new RegExp('^[0-9]{9,12}$');
// const phone_rx = new RegExp('^[0-9]{8}$');
const email_rx = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
const addEventListenerList = (list, event, fn) => {
	for (var i = 0, len = list.length; i < len; i++) {
		list[i].addEventListener(event, fn, !1);
	}
};
// const appendPreloader = (pl_txt) => {
// 	let pldiv = createCustomElement('div',{},[
// 		createCustomElement('div',{'class':'spinner_mc'}),
// 		createCustomElement('div',{'class':'status_sp_txt'},[pl_txt])
// 	]);
// 	let overall = createCustomElement('div',{'class':'modal-pl'},[pldiv]);
// 	document.body.appendChild(overall);
// };
// const removePreloader = (eRP) => {
// 	if(eRP) {
// 		eRP.preventDefault();
// 	}
// 	document.body.removeChild(document.querySelector('.modal-pl'));
// };
const appendModal = (modalTxt = '', modalTittle, modalFooter) => {
	let modCont = new Array();
	if(modalTittle != undefined) {
		modCont.push( createCustomElement('div',{'class':'modal_header'},[ createCustomElement('h3',{},[modalTittle]) ]) );
	}
	modCont.push( createCustomElement('div',{'class':'modal_body'},[modalTxt]) );
	if(modalFooter != undefined) {
		modCont.push( createCustomElement('div',{'class':'modal_footer'},[modalFooter]) );
	}
	modCont.push( createCustomElement('a',{'href':'#','class':'modal_close'},['×']) );
	let mdl = createCustomElement('div',{'class':'modalAll'},modCont);
	let blk = createCustomElement('div',{'id':'modalDialog'},[mdl]);
	blk.addEventListener('click', e => {
		if(e.target === blk) {
			removeModal();
		}
	});
	document.body.appendChild(blk);
	document.querySelector('.modal_close').addEventListener('click',removeModal);
};
const removeModal = (eRM) => {
	if(eRM) {
		eRM.preventDefault();
	}
	document.body.removeChild(document.getElementById('modalDialog'));
};
// https://github.com/escueladigital/EDui
const createCustomElement = (element,attributes={},children=[]) => {
	let customElement = document.createElement(element);
	if (children !== undefined) {
		children.forEach(el => {
			if (el.nodeType !== undefined) {
				if (el.nodeType === 1 || el.nodeType === 11) {
					customElement.appendChild(el);
				}
			} else {
				customElement.innerHTML += el;
			}
		});
	}
	addAttributes(customElement,attributes);
	return customElement;
};
const addAttributes = (element, attrObj) => {
	for (var attr in attrObj) {
		if (attrObj.hasOwnProperty(attr)) {
			element.setAttribute(attr,attrObj[attr]);
		}
	}
};