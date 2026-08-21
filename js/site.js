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
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      }).then(function (response) {
        // FormSubmit answers 200 even when it refuses the submission (e.g. the
        // form is not activated yet), so trust the payload, not the status code.
        return response.json().then(function (data) {
          return { ok: response.ok, data: data };
        }).catch(function () {
          return { ok: response.ok, data: null };
        });
      }).then(function (result) {
        var delivered = result.ok && (!result.data || String(result.data.success) === 'true');
        if (delivered) {
          form.reset();
          if (successMsg) { successMsg.hidden = false; successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        } else {
          if (errorMsg) { errorMsg.hidden = false; errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        }
      }).catch(function () {
        if (errorMsg) { errorMsg.hidden = false; errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        // Never strand a lead: if the relay refuses, hand them a prefilled
        // email with everything they already typed. Address is assembled here
        // rather than sitting in the HTML so scrapers don't harvest it.
        if (!delivered) {
          var link = form.querySelector('[data-mail-fallback]');
          if (link) {
            var d = Object.fromEntries(new FormData(form));
            var to = ['WadesTactical', 'gmail.com'].join('@');
            var body = [
              'Name: ' + (d['First Name'] || '') + ' ' + (d['Last Name'] || ''),
              'Phone: ' + (d['Phone'] || ''),
              'Email: ' + (d['email'] || ''),
              'Interested in: ' + (d['Interested In'] || ''),
              'Shooting experience: ' + (d['Shooting Experience'] || ''),
              'Needs a rental: ' + (d['Needs Rental'] || ''),
              '',
              (d['Message'] || '')
            ].join('\n');
            link.href = 'mailto:' + to
              + '?subject=' + encodeURIComponent('Seat request from wadestactical.com')
              + '&body=' + encodeURIComponent(body);
          }
        }
      }).finally(function () {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send it over'; }
      });
    });
  }
})();
