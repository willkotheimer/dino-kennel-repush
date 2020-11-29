import { modifyHealth, getAllDinos } from './data/sample-data.js'
import { sendOnAdventure } from './../components/adventures.js'
import { makeDinoCards } from './../components/makeDinoCard.js'


const addButtonListeners = () => {

    //wireup

    getAllDinos().forEach((dino, index, myArr) => {


        $(document).off('click', `#pet-${index}`);
        $(document).on('click', `#pet-${index}`, function (e) {
            e.preventDefault();
            console.log(index);
            const array = e.target.id.split('-');
            const action = array[0];
            const id = array[1];
            if (action === 'pet') {
                modifyHealth(action, id);
                makeDinoCards(getAllDinos());
            }

        });

        $(document).off('click', `#feed-${index}`);
        $(document).on('click', `#feed-${index}`, function (e) {
            e.preventDefault();
            const array = e.target.id.split('-');
            const action = array[0];
            const id = array[1];
            if (action === 'feed') {
                modifyHealth(action, id);
                makeDinoCards(getAllDinos());
            }
        });

        $(document).off('click', `#adventure-${index}`);
        $(document).on('click', `#adventure-${index}`, function (e) {
            console.log(index);
            e.preventDefault();
            const array = e.target.id.split('-');
            const action = array[0];
            const id = array[1];
            if (action === 'adventure') { sendOnAdventure(index); makeDinoCards(getAllDinos()); }
        });

        $(document).off('click', `#delete-${index}`);
        $(document).on('click', `#delete-${index}`, function (e) {

            e.preventDefault();
            console.log(index);
            const array = e.target.id.split('-');
            const action = array[0];
            const id = array[1];
            let allDinos = getAllDinos();
            if (action === 'delete') {
                allDinos.splice(id, 1);
                makeDinoCards(getAllDinos());

            }
        });




    });

}




export { addButtonListeners }

