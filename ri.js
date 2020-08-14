"use strict";

// const docid_rx = new RegExp('^[0-9]{9,12}$');
// const phone_rx = new RegExp('^[0-9]{8}$');
var email_rx = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

var addEventListenerList = function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, !1);
  }
}; // const appendPreloader = (pl_txt) => {
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


var appendModal = function appendModal() {
  var modalTxt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var modalTittle = arguments.length > 1 ? arguments[1] : undefined;
  var modalFooter = arguments.length > 2 ? arguments[2] : undefined;
  var isFull = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var modCont = new Array();

  if (modalTittle != undefined) {
    modCont.push(createCustomElement('div', {
      'class': 'modal_header'
    }, [createCustomElement('h3', {}, [modalTittle])]));
  }

  modCont.push(createCustomElement('div', {
    'class': 'modal_body'
  }, [modalTxt]));

  if (modalFooter != undefined) {
    modCont.push(createCustomElement('div', {
      'class': 'modal_footer'
    }, [modalFooter]));
  }

  modCont.push(createCustomElement('a', {
    'href': '#',
    'class': 'modal_close'
  }, ['×']));
  var mdl = createCustomElement('div', {
    'class': 'modalAll'
  }, modCont);
  var blk = createCustomElement('div', {
    'id': 'modalDialog'
  }, [mdl]);
  blk.addEventListener('click', function (e) {
    if (e.target === blk) {
      removeModal();
    }
  });
  document.body.appendChild(blk);
  document.querySelector('.modal_close').addEventListener('click', removeModal);
};

var appendModalMasonry = function appendModalMasonry(modalTxt) {
  var mdl = createCustomElement('div', {
    style: 'width:90%;text-align:center;'
  }, [createCustomElement('a', {
    'href': '#',
    'class': 'modal_close'
  }, ['×']), modalTxt]);
  var blk = createCustomElement('div', {
    'id': 'modalDialog'
  }, [mdl]);
  blk.addEventListener('click', function (e) {
    if (e.target === blk) {
      removeModal();
    }
  });
  document.body.appendChild(blk);
  document.querySelector('.modal_close').addEventListener('click', removeModal);
};

var removeModal = function removeModal(eRM) {
  if (eRM) {
    eRM.preventDefault();
  }

  document.body.removeChild(document.getElementById('modalDialog'));
}; // https://github.com/escueladigital/EDui


var createCustomElement = function createCustomElement(element) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var customElement = document.createElement(element);

  if (children !== undefined) {
    children.forEach(function (el) {
      if (el.nodeType !== undefined) {
        if (el.nodeType === 1 || el.nodeType === 11) {
          customElement.appendChild(el);
        }
      } else {
        customElement.innerHTML += el;
      }
    });
  }

  addAttributes(customElement, attributes);
  return customElement;
};

var addAttributes = function addAttributes(element, attrObj) {
  for (var attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) {
      element.setAttribute(attr, attrObj[attr]);
    }
  }
};
"use strict";

var index = function index() {
  new Glide('.glide-slider', {
    autoplay: 7500
  }).mount();
  addEventListenerList(document.querySelectorAll('.masonry-item a'), 'click', openMasonryItem);
};

var openMasonryItem = function openMasonryItem(e) {
  e.preventDefault();

  switch (e.target.parentElement.dataset.type) {
    case 'vid':
      appendModalMasonry(createCustomElement('div', {
        "class": 'embed-responsive embed-responsive-16by9'
      }, [createCustomElement('iframe', {
        frameborder: '0',
        allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: 'allowfullscreen',
        src: 'https://www.youtube.com/embed/' + e.target.parentElement.dataset.src
      })]));
      break;

    case 'img':
    default:
      appendModalMasonry(createCustomElement('img', {
        src: e.target.parentElement.dataset.src,
        alt: '',
        "class": 'img-fluid'
      }, []));
      break;
  }
};
"use strict";

var toggleMenu = function toggleMenu() {
  document.getElementById('menu_btn').classList.toggle('opened');
  document.querySelector('header.main-header').classList.toggle('opened');
};
"use strict";

var validateMainForm = function validateMainForm(e) {
  e.preventDefault();
  var _m = [];

  if (document.getElementById('name_txt').value.length < 2) {
    _m.push(createCustomElement('li', {}, ['El nombre es requerido']));
  }

  if (!email_rx.test(document.getElementById('email_txt').value)) {
    _m.push(createCustomElement('li', {}, ['El correo es requerido y debe ser válido']));
  }

  if (document.getElementById('phone_txt').value.length < 6) {
    _m.push(createCustomElement('li', {}, ['El teléfono es requerido']));
  }

  if (document.getElementById('service_txt').value.length < 2) {
    _m.push(createCustomElement('li', {}, ['El servicio es requerido']));
  }

  if (document.getElementById('msj_txt').value.length < 2) {
    _m.push(createCustomElement('li', {}, ['El mensaje o comentario es requerido']));
  }

  if (_m.length != 0) {
    appendModal(createCustomElement('ul', {}, _m), 'Atención');
  } else {
    var _d = new FormData();

    _d.append('name_txt', document.getElementById('name_txt').value);

    _d.append('email_txt', document.getElementById('email_txt').value);

    _d.append('phone_txt', document.getElementById('phone_txt').value);

    _d.append('service_txt', document.getElementById('service_txt').value);

    _d.append('msj_txt', document.getElementById('msj_txt').value);

    fetch('/form/', {
      method: 'POST',
      body: _d
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
    });
  }
};
"use strict";

var WebPDecodeAndDraw = function WebPDecodeAndDraw(data) {
  var decoder = new WebPDecoder();
  var bitmap = decoder.WebPDecode(data, data.length);

  if (bitmap) {
    //Draw Image
    var output = ctx.createImageData(canvas.width, canvas.height);
    var biWidth = canvas.width;
    var outputData = output.data;

    for (var h = 0; h < canvas.height; h++) {
      for (var w = 0; w < canvas.width; w++) {
        outputData[0 + w * 4 + biWidth * 4 * h] = bitmap[0 + w * 4 + biWidth * 4 * h];
        outputData[1 + w * 4 + biWidth * 4 * h] = bitmap[1 + w * 4 + biWidth * 4 * h];
        outputData[2 + w * 4 + biWidth * 4 * h] = bitmap[2 + w * 4 + biWidth * 4 * h];
        outputData[3 + w * 4 + biWidth * 4 * h] = bitmap[3 + w * 4 + biWidth * 4 * h];
      }

      ;
    }

    ctx.putImageData(output, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    document.getElementById("dec").src = dataURL;
  }
};

var getImage = function getImage(img) {
  // Create an empty canvas element
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height; // Copy the image contents to the canvas

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  WebPDecodeAndDraw(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)['data']);
}; // document.querySelectorAll('img[src$=".webp"]')
'use strict'; //npm install --save-dev @babel/core @babel/cli @babel/preset-env

var lang = 'es';

var main = function main() {
  lang = document.getElementsByTagName('html')[0].getAttribute('lang');
  document.getElementById('menu_btn').addEventListener('click', toggleMenu, !1);
  var _cp = document.body.dataset.page;

  if (window[_cp] && typeof window[_cp] === 'function') {
    window[_cp]();
  }

  if (document.getElementById('mainForm')) {
    document.getElementById('mainForm').addEventListener('submit', validateMainForm, !1);
  }

  AOS.init();
};

document.addEventListener('DOMContentLoaded', main, !1);

//# sourceMappingURL=ri.js.map