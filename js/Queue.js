
/**
 * AUTOR: CRISTIAN PENTEADO
 * PROJETO: YOUTUBE MIX
 */

//IMPLEMENTAÇÃO DE FILA EM JS ATRÁVES DE UM ARRAY
function Queue() {

    let items = [];
    //PARA ENFILEIRAR
    this.enqueue = function (element) {
        items.push(element);
    }

    //PARA DESINFILEIRAR
    this.dequeue = function () {
        return items.shift();
    }
    //RETORNAR O VALOR DO PRIMEIRO ELEMENTO
    this.front = function () {
        return items[0];
    }
    //RETORNAR O TAMANHO DA LISTA
    this.size = function () {
        return items.length;
    }

}