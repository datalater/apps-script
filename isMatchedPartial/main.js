/**
 * Determines whether targetValue contains baseValue.
 * 
 * @author: the7mincheol@gmail.com
 * @customFunction
 */
function isMatchedPartial(targetValue, baseValue) {
  if (!includes(baseValue, comma)) {
    return includes(targetValue, baseValue);
  }
  
  var baseValues = baseValue.split(comma);
  
  var result = [];
  for (var i = 0; i < baseValues.length; i++) {
    baseValue = baseValues[i].trim();
    result.push(includes(targetValue, baseValue));
  }
  
  return includes(result, true);
}

function testIsMatchedPartial() {  
  var baseValue = '서울, 경기';
  var targetValue = '경기수원시';
  
  var actual = isMatchedPartial(targetValue, baseValue);
  var expected = true;
  
  assertSame('testIsMatchedPartial', expected, actual);
  
  var baseValue = '서울, 경기';
  var targetValue = '경북구미시';
  
  var actual = isMatchedPartial(targetValue, baseValue);
  var expected = false;
  
  assertSame('testIsMatchedPartial', expected, actual);
}
