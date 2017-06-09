(function (){
  console.log("works");


  function reqListener(){
    var response = JSON.parse(this.responseText);
    console.log(response.homeworld);
    var p4n = document.getElementById("person4Name");
    p4n.innerHTML = response.name;
  }

  function getPerson(id){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', `http://swapi.co/api/people/${id}`);
    oReq.send();
  }

  function reqListener2(){
    var response = JSON.parse(this.responseText);
    var p4hw = document.getElementById("person4HomeWorld");
    p4hw.innerHTML = response.name;
  }

  function getHomeworld(id){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener2);
    oReq.open('GET', `http://swapi.co/api/people/${id}`);
    oReq.send();
  }


getPerson(4);
getHomeworld(1);


})();