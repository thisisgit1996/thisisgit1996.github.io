var garage = [
    {type: "Truck",
    colour: "Black",
    numberPlate: "R277 EUG",
    age: "3-5 years",
    faults: []},

    {type: "Bike",
    colour: "Red",
    numberPlate: "E124 YGH",
    age: "1-3 years",
    faults: []}
];
var x;
window.onload = function(){
    x = document.getElementById("garage");
    var truckOption = document.createElement("option");
    truckOption.text = garage[0].numberPlate;
    truckOption.setAttribute("id", garage[0].numberPlate);
    x.add(truckOption);
    var bikeOption = document.createElement("option");
    bikeOption.text = garage[1].numberPlate;
    bikeOption.setAttribute("id", garage[1].numberPlate);
    x.add(bikeOption);
    
}
function loadVehicle() {
    
    var selectedVehiclePlate = x.options[x.selectedIndex].value;
    for (let i = 0; i < x.length; i++) {
        if(garage[i].numberPlate === selectedVehiclePlate) {
            if (garage[i].faults.length === 0) {
                alert(`Type: ${garage[i].type}.\nColour: ${garage[i].colour}.\nNumber Plate: ${garage[i].numberPlate}.\nAge: ${garage[i].age}.\nNo Faults!`);
        } else {
            alert(`Type: ${garage[i].type}.\nColour: ${garage[i].colour}.\nNumber Plate: ${garage[i].numberPlate}.\nAge: ${garage[i].age}.\nFaults: ${garage[i].faults}.`);

        }
    }
}
}

function addVehicle() {
     var typeIn = document.getElementById("inputType").value;
     var colourIn = document.getElementById("inputColour").value;
     var numberPlateIn = document.getElementById("inputNumberPlate").value;
     var ageOptions = document.getElementById("inputAge");
     var ageInIndex = ageOptions.options[ageOptions.selectedIndex];
     var ageIn = ageInIndex.value;
     var vehicleIn = {
         type: typeIn,
         colour: colourIn,
         numberPlate: numberPlateIn,
         age: ageIn,
         faults: []};
     var sameVehicles = garage.filter(a => a.numberPlate === numberPlateIn);
     if (sameVehicles.length == 0) {
        garage.push(vehicleIn);
        var vehicleOption = document.createElement("option");
        vehicleOption.text = numberPlateIn;
        vehicleOption.setAttribute("id", numberPlateIn);
        x.add(vehicleOption);
     }   
}

function removeVehicle() {
    var numberPlateOut = x.options[x.selectedIndex].value;
    var index = garage.findIndex(a => a.numberPlate === numberPlateOut);
    garage.splice(index,1);
    var vehicleOut = document.getElementById(numberPlateOut);
    x.remove(vehicleOut.index);
}

function billVehicle() {
    var numberPlateBill = x.options[x.selectedIndex].value;
    var vehicleBill = garage.find(a => a.numberPlate === numberPlateBill);
    var costBill;
    if (vehicleBill.age === "Less than a year" || vehicleBill.age === "1-3 years") {
        costBill = 30;
    } else {
        costBill = 50;
    }
    costBill += vehicleBill.faults.length*20;
    alert("The cost of the bill will be £" + costBill + ".\nBills are calculated " 
    + "as being £30 for cars up to 3 years old, and £50 otherwise. Your car is " 
    + vehicleBill.age + " old. Any faults added to the car are £20 each, and since "
    + "you have " + vehicleBill.faults.length + " fault(s), your bill is £" +
    costBill + ".\nThank you.")
}

function addFault() {
    var faultyVehiclePlate = x.options[x.selectedIndex].value;
    var faultyVehicle = garage.find(a => a.numberPlate === faultyVehiclePlate);
    var fault = document.getElementById("faults").value;
    faultyVehicle.faults.push(fault);
    alert(`Fault added`);
}
    
