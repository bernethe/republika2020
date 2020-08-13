const index = () => {
	new Glide('.glide-slider', {
	autoplay: 7500
	}).mount();

	addEventListenerList(document.querySelectorAll('.masonry-item a'),'click', openMasonryItem);
};

const openMasonryItem = (e) => {
	e.preventDefault();
	switch(e.target.parentElement.dataset.type) {
		case 'vid':
			appendModalMasonry(
					createCustomElement('div', {class:'embed-responsive embed-responsive-16by9'}, [
					createCustomElement('iframe', {
						frameborder:'0',
						allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
						allowfullscreen: 'allowfullscreen',
						src: 'https://www.youtube.com/embed/'+e.target.parentElement.dataset.src
					})
				])
			);
			break;
		case 'img':
		default:
			appendModalMasonry( createCustomElement('img',{src:e.target.parentElement.dataset.src, alt:'', class:'img-fluid'},[]) );
			break;
	}
}
