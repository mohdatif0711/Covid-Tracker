$(document).ready(function(){
    $.getJSON(src="https://data.covid19india.org/data.json", function(data){
        var states=[]
        var confirmed=[]
        var recovered=[]
        var deaths=[]
        //console.log(data.statewise)


var total_confirmed;
var total_active;
var total_recovered;
var total_deaths;
 total_confirmed=data.statewise[0].confirmed;
 total_active=data.statewise[0].active;
 total_recovered=data.statewise[0].recovered;
 total_deaths=data.statewise[0].deaths;

 $("#confirmed").append(total_confirmed);
 $("#active").append(total_active);
 $("#recovered").append(total_recovered);
 $("#deaths").append(total_deaths);

$.each(data.statewise, function(id,ob){
states.push(ob.state)
confirmed.push(ob.confirmed)
recovered.push(ob.recovered)
deaths.push(ob.deaths)
  });
  states.shift();
  confirmed.shift();
  recovered.shift();
  deaths.shift();


//chart
var mychart=document.getElementById('mychart').getContext('2d');
 var chart=new Chart(mychart,{

    type:"bar",
    data:{
        labels:states,
        datasets:[
            {
            label:"Confirmed",
            data: confirmed,
            backgroundColor: "red",
            },
            {
            label:"Recovered",
            data:recovered,
            backgroundColor: "yellow",
            },
            {
            label:"Deceased",
            data:deaths,
            backgroundColor: "green",
            },
           
        ]
    },
options:{}
 })
});

});
