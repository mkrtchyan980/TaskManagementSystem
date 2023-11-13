
const addIcon = document.getElementById('addIcon');
const personIcon = document.getElementById('personIcon');
const notificationsIcon = document.getElementById('notificationsIcon');
const dropdownMenuAdd = document.getElementById('dropdownMenuAdd');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownMenuNot = document.getElementById('dropdownMenuNot');

const sectionTwo = document.getElementById('sectionTwo');
const taskBtn = document.getElementById('taskBtn');
const dateBtn = document.getElementById('dateBtn');
const inviteBtn = document.getElementById('inviteBtn');
const dropdownMenuTeam = document.getElementById('dropdownMenuTeam');
const inviteSection = document.getElementById('inviteSection');
const tasksSection = document.getElementById('tasksSection');
const closeIconInvite = document.getElementById('closeIconInvite');
const closeIconTasks = document.getElementById('closeIconTasks');

const header = document.getElementById('header');
const section = document.getElementById('section'); // Fixed typo in variable name
const navLeft = document.getElementById('navLeft');

const mainIcon = document.getElementById("mainIcon");
const aside = document.getElementById("aside");

function hideAllExcept(exceptElement) {
    const elementsToHide = [dropdownMenuAdd, dropdownMenu, dropdownMenuNot, dropdownMenuTeam];
    
    for (const element of elementsToHide) {
        if (element !== exceptElement && getComputedStyle(element).display !== 'none') {
            element.style.display = 'none';
        }
    }
}

function showHide(element) {
    const computedStyle = getComputedStyle(element);
    
    if (computedStyle.display === 'none') {
        hideAllExcept(aside); 
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



taskBtn.addEventListener('click', () => {
    showHide(tasksSection);
    sectionTwo.style.display = "block";
    tasksSection.style.display = "flex";
    tasksSection.style.justifyContent = "center";
});

dateBtn.addEventListener('click', () => {
    showHide(dropdownMenuTeam);
});

inviteBtn.addEventListener('click', () => {
    showHide(inviteSection);
    sectionTwo.style.display = "block";
    inviteSection.style.display = "flex";
    inviteSection.style.justifyContent = "center";
});

closeIconInvite.addEventListener('click', () => {
    showHide(inviteSection);
    sectionTwo.style.display = "none";
});

closeIconTasks.addEventListener('click', () => {
    showHide(tasksSection);
    sectionTwo.style.display = "none";
});
