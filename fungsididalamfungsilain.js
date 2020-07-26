
function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
        return x*x;
    }
    //memanggil fungsi lokal
    return c =Math.sqrt(kuadrat(a)+kuadrat(b));
}

var a = 3;
console.log("Masukkan Nilai alas:"+a);
var b = 4;
console.log("Masukkan Nilai tinggi:"+b);

var c =hipotenusa(a,b);

console.log(`isi Miring = ${c}`);