class Sala {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.jogadores = []; 
        this.estado = 'aguardando';
        this.quizzes = [];  
    }

    // Método para iniciar o jogo na sala
    iniciarJogo() {
        this.estado = 'em jogo';
        console.log(`Jogo iniciado na sala ${this.nome}`);
    }

    // Método para encerrar o jogo na sala
    encerrarJogo() {
        this.estado = 'finalizada';
        console.log(`Jogo encerrado na sala ${this.nome}`);
    }

    // Método para adicionar um jogador à sala
    adicionarJogador(jogador) {
        this.jogadores.push(jogador);
    }

    // Método para remover um jogador da sala
    removerJogador(jogador) {
        this.jogadores = this.jogadores.filter(j => j !== jogador);
    }

    // Método para verificar a vitória
    verificarVitoria() {
        console.log("Verificando condições de vitória...");
    }

    // Método para mostrar a eliminação de um jogador
    mostrarEliminacao() {
        return "Um jogador foi eliminado!";
    }

    // Método para adicionar um quiz à sala
    adicionarQuiz(quiz) {
        this.quizzes.push(quiz);
    }

    // Método para iniciar um quiz na sala
    iniciarQuiz() {
        if (this.missoes.length > 0) {
            console.log(`Missão iniciada na sala ${this.nome}`);
        } else {
            console.log("Nenhuma missão disponível para iniciar");
        }
    }
}
