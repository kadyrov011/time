var elform = document.querySelector('.form__js');  /* form */

var elinput = elform.querySelector('.form__input');  /* input */
var elBtn = elform.querySelector('.form__btn');

var eltextPiyoda=document.querySelector('.piyoda');
var eltextVelsiped=document.querySelector('.veloseped');
var eltextMashina=document.querySelector('.mashin');
var eltextSamalyot=document.querySelector('.samalyot');

var elminutP=document.querySelector('.minutp');
var elminutV=document.querySelector('.minutv');
var elminutC=document.querySelector('.minutc');
var elminutA=document.querySelector('.minuta');

var onFoot=3.6;
var byBycicle=20.1;
var byCar=70;
var byAirplane=800;

elform.addEventListener('submit', function (event) {
    event.preventDefault();
    var timeP = Number(elinput.value)/Number(onFoot);
    var timeV = Number(elinput.value)/Number(byBycicle);
    var timeC = Number(elinput.value)/Number(byCar);
    var timeA = Number(elinput.value)/Number(byAirplane);
     
    eltextPiyoda.textContent= timeP.toFixed(0)+" "+"soat" ;
    eltextVelsiped.textContent= timeV.toFixed(0)+" "+"soat";
    eltextMashina.textContent= timeC.toFixed(0)+" "+"soat";
    eltextSamalyot.textContent= timeA.toFixed(0)+" "+"soat";

   var minuta=(timeP - Math.floor(timeP))*60;
  //  console.log((minuta.toFixed(0)));
   var minutaV=(timeV - Math.floor(timeV))*60;
  //  console.log((minutaV.toFixed(0)));
   var minutaC=(timeC - Math.floor(timeC))*60;
  //  console.log((minutaC.toFixed(0)));
   var minutaA=(timeA - Math.floor(timeA))*60;
  //  console.log((minutaA.toFixed(0)));
 
  elminutP.textContent=((minuta.toFixed(0)))+" "+"minut";
  elminutV.textContent=((minutaV.toFixed(0)))+" "+"minut";
  elminutC.textContent= ((minutaC.toFixed(0)))+" "+"minut";
  elminutA.textContent=((minutaA.toFixed(0)))+" "+"minut";

  });
