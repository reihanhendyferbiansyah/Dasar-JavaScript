let n=6;

let a=[20,20,10,10,20,10];
let total=0.0;
for(let i=0;i<n;i++){
    total +=a[i];
}

let rata=total/a.length;

console.log(`\n Isi Array a : [${a}]`);
console.log(`\n Total Data : [${total}]`);
console.log(`\n Rata rata : [${rata}]`);