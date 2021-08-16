document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value

    const passField = document.getElementById('user-password');
    const userPass = passField.value;

    if (userEmail == 'sontan@baap.com' && userPass == 'secret') {
        window.location.href = 'boss/banking.html';
    }
})