let Battle1="none",Cases=CasesData,currentCaseInfos=[],battleusers=0,battlewinner=0,issomeone=[[!0],[!1],[!1],[!1]],createdby="user",userlocation=0,items=null,currentCase=0,currentCaseType=0,currentDrop=0,currentRound=1;var winner=[];let counts=[],activeItemIndex=-1,spinneraxis="y",notfirstspin=!1,battlebalances=[0,0,0,0],lastdrops=[0,0,0,0],Divver=!1,PointersThere=!1,previewcasesspinner=0;function getbalance(){null===localStorage.getItem("balance")?(balance=250,storebalance()):balance=parseFloat(localStorage.getItem("balance"))}function storebalance(){localStorage.setItem("balance",balance)}function balancefield(){let e=document.createElement("input");e.placeholder="New Balance",e.id="balance-input",e.type="number",e.min="0",e.max="100000",e.className="balanceinput";let t=document.createElement("button");t.id="balance-input-button",t.className="balanceinputbutton";let a=document.createTextNode("Change");t.appendChild(a),document.getElementById("balance-input-container").appendChild(e),document.getElementById("balance-input-container").appendChild(t),document.getElementById("balance-input-button").onclick=function(){let e=document.getElementById("balance-input").value;e>=0&&e<=1e5?(balance=e,document.getElementById("balance-amount").innerHTML=balance+"€",storebalance(),document.getElementById("balance-input-container").innerHTML=""):console.log("Balance must be between 0 and 100000")}}function balanceonload(){document.getElementById("balance-amount").innerHTML=balance.toFixed(2)+"€"}function getBattle(){BattleRetrieved=localStorage.getItem("caseBattle"),console.log("BattleRetrieved:",BattleRetrieved);try{Battle1=JSON.parse(BattleRetrieved)}catch(e){console.error("Fehler beim Parsen des JSON-Strings:",e);return}console.log("Battle1:",Battle1),Battle1=recreateArray(Battle1),console.log("Battle1 wiederhergestellt:",Battle1)}function recreateArray(e){let t=e[6],a=[];for(let n=0;n<t.length;n++)a.push(t[n]);return e[6]=a,e}function storebattle(){let e=JSON.stringify(Battle1);localStorage.setItem("caseBattle",e),console.log("battle Stored")}function removebattlefromlocalstorage(){localStorage.setItem("caseBattle","none"),console.log("battle removed")}function getbattleInfos(){let e=0;e+=Battle1[1],document.getElementById("battle-cost-price").innerHTML=e.toFixed(2),document.getElementById("runbattleplayermode").innerHTML=Battle1[3],"crazy"==Battle1[5]&&"normal"!==Battle1[4]?(document.getElementById("runbattlemode").innerHTML=Battle1[5]+" "+Battle1[4],document.getElementById("runbattlemode").className="runbattlemode"+Battle1[4]):"crazy"==Battle1[5]&&"normal"==Battle1[4]?(document.getElementById("runbattlemode").innerHTML=Battle1[5],document.getElementById("runbattlemode").className="runbattlemode"+Battle1[5]):(document.getElementById("runbattlemode").innerHTML=Battle1[4],document.getElementById("runbattlemode").className="runbattlemode"+Battle1[4]);let t=document.getElementById("roundcontainer"),a=document.createTextNode("Round ");t.appendChild(a);let n=document.createElement("span");n.className="roundcontainerRound",n.id="roundcontainercurrentRound",n.innerHTML="1",t.appendChild(n);let l=document.createTextNode(" of ");t.appendChild(l);let r=document.createElement("span");r.className="roundcontainerRound",r.innerHTML=Battle1[2],t.appendChild(r),generatebattlecases(),activatebattlepreviewcase()}function generatebattlecases(){let e=document.getElementById("runbattlecasescontainer"),t=0,a=0;for(let n=0;n<Battle1[2];n++)console.log("Durchgang: "+n),Battle1[6][t][1]===a?(t+=1,console.log("TypeVis changed to : "+t),a=1,console.log("CaseVis changed to : "+a)):(a+=1,console.log("CaseVis changed byElse to : "+a)),createbattlecasepreviewcase(t,n,e)}function createbattlecasepreviewcase(e,t,a){let n=document.createElement("div");n.className="runbattlecase",n.id="runbattlecase-"+t,a.appendChild(n);let l=document.createElement("div");l.className="runbattlecaseimagecontainer",n.appendChild(l);let r=document.createElement("img");r.setAttribute("alt",CasesData[Battle1[6][e][0]][0]),r.setAttribute("src",CasesData[Battle1[6][e][0]][2]),r.setAttribute("decoding","async"),r.setAttribute("loading","lazy"),r.setAttribute("position","absolute"),r.setAttribute("width","100"),r.setAttribute("height","100"),r.setAttribute("inset","0px"),r.style.color="transparent",r.className="runbattlecaseimage",l.appendChild(r)}function activatebattlepreviewcase(){document.getElementById("runbattlecase-"+(currentRound-1)).className="runbattlecaseactive",currentRound>1&&(document.getElementById("runbattlecase-"+(currentRound-2)).className="runbattlecase")}function updatecurrentcaseinfos(){document.getElementById("runbattlecaseinfosname").innerHTML=currentCaseInfos[0],document.getElementById("runbattlecaseinfospricetext").innerHTML=currentCaseInfos[1]}function getbattleusers(){battleusers="1v1"===Battle1[3]?2:"1v1v1"===Battle1[3]?3:4,console.log(battleusers+"battleusers")}function createBattleRows(){for(let e=0;e<battleusers;e++)createBattleRow(e)}function createBattleRow(e){let t=document.getElementById("actual-battle"),a=document.createElement("div");a.className="actualbattlecontainer",t.appendChild(a);let n=document.createElement("div");n.id="userinfocontainer-"+e,n.className="userinfocontainer",a.appendChild(n);let l=document.createElement("div");l.className="userinfo",l.id="userinfo-"+e,n.appendChild(l),!0===issomeone[e][0]?userinfocreate(e,l,n):createnouserbutton(e,n);let r=document.createElement("div");r.className="actualbattlespinner",r.id="actualbattlespinner-"+e,a.appendChild(r);let s=document.createElement("div");s.setAttribute("orientation","vertical"),s.className="actualbattleorientationer",r.appendChild(s);let i=document.createElement("div");i.className="actualbattlespinnercontainer",i.id="actualbattlespinnercontainer-"+e,r.appendChild(i);let c=document.createElement("div");c.className="actualbattlespinnerinner",c.id="actualbattlespinnerinner-"+e,c.style.transform="translateY(-10.75%)",c.style.transition="transform 0s ease 0s",i.appendChild(c);let o=document.createElement("div");o.className="actualbattledropscontainer drops",o.setAttribute("style","grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); grid-auto-rows: 5.5rem;"),o.setAttribute("grid-auto-rows","5.5rem"),a.appendChild(o);for(let d=0;d<Battle1[2];d++){let m=document.createElement("div");m.className="actualbattledropplaceholder",m.id="actualbattle-"+e+"-dropplaceholder-"+d,o.appendChild(m)}}function userinfocreate(e,t,a){let n=document.createElement("div");n.className="userinfoactual",t.appendChild(n);let l=document.createElement("div");l.className="userinfopfpcontainer",n.appendChild(l);let r=document.createElement("img");r.setAttribute("alt","Placeholder"),r.setAttribute("src","/images/10Grin.png"),r.setAttribute("decoding","async"),r.setAttribute("loading","lazy"),r.setAttribute("position","absolute"),r.setAttribute("width","100"),r.setAttribute("height","100"),r.setAttribute("inset","0px"),r.style.color="transparent",r.className="userinfopfp",l.appendChild(r);let s=document.createElement("div");s.className="userinfonameandlevel",n.appendChild(s);let i=document.createElement("div");i.className="userinfonamecontainer",s.appendChild(i);let c=document.createElement("span");c.className="userinfoname",c.id="userinfoname-"+e,0===e?c.innerHTML="You":c.innerHTML="Bot "+e,i.appendChild(c);let o=document.createElement("div");o.className="userinfolevel",o.id="userinfolevel-"+e,o.innerHTML="0",s.appendChild(o);let d=document.createElement("div");a.appendChild(d);let m=document.createElement("div");m.className="userinfobattlebalancefield",d.appendChild(m);let b=document.createElement("div");b.className="price-wrapper",m.appendChild(b);let p=document.createElement("div");p.className="price-image-wrapper",b.appendChild(p);let u=document.createElement("img");u.src="/images/gem.svg",p.appendChild(u);let _=document.createElement("span");_.className="priceWrapperAmount",_.id="priceWrapperAmount-BattleUser-"+e,_.innerHTML="0.00",b.appendChild(_)}function botuserinfocreate(e){userinfo=document.getElementById("userinfo-"+e);let t=document.createElement("div");t.className="userinfoactual",userinfo.appendChild(t);let a=document.createElement("div");a.className="userinfopfpcontainer",t.appendChild(a);let n=document.createElement("img");1==e?(n.setAttribute("alt","botpinksmall"),n.setAttribute("src","/images/botpinksmall.png")):2==e?(n.setAttribute("alt","botbluesmall"),n.setAttribute("src","/images/botbluesmall.png")):(n.setAttribute("alt","botredsmall"),n.setAttribute("src","/images/botredsmall.png")),n.setAttribute("decoding","async"),n.setAttribute("loading","lazy"),n.setAttribute("position","absolute"),n.setAttribute("width","100"),n.setAttribute("height","100"),n.setAttribute("inset","0px"),n.style.color="transparent",n.className="userinfopfp",a.appendChild(n);let l=document.createElement("div");l.className="userinfonameandlevel",t.appendChild(l);let r=document.createElement("div");r.className="userinfonamecontainer",l.appendChild(r);let s=document.createElement("span");s.className="userinfoname",s.id="userinfoname-"+e,1==e?s.innerHTML="Groovy":2==e?s.innerHTML="Groovy Jr.":s.innerHTML="Groovy Sr.",r.appendChild(s);let i=document.createElement("div");i.className="botinfo",i.innerHTML="BOT",l.appendChild(i);let c=document.getElementById("userinfocontainer-"+e),o=document.createElement("div");c.appendChild(o);let d=document.createElement("div");d.className="userinfobattlebalancefield",o.appendChild(d);let m=document.createElement("div");m.className="price-wrapper",d.appendChild(m);let b=document.createElement("div");b.className="price-image-wrapper",m.appendChild(b);let p=document.createElement("img");p.src="/images/gem.svg",b.appendChild(p);let u=document.createElement("span");u.className="priceWrapperAmount",u.id="priceWrapperAmount-BattleUser-"+e,u.innerHTML="0.00",m.appendChild(u)}function createnouserbutton(e,t){let a=document.createElement("div");a.id="nouserdiv-"+e,t.appendChild(a);let n=document.createElement("button");n.className="nouserbutton",n.id="nouserbutton-"+e,n.setAttribute("type","button"),a.appendChild(n);let l=document.createElement("div");l.className="nouserbuttoninner","user"===createdby?l.innerHTML="Call Bot":l.innerHTML="Join",n.appendChild(l),n.addEventListener("click",function(){"user"===createdby?callbots():joinuser(e)})}function callbots(){for(let e=1;e<battleusers;e++)addbot(e),divMaker(e);battlestart()}function addbot(e){botuserinfocreate(e),document.getElementById("nouserdiv-"+e).remove()}function joinuser(e){console.log("hey")}function whatcase(e){items=CasesData[e][5],currentCaseInfos=CasesData[e]}function divMaker(e){for(let t=0;t<60;t++){let a=Math.floor(Math.random()*items.length);document.getElementById(`actualbattlespinnerinner-${e}`).appendChild(divCreate(t,a,e))}let n=document.getElementById("spinner-"+e+"-item-6");n.querySelector(".item").classList.add("active"),n.querySelector(".itemImageContainer").classList.add("active")}function redivMaker(e){for(let t=0;t<60;t++){let a=Math.floor(Math.random()*items.length);document.getElementById(`actualbattlespinnerinner-${e}`).appendChild(divCreate(t,a,e))}let n=document.getElementById("spinner-"+e+"-item-6");n.querySelector(".item").classList.add("active"),n.querySelector(".itemImageContainer").classList.add("active")}function divCreate(e,t,a){let n=document.createElement("div");n.id="spinner-"+a+"-item-"+e,n.className="itemcontainer",n.style.transform="none";let l=document.createElement("div");l.className="item",n.appendChild(l);let r=document.createElement("div");r.className="itemImageContainer",l.appendChild(r);let s=document.createElement("img");s.alt=items[t][0],s.src=items[t][3],s.loading="lazy",s.className="itemImage",s.style.position="absolute",s.style.height="100%",s.style.width="100%",s.style.inset="0px",s.style.color="transparent",r.appendChild(s);let i=document.createElement("div");i.style.filter=items[t][4][1],i.draggable="false",i.className="itemBackground",l.appendChild(i);let c=document.createElement("img");return c.alt=items[t][0],c.srcset=items[t][4][0]+" 1x",items[t][4][0],c.src=items[t][4][0],c.width="64",c.height="64",c.className="itemBackgroundImage",c.loading="lazy",c.style.color="transparent",i.appendChild(c),n}function battlestart(){let e=0,t;function a(){if(e<Battle1[2]){let a=rndAnimation();Battle1[6][currentCaseType][1]===currentCase?(currentCaseType+=1,whatcase(Battle1[6][currentCaseType][0]),currentCase=1):currentCase+=1;for(let n=0;n<battleusers;n++)openCase(n,a);casePreviewFunction(),e++,currentRoundUpdate(),currentRound+=1,currentDrop+=1,console.log("CurrentDropMehr: "+currentDrop);let l=100/Battle1[2];console.log("Steps :"+l),previewcasesspinner-=l}else clearInterval(t),winnermode(),console.log(battlewinner+" =battleWinner"),battlefinished(),battlewinner===userlocation&&payuser(),removebattlefromlocalstorage()}setTimeout(function(){a(),t=setInterval(a,9e3)},1500)}function winnermode(){"normal"==Battle1[4]?winnermodenormal():"group"==Battle1[4]?winnermodegroup():"terminal"==Battle1[4]&&winnermodeterminal()}function winnermodenormal(){"most"==Battle1[5]?"2v2"==Battle1[3]?choosewinnernormal2v2():choosewinnernormal():"2v2"==Battle1[3]?choosewinnernormalcrazy2v2():choosewinnernormalcrazy()}function winnermodegroup(){"2v2"==Battle1[3]?choosewinnergroup2v2():choosewinnergroup()}function winnermodeterminal(){"most"==Battle1[5]?"2v2"==Battle1[3]?choosewinnerterminal2v2():choosewinnerterminal():"2v2"==Battle1[3]?choosewinnerterminalcrazy2v2():choosewinnerterminalcrazy()}function casePreviewFunction(){activatebattlepreviewcase(),currentRound!==Battle1[2]&&previewcasespinnerupdate(),updatecurrentcaseinfos()}function currentRoundUpdate(){document.getElementById("roundcontainercurrentRound").innerHTML=currentRound}function battlefinished(){if("2v2"==Battle1[3])0===battlewinner?(winscreen(0),winscreen(1),lossscreen(2),lossscreen(3)):(winscreen(2),winscreen(3),lossscreen(0),lossscreen(1));else if("group"==Battle1[4])for(let e=0;e<battleusers;e++)winscreen(e);else for(let t=0;t<battleusers;t++)t===battlewinner?winscreen(t):lossscreen(t);battlewinnersound(),recreatebattlebutton(),removecasepreview(),addreplaybutton()}function addreplaybutton(){let e=document.getElementById("roundcontainer");e.innerHTML="";let t=document.createElement("div");t.className="replayinner",t.innerHTML="Replay",e.appendChild(t)}function removecasepreview(){document.getElementById("runbattlecasesspinner").remove()}function recreatebattlebutton(){let e=document.getElementById("runbattlecaseinfos");e.innerHTML="",e.className="recreatebuttoncontainer";let t=document.createElement("button");t.className="recreatebutton",t.id="recreatebutton",t.setAttribute("type","button"),e.appendChild(t);let a=document.createElement("div");a.className="recreatebuttoninnercontainer",t.appendChild(a);let n=document.createElement("div");n.className="recreatebuttoninner",n.innerHTML="Recreate",a.appendChild(n);let l=document.createElement("div");l.className="battlecostpricewrapper",n.appendChild(l);let r=document.createElement("div");r.className="battlecostimagewrapper",l.appendChild(r);let s=document.createElement("img");s.src="/images/gem.svg",r.appendChild(s);let i=0;i=Battle1[1];let c=document.createElement("span");c.className="battlecostpricerecreate",c.innerHTML=i.toFixed(2),l.appendChild(c),t.addEventListener("click",function(){storebattle(),balance-=Battle1[1],storebalance(),window.location.href="./Battles"})}function winscreen(e){document.getElementById("actualbattlespinnercontainer-"+e).remove();let t=document.getElementById("actualbattlespinner-"+e),a=document.createElement("div");a.className="fieldbackgroundWin",t.appendChild(a);let n=document.createElement("div");n.className="fieldwinnertext",n.innerHTML="winner",a.appendChild(n);let l=document.createElement("div");l.className="price-winner-wrapper",a.appendChild(l);let r=document.createElement("div");r.className="price-image-wrapper",l.appendChild(r);let s=document.createElement("img");s.src="/images/gem.svg",r.appendChild(s);let i=document.createElement("span");i.className="priceWrapperAmount",i.innerHTML=battlebalances[e].toFixed(2),l.appendChild(i)}function lossscreen(e){document.getElementById("actualbattlespinnercontainer-"+e).remove();let t=document.getElementById("actualbattlespinner-"+e),a=document.createElement("div");a.className="fieldbackgroundLoss",t.appendChild(a);let n=document.createElement("div");n.className="fieldlosstext",n.innerHTML="loss",a.appendChild(n);let l=document.createElement("div");l.className="price-loss-wrapper",a.appendChild(l);let r=document.createElement("div");r.className="price-image-wrapper",l.appendChild(r);let s=document.createElement("img");s.src="/images/gem.svg",r.appendChild(s);let i=document.createElement("span");i.className="priceWrapperAmount",i.innerHTML="0.00",l.appendChild(i)}function payuser(){balance+=battlebalances[userlocation],storebalance(),balanceonload()}function choosewinnernormal(){if(battlebalances.length,"1v1"===Battle1[3])battlebalances[battlewinner=battlebalances[0]>battlebalances[1]?0:battlebalances[1]>battlebalances[0]?1:raffleWinner([0,1])]=battlebalances[0]+battlebalances[1];else if("1v1v1"===Battle1[3]){let e=Math.max(...battlebalances);if(battlebalances.indexOf(e)===battlebalances.lastIndexOf(e))battlewinner=battlebalances.indexOf(e);else{let t=battlebalances.reduce((t,a,n)=>(a===e&&t.push(n),t),[]);battlewinner=raffleWinner(t)}battlebalances[battlewinner]=battlebalances[0]+battlebalances[1]+battlebalances[2]}else if("1v1v1v1"===Battle1[3]){let a=Math.max(...battlebalances);if(battlebalances.indexOf(a)===battlebalances.lastIndexOf(a))battlewinner=battlebalances.indexOf(a);else{let n=battlebalances.reduce((e,t,n)=>(t===a&&e.push(n),e),[]);battlewinner=raffleWinner(n)}battlebalances[battlewinner]=battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3]}else console.log("Unbekannte Battle-Konfiguration")}function choosewinnernormalcrazy(){if(battlebalances.length,"1v1"===Battle1[3])battlebalances[battlewinner=battlebalances[0]<battlebalances[1]?0:battlebalances[1]<battlebalances[0]?1:raffleWinner([0,1])]=battlebalances[0]+battlebalances[1];else if("1v1v1"===Battle1[3]){let e=Math.min(...battlebalances);if(battlebalances.indexOf(e)===battlebalances.lastIndexOf(e))battlewinner=battlebalances.indexOf(e);else{let t=battlebalances.reduce((t,a,n)=>(a===e&&t.push(n),t),[]);battlewinner=raffleWinner(t)}battlebalances[battlewinner]=battlebalances.reduce((e,t)=>e+t,0)}else if("1v1v1v1"===Battle1[3]){let a=Math.min(...battlebalances);if(battlebalances.indexOf(a)===battlebalances.lastIndexOf(a))battlewinner=battlebalances.indexOf(a);else{let n=battlebalances.reduce((e,t,n)=>(t===a&&e.push(n),e),[]);battlewinner=raffleWinner(n)}battlebalances[battlewinner]=battlebalances.reduce((e,t)=>e+t,0)}else console.log("Unbekannte Battle-Konfiguration")}function choosewinnernormal2v2(){let e=battlebalances[0]+battlebalances[1],t=battlebalances[2]+battlebalances[3],a=(e+t)/2;e>t?(battlewinner=0,battlebalances[0]=a,battlebalances[1]=a):t>e?(battlewinner=1,battlebalances[2]=a,battlebalances[3]=a):0===(battlewinner=raffleWinner([0,1]))?(battlebalances[0]=a,battlebalances[1]=a):(battlebalances[2]=a,battlebalances[3]=a)}function choosewinnernormalcrazy2v2(){let e=battlebalances[0]+battlebalances[1],t=battlebalances[2]+battlebalances[3],a=(e+t)/2;e<t?(battlewinner=0,battlebalances[0]=a,battlebalances[1]=a):t<e?(battlewinner=1,battlebalances[2]=a,battlebalances[3]=a):0===(battlewinner=raffleWinner([0,1]))?(battlebalances[0]=a,battlebalances[1]=a):(battlebalances[2]=a,battlebalances[3]=a)}function choosewinnergroup(){let e=battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3];if("1v1"==Battle1[3]){let t=e/2;battlebalances[0]=t,battlebalances[1]=t}else if("1v1v1"==Battle1[3]){let a=e/3;battlebalances[0]=a,battlebalances[1]=a,battlebalances[2]=a}else{let n=e/4;battlebalances[0]=n,battlebalances[1]=n,battlebalances[2]=n,battlebalances[3]=n}}function choosewinnergroup2v2(){let e=battlebalances[0]+battlebalances[1],t=battlebalances[2]+battlebalances[3],a=(e+t)/2;e>t?(battlewinner=0,battlebalances[0]=a,battlebalances[1]=a):t>e?(battlewinner=1,battlebalances[2]=a,battlebalances[3]=a):0===(battlewinner=raffleWinner([0,1]))?(battlebalances[0]=a,battlebalances[1]=a):(battlebalances[2]=a,battlebalances[3]=a)}function choosewinnerterminal(){if("1v1"===Battle1[3])battlebalances[battlewinner=items[lastdrops[0]][1]>items[lastdrops[1]][1]?0:items[lastdrops[1]][1]>items[lastdrops[0]][1]?1:raffleWinner([0,1])]=battlebalances[0]+battlebalances[1];else if("1v1v1"===Battle1[3]){let e=Math.max(items[lastdrops[0]][1],items[lastdrops[1]][1],items[lastdrops[2]][1]),t=[0,1,2].filter(t=>items[lastdrops[t]][1]===e);battlebalances[battlewinner=1===t.length?t[0]:raffleWinner(t)]=battlebalances[0]+battlebalances[1]+battlebalances[2]}else if("1v1v1v1"===Battle1[3]){let a=Math.max(items[lastdrops[0]][1],items[lastdrops[1]][1],items[lastdrops[2]][1],items[lastdrops[3]][1]),n=[0,1,2,3].filter(e=>items[lastdrops[e]][1]===a);battlebalances[battlewinner=1===n.length?n[0]:raffleWinner(n)]=battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3]}else console.log("Unbekannte Battle-Konfiguration")}function choosewinnerterminalcrazy(){if("1v1"===Battle1[3])battlebalances[battlewinner=items[lastdrops[0]][1]<items[lastdrops[1]][1]?0:items[lastdrops[1]][1]<items[lastdrops[0]][1]?1:raffleWinner([0,1])]=battlebalances[0]+battlebalances[1];else if("1v1v1"===Battle1[3]){let e=Math.min(items[lastdrops[0]][1],items[lastdrops[1]][1],items[lastdrops[2]][1]),t=[0,1,2].filter(t=>items[lastdrops[t]][1]===e);battlebalances[battlewinner=1===t.length?t[0]:raffleWinner(t)]=battlebalances[0]+battlebalances[1]+battlebalances[2]}else if("1v1v1v1"===Battle1[3]){let a=Math.min(items[lastdrops[0]][1],items[lastdrops[1]][1],items[lastdrops[2]][1],items[lastdrops[3]][1]),n=[0,1,2,3].filter(e=>items[lastdrops[e]][1]===a);battlebalances[battlewinner=1===n.length?n[0]:raffleWinner(n)]=battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3]}else console.log("Unbekannte Battle-Konfiguration")}function choosewinnerterminal2v2(){console.log("Terminal2v2 triggered");let e=(battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3])/2;items[lastdrops[0]][1]+items[lastdrops[1]][1]>items[lastdrops[2]][1]+items[lastdrops[3]][1]?(battlewinner=0,battlebalances[0]=e,battlebalances[1]=e):items[lastdrops[2]][1]+items[lastdrops[3]][1]>items[lastdrops[0]][1]+items[lastdrops[1]][1]?(battlewinner=1,battlebalances[2]=e,battlebalances[3]=e):0===(battlewinner=raffleWinner([0,1]))?(battlebalances[0]=e,battlebalances[1]=e):(battlebalances[2]=e,battlebalances[3]=e)}function choosewinnerterminalcrazy2v2(){console.log("Terminalcrazy2v2 triggered");let e=(battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3])/2;items[lastdrops[0]][1]+items[lastdrops[1]][1]<items[lastdrops[2]][1]+items[lastdrops[3]][1]?(battlewinner=0,battlebalances[0]=e,battlebalances[1]=e):items[lastdrops[2]][1]+items[lastdrops[3]][1]<items[lastdrops[0]][1]+items[lastdrops[1]][1]?(battlewinner=1,battlebalances[2]=e,battlebalances[3]=e):0===(battlewinner=raffleWinner([0,1]))?(battlebalances[0]=e,battlebalances[1]=e):(battlebalances[2]=e,battlebalances[3]=e)}function raffleWinner(e){let t=Math.floor(Math.random()*e.length);return console.log(e),console.log(e[t]),e[t]}function rndAnimation(){let e=Math.floor(4*Math.random());return console.log("DieRnd Animation: "+e),e}function openCase(e,t){document.getElementById("actualbattlespinnerinner-"+e).style.transform="translate"+spinneraxis+"(-10.75%)",document.getElementById("actualbattlespinnerinner-"+e).style.transition="transform 0s ease 0s",notfirstspin?document.getElementById("actualbattlespinnerinner-"+e).innerHTML="":notfirstspin=!0,PointersThere||(pointerCreate(),PointersThere=!0);let a=Math.floor(100*Math.random()+1),n=0;for(let l=0;l<items.length;l++){if(a<=items[l][2]+n){battlebalances[e]+=items[l][1],lastdrops[e]=l,console.log("New battlebalance : "+battlebalances[e].toFixed(2)),console.log("You've got: "+items[l][0]),winner=l,Divver?redivMaker(e):Divver=!0,caseAnimation(winner,e,t);break}console.log("Not"),n+=items[l][2]}}function caseAnimation(e,t,a){winItemCreate(e,t,a);let n={value:7},l=setInterval(function(){"x"===spinneraxis?itemActivatory(t,n):itemActivatorx(t,n)},4);setTimeout(function(){document.getElementById("actualbattlespinnerinner-"+t).style.transform="translate"+spinneraxis+"("+Animations[a][1]+")",document.getElementById("actualbattlespinnerinner-"+t).style.transition="transform 7.5s cubic-bezier(0.1, 0, 0.2, 1) 0s",setTimeout(function(){document.getElementById("actualbattlespinnerinner-"+t).style.transform="translate"+spinneraxis+"("+Animations[a][2]+")",document.getElementById("actualbattlespinnerinner-"+t).style.transition="transform 0.25s cubic-bezier(0.1, 0, 0.2, 1) 0s",clearInterval(l)},7500)},250),activateWinner(t,e,a)}function updatebattlebalance(e){document.getElementById("priceWrapperAmount-BattleUser-"+e).innerHTML=battlebalances[e].toFixed(2)}function winItemCreate(e,t,a){let n=document.getElementById("spinner-"+t+"-item-"+Animations[a][0]),l=n.querySelector(".itemImageContainer").querySelector(".itemImage");l.alt=items[e][0],l.src=items[e][3];n.querySelector(".itemBackground").style.filter=items[e][4][1];let r=n.querySelector(".itemBackgroundImage");r.alt=items[e][0],r.srcset=items[e][4][0]+" 1x",items[e][4][0],r.src=items[e][4][0]}function activateWinner(e,t,a){setTimeout(function(){let n=document.getElementById("spinner-"+e+"-item-"+Animations[a][0]);n.querySelector(".item").className="itemWin";n.querySelector(".itemImageContainer").className="itemImageContainerWin";let l=document.createElement("div");l.className="itemWinInfo",l.style.opacity="1",l.style.transform="none",n.appendChild(l);let r=document.createElement("div");r.className="itemWinInfoContainer",l.appendChild(r);let s=document.createElement("div");s.className="itemWinNameContainer",r.appendChild(s);let i=document.createElement("div");i.className="itemWinName",s.appendChild(i);let c=document.createTextNode(items[t][0]);i.appendChild(c);let o=document.createElement("span");o.className="price",r.appendChild(o);let d=document.createElement("div");d.className="price-wrapper",o.appendChild(d);let m=document.createElement("div");m.className="price-image-wrapper",d.appendChild(m);let b=document.createElement("img");b.src="images/gem.svg",m.appendChild(b);let p=document.createTextNode(items[t][1]);d.appendChild(p),updatebattlebalance(e),adddrop(t,e),initializePointers(),e<1&&spinsoundwin()},7750)}function previewcasespinnerupdate(){document.getElementById("runbattlecasesspinner").style.transform="translateX("+previewcasesspinner+"%)"}function adddrop(e,t){console.log("DropAbouttoCreate ="+currentDrop);let a=document.getElementById("actualbattle-"+t+"-dropplaceholder-"+(currentDrop-1));a.className="drop "+items[e][4][2];let n=document.createElement("div");n.className="dropImages",a.appendChild(n);let l=document.createElement("div");l.className="dropImageContainer",n.appendChild(l);let r=document.createElement("img");r.alt=items[e][0],r.src=items[e][3],r.loading="lazy",r.className="dropImage",r.style.position="absolute",r.style.height="100%",r.style.width="100%",r.style.inset="0px",r.style.color="transparent",l.appendChild(r);let s=document.createElement("div");s.style.filter=items[e][4][1],s.draggable="false",s.className="dropBackground",n.appendChild(s);let i=document.createElement("img");i.alt=items[e][0],i.srcset=items[e][4][0]+" 1x",items[e][4][0],i.src=items[e][4][0],i.width="64",i.height="64",i.className="dropBackgroundImage",i.loading="lazy",i.style.color="transparent",s.appendChild(i);let c=document.createElement("div");c.className="dropInformations",a.appendChild(c);let o=document.createElement("div");o.className="dropInformationsNameContainer",c.appendChild(o);let d=document.createElement("div");d.className="dropInformationsNameSpace",o.appendChild(d);let m=document.createElement("div");m.className="dropInformationsName",o.appendChild(m);let b=document.createTextNode(items[e][0]);m.appendChild(b);let p=document.createElement("span");p.className="price",c.appendChild(p);let u=document.createElement("div");u.className="price-wrapper",p.appendChild(u);let _=document.createElement("div");_.className="price-image-wrapper",u.appendChild(_);let g=document.createElement("img");g.src="images/gem.svg",_.appendChild(g);let f=document.createTextNode(items[e][1]);u.appendChild(f)}function showFirstPair(){document.getElementById("pointer-1-ypath").style.display="block",document.getElementById("pointer-1-xpath").style.display="none",document.getElementById("pointer-2-ypath").style.display="block",document.getElementById("pointer-2-xpath").style.display="none"}function showSecondPair(){document.getElementById("pointer-1-ypath").style.display="none",document.getElementById("pointer-1-xpath").style.display="block",document.getElementById("pointer-2-ypath").style.display="none",document.getElementById("pointer-2-xpath").style.display="block"}function pointerChangex(){document.getElementById("pointers").className="pointersx"}function pointerChangey(){document.getElementById("pointers").className="pointersy"}function pointerCreate(){document.getElementById("pointers").querySelectorAll("svg").forEach(e=>{console.log("Test"),e.classList.remove("invisiblePointers")})}function initializePointers(){document.getElementById("pointers").querySelectorAll("svg").forEach(e=>{e.classList.add("invisiblePointers")}),PointersThere=!1}function spinnersound(){new Audio("sounds/spinsound.mp3").play()}function spinsoundwin(){new Audio("sounds/winsound.mp3").play()}function battlewinnersound(){new Audio("sounds/battlewinnersound.mp3").play()}function tickSound(){new Audio("sounds/tickSound.mp3").play()}function createpointer(){let e=document.getElementById("Wasser-0"),t=battleusers-1,a=document.getElementById("Wasser-"+t),n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id="pointerfirst",n.setAttribute("stroke","currentColor"),n.setAttribute("fill","currentColor"),n.setAttribute("stroke-width","0"),n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("height","1em"),n.setAttribute("width","1em"),n.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.appendChild(n);let l=document.createElementNS("http://www.w3.org/2000/svg","path");l.id="pointer-1-xpath",l.setAttribute("d","m9 19 8-7-8-7z"),n.appendChild(l);let r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.id="pointersecond",r.setAttribute("stroke","currentColor"),r.setAttribute("fill","currentColor"),r.setAttribute("stroke-width","0"),r.setAttribute("viewBox","0 0 24 24"),r.setAttribute("height","1em"),r.setAttribute("width","1em"),r.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.appendChild(r);let s=document.createElementNS("http://www.w3.org/2000/svg","path");s.id="pointer-2-xpath",s.setAttribute("d","M15 19V5l-8 7z"),r.appendChild(s)}function itemActivatory(e,t){let a=document.getElementById("actualbattlespinnerinner-"+e),n=a.getElementsByClassName("itemcontainer"),l=-1;for(let r=0;r<n.length;r++){let s=n[r].getBoundingClientRect(),i=document.getElementById("pointers").getBoundingClientRect();if(s.left>i.left&&s.left<i.right){l=r;break}}for(let c=0;c<n.length;c++){let o=n[c],d=c===l;o.active=d,d&&t.value!==c&&(o.querySelector(".item").classList.add("active"),o.querySelector(".itemImageContainer").classList.add("active"),document.getElementById("spinner-"+e+"-item-"+(c-1)).querySelector(".item").classList.remove("active"),document.getElementById("spinner-"+e+"-item-"+(c-1)).querySelector(".itemImageContainer").classList.remove("active"),a==document.getElementById("actualbattlespinnerinner-1")&&tickSound(),t.value=c)}}function itemActivatorx(e,t){let a=document.getElementById("actualbattlespinnerinner-"+e),n=a.getElementsByClassName("itemcontainer"),l=-1;for(let r=0;r<n.length;r++){let s=n[r].getBoundingClientRect(),i=document.getElementById("pointers").getBoundingClientRect();if(s.top<i.top&&s.bottom>i.bottom){l=r;break}}for(let c=0;c<n.length;c++){let o=n[c],d=c===l;o.active=d,d&&t.value!==c&&(o.querySelector(".item").classList.add("active"),o.querySelector(".itemImageContainer").classList.add("active"),document.getElementById("spinner-"+e+"-item-"+(c-1)).querySelector(".item").classList.remove("active"),document.getElementById("spinner-"+e+"-item-"+(c-1)).querySelector(".itemImageContainer").classList.remove("active"),a==document.getElementById("actualbattlespinnerinner-1")&&tickSound(),t.value=c)}}document.addEventListener("DOMContentLoaded",function(){getbalance(),balanceonload(),getBattle(),getbattleusers(),createBattleRows(),getbattleInfos(),whatcase(Battle1[6][0][0]),divMaker(0),previewcasespinnerupdate(),updatecurrentcaseinfos()}),document.getElementById("b_balance").onclick=function(){""===document.getElementById("balance-input-container").innerHTML?balancefield():console.log("Cant have more than one input")};