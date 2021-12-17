// marvel const
var marvelName = document.querySelector('#marvelName');
var marvCard = document.querySelector('#marvCardId');
var marvCharTitle = document.querySelector('#marvCharTitle');
var marvStats = document.querySelector('#marvStats');
var movieChoice = document.querySelector('#marvArray');
var teamMarvel = document.querySelector('#mTeamNames');

// dc const
var dcName = document.querySelector('#dcName');
var dcCard = document.querySelector('#dcCardId');
var dcCharTitle = document.querySelector('#dcCharTitle');
var dcStats = document.querySelector('#dcStats');
var dcmovieChoice = document.querySelector('#dcArray');
var teamDC = document.querySelector('#dcTeamNames');

var parsed = "";
const superAPIKey = '10215957904298742';
const newKey = 'k_9qqhtsbd/';
var imdbAPIKey = 'k_rjtma7sz/'

//The number associated with the position in the html will be appended to the superhero API as the hero id
$(marvelName).change(function() {
    let position = this.value;
    let idURL = 'https://www.superheroapi.com/api.php/10215957904298742/' + position;

        //Each if statement takes the user's hero selection and adds the movie selection associated with the hero
        if (this.value == 149) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Captain America: The First Avenger", "Captain America: The Winter Soldier", "Captain America: Civil War"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el); 
        }
            //Replaces every space globally with %20 to be used for the API url
            //Calls the getRatingAPI to get movie rating for selected hero movie
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 346) {
            // clearMarvMovie();
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Iron Man", "Iron Man 2", "Iron Man Three"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);
        
        } else if (this.value == 620) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Spider-Man", "Spider-Man 2", "Spider-Man Three", "The Amazing Spider-Man", "The Amazing Spider-Man 2", "Spider-Man Homecoming", "Spider-Man Far From Home"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 226) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Doctor Strange"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 30) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Ant-Man", "Ant-Man and the Wasp"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 106) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Black Panther"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 659) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Thor", "Thor: The Dark World", "Thor: Ragnarok"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }

            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 332) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Hulk", "The Incredible Hulk"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 687) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Venom", "Venom: Let there be Carnage"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 213) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Deadpool", "Deadpool 2"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);
        };
        //Calls API using the url created in the above if statements based on selection
        getMarvelAPI(idURL);
});
//The imdb API is called to find the ratings based on the user's selected movie choice
$(movieChoice).change(function() {
    console.log(this.value);
    let result = this.value.replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);
})

$(dcName).change(function() {
    let position = this.value;
    let idURL = 'https://www.superheroapi.com/api.php/10215957904298742/' + position;

    if (this.value == 69) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Batman(1989)", "Batman Returns", "Batman & Robin", "Batman Forever", "Batman V Superman: Dawn of Justice", "Batman Begins", "The Dark Knight", "The Dark Knight Rises", "Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 644) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Superman The Movie", "Superman II", "Superman III", "Superman IV: The Quest for Peace", "Superman Returns", "Man of Steel", "Batman V Superman: Dawn of Justice", "Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 306) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Green Lantern"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 720) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Wonder Woman", "Wonder Woman 1984", "Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 194) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 370) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Joker", "Suicide Squad", "Batman"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 309) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Birds of Prey", "Suicide Squad", "The Suicide Squad"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 367) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Constantine"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 165) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["CatWoman", "The Dark Knight Rises"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 38) {
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Aquaman", "Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);
    };
    
    getDCAPI(idURL);
});
$(dcmovieChoice).change(function() {
    console.log(this.value);
    let dcresult = this.value.replace(/ /g, "%20");
            console.log(dcresult);
            getDCRatingAPI(dcresult);
})
//Grabs powerstats from superhero API and creates an element for each to show in the html
function getMarvelAPI(link) {
    fetch(link)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        console.log(data.powerstats)

        // append marvel character name
        var mdivEl = document.createElement("div")
        var marvTitle = document.createElement("h2")
        var marvImg = document.createElement("img")
        var mStats = document.createElement("h4")
        var mIntell = document.createElement("p")
        var mStrength = document.createElement("p")
        var mSpeed = document.createElement("p")
        var mDur = document.createElement("p")
        var mPower = document.createElement("p")
        var mCombat = document.createElement("p")
        var mRate = document.createElement("p")
        mRate.setAttribute('id', 'dummyRate')

        marvTitle.textContent = data.name
        marvImg.setAttribute("src", data.image.url);
        marvImg.height = 160;
        marvImg.width = 120;
        mStats.textContent = "Stats: ";
        mIntell.textContent = 'Intelligence: ' + data.powerstats.intelligence;
        mStrength.textContent = 'Strength: ' + data.powerstats.strength;
        mSpeed.textContent = 'Speed: ' + data.powerstats.speed;
        mDur.textContent = 'Durability: ' + data.powerstats.durability;
        mPower.textContent = 'Power: ' + data.powerstats.power;
        mCombat.textContent = 'Combat: ' + data.powerstats.combat;
        mRate.textContent = 'Movie Rating: ';

       marvCharTitle.appendChild(marvTitle);
       mdivEl.appendChild(marvImg);
       mdivEl.appendChild(mStats);
       mdivEl.appendChild(mIntell);
       mdivEl.appendChild(mStrength);
       mdivEl.appendChild(mSpeed);
       mdivEl.appendChild(mDur);
       mdivEl.appendChild(mPower);
       mdivEl.appendChild(mCombat);
       mdivEl.appendChild(mRate);
       marvStats.appendChild(mdivEl);
       
       //Outputs the sum and averages of the powerstats + ratings
       var mstatTot = Object.values(data.powerstats)
       var mSum = 0;
       for( var i = 0; i < mstatTot.length; i++ ){
           mSum += parseInt( mstatTot[i], 10 );
       }
       var mAvg = Math.round(mSum/mstatTot.length);
       console.log( "The sum of all the elements is: " + mSum + " The average is: " + mAvg );

       //Stores the hero names in an array and pushes the first name out of the array one the length is equal to 3
       //The names are stored on the html sheet as the individuals in the Hero team
       var allSelectedChars = [];
       if (localStorage.getItem('marvSelectedChars')){
        allSelectedChars = JSON.parse(localStorage.getItem('marvSelectedChars'))
       }  
       if (allSelectedChars.length === 3) {
           allSelectedChars.shift();
       }
       allSelectedChars.push(marvTitle.textContent)
       localStorage.setItem("marvSelectedChars", JSON.stringify(allSelectedChars));
       var allSelectedStats = [];
       if (localStorage.getItem('marvSelectedStats')) {
           allSelectedStats = JSON.parse(localStorage.getItem('marvSelectedStats'))
       }
       if (allSelectedStats.length === 3) {
           allSelectedStats.shift();
       }
       allSelectedStats.push(mAvg);
       localStorage.setItem('marvSelectedStats', JSON.stringify(allSelectedStats));
       for (var x = 0; x < allSelectedChars.length; x++) {
           var nameDisplay = allSelectedChars[x];
           var mStored = document.createElement('p');
           mStored.textContent = nameDisplay;
           mStored.setAttribute('style', 'color:black')
           teamMarvel.append(mStored);
       }
    })
    marvCharTitle.innerHTML = "";
    marvStats.innerHTML = "";
    teamMarvel.innerHTML = "";

    
}
//Get DC Movie data
function getDCAPI(link) {
    fetch(link)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.powerstats)
 
        // append dc character name
        var dcDivEl = document.createElement("div")
        var dcTitle = document.createElement("h2")
        var dcImg = document.createElement("img")
        var dStats = document.createElement("h4")
        var dcIntell = document.createElement("p")
        var dcStrength = document.createElement("p")
        var dcSpeed = document.createElement("p")
        var dcDur = document.createElement("p")
        var dcPower = document.createElement("p")
        var dcCombat = document.createElement("p")
        var dcRate = document.createElement("p")
        dcRate.setAttribute('id', 'dcDummyRate')

        dcTitle.textContent = data.name
        dcImg.setAttribute("src", data.image.url);
        dcImg.height = 160;
        dcImg.width = 120;
        dStats.textContent = "Stats: ";
        dcIntell.textContent = 'Intelligence: ' + data.powerstats.intelligence;
        dcStrength.textContent = 'Strength: ' + data.powerstats.strength;
        dcSpeed.textContent = 'Speed: ' + data.powerstats.speed;
        dcDur.textContent = 'Durability: ' + data.powerstats.durability;
        dcPower.textContent = 'Power: ' + data.powerstats.power;
        dcCombat.textContent = 'Combat: ' + data.powerstats.combat;
        dcRate.textContent = 'Movie Rating: ';
        
        dcCharTitle.appendChild(dcTitle);
        dcDivEl.appendChild(dcImg);
        dcDivEl.appendChild(dStats);
        dcDivEl.appendChild(dcIntell);
        dcDivEl.appendChild(dcStrength);
        dcDivEl.appendChild(dcSpeed);
        dcDivEl.appendChild(dcDur);
        dcDivEl.appendChild(dcPower);
        dcDivEl.appendChild(dcCombat);
        dcDivEl.appendChild(dcRate);
        dcStats.appendChild(dcDivEl);

        var dstatTot = Object.values(data.powerstats)
        var dcSum = 0;
        for( var i = 0; i < dstatTot.length; i++ ){
            dcSum += parseInt( dstatTot[i], 10 );
        }
    
        var dcAvg = Math.round(dcSum/dstatTot.length);
        console.log( "The sum of all the elements is: " + dcSum + " The average is: " + dcAvg );

        var allSelectedChars = [];
       if (localStorage.getItem('dcSelectedChars')){
        allSelectedChars = JSON.parse(localStorage.getItem('dcSelectedChars'))
       }  
       if (allSelectedChars.length === 3) {
           allSelectedChars.shift();
       }
       allSelectedChars.push(dcTitle.textContent)
       localStorage.setItem("dcSelectedChars", JSON.stringify(allSelectedChars));
       var allSelectedStats = [];
       if (localStorage.getItem('dcSelectedStats')) {
           allSelectedStats = JSON.parse(localStorage.getItem('dcSelectedStats'))
       }
       if (allSelectedStats.length === 3) {
           allSelectedStats.shift();
       }
       allSelectedStats.push(dcAvg);
       localStorage.setItem('dcSelectedStats', JSON.stringify(allSelectedStats));
       for (var x = 0; x < allSelectedChars.length; x++) {
           var nameDisplay = allSelectedChars[x];
           var dcStored = document.createElement('p');
           dcStored.textContent = nameDisplay;
           dcStored.setAttribute('style', 'color:black')
           teamDC.append(dcStored);
       } 

    })

    dcCharTitle.innerHTML = "";
    dcStats.innerHTML = "";
    teamDC.innerHTML = "";
}

//Getting movie ratings
function getMRatingAPI(marvMovie) {
    fetch('https://imdb-api.com/en/API/SearchMovie/'+ newKey + marvMovie)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var pull1 = data.results[0];
                var idName = pull1.id;
                console.log(idName);
                
                fetch('https://imdb-api.com/en/API/Ratings/'+ newKey + idName)
                .then(function (response) {
                    if (response.ok) {
                        response.json().then(function (data) {
                            if (data.rottenTomatoes) {
                                var mrating = parseInt(data.rottenTomatoes)
                            }else {
                                var mrating = parseInt(data.metacritic)
                            }
                            console.log(mrating);
                            var nodelist = document.getElementById("dummyRate")
                            nodelist.textContent = 'Movie Rating: ' + mrating

                            var mRateArray = [];
                            if (localStorage.getItem('marvSelectedRatings')) {
                             mRateArray = JSON.parse(localStorage.getItem('marvSelectedRatings'))
                            }  
                            if (mRateArray.length === 3) {
                                mRateArray.pop();
                            }
                            mRateArray.push(mrating)
                            localStorage.setItem("marvSelectedRatings", JSON.stringify(mRateArray));
                        })
                    }
                })
            })
        }
    })
}

function getDCRatingAPI(dcMovie) {
    fetch('https://imdb-api.com/en/API/SearchMovie/'+ newKey + dcMovie)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var dcpull1 = data.results[0];
                var dcidName = dcpull1.id;
                console.log(dcidName);
                
                fetch('https://imdb-api.com/en/API/Ratings/'+ newKey + dcidName)
                .then(function (response) {
                    if (response.ok) {
                        response.json().then(function (data) {
                            if (data.rottenTomatoes) {
                                var dcrating = parseInt(data.rottenTomatoes)
                            }else {
                                var dcrating = parseInt(data.metacritic)
                            }
                            console.log(dcrating);
                            var dcnodelist = document.getElementById("dcDummyRate")
                            dcnodelist.textContent = 'Movie Rating: ' + dcrating

                            var dcRateArray = [];
                            if (localStorage.getItem('dcSelectedRatings')) {
                             dcRateArray = JSON.parse(localStorage.getItem('dcSelectedRatings'))
                            }  
                            if (dcRateArray.length === 3) {
                                dcRateArray.pop();
                            }
                            dcRateArray.push(dcrating)
                            localStorage.setItem("dcSelectedRatings", JSON.stringify(dcRateArray));
                        })
                    }
                })
            })
        }
    })
}

//Gets the average from powerstats and average for movie rating
var getmAvg = JSON.parse(localStorage.getItem('marvSelectedStats'))
console.log(getmAvg);
var getmRate = JSON.parse(localStorage.getItem('marvSelectedRatings'))
console.log(getmRate)

//Get total average of powerstats array and movie rating array
var i, j;
var mAverage = 0;

for(i = 0; i < getmAvg.length; i++){
    mAverage += getmAvg[i];
}
for(j = 0; j < getmRate.length; j++){ 
    mAverage += getmRate[j];
}
console.log(mAverage /= (i+j))


var getdcAvg = JSON.parse(localStorage.getItem('dcSelectedStats'))
console.log(getdcAvg);
var getdcRate = JSON.parse(localStorage.getItem('dcSelectedRatings'))
console.log(getdcRate)

var i, j;
var dcAverage = 0;

for(i = 0; i < getdcAvg.length; i++){
    dcAverage += getdcAvg[i];
}
for(j = 0; j < getdcRate.length; j++){ 
    dcAverage += getdcRate[j];
}
console.log(dcAverage /= (i+j))

//From fight club html to display on winner screen
var finalMarvAvg = document.getElementById('finalMarvAvg');
var finalDCAvg = document.getElementById('finalDCAvg');
var finalWinner = document.getElementById('finalWinner');

finalMarvAvg.textContent = mAverage.toFixed(1); //Using toFixed to display only one number after decimal
console.log(finalMarvAvg)
finalDCAvg.textContent = dcAverage.toFixed(1);
getWinner(mAverage,dcAverage)

function getWinner(m,dc) {
    var highestScore = Math.max(m, dc)
    if (m > dc) {
        winner = 'Marvel'
        finalWinner.textContent = winner
    }else {
        winner = 'DC'
        finalWinner.textContent = winner
    }
}