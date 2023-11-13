
let eye = document.getElementsByClassName("eye");
let eye_off = document.getElementsByClassName("eye-off");
let input = document.getElementsByClassName("input");

for (let i = 0; i < eye.length; i++) {
    eye[i].addEventListener("click", () => {
        if (input[i].type === "password") {
            input[i].type = "text";
            eye[i].style.display = "none";
            eye_off[i].style.display = "block";
        }
    });
}
for (let i = 0; i < eye_off.length; i++) {
    eye_off[i].addEventListener("click", () => {
        if ((input[i].type = "text")) {
            input[i].type = "password";
            eye[i].style.display = "block";
            eye_off[i].style.display = "none";
        }
    });
}

