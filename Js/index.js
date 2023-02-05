var ListadosJogos = [
    "https://th.bing.com/th/id/OIP.C3FqEo-Xc__T8ZG60bApXwHaEo?w=290&h=181&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.SEZE4Zz5fi5chIEenZeAfAHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.dmZOQVaxIELcGpL6ooyrhwHaEK?pid=ImgDet&rs=1"
]



function adicionarJogo() {


    var jogosFavoritos = document.getElementById('jogo').value;
    var nomeJogos = document.getElementById('AddJogo').value;
    var ListarJogos = document.getElementById('listaJogos');
    var ListaNomeJogos = document.getElementById('listaNomeJogos');

    ListaNomeJogos.innerHTML = nomeJogos;
    ListarJogos.innerHTML = ListarJogos.innerHTML + '<img src=' + jogosFavoritos + '>';

    document.getElementById('jogo').value = "";
    document.getElementById('AddJogo').value = "";

}

function removerJogos() {
    var jogosFavoritos = document.getElementById('jogo').value;
    var nomeJogos = document.getElementById('AddJogo').value;
    var ListarJogos = document.getElementById('listaJogos');
    var ListaNomeJogos = document.getElementById('listaNomeJogos');

    ListaNomeJogos.innerHTML = ListaNomeJogos.inert - nomeJogos;
    ListarJogos.innerHTML = ListarJogos.innerHTML - '<img src=' + jogosFavoritos + '>';

    document.getElementById('filme').value = "";
    document.getElementById('AddJogo').value = "";
}

function JogoDaLista() {
    for (var i = 0; i <= 2; i++) {
        var JogosListas = document.getElementById('JogosDalista');
        JogosListas.innerHTML = JogosListas.innerHTML + '<img src=' + ListadosJogos[i] + '>';
    }
}
