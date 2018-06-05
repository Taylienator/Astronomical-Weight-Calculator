// Write your JavaScript code here!
let select = document.getElementById("planets");  //going to select the element planets from html
let planets =[                                     //array of planets, plantets[0] = name and planet[1] = weight
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]

];

    planets.forEach(function(planetnames){                      //using the for each method to run a function for each "element" in your array 
        let plans = planetnames[0];                             //creating a variable to store your arrays elements starting at index [0]
        let option = document.createElement("option");          //creating your option element
        option.textContent = plans;                             //populating your option element with textcontent equaling your variable plans
        option.value = plans;                                   //populating your option element's value from the array
        select.appendChild(option);                             //adding on your newly created option element to your select id in your html index
    })

    function calculateWeight (weight, planetName) {             //this function will calculate the weight, has 2 arguments that will pass through it
       
        planets.forEach(function(planet) {                      //for each method to run for each array
          if (planet[0] === planetName) {                       //using an if statement, so that if user clicks on planet[i], that index will store in the planets name along with the value of it
            result = weight * planet[1];                        //multiplying the weight(user put in) with planets index at 2
          }
        });
        return result;                                          //returning the result
      }
      

      function handleClickEvent(e) {
        let userWeight = document.getElementById("user-weight").value;  //storing userWeight into the element within the html
        let planetName = document.getElementById("planets").value;      //store the planet name into the planet variable
        let result = document.getElementById("output").value;           //storing users weight into variable result
        
        let weight = calculateWeight(userWeight, planetName);       //calculate weight function that is stored in the weight variable
        document.getElementById("output").innerHTML = "If you were on " + planetName +  ", you would weigh "  + weight + "lbs! ";         //what the user will see after putting in the weight and choosing the planet
      }