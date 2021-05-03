if(navigator.onLine)
{

    fetch('https://api.covid19api.com/summary')
    .then(recivedData => recivedData.json())
    .then(finalData => {
        
    })

}else
{
    alert("Please check your internet connection...");

}