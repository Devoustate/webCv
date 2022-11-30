const dateEl = document.getElementById('date');

dateEl.innerHTML = date();

function date() {
    newDate = new Date();
    currentDate = newDate.getFullYear();
    return currentDate;
};

function hide() {
    const hidyHo = document.querySelector('.navInfo');
    hidyHo.classList.toggle("hideMyInfo");
}