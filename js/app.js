(function (){
  console.log("works");

  function reqListener(){
    var response = JSON.parse(this.responseText);
    console.log(response.name);
    var p4n = document.getElementById("person4Name");
    p4n.innerHTML = response.name;

    var p4hw = document.getElementById("person4HomeWorld");
    p4hw.innerHTML = getHomeWorld(response.homeworld);


  }

  function getPerson(id){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', `http://swapi.co/api/people/${id}`);
    oReq.send();
  }

  function getHomeWorld(hw){
    var hReq = new XMLHttpRequest();
    hReq.addEventListener('load', reqListener);
    hReq.open('GET', hw);
    hReq.send();
  }

var luke = getPerson(1);
console.log(luke);

var p4 = document.getElementById("person4Name");
//p4[0].innerHTML = luke.name;
console.log(p4);


})();