
class Segitiga{

    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }
    luas(){
        return this.alas*this.tinggi/2;
    }
}

var a = 20;
console.log("Nilai a:"+a);
var t = 10;
console.log("Nilai b:"+t);


let obj=new Segitiga(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);