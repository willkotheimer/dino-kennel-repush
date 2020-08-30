import { addButtonListeners } from './../helpers/addButtonListeners.js'


const makeDinoCards = (dinosaurs) => {

    //clear dino cards:
    $('#kennelContainer').html('');
    $('#hospitalContainer').html('');
    $('#graveyardContainer').html('');

    //print all dino cards

    dinosaurs.forEach((dinosaur, index) => {

        let health = dinosaur.health;
        if (health > 50) {
            makeDinoCard(dinosaur, index, 'kennelContainer');
        } else if (health < 50 && health > 5) {
            makeDinoCard(dinosaur, index, 'hospitalContainer');
        } else if (health <= 5) {
            makeDinoCard(dinosaur, index, 'graveyardContainer');
        }

    });
}



const makeDinoCard = (dinosaur, index, livingquarters) => {

    //print each dino card:

    const template = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${dinosaur.imageUrl}" alt="">
            <div class="card-body">
                    <div id="dino-innercard">
                    <h5 class="dino-name">${dinosaur.name}</h5>
                    <div class="dino-health">${dinosaur.health}</div>
                    </div>
                    <div>${(livingquarters === 'graveyardContainer') ? `<i class="fas fa-skull-crossbones"></i>` : ''}</div> 
                    <div id="button-title">Quality of Life Controls:</div>
                    <div id="buttons" class="d-flex flex-row flex-wrap">
  
                    <button class="btn btn-outline-warning adventure" data-id="${index}" id="adventure-${index}"><i class="fas fa-suitcase-rolling"></i></button>
                    <button class="btn btn-outline-dark display" id="display" data-toggle="modal" data-target="#displayModal"
                    data-whatever="${dinosaur.id}"><i class="far fa-eye"></i></button>
                    <button class="btn btn-outline-danger delete" data-id="${index}" id="delete-${index}"><i class="far fa-trash-alt"></i></button>
                    <button class="btn btn-outline-success pet" data-id="${index}" id="pet-${index}"><i class="fal fa-hand-heart"></i></button>
                    <button class="btn btn-outline-success feed" data-id="${index}" id="feed-${index}"><i class="fas fa-drumstick-bite"></i></button>
                    </div$>
            </div>
    </div>`;
    let div = document.getElementById(`${livingquarters}`);
    div.insertAdjacentHTML('beforeend', template);
    addButtonListeners();
}

export { makeDinoCards }