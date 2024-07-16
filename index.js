// index.js

function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Change navigation menu style on scroll
window.onscroll = function() {
    changeSectionColor();
};

function changeSectionColor() {
    var sections = document.querySelectorAll('.content');
    var nav = document.getElementById('myTopnav');
    
    sections.forEach(section => {
        var rect = section.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom >= 60) {
            switch(section.id) {
                case 'home':
                    nav.style.backgroundColor = '#ffcccc';
                    break;
                case 'firstpage':
                    nav.style.backgroundColor = '#ccffcc';
                    break;
                case 'secondpage':
                    nav.style.backgroundColor = '#ccccff';
                    break;
                case 'thirdpage':
                    nav.style.backgroundColor = '#ffffcc';
                    break;
                case 'fourthpage':
                    nav.style.backgroundColor = '#ffccff';
                    break;
            }
        }
    });
}
