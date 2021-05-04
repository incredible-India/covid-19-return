let dataOfIndias = [];//overall data of india we will keep in it
if(navigator.onLine)
{

    fetch('https://api.covid19api.com/summary')
    .then(result => result.json())
    .then(dataOfIndia => {
      
      for(i in dataOfIndia.Countries)
      {
        if(dataOfIndia.Countries[i].Country == "India")
        {
          dataOfIndias[0] = dataOfIndia.Countries[i].NewConfirmed;
          dataOfIndias[1] = dataOfIndia.Countries[i].TotalConfirmed;
          dataOfIndias[2] = dataOfIndia.Countries[i].NewDeaths;
          dataOfIndias[3] = dataOfIndia.Countries[i].TotalDeaths;
          dataOfIndias[4] = dataOfIndia.Countries[i].NewRecovered;
          dataOfIndias[5] = dataOfIndia.Countries[i].TotalRecovered;
          
          showTotalGraph('myChart','pie',dataOfIndias,['New Confirmed', 'Total Confirmed', 'New Deaths', 'Total Deaths', 'New Recovered','TotalRecovered'],"All Cases")
  
          document.getElementsByTagName('tbody')[0].innerHTML =`  
          <tr>
          <th scope="row"  style="background : rgba(54, 162, 235,0.2);">New Confirmed</th>
          <td>${dataOfIndia.Countries[i].NewConfirmed}</td>
   
        </tr>
  
        <tr>
          <th scope="row" style="background : rgba(255, 206, 86,0.2);">Total Confirmed</th>
          <td>${ dataOfIndia.Countries[i].TotalConfirmed}</td>
   
        </tr>
  
        <tr>
          <th scope="row"  style="background : rgba(0, 0, 255,0.2);">New Deaths</th>
          <td>${dataOfIndia.Countries[i].NewDeaths}</td>
   
        </tr>
  
        <tr>
          <th scope="row" style="background : rgba(255, 0, 0,0.2);">Total Deaths</th>
          <td>${dataOfIndia.Countries[i].TotalDeaths}</td>
   
        </tr>
        <tr>
          <th scope="row"  style="background : rgba(175, 62, 102,0.2);">New Recovered</th>
          <td>${dataOfIndia.Countries[i].NewRecovered}</td>
   
        </tr>
  
        <tr>
          <th scope="row" style="background : rgba(45, 192, 172,0.2);">Total Recovered</th>
          <td>${dataOfIndia.Countries[i].TotalRecovered}</td>
   
        </tr>
        
        <tr>
          <th scope="row" class="bg-light">Last Update</th>
          <td>${dataOfIndia.Countries[i].Date}</td>
   
        </tr>
        <tr>
        <th scope="row" class="bg-light"></th>
        <td>Stay Home Stay Safe</td>
 
      </tr>
        
        `
  
        }
      
      }
  
    
  
    })

//fetching api for the states of india...
fetch('https://api.rootnet.in/covid19-in/stats/latest')
.then(datac => datac.json())
.then(dataF => {

    for(i in dataF.regional)
    {
        console.log(dataF.regional[i].loc);
    }


})


}else
{
    alert("Please check your internet connection...");
}


// function for showing the graph 

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
                    'rgba(15, 102, 255, 0.2)',
                    'rgba(132,99,255, 0.2)'
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(15, 102, 255, 1)',
                    'rgba(132,99,255,1)'
                  
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
