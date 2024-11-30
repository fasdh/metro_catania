const dateJ = new Date();

const months = ["Gennaio", "Febraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
//partenze ogni 10 minuti
var monte_po_lun_gio0640_1500 = [];

var stesicoro_lun_gio0705_1505 = [];

//partenze ogni 13 minuti
var monte_po_lun_gio1514_2158 = [];

var stesicoro_lun_gio1516_2230= [];

//partenze ogni 10 minuti
var monte_po_ven0640_1500 = [];

var stesicoro_ven0705_1505 = [];

//partenze ogni 13 minuti
var monte_po_ven1514_0034 = [];

var stesicoro_ven1516_0100= [];

//partenze ogni 13 minuti
var monte_po_sab0640_0026 = [];

var stesicoro_sab0706_0100= [];

//partenze ogni 13 minuti
var monte_po_dom0830_2156 = [];

var stesicoro_dom0856_2230= [];


function addMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() + minutes);
  return date;
}

function initDateArrays(destArray, startDate, endDate, minutes){
    var currentDate = startDate;
    var currentDate_time = startDate.getTime();
    var endDate_time = endDate.getTime();
    while(currentDate_time <= endDate_time){
        
        window[destArray].push(currentDate_time);
        
        addMinutes(currentDate, minutes);
        currentDate_time = currentDate.getTime();
    }
    //return destArray;
}


    var startDate = new Date();
    var endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    
    //Monte Po Lun-Gio 0640 1500 10m
    startDate.setHours(06);
    startDate.setMinutes(40);
    endDate.setHours(15);
    endDate.setMinutes(00);
    
    initDateArrays("monte_po_lun_gio0640_1500", startDate, endDate, 10); 
    
    //Stesicoro Lun-Gio 0705 1505 10m
    
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(07);
    startDate.setMinutes(05);
    endDate.setHours(15);
    endDate.setMinutes(05);
    
    initDateArrays("stesicoro_lun_gio0705_1505", startDate, endDate, 10);
    
    //Monte Po Lun-Gio 1514 2158 13m
        
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(15);
    startDate.setMinutes(14);
    endDate.setHours(21);
    endDate.setMinutes(58);
    
    initDateArrays("monte_po_lun_gio1514_2158", startDate, endDate, 13);    
    
    //Stesicoro Lun-Gio 1516 2230 13m
        
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(15);
    startDate.setMinutes(16);
    endDate.setHours(22);
    endDate.setMinutes(30);
    
    initDateArrays("stesicoro_lun_gio1516_2230", startDate, endDate, 13);
        
    //Monte Po ven 0640 1500 10m
        
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(06);
    startDate.setMinutes(40);
    endDate.setHours(15);
    endDate.setMinutes(00);
    
    initDateArrays("monte_po_ven0640_1500", startDate, endDate, 10);
    
    //Stesicoro ven 0705 1505 10m
        
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(07);
    startDate.setMinutes(05);
    endDate.setHours(15);
    endDate.setMinutes(05);
    
    initDateArrays("stesicoro_ven0705_1505", startDate, endDate, 10);     
    
    //Monte Po ven 1514 0034 13m
        
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(15);
    startDate.setMinutes(14);
    endDate.setHours(23);
    endDate.setMinutes(59);
    
    initDateArrays("monte_po_ven1514_0034", startDate, endDate, 13);
    
    //Monte Po sab 0008 0034 13m
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(00);
    startDate.setMinutes(08);
    endDate.setHours(00);
    endDate.setMinutes(34);
    
    initDateArrays("monte_po_sab0640_0026", startDate, endDate, 13);
    
    //Stesicoro ven 1516 0100 13m
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(15);
    startDate.setMinutes(16);
    endDate.setHours(23);
    endDate.setMinutes(59);
    
    initDateArrays("stesicoro_ven1516_0100", startDate, endDate, 13);

    //Stesicoro ven 0008 0100 13m
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(00);
    startDate.setMinutes(08);
    endDate.setHours(01);
    endDate.setMinutes(00);
    
    initDateArrays("stesicoro_sab0706_0100", startDate, endDate, 13);    
 
    //Monte Po Sab 0640 0026 13m
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(15);
    startDate.setMinutes(16);
    endDate.setHours(23);
    endDate.setMinutes(59);
    
    initDateArrays("monte_po_sab0640_0026", startDate, endDate, 13);
 
    //Monte Po Sab 0000 0026 13m
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(00);
    startDate.setMinutes(00);
    endDate.setHours(00);
    endDate.setMinutes(26);
    
    initDateArrays("monte_po_dom0830_2156", startDate, endDate, 13);    
    
    //Stesicoro sab 0706 0100 13m
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(07);
    startDate.setMinutes(06);
    endDate.setHours(23);
    endDate.setMinutes(59);
    
    initDateArrays("stesicoro_sab0706_0100", startDate, endDate, 13); 
        
    //Stesicoro sab 0000 0100 13m
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(00);
    startDate.setMinutes(00);
    endDate.setHours(01);
    endDate.setMinutes(00);
    
    initDateArrays("stesicoro_dom0856_2230", startDate, endDate, 13);
    
    //monte po dom 0830 2156 13m
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(08);
    startDate.setMinutes(30);
    endDate.setHours(21);
    endDate.setMinutes(56);
    
    initDateArrays("monte_po_dom0830_2156", startDate, endDate, 13);    
    
    //Stesicoro dom 0856 2230 13m
    startDate = new Date();
    endDate = new Date();
    startDate.setSeconds(0); 
    endDate.setSeconds(0);
    startDate.setMilliseconds(0); 
    endDate.setMilliseconds(0);
    startDate.setHours(08);
    startDate.setMinutes(56);
    endDate.setHours(22);
    endDate.setMinutes(30);
    
    initDateArrays('stesicoro_dom0856_2230', startDate, endDate, 13);


function getStesicoroNextRun(dateToCheck){
    var timeToCheck = dateToCheck.getTime()
    var index;
    var checking;
    
    switch(dateToCheck.getDay()){
        case 0: //domenica
            index = 0;
            checking = stesicoro_dom0856_2230[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_dom0856_2230[index];
                found=1;
            }
            nextRun = checking;
        break;
        case 1: //lunedì
            index = 0;
            checking = stesicoro_lun_gio0705_1505[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_lun_gio0705_1505[index];
                found=1;
            }
            index=0;
            checking = stesicoro_lun_gio1516_2230[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_lun_gio1516_2230[index];
                found=1;
            }
            nextRun = checking;
        break;
        case 2: //martedì
            index = 0;
            checking = stesicoro_lun_gio0705_1505[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_lun_gio0705_1505[index];
                found=1;
            }
            index=0;
            checking = stesicoro_lun_gio1516_2230[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_lun_gio1516_2230[index];
                found=1;
            }
            nextRun = checking;
        break;
        case 3: //mercoledì
            index = 0;
            checking = stesicoro_lun_gio0705_1505[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_lun_gio0705_1505[index];
                found=1;
            }
            index=0;
            checking = stesicoro_lun_gio1516_2230[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_lun_gio1516_2230[index];
                found=1;
            }
            nextRun = checking;
        break;
        case 4: //giovedì
            index = 0;
            checking = stesicoro_lun_gio0705_1505[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_lun_gio0705_1505[index];
                found=1;
            }
            index=0;
            checking = stesicoro_lun_gio1516_2230[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_lun_gio1516_2230[index];
                
                found=1;
            }
            nextRun = checking;
        break;
        case 5://venerdì
            index = 0;
            checking = stesicoro_ven0705_1505[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_ven0705_1505[index];
                found=1;
            }
            index=0;
            checking = stesicoro_ven1516_0100[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_ven1516_0100[index];
                found=1;
            }
            nextRun = checking;
        
        break;
        case 6:
            index = 0;
            checking = stesicoro_sab0706_0100[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = stesicoro_sab0706_0100[index];
                found=1;
            }
            nextRun = checking;
        
        break;
        
    }
        
    if (found==0){
        
        nextRun = "not_found";
    }
    
    return nextRun;

    
}

function getMontePoNextRun(dateToCheck){
var timeToCheck = dateToCheck.getTime()
    var index;
    var checking;
    var found=0;
    
    switch(dateToCheck.getDay()){
        case 0: //domenica
            index = 0;
            checking = monte_po_dom0830_2156[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_dom0830_2156[index];
                found=1;
            }
            nextRun = checking;
        break;
        case 1: //lunedì
            index = 0;
            checking = monte_po_lun_gio0640_1500[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_lun_gio0640_1500[index];
                found=1;
            }
            index=0;
            checking = monte_po_lun_gio1514_2158[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_lun_gio1514_2158[index];
                found=1;
            }
            nextRun = checking;
        break;
        case 2: //martedì
            index = 0;
            checking = monte_po_lun_gio0640_1500[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_lun_gio0640_1500[index];
                found=1;
            }
            index=0;
            checking = monte_po_lun_gio1514_2158[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_lun_gio1514_2158[index];
                found=1;
            }
            nextRun = checking;
        break;
        case 3: //mercoledì
            index = 0;
            checking = monte_po_lun_gio0640_1500[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_lun_gio0640_1500[index];
                found=1;
            }
            index=0;
            checking = monte_po_lun_gio1514_2158[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_lun_gio1514_2158[index];
                found=1;
            }
            nextRun = checking;
        break;
        case 4: //giovedì
            index = 0;
            checking = monte_po_lun_gio0640_1500[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_lun_gio0640_1500[index];
                found=1;
            }
            index=0;
            checking = monte_po_lun_gio1514_2158[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_lun_gio1514_2158[index];
                found=1;
            }
            nextRun = checking;
        break;
        case 5://venerdì
            index = 0;
            checking = monte_po_ven0640_1500[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_ven0640_1500[index];
                found=1;
            }
            index=0;
            checking = monte_po_ven1514_0034[index];
            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_ven1514_0034[index];
                found=1;
            }
            nextRun = checking;
        
        break;
        case 6:
            index = 0;
            checking = monte_po_sab0640_0026[index];

            while(timeToCheck > checking){
                index = index+1;
                checking = monte_po_sab0640_0026[index];
                found=1;
            }
            nextRun = checking;
        
        break;
        }
    if (found==0){
        
        nextRun = "not_found";
    }

            
    return nextRun;
}



window.onload = function() {
    const c_date_hour = document.getElementById('date_hour');
    const ss_start = document.getElementById('ss');
    const mp_start = document.getElementById('mp');
    //initRunsDates();
    
    /* const c_hour = document.getElementById('hour'); */
    
    //c_date.innerHTML= dateJ.getFullYear()+" "+months[dateJ.getMonth()]+" "+dateJ.getDay()+"_"+days[dateJ.getDay()];
    c_date_hour.innerHTML= days[dateJ.getDay()]+" "+dateJ.getDay()+" "+months[dateJ.getMonth()]+" "+dateJ.getFullYear()+ " "+ dateJ.getHours() +"h:"+ dateJ.getMinutes()+"m";
    /* c_hour.innerHTML= */
    var dateMP = getMontePoNextRun(dateJ);
    var dateSS = getStesicoroNextRun(dateJ);
/*     console.log();
    console.log(new Date(dateMP)); */
    dateMP = new Date(dateMP);
    dateSS = new Date(dateSS);
    ss_start.innerHTML=days[dateSS.getDay()]+" "+dateSS.getDay()+" "+months[dateSS.getMonth()]+" "+dateSS.getFullYear()+ "<br>"+ dateSS.getHours() +"h:"+ dateSS.getMinutes()+"m";
    mp_start.innerHTML=days[dateMP.getDay()]+" "+dateMP.getDay()+" "+months[dateMP.getMonth()]+" "+dateMP.getFullYear()+ "<br>"+ dateMP.getHours() +"h:"+ dateMP.getMinutes()+"m";
    
    
}