function adicionarJogo(){
    var jogosFavoritos = document.getElementById('filme').value;
    var ListarJogos = document.getElementById('listaJogos');


    ListarJogos.innerHTML = ListarJogos.innerHTML + '<img src=' + jogosFavoritos + '>';

    document.getElementById('filme').value = "";
}
