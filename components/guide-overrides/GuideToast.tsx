'use client';

import { useState } from 'react';

/** "Welcome to our Info Centre" toast shown on first paint of any guide page. */
export default function GuideToast() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="toast-container bottom-0 end-0 p-3 position-fixed bottom-0 start-50 translate-middle-x">
      <div className="fade toast text-white border-secondary shadow-lg bg-dark show" aria-atomic="true" aria-live="assertive" role="alert">
        <div className="toast-header">
          <strong className="me-auto text-center w-100">Welcome to our Info Centre</strong>
          <button className="btn-close" aria-label="Close" type="button" onClick={() => setOpen(false)}></button>
        </div>
        <div className="text-center toast-body">Thanks for visiting our site!</div>
      </div>
    </div>
  );
}
