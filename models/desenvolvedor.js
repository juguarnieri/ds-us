class Desenvolvedor {
    constructor(nome, cargo) {
        this.nome = nome; 
        this.cargo = cargo;  
    }

    // Método para adicionar uma missão ao jogo ou sala
    adicionarMissao(missao) {
        console.log(`${this.nome} adicionou a missão: ${missao}`);
    }

    // Método para remover uma missão do jogo ou sala
    removerMissao(missao) {
        console.log(`${this.nome} removeu a missão: ${missao}`);
    }

    // Método para modificar configurações do jogo
    mudarJogo() {
        console.log(`${this.nome} modificou as configurações do jogo.`);
    }
}
