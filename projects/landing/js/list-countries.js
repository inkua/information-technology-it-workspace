var countries = "https://restcountries.com/v3.1/all";

Show_Countries();

function Show_Countries()
{
    fetch(countries).then(function(result){
        return result.json();
    }).then(function(Data){
        for(i = 0; i < Data.length; i++)
        {
            let option = document.createElement("option");
            option.value = Data[i].cca3;
            option.innerHTML = Data[i].name.common;

            document.getElementById("combo-box").appendChild(option);
        }
    })
}