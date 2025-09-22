// index.js
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const tipoLower = String(this.tipo).toLowerCase();
    const ataques = {
      mago: 'magia',
      guerreiro: 'espada',
      monge: 'artes marciais',
      ninja: 'shuriken'
    };

    const ataque = ataques[tipoLower] || 'ataque desconhecido';
    console.log(`${tipoLower} atacou usando ${ataque}`);
  }
}

// Exemplos de uso
const herois = [
  new Heroi('Merlin', 150, 'mago'),
  new Heroi('Aragorn', 87, 'guerreiro'),
  new Heroi('Li', 29, 'monge'),
  new Heroi('Kato', 22, 'ninja'),
  new Heroi('Rando', 40, 'arqueiro') // tipo não mapeado -> ataque desconhecido
];

herois.forEach(h => h.atacar());
