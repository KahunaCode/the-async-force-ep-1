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


  var filmListContainer = document.getElementById('filmList');

  function reqListener(){
    var res = JSON.parse(this.responseText);
    console.log(res);
    for (var i = 0, len = res.results.length; i < len; i++) {
      var filmContainer = document.createElement("li");
      filmContainer.className = "film";

      //make h2's
      var filmTitleContainer = document.createElement("h2");
      filmTitleContainer.className = "filmTitle";
      //console.log("title:", res.results[i].title);
      filmTitleContainer.innerHTML = res.results[i].title;
      filmContainer.appendChild(filmTitleContainer);

      var planetHeading = document.createElement("h3");
      var filmPlanetsContainer = document.createElement("ul");
      filmPlanetsContainer.className = "filmPlanets";

      for (var p = 0; p < res.results[i].planets.length; p++){
        (function(myPlanets){
          var pReq = new XMLHttpRequest();
          //console.log("preq", pReq);
          pReq.addEventListener("load", function(){
            var pRes = JSON.parse(this.responseText);
            //console.log(pRes);
            var planetListItemContainer = document.createElement("li");
            planetListItemContainer.className = "planet";

            var myPlanet = document.createElement("h4");
            myPlanet.className = "planetName";
            myPlanet.innerHTML = pRes.name;

            planetListItemContainer.appendChild(myPlanet);
            myPlanets.appendChild(planetListItemContainer);

          });

          pReq.open('GET', res.results[i].planets[p]);
          pReq.send();
        })(filmPlanetsContainer);
      }

      planetHeading.appendChild(filmPlanetsContainer);

      filmContainer.appendChild(planetHeading);



      filmListContainer.appendChild(filmContainer);

    }


  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open('GET', 'http://swapi.co/api/films/');
  oReq.send();

})();