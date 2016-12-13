/* eslint-disable */

function closePreviousItem(openItem) {
    return new Promise( resolve => {
        $(openItem).removeClass('is-open');
        openItem.addEventListener("transitionend", event => resolve(event), false)
    });
}

function openExpandable(data) {

    var bottom = data.item.offsetHeight + data.item.offsetTop,
        itemIsExpander = data.item.classList.contains('expandable-item'),
        itemHeight = data.item.offsetHeight,
        drawerHeight,
        itemMarginBottom,
        addedMargin,
        ancestor,
        ancestorHeight,
        ancestorMarginBottom;

    $(data.drawer).css('top', `${bottom}px`)

    if (itemIsExpander) {
        $(data.item).addClass('is-open')

        setTimeout( () => {
            data.drawer.classList.add('is-open');
            drawerHeight = $(data.drawer).height()
            $(data.item).css('margin-bottom', `${drawerHeight}px`)
        }, 400)

    }
    else {

        ancestor = $(data.item).closest('.expandable-item')
        ancestorHeight = ancestor.height()
        ancestorMarginBottom = ancestor.css('marginBottom').replace('px', '')

        ancestor.addClass('is-open');

        setTimeout( () => {
            $(data.drawer).addClass('is-open')
            drawerHeight = $(data.drawer).height()
            addedMargin = drawerHeight - (ancestorHeight - itemHeight);
            ancestor.css('margin-bottom', `${addedMargin}px`)
        }, 400)
    }
    // console.log($(data.wrapper).children('.expandable-item:not(.is-open)'))
    $(data.wrapper).find('.expandable-item:not(.is-open)').addClass('is-not-open')
}

function close(data) {

    // add is-closeing to keep z-index
    $(data.drawer).addClass('is-closing').removeClass('is-open');

    setTimeout( () => {
        // remove bottom margin from expandable item
        $(data.item).css('margin-bottom', '');
        // remove all -open classes from expandable-items
        $(data.wrapper).find('.expandable-item').removeClass('is-not-open is-open');
        // remove is-closing to set z-index: -1
        $(data.drawer).removeClass('is-closing');
    }, 400)
}

export function closeExpandable(data) {
    close(data);
}

export function toggleExpandable(data) {

    if ($(data.item).hasClass('is-open')) {
        return false;
    }

    var openItem = data.wrapper.getElementsByClassName('is-open')[0];
    data.drawer.classList.remove('is-open');
    $(data.wrapper).find('.is-not-open').removeClass('is-not-open')

    if (openItem) {
        $(openItem).css('margin-bottom', '');

        closePreviousItem(openItem).then( () => {
            openExpandable(data);
        });
    }
    else {
        openExpandable(data);
    }
};

export function initExpandable(target) {

    var _target = $(target),
        _window = $(window),
        resizeTimer,
        windowWidth = _window.width();

    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (_window.width() !== windowWidth) {
                windowWidth = _window.width();
                _target.find('.expandable-container').removeClass('is-open');
                _target.find('.expandable-item').removeClass('is-open is-not-open is-inactive').css('margin-bottom', '');
            }
        }, 100);
    });
}
