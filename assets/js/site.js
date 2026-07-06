
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.dataset.open = String(!open);
      document.body.classList.toggle('menu-open', !open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded','false'); nav.dataset.open='false'; document.body.classList.remove('menu-open');
    }));
  }
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const status = document.querySelector('[data-form-status]');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const button = form.querySelector('button[type="submit"]');
      button.disabled = true; button.textContent = 'Sending…';
      status.className='form-status'; status.textContent='';
      try {
        const response = await fetch(form.action, {method:'POST', body:new FormData(form), headers:{Accept:'application/json'}});
        if (!response.ok) throw new Error('Submission failed');
        form.reset();
        status.textContent='Thank you. Your note has been sent. I will review the context and respond directly.';
        status.classList.add('visible');
      } catch (err) {
        status.innerHTML='The note did not go through. Please email <a href="mailto:chandra@chandrakanojia.com">chandra@chandrakanojia.com</a>.';
        status.classList.add('visible','error');
      } finally {button.disabled=false;button.textContent='Send note';status.focus();}
    });
  }
})();
