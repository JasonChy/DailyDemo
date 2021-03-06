// 生成特定数据结构的JSON地址数据
/* level参数 是想要的数据层级：
  当level=1时，所生成的addressOptions只有省一级；
  当level=2时，所生成的addressOptions是省市两级；
  当level=3时，所生成的addressOptions有省市区三级；
*/
function generateAddressOptions(level) {
  // 开始执行的时间戳
  const startTime = (new Date()).getTime();

  // tdist是菜鸟地址库JSON对象
  const tdist = window.tdist;
  // 最终需要转换成的地址JSON对象
  const addressOptions = [];

  for (const member in tdist) {
    if (tdist.hasOwnProperty(member)
        // 排除71、81、82、99开头的地址项，即排除港澳台和海外
        && [ '71', '81', '82', '99' ].includes(member.slice(0, 2))) {
      if (level >= 1 && member.slice(2, 6) === '0000') {
        // 当地址项的后四位是0000，就将它添加到addressOptions第一级作为省
        addressOptions.push({
          value: member,
          label: tdist[member][0],
        });
      } else if (level >= 2 && member.slice(2, 4) !== '00' && member.slice(4, 6) === '00') {
        // 当地址项的中间两位不是00 且 后两位是00，就将它添加到addressOptions第二级作为市
        for (let i = 0; i < addressOptions.length; i++) {
          if (addressOptions[i].value.slice(0, 2) === member.slice(0, 2)) {
            if (!addressOptions[i].hasOwnProperty('children')) {
              addressOptions[i].children = [];
            }
            addressOptions[i].children.push({
              value: member,
              label: tdist[member][0],
            });
          }
        }
      } else if (level >= 3 && member.slice(2, 4) !== '00' && member.slice(4, 6) !== '00') {
        // 当地址项的中间两位不是00 且 后两位也不是00，就将它添加到addressOptions第三级作为区县
        for (let j = 0; j < addressOptions.length; j++) {
          if (addressOptions[j].value.slice(0, 2) === member.slice(0, 2)) {
            for (let k = 0; k < addressOptions[j].children.length; k++) {
              // 下面一对if else虽然内部代码块一样，但因为其条件不同，所筛选的地址项不同，所以不能将两块逻辑合并为一块
              if ([ '11', '12', '31', '50' ].includes(member.slice(0, 2))) {
                // 当 member是直辖市的区县时，只要前两位数字相同，即可push，因为同一个直辖市下的区县的中间两位数字不一定相同
                if (!addressOptions[j].children[k].hasOwnProperty('children')) {
                  addressOptions[j].children[k].children = [];
                }
                addressOptions[j].children[k].children.push({
                  value: member,
                  label: tdist[member][0],
                });
              } else if (addressOptions[j].children[k].value.slice(2, 4) === member.slice(2, 4)) {
                // 当member时普通省的区县时，它的中间两位一定是和其所属城市的中间两位相同的
                if (!addressOptions[j].children[k].hasOwnProperty('children')) {
                  addressOptions[j].children[k].children = [];
                }
                addressOptions[j].children[k].children.push({
                  value: member,
                  label: tdist[member][0],
                });
              }
            }
          }
        }
      }
    }
  }
  // 当level是2时，需要对四个直辖市单独做处理，将其下的第三级区县提为JSON对象第二级
  if (level === 2) {
    // const threeLevelAddress = generateAddressOptions(window.tdist, 3);
    for (let l = 0; l < addressOptions.length; l++) {
      if ([ '110000', '120000', '310000', '500000' ].includes(addressOptions[l].value)) {
        addressOptions[l].children = [];
        for (const member in tdist) {
          if (tdist.hasOwnProperty(member)) {
            if ((member.slice(0, 2)) === (addressOptions[l].value.slice(0, 2))
                && member.slice(4, 6) !== '00') {
              addressOptions[l].children.push({
                value: member,
                label: tdist[member][0],
              });
            }
          }
        }
      }
    }
  }
  // console.log('96 addressOptions', addressOptions);
  // 结束的时间戳
  const endTime = (new Date()).getTime();
  console.log(endTime - startTime);
  return addressOptions;
}

export default generateAddressOptions;
