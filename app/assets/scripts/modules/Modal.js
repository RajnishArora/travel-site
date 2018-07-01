import $ from 'jquery';

class Modal{
	constructor(){
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events(){
		//clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		//clicking the closw modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// pushes ANY key
		$(document).keyup(this.keyPressHandler.bind(this));


	}

	keyPressHandler(e){
		if(e.keyCode == 27){
			this.closeModal();
		}
	}

	openModal(){
		
		$(".modal").addClass("modal--is-visible");

		//this.modal.addClass("modal--is-visible");  
		//the above is not working check later
		return false; // this is needed so that if view is below then browser takes to top instead of opening link
	}

	closeModal(){
		$(".modal").removeClass("modal--is-visible");		
		//this.modal.removeClass("modal--is-visible");
		//the above is not working check later
	}


}

export default Modal;