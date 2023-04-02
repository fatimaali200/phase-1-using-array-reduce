const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries=batteryBatches.reduce((acc,element)=> acc+element,0);
console.log(totalBatteries);
