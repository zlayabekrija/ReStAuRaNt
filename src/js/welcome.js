const welcome = () => {
    const content = document.getElementById('content');
    if (content.innerHTML !== '') {
        return;
    }
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left','text');
    const rightDiv = leftDiv.cloneNode(true);
    rightDiv.classList.remove('left');
    rightDiv.classList.add('right');
    const welcomeText = document.createElement('p');
    welcomeText.classList.add('intro');
    welcomeText.textContent = `Welcome to our nice lovely restaurant named "Cuisine de Monde", where you'll travel around the world,
        through different dishes from a different place in the world, mixed in the contemporary way by our Chef,
        wide selection of wines with recommendation from our Sommelier, and the worlds most renowened cocktails made
        by our Bartender, or maybe some sweet looking lates from the hands of our master barista.`
    const welcomeChoice = welcomeText.cloneNode(true);
    welcomeChoice.classList.add('intro');
    welcomeChoice.textContent = `Can't make a choice? We know it's hard, maybe some help from our Sommelier, that will be more than glad to
        help you pair your favourite food with perfect wines
    `
    const clearFix = leftDiv.cloneNode(true);
    clearFix.classList.add('clear');
    const center = leftDiv.cloneNode(true);
    center.classList.add('center');
    center.classList.remove('left');
    const list = document.createElement('ul');
    list.classList.add('menu');
    const listItem1 = document.createElement('li');
    listItem1.classList.add('item');
    listItem1.textContent = "Starters"
    const listItem2 = listItem1.cloneNode(true);
    listItem2.classList.add('item');
    listItem2.textContent = "Main"
    const listItem3 = listItem1.cloneNode(true);
    listItem3.classList.add('item');
    listItem3.textContent = 'Dessertes';
    const listItem4 = listItem1.cloneNode(true);
    listItem4.classList.add('item');
    listItem4.textContent = 'Drinks';
    const listItem5 = listItem1.cloneNode(true);
    listItem5.classList.add('item');
    listItem5.textContent = 'Contact';
    const listItem6 = listItem1.cloneNode(true);
    listItem6.classList.add('item');
    listItem6.textContent = 'Booking';
    //append to left div
    leftDiv.appendChild(welcomeText);
    leftDiv.appendChild(welcomeChoice);
    leftDiv.appendChild(clearFix);
    //append to right div
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);
    list.appendChild(listItem4);
    list.appendChild(listItem5);
    list.appendChild(listItem6);
    center.appendChild(list);
    rightDiv.appendChild(center);
    //append to content
    content.appendChild(leftDiv);
    content.appendChild(rightDiv);
    content.appendChild(clearFix);
    return content;

}
export {
    welcome
}