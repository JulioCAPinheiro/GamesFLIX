var ArrayGame =
    [
        "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
        "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png",
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/s/stardew-valley-switch/hero"
    ]

    

function ADDImagem(){

    for(var i = 0; i < 3; i++){

        if (i == 0) {
            document.write('<img src=' + ArrayGame[i] + '>');
        }
        else if (i == 1) {
            document.write('<img src=' + ArrayGame[i] + '>');
        }
        else if (i == 2) {
            document.write('<img src=' + ArrayGame[i] + '>');
        }
        else {
            alert("Essa imagem já existe");
        }
    }
}

document.write('<input type="button" onclick="ADDImagem()" value="Adicionar Imagem">');
