var assert = {
  isTrue: function(assertionToCheck) {
    // console.log(assertionToCheck);
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log(`Test passed: ${assertionToCheck}`);
    }
  }
};
