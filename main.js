//Common
window.onload = practise6_init(), exercise5_init();
// window.onload = practise7_init_and_eventListener();
function practise6_init(){
    // init position
    let practise6_img = document.getElementById("practise6_ball");
    practise6_img.style.position = "relative";
    practise6_img.style.left = "0px";
}
function practise7_init_and_eventListener(){
    let practise7_img = document.getElementById("practise7_image");
    practise7_imgContainer.style.position = "relative";
    practise7_img.style.position = "absolute";
    practise7_img.style.left = "200px";
    practise7_img.style.top = "0px"

    window.addEventListener("keydown",practise7_moveSelection);
}
// Bài tập 1: Tính chỉ số BMI
function exercise1_function(){
    let inputHeight = parseFloat(document.getElementById("exercise1_input_height").value)
    let inputWeight = parseFloat(document.getElementById("exercise1_input_weight").value)
    let bmi = inputWeight/(inputHeight/100)**2;
    document.getElementById("exercise1_bmi").innerHTML = `${bmi.toFixed(2)}`;
    // console.log(inputWeight);
    let result = document.getElementById("exercise1_result")
    if(bmi < 18){
        result.innerHTML = "Gầy"; 
    } else if(bmi < 25){
        result.innerHTML = "Bình thường"
    } else if(bmi < 30){
        result.innerHTML = "Thừa cân, tiền béo phì";
    } else{
        result.innerHTML = "Béo phì";
    }
}
// Bài tập 5: Do you love me?
function exercise5_yes_function(){
    alert("💘💙(⋈◍＞◡＜◍)。✧♡");
}
function exercise5_no_move(){
    let myNoItem = document.getElementById("exercise5_no");
    myNoItem.style.left = parseInt(myNoItem.style.left) + 100 + "px";
    // myNoItem.style.marginLeft = "200px";
    console.log("You move over NO button");
}
function exercise5_no_default(){
    // let myNoItem = document.getElementById("exercise5_no");
    // myNoItem.style.left = parseInt(myNoItem.style.left) - 100 + "px";
    // console.log("You move out NO button");
}
function exercise5_init(){
    let exercise5_button = document.getElementById("exercise5_no");
    exercise5_button.style.position = "relative";
    exercise5_button.style.left = "0px"; // thieu cau nay thi ko di chuyen dc! Sao vay nhi
}
// Thực hành: Hai số bằng nhau - dang dở
function practise_plusEx_function(){
    let a = +prompt("Nhap vao a: ");
    let b = +prompt("Nhap vao b: ");
    let c = +prompt("Nhap vao c: ");
    if(a==b && a > c){
        // 
    }
}
// Thực hành: Số ngày trong tháng
function practise_daysInMonth_button_function(){
    let inputMonth = +prompt("Nhập tháng đi bạn: ")
    switch(inputMonth){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(`Tháng ${inputMonth} có 31 ngày`);
            break;                
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(`Tháng ${inputMonth} có 30 ngày`);
            break;              
        case 2:
            console.log(`Tháng ${inputMonth} có 28 or 29 ngày`);
            break;
        default:
            console.log("Nhập lại đi bạn!");
            break;
    }
}
// Thực hành 1: Kiểm tra năm nhuận
function practise1_function(){
    let isLeapYear = false;
    let inputYear = parseInt(document.getElementById("practise1_input").value);
    let isDividedBy400 = inputYear%400 == 0; //true : leap year
    console.log(isDividedBy400);
    let isDividedBy100 = inputYear%100 == 0;
    console.log(isDividedBy100);
    let isDividedBy4 = inputYear%4 == 0;
    console.log(isDividedBy4);
    if(isDividedBy400 == true){
        document.getElementById("practise1_result").innerHTML = "Năm nhuận1";
    } else if(isDividedBy100 == false && isDividedBy4 == true){
        document.getElementById("practise1_result").innerHTML = "Năm nhuận2";
    } else {
        document.getElementById("practise1_result").innerHTML = "Năm thường";
    }
}
// Thực hành 2: Luyện tập if/else
function practise2_function(){
    let practise2InputPrompt = prompt("What is the official name of javaScript?");
    // console.log(practise2InputPrompt);
    if(practise2InputPrompt == "ECMAScript"){
        alert("Right!")
    } else {
        alert("Didn't know? ECMAScript!")
    }
}
// Thực hành 3: Luyện tập if/else (2)
function practise3_function(){
    let practise3InputPromptId = prompt("Nhập id:");
    if(practise3InputPromptId == "Admin"){
        alert("Nhập password:");
        let practise3InputPromptPw = prompt("Nhập Password:");
        if(practise3InputPromptPw == "TheMaster"){
            alert("Welcome");
        } else if(practise3InputPromptPw == null){
            alert("Canceled");
        } else {
            alert("Wrong password");
        }
    } else if(practise3InputPromptId == null){
        alert("Canceled");
    } else {
        alert("I don't know you");
    }

    
}
// Thực hành 4: Luyện tập với cấu trúc switch-case
function practise4_function(){
    let practise4InputPrompt = prompt("Nhập vào tên trình duyệt");
    switch(practise4InputPrompt){
        case "Edge": 
            alert("You've got the Edge");
            break;
        case "Chrome": 
        case "Firefox":
        case "Safari":
        case "Opera":
            alert("OK we support these browsers too");
            break;
        default: 
            alert("We hope this page look good")
            break;
    }
}
// Thực hành 5: Luyện tập với toán tử ba ngôi
function practise5_function(){
    let practise4InputPrompt_a = parseInt(prompt("Nhập vào a:"));
    let practise4InputPrompt_b = parseInt(prompt("Nhập vào b:"));
    (practise4InputPrompt_a + practise4InputPrompt_b) < 4 ? alert("Below") : alert("Over");
}
// Thực hành 6: Sự kiện chuột
function practise6_function(){
    let practise6_img = document.getElementById("practise6_ball");
    // move image
    // console.log(practise6_img.style.left);
    // console.log(screen.width);
    practise6_img.style.left = parseInt(practise6_img.style.left) + 50 + "px";
    let screen_width = screen.width;
    let img_width = practise6_img.clientWidth;
    if(img_width + parseInt(practise6_img.style.left) > screen_width - 800){
        practise6_img.style.left = "0px"
    }
}
// Thực hành 7: Sự kiện bàn phím
// The keycodes are:
// left = 37
// up = 38
// right = 39
// down = 40
function practise7_moveSelection(pressedKey){
    console.log(pressedKey.keyCode);
    switch(pressedKey.keyCode){
        case 37: 
            practise7_moveLeft();
            break;
        case 38: 
            practise7_moveUp();
            break;
        case 39: 
            practise7_moveRight();
            break;
        case 40: 
            practise7_moveDown();
            break;
    }
}
function practise7_moveLeft(){
    let practise7_img = document.getElementById("practise7_image");
    practise7_img.style.left = parseInt(practise7_img.style.left) - 20 + "px";
}
function practise7_moveRight(){
    let practise7_img = document.getElementById("practise7_image");
    practise7_img.style.left = parseInt(practise7_img.style.left) + 20 + "px";
}
function practise7_moveUp(){
    let practise7_img = document.getElementById("practise7_image");
    console.log(practise7_img.style.top);
    practise7_img.style.top = parseInt(practise7_img.style.top) - 20 + "px";
}
function practise7_moveDown(){
    let practise7_img = document.getElementById("practise7_image");
    practise7_img.style.top = parseInt(practise7_img.style.top) + 20 + "px";
}
//

