// xử lí khi nhập tim kiếm

const InputSearch = document.querySelector('.input')
const searchBtn = document.querySelector('.search-btn')

InputSearch.oninput = function (e) {
    if (e.target.value.length > 0) {
        setTimeout(function () {
            searchBtn.innerHTML = `
                <svg
                    class="loading-search-api"
                    width="24px"
                    height="24px"
                    viewBox="0 0 48 48"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    fillrule="evenodd"
                    cliprule="evenodd"
                    d="M24 12.5C17.6487 12.5 12.5 17.6487 12.5 24C12.5 30.3513 17.6487 35.5 24 35.5C26.8172 35.5 29.3919 34.4902 31.3919 32.8101C32.4491 31.9219 34.026 32.059 34.9142 33.1161C35.8023 34.1733 35.6653 35.7503 34.6081 36.6384C31.741 39.0471 28.0369 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 25.3807 39.3807 26.5 38 26.5C36.6193 26.5 35.5 25.3807 35.5 24C35.5 17.6487 30.3513 12.5 24 12.5Z"
                    ></path>
                </svg>
            `
        }, 1000)
    } else {
        searchBtn.innerHTML = `
             <i class="search-btn-icon fa-solid fa-magnifying-glass"></i>
        `
    }
}

// handle Nav mobile dat ten bien theo cameKey

const iconNav = document.querySelector('.nav-mobile-icon')
const navMobile = document.querySelector('.nav-mobile-list')
const closeBtnMobile = document.querySelector('.close-nav-mobile')
const overLayMoblile = document.querySelector('.overLay-mobile')
const cartMobile = document.querySelector('.cart-mobile')
const cartListMobile = document.querySelector('.cart-mobile-shop')
const overlayMobileCart = document.querySelector('.overlay-mobile-cart')
const closeMobileCart = document.querySelector('.close-nav-mobile-cart')

iconNav.onclick = () => {
    navMobile.style.display = 'block'
    overLayMoblile.style.display = 'block'
}

closeBtnMobile.onclick = () => {
    navMobile.style.display = 'none'
    overLayMoblile.style.display = 'none'
}

overLayMoblile.onclick = () => {
    navMobile.style.display = 'none'
    overLayMoblile.style.display = 'none'
}


//handle cart mobile

cartMobile.onclick = () => {
    cartListMobile.style.display = 'block'
    overlayMobileCart.style.display = 'block'
}

closeMobileCart.onclick = () => {
    cartListMobile.style.display = 'none'
    overlayMobileCart.style.display = 'none'
}

overlayMobileCart.onclick = () => {
    console.log('Test')
    cartListMobile.style.display = 'none'
    overlayMobileCart.style.display = 'none'
}

// ngăn chạn hiện tượng nổi bọt

navMobile.onclick = (e) => {
    e.stopPropagation()
}

cartListMobile.onclick = (e) => {
    e.stopPropagation()
}
