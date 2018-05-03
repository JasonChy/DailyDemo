
// 设置 viewport 的缩放系数。
let iScale = 1;
iScale = iScale / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=' + iScale + ', maximum-scale=' + iScale + ', minimum-scale=' + iScale + '" />');

// 设置 rem的基数
let num = document.documentElement.clientWidth / 10;
document.getElementsByTagName('html')[0].style.fontSize = num + 'px';