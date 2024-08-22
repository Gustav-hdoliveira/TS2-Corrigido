let reader = require("readline-sync")
class Ponto2DM {
    constructor(){

    }

}
class Ponto2DCordenadas extends Ponto2DM {
    y: number
    x: number
    constructor(altura: number, largura: number) {
        super()
        this.y = altura
        this.x = largura
    }
    
    set(xUP, yUP){
        this.y = yUP
        this.x = xUP
    }
    get(){
        console.log(`x = ${this.x}, y = ${this.y}`)
    }
    movPonto(coordNEW, numNEW){
        if (coordNEW.toUpperCase() == 'X') {
            this.x = numNEW
            console.log('Coordenada x redefinida')
        } else {
            this.y = numNEW
            console.log('Coordenada y redefinida')
        }
    }
    toString(): string{
        return `x e y atual: ${this.x, this.y}`
    }
    public equals(outroPT: Ponto2DCordenadas): boolean{
        if(outroPT.x == this.x && outroPT.y == this.y){
            return true
        } else {
            return false
        }
    }
    distancia(outroPonto: Ponto2DCordenadas): void{
        console.log(`x e y atual: ${this.x, this.y}, x e y do outro ponto: ${outroPonto.x, outroPonto.y}.`)
        let diferençaX = this.x - outroPonto.x
        let diferençaY = this.y - outroPonto.y
        if (diferençaX <= 0) {
            console.log(`O x atual é menor que o do outro ponto`)
        } else if (diferençaX == this.x) {
            console.log('Os Valores são os mesmos')
        } else {
            console.log(`O x atual é maior que o do outro ponto`)
        }
        if (diferençaY <= 0) {
            console.log("O y atual é menor que o do outro ponto")
        } else if (diferençaY == this.y) {
            console.log('Os Valores são os mesmos')
        } else {
            console.log("O y atual é maior que o do outro ponto")
        }
    }
    public clone(): Ponto2DCordenadas{
        return new Ponto2DCordenadas(this.x, this.y)
    }
}
class PT2Dponto extends Ponto2DM{
    x: number
    y: number

    constructor(outroPonto: Ponto2DCordenadas){
        super()
        this.x = outroPonto.x
        this.y = outroPonto.y
    }
    set(xUP, yUP){
        this.y = yUP
        this.x = xUP
    }
    get(){
        console.log(`x = ${this.x}, y = ${this.y}`)
    }
}

let PT2DCoordenadas = new Ponto2DCordenadas(12, 22)
let PT2Dpontocp = new PT2Dponto(PT2DCoordenadas)

function exibirmenus() {
    console.log("==============SISTEMA DE PONTO 2D==============")
    console.log("1. settar.")
    console.log("2. get.")
    console.log("3. Mover coordenada")
    console.log("4. Mover para string.")
    console.log("5. Verificar se o valor é o mesmo ao anterior.")
    console.log('6. Verificar a diferença entre os valores.')
    console.log('7. Clonar')
    console.log("8. SAIR.")
}
rodaralternativa();
function processEscolha(opcao) {
    switch (opcao) {
        case '1':
            let xUP = reader.question('Qual o valor do x? ')
            let yUP = reader.question('Qual o valor do y? ')
            PT2DCoordenadas.set(xUP, yUP)
            break;
        case '2':
            PT2DCoordenadas.get()
            break;
        case '3':
            let coord = reader.question('Deseja alterar o x ou o y?')
            let nuum = reader.question("Qual o numero novo")
            PT2DCoordenadas.movPonto(coord, nuum)
            break;
        case '4':
            console.log(PT2DCoordenadas.toString())
            break;
        case '5':
            console.log(PT2DCoordenadas.equals(PT2DCoordenadas))
            break;
        case '6':
            PT2DCoordenadas.distancia(PT2DCoordenadas)
            break;
        case '7':
            console.log(PT2DCoordenadas.clone())
            break;
        case '8':
            console.log("Encerrando o programa...");
            return true;
    
        default:
            console.log("opção selecionada incorretamente")
            break;
    }
    return false;
}
function rodaralternativa(): void {
    let encerrar = false;

    while (!encerrar) {
        exibirmenus();
        const opcao = reader.question("Digite o número da opção desejada: ");
        encerrar = processEscolha(opcao);
    }
}