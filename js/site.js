/* Wade's Tactical — nav + reveal */
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  var rv = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) {
    rv.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  rv.forEach(function (el) { io.observe(el); });

  var form = document.querySelector('form[data-seat-form]');
  if (form) {
    var successMsg = form.querySelector('.form-success');
    var errorMsg = form.querySelector('.form-error');
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errorMsg) errorMsg.hidden = true;
      if (successMsg) successMsg.hidden = true;
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending...'; }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          if (successMsg) { successMsg.hidden = false; successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        } else {
          if (errorMsg) { errorMsg.hidden = false; errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        }
      }).catch(function () {
        if (errorMsg) { errorMsg.hidden = false; errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      }).finally(function () {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send it over'; }
      });
    });
  }
})();
