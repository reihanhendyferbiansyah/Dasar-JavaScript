var a = 20;
console.log("Nilai a:"+a);
var b = 10;
console.log("Nilai b:"+a);
var c;

if(b==0){
    console.log('kesalahan: nilai b tidak boleh 0');
    process.exit(1);
}

c=a/b;
console.log(`${a}/${b}=${c}`);