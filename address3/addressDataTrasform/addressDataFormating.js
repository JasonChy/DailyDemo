/**
* 注意：为了避免该算法实现在多端多处不统一而造成难以维护的情况，将在PC端和移动端中多处都使用唯一的一个，
* 如果某一端需要改动，请兼容其他端并做同样的改动，请保持该函数在多端上的统一性，使其有较高的通用性。
**/

// 函数功能：为地址三级联动 生成特定数据结构的JSON地址数据，最终的返回值addressOptions是一个对象数组
/**
 * 参数sourceData: 行政区划数据源，是阿里菜鸟网络所提供的行政区划数据，是key:value对的map数据结构,
 * 菜鸟行政区划数据CDN地址 https://division-data.alicdn.com/simple/addr_3_111_1.js
 * 该数据结构无法满足Ant Design组件库中的Cascader、Picker等组件，所以需要数据格式转换
 *
 * 参数level: number类型：是想要的数据层级：
 * 当level=1时，所生成的addressOptions只有省一级；
 * 当level=2时，所生成的addressOptions是省市两级；
 * 当level=3时，所生成的addressOptions是省市区三级；
 *
 * 参数isMoveWhenLevelEqualsTwo: Boolean类型：默认为false
 * 当level=2时，是否将直辖市下的区县从第三级提到第二级，true时提，false则不提
*/

function addressDataFormating(sourceData, level, isMoveWhenLevelEqualsTwo = false) {
  // 最终需要转换成的地址JSON对象
  const addressOptions = [];

  for (const member in sourceData) {
    if (sourceData.hasOwnProperty(member)
        // 排除71、81、82、99开头的地址项，即排除港澳台和海外
        && !([ '71', '81', '82', '99' ].includes(member.slice(0, 2)))) {
      if (level >= 1 && member.slice(2, 6) === '0000') {
        // 当地址项的后四位是0000，就将它添加到addressOptions第一级作为省
        addressOptions.push({
          value: member,
          label: sourceData[member][0],
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
              label: sourceData[member][0],
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
                // 当member是四个直辖市的区县时，只要前两位数字相同，即可push，因为同一个直辖市下的区县的中间两位数字不一定相同
                if (!addressOptions[j].children[k].hasOwnProperty('children')) {
                  addressOptions[j].children[k].children = [];
                }
                addressOptions[j].children[k].children.push({
                  value: member,
                  label: sourceData[member][0],
                });
              } else if (addressOptions[j].children[k].value.slice(2, 4) === member.slice(2, 4)) {
                // 当member是普通省自治区的区县时，它的中间两位一定是和其所属城市的中间两位相同的
                if (!addressOptions[j].children[k].hasOwnProperty('children')) {
                  addressOptions[j].children[k].children = [];
                }
                addressOptions[j].children[k].children.push({
                  value: member,
                  label: sourceData[member][0],
                });
              }
            }
          }
        }
      }
    }
  }
  // 当level=2且isMoveWhenLevelEqualsTwo=true时，需要对四个直辖市单独做处理，将其下的第三级区县提为JSON对象第二级
  if (level === 2 && isMoveWhenLevelEqualsTwo) {
    for (let l = 0; l < addressOptions.length; l++) {
      if ([ '110000', '120000', '310000', '500000' ].includes(addressOptions[l].value)) {
        addressOptions[l].children = [];
        for (const member in sourceData) {
          if (sourceData.hasOwnProperty(member)) {
            if ((member.slice(0, 2)) === (addressOptions[l].value.slice(0, 2))
                && member.slice(4, 6) !== '00') {
              addressOptions[l].children.push({
                value: member,
                label: sourceData[member][0],
              });
            }
          }
        }
      }
    }
  }
  // console.log('98 addressOptions', addressOptions);
  return addressOptions;
}

// export default addressDataFormating;
