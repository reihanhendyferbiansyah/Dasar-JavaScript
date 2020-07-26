function tukar (a,b){


let c=a;
a=b;
b=c;
}

let x=100, y=200;

//menampilkan nilai x dan y sebelum di tukar
console.log('Sebelum di tukar');
console.log(`x:${x}`);
console.log(`y:${y}`);

//memanggi fungsi tukar()
tukar(x,y);

//menampilkan nilai x dan y setelah di tukar
console.log('\n Setelah di tukar');
console.log(`x:${x}`);
console.log(`y:${y}`);