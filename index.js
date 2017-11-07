//Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(pickUpLocation) {
  if (pickUpLocation <= 42) {
    return 42 - pickUpLocation;
  }
  else {
    return pickUpLocation - 42;
  }
}

//Returns the number of blocks from Scuber's headquarters to the pickup location. Note that you can use your distanceFromHqInBlocks function to help return the correct value here.
function distanceFromHqInFeet(pickUpLocation) {
  return distanceFromHqInBlocks(pickUpLocation) * 264;
}

//Calculates the number of feet a passenger travels given a starting block and an ending block - it only calculates distance North and South. It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(pickUpLocation, endingBlock) {
    if (pickUpLocation > endingBlock) {
      return (pickUpLocation - endingBlock) * 264;
    } else {
      return (endingBlock - pickUpLocation) * 264;
    }
  }

