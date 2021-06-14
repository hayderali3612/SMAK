const but = document.querySelector(".gitBut"),
    butDonw = document.querySelector(".but-down"),
    moves = document.querySelector(".home .content .contener"),
    disBlock = document.querySelectorAll(".home .content .contener i:first-child, .home .content .contener i:last-child"),
    bergherIcon = document.querySelector("header .berger-icon"),
    showNav = document.querySelector("header .nav"),
    links = document.querySelectorAll("header .nav li"),
    clickToShowDisc = document.querySelectorAll('.the-team .contener .conten-and-img .content .nema'),
    discrpt = document.querySelectorAll('.the-team .contener .conten-and-img .content .descript'),
    clickExitIcon = document.querySelectorAll('.the-team .contener .conten-and-img .content .descript .exit-icon');


bergherIcon.onclick = function() {

    showNav.classList.toggle('show');
    bergherIcon.classList.toggle('berger-toggle');

    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `link-move .5s ease forwards ${index / 7}s`;
        }
    });


};

links.forEach(activeLink => {

    activeLink.addEventListener('click', (e) => {
        let reEle = activeLink.parentElement.querySelectorAll('header .nav li');
        reEle.forEach(re => {
            re.classList.remove('active');
            /* console.log(re) */
        });

        e.target.parentElement.classList.add('active');
    });
});

but.onmouseover = function() {
        but.classList.add("borderDisplay");
    },

    but.onmouseout = function() {
        but.classList.remove("borderDisplay");
    };



moves.onmouseover = function() {
    disBlock[0].classList.add('show');
    disBlock[1].classList.add('show');
};

moves.onmouseout = function() {
    disBlock[0].classList.remove('show');
    disBlock[1].classList.remove('show');
};

butDonw.onmouseover = function() {
    butDonw.classList.add("border-down");
};

butDonw.onmouseout = function() {
    butDonw.classList.remove("border-down");
};

clickToShowDisc.forEach(clickDisc => {
    clickDisc.addEventListener('click', (e) => {
        let elmeDisc = e.target.parentElement.lastElementChild;
        elmeDisc.style.zIndex = '1';
        elmeDisc.style.top = '100%';
        console.log(clickDisc)




    });
});

clickExitIcon.forEach(clickExit => {
    clickExit.addEventListener('click', (e) => {
        let reAfter = document.querySelectorAll('.the-team .contener .conten-and-img .content .nema');
        reAfter.forEach(after => {
            // after.classList.remove('after');
            console.log(after)

        });

        let reDisc = clickExit.parentElement;
        reDisc.style.zIndex = '-1';
        reDisc.style.top = '0%';

    });
});

function svges() {

    console.log(document.querySelector('.the-box .box span').append())
};

setInterval(svges, 50);