var a=10;
function outer(){
    let p=11;
    a++;
    function inner(){
        var a=25;
        a++;
        p++;
        console.log(a);
        console.log(p);
        function innerMost(){
            let x="Hello";
            console.log(a);
            console.log(x);
        }
        innerMost();
        console.log("Namste")
    }
    inner()
    console.log(y);
    let y=10;
}
console.log("Coding")
outer();
console.log("END");