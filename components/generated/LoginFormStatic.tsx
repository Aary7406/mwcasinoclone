export default function LoginFormStatic() {
  return (
    <div className="ng-c-500939201 quick-login-wrapper">
      <div className="ng-c-500939201 logo-box" style={{"backgroundImage":"url(/assets/images/member-logo.png)"}}></div>
      <form className="ng-c-500939201 ng-untouched ng-pristine ng-invalid" noValidate>
        <div className="ng-c-500939201 menu-box">
          <div className="ng-c-500939201 input-group">
            <label className="ng-c-500939201" htmlFor="userId">
              Username
            </label>
            <input className="ng-c-500939201 input ng-untouched ng-pristine ng-invalid" name="userId" placeholder="4-16 Characters or Number" type="text" />
            <input className="ng-c-500939201 clear" style={{"maskImage":"url(/assets/images/icon-set/icon-cross-type09.svg)"}} type="button" />
          </div>
          <div className="ng-c-500939201 input-group password">
            <div className="ng-c-500939201 eyes" style={{"maskImage":"url(/assets/images/icon-set/icon-eye-close-type03.svg)"}}></div>
            <label className="ng-c-500939201" htmlFor="password">
              Password
            </label>
            <input className="ng-c-500939201 input ng-untouched ng-pristine ng-invalid" name="password" placeholder="6-20 characters and numbers" type="password" />
            <input className="ng-c-500939201 clear" style={{"maskImage":"url(/assets/images/icon-set/icon-cross-type09.svg)"}} type="button" />
          </div>
          <div className="ng-c-500939201 login-info-box">
            <div className="ng-c-500939201 forgetpassword-buttn">
              <a className="ng-c-500939201" href="/bd/en/forgot-password(popup:account-login-quick)">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </form>
      <div className="ng-c-500939201 button btn-disabled">
        <a className="ng-c-500939201">
          Login
        </a>
        <div className="ng-c-500939201"></div>
      </div>
      <p className="ng-c-500939201 button-tips">
        <span className="ng-c-500939201">
          Do not have an account?
        </span>
        <a className="ng-c-500939201" href="/bd/en/new-register-entry(popup:account-login-quick)">
          Sign up
        </a>
      </p>
    </div>
  );
}
