(function (){
  console.log("works");

  //get person 4 info and create innerHTML's
  (function (){
    function reqListener(){
      var response = JSON.parse(this.responseText);
      console.log(response.homeworld);
      (function(){
        function reqListener2(){
          var response = JSON.parse(this.responseText);
          var p4hw = document.getElementById("person4HomeWorld");
          p4hw.innerHTML = response.name;
        }

        function getHomeworld(id){
          var oReq = new XMLHttpRequest();
          oReq.addEventListener('load', reqListener2);
          oReq.open('GET', id);
          oReq.send();
        }
        getHomeworld(response.homeworld);

      })();
      var p4n = document.getElementById("person4Name");
      p4n.innerHTML = response.name;
    }

    function getPerson(id){
      var oReq = new XMLHttpRequest();
      oReq.addEventListener('load', reqListener);
      oReq.open('GET', `http://swapi.co/api/people/${id}`);
      oReq.send();
    }
    //fires function and http requests
    getPerson(4);
  })();

  //iife for person14 innerhtmls
  (function (){
    function reqListener(){
      var response = JSON.parse(this.responseText);
      (function(){
        function reqListener2(){
          var response = JSON.parse(this.responseText);
          var p4hw = document.getElementById("person14Species");
          p4hw.innerHTML = response.name;
        }

        function getSpecies(id){
          var oReq = new XMLHttpRequest();
          oReq.addEventListener('load', reqListener2);
          oReq.open('GET', id);
          oReq.send();
        }
        getSpecies(response.species);

      })();
      var p14n = document.getElementById("person14Name");
      p14n.innerHTML = response.name;
    }

    function getPerson(id){
      var oReq = new XMLHttpRequest();
      oReq.addEventListener('load', reqListener);
      oReq.open('GET', `http://swapi.co/api/people/${id}`);
      oReq.send();
    }
        //fires function and http requests
    getPerson(14);
  })();





})();