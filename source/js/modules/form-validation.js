const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

export const validationPhone = (evt) => {
  const value = evt.target.value;

  if (!regex.test(value)) {
    evt.target.setCustomValidity('Нужно ввести номер телефона в формате : +79999999999 или 9999999999 или 89999999999');
  }
  if (regex.test(value)) {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
};

if (document.getElementById('telephone')) {
  const phoneInput = document.getElementById('telephone');

  phoneInput.addEventListener('input', validationPhone, {passive: true});

}
