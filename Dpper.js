


let positionS = {
    x: 1948,
    y: 3987,
    z: -5150
}

let velocityS = {
  x:-7.32,
  y:1.58,
  z:1.54
}

let location1 = {
    x: 0,
    y: 0,
    z: 0
}




    var mfactor = 7.292115E-5; // rotation of the Earth in rad/s
    var c = 299792.458; // Speed of light in km/s
    let gmst = 2.9155742425987654;

let vE = 7.292115E-5*6371.3;

let vEcoo = {
  x:vE*Math.cos(gmst + Math.PI),
  y:vE*Math.sin(gmst + Math.PI),
  z:0
}

let vector = {
  x:location1.x-positionS.x,
  y:location1.y-positionS.y,
  z:location1.z-positionS.z
}




let parx;
let pary;
let parz;
let pari;



let vS = {
  x:velocityS.x+vEcoo.x,
  y:velocityS.y+vEcoo.y,
  z:velocityS.z+vEcoo.z
}


if ( Math.sign(vector.x)==Math.sign(vS.x) ){
  parx = 1
} else { parx = -1 }

if ( Math.sign(vector.y)==Math.sign(vS.y) ){
  pary = 1
} else { pary = -1 }

if ( Math.sign(vector.z)==Math.sign(vS.z) ){
  parz = 1
} else { parz = -1 }


if ( parx==1 && pary==1 && parz==1 ){
  pari=1
} else { pari = -1 }


let vit1 = (vS.x**2 + vS.y**2 + vS.z**2)**0.5 * pari ;


let a = ( vS.x*vector.x + vS.y*vector.y + vS.z*vector.z )/(( vector.x**2 + vector.y**2 + vector.z**2 )**0.5 * ( vS.x**2 + vS.y**2 + vS.z**2 )**0.5);

let vit = a*vit1;


let dpper = (( 1 + vit/c )/( 1 - vit/c ))**0.5; 




