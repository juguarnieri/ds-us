class Aluno {
    constructor(id, nome, idade, isImpostor) {
        this.id = id;
        this.nome = nome; 
        this.idade = idade; 
        this.isImpostor = isImpostor; 
        this.status = 'ativo';
    }

    iniciarJogo() {
        console.log(`${this.nome} iniciou o jogo.`);
    }

    encerrarJogo() {
        console.log(`${this.nome} encerrou o jogo.`);
    }

    adicionarJogador(jogador) {
        console.log(`${this.nome} adicionou o jogador ${jogador.nome}.`);
    }

    removerJogador(jogador) {
        console.log(`${this.nome} removeu o jogador ${jogador.nome}.`);
    }

    andar() {
        console.log(`${this.nome} está andando.`);
    }

    mudarSala(sala) {
        console.log(`${this.nome} mudou para a sala ${sala.nome}.`);
    }

    votar() {
        console.log(`${this.nome} votou.`);
    }

    verificarVitoria() {
        return `${this.nome} está verificando as condições de vitória.`;
    }
}
