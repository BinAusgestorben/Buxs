//Different Cases ----------------------------------------------------------------
let Cases = CasesData;

//let selectedCaseId = localStorage.getItem("selectedCaseId");





document.addEventListener("DOMContentLoaded", function () {
  getbalance();
  balanceonload();
});















// CaseNavigation
// Add event listener to the search input
document.querySelector(".casesearch").addEventListener("input", function (event) {
    const searchQuery = event.target.value.trim().toLowerCase();
    const filteredCases = Cases.filter(caseItem => caseItem[0].toLowerCase().includes(searchQuery));
    redrawCases(filteredCases);
  });


document.getElementById("type-1").addEventListener("click", function () {
    document.getElementById("type-1").className = "type active";
    document.getElementById("type-2").className = "type";
    document.getElementById("type-3").className = "type";
    document.getElementById("type-4").className = "type";
  
    document.getElementById("rowcontent").innerHTML = "";
    CasesGenerationDynamic(Cases, "highToLow");
  });
  
  document.getElementById("type-2").addEventListener("click", function () {
    document.getElementById("type-1").className = "type";
    document.getElementById("type-2").className = "type active";
    document.getElementById("type-3").className = "type";
    document.getElementById("type-4").className = "type";
  
    document.getElementById("rowcontent").innerHTML = "";
    CasesGenerationDynamic(Cases, "lowToHigh");
  });
  
  document.getElementById("type-3").addEventListener("click", function () {
    document.getElementById("type-1").className = "type";
    document.getElementById("type-2").className = "type";
    document.getElementById("type-3").className = "type active";
    document.getElementById("type-4").className = "type";
  });
  
  document.getElementById("type-4").addEventListener("click", function () {
    document.getElementById("type-1").className = "type";
    document.getElementById("type-2").className = "type";
    document.getElementById("type-3").className = "type";
    document.getElementById("type-4").className = "type active";
  });
  
  // CaseGeneration
  window.onload = CasesGenerationDynamic(Cases, "highToLow");
  
  function CasesGenerationDynamic(cases, sortOrder) {
    let sortedCases;
  
    if (sortOrder === "lowToHigh") {
      sortedCases = cases.slice().sort((a, b) => a[1] - b[1]);
    } else if (sortOrder === "highToLow") {
      sortedCases = cases.slice().sort((a, b) => b[1] - a[1]);
    } else {
      // Default to high to low
    sortedCases = cases.slice().sort((a, b) => b[1] - a[1]);
    }
  
    let Number = sortedCases.length;
    CaseGenerationDynamic(Number, sortedCases);
  }
  
  function CaseGenerationDynamic(amount, cases) {
    for (let i = 0; i < amount; i++) {
      let container = document.createElement("div");
      container.className = "container";
  
      let casecol = document.createElement("div");
      casecol.className = "case col";
      casecol.setAttribute("data-index", cases[i][4]);
      console.log("Case:"+i+" Case-id: " + cases[i][4]);
      container.appendChild(casecol);
  
      let casecoltitle = document.createElement("span");
      casecoltitle.className = "title";
      let casecoltitletext = document.createTextNode(cases[i][0]);
      casecoltitle.appendChild(casecoltitletext);
      casecol.appendChild(casecoltitle);
  
      let casecolimage = document.createElement("img");
      casecolimage.className="casecolimg";
      casecolimage.src = cases[i][2];
      casecol.appendChild(casecolimage);
  
      let casecolopen = document.createElement("span");
      casecolopen.className = "open";
      casecol.appendChild(casecolopen);
  
      let casecolopenleft = document.createElement("span");
      casecolopenleft.className = "left";
      let casecolopenlefttext = document.createTextNode("open");
      casecolopenleft.appendChild(casecolopenlefttext);
      casecolopen.appendChild(casecolopenleft);
  
      let casecolopenright = document.createElement("span");
      casecolopenright.className = "right";
      casecolopen.appendChild(casecolopenright);
  
      let casecolpricewrapper = document.createElement("div");
      casecolpricewrapper.className = "price-wrapper";
      casecolopenright.appendChild(casecolpricewrapper);
  
      let casecolpriceimagewrapper = document.createElement("div");
      casecolpriceimagewrapper.className = "price-image-wrapper";
      casecolpricewrapper.appendChild(casecolpriceimagewrapper);
      let casecolpriceimage = document.createElement("img");
      casecolpriceimage.src = "images/gem.svg";
      casecolpriceimagewrapper.appendChild(casecolpriceimage);
  
      let casecolpricetext = document.createTextNode(cases[i][1]);
      casecolpricewrapper.appendChild(casecolpricetext);

      document.getElementById("rowcontent").appendChild(container);
    }
  }

  document.getElementById("rowcontent").addEventListener("click", function (event) {
    const target = event.target.closest(".case");
    if (target) {
      const index = parseInt(target.getAttribute("data-index"));
      console.log("Index:", index);
      console.log("Cases[index]:", Cases[index]);
      if (!isNaN(index) && Cases[index] && Cases[index][4] !== null && Cases[index][4] !== undefined) {
        console.log("gemacht");
        const selectedId = Cases[index][4];
        localStorage.setItem("selectedCaseId", selectedId);
        window.location.href = Cases[index][3];
      }
    } else {
      console.log("DummerFehler");
    }
  });

  // Redraw cases based on the filtered results
function redrawCases(filteredCases) {
    document.getElementById("rowcontent").innerHTML = ""; // Clear existing cases
  
    // Generate cases based on the filtered results
    CasesGenerationDynamic(filteredCases, "highToLow");
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