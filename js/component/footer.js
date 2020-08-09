(() => {
  'use strict'
  
  var nav = {
    link: (i) => {
      switch(i) {
        // column 1
        case 1:   return `${this.dir}register.html`
        case 2:   return `${this.dir}discount.html#all`
        case 3:   return `${this.dir}poker/exchange/problem.html`
        case 4:   return `#`
        case 5:   return `${this.dir}#partner`
        
        // column 2
        case 6:   return `#6`
        case 7:   return `#7`
        case 8:   return `#8`
        case 9:   return `#9`
        case 10:  return `#10`
        case 11:  return `#11`
        case 12:  return `#12`
        
        // column 3
        case 13:  return `#13`
        case 14:  return `#14`
        case 15:  return `${this.dir}sabah.html`
        case 16:  return `${this.dir}poker/tutorials/rule.html`
        case 17:  return `#17`
        
        // footer
        case 18:  return `#18`
        case 19:  return `#19`
        case 20:  return `#20`
        case 21:  return `#21`
        case 22:  return `#22`
        case 23:  return `#23`
        default:  return `#`    
      }
    }
  }
  
  var footer = `
    <footer>
      <span id="toTop" title="Go to top">
        <i class="arrow-up"></i>
      </span>

      <div class="container">
        <div class="row">
          <div class="col-7">
            <div class="section">
              <p class="title m-0">
                ${data.footer.title[1]}
              </p>
              <div class="ml-0 mr-0 row">
                <a href="#" class="m-1">
                  <span id="img01" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
                <a href="#" class="m-1">
                  <span id="img02" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="section">
              <p class="title m-0">
                ${data.footer.title[2]}
              </p>
              <div class="ml-0 mr-0 row">
                <a href="#" class="m-1">
                  <span id="img03" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
                <a href="#" class="m-1">
                  <span id="img04" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="section">
              <p class="title m-0">
                ${data.footer.title[3]}
              </p>
              <div class="ml-0 mr-0 row">
                <a href="javascript:void(0)" class="m-1">
                  <span id="img05" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img06" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img07" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img08" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img09" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img10" style="background-image: url('${this.dir}img/home/footer_payment.png')"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="section">
              <p class="title m-0">
                ${data.footer.title[4]}
              </p>
              <div class="ml-0 mr-0 row">
                <a href="javascript:void(0)" class="m-1">
                  <span id="img11" style="background-image: url('${this.dir}img/home/footer_vendor.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img12" style="background-image: url('${this.dir}img/home/footer_vendor.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img13" style="background-image: url('${this.dir}img/home/footer_vendor.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img14" style="background-image: url('${this.dir}img/home/footer_vendor.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img15" style="background-image: url('${this.dir}img/home/footer_vendor.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img16" style="background-image: url('${this.dir}img/home/footer_vendor.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img17" style="background-image: url('${this.dir}img/home/footer_vendor.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img18" style="background-image: url('${this.dir}img/home/footer_vendor.png')"></span>
                </a>
                <a href="javascript:void(0)" class="m-1">
                  <span id="img19" style="background-image: url('${this.dir}img/home/footer_vendor.png')"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <hr class="line">
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section">
              <div class="row">
                <div class="col-4">
                  <ul id="l1" class="list-item"></ul>
                </div>
                <div class="col-4">
                  <ul id="l2" class="list-item"></ul>
                </div>
                <div class="col-4">
                  <ul id="l3" class="list-item"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <hr class="line">
        <div class="row">
          <div class="col-12 footer">
            <p class="title m-0 bold">
              ${data.footer.title[1]}
            </p>
            <p class="sub-title m-0">
              ${data.footer.sub.title[0]}
            </p>
            <p class="sub-title">
              ${data.footer.sub.title[1]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  `
  
  $('[src$="footer.js"]').before(footer)
  
  let li1 = data.footer.link[0]
  let li2 = data.footer.link[1]
  let li3 = data.footer.link[2]
  let li4 = data.footer.link[3]
  
  var l1 = []
  li1.forEach((val, i) => {
    i += 1
    var li = $('<li>')
    var a  = $('<a>', { href: nav.link(i)})
    a.html(val)
    li.html(a)
    l1.push(li)
  })
  $('#l1').html(l1)
  
  var l2 = []
  li2.forEach((val, i) => {
    i += li1.length + 1
    var li = $('<li>')
    var a  = $('<a>', { href: 'javascript:void(0)'})
    a.html(val)
    li.html(a)
    l2.push(li)
  })
  $('#l2').html(l2)
  
  var l3 = []
  li3.forEach((val, i) => {
    i += li1.length + li2.length + 1
    var li = $('<li>')
    var a  = $('<a>', { href: nav.link(i)})
    a.html(val)
    li.html(a)
    l3.push(li)
  })
  $('#l3').html(l3)
})()