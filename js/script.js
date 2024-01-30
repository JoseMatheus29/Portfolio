const projectsElement = document.querySelector('.projects');

async function getRepositories() {
    try{
        const response = await fetch('https://api.github.com/users/JoseMatheus29')
        const user = await response.json()
        
        const reposResponse = await fetch(`${user.repos_url}?per_page=17`);
        const repositorios = await reposResponse.json()
        console.log(repositorios)
        render(repositorios)
    } catch(e) {
        console.log(e)
    }

}

function render(repos) {
    for(i = 0; i < 17; i++) {

            const divRepo = document.createElement('div')
            divRepo.setAttribute('class', 'project container')
            divRepo.setAttribute('onCLick', 'goGithub()')
            const h2 = document.createElement('h2')
            const icon = document.createElement('i')
            const p = document.createElement('p')
            const a = document.createElement('a')
            
            a.setAttribute('target', '_blank')
            a.setAttribute('href', repos[i].svn_url)
            icon.setAttribute('class', 'bx bx-folder')
            
            const nameRepo = document.createTextNode(repos[i].name)
            const descriptionRepo = document.createTextNode(repos[i].description)
            
            h2.appendChild(icon)
            h2.appendChild(nameRepo)
            p.appendChild(descriptionRepo)


            a.appendChild(h2)
            divRepo.appendChild(a)
            divRepo.appendChild(p)
            projectsElement.appendChild(divRepo)
    
        }
    }


function goGithub(){
    alert("Encaminhando para github");
    window.location = "https://github.com/JoseMatheus29";
}

getRepositories()