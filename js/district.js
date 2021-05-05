if(navigator.onLine)
{
    fetch('https://api.covid19india.org/v2/state_district_wise.json')
    .then(dataR => dataR.json())
    .then(dataF => {

        for(i in dataF)
        {
            for(j in dataF[i].districtData)
            {
               
                

                
                document.getElementsByClassName('Table1Body')[0].innerHTML +=`
            
                <tr>
               
                <td scope="row" class="motakr">${dataF[i].districtData[j].district}</th>
                <td>${dataF[i].districtData[j].active}</td>
                <td>${dataF[i].districtData[j].confirmed}</td>
                <td>${dataF[i].districtData[j].recovered}</td>
                <td>${dataF[i].districtData[j].deceased}</td>
                <td>${dataF[i].districtData[j].delta.confirmed}</td>
                <td>${dataF[i].districtData[j].delta.recovered}</td>
                <td>${dataF[i].districtData[j].delta.deceased}</td>
             
                
              </tr> `
                

     // console.log(dataF[i].districtData[j].district);
            }
       
        }
    })


}else
{
    alert("Please check Your Internet Connection...");
}




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
