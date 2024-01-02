function Automovel(modelo, fabricante, ano, motor, combustivel, cor, 
    lugares, portas) {
        this.modelo = modelo,
        this.fabricante = fabricante,
        this.ano = ano,
        this.motor = motor,
        this.combustivel = combustivel,
        this.cor = cor,
        this.lugares = lugares,
        this.portas = portas,

        this.acelerar = function() {
            console.log("vrum");
        };

        this.frear = function() {
            console.log("freiou");
        };
    
        this.mudarMarcha = function() {
            console.log('Mudou de marcha');
        };
    }

function CarroPopular(configuracao, modelo, fabricante, ano, motor, combustivel, cor, 
    lugares, portas) {
    this.configuracao = configuracao;
    
    Automovel.call(this, modelo, fabricante, ano, motor, combustivel, cor, 
        lugares, portas);
    }

function CarroEletrico(bateria, configuracao, modelo, fabricante, ano, motor, combustivel, cor, 
    lugares, portas) {
    this.bateria = bateria

    CarroPopular.call(this, configuracao);
    Automovel.call(this, modelo, fabricante, ano, motor, combustivel, cor, 
        lugares, portas);
}

function Moto(partida, injecao, modelo, fabricante, ano, motor, combustivel, cor, 
    lugares) {
    this.partida = partida,
    this.injecao = injecao,

    Automovel.call(this, modelo, fabricante, ano, motor, combustivel, cor, 
        lugares);
}

function Caminhao(altura, comprimento, carga, eixo, pneus, modelo, 
    fabricante, ano, motor, combustivel, cor, lugares, portas) {
    this.altura = altura,
    this.comprimento = comprimento,
    this.carga = carga,
    this.eixo = eixo,
    this.pneus = pneus,

    Automovel.call(this, modelo, fabricante, ano, motor, combustivel, cor, 
        lugares, portas)
}

const meuCarro1 = new CarroPopular ("hatch", "Astra", "Chevrolet", 2011, "2.0", "Flex", "Grafite", 5, 4)
const meuCarroEletrico1 = new CarroEletrico ("100kWh", "sedan", "Model S", "Tesla", 2021, "", "Elétrico", "Vermelho", 5, 4)
const minhaMoto1 = new Moto ("Elétrica", "PGM FI", "CB 300F Twister", "Honda", 2022, "300", "Flex", "Cinza", 2)
const meuCaminhao1 = new Caminhao (3955, 7140 , "Alimentos", 5, 52, "Volvo Fh 540 At 6*4 12.8 2p", "Volvo", 2020, "6.0", "Diesel", "Preto", 4, 2)

// meuCarro1.acelerar();
// meuCarroEletrico1.acelerar();
// minhaMoto1.acelerar();
// meuCaminhao1.acelerar();

// meuCarro1.mudarMarcha();
// meuCarroEletrico1.mudarMarcha();
// minhaMoto1.mudarMarcha();
// meuCaminhao1.mudarMarcha();

// console.log(meuCarro1);
// console.log(meuCarroEletrico1);
// console.log(minhaMoto1);
// console.log(meuCaminhao1);

console.log(meuCarro1 instanceof CarroPopular)