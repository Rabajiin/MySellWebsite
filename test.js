const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', () => {
toggleButton.classList.toggle('navbar-toggler_collapsed');
toggleButton.classList.toggle('navbar-toggler_not-collapsed');

    if (toggleButton.classList.contains('navbar-toggler_collapsed')) {
        toggleButton.innerText = 'เปิด';
        // ทำอย่างใดอย่างหนึ่งเมื่อคลิกปุ่มเปิด
        // เช่น เปิดไฟ
    } else {
        toggleButton.innerText = 'ปิด';
        // ทำอย่างใดอย่างหนึ่งเมื่อคลิกปุ่มปิด
        // เช่น ปิดไฟ
    }
});
function openlogin() {
    $(".login-close").css('display','flex')
}
function closeModal() {
    $(".login-close").css('display','none')
}
function openregister(){
    $(".register-close").css('display','flex')
}