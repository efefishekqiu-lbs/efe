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
                'backdrop-filter': 'blur(20px)',
                'width': '38%',
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
                'backdrop-filter': 'blur(0px)',
                'width': '60%',
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

const toolsHrefs = {
    ['react']: 'https://react.dev/',
    ['jquery']: 'https://jquery.com/',
    ['tailwind']: 'https://tailwindcss.com/',
    ['threejs']: 'https://threejs.org/',
    ['nodejs']: 'https://nodejs.org/',
    ['express']: 'https://expressjs.com/',
    ['lua']: 'https://www.lua.org/',
    ['typescript']: 'https://www.typescriptlang.org/',
    ['websocket']: 'https://websocket.org/',
    ['jwt']: 'https://www.jwt.io/',
    ['oauth']: 'https://oauth.net/2/',
    ['passportjs']: 'https://www.passportjs.org/',
    ['mongodb']: 'https://www.mongodb.com/',
    ['postgresql']: 'https://www.postgresql.org/',
    ['heidisql']: 'https://www.heidisql.com/',
    ['figma']: 'https://www.figma.com/',
    ['adobeillustrator']: 'https://www.adobe.com/products/illustrator.html',
}

let faqQuestions = {
    ['1']: `I usually start by breaking the idea into its core pages, user flows, and technical requirements. From there, I connect the frontend, backend, database, and APIs into one system, keeping the architecture simple enough to maintain and flexible enough to grow.`,
    ['2']: `I don't treat design and development as separate steps. The interface is planned around real interactions, responsive behavior, and performance from the beginning. That way, the final product feels consistent rather than like a design simply translated into code.`,
    ['3']: `The layout is adapted per device rather than simply scaled down. Desktop can use the full composition, while mobile gets a more focused version with the same essential content. I also test interactions, performance, and accessibility across different screen sizes.`,
    ['4']: `Launch is only the starting point. I monitor performance, fix unexpected issues, improve loading times, and make adjustments based on real usage. The goal is to leave behind a system that is stable today but also easy to update tomorrow.`,
}

function chooseFaqQuestion(id) {
    if (faqQuestions[id]) {
        $('.frequently-askedBox-questions-question').find('div').css('background-color', '#929292')
        $('.frequently-askedBox-questions-question').find('span').css('color', '#929292')
        $(`.frequently-askedBox-questions-question[data-id="${id}"]`).find('div').css('background-color', '#f3f3f3')
        $(`.frequently-askedBox-questions-question[data-id="${id}"]`).find('span').css('color', '#f3f3f3')
        $('.frequently-askedBox-answer').html(faqQuestions[id])
    }
}

$(document).ready(function() {
    $('header>h1').html('')
    setTimeout(() => {
       typeText('header>h1', 'Efe Fishekqiu')
    }, 10);
    $('img').on('dragstart', function(event) { event.preventDefault(); });

    $(document).on('click', '.tools-wrapper-mainWrapper-divider-option', function() {
        let id = $(this).attr('data-id');
        if (toolsHrefs[id]) {
            window.open(toolsHrefs[id], '_blank')
        }
    })
    
    $(document).on('click', '.frequently-askedBox-questions-question', function() {
        let id = $(this).attr('data-id');
        chooseFaqQuestion(id)
    })
    chooseFaqQuestion('1')
})

$(document).ready(function(){
    let currentStep=0;
    let isScrolling=false;
    const steps=[$(".viewPort"),$(".information"),$('.projects'),$('.footer')];
    const duration=700;

    function easeInOut(t){
        return t<0.5
            ?2*t*t
            :1-Math.pow(-2*t+2,2)/2;
    }

    function goToStep(step){
        if(step<0||step>=steps.length||isScrolling)return;
        $('.header-options-option').css('color', '#dedede')
        $('.header-options-option > div').hide()
        $('.header-options-option').css({
            'position': 'relative',
            'top': '0',
        })
        if (step == 1) {
            $('.header-options-option[data-type="about"]').css('color', '#fff')
            $('.header-options-option[data-type="about"]>div').show()
            $('.header-options-option[data-type="about"]').css({
                'position': 'relative',
                'top': '-0.5vh',
            })
        }
        if (step == 2) {
            $('.header-options-option[data-type="work"]').css('color', '#fff')
            $('.header-options-option[data-type="work"]>div').show()
            $('.header-options-option[data-type="work"]').css({
                'position': 'relative',
                'top': '-0.5vh',
            })
        }
        if (step == 3) {
            $('.header-options-option[data-type="contact"]').css('color', '#fff')
            $('.header-options-option[data-type="contact"]>div').show()
            $('.header-options-option[data-type="contact"]').css({
                'position': 'relative',
                'top': '-0.5vh',
            })
        }

        isScrolling=true;
        currentStep=step;

        const target=step===0?0:steps[step].offset().top-59;
        const start=window.scrollY;
        const distance=target-start;
        const startTime=performance.now();

        function animate(time){
            const progress=Math.min((time-startTime)/duration,1);
            const eased=easeInOut(progress);

            window.scrollTo(0,start+(distance*eased));

            if(progress<1){
                requestAnimationFrame(animate);
            }else{
                window.scrollTo(0,target);
                isScrolling=false;
            }
        }

        requestAnimationFrame(animate);
    }

    $(window).on("wheel",function(e){
        e.preventDefault();
        if(isScrolling)return;

        if(e.originalEvent.deltaY>0){
            goToStep(currentStep+1);
        }else if(e.originalEvent.deltaY<0){
            goToStep(currentStep-1);
        }
    });

    $(document).on("keydown",function(e){
        if(e.key==="ArrowDown"){
            e.preventDefault();
            goToStep(currentStep+1);
        }else if(e.key==="ArrowUp"){
            e.preventDefault();
            goToStep(currentStep-1);
        }
    });

    $(document).on('click', 'header>h1', function() {
        goToStep(0)
    })
    $(document).on('click', '.viewport-scrollInfo>h1, .viewport-scrollInfo>svg', function() {
        goToStep(1)
    })
    $(document).on('click', '.advise-viewMyWork', function() {
        goToStep(2)
    })
    $(document).on('click', '.advise-contactMe', function() {
        goToStep(3)
    })
    $(document).on('click', '.header-options-option', function() {
        let type = $(this).attr('data-type');
        if (type == 'about') {
            goToStep(1)
        }
        if (type == 'work') {
            goToStep(2)
        }
        if (type == 'contact') {
            goToStep(3)
        }
    })
    $(document).on('click', '.footer-wrapper-boxes-box-navigationList-option', function() {
        let type = $(this).attr('data-type');
        if (type == 'home') {
            goToStep(0)
        }
        if (type == 'about') {
            goToStep(1)
        }
        if (type == 'work') {
            goToStep(2)
        }
        if (type == 'contact') {
            goToStep(3)
        }
    })
});