const works = {
    ['fiveshield_website']: {
        label: 'FiveShield Website',
        description: 'Web App, Dashboard',
        tools: [
            'react',
            'jquery',
            'express',
            'nodejs',
            'mongodb',
        ],
        medias: [
            'https://media.discordapp.net/attachments/1442125719139385446/1485041620637323375/image.png?ex=6a8f67c9&is=6a8e1649&hm=0d921c4246fecaa3695627657e0bc292b79587c386bcd0290fda78b57bbd8e8b&=&format=webp&quality=lossless&width=640&height=303',
            'https://media.discordapp.net/attachments/1442125719139385446/1485041620637323375/image.png?ex=6a8f67c9&is=6a8e1649&hm=0d921c4246fecaa3695627657e0bc292b79587c386bcd0290fda78b57bbd8e8b&=&format=webp&quality=lossless&width=640&height=303',
            'https://media.discordapp.net/attachments/1442125719139385446/1485041620637323375/image.png?ex=6a8f67c9&is=6a8e1649&hm=0d921c4246fecaa3695627657e0bc292b79587c386bcd0290fda78b57bbd8e8b&=&format=webp&quality=lossless&width=640&height=303',
        ],
        year: '2024',
        demoLink: 'https://fiveshieldac.xyz/',
        sourceCode: 'https://github.com/wotex3/fiveShieldac',
    }
}

$(document).ready(function(){
    function loadProjects() {
        $('.projects-projectsList').html('')

        $.each(works, function(k, v) {
            $('.projects-projectsList').append(`
                <div class="projects-projectsList-project opacityLow">
                    <img src="${v.medias[0]}">
                    <div class="projects-projectsList-project-info">
                        <h1>${v.label}</h1>
                        <h2>${v.description}</h2>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
                    </div>
                </div>
            `)
            $('.projects-projectsList').append(`
                <div class="projects-projectsList-project opacityLow">
                    <img src="${v.medias[0]}">
                    <div class="projects-projectsList-project-info">
                        <h1>${v.label}</h1>
                        <h2>${v.description}</h2>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
                    </div>
                </div>
            `)
            $('.projects-projectsList').append(`
                <div class="projects-projectsList-project opacityLow">
                    <img src="${v.medias[0]}">
                    <div class="projects-projectsList-project-info">
                        <h1>${v.label}</h1>
                        <h2>${v.description}</h2>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
                    </div>
                </div>
            `)
            $('.projects-projectsList').append(`
                <div class="projects-projectsList-project opacityLow">
                    <img src="${v.medias[0]}">
                    <div class="projects-projectsList-project-info">
                        <h1>${v.label}</h1>
                        <h2>${v.description}</h2>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
                    </div>
                </div>
            `)
            $('.projects-projectsList').append(`
                <div class="projects-projectsList-project opacityLow">
                    <img src="${v.medias[0]}">
                    <div class="projects-projectsList-project-info">
                        <h1>${v.label}</h1>
                        <h2>${v.description}</h2>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
                    </div>
                </div>
            `)
        })
    }

    loadProjects()
})