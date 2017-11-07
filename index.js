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
  //Given the same starting and ending block, return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot. Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
    function calculatesFarePrice(pickUpLocation, endingBlock) {
      let tripDistance = distanceTravelledInFeet();
      if (tripDistance < 400) {
        return;
      } else if (tripDistance > 2500) {
         return 'cannot travel that far';
      } else if (tripDistance > 2000){
          return 'flat fee';
        } else {
          return (tripDistance - 400) * 0.2;
        }
    };
