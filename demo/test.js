
function statisCount(arr) {
  let arrCount = [];
  let obj = {};
  arrCount[0] = {
    name: arr[0],
    count: 1
  };
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arrCount.length; j++) {
      if (arr[i] == arrCount[j].name) {
        arrCount[j].count++;
        break;
      }
      if (j == arrCount.length - 1) {
        obj = {
          name: arr[i],
          count: 0
        };
        arrCount.push(obj);
      }
    }
  }
  console.log('arrCount', arrCount);
  return arrCount;
}

function computeMax(objList) {
  let { name: maxKey, count: maxCount } = objList[0];
  for (let i = 0; i < objList.length; i++) {
    if (objList[i].count > maxCount) {
      maxKey = objList[i].name;
      maxCount = objList[i].count;
    }
  }
  return { maxKey, maxCount}
}

const arr = [21, 21, 23, 21, 22, 23, 24, 24, 26, 23, 21, 22, 21, 21];
const statisCountResult = statisCount(arr);
console.log(statisCountResult);

const maxElement = computeMax(statisCountResult);
console.log(maxElement);
