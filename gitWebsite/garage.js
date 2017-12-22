var garage = [
    {type: "Truck",
    colour: "Black",
    numberPlate: "R277 EUG",
    age: 4,
    faults: []},

    {type: "Bike",
    colour: "Red",
    numberPlate: "E124 YGH",
    age: 2,
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
     var ageIn = document.getElementById("inputAge").value;
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
    var costBill = vehicleBill.age*10 + 7;
    alert("The cost of the bill will be £" + costBill + ".\nBills are calculated as being £(10 * age of vehicle + 7).\nThank you.")
}

function addFault() {
    var faultyVehiclePlate = x.options[x.selectedIndex].value;
    var faultyVehicle = garage.find(a => a.numberPlate === faultyVehiclePlate);
    var fault = document.getElementById("faults").value;
    faultyVehicle.faults.push(fault);
    alert(`Fault added`);
}
    