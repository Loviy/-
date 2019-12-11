/**
 * author:lovy;
 * email:928739110@qq.com
 * data:2017-10-12
 **/
/**
 *  回文
 *  注：参数中的任何非大小字母，数字和下划线都会被忽略掉，
 *  例：123&%*21是否是回文 答：是
 *  先将传参进来的值用/[\W_]/g剔除不必要的字符然后用tolowerCase转换为小写字符串
 *  然后用前面的方法得出的值通过split转换为数组并通过reverse进行反转得到一个新的数组然后用join拼接成一个新的字符串
 *  最后俩者进行比较，是一样的返回true否则返回false
 **/
function palindrome(str) { 
	return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
};
/**
 *  es6去重
 *  注：str格式为数组格式,不会进行数据转换，number和string是不一样的
 *  例：dedupe([1,'1','1',1]) 答：[1,'1']
 *  利用es6新集合类型Set不会添加重复的值将传入的值给添加进Set对象中
 *  然后es6Array中新方法form将刚才添加进Set对象中的值转换为数组;
 **/
function dedupe(str){
	return Array.from(new Set(str));
}
/**
 *  去重
 *  注：str格式为数组格式,不会进行数据转换，number和string是不一样的
 *  例：dedupe2([1,'1','1',1]) 答：[1,'1']
 *  先创建一个空对象，然后利用es6新数组方法filter过滤,判断当前obj是否有遍历的参数
 *  如果有这个值则将返回false过滤出去，如果没有obj里面这个数值赋true，然后添加进去;
 **/
function dedupe2(str){
    let obj = {};
    return str.filter((item, index, str) => {
        return obj.hasOwnProperty(typeof item + item) ? false : obj[typeof item + item] = true;
    })
};
/**
 *  快速排序
 *  注：str格式为数组格式,不会进行数据转换，会按照Unicode进行排列
 *  例：[3,2,1].sort(compareNumbers) 答：[1,2,3]
 *  利用jsArray方法sort进行排序
 **/
function compareNumbers(a, b){
    return a - b;
}
/**
 *  快速排序
 *  注：str格式为数组格式,不会进行数据转换，会按照Unicode进行排列
 *  例：arrSort([3,2,1]) 答：[1,2,3]
 *  利用jsArray方法sort进行排序
 **/
function arrSort(arr){
    if(arr.length <= 1)return arr;
    let arrIndex = arr.length /2;
    let arrCenter = arr.splice(arrIndex, 1)[0];
    let l = [];
    let r = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < arrCenter){
            l.push(arr[i]);
        } else {
            r.push(arr[i]);
        }
    }
    return arrSort(l).concat([arrCenter], arrSort(r))
};