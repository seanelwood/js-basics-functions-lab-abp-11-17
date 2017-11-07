function distanceFromHqInBlocks(pickUpLocation) {
  if (pickUpLocation <= 42) {
    return 42 - pickUpLocation;
  }
  else {
    return pickUpLocation - 42;
  }
}

function distanceFromHqInFeet(pickUpLocation) {
  //Returns the number of blocks from Scuber's headquarters to the pickup location. Note that you can use your distanceFromHqInBlocks function to help return the correct value here.
  return distanceFromHqInBlocks(pickUpLocation) * 264;
}