function calculateAverage(readings) {
  if (!readings || readings.length === 0) {
    return "No oxygen readings available.";
  }

  // 1. Calculate the sum of all readings
  const total = readings.reduce((sum, value) => sum + value, 0);

  // 2. Calculate the average
  const average = total / readings.length;

  // 3. Format the average to 2 decimal places
  const formattedAverage = average.toFixed(2);

  // 4. Check if within safe range (19.5% to 23.5%)
  const isSafe = average >= 19.5 && average <= 23.5;

  // 5. Return the formatted output message
  return `The average oxygen level is ${formattedAverage}%. Oxygen level is ${isSafe ? "safe" : "not safe"}.`;
}


let oxygenReadings = [20.1, 22.3, 21.0, 19.8, 23.0, 21.5];
console.log(calculateAverage(oxygenReadings));