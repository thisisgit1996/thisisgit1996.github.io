function squareNumber() {
    var num1 = document.getElementById("number1").value;
    alert(Math.pow(num1,2));   
}

function sayHello() {
    alert("Hello world");
}

me = {
    name: "Leo",
    age: 21,
    occupation: "IT Consultant"
}

function changeName() {
    me.name = 'Leon';
    alert("Name changed to Leon!");
}

function testMe() {
    if (20 < me.age && me.age < 40) {
        alert("Yes")
    } 
    else {alert("No")}
}

function sum3() {
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    alert(parseInt(num2)+parseInt(num3)+parseInt(num4));
}

function concat() {
    var string1 = document.getElementById("string").value;
    var num5 = document.getElementById("number5").value;
    alert(string1 + num5);
}

var people = ["Alice", "Bob", "Charlie"];

function addPerson() {
    people.push("Dave");
}

function removePerson() {
    people.pop();
}


function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        var f = "";
        var b = "";
        if (i % 3 === 0) {
            f = "Fizz";
        }
        if (i % 5 === 0) {
            b = "Buzz";
        }
        var out = f + b;
        if (out) {
            console.log(out);        
        }
        else {
            console.log(i);
        }
    }
}

function iteration4() {
    var x = parseInt(document.getElementById("iterationNumber").value);
    while ( x != 1) {
        if (x % 3 === 0) {
            x /= 3;
            console.log("We have divided by 3 to get " + x);
        }
        else if ((x+1) % 3 === 0) {
            x += 1;
            console.log("We have added 1 to get " + x);
        }
        else if ((x-1) % 3 === 0) {
            x -= 1;
            console.log("We have subtracted 1 to get " + x);
        }
    }
    console.log("We have reached 1");
}

function tripleCounter() {
    var y = document.getElementById("strings4").value;
    var count = 0;
    var total = 0;
    var character = "";

    for (let i = 0; i < y.length; i++) {
        if(character === y.charAt(i)) {
            count++;
        }
        else {
            count = 0;
        }

        if(count > 1) {
            total++;
        }

        character = y.charAt(i);

    }
    alert("Number of triples: " + total);

}
function createTag() {
    var para = document.createElement("p");
    var text = document.createTextNode("This is a new paragraph");
    para.appendChild(text);
    para.setAttribute("id", "newPara");
    var a = document.getElementById("place1");
    a.appendChild(para);

}
function deletePara() {
    
}
