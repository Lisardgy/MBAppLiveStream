
document.addEventListener('prechange', function (event) {
    document.querySelector('ons-toolbar .center')
        .innerHTML = event.tabItem.getAttribute('label');
});

var prev = function () {
    var carousel = document.getElementById('carousel');
    carousel.prev();
};

var next = function () {
    var carousel = document.getElementById('carousel');
    carousel.next();
};

ons.ready(function () {
    var carousel = document.addEventListener('postchange', function (event) {
        console.log('Changed to ' + event.activeIndex)
    });
});


function morefunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id === 'home') {
        page.querySelector('#selectedmovie1').onclick = function () {
            document.querySelector('#myNavigator').pushPage('detail1.html');
        };
    }
});

document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id === 'home') {
        page.querySelector("#selectedmovie2").onclick = function () {
            document.querySelector('#myNavigator').pushPage('detail2.html');
        }
    }
});

document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id === 'home') {
        page.querySelector("#selectedmovie3").onclick = function () {
            document.querySelector('#myNavigator').pushPage('detail3.html');
        }
    }
});
