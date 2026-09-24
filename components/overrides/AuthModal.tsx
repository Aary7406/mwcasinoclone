'use client';

import { useState } from 'react';
import PopupPage from '../shell/PopupPage';
import { useAuthModal } from '../shell/AuthModalContext';

const CURRENCIES = [
  { code: 'BDT', flag: 'BD' },
  { code: 'VND', flag: 'VN' },
  { code: 'PHP', flag: 'PH' },
  { code: 'USDT', flag: 'US' },
  { code: 'NPR', flag: 'NP' },
  { code: 'MYR', flag: 'MY' },
  { code: 'PKR', flag: 'PK' },
  { code: 'INR', flag: 'IN' },
];

/**
 * Login / Sign up dialog. The real site puts every anonymous "play" click through this same
 * gate (confirmed by clicking a nav-dropdown game while logged out — it redirects here).
 * This is a static UI shell only: nothing here is sent anywhere, and no backend or account
 * system is connected — submitting shows an explicit "no backend" note rather than faking success.
 */
export default function AuthModal() {
  const { mode, openLogin, openSignup, close } = useAuthModal();
  const [showPw, setShowPw] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [notice, setNotice] = useState('');
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState(CURRENCIES[0]);

  const reset = () => { setUsername(''); setPassword(''); setPhone(''); setCode(''); setNotice(''); setShowPw(false); setCurrencyOpen(false); };
  const handleClose = () => { reset(); close(); };

  const pwChecks = {
    length: password.length >= 6 && password.length <= 20,
    alpha: /[a-zA-Z]/.test(password),
    number: /\d/.test(password),
  };

  const loginReady = username.trim().length >= 4 && password.length >= 6;
  const signupReady = username.trim().length >= 4 && Object.values(pwChecks).every(Boolean) && phone.trim().length > 0 && code.trim().length > 0;

  const submit = () => setNotice('This is a static frontend clone — no account system is connected, so nothing was submitted.');

  return (
    <PopupPage active={mode !== null} title={mode === 'signup' ? 'Sign up' : 'Login'} contentClassName="member-content new-login third-party-login" onClose={handleClose}>
      <div className="quick-login-wrapper">
        <div className="logo-box" style={{ backgroundImage: 'url(/assets/images/member-logo.png)' }}></div>

        {mode === 'signup' && (
          <div className="menu-box">
            <div className="input-group currency-number third-party-input-group-title">
              <label>Choose currency</label>
              <div className="input-wrap currency-wrap" style={{ position: 'relative' }}>
                <div className="currency-area-code">
                  <div className="lang-select">
                    <div className="button btn-select currency-list-area" onClick={() => setCurrencyOpen(v => !v)} style={{ cursor: 'pointer' }}>
                      <img alt={currency.flag} src={`/assets/images/flag/${currency.flag}.webp`} style={{ width: 20, height: 20, borderRadius: '50%', marginRight: 8 }} />
                      <span>{currency.code}</span>
                    </div>
                  </div>
                </div>
                {currencyOpen && (
                  <ul className="currency-code-list currency-list-area" style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 5, background: 'var(--content-bg, #281a70)', maxHeight: 220, overflowY: 'auto' }}>
                    {CURRENCIES.map(c => (
                      <li key={c.code} onClick={() => { setCurrency(c); setCurrencyOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', cursor: 'pointer' }}>
                        <img alt={c.flag} src={`/assets/images/flag/${c.flag}.webp`} style={{ width: 20, height: 20, borderRadius: '50%' }} />
                        <span className="currency-list-area">{c.code}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}

        <form className="ng-untouched ng-pristine ng-invalid" onSubmit={e => e.preventDefault()}>
          <div className="menu-box">
            <div className="input-group">
              <label htmlFor="userId">Username</label>
              <input
                className="input"
                name="userId"
                placeholder="4-16 Characters or Number"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value.slice(0, 16))}
              />
              {username && (
                <input className="clear" type="button" onClick={() => setUsername('')} style={{ maskImage: 'url(/assets/images/icon-set/icon-cross-type09.svg)' }} />
              )}
            </div>
            <div className="input-group password">
              <div
                className="eyes"
                onClick={() => setShowPw(v => !v)}
                style={{ maskImage: `url(/assets/images/icon-set/icon-eye-${showPw ? 'open' : 'close'}-type03.svg)`, cursor: 'pointer' }}
              ></div>
              <label htmlFor="password">Password</label>
              <input
                className="input"
                name="password"
                placeholder="6-20 characters and numbers"
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value.slice(0, 20))}
              />
              {password && (
                <input className="clear" type="button" onClick={() => setPassword('')} style={{ maskImage: 'url(/assets/images/icon-set/icon-cross-type09.svg)' }} />
              )}
            </div>

            {mode === 'signup' && (
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', fontSize: 12, opacity: 0.85, display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'left' }}>
                <li style={{ color: pwChecks.length ? '#40d0cb' : undefined }}>{pwChecks.length ? '✓' : '○'} Between 6~20 characters.</li>
                <li style={{ color: pwChecks.alpha ? '#40d0cb' : undefined }}>{pwChecks.alpha ? '✓' : '○'} At least one alphabet.</li>
                <li style={{ color: pwChecks.number ? '#40d0cb' : undefined }}>{pwChecks.number ? '✓' : '○'} At least one number. (Special characters, symbols are allowed)</li>
              </ul>
            )}

            {mode === 'signup' && (
              <div className="input-group" style={{ marginTop: 16 }}>
                <label>Phone Number</label>
                <div style={{ position: 'relative', width: '100%', height: 44 }}>
                  <span className="button btn-select" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: 6, padding: '0 10px', zIndex: 1 }}>
                    <img alt="BD" src="/assets/images/flag/BD.webp" style={{ width: 20, height: 20, borderRadius: '50%' }} />
                    +880
                  </span>
                  <input
                    placeholder="Enter your phone number"
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 12))}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', boxSizing: 'border-box', background: 'rgba(255,255,255,.06)', border: 'none', borderRadius: 4, color: '#fff', padding: '0 12px 0 90px', fontSize: 14 }}
                  />
                </div>
              </div>
            )}

            {mode === 'signup' && (
              <div className="input-group" style={{ marginTop: 16 }}>
                <label>Verification Code</label>
                <div style={{ position: 'relative', width: '100%', height: 44 }}>
                  <input
                    placeholder="Enter verification code"
                    type="text"
                    value={code}
                    onChange={e => setCode(e.target.value.slice(0, 6))}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', boxSizing: 'border-box', background: 'rgba(255,255,255,.06)', border: 'none', borderRadius: 4, color: '#fff', padding: '0 90px 0 12px', fontSize: 14 }}
                  />
                  <div
                    className={`button ${phone.trim() ? '' : 'btn-disabled'}`}
                    style={{ position: 'absolute', right: 4, top: 4, bottom: 4, padding: '0 14px', fontSize: 13, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', cursor: phone.trim() ? 'pointer' : undefined }}
                    onClick={() => phone.trim() && setNotice('No SMS gateway is connected in this clone — no code was actually sent.')}
                  >
                    <a>Send Code</a>
                  </div>
                </div>
              </div>
            )}

            {mode === 'login' && (
              <div className="login-info-box">
                <div className="forgetpassword-buttn">
                  <a onClick={e => { e.preventDefault(); setNotice('No account system is connected in this clone.'); }} style={{ cursor: 'pointer' }}>
                    Forgot password?
                  </a>
                </div>
              </div>
            )}
          </div>
        </form>

        {notice && <p style={{ color: '#ffd259', fontSize: 13, textAlign: 'center', padding: '0 16px' }}>{notice}</p>}

        <div className={`button ${(mode === 'signup' ? signupReady : loginReady) ? '' : 'btn-disabled'}`} onClick={() => (mode === 'signup' ? signupReady : loginReady) && submit()}>
          <a>{mode === 'signup' ? 'Sign up' : 'Login'}</a>
          <div></div>
        </div>

        <p className="button-tips">
          {mode === 'login' ? (
            <>
              <span>Do not have an account? </span>
              <a onClick={e => { e.preventDefault(); reset(); openSignup(); }} style={{ cursor: 'pointer' }}>Sign up</a>
            </>
          ) : (
            <>
              <span>Already have an account? </span>
              <a onClick={e => { e.preventDefault(); reset(); openLogin(); }} style={{ cursor: 'pointer' }}>Login</a>
            </>
          )}
        </p>
      </div>
    </PopupPage>
  );
}
