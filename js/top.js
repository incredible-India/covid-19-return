
let chartTypeCase = document.getElementsByTagName('select')[0]; //for the total and new cases

var top5CasesArray = [];//in this we will put the values of top 5 case
var top5NewCasesArray = [];//in this we will put the values of top 5 case
var CnmaeTotalCase = [];
var CnameNewCase = [];


var top5DethArray = [];//in this we will put the values of top 5 case
var top5NewDethArray = [];//in this we will put the values of top 5 case
var CnmaeTotalDeth = [];
var CnameNewDeth = [];


var top5RecoverArray = [];//in this we will put the values of top 5 case
var top5NewRecoverArray = [];//in this we will put the values of top 5 case
var CnmaeTotalRec = [];
var CnameNewRec = [];


if(navigator.onLine)
{

    try {

            let top5Cases = [];//in this we will put the values of top 5 case
            let top5Deth = [];//in this we will put the values of top 5 case
            let top5Recover = [];//in this we will put the values of top 5 case
            let top5NewCases = [];//in this we will put the values of top 5 case
            let top5NewDeth = [];//in this we will put the values of top 5 case
            let top5NewRecover = [];//in this we will put the values of top 5 case


            fetch('https://api.covid19api.com/summary')
            .then(recivedData => recivedData.json())//it will recived the data in json formate
            .then(finalJsonData => {

                   
                for(i in finalJsonData.Countries)
                {
                    top5Cases[i] = finalJsonData.Countries[i].TotalConfirmed;
                    top5Deth[i] = finalJsonData.Countries[i].TotalDeaths;
                    top5Recover[i] = finalJsonData.Countries[i].TotalRecovered;
                    top5NewCases[i] = finalJsonData.Countries[i].NewConfirmed;
                    top5NewDeth[i] = finalJsonData.Countries[i].NewDeaths;
                    top5NewRecover[i] = finalJsonData.Countries[i].NewRecovered;

                }

                // decreasing order of the case 
                top5Cases.sort(function(a,b){return (b-a)});
                top5Deth.sort(function(a,b){return (b-a)});
                top5Recover.sort(function(a,b){return (b-a)});
                top5NewCases.sort(function(a,b){return (b-a)});
                top5NewDeth.sort(function(a,b){return (b-a)});
                top5NewRecover.sort(function(a,b){return (b-a)});

     


               for(i =0;  i < 5 ; i++)
               {

                top5CasesArray[i] = top5Cases[i];
                top5NewCasesArray[i] =top5NewCases[i];

                top5NewDethArray[i] =top5NewDeth[i];
                top5DethArray[i] = top5Deth[i];

                top5RecoverArray[i] = top5Recover[i];
                top5NewRecoverArray[i] = top5NewRecover[i];

                for(j in finalJsonData.Countries)
                {   

                    if(top5CasesArray[i] == finalJsonData.Countries[j].TotalConfirmed)
                    {
                        CnmaeTotalCase[i] = finalJsonData.Countries[j].Country;

                        document.getElementsByClassName('Table1Body')[0].innerHTML +=`
                        
                        <tr>
                        <th scope="row">${finalJsonData.Countries[j].Country}</th>
                        <td>${finalJsonData.Countries[j].TotalConfirmed}</td>
                        <td>${finalJsonData.Countries[j].NewConfirmed}</td>
                        <td>${finalJsonData.Countries[j].TotalRecovered}</td>
                        <td>${finalJsonData.Countries[j].NewRecovered}</td>
                        <td>${finalJsonData.Countries[j].TotalDeaths}</td>
                        <td>${finalJsonData.Countries[j].NewDeaths}</td>
                        <td>${finalJsonData.Countries[j].Date}</td>
                      </tr>
                        
                        
                        
                        `
                    }
                    if(top5NewCasesArray[i] == finalJsonData.Countries[j].NewConfirmed)
                    {
                        CnameNewCase[i] = finalJsonData.Countries[j].Country;
                        document.getElementsByClassName('Table2Body')[0].innerHTML +=`
                        
                        <tr>
                        <th scope="row">${finalJsonData.Countries[j].Country}</th>
                        <td>${finalJsonData.Countries[j].TotalConfirmed}</td>
                        <td>${finalJsonData.Countries[j].NewConfirmed}</td>
                        <td>${finalJsonData.Countries[j].TotalRecovered}</td>
                        <td>${finalJsonData.Countries[j].NewRecovered}</td>
                        <td>${finalJsonData.Countries[j].TotalDeaths}</td>
                        <td>${finalJsonData.Countries[j].NewDeaths}</td>
                        <td>${finalJsonData.Countries[j].Date}</td>
                      </tr>
                        
                        
                        
                        `
                    }

                    if(top5NewDethArray[i] == finalJsonData.Countries[j].NewDeaths)
                    {
                        CnameNewDeth[i] = finalJsonData.Countries[j].Country;

                        document.getElementsByClassName('Table6Body')[0].innerHTML +=`
                        
                        <tr>
                        <th scope="row">${finalJsonData.Countries[j].Country}</th>
                        <td>${finalJsonData.Countries[j].TotalConfirmed}</td>
                        <td>${finalJsonData.Countries[j].NewConfirmed}</td>
                        <td>${finalJsonData.Countries[j].TotalRecovered}</td>
                        <td>${finalJsonData.Countries[j].NewRecovered}</td>
                        <td>${finalJsonData.Countries[j].TotalDeaths}</td>
                        <td>${finalJsonData.Countries[j].NewDeaths}</td>
                        <td>${finalJsonData.Countries[j].Date}</td>
                      </tr>
                        
                        
                        
                        `
                    }
                    if(top5DethArray[i] == finalJsonData.Countries[j].TotalDeaths)
                    {
                        CnmaeTotalDeth[i] = finalJsonData.Countries[j].Country;

                        document.getElementsByClassName('Table5Body')[0].innerHTML +=`
                        
                        <tr>
                        <th scope="row">${finalJsonData.Countries[j].Country}</th>
                        <td>${finalJsonData.Countries[j].TotalConfirmed}</td>
                        <td>${finalJsonData.Countries[j].NewConfirmed}</td>
                        <td>${finalJsonData.Countries[j].TotalRecovered}</td>
                        <td>${finalJsonData.Countries[j].NewRecovered}</td>
                        <td>${finalJsonData.Countries[j].TotalDeaths}</td>
                        <td>${finalJsonData.Countries[j].NewDeaths}</td>
                        <td>${finalJsonData.Countries[j].Date}</td>
                      </tr>
                        
                        
                        
                        `
                    }

                    if(top5RecoverArray[i] == finalJsonData.Countries[j].TotalRecovered)
                    {
                        CnmaeTotalRec[i] = finalJsonData.Countries[j].Country;
                        document.getElementsByClassName('Table3Body')[0].innerHTML +=`
                        
                        <tr>
                        <th scope="row">${finalJsonData.Countries[j].Country}</th>
                        <td>${finalJsonData.Countries[j].TotalConfirmed}</td>
                        <td>${finalJsonData.Countries[j].NewConfirmed}</td>
                        <td>${finalJsonData.Countries[j].TotalRecovered}</td>
                        <td>${finalJsonData.Countries[j].NewRecovered}</td>
                        <td>${finalJsonData.Countries[j].TotalDeaths}</td>
                        <td>${finalJsonData.Countries[j].NewDeaths}</td>
                        <td>${finalJsonData.Countries[j].Date}</td>
                      </tr>
                        
                        
                        
                        `
                    }

                    if(top5NewRecoverArray[i] == finalJsonData.Countries[j].NewRecovered)
                    {
                        CnameNewRec[i] = finalJsonData.Countries[j].Country;
                        document.getElementsByClassName('Table4Body')[0].innerHTML +=`
                        
                        <tr>
                        <th scope="row">${finalJsonData.Countries[j].Country}</th>
                        <td>${finalJsonData.Countries[j].TotalConfirmed}</td>
                        <td>${finalJsonData.Countries[j].NewConfirmed}</td>
                        <td>${finalJsonData.Countries[j].TotalRecovered}</td>
                        <td>${finalJsonData.Countries[j].NewRecovered}</td>
                        <td>${finalJsonData.Countries[j].TotalDeaths}</td>
                        <td>${finalJsonData.Countries[j].NewDeaths}</td>
                        <td>${finalJsonData.Countries[j].Date}</td>
                      </tr>
                        
                        
                        
                        `
                    }
                }

              


               }


               showTotalGraph("myChart","pie",top5CasesArray,CnmaeTotalCase,"Total Cases");
               showNewGraph("myChart1","pie",top5NewCasesArray,CnameNewCase,"New Cases");
               showTotalGraph("myChart3","bar",top5RecoverArray,CnmaeTotalRec,"Total Recovered");
               showNewGraph("myChart4","bar",top5NewRecoverArray,CnameNewRec,"New Recovered");
               showTotalGraph("myChart5","doughnut",top5DethArray,CnmaeTotalDeth,"Total Death");
               showNewGraph("myChart6","doughnut",top5NewDethArray,CnameNewDeth,"New Death");

            //    memory free 

               top5Cases = null;
               top5NewCases = null;
               top5Deth = null;
               top5NewDeth = null;
               top5Recover = null;
               top5NewRecover = null;

               return null;

            })
            //SORETD INTO 5 ELEMENTS ARRAY

            // for (let index = 0; index < array.length; index++) {
            //     const element = array[index];
                
            // }





        
    } catch (error) {

        alert("We are facing some network error...",error)
        
    }


}else
{
    alert("Check Your Internet Connection")
}

//this function will show Total case and its data
function showTotalGraph (DomName,chartType,data,Country,title)
{
    var ctx = document.getElementById(DomName).getContext('2d');
    var myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: Country,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                  
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
            ,responsive:false
            , plugins: {
                title: {
                    display: true,
                    text: title
                    ,fontSize : '40px'
                }
                }
        }
    });
}

//this function will show new case and its data
function showNewGraph(DomName,chartType,data,Country,title)
{
    var ctx = document.getElementById(DomName).getContext('2d');
    var myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: Country,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
            ,responsive:false
            , plugins: {
                title: {
                    display: true,
                    text: title
                    ,fontSize : '40px'
                }
                }
        }
    });
}


//for changing the chart type
chartTypeCase.onchange = function()
{
    let theTypeOfChartIs = chartTypeCase.value;
    Array.from(document.getElementsByTagName('canvas')).forEach(ele =>{
        ele.remove();
    })
    document.getElementsByClassName('chartCase')[0].innerHTML =`
    <canvas id="myChart" width="350" height="400"></canvas>
    <canvas id="myChart1" width="350" height="400"></canvas>
    `
    document.getElementsByClassName('chartCase')[1].innerHTML =`
    <canvas id="myChart3" width="350" height="400"></canvas>
    <canvas id="myChart4" width="350" height="400"></canvas>
    `
    document.getElementsByClassName('chartCase')[2].innerHTML =`
    <canvas id="myChart5" width="350" height="400"></canvas>
    <canvas id="myChart6" width="350" height="400"></canvas>
    `
    showTotalGraph("myChart",theTypeOfChartIs,top5CasesArray,CnmaeTotalCase,"Total Cases");
    showNewGraph("myChart1",theTypeOfChartIs,top5NewCasesArray,CnameNewCase,"New Cases");
    showTotalGraph("myChart3",theTypeOfChartIs,top5RecoverArray,CnmaeTotalRec,"Total Recovered");
    showNewGraph("myChart4",theTypeOfChartIs,top5NewRecoverArray,CnameNewRec,"New Recovered");
    showTotalGraph("myChart5",theTypeOfChartIs,top5DethArray,CnmaeTotalDeth,"Total Death");
    showNewGraph("myChart6",theTypeOfChartIs,top5NewDethArray,CnameNewDeth,"New Death");
}



//loader removed
