
const footerMenu = () => {
    const topParent = document.getElementById('content');
    const menu = document.createElement('ul');
    const line = document.createElement('hr');
    menu.classList.add('foot')
    const item1 = document.createElement('li');
    item1.classList.add('itemf', 'item');
    const item2 = item1.cloneNode(true);
    const item3 = item1.cloneNode(true);
    const item4 = item1.cloneNode(true);
    const item5 = item1.cloneNode(true);
    const item6 = item1.cloneNode(true);
    item1.textContent = 'Starters';
    item2.textContent = 'Main';
    item3.textContent = 'Dessertes';
    item4.textContent = 'Drinks';
    item5.textContent = 'Contact';
    item6.textContent = 'Booking';
    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(line);
    menu.appendChild(item5);
    menu.appendChild(item6);
    topParent.appendChild(menu);
    return topParent;
}

export {
    footerMenu
};