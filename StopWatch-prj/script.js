let elapsedtime=0
let starttime;
let interval;
function start_btn(){
    starttime=Date.now()-elapsedtime;
    interval=setInterval(ubdatetime,10);
}

function stop_btn(){
    clearInterval(interval)

}

function reset_btn() {
    clearInterval(interval)
    elapsedtime=0;
    DisplayTimer();
}

function ubdatetime(){
const currenttime=Date.now()
elapsedtime=currenttime-starttime;
DisplayTimer()
}

function DisplayTimer(){
    
    let sec=Math.floor((elapsedtime%(1000*60))/1000);
    let msec=Math.floor((elapsedtime%1000)/10); 
    
    
 document.getElementById('seconds').innerHTML=padzero(sec)
 document.getElementById('tens').innerHTML=padzero(msec)
}    

    function padzero(value){
        return value<10?"0"+value:value
    }
    

