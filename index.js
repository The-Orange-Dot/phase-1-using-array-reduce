const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;
let init = 0;

function cb(init, battery) {
  return init + battery;
}

totalBatteries = batteryBatches.reduce(cb, init);
