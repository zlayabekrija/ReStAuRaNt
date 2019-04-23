const topParent = document.getElementById('content');
const clearDisplay = () => {
    topParent.innerHTML = '';
}

const booking = () => {
    clearDisplay();
    const book = document.createElement('div');
    book.classList.add('book');
    const form = document.createElement('form');
    form.classList.add('form')
    const legened = document.createElement('legend');
    const field = document.createElement('fieldset');
    const name = document.createElement('input');
    const submit = document.createElement('span');
    submit.textContent = 'Book';
    submit.classList.add('btn','btn-primary');
    name.setAttribute('type','text');
    name.setAttribute("required", "");
    name.placeholder = 'Your name'
    name.classList.add('form-control');
    const email = document.createElement('input');
    email.setAttribute('type','email');
    email.placeholder = 'Your email';
    email.classList.add('form-control');
    email.setAttribute("required", "");
    const number = document.createElement('input');
    number.setAttribute('type','number');
    number.setAttribute('min','1');
    number.setAttribute('max','10');
    number.placeholder = 'Number of guests (1-10)';
    number.classList.add('form-control');
    number.setAttribute("required", "");
    const date = document.createElement('input');
    date.setAttribute('type','datetime-local');
    date.placeholder = 'Date and Time';
    date.classList.add('form-control');
    date.setAttribute("required", "");
    field.append(name,email,number,date,submit);
    legened.appendChild(field);
    form.appendChild(legened);
    book.appendChild(form);
    topParent.appendChild(book);
    return topParent;
}
const booked = () =>{
   const inputs = document.querySelectorAll('input');
   for (let i = 0; i < inputs.length; i++){
       if (inputs[i].value === ''){
        alert('Plese Fill out all fields');
        return;
       }
   }
   alert(`Dear ${inputs[0].value}, your reservation has been booked
    you will recive an email shortly on ${inputs[1].value}.
    You have made reservation for ${inputs[2].value}, on ${inputs[3].value}.
    See you there .
   `)
}
export {booking,booked};