let obj={
    alas:4,
    tinggi:5,
    luas:function(){
        return this.alas*this.tinggi/2;
    }
};

console.log("Sebelum nilai properti di ubah: ");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas}`);

obj.alas=10;
obj.tinggi=12;

console.log("Setelah nilai properti di ubah: ");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas}`);