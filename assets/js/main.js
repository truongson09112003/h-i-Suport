const root = document.querySelector('#root')


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
    cartListMobile.style.display = 'none'
}

// handle modal mobile
const LoginMobileBtn = document.querySelector('.nav-mobile-list-item-register-login')

LoginMobileBtn.onclick = () => {
    navMobile.style.display = 'none'
    modal.style.display = 'block'
}

//handle cart mobile

cartMobile.onclick = () => {
    cartListMobile.style.display = 'block'
    overLayMoblile.style.display = 'block'
}

closeMobileCart.onclick = () => {
    cartListMobile.style.display = 'none'
    overLayMoblile.style.display = 'none'
    overlayMobileCart.style.display = 'none'
}


// ngăn chạn hiện tượng nổi bọt

navMobile.onclick = (e) => {
    e.stopPropagation()
}

cartListMobile.onclick = (e) => {
    e.stopPropagation()
}




// handle API Login

const Test = document.querySelector('.nav-mobile-list-item-hover--test')
const API_LOGIN = 'https://api-write-by-truongson.herokuapp.com/posts'
const LoginRegister = document.querySelector('.heading-list__item-click')
const modal = document.querySelector('.modal')
const OverlayModal = document.querySelector('.overlay-modal')
const closeModal = document.querySelector('.close-modal')
const inputRegister = document.querySelector('.input-modal-register-1')
const inputLogin = document.querySelector('.input-modal-register-login')
const noLogin = document.querySelector('.heading-list__item-no-login')
const loginTrue = document.querySelector('.login-true')
const avatarPC = document.querySelector('.avatar-PC')
const submitRegister = document.querySelector('.submit-Register')

//mobile 
const MobileNoLogin = document.querySelector('.mobile-no-login')
const MobileTrueLogin = document.querySelector('.nav-mobile-list-item-mobile-true-login')
const avatarMobile = document.querySelector('.img-avatar-mobile')
const fullNameMobileModal = document.querySelector('.fullName-mobile')
const addRessMobileModal = document.querySelector('.address-mobile')

var value = {};

LoginRegister.onclick = (e) => {
    modal.style.display = 'block'
}

OverlayModal.onclick = () => {
    modal.style.display = 'none'
    overLayMoblile.style.display = 'none'
}
closeModal.onclick = () => {
    modal.style.display = 'none'
    overLayMoblile.style.display = 'none'
}

//handle input login
let isinputRegister = false;
let isinputLogin = false;



fetch(API_LOGIN)
    .then(response => response.json())
    .then(response => {
        const users = response.map(user => {
            return user
        })

        inputRegister.onchange = (e) => {
            for (let i = 0; i < users.length; i++) {
                if (e.target.value === users[i].useraccount) {
                    value = users[i]
                    localStorage.setItem('value', JSON.stringify(value))
                    isinputRegister = !isinputRegister;
                    localStorage.setItem('isinputRegister', true)
                    break;
                } else {
                    localStorage.setItem('isinputRegister', false)
                }
            }
        }

        inputLogin.onchange = (e) => {
            if (e.target.value === value.password) {
                isinputLogin = !isinputLogin;
                localStorage.setItem('isinputLogin', true)
            } else {
                localStorage.setItem('isinputLogin', false)
            }
        }

    })

let save1;
let save2;


submitRegister.onclick = () => {

    const localIsRegister = JSON.parse(localStorage.getItem('isinputRegister'))
    const localIsLogin = JSON.parse(localStorage.getItem('isinputLogin'))



    console.log(localIsRegister)

    if (localIsRegister && localIsLogin) {

        inputRegister.value = ''
        inputLogin.value = ''
        overLayMoblile.style.display = 'none'
        modal.style.display = 'none'

        save1 = localIsRegister
        save2 = localIsLogin

        localStorage.setItem('save1', localIsRegister)
        localStorage.setItem('save2', localIsLogin)

        localStorage.setItem('noLogin', JSON.stringify('none'))
        localStorage.setItem('loginTrue', JSON.stringify('block'))


        const LocalNoLogin = JSON.parse(localStorage.getItem('noLogin'))
        const LocalLoginTrue = JSON.parse(localStorage.getItem('loginTrue'))

        noLogin.style.display = LocalNoLogin
        loginTrue.style.display = LocalLoginTrue

        MobileNoLogin.style.display = LocalNoLogin
        MobileTrueLogin.style.display = LocalLoginTrue


        const valueLocal = JSON.parse(localStorage.getItem('value'))

        avatarPC.src = `${valueLocal.img}`
        avatarMobile.src = `${valueLocal.img}`
    } else {
        localStorage.setItem('noLogin', JSON.stringify('block'))
        localStorage.setItem('loginTrue', JSON.stringify('none'))
    }
}

const LocalSave1 = JSON.parse(localStorage.getItem('save1'))
const LocalSave2 = JSON.parse(localStorage.getItem('save2'))


if (LocalSave1 && LocalSave2) {

    const LocalNoLogin = JSON.parse(localStorage.getItem('noLogin'))
    const LocalLoginTrue = JSON.parse(localStorage.getItem('loginTrue'))

    const valueLocal = JSON.parse(localStorage.getItem('value'))

    avatarPC.src = `${valueLocal.img}`
    avatarMobile.src = `${valueLocal.img}`

    noLogin.style.display = LocalNoLogin
    loginTrue.style.display = LocalLoginTrue

    MobileNoLogin.style.display = LocalNoLogin
    MobileTrueLogin.style.display = LocalLoginTrue

    const valueLocal2 = JSON.parse(localStorage.getItem('value'))
    fullNameMobileModal.innerText = valueLocal2.fullName
    addRessMobileModal.innerText = valueLocal2.addRess
}