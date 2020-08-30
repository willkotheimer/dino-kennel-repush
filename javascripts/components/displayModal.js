import { adventureFunction } from './../components/adventures.js';
import { findDinoByID } from './../helpers/data/sample-data.js'

const detailsModal = () => {
    $('#displayModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        if (button[0].id === 'display') {
            var result = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            let dino = findDinoByID(result);
            var modal = $(this)
            modal.find('.modal-title').text('Dino Profile')
            if (dino.imageUrl != undefined) modal.find('img.card-img-left').attr("src", dino.imageUrl);
            modal.find('.dino-name').text(dino.name)
            modal.find('.dino-type').text(dino.type)
            modal.find('.dino-age').text(dino.age)
            modal.find('.dino-owner').text(dino.owner)
            modal.find('.dino-health').attr("aria-valuenow", dino.health);
            modal.find('.dino-health').attr("style", `width:${dino.health}%;`);
            modal.find('.dino-health').text(dino.health)
            modal.find('.dino-adventure-table').html(adventureFunction(dino));
        } else if (button[0].id === 'addDinoButton') {
            //do something 
        }
    });

}

export { detailsModal }
