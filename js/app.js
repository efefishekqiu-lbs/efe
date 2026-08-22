let scrolledDown = false;
$(window).on("scroll", function () {
    const scrollY = $(window).scrollTop();
    if (scrollY > 0) {
        if (scrolledDown == false) {
            scrolledDown = true 
            $('header').css({
                'border-color': '#242424',
                'box-shadow': '0 2px 16px #00000008',
                'background-color': 'color-mix(in srgb, #1c1c1c 70%, transparent)',
                'width': '35%',
            })
            typeText('header>h1', 'E.F')
        }
    } else {
        if (scrolledDown == true) {
            scrolledDown = false 
            $('header').css({
                'border-color': 'transparent',
                'box-shadow': 'none',
                'background-color': 'transparent',
                'width': '40%',
            })
            typeText('header>h1', 'Efe Fishekqiu')
        }
    }
});

function typeText(target, newText) {
    const $el = $(target);
    if (!$el.length) return;
    if ($el.text() === newText) return;
    if ($el.data("typing")) return;
    const currentText = $el.text();
    let i = currentText.length;
    $el.data("typing", true);
    if (newText.length < currentText.length) {
        const interval = setInterval(() => {
            i--;
            $el.text(currentText.slice(0, i));
            if (i <= newText.length) {
                clearInterval(interval);
                $el.text(newText);
                $el.removeData("typing");
            }
        }, 50);
    }
    else {
        const interval = setInterval(() => {
            i++;
            $el.text(newText.slice(0, i));
            if (i >= newText.length) {
                clearInterval(interval);
                $el.removeData("typing");
            }
        }, 50);
    }
}

$(document).ready(function() {
    $('header>h1').html('')
    setTimeout(() => {
       typeText('header>h1', 'Efe Fishekqiu')
    }, 10);
    $('img').on('dragstart', function(event) { event.preventDefault(); });
})

