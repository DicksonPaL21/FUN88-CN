(() => {
  'use strict'
  
  /*<-- dir = global variable (config.js) -->*/
  
  var nav = {
    link: (i) => {
      var tmp   = this.list[i-1]
      var index = tmp.substring(0, tmp.indexOf('#'))
      var search  = index ? tmp.replace(index, '') : ''
      var link  = tmp.replace(search, '')
      
      return `${this.dir + link}.html${search}`
    }
  }
  
  var n = this.pageIndex
  
  var sidebar = `
    <nav id="sidebar">
      <div class="sidebar-content">
        <div class="sidebar-brand">
          <div class="row">
            <div class="col-12">
              <img src="${dir}img/icon/user-profile-64.png" alt="User Profile">
            </div>
            <div class="col-12">
              <label>约翰杜</label>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <ul>
                <li>
                  <span id="login-btn">
                    ${data.button[0]}
                  </span>
                </li>
                <li>
                  <span id="register-btn">
                    ${data.button[1]}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="menu">
          <ul class="nav flex-column">
            <li class="item ${(n == 1 ? 'active' : '')}">
              <a class="link btn" href="${nav.link(1)}">
                ${data.nav.main.list[0]}
              </a>
            </li>

            <li class="item ${(n >= 2 && n <= 4 ? 'active' : '')}">
              <a class="btn" href="javascript:void(0)" title="see more...">
                ${data.nav.main.list[1]}&nbsp;<sup>${data.nav.badges[1]}</sup>
              </a>
              <div class="smenu ${(n >= 2 && n <= 4 ? 'show' : '')}">
                <a class="link ${(n == 2 ? 'active' : '')}" href="${nav.link(2)}">
                  ${data.nav.sub.list[1][0]}
                </a>
                <a class="link ${(n == 3 ? 'active' : '')}" href="${nav.link(3)}">
                  ${data.nav.sub.list[1][1]}
                </a>
                <a class="link ${(n == 4 ? 'active' : '')}" href="${nav.link(4)}">
                  ${data.nav.sub.list[1][2]}
                </a>
              </div>
            </li>

            <li class="item ${(n == 5 ? 'active' : '')}">
              <a class="link btn" href="${nav.link(5)}">
                ${data.nav.main.list[2]}&nbsp;<sup>${data.nav.badges[2]}
              </a>
            </li>

            <li class="item ${(n >= 6 && n <= 12 ? 'active' : '')}">
              <a class="btn" href="javascript:void(0)" title="see more...">
                ${data.nav.main.list[3]}
              </a>
              <div class="smenu ${(n >= 6 && n <= 12 ? 'show' : '')}">
                <a class="link ${(n == 6 ? 'active' : '')}" href="${nav.link(6)}">
                  ${data.nav.sub.list[3][0]}
                </a>
                <a class="link ${(n == 7 ? 'active' : '')}" href="${nav.link(7)}">
                  ${data.nav.sub.list[3][1]}
                </a>
                <a class="link ${(n == 8 ? 'active' : '')}" href="${nav.link(8)}">
                  ${data.nav.sub.list[3][2]}
                </a>
                <a class="link ${(n == 9 ? 'active' : '')}" href="${nav.link(9)}">
                  ${data.nav.sub.list[3][3]}
                </a>
                <a class="link ${(n == 10 ? 'active' : '')}" href="${nav.link(10)}">
                  ${data.nav.sub.list[3][4]}
                </a>
                <a class="link ${(n == 11 ? 'active' : '')}" href="${nav.link(11)}">
                  ${data.nav.sub.list[3][5]}
                </a>
                <a class="link ${(n == 12 ? 'active' : '')}" href="${nav.link(12)}">
                  ${data.nav.sub.list[3][6]}
                </a>
              </div>
            </li>

            <li class="item ${(n >= 13 && n <= 14 ? 'active' : '')}">
              <a class="btn" href="javascript:void(0)" title="see more...">
                ${data.nav.main.list[4]}&nbsp;<sup>${data.nav.badges[4]}
              </a>
              <div class="smenu ${(n >= 13 && n <= 14 ? 'show' : '')}">
                <a class="link ${(n == 13 ? 'active' : '')}" href="${nav.link(13)}">
                  ${data.nav.sub.list[4][0]}
                </a>
                <a class="link ${(n == 14 ? 'active' : '')}" href="${nav.link(14)}">
                  ${data.nav.sub.list[4][1]}
                </a>
              </div>
            </li>

            <li class="item ${(n >= 15 && n <= 23 ? 'active' : '')}">
              <a class="btn" href="javascript:void(0)" title="see more...">
                ${data.nav.main.list[5]}&nbsp;<sup>${data.nav.badges[5]}
              </a>
              <div class="smenu ${(n >= 15 && n <= 23 ? 'show' : '')}">
                <a class="link ${(n == 15 ? 'active' : '')}" href="${nav.link(15)}">
                  ${data.nav.sub.list[5][0]}
                </a>
                <a class="link ${(n == 16 ? 'active' : '')}" href="${nav.link(16)}">
                  ${data.nav.sub.list[5][1]}
                </a>
                <a class="link ${(n == 17 ? 'active' : '')}" href="${nav.link(17)}">
                  ${data.nav.sub.list[5][2]}
                </a>
                <a class="link ${(n == 18 ? 'active' : '')}" href="${nav.link(18)}">
                  ${data.nav.sub.list[5][3]}
                </a>
                <a class="link ${(n == 19 ? 'active' : '')}" href="${nav.link(19)}">
                  ${data.nav.sub.list[5][4]}
                </a>
                <a class="link ${(n == 20 ? 'active' : '')}" href="${nav.link(20)}">
                  ${data.nav.sub.list[5][5]}
                </a>
                <a class="link ${(n == 21 ? 'active' : '')}" href="${nav.link(21)}">
                  ${data.nav.sub.list[5][6]}
                </a>
                <a class="link ${(n == 22 ? 'active' : '')}" href="${nav.link(22)}">
                  ${data.nav.sub.list[5][7]}
                </a>
                <a class="link ${(n == 23 ? 'active' : '')}" href="${nav.link(23)}">
                  ${data.nav.sub.list[5][8]}
                </a>
              </div>
            </li>

            <li class="item ${(n >= 24 && n <= 25 ? 'active' : '')}">
              <a class="btn" href="javascript:void(0)" title="see more...">
                ${data.nav.main.list[6]}&nbsp;<sup>${data.nav.badges[6]}
              </a>
              <div class="smenu ${(n >= 24 && n <= 25 ? 'show' : '')}">
                <a class="link ${(n == 24 ? 'active' : '')}" href="${nav.link(24)}" restricted>
                  ${data.nav.sub.list[6][0]}
                </a>
                <a class="link ${(n == 25 ? 'active' : '')}" href="${nav.link(25)}" restricted>
                  ${data.nav.sub.list[6][1]}
                </a>
              </div>
            </li>

            <li class="item ${(n >= 26 && n <= 37 ? 'active' : '')}">
              <a class="btn" href="javascript:void(0)" title="see more...">
                ${data.nav.main.list[7]}&nbsp;<sup>${data.nav.badges[7]}
              </a>
              <div class="smenu ${(n >= 26 && n <= 37 ? 'show' : '')}">
                <a class="link ${(n == 26 ? 'active' : '')}" href="${nav.link(26)}">
                  ${data.nav.sub.list[7][0]}
                </a>
                <a class="link ${(n == 27 ? 'active' : '')}" href="${nav.link(27)}">
                  ${data.nav.sub.list[7][1]}
                </a>
                <a class="link ${(n == 28 ? 'active' : '')}" href="${nav.link(28)}">
                  ${data.nav.sub.list[7][2]}
                </a>
                <a class="link ${(n == 29 ? 'active' : '')}" href="${nav.link(29)}">
                  ${data.nav.sub.list[7][3]}
                </a>
                <a class="link ${(n == 30 ? 'active' : '')}" href="${nav.link(30)}">
                  ${data.nav.sub.list[7][4]}
                </a>
                <a class="link ${(n == 31 ? 'active' : '')}" href="${nav.link(31)}">
                  ${data.nav.sub.list[7][5]}
                </a>
                <a class="link ${(n == 32 ? 'active' : '')}" href="${nav.link(32)}">
                  ${data.nav.sub.list[7][6]}
                </a>
                <a class="link ${(n == 33 ? 'active' : '')}" href="${nav.link(33)}">
                  ${data.nav.sub.list[7][7]}
                </a>
                <a class="link ${(n == 34 ? 'active' : '')}" href="${nav.link(34)}">
                  ${data.nav.sub.list[7][8]}
                </a>
                <a class="link ${(n == 35 ? 'active' : '')}" href="${nav.link(35)}">
                  ${data.nav.sub.list[7][9]}
                </a>
                <a class="link ${(n == 36 ? 'active' : '')}" href="${nav.link(36)}">
                  ${data.nav.sub.list[7][10]}
                </a>
                <a class="link ${(n == 37 ? 'active' : '')}" href="${nav.link(37)}">
                  ${data.nav.sub.list[7][11]}
                </a>
              </div>
            </li>

            <li class="item ${(n >= 38 && n <= 46 ? 'active' : '')}">
              <a class="btn" href="javascript:void(0)" title="see more...">
                ${data.nav.main.list[8]}
              </a>
              <div class="smenu ${(n >= 38 && n <= 46 ? 'show' : '')}">
                <a class="link ${(n == 38 ? 'active' : '')}" href="${nav.link(38)}">
                  ${data.nav.sub.list[8][0]}
                </a>
                <a class="link ${(n == 39 ? 'active' : '')}" href="${nav.link(39)}">
                  ${data.nav.sub.list[8][1]}
                </a>
                <a class="link ${(n == 40 ? 'active' : '')}" href="${nav.link(40)}">
                  ${data.nav.sub.list[8][2]}
                </a>
                <a class="link ${(n == 41 ? 'active' : '')}" href="${nav.link(41)}">
                  ${data.nav.sub.list[8][3]}
                </a>
                <a class="link ${(n == 42 ? 'active' : '')}" href="${nav.link(42)}">
                  ${data.nav.sub.list[8][4]}
                </a>
                <a class="link ${(n == 43 ? 'active' : '')}" href="${nav.link(43)}">
                  ${data.nav.sub.list[8][5]}
                </a>
                <a class="link ${(n == 44 ? 'active' : '')}" href="${nav.link(44)}">
                  ${data.nav.sub.list[8][6]}
                </a>
                <a class="link ${(n == 45 ? 'active' : '')}" href="${nav.link(45)}">
                  ${data.nav.sub.list[8][7]}
                </a>
                <a class="link ${(n == 46 ? 'active' : '')}" href="${nav.link(46)}">
                  ${data.nav.sub.list[8][8]}
                </a>
              </div>
            </li>

            <li class="item ${(n >= 47 && n <= 52 ? 'active' : '')}">
              <a class="btn" href="javascript:void(0)" title="see more...">
                ${data.nav.main.list[9]}
              </a>
              <div class="smenu ${(n >= 47 && n <= 52 ? 'show' : '')}">
                <a class="link ${(n == 47 ? 'active' : '')}" href="${nav.link(47)}">
                  ${data.nav.sub.list[9][0]}
                </a>
                <a class="link ${(n == 48 ? 'active' : '')}" href="${nav.link(48)}">
                  ${data.nav.sub.list[9][1]}
                </a>
                <a class="link ${(n == 49 ? 'active' : '')}" href="${nav.link(49)}">
                  ${data.nav.sub.list[9][2]}
                </a>
                <a class="link ${(n == 50 ? 'active' : '')}" href="${nav.link(50)}">
                  ${data.nav.sub.list[9][3]}
                </a>
                <a class="link ${(n == 51 ? 'active' : '')}" href="${nav.link(51)}">
                  ${data.nav.sub.list[9][4]}
                </a>
                <a class="link ${(n == 52 ? 'active' : '')}" href="${nav.link(52)}">
                  ${data.nav.sub.list[9][5]}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `

  $('body').prepend(sidebar)
  
  $('span#login-btn').click(() => location.assign(`${dir}login.html`))
  
  $('span#register-btn').click(() => location.assign(`${dir}register.html`))

  // Tab Control (discount.html)
  $('[href]').click((e) => {
    var url = $(e.currentTarget).attr('href')
    if (url.includes('.html#')) {
      location.assign(url)
      location.reload()
    }
  })
  // !Tab Control (discount.html)
  
  $('#sidebar .item').click((e) => {
    var child = $(e.currentTarget).children('.smenu')
    var show  = child.hasClass('show')
    
    $('#sidebar .smenu').each(i => $($('#sidebar .smenu')[i]).removeClass('show'))
    
    if (!show) child.addClass('show')
  })

  $('#sidebar-menu').click(() => {
    if ($('#sidebar-menu i').attr('class') === 'open-sidebar') {
      $('#sidebar-menu i').attr('class', 'close-sidebar')
      $('#sidebar-menu i').attr('title', 'Close')

      $('#sidebar').css({
        width: 'var(--sidebar-width)'
      })
    } else if ($('#sidebar-menu i').attr('class') === 'close-sidebar') {
      $('#sidebar-menu i').attr('class', 'open-sidebar')
      $('#sidebar-menu i').attr('title', 'Open')

      $('#sidebar').css({
        width: '0'
      })
    }
  })
})()