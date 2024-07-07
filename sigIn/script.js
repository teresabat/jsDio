function login() {
    let email = document.getElementById('typeEmailX').value;
    let senha = document.getElementById('typePasswordX').value;

    if (email === 'admin' && senha === 'admin') {
        alert('Logado com sucesso')
    } else {
        alert('Login ou senha incorretos')
    }
}