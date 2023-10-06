// pudotusvalikko tulee näkyviin klikkaamalla, ja pienenee klikkaamalla uudelleeen
function dropdownFunc(){
    var x = document.getElementById('altdropContent');
    if(x.style.visibility === 'visible')
    {
      x.style.visibility = 'hidden';
      }
      else{
        x.style.visibility = 'visible';
      }
  
  }

  function dropdownFunc2(){
    var y = document.getElementById('altdropContent2');
      if(y.style.visibility === 'visible'){
        y.style.visibility = 'hidden';
      }
      else{
        y.style.visibility = 'visible';
      }
  }