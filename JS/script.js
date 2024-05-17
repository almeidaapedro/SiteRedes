function Enviar(){
    var nome;
    var email;
    var assunto;
    var mensagem;

    nome = document.getElementById("nome").value;
    email = document.getElementsById("email").value;
    assunto = document.getElementById("assunto").value;
    mensagem = document.getElementById("mensagem").value;

    document.getElementById("enviar").innerHTML = "Obrigado, sua mensagem foi encaminhada!"
}