function closeItem(item) {
    return new Promise( resolve => {
        item.classList.remove('is-open');
        item.addEventListener("transitionend", event => resolve(event), false)
    });
}

function findAncestor (el, className) {
    do {
        el = el.parentElement
    }
    while ( !el.classList.contains(className) );
    return el;
}

function addIsOpenToItem(data) {
    if (data.item.classList.contains('expandable-item')) {
        data.item.classList.add('is-open');
    }
    else {
        var itemAncestor = findAncestor(data.item, 'expandable-item')
        itemAncestor.classList.add('is-open');
    }
}


function afterCloseItem(data) {
    var bottom = data.item.offsetHeight + data.item.offsetTop;
    data.drawer.style.top = bottom + 'px';
    addIsOpenToItem(data);
    setTimeout( () => {
        data.drawer.classList.add('is-open');
    }, 400)
}



export function setExpandable(data) {



    data.drawer.classList.remove('is-open');
    var openItem = data.wrapper.getElementsByClassName('is-open')[0]
    if (openItem) {
        closeItem(openItem).then( () => {
            afterCloseItem(data)
        });
    }
    else {
        afterCloseItem(data)
    }

};
