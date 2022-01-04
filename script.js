//registration function
// function emailCheck(){
//     let email1=document.getElementById('email1');
//     let email2=document.getElementById('email2');
//     if (email1 === email2){
//         alert("Thank you for your submission!")
//        return true;
//        window.reload();
//     }
//      else{
//             alert("Email addresses must match!")
//         }
//     }
//    emailCheck();

//registration form auto reset
function pageReset(){
   alert('Thank you for your submission!')
   window.location = window.location.href;
}

    //weather function
    const site= 'http://api.openweathermap.org/data/2.5/onecall?lat=39.1031&lon=-81.5120&units=imperial&appid=2773902c399a83177a122aa87fbc0f89';
function weather1() {    
    fetch(site)
        .then((response) => response.json())
            .then(data => {
    document.getElementById('weathertemp').innerHTML = data.current.temp;
    document.getElementById('weatherfeel').innerHTML = data.current.feels_like;
    document.getElementById('weatherDescription').innerHTML = data.current.weather[0].description;
    document.getElementById('weatherHumidity').innerHTML = data.current.humidity;
    console.log(data);
    })
}

weather1();