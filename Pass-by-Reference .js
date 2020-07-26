function increment(a){
    a.x +=1;
}

//membuat objek
let obj = new Object();
//mendefinisikan properti x pada objek yang telah di buat
obj.x=10;

//menampilkan nilai obj.x sebelum di naikkan
console.log(`Sebelum di naikkann nilainya`);
console.log(`obj.x: ${obj.x}`);

//memanggil fungsi increment
increment(obj);

//menmapilkan nilai obj.x setelah di naikkan
console.log("\n setelah di naikkan nilainya");
console.log(`obj.x: ${obj.x}`);