const redirectForm = document.getElementById('redirectForm');

redirectForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const loginKeyInput = document.getElementById('loginKeyInput');
    const loginKey = loginKeyInput.value.trim();

    if (loginKey === 'LOGIN_KEY_VALUE=2823gfh4hd92t83486123hfh4292rh24rjfh34t9hr28rh8sdhfh23hu34ui53u2q8y%2%2') {
        window.location.href = '/employeedashboard/h83g8hh82094gh80uhiaslg839yt89huzsfo.html';
    } else {
        window.location.href = 'login.html';
    }
});
