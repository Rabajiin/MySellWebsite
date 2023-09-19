document.addEventListener("DOMContentLoaded", function () {
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
toggleButton.classList.toggle('collapsed');
if (toggleButton.classList.contains('collapsed')) {
    $('#nav-collapse').css('display','flex')
    } else {
    $('#nav-collapse').css('display','none')   
    }
})});
function openlogin() {
    $(".login-close").css('display','flex')
}
function closeModal() {
    $(".login-close").css('display','none')
}
function openregister(){
    $(".register-close").css('display','flex')
}