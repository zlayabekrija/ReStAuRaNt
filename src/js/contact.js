const topParent = document.getElementById('content');
const contact = () => {
    clearDisplay();
    const carrier = document.createElement('div');
    carrier.classList.add('carrier')
    const location = document.createElement('h5');
    const reach = document.createElement('p');
    const addr = reach.cloneNode(true);
    const zip = reach.cloneNode(true);
    const coutry = reach.cloneNode(true);
    const adress = document.createElement('address');
    const line = document.createElement('hr');
    location.textContent = 'How to find us';
    reach.textContent = `Where are located in the beautiful city of Prague on the banks of The river Vltava, where you are going to enjoy the view of beutiful medival Charles Bridge`;
    addr.textContent = 'Na Kampe 33';
    zip.textContent = '10000';
    coutry.textContent = 'Prague, Czech Republic';
    carrier.append(location);
    carrier.append(reach);
    carrier.append(line);
    adress.append(addr);
    adress.append(line);
    adress.append(zip);
    adress.append(line);
    adress.append(coutry);
    carrier.append(adress);
    topParent.append(carrier);
    return topParent;
}
const clearDisplay = () => {
    topParent.innerHTML = '';
}
export {
    contact
}