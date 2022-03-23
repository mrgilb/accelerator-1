import {isEscapeKey} from '../utils/isEscape.js';
import {checkNodeOfParrentByIdAndRemove} from '../utils/checkNodeOfParrentAndRemove.js';

if (document.querySelector('.feedback__form')) {
  const form = document.querySelector('.feedback__form').cloneNode(true);
  form.style.position = 'fixed';
  form.style.top = 'calc(50% - 230px)';
  form.style.right = '0';
  form.style.left = '0';
  form.style.margin = '0 auto';

  if (form.querySelector('.close-button')) {
    const buttonClose = form.querySelector('.close-button');

    if (document.querySelector('.catalog__list')) {
      const listProduct = document.querySelector('.catalog__list');

      if (document.querySelector('.body-page')) {
        const body = document.querySelector('.body-page');

        const onClickKeydown = (evt) => {
          if (isEscapeKey(evt)) {
            checkNodeOfParrentByIdAndRemove(form, body);
            body.style.overflow = 'auto';
          }
        };


        const onClickLinkListProduct = (evt) => {
          if (evt.target.matches('.catalog__link')) {
            evt.preventDefault();
            form.classList.add('feedback__form--shadow');
            body.style.overflow = 'hidden';
            buttonClose.classList.remove('close-button--hidden');
            body.appendChild(form);
          }
        };

        const onClickCloseForm = (evt) => {
          evt.preventDefault();
          if (evt.target.matches('.close-button') || evt.target.matches('.close-button__cross')) {
            checkNodeOfParrentByIdAndRemove(form, body);
            body.style.overflow = 'auto';
          }
        };

        listProduct.addEventListener('click', onClickLinkListProduct);
        document.addEventListener('keydown', onClickKeydown);
        buttonClose.addEventListener('click', onClickCloseForm);
      }
    }

  }
}

