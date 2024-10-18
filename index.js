/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmH = 10000; // velocity (km/h)
const accelerationMetersPerSecondSquared = 3; // acceleration (m/s^2)
const travelTimeInSeconds = 3600; // seconds (1 hour)
const startingDistanceInKm = 0; // distance (km) (starting distance)
const InitialFuelInKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)

const d2 = startingDistanceInKm + velocityKmH * travelTimeInSeconds; //calcultes new distance
console.log(d2);
const rf = fuelBurnRateKgPerSecond * travelTimeInSeconds; //calculates remaining fuel
console.log(rf);
const vel2 = calcNewVel(accelerationMetersPerSecondSquared, velocityKmH, time); //calculates new velocity based on acceleration
console.log(vel2);

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => {
  return vel + acc * time;
};

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
