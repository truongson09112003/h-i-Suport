import {
    Test, API_LOGIN, LoginRegister, modal, OverlayModal
    , closeModal, inputRegister, inputLogin, noLogin, loginTrue,
    avatarPC, submitRegister
} from './main'


// handle API Login




var value = {};

LoginRegister.onclick = (e) => {
    modal.style.display = 'block'
}

OverlayModal.onclick = () => {
    modal.style.display = 'none'

}
closeModal.onclick = () => {
    modal.style.display = 'none'

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


        const valueLocal = JSON.parse(localStorage.getItem('value'))

        avatarPC.src = `${valueLocal.img}`
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

    noLogin.style.display = LocalNoLogin
    loginTrue.style.display = LocalLoginTrue
}
