function showDivs() {
    var select = document.getElementById('movieSelect');
    var value = select.value;
    var containerChildren = document.querySelectorAll('.search_container_child > section ');
    
    if (value === 'hollywood') {
        for (var i = 0; i < containerChildren.length; i++) {
            if (!containerChildren[i].classList.contains('hollywood_section')) {
                containerChildren[i].classList.add('filt_select_hidden');
            } else {
                containerChildren[i].classList.remove('filt_select_hidden');
            }
        }
    } else if (value === 'bollywood') {
        for (var i = 0; i < containerChildren.length; i++) {
            if (!containerChildren[i].classList.contains('bollywood_section')) {
                containerChildren[i].classList.add('filt_select_hidden');
            } else {
                containerChildren[i].classList.remove('filt_select_hidden');
            }
        }
    }else if (value === 'tollywood') {
        for (var i = 0; i < containerChildren.length; i++) {
            if (!containerChildren[i].classList.contains('tollywood_section')) {
                containerChildren[i].classList.add('filt_select_hidden');
            } else {
                containerChildren[i].classList.remove('filt_select_hidden');
            }
        }
    } else {
        for (var i = 0; i < containerChildren.length; i++) {
            containerChildren[i].classList.remove('filt_select_hidden');
        }
    }
}

// Initialize the display based on the initial selection
document.addEventListener('DOMContentLoaded', function() {
    showDivs();
});