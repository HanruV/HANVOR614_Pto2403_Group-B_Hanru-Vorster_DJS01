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

const distanceAfterTravel =
  startingDistanceInKm + velocityKmH * (travelTimeInSeconds / 3600); //calcultes new distance , converted travelTimeInSeconds to hour because its velocity km/h
console.log(distanceAfterTravel);

const fuelBurnedInKg = fuelBurnRateKgPerSecond * travelTimeInSeconds; //calculates  fuel burned
const remainingFuelAfterTravelInKg = InitialFuelInKg - fuelBurnedInKg; //calculates remaining fuel after travel
console.log(fuelBurnedInKg);
console.log(remainingFuelAfterTravelInKg);

const vel2 = calcNewVel(accelerationMetersPerSecondSquared, velocityKmH, time); //calculates new velocity based on acceleration
console.log(vel2);

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(vel, acc, time) {
  return vel + acc * time;
}

console.log(`Corrected New Distance: ${distanceAfterTravel} km`);
console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAfterTravelInKg} kg`);
