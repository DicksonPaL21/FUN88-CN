(() => {
  'use strict'
  
  this.isMobile = /iPhone|android|hpwos/i.test(navigator.userAgent)
  
  $(document.documentElement).css({
    '--max-width': !isMobile ? 'var(--breakpoint-sm)' : 'auto'
  })

  var loc = window.location.href
  if (!/register|login|forgot|verify|reset/.test(loc)) {
    sessionStorage.setItem('prevUrl', loc)
  }
  
  this.list = [
    'index',                    // 1
    'lottery',                  // 2
    'sabah',                    // 3
    'matrix',                   // 4
    'esport',                   // 5
    'livecasino#AG',            // 6
    'livecasino#EB',            // 7
    'livecasino#SA',            // 8
    'livecasino#GD',            // 9
    'livecasino#SB',            // 10
    'livecasino#AB',            // 11
    'livecasino#NL',            // 12
    'p2p',                      // 13
    'p2p',                      // 14
    'slot#NET',                 // 15
    'slot#MG',                  // 16
    'slot#PP',                  // 17
    'slot#PT',                  // 18
    'slot#SW',                  // 19
    'slot#CQ9',                 // 20
    'slot#SG',                  // 21
    'slot#BSG',                 // 22
    'slot#RT',                  // 23
    '###',                      // 24
    '###',                      // 25
    'dailygift',                // 26
    'backwater',                // 27
    'discount01',               // 28
    'discount02',               // 29
    'discount03',               // 30
    'discount04',               // 31
    'discount05',               // 32
    'discount06',               // 33
    'discount07',               // 34
    'discount08',               // 35
    'discount09',               // 36
    'discount10',               // 37
    'newmember',                // 38
    'accountinfo',              // 39
    'fundinginfo',              // 40
    'promotion',                // 41
    'bettingguide',             // 42
    'reward',                   // 43
    'policyresponsiblegaming',  // 44
    'company',                  // 45
    'phoneinfo',                // 46
    'refer',                    // 47
    'club',                     // 48
    'vip',                      // 49
    '###',                      // 50
    'download',                 // 51
    'help',                     // 52
    'login',                    // 53
    'register',                 // 54
    'forgot',                   // 55
    'verify',                   // 56
    'reset',                    // 57
    'discount'                  // 58
  ]
  
  var root = []
  list.forEach((e) => {
    e = e.split('/')
    e = e.slice(0, e.length > 1 ? -1 : undefined)
    e = e.toString().replace(',', '/')
    root.push(e)
  })

  var loc = window.location.href.toString().replace('.html', '')
  var val = RegExp(root.join('|')).exec(loc)
  var len = loc.substr(loc.indexOf(val[0])).split('/').length - 1

  this.pageIndex = root.indexOf(val[0]) + 1 // page number
  this.dir = '' // top-level directory

//  for (var i = 0; i < len; i++) {
//    this.dir += '../' // Numbers of top-level directory
//  }
  
  this.data  = this.locale
})()