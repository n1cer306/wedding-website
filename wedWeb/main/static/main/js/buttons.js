var checkbox = document.querySelector(".radio-btn-1 input");
var checkboxSecond = document.querySelector(".radio-btn-2 input");
var checkboxValue = "Вино белое";
var button = document.querySelector(".btn-to-confirm-4__tgl");
var input = document.getElementById("text-name");
var buttonSecond = document.querySelector(".btn-to-confirm-5");
var inputSecond = document.getElementById("name-text");
var buttonThird = document.querySelector(".btn-to-confirm-6");
var inputThird = document.getElementById("name");

document.querySelector(".hid-checkbox input").removeAttribute("required");
document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);

checkbox.setAttribute("checked", "checked");
document.querySelector(".radio-btn-3 input").setAttribute("checked", "checked");
document.querySelector(".checkbox-1 input").setAttribute("checked", "checked");

document.querySelector(".checkbox-5 input").removeAttribute("required");
document.querySelector(".checkbox-4 input").removeAttribute("required");
document.querySelector(".checkbox-3 input").removeAttribute("required");
document.querySelector(".checkbox-2 input").removeAttribute("required");
document.querySelector(".checkbox-1 input").removeAttribute("required");
document.querySelector(".form__input").removeAttribute("required");
document.querySelector(".text-toggle-1").removeAttribute("required");
document.querySelector(".text-toggle-2").removeAttribute("required");

checkboxSecond.addEventListener("click", function(){
    checkboxSecond.setAttribute("value", "Не буду");
});

document.querySelector(".radio-btn-4 input").addEventListener("click", function(){
    document.querySelector(".radio-btn-4 input").setAttribute("value", "Доберусь самостоятельно");
});

document.querySelector(".checkbox-1 input").addEventListener("click", function(){
    if (checkboxValue.includes(", Вино белое")) {
        checkboxValue = checkboxValue.replace(", Вино белое", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    } else if (checkboxValue.includes("Вино белое")) {
        checkboxValue = checkboxValue.replace("Вино белое", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    } else {
        checkboxValue += checkboxValue == "" ? "Вино белое" : ", Вино белое";
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    }
});

document.querySelector(".checkbox-2 input").addEventListener("click", function(){
    if (checkboxValue.includes(", Вино красное")) {
        checkboxValue = checkboxValue.replace(", Вино красное", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    } else if (checkboxValue.includes("Вино красное")) {
        checkboxValue = checkboxValue.replace("Вино красное", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    }
    else {
        checkboxValue += checkboxValue == "" ? "Вино красное" : ", Вино красное";
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    }
});

document.querySelector(".checkbox-3 input").addEventListener("click", function(){
    if (checkboxValue.includes(", Шампанское")) {
        checkboxValue = checkboxValue.replace(", Шампанское", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    } else if (checkboxValue.includes("Шампанское")) {
        checkboxValue = checkboxValue.replace("Шампанское", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    }
    else {
        checkboxValue += checkboxValue == "" ? "Шампанское" : ", Шампанское";
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    }
});

document.querySelector(".checkbox-4 input").addEventListener("click", function() {
    if (checkboxValue.includes(", Крепкие напитки")) {
        checkboxValue = checkboxValue.replace(", Крепкие напитки", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    } else if (checkboxValue.includes("Крепкие напитки")) {
        checkboxValue = checkboxValue.replace("Крепкие напитки", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    } 
    else {
        checkboxValue += checkboxValue == "" ? "Крепкие напитки" : ", Крепкие напитки";
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    }
});

document.querySelector(".checkbox-5 input").addEventListener("click", function(){
    if (checkboxValue.includes(", Алкоголь пить не буду")) {
        checkboxValue = checkboxValue.replace(", Алкоголь пить не буду", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    } else if (checkboxValue.includes("Алкоголь пить не буду")) {
        checkboxValue = checkboxValue.replace("Алкоголь пить не буду", "");
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    }
    else {
        checkboxValue += checkboxValue == "" ? "Алкоголь пить не буду" : ", Алкоголь пить не буду";
        document.querySelector(".hid-checkbox input").setAttribute("value", checkboxValue);
    }
});

button.addEventListener('click', function(){
    if (input.value == "" & checkboxValue == ""){
        button.setAttribute("type", "button");
        document.querySelector(".form__input").classList.add("color");
        document.querySelector(".required-block").classList.add("on");
        document.querySelector(".check-valid").classList.add("on");
        if (input.value != "") {
            document.querySelector(".form__input").classList.remove("color");
        }
        if (checkboxValue != "") {
            document.querySelector(".check-valid").classList.remove("on");
        }

    }else if (checkboxValue == ""){
        button.setAttribute("type", "button");
        document.querySelector(".check-valid").classList.add("on");
        document.querySelector(".required-block").classList.add("on");
        if (input.value != "") {
            document.querySelector(".form__input").classList.remove("color");
        }
    }else if (input.value == ""){
        button.setAttribute("type", "button");
        document.querySelector(".form__input").classList.add("color");
        document.querySelector(".required-block").classList.add("on");
        if (checkboxValue != "") {
            document.querySelector(".check-valid").classList.remove("on");
        }
    }
    else{
        button.setAttribute("type", "submit");
        document.querySelector(".form__input").classList.remove("color");
        document.querySelector(".required-block").classList.remove("on");
        document.querySelector(".check-valid").classList.remove("on");
    }
});

buttonSecond.addEventListener('click', function(){
    if (inputSecond.value == "" || checkboxValue == ""){
        buttonSecond.setAttribute("type", "button");
        document.querySelector(".text-toggle-1").classList.add("color");
        document.querySelector(".required-block-2").classList.add("on");
    }else {
        buttonSecond.setAttribute("type", "submit");
        document.querySelector(".text-toggle-1").classList.remove("color");
        document.querySelector(".required-block-2").classList.remove("on");
    }
});

buttonThird.addEventListener('click', function(){
    if (inputThird.value == "" || checkboxValue == ""){
        buttonThird.setAttribute("type", "button");
        document.querySelector(".text-toggle-2").classList.add("color");
        document.querySelector(".required-block-3").classList.add("on");
    }else {
        buttonThird.setAttribute("type", "submit");
        document.querySelector(".text-toggle-2").classList.remove("color");
        document.querySelector(".required-block-3").classList.remove("on");
    }
});