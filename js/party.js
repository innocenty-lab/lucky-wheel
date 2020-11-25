alert("Dianggap sah kalo abang liat sendiri");
alert("Kalo dapet yang bebas jangan mahal-mahal wooyyyyyy");
alert("Kalo mau mahal ya patungan HAHAHAHAH");
alert("2 KALI KESEMPATAN");
alert("Puterrrrr!");

function myfunction(){
  var x = 1024;
  var y = 9999;
  
  var deg = Math.floor(Math.random() * (x - y)) + y;
  
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";
  
  var element = document.getElementById('main');
  element.classList.remove('animate');
  setTimeout(function(){
      element.classList.add('animate');
  
  }, 3000);
  }