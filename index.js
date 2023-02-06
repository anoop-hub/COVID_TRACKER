

const input=document.getElementById("ty");

function dark(){
    document.getElementById("bd").style.backgroundColor="black";
    document.getElementById("cd").style.backgroundColor="rgb(26, 16, 83)";
}

// https://api.covid19api.com/summary
// https://inshorts.deta.dev/news?category=science
document.getElementById("bt").addEventListener('click',api);
  
    


    fetch('https://api.covid19api.com/summary')
    .then((data)=>{
    return data.json();
})
    .then((a)=>{
   
   
   
    
  

   
   document.getElementById("1").innerHTML=`${a.Global.TotalConfirmed}`
   document.getElementById("2").innerHTML=`${a.Global.NewConfirmed}`
   document.getElementById("3").innerHTML=`${a.Global.NewDeaths}`
   document.getElementById("4").innerHTML=`${a.Global.TotalDeaths}`
   
})



function api(){

    fetch('https://api.covid19api.com/summary')
    .then((data)=>{
    return data.json();
})
    .then((a)=>{
   const x= document.getElementById("ty").value;
   
   var index=0;
    
   for(var i=0;i<185;i++){
    
        if(a.Countries[i].Country.toLowerCase()==x.toLowerCase()){
            index=i;
            break;
        }   
        
        

  }

  console.log(a);
   
   document.getElementById("h").innerHTML=`Covid-19 in ${a.Countries[index].Country}`
   document.getElementById("p").innerHTML=`${a.Countries[index].TotalConfirmed}`
   document.getElementById("q").innerHTML=`${a.Countries[index].TotalDeaths}`
   document.getElementById("r").innerHTML=`${a.Countries[index].NewDeaths}`
   document.getElementById("s").innerHTML=`${a.Countries[index].NewRecovered}`
   document.getElementById("t").innerHTML=`${a.Countries[index].TotalRecovered}`
   document.getElementById("u").innerHTML=`${a.Countries[index].NewConfirmed}`

})
}


/*TotalConfirmed": 208552,
"NewDeaths": 0,
"TotalDeaths": 7882,
"NewRecovered": 0,
"TotalRecovered": 0,*/

// function changes(){
//     if(document.getElementById("ch").textContent==1){
//         document.getElementById("bd").style.backgroundColor="black"
//         document.getElementById("ch").textContent=0;
//     }

//     else if(document.getElementById("ch").textContent==0){
//         document.getElementById("bd").style.backgroundColor="pink"
//         document.getElementById("ch").textContent=1;
//     }
    
// }



;

// TIME */

    setInterval(function()
     {
        let  dat=new Date()
        let hour=dat.getHours();
        let minute=dat.getMinutes();
        let zone="AM";
        let second=dat.getSeconds();
        if(hour>12){
            hour=hour-12;
            zone="PM";
        }
        if(hour<10){
            if(second<10){
                document.getElementById("time").innerHTML="0"+hour+
        ":"+minute+':'
        +"0"+second+" "+zone;
        }
        else{
             document.getElementById("time").innerHTML="0"+hour+
        ":"+minute+':'
        +second+" "+zone;
        }
        }

            
         
        else{
            document.getElementById("time").innerHTML=hour+
        ":"+minute+':'
        +dat.getSeconds()+" "+zone;
        }

        
        
    }, 1000);


/*state wise*/

        fetch('https://data.covid19india.org/v4/min/data.min.json')
    .then((data)=>{
    return data.json();
})
    .then((a)=>{
   
   
   
    
  

// andhra pradesh
   document.getElementById("6").innerHTML=`${a.AN.total.confirmed}`
   document.getElementById("7").innerHTML=`${a.AN.total.deceased}`
   document.getElementById("8").innerHTML=`${a.AN.total.recovered}`
   document.getElementById("9").innerHTML=`${a.AN.total.tested}`

   document.getElementById("10").innerHTML=`${a.AP.total.confirmed}`
   document.getElementById("11").innerHTML=`${a.AP.total.deceased}`
   document.getElementById("12").innerHTML=`${a.AP.total.recovered}`
   document.getElementById("13").innerHTML=`${a.AP.total.tested}`


   document.getElementById("14").innerHTML=`${a.AR.total.confirmed}`
   document.getElementById("15").innerHTML=`${a.AR.total.deceased}`
   document.getElementById("16").innerHTML=`${a.AR.total.recovered}`
   document.getElementById("17").innerHTML=`${a.AR.total.tested}`

   document.getElementById("18").innerHTML=`${a.AS.total.confirmed}`
   document.getElementById("19").innerHTML=`${a.AS.total.deceased}`
   document.getElementById("20").innerHTML=`${a.AS.total.recovered}`
   document.getElementById("21").innerHTML=`${a.AS.total.tested}`

   document.getElementById("22").innerHTML=`${a.BR.total.confirmed}`
   document.getElementById("23").innerHTML=`${a.BR.total.deceased}`
   document.getElementById("24").innerHTML=`${a.BR.total.recovered}`
   document.getElementById("25").innerHTML=`${a.BR.total.tested}`

   document.getElementById("26").innerHTML=`${a.CH.total.confirmed}`
   document.getElementById("27").innerHTML=`${a.CH.total.deceased}`
   document.getElementById("28").innerHTML=`${a.CH.total.recovered}`
   document.getElementById("29").innerHTML=`${a.CH.total.tested}`

   document.getElementById("30").innerHTML=`${a.CT.total.confirmed}`
   document.getElementById("31").innerHTML=`${a.CT.total.deceased}`
   document.getElementById("32").innerHTML=`${a.CT.total.recovered}`
   document.getElementById("33").innerHTML=`${a.CT.total.tested}`



   document.getElementById("34").innerHTML=`${a.DL.total.confirmed}`
   document.getElementById("35").innerHTML=`${a.DL.total.deceased}`
   document.getElementById("36").innerHTML=`${a.DL.total.recovered}`
   document.getElementById("37").innerHTML=`${a.DL.total.tested}`



   document.getElementById("38").innerHTML=`${a.DN.total.confirmed}`
   document.getElementById("39").innerHTML=`${a.DN.total.deceased}`
   document.getElementById("40").innerHTML=`${a.DN.total.recovered}`
   document.getElementById("41").innerHTML=`${a.DN.total.tested}`


   document.getElementById("42").innerHTML=`${a.GA.total.confirmed}`
   document.getElementById("43").innerHTML=`${a.GA.total.deceased}`
   document.getElementById("44").innerHTML=`${a.GA.total.recovered}`
   document.getElementById("45").innerHTML=`${a.GA.total.tested}`


   document.getElementById("46").innerHTML=`${a.GJ.total.confirmed}`
   document.getElementById("47").innerHTML=`${a.GJ.total.deceased}`
   document.getElementById("48").innerHTML=`${a.GJ.total.recovered}`
   document.getElementById("49").innerHTML=`${a.GJ.total.tested}`


   document.getElementById("50").innerHTML=`${a.HP.total.confirmed}`
   document.getElementById("51").innerHTML=`${a.HP.total.deceased}`
   document.getElementById("52").innerHTML=`${a.HP.total.recovered}`
   document.getElementById("53").innerHTML=`${a.HP.total.tested}`


   document.getElementById("54").innerHTML=`${a.HR.total.confirmed}`
   document.getElementById("55").innerHTML=`${a.HR.total.deceased}`
   document.getElementById("56").innerHTML=`${a.HR.total.recovered}`
   document.getElementById("57").innerHTML=`${a.HR.total.tested}`


   document.getElementById("58").innerHTML=`${a.JH.total.confirmed}`
   document.getElementById("59").innerHTML=`${a.JH.total.deceased}`
   document.getElementById("60").innerHTML=`${a.JH.total.recovered}`
   document.getElementById("61").innerHTML=`${a.JH.total.tested}`


   document.getElementById("62").innerHTML=`${a.JK.total.confirmed}`
   document.getElementById("63").innerHTML=`${a.JK.total.deceased}`
   document.getElementById("64").innerHTML=`${a.JK.total.recovered}`
   document.getElementById("65").innerHTML=`${a.JK.total.tested}`



   document.getElementById("66").innerHTML=`${a.KA.total.confirmed}`
   document.getElementById("67").innerHTML=`${a.KA.total.deceased}`
   document.getElementById("68").innerHTML=`${a.KA.total.recovered}`
   document.getElementById("69").innerHTML=`${a.KA.total.tested}`



   document.getElementById("70").innerHTML=`${a.LA.total.confirmed}`
   document.getElementById("71").innerHTML=`${a.LA.total.deceased}`
   document.getElementById("72").innerHTML=`${a.LA.total.recovered}`
   document.getElementById("73").innerHTML=`${a.LA.total.tested}`


   document.getElementById("74").innerHTML=`${a.LD.total.confirmed}`
   document.getElementById("75").innerHTML=`${a.LD.total.deceased}`
   document.getElementById("76").innerHTML=`${a.LD.total.recovered}`
   document.getElementById("77").innerHTML=`${a.LD.total.tested}`

   document.getElementById("78").innerHTML=`${a.MP.total.confirmed}`
   document.getElementById("79").innerHTML=`${a.MP.total.deceased}`
   document.getElementById("80").innerHTML=`${a.MP.total.recovered}`
   document.getElementById("81").innerHTML=`${a.MP.total.tested}`

   document.getElementById("82").innerHTML=`${a.MH.total.confirmed}`
   document.getElementById("83").innerHTML=`${a.MH.total.deceased}`
   document.getElementById("84").innerHTML=`${a.MH.total.recovered}`
   document.getElementById("85").innerHTML=`${a.MH.total.tested}`

   document.getElementById("86").innerHTML=`${a.ML.total.confirmed}`
   document.getElementById("87").innerHTML=`${a.ML.total.deceased}`
   document.getElementById("88").innerHTML=`${a.ML.total.recovered}`
   document.getElementById("89").innerHTML=`${a.ML.total.tested}`


   document.getElementById("90").innerHTML=`${a.MN.total.confirmed}`
   document.getElementById("91").innerHTML=`${a.MN.total.deceased}`
   document.getElementById("92").innerHTML=`${a.MN.total.recovered}`
   document.getElementById("93").innerHTML=`${a.MN.total.tested}`

   document.getElementById("94").innerHTML=`${a.CT.total.confirmed}`
   document.getElementById("95").innerHTML=`${a.CT.total.deceased}`
   document.getElementById("96").innerHTML=`${a.CT.total.recovered}`
   document.getElementById("97").innerHTML=`${a.CT.total.tested}`

   document.getElementById("98").innerHTML=`${a.CT.total.confirmed}`
   document.getElementById("99").innerHTML=`${a.CT.total.deceased}`
   document.getElementById("100").innerHTML=`${a.CT.total.recovered}`
   document.getElementById("101").innerHTML=`${a.CT.total.tested}`

   
   
   
})