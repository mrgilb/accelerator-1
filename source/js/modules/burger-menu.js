if (document.querySelector('.main-nav--header')) {
  const mainNav = document.querySelector('.main-nav--header');
  mainNav.classList.remove('main-nav--nojs');
  mainNav.classList.add('main-nav--hidden');


  if (document.querySelector('.body-page')) {
    const body = document.querySelector('.body-page');

    if (document.querySelector('.shading')) {
      const shadow = document.querySelector('.shading');

      if (document.querySelector('.logo')) {
        const logoContainer = document.querySelector('.logo');

        if (mainNav.querySelector('.logo__img')) {
          const logoImage = mainNav.querySelector('.logo__img');
          logoImage.classList.remove('logo__img--active');

          if (mainNav.querySelector('.main-nav__list')) {
            const navList = mainNav.querySelector('.main-nav__list');
            navList.classList.add('main-nav__list--hidden');

            if (mainNav.querySelector('.burger-button')) {
              const burger = mainNav.querySelector('.burger-button');
              burger.classList.remove('burger-button--nojs');
              burger.classList.remove('burger-button--active');

              if (mainNav.querySelector('.burger-button__cross')) {
                const burgerIcon = mainNav.querySelector('.burger-button__cross');
                burgerIcon.classList.remove('burger-button__cross--active');

                const onClickOverlayClosePopup = (event) => {
                  const composedPath = event.composedPath().includes(mainNav);
                  if (!composedPath) {
                    if (!mainNav.classList.contains('main-nav--hidden')) {
                      switchingMenu();
                    }
                  }
                };

                const switchingMenu = () => {
                  mainNav.classList.toggle('main-nav--hidden');
                  logoImage.classList.toggle('logo__img--active');
                  navList.classList.toggle('main-nav__list--hidden');
                  burger.classList.toggle('burger-button--active');
                  burgerIcon.classList.toggle('burger-button__cross--active');
                  logoContainer.classList.toggle('logo--active');
                  if (window.screen.width < 768) {
                    shadow.classList.toggle('shading--active');
                    body.classList.toggle('body-page--hidden-overflow');
                  }
                };

                const onClickBurger = (event) => {
                  event.preventDefault();
                  switchingMenu();
                };

                burger.addEventListener('click', onClickBurger);

                const onClickNaavItem = (evt) => {
                  if (evt.target.matches('.main-nav__link')) {
                    switchingMenu();
                  }
                };

                navList.addEventListener('click', onClickNaavItem);
                document.addEventListener('click', onClickOverlayClosePopup);
              }
            }
          }
        }

      }


    }

  }
}
