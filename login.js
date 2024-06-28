function logar() {

    var senha = document.getElementById("senha").value;
    var usuario = document.getElementById("usuario").value;

    if(usuario == "admin" && senha == "senha123"){
        alert('Sucesso!');
        location.href = "home.html";
    }else{
        alert('Usuário ou senha incorreto!');
    }
}
