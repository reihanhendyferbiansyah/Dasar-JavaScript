var readline = require ('readline-sync');

var a = perseInt(readline.question("Masukkan Nilai a\n"));
var a = perseInt(readline.question("Masukkan Nilai a\n"));

function PembagiaBulat(a,b){
    var c=a/b;
    if(c>=0){
        return Math.floor(c);
    } else{
        return Math.ceil(c);
    }
}

console.log(`${a}/${b}=${PembagianBulat(a,b)}`);
