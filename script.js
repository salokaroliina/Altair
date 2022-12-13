// pudotusvalikko tulee näkyviin klikkaamalla, ja pienenee klikkaamalla uudelleeen
function dropdownFunc(){
  var x = document.getElementById('dropContent');
  if(x.style.visibility === 'visible')
  {
    x.style.visibility = 'hidden';
    }
    else{
      x.style.visibility = 'visible';
    }

}
