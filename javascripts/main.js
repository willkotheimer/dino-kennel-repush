import { makeDinoCards } from './components/makeDinoCard.js';
import { getAllDinos } from './../javascripts/helpers/data/sample-data.js';
import { detailsModal } from './components/displayModal.js';
import { makeDinoForm } from './components/addDinoForm.js';


const init = () => {
    console.log(getAllDinos());
    makeDinoCards(getAllDinos());
    detailsModal();
    makeDinoForm();
}

init();

