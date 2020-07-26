let siswa =[
    ['1234', 'Adi', 'Malang'],
    ['1235', 'Ari', 'Bandung'],
    ['1236', 'Iqkam', 'Madiun'],
];

for(let i=0;i<siswa.length;i++){
    for(let j=0;j<siswa[i].length;j++){
        console.log(siswa[i][j].toString());
        if(j<siswa[i].length-1){
            console.log('\t');
        }
    }
    console.log();
}