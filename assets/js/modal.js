function Modal() {
    return `
        <div class="overlay-modal"></div>
        <div class="container-modal">
            <div class="close-modal">X</div>
            <div class="register">
            <div class="modal-width">
                <h1 class="Text-modal">Đăng Ký</h1>
                <div class="parents-modal">
                <label for="rigister-TK" class="label-modal"
                    >Tên tài khoản hoặc đia chỉ gmail *</label
                >
                <input
                    type="text"
                    id="rigister-TK"
                    class="input-modal-register"
                    placeholder="Vui lòng nhập email của bạn"
                />
                </div>
                <div class="parents-modal">
                <label for="Righister-pass" class="label-modal">Mật khẩu *</label>
                <input
                    type="password"
                    id="Righister-pass"
                    class="input-modal-register"
                    placeholder="Vui lòng nhập mật khâu của bạn"
                />
                </div>
                <div class="status-modal">
                <button class="submit">Đăng Nhập</button>
                <input type="checkbox" class="check-save" />
                <h3 class="text-check-save">Ghi nhớ mật khẩu</h3>
                </div>
                <h3 class="text-not-pass">Quên mật khẩu?</h3>
            </div>
            </div>
            <div class="login">
            <div class="modal-width">
                <h1 class="Text-modal">Đăng Nhập</h1>
                <div class="parents-modal">
                <label for="login-modal" class="label-modal"
                    >Tên tài khoản *</label
                >
                <input
                    type="text"
                    class="input-modal-login input-modal-register"
                    id="login-modal"
                    placeholder="Vui lòng nhập email của bạn"
                />
                </div>
                <div class="parents-modal">
                <label for="email-modal" class="label-modal"
                    >Địa chỉ email *</label
                >
                <input
                    type="email"
                    class="input-modal-login input-modal-register"
                    id="email-modal"
                    placeholder="Vui lòng nhập email của bạn"
                />
                </div>
                <div class="parents-modal">
                <label for="login-modal-pass" class="label-modal"
                    >Mật khẩu *</label
                >
                <input
                    type="password"
                    class="input-modal-login input-modal-register"
                    id="login-modal-pass"
                    placeholder="Vui lòng nhập email của bạn"
                />
                </div>
                <button class="subit-login submit">Đăng Ký</button>
            </div>
            </div>
      </div>
    `
}

export default Modal;