// globals
import Onion from '../img/onion.jpg';
import Pho from '../img/pho.jpeg';
import Tom from '../img/tom.jpg';
import Caesar from '../img/caesar.jpg';
import Tempura from '../img/tempura.jpg';
import Greek from '../img/greek.jpg';
import Crepes from '../img/crepes.jpg';
import Burlee from '../img/burlee.jpg';
import Cheese from '../img/cheese.jpg';
import Pannacota from '../img/panna.jpg';
import Strudel from '../img/strudel.jpg';
import Sachertorte from '../img/sacher.jpg';
import Dry from '../img/dry.jpg';
import Chicken from '../img/chicken.jpg';
import Duck from '../img/duck.jpg';
import Lamb from '../img/lamb.jpg';
import Pork from '../img/pork.jpg';
import Salmon from '../img/salmon.jpg';
import Red from '../img/red.jpg';
import White from '../img/white.jpg';
import Rose from '../img/rose.jpeg';
import Sheets from '../img/between.jpg';
import Manhattan from '../img/manhattan.jpg';
import High from '../img/high.jpg';

const topParent = document.getElementById('content');


document.getElementById('content');
const starters = () => {

    let starters = {
        soup1: {
            name: 'French Onion Soup',
            desc: 'Classis french soup',
            price: '15',
            img: Onion
        },
        soup2: {
            name: 'Pho',
            desc: 'Traditional Vietnamese soup',
            price: '12',
            img: Pho
        },
        soup3: {
            name: 'Tom Yum',
            desc: 'Spicy Thai soup',
            price: '14',
            img: Tom
        },
        salad1: {
            name: 'Caesar',
            desc: 'Tasty,refreshing straight from Mexico',
            price: '22',
            img: Caesar
        },
        salad2: {
            name: 'Tempura Shrimps',
            desc: 'Japanese style shrimps in orange sauce',
            price: '20',
            img: Tempura
        },
        salad3: {
            name: 'Greek salad',
            desc: 'Taste of Mediterrean Olives and Cheese',
            price: '21',
            img: Greek
        }
    };
    for (let starter in starters) {
        renderItems(starters[starter]);
    }
};
const mains = () => {

    let mains = {
        stake: {
            name: 'Dry Aged NY stake',
            desc: 'T-bone stake with cranberry sauce',
            price: '35',
            img: Dry
        },
        duck: {
            name: 'Beijing Duck',
            desc: 'The most famouse of all ducks',
            price: '42',
            img: Duck
        },
        fish: {
            name: 'North Sea Salmon',
            desc: 'North sea salmon with blanched bear garlic',
            price: '44',
            img: Salmon
        },
        pork: {
            name: 'Pork meddalions',
            desc: 'Spicy pork with caramelized onions',
            price: '32',
            img: Pork
        },
        lamb: {
            name: 'Highland lamb',
            desc: 'Lamb ribs with mint jelly',
            price: '48',
            img: Lamb
        },
        chicken: {
            name: 'Balinese style fried chicken',
            desc: 'Fried chicken in spicy sambal',
            price: '31',
            img: Chicken
        }
    };
    for (let main in mains) {
        renderItems(mains[main]);
    }
};
const dessertes = () => {

    let dessertes = {
        cream: {
            name: 'Pannacota',
            desc: 'Italian style pannacota with coffee and berries coulis',
            price: '18',
            img: Pannacota
        },
        cream2: {
            name: 'Creme brulee',
            desc: 'Tasty, burned vanilla egg cream',
            price: '22',
            img: Burlee
        },
        sacher: {
            name: 'Sachertorte',
            desc: 'The most famous Austrian Cake',
            price: '24',
            img: Sachertorte
        },
        crepes: {
            name: 'Crepes France',
            desc: 'French style crepes served with ice cream',
            price: '17',
            img: Crepes
        },
        strudel: {
            name: 'Alpine strudel',
            desc: 'Olde German cake with Alpine berries jam',
            price: '16',
            img: Strudel
        },
        cheese: {
            name: 'Cheese Plate',
            desc: 'Assorted cheese plate with dried apricots and nuts',
            price: '29',
            img: Cheese
        }
    };
    for (let desserte in dessertes) {
        renderItems(dessertes[desserte]);
    }
};
const drinks = () => {

    let drinks = {
        red: {
            name: 'Cabernet Sauvignon Decoy Sonoma County',
            desc: 'Aromas of mulberry, raspberry and currant and hints of rhubarb and mocha',
            price: '109',
            img: Red
        },
        white: {
            name: 'Georges Duboeuf Pouilly Fuisse - Chardonnay',
            desc: 'Hints of oak,vanilla and citrus',
            price: '112',
            img: White
        },
        rose: {
            name: 'Whispering Angel - Chateau d\'Esclans',
            desc: 'Juicy, enticing, strawberry and berry fruit',
            price: '108',
            img: Rose
        },
        brandy: {
            name: 'Between the Sheets',
            desc: 'Old friendship between the fine rum and brandy',
            price: '25',
            img: Sheets
        },
        whiskey: {
            name: 'Manhattan',
            desc: 'Rye or Bourbon,bitter and Vermouth',
            price: '21',
            img: Manhattan
        },
        gin: {
            name: 'High society',
            desc: 'Gin, campari, peach schnapps, orange',
            price: '24',
            img: High
        }
    }
    for (let drink in drinks) {
        renderItems(drinks[drink]);
    }
}

const renderItems = (items) => {
    const name = document.createElement('h5');
    name.textContent = items.name;
    const desc = document.createElement('p');
    desc.classList.add('desc')
    desc.textContent = items.desc;
    const price = document.createElement('span');
    price.classList.add('price')
    price.textContent = items.price + " $";
    const image = document.createElement('img');
    image.classList.add('imagem')
    image.src = items.img;
    const singleMenuItem = document.createElement('div');
    singleMenuItem.classList.add('left', 'singleItem');
    singleMenuItem.append(name,desc,price,image);
    topParent.append(singleMenuItem);
    return topParent;
}

export {
    starters,
    mains,
    dessertes,
    drinks
};