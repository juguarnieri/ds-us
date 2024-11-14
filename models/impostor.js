class Impostor {
    constructor(cooldownAtaque) {
        this.cooldownAtaque = cooldownAtaque; 
        this.sabotagensRealizadas = 0; 
    }

    // Método para matar um alvo específico 
    matar(alvo) {
        if (this.cooldownAtaque === 0) {
            console.log(`Impostor matou ${alvo.nome}.`);
            this.cooldownAtaque = 5;  // Reinicia o cooldown após um ataque
        } else {
            console.log(`Cooldown em andamento: ${this.cooldownAtaque} turnos restantes.`);
        }
    }

    // Método para sabotar um sistema específico
    sabotar(sistema) {
        console.log(`Impostor sabotou o sistema ${sistema}.`);
        this.sabotagensRealizadas += 1;
    }

    // Método para o impostor se esconder em uma ventilação
    esconderEmVentilacao() {
        console.log("Impostor se escondeu na ventilação.");
    }
}
