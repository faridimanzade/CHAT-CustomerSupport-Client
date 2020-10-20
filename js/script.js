// ------------------------------------------ Starter BUTTON ----------------------------------
let starterButton = document.getElementsByClassName("start-help")[0];
let content = document.getElementsByClassName("content")[0];

starterButton.addEventListener("click", function () {
    this.style.display = "none";
    content.style.visibility = "visible";
});
// ----------------------------------------- Starter BUTTON ----------------------------


// ---------------------------------------- INPUT HANDLERS ------------------------------
let input = document.querySelectorAll("input")[0];
let area = document.querySelectorAll(".conversationArea")[0];

input.addEventListener("change", function () {
    if (input.value.length > 0) {
        let firstLetter = input.value.charAt(0);
        firstCharacterCheck(firstLetter);
    }
});

let sendIcon = document.querySelector(".fa-share");

sendIcon.addEventListener("click", function () {
    if (input.value.length > 0) {
        let firstLetter = input.value.charAt(0);
        firstCharacterCheck(firstLetter);
    }
});
// ------------------------------------------- INPUT HANDLERS -------------------------------------


// ---------------------------------------------- DELETE -------------------------------
let deleteIcon = document.querySelectorAll(".headerRight")[0];
let images = document.querySelectorAll("img");
let divs = document.querySelectorAll(".conversationArea div");

for (let i = 1; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        deleteIcon.classList.add("visibleTrash");
        divs[i].classList.toggle("selected");
    })
}

deleteIcon.addEventListener("click", function () {
    divs = document.querySelectorAll(".conversationArea div");
    let selectedDivs = document.querySelectorAll(".selected");

    for (let index = 1; index < divs.length; index++) {
        if (divs[index].classList.contains("selected")) {
            divs[index].remove();
            selectedDivs = document.querySelectorAll(".selected");
            if (selectedDivs.length == 0) {
                deleteIcon.classList.remove("visibleTrash");
            }
        } else {
            deleteIcon.classList.remove("visibleTrash");
        }
    }

})
// ---------------------------------------------- DELETE -------------------------------


// ---------------------------------------------- FILL CHAT AREA -------------------------------
function firstCharacterCheck(firstLetter) {
    if (firstLetter == firstLetter.toUpperCase()) {
        createHelper();
    } else if (firstLetter == firstLetter.toLocaleLowerCase()) {
        createClient();
    }
}
// ---------------------------------------------- FILL CHAT AREA -------------------------------


// ---------------------------------------------- HELPER CHAT CREATOR -------------------------------
function createHelper() {
    let helper = document.createElement("div");
    helper.classList.add("helper");
    let image = document.createElement("img");
    image.src = "images/call.jpg";
    let pTag = document.createElement("p");
    pTag.innerHTML = input.value;
    pTag.classList.add("helper-text");
    helper.appendChild(image);
    helper.appendChild(pTag);

    helper.addEventListener("click", function () {
        deleteIcon.classList.add("visibleTrash");
        helper.classList.toggle("selected");
    })

    area.appendChild(helper);
    input.value = "";
    area.scrollTop = area.scrollHeight;
}
// ---------------------------------------------- HELPER CHAT CREATOR -------------------------------


// ---------------------------------------------- CLIENT CHAT CREATOR -------------------------------
function createClient() {
    let client = document.createElement("div");
    client.classList.add("client");
    let clientText = document.createElement("p");
    clientText.innerHTML = input.value;
    clientText.classList.add("client-text");
    let imageClient = document.createElement("img");
    imageClient.src = "images/emptyclient.png";
    client.appendChild(clientText);
    client.appendChild(imageClient);

    client.addEventListener("click", function () {
        deleteIcon.classList.add("visibleTrash");
        client.classList.toggle("selected");
    })

    area.appendChild(client);
    input.value = "";
    area.scrollTop = area.scrollHeight;
}
// ---------------------------------------------- CLIENT CHAT CREATOR -------------------------------