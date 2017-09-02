function exercicio_00(pNome) {


    console.log("Ola Mundo" + String.prototype.toUpperCase(pNome));

};

function exercicio_01(pNumero1, pNumero2) {

    var media = ((pNumero1 + pNumero2) / 2);

    console.log("A media dos dois numeros é" + media + "!");

};

function exercicio_02(pNota1, pNota2) {

    var media = 0;
    var resultado = "";

    if (pNota1 >= 4 && pNota2 >= 4) {

        media = ((pNota1 + pNota2) / 2);
    }
    if (media <= 6) {

        media = ((pNota1 + pNota2) / 2);

        console.log("Voce atingiu a media : " + media + "Sem necessidade de AV3!");
    } else(media > 6) {

        console.log("Voce nao atingiu a media : " + media + "necessario AV3!");
    };










    function Abort() {
        throw new Error('Favor informa seu nome');
    };

    function Olamundo(pNome) {

        try {
            if (pNome == null) Abort();

            console.log("Ola Mundo" + String.prototype.toUpperCase(pNome));

        } catch (e) {

            alert(e.message);
            return;

        };

    };


    function escreverOla(nome) {
        console.log("Olá, " + nome + "!");
    }

    escreverOla("Raphael");
    escreverOla("Bruno");
    escreverOla("Marcelle");