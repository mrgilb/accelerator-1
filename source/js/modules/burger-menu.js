if (document.querySelector('.main-nav--header')) {
  const mainNav = document.querySelector('.main-nav--header');
  mainNav.classList.remove('main-nav--nojs');

  if (mainNav.querySelector('.logo__img')) {
    const logoImage = mainNav.querySelector('.logo__img');

    if (mainNav.querySelector('.main-nav__list')) {
      const navList = mainNav.querySelector('.main-nav__list');

      if (mainNav.querySelector('.burger-button')) {
        const burger = mainNav.querySelector('.burger-button');
        burger.classList.remove('burger-button--nojs');

        if (mainNav.querySelector('.burger-button__cross')) {
          const burgerIcon = mainNav.querySelector('.burger-button__cross');

          const onClickBurger = (event) => {
            event.preventDefault();
            mainNav.classList.toggle('main-nav--hidden');
            logoImage.classList.toggle('logo__img--active');
            navList.classList.toggle('main-nav__list--hidden');
            burger.classList.toggle('burger-button--active');
            burgerIcon.classList.toggle('burger-button__cross--active');
          };

          burger.addEventListener('click', onClickBurger);
        }
      }
    }
  }
}


