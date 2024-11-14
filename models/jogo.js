class Jogo {
    constructor(nome, versao) {
        this.nome = nome; 
        this.versao = versao;
        this.desenvolvedores = []; 
        this.salas = [];
    }

    // Método para iniciar o jogo
    iniciar() {
        console.log(`Jogo ${this.nome} iniciado`);
    }

    // Método para finalizar o jogo
    finalizar() {
        console.log(`Jogo ${this.nome} finalizado`);
    }

    // Método para adicionar um desenvolvedor
    adicionarDesenvolvedor(desenvolvedor) {
        this.desenvolvedores.push(desenvolvedor);
    }

    // Método para remover um desenvolvedor
    removerDesenvolvedor(desenvolvedor) {
        this.desenvolvedores = this.desenvolvedores.filter(dev => dev !== desenvolvedor);
    }

    // Método para adicionar uma sala
    adicionarSala(sala) {
        this.salas.push(sala);
    }

    // Método para remover uma sala
    removerSala(sala) {
        this.salas = this.salas.filter(s => s !== sala);
    }
}


