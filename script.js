function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }



    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}