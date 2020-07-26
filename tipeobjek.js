function segitiga(a,t){
    this.alas=a;
    this.tinggi=t;
}

segitiga.prototype.luas=function(){
    return this.alas*this.tinggi/2;
}