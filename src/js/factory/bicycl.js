console.log('工厂模式');
// 函数属于对象
// 函数是一等对象

var Bicycle = function (brand) {
    this.brand = brand || '凤凰';
    this.buy = function buy() { };
}

//原型凤凰....
// 二维码
// 手机支付
// js 继承关系;
// 共享单车，完全颠覆了自行车
//类，简单的只有一个构造函数;
//js 本身并没有类，只是用的人多了，给了这个实现。
//js 只有对象 Object原型对象的始祖。
//原型
//js 不需要传统继承，只要有个参照物就可以实现原型继承。
//js  字符串 数字  布尔值 undefined null 

//复杂类型 object <-  prototype array function json

Bicycle.prototype = {
    sellBicycle: function (model) {
        var bicycle = null;
        switch (model) {
            case 'Giant':
                bicycle = new Giant();
                break;
            case 'Speedster':
                bicycle = new Speedster();
                break;
            case 'YouTu':
                bicycle = new YouTu();
            default:
                break;
        }
        bicycle.assemble1();
        bicycle.wash2();
        bicycle.providerRepair3();
        console.log('卖车了');
        return bicycle;
        // 卖车，  商店  很多的车  维修人员  仓库人员
        //面向对象们;
    }
}



//雷速达
var Speedster = function () {
    console.log('Speedster');

}
Speedster.prototype = {
    assemble1: function assemble() {
        console.log('Speedster assemble');
    },
    wash2: function wash() {
        console.log('Speedster wash');
    },
    providerRepair3: function providerRepair() {
        console.log('Speedster providerRepair');
    }
}
// Bicycle.prototype.assemble = function assemble() {
//     console.log('Speedster assemble');
// }
// Bicycle.prototype.wash = function wash() {
//     console.log('Speedster wash');
// }
// Bicycle.prototype.providerRepair = function providerRepair() {
//     console.log('Speedster providerRepair');
// }
//
var Giant = function () {
    console.log(Giant);
}

Giant.prototype = {
    assemble1: function assemble() {
        console.log('Giant assemble');
    },
    wash2: function wash() {
        console.log('Giant wash');
    },
    providerRepair3: function providerRepair() {
        console.log('Giant providerRepair');
    }
}
// Giant.prototype.assemble = function assemble() {
//     console.log('Giant assemble');
// }
// Giant.prototype.wash = function wash() {
//     console.log('Giant wash');
// }
// Giant.prototype.providerRepair = function providerRepair() {
//     console.log('Giant providerRepair');
// }

var YouTu = function () {

}
YouTu.prototype = {

}


var bicycle = new Bicycle('永久');

console.log(bicycle.sellBicycle('Giant'));
// console.log(Giant);

