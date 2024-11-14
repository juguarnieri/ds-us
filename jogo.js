class Jogo {
    constructor(nome, versao) {
        this.nome = nome;
        this.versao = versao;
        this.desenvolvedores = [];
        this.salas = [];
    }

    iniciar() {
        console.log(`Jogo ${this.nome} iniciado`);
    }

    finalizar() {
        console.log(`Jogo ${this.nome} finalizado`);
    }

    adicionarDesenvolvedor(d) {
        this.desenvolvedores.push(d);
    }

    removerDesenvolvedor(d) {
        this.desenvolvedores = this.desenvolvedores.filter(dev => dev !== d);
    }

    adicionarSala(s) {
        this.salas.push(s);
    }

    removerSala(s) {
        this.salas = this.salas.filter(sala => sala !== s);
    }
}

