setInterval(function(){
let hours= document.getElementById('hours');
let minutes= document.getElementById('minutes');
let second= document.getElementById('seconds');
let ampm= document.getElementById('AMPM');

let hh= document.getElementById('hh');
let mm= document.getElementById('mm');
let ss= document.getElementById('ss');
let h= new Date().getHours();
let m= new Date().getMinutes();
let s= new Date().getSeconds();

// convert 24 hr clock into 12 hr

if(h>12)
     {
        h=h-12;
     }

// add zero if hours ,minutes and second is less than 10 
 
 if(h<10)
     {
        h="0"+h;
     }
 if(m<10)
     {
        m="0"+m;
     }
if(s<10)
    {
        s="0"+s;
    }

hours.innerHTML=h + " <br><span>hours</span> " ;
minutes.innerHTML=m +" <br><span>minutes</span>";
seconds.innerHTML=s + " <br><span>seconds</span>";

let ap= h>=12 ?"AM" : "PM";
ampm.innerHTML=ap;

   hh.style.strokeDashoffset = 440-(440 * h)/12;
   mm.style.strokeDashoffset = 440-(440 * m)/60;
   ss.style.strokeDashoffset = 440-(440 * s)/60;
},1000);

