
(function(){
 const btn=document.querySelector('.menu-toggle'); const nav=document.getElementById('site-nav');
 if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));})}
 const form=document.getElementById('contact-form');
 if(form){
  const p=new URLSearchParams(location.search);
  const set=(id,v)=>{const el=document.getElementById(id);if(el)el.value=v||''};
  set('page_url',location.href);set('document_title',document.title);set('referrer',document.referrer);set('utm_source',p.get('utm_source'));set('utm_medium',p.get('utm_medium'));set('utm_campaign',p.get('utm_campaign'));set('utm_content',p.get('utm_content'));set('submitted_at',new Date().toISOString());
  form.addEventListener('submit',async e=>{
   if(location.protocol==='file:'){e.preventDefault();document.getElementById('form-status').textContent='The form is enabled on the live website. The preview is working as intended.';return;}
   e.preventDefault(); const status=document.getElementById('form-status'); const button=form.querySelector('button[type=submit]');
   if(!form.reportValidity()) return; button.disabled=true;button.textContent='Sending…';status.textContent='';
   try{const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(res.ok){form.reset();status.textContent='Thank you. Your note has been sent directly to Chandra.';}else{status.textContent='The note could not be sent. Please use the email link on this page.';}}catch(err){status.textContent='The note could not be sent. Please use the email link on this page.';}finally{button.disabled=false;button.textContent='Send note';}
  });
 }
})();
