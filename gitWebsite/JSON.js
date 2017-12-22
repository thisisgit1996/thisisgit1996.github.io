function JSON1() {
    var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
        var superHeroes = request.response;
        console.log(superHeroes);
        console.log("Our squad name is " + superHeroes.squadName);
        console.log("We are active " + superHeroes.active);
        console.log("We were formed " + superHeroes.formed);
        console.log("Our home town is " + superHeroes.homeTown);
        console.log("Our squad name is " + superHeroes.squadName);
        console.log("Our secret base is " + superHeroes.secretBase);
        console.log("We have " + superHeroes.members.length + " members. There are:");
        
        for(let i=0;i<superHeroes.members.length;i++) {
            console.log(superHeroes.members[i].name + " who is " + superHeroes.members[i].age + " with " + superHeroes.members[i].powers.length + " powers.");
        }

    }


}

var monarchs;

function JSON2() {
    var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
        alert("You may now search for monarchs.")
        monarchs= request.response;
        console.log("Monarchs Loaded.");
    }
}

function monarchSearch() {
    if (monarchs) {
        var results = [];
        var x = document.getElementById("searchResults");
        x.options.length = 0;       
        var search = document.getElementById("monarchSearch").value.toLowerCase();
        for (let i = 0; i < monarchs.length; i++) {
            for (var key in monarchs[i]) {
                var value = monarchs[i][key].toLowerCase();
                if (value.includes(search)) {
                    results.push(monarchs[i])                
                }

            }
        }
        for (let j = 0; j < results.length; j++) {
            var option = document.createElement("option");
            option.text = results[j].nm;
            option.setAttribute("id", "result" + j);
            x.add(option);
            
        }
                
    }
    else {
        alert("Please load the second JSON file and wait until confirmation of success");
    }
}

function loadMonarch() {
    var x = document.getElementById("searchResults");
    var selectedName = x.options[x.selectedIndex].value;
    for (let i = 0; i < monarchs.length; i++) {
        if(monarchs[i].nm === selectedName) {
            alert(`Monarch name is ${monarchs[i].nm}.\n
            Name: ${monarchs[i].nm}.\n
            Country: ${monarchs[i].cty}.\n
            House: ${monarchs[i].hse}.\n
            Years: ${monarchs[i].yrs}.`);
        }
    }
}