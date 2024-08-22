let leitor = require("readline-sync")

class Contador {
    estoque: Array<string>

    constructor(estoquedeObjetos: Array<string>){
        this.estoque = estoquedeObjetos
    }

    zerar(){
        this.estoque = [] //define o estoque como um novo array vazio

        console.log('Dados zerados')        
    }

    incrementar(valorAdicionado){
        this.estoque.push(valorAdicionado)
        console.log('valor adicionado a banco de dados do estoque')
    }

    valor(): void{
        console.log(`O banco de dados tem ${this.estoque.length} valores dentro de si, com os valores sendo: ${this.estoque}`)
    }
}

let contador = new Contador(["geleia de morango", "Freazer ponto frio"])

function exibirmenu() {
    console.log("1. Adicionar item.")
    console.log("2. Ler valor.")
    console.log("3. Zerar lista")
    console.log("4. SAIR.")
}
rodaralternativas();
function processarEscolha(opcao) {
    switch (opcao) {
        case '1':
            let valoradicionar = leitor.question('Qual valor deseja adicionar? ')
            contador.incrementar(valoradicionar)
            break;
        case '2':
            console.log(contador.valor())
            break;
        case '3':
            contador.zerar()
            break;
        case '4':
            console.log("Encerrando o programa...");
            return true;
    
        default:
            console.log("opção selecionada incorretamente")
            break;
    }
    return false;
}
function rodaralternativas(): void {
    let encerrar = false;

    while (!encerrar) {
        exibirmenu();
        const opcao = leitor.question("Digite o número da opção desejada: ");
        encerrar = processarEscolha(opcao);
    }
}