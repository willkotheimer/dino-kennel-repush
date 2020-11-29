import { findDinoByIndex, getAdventures } from './../helpers/data/sample-data.js'

const sendOnAdventure = (index) => {
    console.log(findDinoByIndex(index));
    findDinoByIndex(index).adventures
        .push({
            id: randomAdventure(index).id, date: new Date().toLocaleDateString().split("/")
        });

}

const randomAdventure = (index) => {
    const myAdventures = getAdventures();
    const myRandom = Math.floor(Math.random() * (myAdventures.length - 1));
    const healthModifier = myAdventures[myRandom].healthHit;
    console.log(healthModifier);
    adventureHit(index, healthModifier)
    return myAdventures[myRandom];
}

const adventureHit = (index, healthModifier) => {
    findDinoByIndex(index).health -= healthModifier;
    console.log("my" + index + "had" + healthModifier + "removed");
}


const adventureFunction = (id) => {
    let adventuredata = [];
    const adventures = getAdventures();
    const dinoadv = id.adventures;
    if (dinoadv.length != 0) {
        dinoadv.forEach((d, index) => {


            let adventure = getAdventures().find(dino => {

                if (dino.id.includes(d.id)) {
                    return dino;
                };
            });
            console.log(adventure.title);
            adventuredata.push(
                {
                    id: index,
                    adventure: adventure.title,
                    date: d.date
                });
        });
        return makeTableData(adventuredata);
    } else {
        return "<tr><td>No adventures to show</td></tr>"
    }

}

const makeTableData = (adventuredata) => {
    let myTable = ""
    adventuredata.forEach(ad => {
        myTable += `<tr>
        <td>${ad.id}</td>
        <td>${ad.adventure}</td>
        <td>${ad.date}</td>
        </tr>
        
      `;
    });
    return myTable;
}


export { sendOnAdventure, adventureFunction }