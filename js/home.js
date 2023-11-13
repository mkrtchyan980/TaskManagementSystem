const addIcon = document.getElementById('addIcon');
const personIcon = document.getElementById('personIcon');
const notificationsIcon = document.getElementById('notificationsIcon');
const dropdownMenuAdd = document.getElementById('dropdownMenuAdd');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownMenuNot = document.getElementById('dropdownMenuNot');

const sectionTwo = document.getElementById('sectionTwo');
const taskBtn = document.getElementById('taskBtn');
const teamBtn = document.getElementById('teamBtn');
const teamSection = document.getElementById('teamSection');
const tasksSection = document.getElementById('tasksSection');
const closeIconTeam = document.getElementById('closeIconTeam');
const closeIconTasks = document.getElementById('closeIconTasks');


const mainIcon = document.getElementById("mainIcon");
const aside = document.getElementById("aside");



function hideAllExcept(exceptElement) {
    const elementsToHide = [dropdownMenuAdd, dropdownMenu, dropdownMenuNot];
    
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

taskBtn.addEventListener('click', () => {
    showHide(tasksSection);
    sectionTwo.style.display = "block"
    tasksSection.style.display = "flex"
    tasksSection.style.justifyContent = "center"
});

teamBtn.addEventListener('click', () => {
    showHide(teamSection);
    sectionTwo.style.display = "block"
    teamSection.style.display = "flex"
    teamSection.style.justifyContent = "center"
});

closeIconTasks.addEventListener('click', () => {
    showHide(tasksSection);
    sectionTwo.style.display = "none"
});

closeIconTeam.addEventListener('click', () => {
    showHide(teamSection);
    sectionTwo.style.display = "none"
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