//Common
window.onload = practise6_init(), exercise5_init();
window.onload = practise7_init_and_eventListener();
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
// Bài tập 2: Số ngày trong tháng
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
            alert(`Tháng ${inputMonth} có 31 ngày`);
            break;                
        case 4:
        case 6:
        case 9:
        case 11:
            alert(`Tháng ${inputMonth} có 30 ngày`);
            break;              
        case 2:
            alert(`Tháng ${inputMonth} có 28 or 29 ngày`);
            break;
        default:
            alert("Nhập lại đi bạn!");
            break;
    }
}
// Bài tập 3: Máy tính đơn giản
let globalFirstElementEx3 = 0;
let globalSecondElementEx3 = 0;
let globalOperator = "";
function calculator_elements_one(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"1";
    // console.log();
}
function calculator_elements_two(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"2";
}
function calculator_elements_three(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"3";
}
function calculator_elements_four(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"4";
    console.log();
}
function calculator_elements_five(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"5";
}
function calculator_elements_six(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"6";
}
function calculator_elements_seven(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"7";
    console.log();
}
function calculator_elements_eight(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"8";
}
function calculator_elements_nine(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"9";
}
function calculator_elements_zero(){
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = monitor.innerHTML+"0";
}
function calculator_elements_add(){
    let monitor = document.getElementById("calculator_monitor");
    let firstElement = monitor.innerHTML;
    monitor.innerHTML = "";
    globalFirstElementEx3 = parseInt(firstElement);
    globalOperator = "+";
}
function calculator_elements_sub(){
    let monitor = document.getElementById("calculator_monitor");
    let firstElement = monitor.innerHTML;
    monitor.innerHTML = "";
    globalFirstElementEx3 = parseInt(firstElement);
    globalOperator = "-";
}
function calculator_elements_mul(){
    let monitor = document.getElementById("calculator_monitor");
    let firstElement = monitor.innerHTML;
    monitor.innerHTML = "";
    globalFirstElementEx3 = parseInt(firstElement);
    globalOperator = "*";
}
function calculator_elements_div(){
    let monitor = document.getElementById("calculator_monitor");
    let firstElement = monitor.innerHTML;
    monitor.innerHTML = "";
    globalFirstElementEx3 = parseInt(firstElement);
    globalOperator = "/";
}
function calculator_elements_result(){
    let monitor = document.getElementById("calculator_monitor");
    let secondElement = monitor.innerHTML;
    globalSecondElementEx3 = parseInt(secondElement);
    switch(globalOperator){
        case "+":
            monitor.innerHTML = (globalFirstElementEx3 + globalSecondElementEx3);
            break;
        case "-":
            monitor.innerHTML = (globalFirstElementEx3 - globalSecondElementEx3);
            break;
        case "*":
            monitor.innerHTML = (globalFirstElementEx3 * globalSecondElementEx3);
            break;
        case "/":
            monitor.innerHTML = (globalFirstElementEx3 / globalSecondElementEx3);
            break;
        default:  monitor.innerHTML = "error"
            break;
    }
}
function calculator_elements_clear(){
    globalFirstElementEx3 = 0;
    globalSecondElementEx3 = 0;
    globalOperator = "";
    let monitor = document.getElementById("calculator_monitor");
    monitor.innerHTML = "";
}
// Bài tập 4: Game puzzle
let exercise4_count1 = 1;
let exercise4_count2 = 2;
let exercise4_count3 = 3;
function exercise4_result(){
    let exercise4_containerElement = document.getElementById("exercise4_container");
    if(exercise4_count1 == exercise4_count2 && exercise4_count1 == exercise4_count3 ){
        exercise4_containerElement.style.borderColor = "green";
    }else{
        exercise4_containerElement.style.borderColor = "red";
    }
}
function exercise4_image1_fnt(){
    let exercise4_image = document.getElementById("exercise4_image1st");
    exercise4_count1 = exercise4_count1+1;
    switch(exercise4_count1){
        case 1:
            exercise4_image.src = "./image/anh1-1.JPG";
            break;
        case 2:
            exercise4_image.src = "./image/anh2-1.JPG";
            break;
        case 3:
            exercise4_image.src = "./image/anh3-1.JPG";
            exercise4_count1 = 0;
            break;
    }
    exercise4_result();
}
function exercise4_image2_fnt(){
    let exercise4_image = document.getElementById("exercise4_image2nd");
    exercise4_count2 = exercise4_count2+1;
    // console.log(exercise4_count2);
    switch(exercise4_count2){
        case 1:
            exercise4_image.src = "./image/anh1-2.JPG";
            break;
        case 2:
            exercise4_image.src = "./image/anh2-2.JPG";
            break;
        case 3:
            exercise4_image.src = "./image/anh3-2.JPG";
            exercise4_count2 = 0;
            break;
    }
    exercise4_result();
}
function exercise4_image3_fnt(){
    let exercise4_image = document.getElementById("exercise4_image3rd");
    exercise4_count3 = exercise4_count3+1;
    // console.log(exercise4_count1);
    switch(exercise4_count3){
        case 1:
            exercise4_image.src = "./image/anh1-3.JPG";
            break;
        case 2:
            exercise4_image.src = "./image/anh2-3.JPG";
            break;
        case 3:
            exercise4_image.src = "./image/anh3-3.JPG";
            exercise4_count3 = 0;
            break;
        default: 
            exercise4_count3 = 0;
            break;
    }
    exercise4_result();
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
// Bài tập 6: Ứng dụng good-fast-cheap
let ex6_priority = 0;
function exercise6_result(){

    let ex6_element_good = document.getElementById("exercise6_good");
    let ex6_element_fast = document.getElementById("exercise6_fast");
    let ex6_element_cheap = document.getElementById("exercise6_cheap");
    console.log(ex6_priority);
    if(ex6_element_good.value == ex6_element_fast.value && ex6_element_good.value == 1 && ex6_priority == 1){
        ex6_element_cheap.value = 0;
        // console.log("good");
    }
    if(ex6_element_good.value == ex6_element_cheap.value && ex6_element_good.value == 1 && ex6_priority == 3){
        ex6_element_fast.value = 0;
        // console.log("cheap");
    }
    if(ex6_element_cheap.value == ex6_element_fast.value && ex6_element_good.value == 1 && ex6_priority == 2){
        ex6_element_good.value = 0;
        // console.log("fast");
    }
}
function exercise6_good_fnt(){
    let ex6_element = document.getElementById("exercise6_good");
    if(ex6_element.value == 0){
        ex6_element.value = 1;
        ex6_priority = 1;
    } else {
        ex6_element.value = 0;
        if(ex6_priority == 1) ex6_priority = 0;
    }
    exercise6_result()
}
function exercise6_fast_fnt(){
    let ex6_element = document.getElementById("exercise6_fast");
    if(ex6_element.value == 0){
        ex6_element.value = 1;
        ex6_priority = 2;
    } else {
        ex6_element.value = 0;
        if(ex6_priority == 2) ex6_priority = 0;
    } 
    exercise6_result()
}
function exercise6_cheap_fnt(){
    let ex6_element = document.getElementById("exercise6_cheap");
    if(ex6_element.value == 0){
        ex6_element.value = 1;
        ex6_priority = 3;
    } else {
        ex6_element.value = 0;
        if(ex6_priority == 3) ex6_priority = 0;
    }   
    exercise6_result()
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

