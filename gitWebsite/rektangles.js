var word;
var width;
var length;
var left;
var right;
var A1;
var An;
var counter1;
var countern;
var B;
var empty;
var space;
var obj;
var Ak;
var counterk;
var box;
function generateRek() {
    createText();
    word = document.getElementById("inputWord").value;
    width = document.getElementById("inputWidth").value;
    length = document.getElementById("inputLength").value;
    console.log(word,width,length);
    generateLeft();
    generateRight();
    generateFirst();
    generateLast();
    generateSpace();
    generateSpaceyOnes();
    //console.log(left);
    //console.log(right);
    //console.log(A1);
    //console.log(An);
    //console.log(space);
    console.log(B);
    createBox();
    writeFirst();
    writeRest();


}
function createText() {
    var element = document.createElement("h4");
    element.innerText = "Here is your rektangle:";
    var a = document.getElementsByTagName("body")[0];
    a.appendChild(element);
}
function generateLeft() {
    left = [];
    for(let i = 1; i < word.length; i++) {
        left.push(word.charAt(i));
    }
}
function generateRight() {
    right = [];
    for(let i = word.length - 2; i >= 0; i--) {
        right.push(word.charAt(i));
    }
}
function generateFirst() {
    A1 = [word.charAt(0)].concat(left);
    counter1 = parseInt(width);
    while (counter1 > 1) {
        if (counter1 % 2 === 1) {
            A1 = A1.concat(right);
            counter1--;
        } else {
            A1 = A1.concat(left);
            counter1--;
        }

    }
     
}
function generateLast() {
    An = [word.charAt(word.length-1)].concat(right);
    countern = parseInt(width);
    while (countern > 1) {
        if (countern % 2 === 1) {
            An = An.concat(left);
            countern--;
        } else {
            An = An.concat(right);
            countern--;
        }

    }
}
function generateSpace() {
    empty = " ";
    space = [];
    for (let i = 1; i < word.length - 1; i++) {
        space.push(empty);
    }
}

function generateSpaceyOnes() {
    B = [];
    for(let i = 2; i < word.length; i++) {
        obj = {number: i,
                array: getSpacey(i)};
        B.push(obj);
    }
}
function getSpacey(k) {
    Ak = [word.charAt(k-1)].concat(space).concat([word.charAt(word.length-k)]);
    counterk = parseInt(width);
    while (counterk > 1) {
        if (counterk % 2 === 1) {
            Ak = Ak.concat(space);
            Ak = Ak.concat([word.charAt(k-1)]);
            counterk--;
        } else {
            Ak = Ak.concat(space);
            Ak = Ak.concat([word.charAt(word.length-k)]);
            counterk--;
        }
    }
    return Ak;

}
function createBox() {
    box = document.createElement("textarea");
    box.setAttribute("id", "myBox");
    var a = document.getElementsByTagName("body")[0];
    a.appendChild(box);

}
function writeFirst() {
    box.innerHTML += A1.toString() + "\n";
}
function writeRest() {
    for (let k=2; k< word.length; k++) {
        var filtered = B.filter(b => b.number = k)
        box.innerHTML += filtered[0].array + "\n";
    }
}
