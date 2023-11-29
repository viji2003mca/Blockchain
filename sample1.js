let rows=6;
let char="";
for(var i=0;i<=rows;i++){
    for(var j=0; j<i; j++)
    {
        char+="*";
    }
    char+="\n";
}
console.log(char);
