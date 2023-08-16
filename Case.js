
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
//let anNum = null;
let spanElementsClickable = true;

let activeItemIndex = -1;

let spinneraxis = "x";

let pointeraxis = 0;

let buttonClicked = false;
let Divver = false;
let PointersThere = true;
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
  
  if (spanElementsClickable) {
  document.getElementById("spinners-container").innerHTML = "";
  spinneraxis = "x";
  spinnerscreate(1);
  activespinnercount = 1;
  spanchange(1)
  spanchangecostchanger(1)

  orientationerChangex();

  pointeraxis = 0;

  if (!PointersThere) {
    pointerCreate();
    PointersThere = true;
  }
  
  pointerChangey()
  showFirstPair()
  
}

});

document.getElementById("span-2").addEventListener("click", function() {
  if (spanElementsClickable) {
  document.getElementById("spinners-container").innerHTML = "";
  spinneraxis = "y";
  spinnerscreatey(2);
  activespinnercount = 2;
  spanchange(2)
  spanchangecostchanger(2)
  
  orientationerChangey();

  pointeraxis = 1;
  


  if (!PointersThere) {
    pointerCreate();
    PointersThere = true;
  }

  pointerChangex()
  showSecondPair()
}
});

document.getElementById("span-3").addEventListener("click", function() {
  if (spanElementsClickable) {
  document.getElementById("spinners-container").innerHTML = "";
  spinneraxis = "y";
  spinnerscreatey(3);
  activespinnercount = 3;
  spanchange(3)
  spanchangecostchanger(3)

  orientationerChangey();

  pointeraxis = 1;
  
  if (!PointersThere) {
    pointerCreate();
    PointersThere = true;
  }
  pointerChangex()
  showSecondPair()
}
});

document.getElementById("span-4").addEventListener("click", function() {
  if (spanElementsClickable) {
  document.getElementById("spinners-container").innerHTML = "";
  spinneraxis = "y";
  spinnerscreatey(4);
  activespinnercount = 4;
  spanchange(4)
  spanchangecostchanger(4)

  orientationerChangey();

  pointeraxis = 1;
  
  if (!PointersThere) {
    pointerCreate();
    PointersThere = true;
  }
  pointerChangex()
  showSecondPair()
}
});


//Functions:

function openCase(casenumber, anNum) {

  buttonDelayReal(buttonReal,8000);
  //buttonDelayDemo(buttonDemo);


    document.getElementById("spinnerInner-"+casenumber).style.transform = "translate"+ spinneraxis +"(-10.75%)";
    document.getElementById("spinnerInner-"+casenumber).style.transition = "transform 0s ease 0s";

    

    if (buttonClicked) {
        // Clear the "spinnerInner" container
        document.getElementById("spinnerInner-"+casenumber).innerHTML = "";
      } else {
        buttonClicked = true;
      }


  if (!PointersThere) {
    pointerCreate();
    PointersThere = true;
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
      
        if (Divver) {
          redivMaker(casenumber);
        }
        else {
          Divver=true;
        }
        
        //countDivElements(casenumber);

        caseAnimation(winner,casenumber, anNum);
        //itemActivator(casenumber);
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


    document.getElementById("spinnerInner-"+casenumber).style.transform = "translate"+spinneraxis+"(-277.266px)";
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

        caseAnimation(winner,casenumber);
        
      break;
    } else {
      console.log("Not");
      next += items[i][2];
    }
  }
}

function divMaker(casenumber) {
   
    // Create 100 div elements using the divCreate function and append them to the container element
    for (let i = 0; i < 60; i++) {
      let rndItem = Math.floor(Math.random() * items.length);

      let spinnerInner = document.getElementById(`spinnerInner-${casenumber}`);  
      spinnerInner.appendChild(divCreate(i, rndItem, casenumber));
    }


    let spinnerItem = document.getElementById("spinner-" + casenumber + "-item-6");
    spinnerItem.querySelector(".item").classList.add("active");
    spinnerItem.querySelector(".itemImageContainer").classList.add("active");



  }


  

  function divCreate(i, rndItem, spinner) {

    let divElement = document.createElement("div");
    divElement.id = "spinner-" + spinner + "-item-" + i;
    divElement.className = "itemcontainer";
    divElement.style.transform = "none";
  
    let item = document.createElement("div");
    item.className = "item";
    divElement.appendChild(item);
  
    let itemImageContainer = document.createElement("div");
    itemImageContainer.className = "itemImageContainer";
    item.appendChild(itemImageContainer);

    let itemImage = document.createElement("img");
    itemImage.alt = items[rndItem][0];
    itemImage.src = items[rndItem][3];
    itemImage.loading = "lazy";
    itemImage.className = "itemImage";
    itemImage.style.position = "absolute";
    itemImage.style.height = "100%";
    itemImage.style.width = "100%";
    itemImage.style.inset = "0px";
    itemImage.style.color = "transparent";
    itemImageContainer.appendChild(itemImage);
  

    let itemBackground = document.createElement("div");
    itemBackground.style.filter = items[rndItem][4][1];
    itemBackground.draggable= "false";
    itemBackground.className = "itemBackground";
    item.appendChild(itemBackground);

    let itemBackgroundImage = document.createElement("img");
    itemBackgroundImage.alt = items[rndItem][0];
    itemBackgroundImage.srcset = items[rndItem][4][0] + " 1x", items[rndItem][4][0] + " 2x";
    itemBackgroundImage.src = items[rndItem][4][0];
    itemBackgroundImage.width = "64";
    itemBackgroundImage.height = "64";
    itemBackgroundImage.className = "itemBackgroundImage";
    itemBackgroundImage.loading = "lazy";
    itemBackgroundImage.style.color = "transparent";
    itemBackground.appendChild(itemBackgroundImage);
  return divElement;
  }






/*

  function countDivElements(casenumber) {

    
  
    let ergebnis = Math.floor(Math.random() * 100 + 1);
    let next = 0;


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
  } */



  function caseAnimation(winner,casenumber, anNum){
    
    winItemCreate(winner,casenumber, anNum);


  

  //let starter = 7;
  let starterObject = { value: 7 };


    
  let animationInterval = setInterval(function() {

    if (spinneraxis === "x") {
      itemActivatory(casenumber,starterObject);
    }
    else {
      itemActivatorx(casenumber,starterObject);   
    }
  },4); 

    

    setTimeout(function() {
        
      //spinnersound();

       // const timeInterval = 7.5 / arrayCountNumber;
        //document.getElementById("spinnerInner").style.transition = "transform 7.5s cubic-bezier(0.1, 0, 0.2, 1) 0s";
      
        document.getElementById("spinnerInner-"+casenumber).style.transform = "translate"+spinneraxis+"("+Animations[anNum][1]+")";
        document.getElementById("spinnerInner-"+casenumber).style.transition = "transform 7.5s cubic-bezier(0.1, 0, 0.2, 1) 0s";
        //activateGoldItems(arrayCountNumber, spinReach,winner);
        
        
        setTimeout(function() {
          
          document.getElementById("spinnerInner-"+casenumber).style.transform = "translate"+spinneraxis+"("+Animations[anNum][2]+")";
          document.getElementById("spinnerInner-"+casenumber).style.transition = "transform 0.25s cubic-bezier(0.1, 0, 0.2, 1) 0s";
          
          clearInterval(animationInterval);
        }, 7500);

      }, 250);
  
      activateWinner(casenumber, winner, anNum);
      

  }

  function rndAnimation() {
    let rndAnNum = Math.floor(Math.random() * 4);
    console.log("DieRnd Animation: " + rndAnNum);

    return rndAnNum;
  }

  function winItemCreate(winner,casenumber,anNum) {
    // Änderungen am item-Element
    let itemElement = document.getElementById("spinner-" + casenumber + "-item-" + Animations[anNum][0]);
    //itemElement.className = "item win";

    // Änderungen am itemImageContainer-Element
    let itemImageContainer = itemElement.querySelector(".itemImageContainer");
    //itemImageContainer.className = "itemImageContainerWin";

    // Änderungen am itemImage-Element
    let itemImage = itemImageContainer.querySelector(".itemImage");
    itemImage.alt = items[winner][0];
    itemImage.src = items[winner][3];

    // Änderungen am itemBackground-Element
    let itemBackground = itemElement.querySelector(".itemBackground");
    itemBackground.style.filter = items[winner][4][1];

    let itemBackgroundImage = itemElement.querySelector(".itemBackgroundImage");
    itemBackgroundImage.alt = items[winner][0];
    itemBackgroundImage.srcset = items[winner][4][0] + " 1x", items[winner][4][0] + " 2x";
    itemBackgroundImage.src = items[winner][4][0];
  }





  function activateWinner(casenumber, winner, anNum) {

    setTimeout(function() {

      let itemElement = document.getElementById("spinner-" + casenumber + "-item-" + Animations[anNum][0]);
      let itemContainer = itemElement.querySelector(".item");
      itemContainer.className = "itemWin";
      let itemImageContainer = itemElement.querySelector(".itemImageContainer");
      itemImageContainer.className = "itemImageContainerWin";


      let itemWinInfo = document.createElement("div");
      itemWinInfo.className = "itemWinInfo";
      itemWinInfo.style.opacity = "1";
      itemWinInfo.style.transform = "none";
      itemElement.appendChild(itemWinInfo);


      let itemWinInfoContainer = document.createElement("div");
      itemWinInfoContainer.className = "itemWinInfoContainer";
      itemWinInfo.appendChild(itemWinInfoContainer);


      let itemWinNameContainer = document.createElement("div");
      itemWinNameContainer.className = "itemWinNameContainer";
      itemWinInfoContainer.appendChild(itemWinNameContainer);

      let itemWinName = document.createElement("div");
      itemWinName.className = "itemWinName";
      itemWinNameContainer.appendChild(itemWinName);
      let itemWinNameText = document.createTextNode(items[winner][0]);
      itemWinName.appendChild(itemWinNameText);




      let itemWinprice = document.createElement("span");
      itemWinprice.className = "price";
      itemWinInfoContainer.appendChild(itemWinprice);

      let itemWinpriceWrapper = document.createElement("div");
      itemWinpriceWrapper.className = "price-wrapper";
      itemWinprice.appendChild(itemWinpriceWrapper);   

      let itemWinimageWrapper = document.createElement("div");
      itemWinimageWrapper.className = "price-image-wrapper";
      itemWinpriceWrapper.appendChild(itemWinimageWrapper);

      let itemWinImage = document.createElement("img");
      itemWinImage.src = "images/gem.svg";
      itemWinimageWrapper.appendChild(itemWinImage);
            
      let itemWinpriceText = document.createTextNode(items[winner][1]);
      itemWinpriceWrapper.appendChild(itemWinpriceText);
     



      initializePointers();
     // document.getElementById("pointers").innerHTML = "";
    //  PointersThere = false;     


    }, 7750);
    
  }


/*
  function pointerCreate() {
    let pointerHand = document.getElementById("pointers");

    let pointer1 = document.createElement("svg");
    pointer1.stroke = "currentColor";
    pointer1.fill = "currentColor";
    pointer1.viweBox = "0 0 24 24";
    pointer1.className = "pointercolor";
    pointer1.height = "1em";
    pointer1.width = "1em";
    pointer1.xmlns = "http://www.w3.org/2000/svg";
    pointerHand.appendChild("pointer1");

    let pointer1path = document.createElement("path");
    pointer1path.d = Pointers[pointeraxis][0];
    pointer1.appendChild(pointer1path);

    let pointer2 = document.createElement("svg");
    pointer2.stroke = "currentColor";
    pointer2.fill = "currentColor";
    pointer2.viweBox = "0 0 24 24";
    pointer2.className = "pointercolor";
    pointer2.height = "1em";
    pointer2.width = "1em";
    pointer2.xmlns = "http://www.w3.org/2000/svg";
    pointerHand.appendChild("pointer2");

    let pointer2path = document.createElement("path");
    pointer2path.d = Pointers[pointeraxis][1];
    pointer2.appendChild(pointer2path);

  }

  function pointerCreate() {
    let pointerHand = document.getElementById("pointers");

    let pointer1 = document.createElement("svg");
    pointer1.setAttribute("stroke", "currentColor");
    pointer1.setAttribute("fill", "currentColor");
    pointer1.setAttribute("stroke-width", "0");
    pointer1.setAttribute("viewBox", "0 0 24 24");
    pointer1.className = "pointercolor";
    pointer1.setAttribute("height", "1em"); // Set the height to a value that fits your design
    pointer1.setAttribute("width", "1em");  // Set the width to a value that fits your design
    pointer1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    pointerHand.appendChild(pointer1);

    let pointer1path = document.createElement("path");
    pointer1path.setAttribute("d", Pointers[pointeraxis][0]);
    pointer1.appendChild(pointer1path);

    let pointer2 = document.createElement("svg");
    pointer2.setAttribute("stroke", "currentColor");
    pointer2.setAttribute("fill", "currentColor");
    pointer2.setAttribute("stroke-width", "0");
    pointer2.setAttribute("viewBox", "0 0 24 24");
    pointer2.className = "pointercolor";
    pointer2.setAttribute("height", "1em"); // Set the height to a value that fits your design
    pointer2.setAttribute("width", "1em");  // Set the width to a value that fits your design
    pointer2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    pointerHand.appendChild(pointer2);

    let pointer2path = document.createElement("path");
    pointer2path.setAttribute("d", Pointers[pointeraxis][1]);
    pointer2.appendChild(pointer2path);
}
*/




function showFirstPair() {
  document.getElementById("pointer-1-ypath").style.display = "block";
  document.getElementById("pointer-1-xpath").style.display = "none";

  document.getElementById("pointer-2-ypath").style.display = "block";
  document.getElementById("pointer-2-xpath").style.display = "none";
}

function showSecondPair() {
  document.getElementById("pointer-1-ypath").style.display = "none";
  document.getElementById("pointer-1-xpath").style.display = "block";

  document.getElementById("pointer-2-ypath").style.display = "none";
  document.getElementById("pointer-2-xpath").style.display = "block";
}






function pointerChangex() {
  let pointercng = document.getElementById("pointers");
  pointercng.className = "pointersx";
}


function pointerChangey() {
  let pointercng = document.getElementById("pointers");
  pointercng.className = "pointersy";
}





function pointerCreate() {
  let pointerHand = document.getElementById("pointers");

  // Entferne die unsichtbare Klasse von den SVG-Elementen, um sie sichtbar zu machen
  pointerHand.querySelectorAll("svg").forEach(svg => {
      console.log("Test");
      svg.classList.remove("invisiblePointers");
  });
}




function initializePointers() {
  let pointerHand = document.getElementById("pointers");
  pointerHand.querySelectorAll("svg").forEach(svg => {
      svg.classList.add("invisiblePointers");
  });

  PointersThere = false;
}














  function buttonDelayReal(button,time) {
    button.disabled = true; // Disable the button
    setTimeout(function () {
      button.disabled = false; // Enable the button after the delay
    }, time); // 8000 milliseconds (8 seconds) delay
  }

function dropmaker() {
  
  let times = items.length;
  for (let i = 0; i < times; i++) {
    dropcreate(i);
  }
}

function dropcreate(i) {
  let rowdrop = document.createElement("div");
    rowdrop.className = "row drop " + items[i][4][2];
  
  let dropImages = document.createElement("div");
  dropImages.className = "dropImages";
  rowdrop.appendChild(dropImages);


  let itemImageContainer = document.createElement("div");
  itemImageContainer.className = "dropImageContainer";
  dropImages.appendChild(itemImageContainer);

  let itemImage = document.createElement("img");
  itemImage.alt = items[i][0];
  itemImage.src = items[i][3];
  itemImage.loading = "lazy";
  itemImage.className = "dropImage";
  itemImage.style.position = "absolute";
  itemImage.style.height = "100%";
  itemImage.style.width = "100%";
  itemImage.style.inset = "0px";
  itemImage.style.color = "transparent";
  itemImageContainer.appendChild(itemImage);


  let itemBackground = document.createElement("div");
  itemBackground.style.filter = items[i][4][1];
  itemBackground.draggable= "false";
  itemBackground.className = "dropBackground";
  dropImages.appendChild(itemBackground);

  let itemBackgroundImage = document.createElement("img");
  itemBackgroundImage.alt = items[i][0];
  itemBackgroundImage.srcset = items[i][4][0] + " 1x", items[i][4][0] + " 2x";
  itemBackgroundImage.src = items[i][4][0];
  itemBackgroundImage.width = "64";
  itemBackgroundImage.height = "64";
  itemBackgroundImage.className = "dropBackgroundImage";
  itemBackgroundImage.loading = "lazy";
  itemBackgroundImage.style.color = "transparent";
  itemBackground.appendChild(itemBackgroundImage);





  let dropInformations = document.createElement("div");
  dropInformations.className = "dropInformations";
  rowdrop.appendChild(dropInformations);

  let dropInformationsNameContainer = document.createElement("div");
  dropInformationsNameContainer.className = "dropInformationsNameContainer";
      dropInformations.appendChild(dropInformationsNameContainer);

      let dropInformationsName = document.createElement("div");
      dropInformationsName.className = "dropInformationsName";
      dropInformationsNameContainer.appendChild(dropInformationsName);
      let dropInformationsNameText = document.createTextNode(items[i][0]);
      dropInformationsName.appendChild(dropInformationsNameText);




      let dropInformationsprice = document.createElement("span");
      dropInformationsprice.className = "price";
      dropInformations.appendChild(dropInformationsprice);

      let dropInformationspricepriceWrapper = document.createElement("div");
      dropInformationspricepriceWrapper.className = "price-wrapper";
      dropInformationsprice.appendChild(dropInformationspricepriceWrapper);   

      let dropInformationsimageWrapper = document.createElement("div");
      dropInformationsimageWrapper.className = "price-image-wrapper";
      dropInformationspricepriceWrapper.appendChild(dropInformationsimageWrapper);

      let dropInformationsImage = document.createElement("img");
      dropInformationsImage.src = "images/gem.svg";
      dropInformationsimageWrapper.appendChild(dropInformationsImage);
            
      let dropInformationspriceText = document.createTextNode(items[i][1]);
      dropInformationspricepriceWrapper.appendChild(dropInformationspriceText);




  let dropOdds = document.createElement("div");
  dropOdds.className = "dropOdds";
  rowdrop.appendChild(dropOdds);
  let dropOddsText = document.createTextNode(items[i][2]+"%");
  dropOdds.appendChild(dropOddsText);
  
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
    spinnerinnercreater.style.transform = "translateX(-10.75%)";
    spinnerinnercreater.style.transition = "transform 0s ease 0s";
    spinner.appendChild(spinnerinnercreater);
    document.getElementById("spinners-container").appendChild(spinner);
}











function spinnerscreatey(amount) {
  for (let i = 0; i < amount; i++) {
    spinnercreatey(i+1);
    //spinnerinnermaker(i+1);
    divMaker(i+1);
  }
}

function spinnercreatey(whichspinner) {
  let spinner = document.createElement("div");
  spinner.className = "spinnery";
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
    spinnerinnercreater.style.transform = "translate"+spinneraxis+"(-10.75%)";
    spinnerinnercreater.style.transition = "transform 0s ease 0s";
    spinner.appendChild(spinnerinnercreater);
    document.getElementById("spinners-container").appendChild(spinner);
}

























function openCases(casesnumber) {

    balance -= CaseCost*casesnumber;
    storebalance();
    document.getElementById("balance-amount").innerHTML = balance.toFixed(2) + "€";

    spanElementsClickable = false;

    let anNum = rndAnimation();

  for (let i = 0; i < casesnumber; i++) {
      openCase(i+1, anNum);
    }

  setTimeout(function() {

  spanElementsClickable = true;
  
  console.log("!!!!The displayed balance is:" + balance.toFixed(2))
  document.getElementById("balance-amount").innerHTML = balance.toFixed(2) + "€";
  spinsoundwin();
  blinkbalancebutton()
    }, 7750);
}



function itemActivatory(casenumber,starterObject) {
  let spinnerInner = document.getElementById("spinnerInner-" + casenumber);
  let spinnerItems = spinnerInner.getElementsByClassName("itemcontainer");

  // Überprüfen, ob sich aktuell ein neues Element zwischen den Pointern befindet
  let newActiveItemIndex = -1;
  for (let z = 0; z < spinnerItems.length; z++) {
      let spinnerItem = spinnerItems[z];
      let itemRect = spinnerItem.getBoundingClientRect();
      let pointersRect = document.getElementById("pointers").getBoundingClientRect();

      // Überprüfen, ob sich das Element zwischen den Pointern befindet
      if (itemRect.left > pointersRect.left && itemRect.left < pointersRect.right) {
        newActiveItemIndex = z;
        break; // Wir haben das aktive Element gefunden, beenden die Schleife
    }
  }


  // Aktualisieren Sie die "active" Eigenschaft der Elemente
  for (let i = 0; i < spinnerItems.length; i++) {
      let spinnerItem = spinnerItems[i];
      let isActive = i === newActiveItemIndex;
      spinnerItem.active = isActive;

      if (isActive &&starterObject.value !== i) {
        spinnerItem.querySelector(".item").classList.add("active");
        spinnerItem.querySelector(".itemImageContainer").classList.add("active");

        document.getElementById("spinner-"+casenumber+"-item-"+ (i-1)).querySelector(".item").classList.remove("active");
        document.getElementById("spinner-"+casenumber+"-item-"+ (i-1)).querySelector(".itemImageContainer").classList.remove("active");

        if (spinnerInner == document.getElementById("spinnerInner-" + 1)) {
          tickSound(); 
        }
        
        starterObject.value = i;
    }  
}
}


function itemActivatorx(casenumber,starterObject) {
  let spinnerInner = document.getElementById("spinnerInner-" + casenumber);
  let spinnerItems = spinnerInner.getElementsByClassName("itemcontainer");

  // Überprüfen, ob sich aktuell ein neues Element zwischen den Pointern befindet
  let newActiveItemIndex = -1;
  for (let z = 0; z < spinnerItems.length; z++) {
      let spinnerItem = spinnerItems[z];
      let itemRect = spinnerItem.getBoundingClientRect();
      let pointersRect = document.getElementById("pointers").getBoundingClientRect();

      // Überprüfen, ob sich das Element zwischen den Pointern befindet
      if (itemRect.top < pointersRect.top && itemRect.bottom > pointersRect.bottom) {
        newActiveItemIndex = z;
        break; // Wir haben das aktive Element gefunden, beenden die Schleife
    }
  }


  // Aktualisieren Sie die "active" Eigenschaft der Elemente
  for (let i = 0; i < spinnerItems.length; i++) {
      let spinnerItem = spinnerItems[i];
      let isActive = i === newActiveItemIndex;
      spinnerItem.active = isActive;

      if (isActive &&starterObject.value !== i) {
        spinnerItem.querySelector(".item").classList.add("active");
        spinnerItem.querySelector(".itemImageContainer").classList.add("active");

        document.getElementById("spinner-"+casenumber+"-item-"+ (i-1)).querySelector(".item").classList.remove("active");
        document.getElementById("spinner-"+casenumber+"-item-"+ (i-1)).querySelector(".itemImageContainer").classList.remove("active");

        if (spinnerInner == document.getElementById("spinnerInner-" + 1)) {
          tickSound(); 
        }
        
        starterObject.value = i;
    }  
}
}





























function orientationerChangey (){
  document.getElementById("orientationer").orientation = "vertical";
  document.getElementById("orientationer").className = "orientationery";

  document.getElementById("spinners-container").className = "spinners-containery"; 
}

function orientationerChangex (){
  document.getElementById("orientationer").orientation = "horizontal";
  document.getElementById("orientationer").className = "orientationerx";

  document.getElementById("spinners-container").className = "spinners-containerx"; 
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
   
  
  
  for (let i = 0; i < 60; i++) {
    let rndItem = Math.floor(Math.random() * items.length);

    let spinnerInner = document.getElementById("spinnerInner-" + casenumber);  
    spinnerInner.appendChild(divCreate(i, rndItem, casenumber));
  }


  let spinnerItem = document.getElementById("spinner-" + casenumber + "-item-6");
    spinnerItem.querySelector(".item").classList.add("active");
    spinnerItem.querySelector(".itemImageContainer").classList.add("active");


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

function tickSound() {
  var audio = new Audio("sounds/tickSound.mp3");

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
  if (document.getElementById("balance-input-container").innerHTML === "") {
    balancefield();
  } else {
    console.log("Cant have more than one input");
  }
};


function balanceonload() {
  document.getElementById("balance-amount").innerHTML = balance.toFixed(2) + "€";
}