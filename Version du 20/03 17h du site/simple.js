let titre1 = document.getElementById("titre1")
let titre2 = document.getElementById("titre2")
let titre3 = document.getElementById("titre3")
let titre4 = document.getElementById("titre4")

titre1.onmouseover = function() {
  this.style.backgroundColor = 'red';
  var h1s = this.getElementsByTagName( 'h1' );
  h1s[0].style.backgroundColor = 'blue';
};
titre1.onmouseout = function() {
  this.style.backgroundColor = 'white';
  var h1s = this.getElementsByTagName( 'h1' );
  h2s[0].style.backgroundColor = 'white';
};

titre2.onmouseover = function() {
    this.style.backgroundColor = 'red';
    var h1s = this.getElementsByTagName( 'h1' );
    h1s[0].style.backgroundColor = 'blue';
  };
titre2.onmouseout = function() {
    this.style.backgroundColor = 'white';
    var h1s = this.getElementsByTagName( 'h1' );
    h2s[0].style.backgroundColor = 'white';
};

titre3.onmouseover = function() {
    this.style.backgroundColor = 'red';
    var h1s = this.getElementsByTagName( 'h1' );
    h1s[0].style.backgroundColor = 'blue';
  };
  titre3.onmouseout = function() {
    this.style.backgroundColor = 'white';
    var h1s = this.getElementsByTagName( 'h1' );
    h2s[0].style.backgroundColor = 'white';
  };

  titre4.onmouseover = function() {
    this.style.backgroundColor = 'red';
    var h1s = this.getElementsByTagName( 'h1' );
    h1s[0].style.backgroundColor = 'blue';
  };
  titre4.onmouseout = function() {
    this.style.backgroundColor = 'white';
    var h1s = this.getElementsByTagName( 'h1' );
    h2s[0].style.backgroundColor = 'white';
  };
