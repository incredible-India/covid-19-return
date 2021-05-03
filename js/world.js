let globalInfo=[];//here we will keep global information
let totalCase =[];//total cases of individual countries
let totalRecovered =[];//total recovered of individual countries
let totalDeaths =[];//total Deaths of individual countries
let Cname =[];//County name of individual countries

let chartTypeCase = document.getElementsByTagName('select')[0];
if(navigator.onLine)
{

    fetch('https://api.covid19api.com/summary')
    .then(recivedData => recivedData.json())
    .then(finalData => {

        for(i in finalData.Global)
        {
            globalInfo[i] = finalData.Global[i];
        }
          
            document.getElementsByTagName('tbody')[0].innerHTML =`  
            <tr>
            <th scope="row" style="background : rgba(54, 162, 235,0.2);">New Confirmed</th>
            <td>${globalInfo.NewConfirmed}</td>
     
          </tr>
    
          <tr>
            <th scope="row" style="background : rgba(255, 206, 86,0.2);">Total Confirmed</th>
            <td>${ globalInfo.TotalConfirmed}</td>
     
          </tr>
    
          <tr>
            <th scope="row" style="background : rgba(0, 0, 255,0.2);">New Deaths</th>
            <td>${globalInfo.NewDeaths}</td>
     
          </tr>
    
          <tr>
            <th scope="row" style="background : rgba(255, 0, 0,0.2);">Total Deaths</th>
            <td>${globalInfo.TotalDeaths}</td>
     
          </tr>
          <tr>
            <th scope="row" style="background : rgba(175, 62, 102,0.2);">New Recovered</th>
            <td>${globalInfo.NewRecovered}</td>
     
          </tr>
    
          <tr>
            <th scope="row" style="background : rgba(45, 192, 172,0.2);">Total Recovered</th>
            <td>${globalInfo.TotalRecovered}</td>
     
          </tr>
    
          
          <tr>
            <th scope="row" class="bg-light">Last Update</th>
            <td>${globalInfo.Date}</td>
     
          </tr>
          
          
          `
         
        
        
        showTotalGraph("myChart","pie",[ globalInfo.TotalConfirmed,globalInfo.NewConfirmed,globalInfo.TotalDeaths,globalInfo.NewDeaths,globalInfo.TotalRecovered,globalInfo.NewRecovered],["Total Cases","New Cases","Total Death","New Deaths","Total Recover","New Recover"],"Global Data")


        //now for the countries data and the graph

        for(i in finalData.Countries)
        {
            totalCase[i] = finalData.Countries[i].TotalConfirmed;
            totalRecovered[i] = finalData.Countries[i].TotalRecovered;
            totalDeaths[i] =  finalData.Countries[i].TotalDeaths;
            Cname[i] =  finalData.Countries[i].Country;

            document.getElementsByClassName('Table1Body')[0].innerHTML +=`
            
            <tr>
            <td scope="row" class="motakr">${finalData.Countries[i].Country}</th>
            <td>${finalData.Countries[i].TotalConfirmed}</td>
            <td>${finalData.Countries[i].NewConfirmed}</td>
            <td>${finalData.Countries[i].TotalRecovered}</td>
            <td>${finalData.Countries[i].NewRecovered}</td>
            <td>${finalData.Countries[i].TotalDeaths}</td>
            <td>${finalData.Countries[i].NewDeaths}</td>
            <td>${finalData.Countries[i].Date}</td>
            
          </tr> `

        }
        
        showTotalGraph("myChart2","line",totalCase,Cname,"Total Cases"); //this will the total case`s graph
        showTotalGraph("myChart3","line",totalRecovered,Cname,"Total Recovered"); //this will the total Recoverd`s graph
        showTotalGraph("myChart4","line",totalDeaths,Cname,"Total Death"); //this will the total death`s graph
    })

}else
{
    alert("Please check your internet connection...");

}



// function for the graph 
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


chartTypeCase.onchange = function()
{
    let theTypeOfChartIs = chartTypeCase.value;
    Array.from(document.getElementsByTagName('canvas')).forEach(ele =>{
        ele.remove();
    })
    document.getElementsByClassName('chartCasee')[0].innerHTML =`
    <canvas id="myChart" width="350" height="400"></canvas>
 
    `
    document.getElementsByClassName('charts')[0].innerHTML =`
    <canvas id="myChart2" width="400" height="400"></canvas>
    <canvas id="myChart3" width="400" height="400"></canvas>
 
    `
    document.getElementsByClassName('charts')[1].innerHTML =`
    <canvas id="myChart4" width="400" height="400"></canvas>
   
 
    `
 
    showTotalGraph("myChart",theTypeOfChartIs,[ globalInfo.TotalConfirmed,globalInfo.NewConfirmed,globalInfo.TotalDeaths,globalInfo.NewDeaths,globalInfo.TotalRecovered,globalInfo.NewRecovered],["Total Cases","New Cases","Total Death","New Deaths","Total Recover","New Recover"],"Global Data");

    showTotalGraph("myChart2",theTypeOfChartIs,totalCase,Cname,"Total Cases");
    showTotalGraph("myChart3",theTypeOfChartIs,totalRecovered,Cname,"Total Recovered");
    showTotalGraph("myChart4",theTypeOfChartIs,totalDeaths,Cname,"Total Death");
   
}


//for searching in the tables




function SearchIt() {
   
    // Declare variables

    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
  
    filter = input.value.toUpperCase();
  
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  

  document.getElementById('myInput').addEventListener("keyup", ()=>{
    SearchIt()
  });