const data = [
  {
    name: 'Leonardo',
    img: './img/students/Leonardo.jpg',
  },
  {
    name: 'Joyce',
    img: './img/students/Joyce.jpg',
  },
  {
    name: 'Giulia',
    img: './img/students/Giulia.jpg',
  },
  {
    name: 'Fabio',
    img: './img/students/Fabio.jpg',
  },
  {
    name: 'Juliane',
    img: './img/students/Juliane.jpg',
  },
  {
    name: 'Barbosa',
    img: './img/students/Barbosa.jpg',
  },
  {
    name: 'Nykolle',
    img: './img/students/Nykolle.jpg',
  },
  {
    name: 'Alex',
    img: './img/students/Alex.jpg',
  },
  {
    name: 'Alisson',
    img: './img/students/Alisson.jpg',
  },
  {
    name: 'Henrique',
    img: './img/students/Henrique.jpg',
  },
  {
    name: 'Fernando',
    img: './img/students/Fernando.jpg',
  },
  {
    name: 'ViniVibe',
    img: './img/students/ViniVibe.jpg',
  },
];

class Raffle {
  constructor() {
    this.students = _.shuffle(data);
    this.students.forEach(student => {
      this.addCard(student);
    });

    this.finalPairs = [];

    $('.card').on('click', e => {
      if (!$(e.currentTarget).hasClass('clicked')) {
        $(e.currentTarget).addClass('clicked');
        const name = $(e.currentTarget).attr('attr-name');
        this.addPaired(name);
      }
    });
  }

  addCard(card) {
    const cardElement = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="./img/logo/ironhack_logo.png">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
    $('#board').append(cardElement);
  }

  addPaired(name) {
    this.finalPairs.push(name);

    if (this.finalPairs.length % 2 === 0) {
      const chunks = _.chunk(this.finalPairs, 2);
      const pairs = $('#pairs');
      pairs.empty();
      chunks.forEach((chunk, idx) => {
        const firstPair = chunk[0];
        const SecPair = chunk[1];
        const pair = $(`
                <div class="pair">
                <span>${firstPair}</span>
                - 
                <span>${SecPair}</span>
                </div>
                `);
        pairs.append(pair);

        localStorage.setItem(`pair_${idx}`, `${firstPair}-${SecPair}`);
      });
    }
  }
}
