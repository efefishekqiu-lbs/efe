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
            'https://cdn.discordapp.com/attachments/1226966712901959770/1540877435871170630/content.png?ex=6a8b8d70&is=6a8a3bf0&hm=67330d83f032d11090eac33573bf0fea7c7499e605c4f5adbf685c3d003f3a7d&',
            'https://cdn.discordapp.com/attachments/1226966712901959770/1540876127784927314/content.png?ex=6a8b8c38&is=6a8a3ab8&hm=560dd6459f37020e87285ef390a75d5936409d5c776730929c426204ec69bdd2&',
            'https://cdn.discordapp.com/attachments/1226966712901959770/1540888937571160145/content.png?ex=6a8b9827&is=6a8a46a7&hm=6c6f84e6f80b4dc6d090d903002a31afc55ad2057357622897380916446a3c43&',
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