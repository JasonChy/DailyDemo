function accMul(arg1, arg2) {
  const arg1String = arg1.toString();
  const arg2String = arg2.toString();

  const arg1Temp = arg1String.replace('.', '');
  const arg2Temp = arg2String.replace('.', '');

  const digit1 = arg1String.indexOf('.') === -1 ? 0 : (arg1String.split('.'))[1].length;
  const digit2 = arg1String.indexOf('.') === -1 ? 0 : (arg2String.split('.'))[1].length;

  const resultTemp = Number(arg1Temp) * Number(arg2Temp);

  const result = resultTemp / Math.pow(10, digit1 + digit2);

  return result;
}

console.log(accMul(2, 3));
console.log(accMul(0.02, 0.3));
