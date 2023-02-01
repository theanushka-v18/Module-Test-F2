let inputs = document.getElementsByTagName("input");
let btn = document.getElementById("btn");
let form = document.getElementById("form");
let images = document.getElementsByTagName("img");
let formContainer = document.getElementById("formContainer");
let mainContainer = document.getElementById("mainContainer");
let diceImg = document.getElementById("diceImg");

let h3="", anotherh3;

let isClicked1 = false;
let isClicked2 = false;
let isClicked3 = false;
let isTryAgain = false;
let i = 0, sum = 0, chance = 0;

form.style.display = "none";
diceImg.style.display = "none";

function firstImg() {
    form.style.display = "inherit";
    isClicked1 = true;
    images[0].style.pointerEvents = "none";
}

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}

function secondImg() {
    if(isClicked1==true) {
        h3.style.color = "black";
        h3.innerHTML = "Name: " + inputs[0].value;
        anotherh3 = document.createElement("h3");
        anotherh3.innerHTML = "Username: " + inputs[2].value;
        formContainer.appendChild(anotherh3);
        formContainer.style.flexDirection = "column";
        isClicked2 = true;
        images[1].style.pointerEvents = "none";
    }
}


function thirdImg() {
    if(isClicked2==true) {
        diceImg.style.display = "inherit";
        images[2].style.pointerEvents = "none";
    }
    if(isTryAgain==true) {
        console.log("Hello");
    }
}

function fourthImg() {
    if(isClicked3==true && i==3) {
        let randomString = generateRandomString(12);

        h3 = document.createElement("h3");
        h3.innerHTML = "Congratulations! Your Coupon Code is : " + randomString;
        formContainer.appendChild(h3);
        h3.style.color = "green";
        images[3].style.pointerEvents = "none";
    }
}

btn.addEventListener("click", function(e) {
    e.preventDefault();
    if(inputs[0].value!="" && inputs[1].value!="" && inputs[2].value!="") {
        if(h3.innerHTML!="") {
            h3.innerHTML = "";
            form.style.display = "none";
            h3 = document.createElement("h3");
            h3.innerHTML = "Registered";
            formContainer.appendChild(h3);
            h3.style.color = "green";
        }
    } else {
        h3 = document.createElement("h3");
        h3.innerHTML = "All fields are required";
        formContainer.appendChild(h3);
        h3.style.color = "red";
    }
})

function tryAgain() {
    let anotherh4 = document.createElement("h4");
    anotherh4.innerHTML = "Try Again, Click image 3";
    mainContainer.appendChild(anotherh4);
    anotherh4.style.color = "orange";
    isTryAgain = true;
    images[2].style.pointerEvents = "auto";
}

diceImg.addEventListener("click", function() {
    h3 = document.createElement("h3");
    let min = 1, max = 6;
    if(i< 3) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        sum += randomNum;
        h3.innerHTML = randomNum;
        
    }
    i++;
    formContainer.appendChild(h3);
    h3.style.color = "blue";
    
    if(i>2) {
        diceImg.disabled = true;
        if(sum > 10) {
            h4 = document.createElement("h4");
            h4.innerHTML = "Sum " + sum;
            formContainer.appendChild(h4);
            h4.style.color = "skyblue";

            let anotherh4 = document.createElement("h4");
            anotherh4.innerHTML = "Click image 4";
            formContainer.appendChild(anotherh4);
            anotherh4.style.color = "orange";
            isClicked3 = true;
        }
        if(sum <= 10) {
            h4 = document.createElement("h4");
            h4.innerHTML = "Sum " + sum;
            formContainer.appendChild(h4);
            h4.style.color = "skyblue";
            tryAgain();
        }
    }
})
