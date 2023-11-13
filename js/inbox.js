const addIcon = document.getElementById("addIcon");
const personIcon = document.getElementById("personIcon");
const notificationsIcon = document.getElementById("notificationsIcon");
const dropdownMenuAdd = document.getElementById("dropdownMenuAdd");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownMenuNot = document.getElementById("dropdownMenuNot");

const sharpIconTeam = document.getElementById("sharpIconTeam");
const dropdownMenuTeam = document.getElementById("dropdownMenuTeam");

const sectionTwo = document.getElementById("sectionTwo");
const inboxBtn = document.getElementById("inboxBtn");
const inboxSection = document.getElementById("inboxSection");
const closeIconTeam = document.getElementById("closeIconTeam");

const mainIcon = document.getElementById("mainIcon");
const aside = document.getElementById("aside");

const userChild = document.getElementsByClassName("userChild")
const chatCont = document.getElementsByClassName("chatCont")
const backIcon = document.getElementsByClassName("backIcon")
const message = document.getElementById("message")


mainIcon.addEventListener('click', () => {
    if (aside.style.width === '5%') {
        aside.style.width = "20%";
        header.style.width = "80%";
        section.style.width = "80%";
        showHide();
    }
    else{
        aside.style.width = "5%";
        header.style.width = "95%";
        section.style.width = "95%";
        showHide();
    }
});

function hideAllExcept(exceptElement) {
    const elementsToHide = [
        dropdownMenuAdd,
        dropdownMenu,
        dropdownMenuNot,
        dropdownMenuTeam,
        chatCont
    ];

    for (const element of elementsToHide) {
        if (
            element !== exceptElement &&
            getComputedStyle(element).display !== "none"
        ) {
            element.style.display = "none";
        }
    }
}

function showHide(element) {
    const computedStyle = getComputedStyle(element);

    if (computedStyle.display === "none") {
        hideAllExcept(element);
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

addIcon.addEventListener("click", () => {
    showHide(dropdownMenuAdd);
});

notificationsIcon.addEventListener("click", () => {
    showHide(dropdownMenuNot);
});

personIcon.addEventListener("click", () => {
    showHide(dropdownMenu);
});

sharpIconTeam.addEventListener("click", () => {
    showHide(dropdownMenuTeam);
});

inboxBtn.addEventListener("click", () => {
    showHide(inboxSection);
    sectionTwo.style.display = "block";
    inboxSection.style.display = "flex";
    inboxSection.style.justifyContent = "center";
});

closeIconInbox.addEventListener("click", () => {
    showHide(inboxSection);
    sectionTwo.style.display = "none";
});

const userChildArray = Array.from(userChild)
const backIconArray = Array.from(backIcon)

userChildArray.forEach((user, index)=>{
    user.addEventListener('click', () =>{
        showHide(userChild[index])
        message.style.display = 'none'
        chatCont[index].style.display = 'block'


    })
})

backIconArray.forEach((icon, index)=>{
    icon.addEventListener('click', () =>{
        showHide(backIcon[index])
        message.style.display = 'block'
        chatCont[index].style.display = 'none'


    })
})