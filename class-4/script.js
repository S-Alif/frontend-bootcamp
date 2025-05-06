
// es5 function
function hello(num){
    console.log(num);
    // alert("Hello World!");
    // document.write("Hello World!");

    return num * 2
}
// hello("hello")

// es6 function
// const hello2 = (num) => {
//     console.log(num);
//     // alert("Hello World!");
//     document.write("Hello World!");
// } 

// hello2("hello2")

// events
const button = document.getElementById("my-btn")

// anonymous function
// function() {}

button.addEventListener("click", function(){
    var num = hello(10)
    alert(num)
});