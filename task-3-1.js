const stockArray = [];

const citiesToCheck = cities.slice();

let userCity = "";
let counter = 0;
let cityToCompare = "";
let message = "YOU WON!!!";
let userCityToSave = "";
let finalLetter = "";

let isThere = false;
let isRepeat = false;                    
let isOver = false;
let isFirst = true;
let isFound = false;

breakpoint:
while (!isOver) {  
    if(cities.length > 0) {
        while (counter != 1) {
            /*PREVENT THE INCOMING CITY'S INCONVINIENT ENDING*/
            if ((cityToCompare.at(-2) + cityToCompare.at(-1)) === 'ый') {                
                let b = cityToCompare.split("");                
                let index = b.indexOf("ы");
                b.splice(index, 2);
                cityToCompare = b.join("");                
                } else if (cityToCompare.at(-1) == 'ь' ||
                           cityToCompare.at(-1) == 'ы' ||
                           cityToCompare.at(-1) == 'ъ' ||
                           cityToCompare.at(-1) == 'й' ||
                           cityToCompare.at(-1) == 'ё') {                        
                    let b = cityToCompare.split("");
                    delete b[b.length - 1];
                    cityToCompare = b.join("");                             
                } else {cityToCompare;}

            /*CHECKING IF THERE'S STILL A CITY, COMMENCING BY A NEEDED LETTER. IF NOT - THE USER LOSE*/
            if (!isFirst && cityToCompare.length > 0) {
                for (let i = 0; i < cities.length; i++) {
                    let splitItem = cities[i].split("");                    
                    let itemToCompare = cityToCompare.split("");                                        
                    let index = itemToCompare.length - 1;                                       
                    if (splitItem[0] === itemToCompare[index]) { 
                        isFound = true;                       
                        break;
                    } 
                    isFound = false;
                    finalLetter = itemToCompare[index];
                }                               
            }
            
            if (!isFirst && !isFound && cityToCompare.length > 0) {
                alert(`THERE'S NO MORE CITY, ENDING BY "${finalLetter.toUpperCase()}". GAME OVER!!!`);
                message = "YOU LOST!!!";
                break breakpoint;
            }                                                
            
            /*FIRST USER'S ENTER OF A CITY*/
            if (isFirst || cityToCompare.length == 0) {
                userCity = prompt('Start the game by typing any city(in Russian)');
            } /*IF THE GAME HAS BEEN ALREADY STARTED - TYPE THE ONE WHICH STARTS BY NEEDED LETTER*/
            else {
                userCity = prompt(`Type the city name starting by "${cityToCompare.at(-1).toUpperCase()}"`);
            }
            
            /*CHECKING IF THE CITY EXISTS*/
            for (let i = 0; i < citiesToCheck.length; i++) {
                if (userCity === citiesToCheck[i]) {
                    counter = 1; //STOPS THE HIGHEST "WHILE" AND STARTS A CITY SEARCH IN THE ARRAY 
                    isThere = true;
                    isRepeat = false;                    
                    break;
                }
            }
            
            /*CHEKING IF THE CITY HAS BEEN ALREADY MENTIONED*/
            for (let i = 0; i < stockArray.length; i++) {
                if (userCity === stockArray[i]) {
                    isRepeat = true;
                    isThere = true;
                    counter = 0;
                    break;
                }
            }                        

            /*CHEKING IF THE LETTER MATCHES*/
            if(cityToCompare.length > 0) {
                while (!isFirst) {
                    if ((cityToCompare.at(-1) !== userCity.at(0))) {
                        userCity = prompt(`ERROR!!! PLEASE TYPE A CITY STARTING BY "${cityToCompare.at(-1).toUpperCase()}"`);
                    } else {
                        isFirst = true; 
                    }
                }
            }

            /*PREVENT THE INCONVINIENT ENDING OF THE ENTERED WORD */
            if ((userCity.at(-2) + userCity.at(-1)) === 'ый') {
                    userCityToSave = userCity;
                    let b = userCity.split("");                    
                    let index = b.indexOf("ы");
                    b.splice(index, 2);
                    userCity = b.join("");                    
                } else if (userCity.at(-1) == 'ь' ||
                           userCity.at(-1) == 'ы' ||
                           userCity.at(-1) == 'ъ' ||
                           userCity.at(-1) == 'й' ||
                           userCity.at(-1) == 'ё') {                    
                    userCityToSave = userCity;
                    let b = userCity.split("");
                    delete b[b.length - 1];
                    userCity = b.join('');                               
                } else {
                    userCityToSave = userCity;
                }
                
          
            if (!isThere) { //IF THE CITY DOESN'T EXIST - ALERT & REITERATE
                alert("THERE'S NO SUCH CITY");
            }
            if (isRepeat) { //IF THE CITY HAS BEEN ALREADY MENTIONED - ALERT & REITERATE
                alert("THIS CITY HAS BEEN ALREADY MENTIONED! TYPE ANOTHER ONE!");
            }
            /*RESET ALL FLAGS BEFORE REITERATION*/
            isThere = false;
            isRepeat = false;
            isFirst = false;
            isFound = false;      
        }
        
        /*CHECKING IF THERE IS A CITY WHICH MATCHES*/
        for (let i = 0; i < cities.length; i++) {
            let arrayFromStringCities = cities[i].split("");
            let arrayFromStringPrompt = userCity.split("");        
            isOver = true;
            finalLetter = arrayFromStringPrompt.at(-1);
            message = `THERE'S NO MORE CITY ENDING BY "${finalLetter.toUpperCase()}". GAME OVER. YOU WON!!!`;
            
            if ((arrayFromStringPrompt.at(-1) == arrayFromStringCities[0]) && userCityToSave !== cities[i]) {
                alert(`${cities[i]}`);            
                stockArray.push(cities[i]);
                cityToCompare = cities[i];                
                cities.splice(i, 1);
                let index = cities.indexOf(userCityToSave);
                stockArray.push(cities[index]);
                cities.splice(index, 1);          
                counter = 0; 
                isOver = false;                      
                break;
            }       
        }
    } else {
        alert(`THERE'S NO MORE CITY IN THE ARRAY. GAME OVER!!!`);
        isOver = true;
    }
} 

alert(message);




