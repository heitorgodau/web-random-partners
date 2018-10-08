let i = 0;
let counter = 0;
let maxStudent = 7;
class Raffle {
    constructor(){
        
        this.alba =  { name: 'Tata Golosa 👅 (Alba)', img: './img/luis.png', student:0 },            
        this.luis = { name: 'Luis Pollon 🍆 (Luis)', img: './img/luis.png', student:0 },            
        this.esther = { name: 'Correa para rato 🐕 (Esther)', img: './img/ester.png', student:0 },            
        this.jose = { name: 'Rocky Terneras 🥊 (Jose)', img: './img/jose.png', student:0 },       

        this.students = _.shuffle([
            { name: 'Adriana', img: './img/adriana.jpg', ta:[this.luis,this.esther] },
            { name: 'Alvaro', img: './img/alvaro.jpg', ta:[this.jose,this.esther, this.alba] },
            { name: 'Andreina', img: './img/andreina.jpg', ta:[this.jose] },
            { name: 'Beatriz', img: './img/beatriz.jpg', ta:[this.luis,this.alba] },
            { name: 'Clementina', img: './img/clementina.jpg', ta:[this.jose, this.esther, this.alba] },
            { name: 'Daniela', img: './img/daniela.jpg', ta:[this.alba,this.esther] },
            { name: 'Elena', img: './img/elena.jpg', ta:[this.alba,this.esther] },
            { name: 'Eva C.', img: './img/eva_c.jpg', ta:[this.jose, this.alba] },
            { name: 'Eva S.', img: './img/eva_s.jpg', ta:[this.jose,this.esther] },
            { name: 'Gabriela', img: './img/gabriela.jpg', ta:[this.jose, this.alba,this.luis ] },
            { name: 'Guillermo', img: './img/guillermo.jpg', ta:[this.luis,this.esther] },
            { name: 'Isabel', img: './img/isabel.jpg', ta:[this.jose, this.esther, this.luis] },
            { name: 'Javi', img: './img/javi.jpg', ta:[this.luis, this.esther] },
            { name: 'Karla', img: './img/karla.jpg', ta:[this.luis,this.alba] },
            { name: 'Macarena', img: './img/macarena.jpg', ta:[this.jose, this.esther, this.luis] },
            { name: 'Marcos', img: './img/marcos.jpg', ta:[this.jose, this.alba, this.esther] },
            { name: 'Maria', img: './img/maria.jpg', ta:[this.jose, this.luis] },
            { name: 'Martin', img: './img/martin.jpg', ta:[this.jose, this.esther] },
            { name: 'Mercedes', img: './img/mercedes.jpg', ta:[this.jose, this.luis] },
            { name: 'Nuria', img: './img/nuria.jpg', ta:[this.esther] },
            { name: 'Pablo R.', img: './img/pablo_r.jpg', ta:[this.alba] },
            { name: 'Pablo S.', img: './img/pablo_s.jpg', ta:[this.jose, this.esther, this.luis] },
            { name: 'Pedro', img: './img/pedro.jpg', ta:[this.luis, this.alba] },
            { name: 'Vero', img: './img/vero_f.jpg', ta:[this.jose] },
            { name: 'Veronica', img: './img/veronica_s.jpg', ta:[this.jose, this.alba] },
        ]);
        this.students.forEach(student => {
            this.addCard(student);
        });

        this.finalPairs = [];

        $(".card").on('click', e => {
            let total = $(".card.clicked").length;
            if(!$(e.currentTarget).hasClass('clicked')){
                $(e.currentTarget).addClass('clicked');
                let name = $(e.currentTarget).attr('attr-name');
                this.addPaired(name);
            }
        });
    }

    addCard(card){
        let card_el = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="https://www.ironhack.com/assets/shared/logo.svg">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
        $("#board").append(card_el)
    }

    addPaired(name){

        this.finalPairs.push(name);

        if (this.finalPairs.length %2 == 0) {
            let chunks = _.chunk(this.finalPairs, 2);
            let pairs = $("#pairs");
            pairs.empty();
            chunks.forEach(chunk => {
                let pair = $(`
                <div class="pair">
                <span>${chunk[0]}</span>
                - 
                <span>${chunk[1]}</span>
                </div>
                `);
                pairs.append(pair);
            })
        }
    }
}