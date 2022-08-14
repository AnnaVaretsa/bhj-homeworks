'use strict';

class Modals {
  constructor(modalClassName) {
    this.state = [...document.querySelectorAll(modalClassName)];
  }

  showModal(id) {
    const modal = this.findModal(id);
    this.closeAllModals();
    modal.classList.add('modal_active');
    this.subscriber(modal, true);
  }

  closeAllModals() {
    this.state.forEach((obj) => {
      if (obj.classList.contains('modal_active')) {
        obj.classList.remove('modal_active');
        this.subscriber(obj, false);
      }
    });
  }

  subscriber(obj, key) {
    if (key) {
      obj.onclick = (e) => {
        if (e.target.classList.contains('modal__close')) {
          this.closeAllModals();
        }
        if (e.target.classList.contains('show-success')) {
          e.stopPropagation();
          this.showModal('modal_success');
        }
      };
    } else {
      obj.onclick = null;
    }
  }

  findModal(id) {
    return this.state.find((obj) => obj.id === id);
  }
}

const modals = new Modals('.modal');

modals.showModal('modal_main');