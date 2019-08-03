var testMessage = {};
testMessage.start = 'Test Starting...';
testMessage.name = 'Name: \t\t';
testMessage.success = 'Result: \t\tsuccess';
testMessage.fail = 'Result: \t\tfail';
testMessage.expected = 'Expected: \t';
testMessage.actual = 'Actual: \t\t';
testMessage.end = "==========EOT==========\n";

function assertSame(testName, expected, actual) {
  if (isSame(expected, actual)) {
    Logger.log(testMessage.start);
    Logger.log(testMessage.name + testName);
    Logger.log(testMessage.success);
    Logger.log(testMessage.expected + expected);
    Logger.log(testMessage.actual + actual);
    Logger.log(testMessage.end);
    return;
  }
  
  Logger.log(testMessage.start);
  Logger.log(testMessage.name + testName);
  Logger.log(testMessage.fail);
  Logger.log(testMessage.expected + expected);
  Logger.log(testMessage.actual + actual);
  Logger.log(testMessage.end);
}

function isSame(expected, actual) {
  return expected === actual;
}