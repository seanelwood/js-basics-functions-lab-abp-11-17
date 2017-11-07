function distanceFromHqInBlocks(pickUpLocation) {
  if (pickUpLocation >= 42) {
    return 42 - pickUpLocation;
  }
  else {
    return pickUpLocation - 42;
  }
}
