var a=10, b=20;
console.log(`a\t:${a}`);
console.log(`a\t:${b}`);
console.log(`a==b\t:${(a==b)}`);
console.log(`a!=b\t:${(a!=b)}`);
console.log(`a<b\t:${(a<b)}`);
console.log(`a>b\t:${(a>b)}`);
console.log(`a<=b\t:${(a<=b)}`);
console.log(`a>=b\t:${(a>=b)}`);

//operator relasional dalam blok pemilihan
if(a<b){
    console.log(`a lebih kecil dari b`);
}

//operator relasional dalam blok pengulangan
var i=a;
while(i<=b){
    console.log(`${i}`);// menampilkan data ke layar tanpa di sertai karakter baru (new line)
   //console.log(s)-->process.stdout.write(s+`\n)
   i+=2
}