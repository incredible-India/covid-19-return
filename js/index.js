let LoaderFile  = document.getElementsByClassName('loader')[0];//loader at the starting it will show..



//this is the loader when body`s document will be ready it will be removed

document.body.onload = function (){

    LoaderFile.style.display = "none";

}
////////////////////////////////////////

//graph for the India data
var dataOfIndias = [];
if(navigator.onLine)
{
  document.getElementsByClassName('alert-danger')[0].style.display = "none";


  try {
    
    
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
        ShowGraph(dataOfIndias)

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
      
      `

      }
    
    }

  

  })

  } catch (error) {

    document.getElementsByClassName('alert-danger')[0].innerText = `please check your internet connection...${error}`;
  document.getElementsByClassName('alert-danger')[0].style.display = "block";
  ShowGraph([null,null,null,null]);
    
  }


}else
{

  document.getElementsByClassName('alert-danger')[0].innerText = "please check your internet connection...";
  document.getElementsByClassName('alert-danger')[0].style.display = "block";
  ShowGraph([null,null,null,null]);


}


function ShowGraph(arrayofdata)
{
  
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['New Confirmed', 'Total Confirmed', 'New Deaths', 'Total Deaths', 'New Recovered','TotalRecovered'],
        datasets: [{
            label: '# of Votes',
            data: arrayofdata,
            backgroundColor: [
               
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(0,0,255)',
                'rgba(255,0,0)',
                'rgba(175, 62, 102)',
                'rgba(45, 192, 172)',
               
            ],
            borderColor: [
            'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(0,0,255)',
                'rgba(255,0,0)',
                'rgba(175, 62, 102)',
                'rgba(45, 192, 172)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive : false

      
        ,scales: {
            y: {
                beginAtZero: true
            }
        }
        , plugins: {
            title: {
                display: true,
                text: 'India'
                ,fontSize : '40px'
            }
        },

        animation :{
          duration : 1000,
          easing : "linear"
          ,loop : false
        }
    }
});

}



///graph for the world 
var dataOfWorld = [];

  document.getElementsByClassName('alert-danger')[0].style.display = "none";


  try {
    
    
  fetch('https://api.covid19api.com/summary')
  .then(result => result.json())
  .then(dataOfIndia => {
    
    for(i in dataOfIndia.Global)
    {
      
      
        dataOfWorld[0] = dataOfIndia.Global.NewConfirmed;
        dataOfWorld[1] = dataOfIndia.Global.TotalConfirmed;
        dataOfWorld[2] = dataOfIndia.Global.NewDeaths;
        dataOfWorld[3] = dataOfIndia.Global.TotalDeaths;
        dataOfWorld[4] = dataOfIndia.Global.NewRecovered;
        dataOfWorld[5] = dataOfIndia.Global.TotalRecovered;
       

      
    
    }

    ShowGraphs(dataOfWorld)

    document.getElementsByTagName('tbody')[1].innerHTML =`  
        <tr>
        <th scope="row" style="background : rgba(54, 162, 235,0.2);">New Confirmed</th>
        <td>${dataOfIndia.Global.NewConfirmed}</td>
 
      </tr>

      <tr>
        <th scope="row" style="background : rgba(255, 206, 86,0.2);">Total Confirmed</th>
        <td>${ dataOfIndia.Global.TotalConfirmed}</td>
 
      </tr>

      <tr>
        <th scope="row" style="background : rgba(0, 0, 255,0.2);">New Deaths</th>
        <td>${dataOfIndia.Global.NewDeaths}</td>
 
      </tr>

      <tr>
        <th scope="row" style="background : rgba(255, 0, 0,0.2);">Total Deaths</th>
        <td>${dataOfIndia.Global.TotalDeaths}</td>
 
      </tr>
      <tr>
        <th scope="row" style="background : rgba(175, 62, 102,0.2);">New Recovered</th>
        <td>${dataOfIndia.Global.NewRecovered}</td>
 
      </tr>

      <tr>
        <th scope="row" style="background : rgba(45, 192, 172,0.2);">Total Recovered</th>
        <td>${dataOfIndia.Global.TotalRecovered}</td>
 
      </tr>

      
      <tr>
        <th scope="row" class="bg-light">Last Update</th>
        <td>${dataOfIndia.Global.Date}</td>
 
      </tr>
      
      
      `

  })

  } catch (error) {

    document.getElementsByClassName('alert-danger')[0].innerText = `please check your internet connection...${error}`;
  document.getElementsByClassName('alert-danger')[0].style.display = "block";
  ShowGraph([null,null,null,null]);
    
  }




function ShowGraphs(arrayofdata)
{
  
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['New Confirmed', 'Total Confirmed', 'New Deaths', 'Total Deaths', 'New Recovered','TotalRecovered'],
        datasets: [{
            label: '# of Votes',
            data: arrayofdata,
            backgroundColor: [
               
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(0,0,255)',
                'rgba(255,0,0)',
                'rgba(175, 62, 102)',
                'rgba(45, 192, 172)',
               
            ],
            borderColor: [
            'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(0,0,255)',
                'rgba(255,0,0)',
                'rgba(175, 62, 102)',
                'rgba(45, 192, 172)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive : false

      
        ,scales: {
            y: {
                beginAtZero: true
            }
        }
        , plugins: {
            title: {
                display: true,
                text: 'World'
                ,fontSize : '40px'
            }
        },

        animation :{
          duration : 1000,
          easing : "linear"
          ,loop : false
        }
    }
});

}



//for the top 5 countries


