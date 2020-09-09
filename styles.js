var input = document.getElementById('button');
setTimeout(input.onclick = function () {
  'use strict';
document.documentElement.scrollTop = 0;
}, 3000);
//////////////////////////
var myinput = document.getElementById('input');
myinput.onfocus = function () {
  'use strict';
  if (this.placeholder === 'Your Email Address') {
    this.placeholder ='';
  }
};
myinput.onblur = function () {
  'use strict';
  if (this.placeholder === '') {
    this.placeholder ='Your Email Address';
  }
};
