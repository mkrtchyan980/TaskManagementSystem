const addIcon = document.getElementById('addIcon');
const personIcon = document.getElementById('personIcon');
const notificationsIcon = document.getElementById('notificationsIcon');
const dropdownMenuAdd = document.getElementById('dropdownMenuAdd');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownMenuNot = document.getElementById('dropdownMenuNot');

const sharpIcon = document.getElementsByClassName('sharpIcon');
const dropdownMenuTasks = document.getElementsByClassName('dropdownMenuTasks');


const mainIcon = document.getElementById("mainIcon");
const aside = document.getElementById("aside");


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
    const elementsToHide = [dropdownMenuAdd, dropdownMenu, dropdownMenuNot, ...dropdownMenuTasks];
    
    for (const element of elementsToHide) {
        if (element !== exceptElement && getComputedStyle(element).display !== 'none') {
            element.style.display = 'none';
        }
    }
}

function showHide(element) {
    const computedStyle = getComputedStyle(element);
    
    if (computedStyle.display === 'none') {
        hideAllExcept(element);
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

addIcon.addEventListener('click', () => {
    showHide(dropdownMenuAdd);
});

notificationsIcon.addEventListener('click', () => {
    showHide(dropdownMenuNot);
});

personIcon.addEventListener('click', () => {
    showHide(dropdownMenu);
});


const sharpIconArray = Array.from(sharpIcon);

sharpIconArray.forEach((sharpIcon, index) => {
    sharpIcon.addEventListener('click', () => {
        showHide(dropdownMenuTasks[index]);
    });
});

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