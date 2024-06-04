
const countryList = document.querySelector(".country-list")
let p = fetch("https://restcountries.com/v3.1/all");
p.then((res) => {
    return res.json()
}).then((value2) => {
    console.log(value2)
    //console.log(value2[1].name.common)
   // window.addEventListener("DOMContentLoaded",function(){
        let box = value2.map(function(item){
            //console.log(item.currencies[0])
            //let {currency} = item.currencies
            //console.log(currency.name)
            return `<div class="box">
        <div class="flag">
            <img src="${item.flags.png}" alt="">
        </div>
        <div class="part2">
            <div class="details">
                <h2 class="name">Name : ${item.name.common}</h2>
                <p class="currency">Currencies : </p>
                <p class="dateTime">Current date and time: </p>
            </div>
            <div class="btn">
                <a href="${item.maps.googleMaps}">
                    <button id="myBtn" class="btn1">Show Map</button>
                </a>
                <a href="./detail.html">
                    <button class="btn2">Details</button>
               </a>
            </div>
        </div>
    </div>`
    
        })
        
        box = box.join("")
        countryList.innerHTML = box
   // })  
}).catch((error)=>{
    console.log(error)
})






