(() => {
  'use strict'
  
  $('[restricted]').on('click', () => {
    if (confirm('Sorry, you could\'nt access to this page. Please login your account to continue.'))
      location.assign(`${dir}login.html`)
    return false;
  })
  
  let rePosToTopBtn = () => {
    $('#toTop').css({
      right: `calc(50% - ${($('body').width() / 2) - 15}px)`
    })
  }
  
  rePosToTopBtn()
  
  $(window).on('resize', () => rePosToTopBtn())

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('header').css({
        '-moz-box-shadow': '0 4px 4px rgba(0, 0, 0, 0.4)',
        '-webkit-box-shadow': '0 4px 4px rgba(0, 0, 0, 0.4)',
        'box-shadow': '0 4px 4px rgba(0, 0, 0, 0.4)'
      })
    } else {
      $('header').css({
        '-moz-box-shadow': 'none',
        '-webkit-box-shadow': 'none',
        'box-shadow': 'none'
      })
    }

    var toTopBtn = $('#toTop')
    if ($(window).scrollTop() > 310)
      toTopBtn.css({
        display: 'block'
      })
    else toTopBtn.css({
      display: 'none'
    })

    toTopBtn.click(() => {
      try {
        window.scrollTo({
          'behavior': 'smooth',
          'left': 0,
          'top': 0
        })
      } catch (err) {
        scroll(0, 0)
      }
    })
  })
  
  $($('section')[0]).css({
    'margin-top': `${$('header').height()}px`
  })

  $('span.menu-back').click(() => {
    var loc = window.location.href
    
    if (/forgot/.test(loc))
      location.assign('login.html')
    else if (/verify/.test(loc))
      location.assign('forgot.html')
    else if (/reset/.test(loc))
      location.assign('verify.html')
    else
      location.assign(sessionStorage.getItem('prevUrl') || 'index.html')
  })
  
  function triggerFocus(element) {
    var eventType = "onfocusin" in element ? "focusin" : "focus",
      bubbles = "onfocusin" in element,
      event;

    if ("createEvent" in document) {
      event = document.createEvent("Event");
      event.initEvent(eventType, bubbles, true);
    } else if ("Event" in window) {
      event = new Event(eventType, {
        bubbles: bubbles,
        cancelable: true
      });
    }

    element.focus();
    element.dispatchEvent(event);
  }
})()