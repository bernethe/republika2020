"use strict";var email_rx=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,addEventListenerList=function(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d].addEventListener(b,c,!1)},appendModal=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length?arguments[1]:void 0,c=2<arguments.length?arguments[2]:void 0,d=!!(3<arguments.length&&arguments[3]!==void 0)&&arguments[3],e=[];b!=null&&e.push(createCustomElement("div",{class:"modal_header"},[createCustomElement("h3",{},[b])])),e.push(createCustomElement("div",{class:"modal_body"},[a])),c!=null&&e.push(createCustomElement("div",{class:"modal_footer"},[c])),e.push(createCustomElement("a",{href:"#",class:"modal_close"},["\xD7"]));var f=createCustomElement("div",{class:"modalAll"},e),g=createCustomElement("div",{id:"modalDialog"},[f]);g.addEventListener("click",function(a){a.target===g&&removeModal()}),document.body.appendChild(g),document.querySelector(".modal_close").addEventListener("click",removeModal)},appendModalMasonry=function(a){var b=createCustomElement("div",{style:"width:90%;text-align:center;"},[createCustomElement("a",{href:"#",class:"modal_close"},["\xD7"]),a]),c=createCustomElement("div",{id:"modalDialog"},[b]);c.addEventListener("click",function(a){a.target===c&&removeModal()}),document.body.appendChild(c),document.querySelector(".modal_close").addEventListener("click",removeModal)},removeModal=function(a){a&&a.preventDefault(),document.body.removeChild(document.getElementById("modalDialog"))},createCustomElement=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],d=document.createElement(a);return void 0!==c&&c.forEach(function(a){void 0===a.nodeType?d.innerHTML+=a:(1===a.nodeType||11===a.nodeType)&&d.appendChild(a)}),addAttributes(d,b),d},addAttributes=function(a,b){for(var c in b)b.hasOwnProperty(c)&&a.setAttribute(c,b[c])};var index=function(){new Glide(".glide-slider",{autoplay:7500}).mount(),addEventListenerList(document.querySelectorAll(".masonry-item a"),"click",openMasonryItem)},openMasonryItem=function(a){switch(a.preventDefault(),a.target.parentElement.dataset.type){case"vid":appendModalMasonry(createCustomElement("div",{class:"embed-responsive embed-responsive-16by9"},[createCustomElement("iframe",{frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen",src:"https://www.youtube.com/embed/"+a.target.parentElement.dataset.src})]));break;case"img":default:appendModalMasonry(createCustomElement("img",{src:a.target.parentElement.dataset.src,alt:"",class:"img-fluid"},[]));}};var toggleMenu=function(){document.getElementById("menu_btn").classList.toggle("opened"),document.querySelector("header.main-header").classList.toggle("opened")};var validateMainForm=function(a){a.preventDefault();var b=[];if(2>document.getElementById("name_txt").value.length&&b.push(createCustomElement("li",{},[msjContactLang({es:"El nombre es requerido",en:"Name is required"})])),email_rx.test(document.getElementById("email_txt").value)||b.push(createCustomElement("li",{},[msjContactLang({es:"El correo es requerido y debe ser v\xE1lido",en:"Email is required and most be valid"})])),6>document.getElementById("phone_txt").value.length&&b.push(createCustomElement("li",{},[msjContactLang({es:"El tel\xE9fono es requerido",en:"Phone is required"})])),2>document.getElementById("service_txt").value.length&&b.push(createCustomElement("li",{},[msjContactLang({es:"El servicio es requerido",en:"Service is required"})])),2>document.getElementById("msj_txt").value.length&&b.push(createCustomElement("li",{},[msjContactLang({es:"El mensaje o comentario es requerido",en:"Message or comments is required"})])),0!=b.length)appendModal(createCustomElement("ul",{},b),msjContactLang({es:"Atenci\xF3n",en:"Warning"}));else{var c=new FormData;c.append("name_txt",document.getElementById("name_txt").value),c.append("email_txt",document.getElementById("email_txt").value),c.append("phone_txt",document.getElementById("phone_txt").value),c.append("service_txt",document.getElementById("service_txt").value),c.append("msj_txt",document.getElementById("msj_txt").value),fetch("/form/",{method:"POST",body:c}).then(function(a){return a.json()}).then(function(){document.getElementById("name_txt").value="",document.getElementById("email_txt").value="",document.getElementById("phone_txt").value="",document.getElementById("service_txt").value="",document.getElementById("msj_txt").value="",appendModal(createCustomElement("ul",{},[msjContactLang({es:"El mensaje ha sido enviado",en:"Message has been send."})]),msjContactLang({es:"Listo",en:"Done"}))})}},msjContactLang=function(a){return a[lang]};var lang="es",main=function(){lang=document.getElementsByTagName("html")[0].getAttribute("lang"),document.getElementById("menu_btn").addEventListener("click",toggleMenu,!1);var a=document.body.dataset.page;window[a]&&"function"==typeof window[a]&&window[a](),document.getElementById("mainForm")&&document.getElementById("mainForm").addEventListener("submit",validateMainForm,!1),AOS.init()};document.addEventListener("DOMContentLoaded",main,!1);