
//ar blue = [["Blue Hoodie", 0.10, 20,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Ja5WXNfCk4nReh8DEiv5daOak7pLQyR_C4ytcrC4I", "blue"], ["Blue Jacket", 0.11, 20,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GPEfCk4nReh8DEiv5dbP604qrQwRfu3lOsew3w", "blue"], ["The Blue Death", 6.16, 20,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GrFfCk4nReh8DEiv5dYOq47qLIyRPG4__fadYA", "blue"]];
//var purple = [["Rustigé Egg", 41.93, 10,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WTAfCk4nReh8DEiv5daPKs-qrw1Q_i233e6VbI", "purple"]];
//var red = [["Shard of True Ice", 51.82, 10,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe4WLMfCk4nReh8DEiv5dbO6o7rrMwQPy59FTZYoM", "red"], ["Press Vest", 67.59, 10,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe7WPGfCk4nReh8DEiv5dRP6k6r7YwQfANQQVrlw", "red"], ["Frostbite", 95.33, 10, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5mLBfDY0jhyo8DEiv5dbMa4-qL0xR_C29ThoN1I/360fx360f", "red"]];
//var gold = [];
//let items = [["Frostbite", 95.33, 10, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5mLBfDY0jhyo8DEiv5dbMa4-qL0xR_C29ThoN1I/360fx360f", "red"],["Press Vest", 67.59, 10,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe7WPGfCk4nReh8DEiv5dRP6k6r7YwQfANQQVrlw", "red"],["Shard of True Ice", 51.82, 10,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe4WLMfCk4nReh8DEiv5dbO6o7rrMwQPy59FTZYoM", "red"],["Rustigé Egg", 41.93, 10,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WTAfCk4nReh8DEiv5daPKs-qrw1Q_i233e6VbI", "purple"],["The Blue Death", 6.16, 20,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GrFfCk4nReh8DEiv5dYOq47qLIyRPG4__fadYA", "blue"],["Blue Jacket", 0.11, 20,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GPEfCk4nReh8DEiv5dbP604qrQwRfu3lOsew3w", "blue"],["Blue Hoodie", 0.10, 20,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Ja5WXNfCk4nReh8DEiv5daOak7pLQyR_C4ytcrC4I", "blue"]]
const Cases = CasesData;
let selectedCaseId = 0;

let items = null;

var winner = [];
let counts = [];

var CaseCost = null; 
let balance = 100;
let winamount = 0;
let arrayCountNumber = 0;
let activespinnercount = 1;
let adjuster = 0;

let buttonClicked = false;
const buttonReal = document.getElementById('btn-open');
const buttonDemo = document.getElementById('btn-open-demo')

//Button Events:
document.getElementById("btn-open").onclick = function() {
  
  if (enoughbalance(activespinnercount)) {
  openCases(activespinnercount);
}
else {
  notenoughbalance();
}   
};

document.getElementById("btn-open-demo").onclick = function() {
  openCasesDemo(activespinnercount);
};
//document.getElementById("btn-open-3").onclick = openCase3;











document.addEventListener("DOMContentLoaded", function () {
  selectedCaseId = localStorage.getItem("selectedCaseId");
  console.log(selectedCaseId); // Überprüfe den Wert, um sicherzustellen, dass er korrekt ist

  // Jetzt kannst du auf das CasesData Array zugreifen
  if (CasesData && CasesData[selectedCaseId]) {
    items = CasesData[selectedCaseId][5];
    console.log(items); // Hier sind die items der ausgewählten Case
    // Führe weitere Verarbeitung mit den items durch
    getbalance();
    casecostonload();
    rowinfodetails();
    console.log("CaseCost====="+CaseCost);
    spinnerscreate(1);
    dropmaker();
    balanceonload();
  }
});

















//window.onload = spinnerscreate(1),dropmaker(),casecostonload(),balanceonload();

/*

document.getElementById("span-1").addEventListener("click", spinnerscreate(1), activespinnercount = 1);
document.getElementById("span-2").addEventListener("click", spinnerscreate(2), activespinnercount = 2);

*/

document.getElementById("span-1").addEventListener("click", function() {
  document.getElementById("spinners-container").innerHTML = "";
  spinnerscreate(1);
  activespinnercount = 1;
  spanchange(1)
  spanchangecostchanger(1)
});

document.getElementById("span-2").addEventListener("click", function() {
  document.getElementById("spinners-container").innerHTML = "";
  spinnerscreate(2);
  activespinnercount = 2;
  spanchange(2)
  spanchangecostchanger(2)
});

document.getElementById("span-3").addEventListener("click", function() {
  document.getElementById("spinners-container").innerHTML = "";
  spinnerscreate(3);
  activespinnercount = 3;
  spanchange(3)
  spanchangecostchanger(3)
});

document.getElementById("span-4").addEventListener("click", function() {
  document.getElementById("spinners-container").innerHTML = "";
  spinnerscreate(4);
  activespinnercount = 4;
  spanchange(4)
  spanchangecostchanger(4)
});


//Functions:

function openCase(casenumber) {

  buttonDelayReal(buttonReal,8000);
  //buttonDelayDemo(buttonDemo);


    document.getElementById("spinnerInner-"+casenumber).style.transform = "translateX(-277.266px)";
    document.getElementById("spinnerInner-"+casenumber).style.transition = "transform 0s ease 0s";

    

    if (buttonClicked) {
        // Clear the "spinnerInner" container
        document.getElementById("spinnerInner-"+casenumber).innerHTML = "";
      } else {
        buttonClicked = true;
      }
  

  let ergebnis = Math.floor(Math.random() * 100 + 1);
  let next = 0;


  // Iterate through the items array and update balance
  for (let i = 0; i < items.length; i++) {
    if (ergebnis <= items[i][2] + next) {
        balance += items[i][1];
        storebalance();

        
        console.log(items);
        console.log("New Balance: " + balance.toFixed(2));
         console.log("You've got: " + items[i][0]);
         console.log("The Items price is: " + items[i][1]);
         console.log("The Chance to get this item was: " + items[i][2]);
         console.log("The Random Number was: " + ergebnis);

        winner = i;
        console.log("The:" +winner)
      

        redivMaker(casenumber);
        countDivElements(casenumber);

        caseAnimation(i,winner,casenumber);
        
      break;
    } else {
      console.log("Not");
      next += items[i][2];
    }
  }
}


function openCaseDemo(casenumber) {

  buttonDelayReal(buttonReal);
  //buttonDelayDemo(buttonDemo);


    document.getElementById("spinnerInner-"+casenumber).style.transform = "translateX(-277.266px)";
    document.getElementById("spinnerInner-"+casenumber).style.transition = "transform 0s ease 0s";

    

    if (buttonClicked) {
        // Clear the "spinnerInner" container
        document.getElementById("spinnerInner-"+casenumber).innerHTML = "";
      } else {
        buttonClicked = true;
      }

  

    

  let ergebnis = Math.floor(Math.random() * 100 + 1);
  let next = 0;
  // Iterate through the items array and update balance
  for (let i = 0; i < items.length; i++) {
    if (ergebnis <= items[i][2] + next) {

        

        console.log(items);
         console.log("You've got: " + items[i][0]);
         console.log("The Items price is: " + items[i][1]);
         console.log("The Chance to get this item was: " + items[i][2]);
         console.log("The Random Number was: " + ergebnis);

        winner = i;
        console.log("The:" +winner)
      

        redivMaker(casenumber);
        countDivElements(casenumber);

        caseAnimation(i,winner,casenumber);
        
      break;
    } else {
      console.log("Not");
      next += items[i][2];
    }
  }
}

function divMaker(casenumber) {
   

  let ergebnis = Math.floor(Math.random() * 100 + 1);
  let next = 0;

    // Get the container element
    
  
    // Create 100 div elements using the divCreate function and append them to the container element
    for (let i = 0; i < 100; i++) {
      let rndItem = Math.floor(Math.random() * items.length);

      let spinnerInner = document.getElementById(`spinnerInner-${casenumber}`);  
      spinnerInner.appendChild(divCreate(i, rndItem, casenumber));
    }
  }


  

  function divCreate(i, rndItem, spinner) {
    // Create the div element
    var divElement = document.createElement("div");
    divElement.id = "spinner-" + spinner + "-item-" + i;
    divElement.className = "item " + items[rndItem][4];
  
    // Create the content div
    var divCon = document.createElement("div");
    divCon.className = "content";
    divElement.appendChild(divCon);
  
    // Create the item image element
    var itemImage = document.createElement("img");
    itemImage.src = items[rndItem][3];
    divCon.appendChild(itemImage);
  
    // Create the item name span
    var spanItemName = document.createElement("span");
    spanItemName.className = "name";
    var spanItemNameText = document.createTextNode(items[rndItem][0]);
    spanItemName.appendChild(spanItemNameText);
    divCon.appendChild(spanItemName);
  
    // Create the item price span
    var spanItemPrice = document.createElement("span");
    spanItemPrice.className = "price";
    divCon.appendChild(spanItemPrice);
  
    // Create the price wrapper div
    var divPriceWrapper = document.createElement("div");
    divPriceWrapper.className = "price-wrapper";
    spanItemPrice.appendChild(divPriceWrapper);
  
    // Create the price image wrapper div
    var divPriceImageWrapper = document.createElement("div");
    divPriceImageWrapper.className = "price-image-wrapper";
    divPriceWrapper.appendChild(divPriceImageWrapper);
  
    // Create the price image element
    var priceImage = document.createElement("img");
    priceImage.src = "images/gem.svg";
    divPriceImageWrapper.appendChild(priceImage);

    // Create the price text span
    var spanPriceText = document.createElement("span");
    var spanPriceTextNode = document.createTextNode(items[rndItem][1]);
    spanPriceText.appendChild(spanPriceTextNode);
    divPriceWrapper.appendChild(spanPriceText);
    
    // Return the div element
    return divElement;
    
  }








  function countDivElements(casenumber) {

    
  
    let ergebnis = Math.floor(Math.random() * 100 + 1);
    let next = 0;
  /*
    let items = [];
    // Add items to the items array in the specified order
    for (let i = gold.length - 1; i >= 0; i--) {
      items.push(gold[i]);
    }
    for (let i = red.length - 1; i >= 0; i--) {
      items.push(red[i]);
    }
    for (let i = purple.length - 1; i >= 0; i--) {
      items.push(purple[i]);
    }
    for (let i = blue.length - 1; i >= 0; i--) {
      items.push(blue[i]);
    }
    console.log(items); */


    // Create an empty array for each item in the items array
     counts = items.map(() => []);
  
    // Iterate through the div elements from spinner-1-item-65 to spinner-1-item-99
    for (let i = 45; i <= 91; i++) {
      // Get the div element
      let divElement = document.getElementById(`spinner-${casenumber}-item-${i}`);
  
      // Get the src attribute of the img element contained in the div element
      let src = divElement.querySelector("img").getAttribute("src");
  
      // Find the index of the item in the items array that corresponds to the src attribute
      let index = items.findIndex(item => item[3] === src);
  
      // Push the value of i to the corresponding array in the counts array
      counts[index].push(i);
    }
  
    // Log the counts array
    console.log(counts + "counts for case " + casenumber);
  }



  function caseAnimation(i,winner,casenumber){
    

    let exciteRandomPlus =  Math.floor((Math.random() * 75) + 1);

    let exciteRandomMinus =  Math.floor((Math.random() * -75) + 1);

    let exiteRandom = [exciteRandomPlus, exciteRandomMinus]

    let exciteRandomDecision =  Math.floor((Math.random() * 2));


    const spinnerElement = document.querySelector("#spinner-1");
    // Überprüfen, ob das Element gefunden wurde
    if (spinnerElement) {
        // Die Breite des Elements ermitteln
        const spinnerWidth = spinnerElement.getBoundingClientRect().width;
        console.log("Breite des Elements 'spinner-1':", spinnerWidth);



        
        adjuster = (spinnerWidth - 2440) / 2;

        /*
        if (screen.width <= 480) {
          adjuster += 40;
        } else {
          console.log("adjuster not changed");
        }*/

        /*if (screen.width <= 1024) {
          adjuster += 40;
        } else {
          console.log("adjuster not changed");
        }*/

        
        if (screen.width >= 1025) {
          adjuster += 32;
        } else {
          console.log("adjuster not changed");
        }

      



    } else {
        console.log("Das Element 'spinner-1' wurde nicht gefunden.");
    }


    let winnerArrayNumber = Math.floor((Math.random() * counts[i].length));
    console.log(winnerArrayNumber)
    arrayCountNumber = counts[winner][winnerArrayNumber];
    console.log(arrayCountNumber)
    let spinReach = (-arrayCountNumber * 160) +1092 + exiteRandom[exciteRandomDecision]+adjuster;
    let spinReachReal = (-arrayCountNumber * 160) +1092 +adjuster;
    console.log(spinReach)

    setTimeout(function() {
        
      spinnersound();

        const timeInterval = 7.5 / arrayCountNumber;
        //document.getElementById("spinnerInner").style.transition = "transform 7.5s cubic-bezier(0.1, 0, 0.2, 1) 0s";
      
        document.getElementById("spinnerInner-"+casenumber).style.transform = "translateX(" + spinReach + "px)";
        document.getElementById("spinnerInner-"+casenumber).style.transition = "transform 7.5s cubic-bezier(0.1, 0, 0.2, 1) 0s";
        //activateGoldItems(arrayCountNumber, spinReach,winner);
        
        
        setTimeout(function() {
          
          document.getElementById("spinnerInner-"+casenumber).style.transform = "translateX(" + spinReachReal + "px)";
          document.getElementById("spinnerInner-"+casenumber).style.transition = "transform 0.25s cubic-bezier(0.1, 0, 0.2, 1) 0s";
          

        }, 7500);

      }, 250);
  
      activateWinner(arrayCountNumber,casenumber);
      

  }



  function activateWinner(arrayCountNumber,casenumber) {

    setTimeout(function() {

     let live = document.getElementById("spinner-"+casenumber+"-item-" + arrayCountNumber).className;
    document.getElementById("spinner-"+casenumber+"-item-" + arrayCountNumber).className= live +(" active win"); 

    }, 7750);
    
  }



  function buttonDelayReal(button,time) {
    button.disabled = true; // Disable the button
    setTimeout(function () {
      button.disabled = false; // Enable the button after the delay
    }, time); // 8000 milliseconds (8 seconds) delay
  }

function dropmaker() {
  
  /*
  let items = [];

  // Add items to the items array in the specified order
  for (let i = gold.length - 1; i >= 0; i--) {
    items.push(gold[i]);
  }
  for (let i = red.length - 1; i >= 0; i--) {
    items.push(red[i]);
  }
  for (let i = purple.length - 1; i >= 0; i--) {
    items.push(purple[i]);
  }
  for (let i = blue.length - 1; i >= 0; i--) {
    items.push(blue[i]);
  }
  console.log(items); */



  let times = items.length;
  for (let i = 0; i < times; i++) {
    dropcreate(i);
  }
}

function dropcreate(i) {
  var rowdrop = document.createElement("div");
    rowdrop.className = "row drop " + items[i][4];

    var dropback = document.createElement("div");
    dropback.className = "back";
    rowdrop.appendChild(dropback);

    var dropleftcol = document.createElement("div");
    dropleftcol.className = "left col";
    rowdrop.appendChild(dropleftcol);
    
      var dropside = document.createElement("div");
      dropside.className = "side";
      dropleftcol.appendChild(dropside);

    var dropmiddlecol = document.createElement("div");
    dropmiddlecol.className = "middle col";    
    rowdrop.appendChild(dropmiddlecol);

      var dropmidcolimg = document.createElement("img");
      dropmidcolimg.src = items[i][3];
      dropmidcolimg.className = "item";
      dropmiddlecol.appendChild(dropmidcolimg);
    
    var droprightcol = document.createElement("div");
    droprightcol.className = "right col";
    rowdrop.appendChild(droprightcol);

      var droprightcoldiv= document.createElement("div");
      droprightcol.appendChild(droprightcoldiv);

        var droprightcolname = document.createElement("p");
        droprightcolname.className = "name";
          var droprightcolnametext = document.createTextNode(items[i][0]);
          droprightcolname.appendChild(droprightcolnametext);
        droprightcoldiv.appendChild(droprightcolname);

        var droprightcolprice = document.createElement("span");
        droprightcolprice.className = "price";
        droprightcoldiv.appendChild(droprightcolprice);

          var droprightcolpricewrapper = document.createElement("div");
          droprightcolpricewrapper.className = "price-wrapper";
         

            var droprightcolpriceimagewrapper = document.createElement("div");
            droprightcolpriceimagewrapper.className = "price-image-wrapper";
            droprightcolpricewrapper.appendChild(droprightcolpriceimagewrapper);

              var droprightcolpriceimage = document.createElement("img");
              droprightcolpriceimage.src = "images/gem.svg";
              droprightcolpriceimagewrapper.appendChild(droprightcolpriceimage);
            
            var droprightcolpricetext = document.createTextNode(items[i][1]);
            droprightcolpricewrapper.appendChild(droprightcolpricetext);
            droprightcolprice.appendChild(droprightcolpricewrapper);
        
        var droprightcolodds = document.createElement("span");
        droprightcolodds.className = "odds";
          var droprightcoloddstext = document.createTextNode(items[i][2] + "%");
          droprightcolodds.appendChild(droprightcoloddstext);
        droprightcoldiv.appendChild(droprightcolodds);

  document.getElementById("rowdrops").appendChild(rowdrop);
}

/*
function casecostonload() {
  let pricewrappercase = document.createTextNode(CaseCost);
  document.getElementById("price-wrapper-case").appendChild(pricewrappercase);
}
*/




function spinnerscreate(amount) {
  for (let i = 0; i < amount; i++) {
    spinnercreate(i+1);
    //spinnerinnermaker(i+1);
    divMaker(i+1);
  }
}

function spinnercreate(whichspinner) {
  let spinner = document.createElement("div");
  spinner.className = "spinner";
  spinner.id = "spinner-" + whichspinner;

   // let spinnerpointertop= document.createElement("div");
   // spinnerpointertop.className = "pointer top";
   // spinner.appendChild(spinnerpointertop);
    let spinnerleft= document.createElement("div");
    spinnerleft.className = "left";
    spinner.appendChild(spinnerleft);

    let spinnerright= document.createElement("div");
    spinnerright.className = "right";
    spinner.appendChild(spinnerright);

    let spinnerinnercreater = document.createElement("div");
    spinnerinnercreater.className = "inner";
    spinnerinnercreater.id = "spinnerInner-" + whichspinner;
    spinnerinnercreater.style.transform = "translateX(-277.266px)";
    spinnerinnercreater.style.transition = "transform 0s ease 0s";
    spinner.appendChild(spinnerinnercreater);
    document.getElementById("spinners-container").appendChild(spinner);
}





function openCases(casesnumber) {

    balance -= CaseCost*casesnumber;
    storebalance();
    document.getElementById("balance-amount").innerHTML = balance.toFixed(2) + "€";

  for (let i = 0; i < casesnumber; i++) {
      openCase(i+1);
    }

  setTimeout(function() {
  console.log("!!!!The displayed balance is:" + balance.toFixed(2))
  document.getElementById("balance-amount").innerHTML = balance.toFixed(2) + "€";
  spinsoundwin();
  blinkbalancebutton()
   
  /*(i == 0){
  setTimeout(function() {
  playSoundOpWin();
    }, 300);
  }
  */


    }, 7750);
}



function openCasesDemo(casesnumber) {

for (let i = 0; i < casesnumber; i++) {
    openCaseDemo(i+1);
  }

  

setTimeout(function() {
//playSound();
console.log("Soundplayed"); 
/*(i == 0){
setTimeout(function() {
playSoundOpWin();
  }, 300);
}
*/
spinsoundwin();

  }, 7750);
}





function redivMaker(casenumber) {
   
  
  

let ergebnis = Math.floor(Math.random() * 100 + 1);
let next = 0;
/*
  let items = [];
// Add items to the items array in the specified order
for (let i = gold.length - 1; i >= 0; i--) {
  items.push(gold[i]);
}
for (let i = red.length - 1; i >= 0; i--) {
  items.push(red[i]);
}
for (let i = purple.length - 1; i >= 0; i--) {
  items.push(purple[i]);
}
for (let i = blue.length - 1; i >= 0; i--) {
  items.push(blue[i]);
}
console.log(items); */
 
  // Get the container element
  

  // Create 100 div elements using the divCreate function and append them to the container element
  for (let i = 0; i < 100; i++) {
    let rndItem = Math.floor(Math.random() * items.length);

    let spinnerInner = document.getElementById("spinnerInner-" + casenumber);  
    spinnerInner.appendChild(divCreate(i, rndItem, casenumber));
  }
}

function spanchange(number){
  for (let i = 0; i < 4; i++) {
  document.getElementById("spannumber-"+ (i+1)).className="";
  }
  document.getElementById("spannumber-" + number).className="active";
}

function spanchangecostchanger(amount){

  document.getElementById("price-wrapper-case").innerHTML = "";
  let priceimgwrapper = document.createElement("div");
  priceimgwrapper.className = "price-image-wrapper";
  document.getElementById("price-wrapper-case").appendChild(priceimgwrapper);
    let priceimgwrapperimg = document.createElement("img");
    priceimgwrapperimg.src = "images/gem.svg";
    priceimgwrapper.appendChild(priceimgwrapperimg);
  let pricewrappercasetext = document.createTextNode((CaseCost*amount).toFixed(2));
  document.getElementById("price-wrapper-case").appendChild(pricewrappercasetext);

}



function enoughbalance(amount) {
  if (balance>(CaseCost*amount)) {
  return true;
  }
  else {
    return false;
  }
}

function notenoughbalance() {
  // Füge die CSS-Klasse hinzu, um den Button rot zu machen und zu wackeln
  document.getElementById("btn-open").classList.add("blink-shake-button");

  // Entferne die CSS-Klasse nach 2 Sekunden, um den Button wieder in den ursprünglichen Zustand zu versetzen
  setTimeout(function() {
    document.getElementById("btn-open").classList.remove("blink-shake-button");
  }, 2000);

  buttonDelayReal(buttonReal,1000)

}

function spinnersound() {
  var audio = new Audio("sounds/spinsound.mp3");

  audio.play();
}

function spinsoundwin() {
  var audio = new Audio("sounds/winsound.mp3");

  audio.play();
}

function blinkbalancebutton() {
  const button = document.getElementById("b_balance");
  
  button.classList.add("green-blink");
  
  setTimeout(() => {
    button.classList.remove("green-blink");
  }, 300);
}

/*
function rowinfodetails() {
  
  let rowinfo = document.createElement("div");
  rowinfo.className = "row info";

    let imagecol4 = document.createElement("div");
    imagecol4.className = "image col-4";
    rowinfo.appendChild(imagecol4);
      let imagecol4img = document.createElement("img");
      imagecol4img.src = Cases[selectedCaseId][2];
      imagecol4.appendChild(imagecol4img);

    let contentcol = document.createElement("div");
    contentcol.className = "content col";
    rowinfo.appendChild(contentcol);

      let innercontent = document.createElement("div");
      innercontent.className = "inner-content";
      contentcol.appendChild(innercontent);

        let innercontentname = document.createElement("span");
        innercontentname.className = "name";
          let innercontentnametext = document.createTextNode(Cases[selectedCaseId][0]);
          innercontentname.appendChild(innercontentnametext);
          innercontent.appendChild(innercontentname);
          
        let innercontentnumbers = document.createElement("div");
        innercontentnumbers.className = "numbers";
        innercontent.appendChild(innercontentnumbers);
           let innercontentnumbersdiv = document.createElement("div");
           innercontentnumbers.appendChild(innercontentnumbersdiv);

            let span1 = document.createElement("div");
            span1.id = "span-1";
            innercontentnumbersdiv.appendChild(span1);
              let spannumber1 = document.createElement("span");
              spannumber1.className = "active";
              spannumber1.id = "spannumber-1";
              span1.appendChild(spannumber1);
                let spannumber1text = document.createTextNode("1");
                spannumber1.appendChild(spannumber1text);

            let span2 = document.createElement("div");
            span2.id = "span-2";
            innercontentnumbersdiv.appendChild(span2);
              let spannumber2 = document.createElement("span");
              spannumber2.id = "spannumber-2";
              span2.appendChild(spannumber2);
                let spannumber2text = document.createTextNode("2");
                spannumber2.appendChild(spannumber2text);

            let span3 = document.createElement("div");
            span3.id = "span-3";
            innercontentnumbersdiv.appendChild(span3);
            let spannumber3 = document.createElement("span");
              spannumber3.id = "spannumber-3";
              span3.appendChild(spannumber3);
                let spannumber3text = document.createTextNode("3");
                spannumber3.appendChild(spannumber3text);

            let span4 = document.createElement("div");
            span4.id = "span-4";
            innercontentnumbersdiv.appendChild(span4);
            let spannumber4 = document.createElement("span");
              spannumber4.id = "spannumber-4";
              span4.appendChild(spannumber4);
                let spannumber4text = document.createTextNode("4");
                spannumber4.appendChild(spannumber4text);

          let innercontentbuttons = document.createElement("div");
          innercontentbuttons.className = "buttons";
          innercontent.appendChild(innercontentbuttons);

            let icopenbutton = document.createElement("button");
            icopenbutton.id = "btn-open";
            icopenbutton.className = "button open";
            innercontentbuttons.appendChild(icopenbutton);

              let icopenbuttonspan = document.createElement("span");
              icopenbutton.appendChild(icopenbuttonspan);

                let icbuttonopenspantext = document.createTextNode(" Open case for ");
                icopenbuttonspan.appendChild(icbuttonopenspantext);

                let icopenbuttonspanpricewrappercase = document.createElement("div");
                icopenbuttonspanpricewrappercase.id = "price-wrapper-case";
                icopenbuttonspanpricewrappercase.className = "price-wrapper";
                icopenbuttonspan.appendChild(icopenbuttonspanpricewrappercase);

                  let icpriceimmagewrapper = document.createElement("div");
                  icpriceimmagewrapper.className = "price-image-wrapper";
                  icopenbuttonspanpricewrappercase.appendChild(icpriceimmagewrapper);
                    let icpriceimmagewrapperimg = document.createElement("img");
                    icpriceimmagewrapperimg.src = "images/gem.svg";
                    icpriceimmagewrapper.appendChild(icpriceimmagewrapperimg);

                  let icopenbuttonspanpricewrappercasetext = document.createTextNode((CaseCost*1).toFixed(2));
                  icopenbuttonspanpricewrappercase.appendChild(icopenbuttonspanpricewrappercasetext);

            let icopenbuttondemo = document.createElement("span");
            icopenbuttondemo.id = "btn-open-demo";
            icopenbuttondemo.className = "button demo";
              let icopenbuttondemotext = document.createTextNode("Demo Spin");
              icopenbuttondemo.appendChild(icopenbuttondemotext);
              innercontentbuttons.appendChild(icopenbuttondemo);

          let icfairness = document.createElement("div");
          icfairness.className = "fairness";

            let icfairnessdiv1 = document.createElement("div");
            let icfairnessdiv1text = document.createTextNode("Server Seed Hash: 1618897bdef643e8703cf2");
            icfairnessdiv1.appendChild(icfairnessdiv1text);
            icfairness.appendChild(icfairnessdiv1);

            let icfairnessdiv2 = document.createElement("div");
            let icfairnessdiv2text = document.createTextNode("Client Seed: 285554dbf0d9b");
            icfairnessdiv2.appendChild(icfairnessdiv2text);
            icfairness.appendChild(icfairnessdiv2);

          innercontent.appendChild(icfairness);

    document.getElementById("appContent").appendChild(rowinfo);
}

*/

function rowinfodetails() {
  let imagecol4img = document.createElement("img");
  imagecol4img.src = Cases[selectedCaseId][2];
  document.getElementById("image-col-4").appendChild(imagecol4img);

  let icnametext = document.createTextNode(Cases[selectedCaseId][0]);
  document.getElementById("icname").appendChild(icnametext);

  let icpricewrappercasetext = document.createTextNode((CaseCost*1).toFixed(2));
  document.getElementById("price-wrapper-case").appendChild(icpricewrappercasetext);
}

function casecostonload() {
  CaseCost = Cases[selectedCaseId][1];
}

function getbalance() {
  if (localStorage.getItem("balance") === null) {
    balance = 250;
    storebalance();
  }
  else {
   balance = parseFloat(localStorage.getItem("balance")); 
  }
}

function storebalance(){
  localStorage.setItem("balance", balance);
}


function balancefield() {
  let balanceinput = document.createElement("input");
  balanceinput.placeholder = "New Balance";
  balanceinput.id = "balance-input";
  balanceinput.type = "number";
  balanceinput.min = "0";
  balanceinput.max = "100000";
  balanceinput.className = "balanceinput";

  let balanceinputbutton = document.createElement("button");
  balanceinputbutton.id = "balance-input-button";
  balanceinputbutton.className = "balanceinputbutton";
    let balanceinputbuttontext = document.createTextNode("Change");
    balanceinputbutton.appendChild(balanceinputbuttontext);

  document.getElementById("balance-input-container").appendChild(balanceinput);
  document.getElementById("balance-input-container").appendChild(balanceinputbutton);

  document.getElementById("balance-input-button").onclick = function() {

    let balanceValue = document.getElementById("balance-input").value;
  
    if ( balanceValue >= 0 && balanceValue <= 100000 ){
    balance = balanceValue;
    document.getElementById("balance-amount").innerHTML = balance + "€";
    storebalance();
    document.getElementById("balance-input-container").innerHTML = "";
    }
    else {
      console.log("Balance must be between 0 and 100000");
    }
    
  } 

}


document.getElementById("b_balance").onclick = function() {
  balancefield();
};


function balanceonload() {
  document.getElementById("balance-amount").innerHTML = balance.toFixed(2) + "€";
}