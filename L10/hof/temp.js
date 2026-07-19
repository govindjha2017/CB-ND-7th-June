function outer(){
    var money=50;
    var p=40;

    function inner(){
        var a=10;
        console.log(money);
        console.log(a);
        p++;
    }
    return inner;
}

var x = outer();
console.log(x);
x();