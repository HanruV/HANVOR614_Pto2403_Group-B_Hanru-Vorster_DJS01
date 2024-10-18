/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmH = 10000; // velocity (km/h)
const velocityInMetersPerSecond = velocityKmH * (1000 / 3600); // velocity (m/s)
const accelerationMetersPerSecondSquared = 3; // acceleration (m/s^2)
const travelTimeInSeconds = 3600; // seconds (1 hour)
const startingDistanceInKm = 0; // distance (km) (starting distance)
const InitialFuelInKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)

const distanceAfterTravel =
  startingDistanceInKm + velocityKmH * (travelTimeInSeconds / 3600); //calcultes new distance , converted travelTimeInSeconds to hour because its velocity km/h

const fuelBurnedInKg = fuelBurnRateKgPerSecond * travelTimeInSeconds; //calculates  fuel burned

const remainingFuelAfterTravelInKg = InitialFuelInKg - fuelBurnedInKg; //calculates remaining fuel after travel

const velocityDuringTravel = calcVelocityDuringTravel(
  velocityInMetersPerSecond,
  accelerationMetersPerSecondSquared,
  travelTimeInSeconds
); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcVelocityDuringTravel(vel, acc, time) {
  if (typeof vel !== "number" || vel < 0) {
    throw new Error(
      "The velocity is invalid, provide a pisitive number in meters per second"
    );
  }
  if (typeof acc !== "number" || acc < 0) {
    throw new Error(
      "The acceleration is invalid, provide a pisitive number in meters per second"
    );
  }
  if (typeof time !== "number" || time < 0) {
    throw new Error(
      "The time is invalid, provide a pisitive number in seconds"
    );
  }
  return (vel + acc * time) * 3.6; //converts the m/s to km/h
}

console.log(`Corrected New Velocity: ${velocityDuringTravel} km/h`);
console.log(`Corrected New Distance: ${distanceAfterTravel} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAfterTravelInKg} kg`);
