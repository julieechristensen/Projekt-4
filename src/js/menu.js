const siteMenu = () => {

    // Get elements from DOM
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.site-menu')
    const bookButton = document.querySelector('.site-header__button')

    // Toggle menu
    const toggleMenu = () => {
        menu.classList.toggle('site-menu--visible')
        menuButton.classList.toggle('menu-button--close')
        bookButton.classList.toggle('site-header__button--menu-opened')
    }

    // create event
    menuButton.addEventListener('click', toggleMenu)

    console.log('menu')
}

siteMenu()