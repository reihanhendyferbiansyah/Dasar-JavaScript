var data=['apel', 'durian', 'jeruk'];

var s='[';
for (let i=0; i<data.length;i++){
    s += '\'' +data[i]+'\'';
}
s+=']';
console.log('s: ' + s);