let readline=reuquire('readline-sync');

function tambah(a,b){
    return a+b;
}
function kurang(a,b){
    return a-b;
}
function kali(a,b){
    return a*b;
}
function bagi(a,b){
    return a/b;
}
function hitung(a,b,callback){
    return callback(a,b);
}

//let a=parseFloat(readline.question("Masukkan Nilai A:"));
//let a=parseFloat(readline.question("Masukkan Nilai B:"));

console.log(`${a}+${b}=${hitung(a,b,tambah)}`);
console.log(`${a}-${b}=${hitung(a,b,kurang)}`);
console.log(`${a}*${b}=${hitung(a,b,kali)}`);
console.log(`${a}/${b}=${hitung(a,b,bagi)}`);