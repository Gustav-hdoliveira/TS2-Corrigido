var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var reader = require("readline-sync");
var Ponto2D = /** @class */ (function () {
    function Ponto2D() {
    }
    return Ponto2D;
}());
var Ponto2DCordenadas = /** @class */ (function (_super) {
    __extends(Ponto2DCordenadas, _super);
    function Ponto2DCordenadas(altura, largura) {
        var _this = _super.call(this) || this;
        _this.y = altura;
        _this.x = largura;
        return _this;
    }
    Ponto2DCordenadas.prototype.set = function (xUP, yUP) {
        this.y = yUP;
        this.x = xUP;
    };
    Ponto2DCordenadas.prototype.get = function () {
        console.log("x = ".concat(this.x, ", y = ").concat(this.y));
    };
    Ponto2DCordenadas.prototype.movPonto = function (coordNEW, numNEW) {
        if (coordNEW.toUpperCase() == 'X') {
            this.x = numNEW;
            console.log('Coordenada x redefinida');
        }
        else {
            this.y = numNEW;
            console.log('Coordenada y redefinida');
        }
    };
    Ponto2DCordenadas.prototype.toString = function () {
        return "x e y atual: ".concat((this.x, this.y));
    };
    Ponto2DCordenadas.prototype.equals = function (outroPT) {
        if (outroPT.x == this.x && outroPT.y == this.y) {
            return true;
        }
        else {
            return false;
        }
    };
    Ponto2DCordenadas.prototype.distancia = function (outroPonto) {
        console.log("x e y atual: ".concat((this.x, this.y), ", x e y do outro ponto: ").concat((outroPonto.x, outroPonto.y), "."));
        var diferençaX = this.x - outroPonto.x;
        var diferençaY = this.y - outroPonto.y;
        if (diferençaX <= 0) {
            console.log("O x atual \u00E9 menor que o do outro ponto");
        }
        else if (diferençaX == this.x) {
            console.log('Os Valores são os mesmos');
        }
        else {
            console.log("O x atual \u00E9 maior que o do outro ponto");
        }
        if (diferençaY <= 0) {
            console.log("O y atual é menor que o do outro ponto");
        }
        else if (diferençaY == this.y) {
            console.log('Os Valores são os mesmos');
        }
        else {
            console.log("O y atual é maior que o do outro ponto");
        }
    };
    Ponto2DCordenadas.prototype.clone = function () {
        return new Ponto2DCordenadas(this.x, this.y);
    };
    return Ponto2DCordenadas;
}(Ponto2D));
var PT2Dponto = /** @class */ (function (_super) {
    __extends(PT2Dponto, _super);
    function PT2Dponto(outroPonto) {
        var _this = _super.call(this) || this;
        _this.x = outroPonto.x;
        _this.y = outroPonto.y;
        return _this;
    }
    PT2Dponto.prototype.set = function (xUP, yUP) {
        this.y = yUP;
        this.x = xUP;
    };
    PT2Dponto.prototype.get = function () {
        console.log("x = ".concat(this.x, ", y = ").concat(this.y));
    };
    return PT2Dponto;
}(Ponto2D));
var PT2DCoordenadas = new Ponto2DCordenadas(12, 22);
var PT2Dpontocp = new PT2Dponto(PT2DCoordenadas);
function exibirmenus() {
    console.log("==============SISTEMA DE PONTO 2D==============");
    console.log("1. settar.");
    console.log("2. get.");
    console.log("3. Mover coordenada");
    console.log("4. Mover para string.");
    console.log("5. Verificar se o valor é o mesmo ao anterior.");
    console.log('6. Verificar a diferença entre os valores.');
    console.log('7. Clonar');
    console.log("8. SAIR.");
}
rodaralternativa();
function processEscolha(opcao) {
    switch (opcao) {
        case '1':
            var xUP = reader.question('Qual o valor do x? ');
            var yUP = reader.question('Qual o valor do y? ');
            PT2DCoordenadas.set(xUP, yUP);
            break;
        case '2':
            PT2DCoordenadas.get();
            break;
        case '3':
            var coord = reader.question('Deseja alterar o x ou o y?');
            var nuum = reader.question("Qual o numero novo");
            PT2DCoordenadas.movPonto(coord, nuum);
            break;
        case '4':
            console.log(PT2DCoordenadas.toString());
            break;
        case '5':
            console.log(PT2DCoordenadas.equals(PT2DCoordenadas));
            break;
        case '6':
            PT2DCoordenadas.distancia(PT2DCoordenadas);
            break;
        case '7':
            console.log(PT2DCoordenadas.clone());
            break;
        case '8':
            console.log("Encerrando o programa...");
            return true;
        default:
            console.log("opção selecionada incorretamente");
            break;
    }
    return false;
}
function rodaralternativa() {
    var encerrar = false;
    while (!encerrar) {
        exibirmenus();
        var opcao = reader.question("Digite o número da opção desejada: ");
        encerrar = processEscolha(opcao);
    }
}
