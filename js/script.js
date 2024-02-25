const projectsElement = document.querySelector('.projects');

async function getRepositories(language) {
    try { 
        const response = await fetch('https://api.github.com/users/JoseMatheus29')
        const user = await response.json()
        const reposResponse = await fetch(`${user.repos_url}?per_page=100`);
        const repositorios = await reposResponse.json()
        console.log(repositorios)
        filterElements(repositorios, language)
    } catch(e) {
        console.log(e)
    }
}

function render(repos) {
    projectsElement.innerHTML = ''; // Limpa os elementos antigos antes de renderizar os novos
    for (let i = 0; i < repos.length; i++) {
        if (repos[i].description) {
            const divRepo = document.createElement('div');
            divRepo.setAttribute('class', 'project currentItem');
            divRepo.setAttribute('onClick', 'goGithub()');
            divRepo.setAttribute('id', 'gridProjects');
            const h2 = document.createElement('h2');
            const icon = document.createElement('i');
            const p = document.createElement('p');
            const a = document.createElement('a');
            
            a.setAttribute('target', '_blank');
            
            icon.setAttribute('class', 'bx bx-folder');
            a.setAttribute('href', repos[i].svn_url);
            const nameRepo = document.createTextNode(repos[i].name);
            const descriptionRepo = document.createTextNode(repos[i].description);
            h2.appendChild(icon);
            h2.appendChild(nameRepo);
            p.appendChild(descriptionRepo);
            a.appendChild(h2);
            divRepo.appendChild(a);
            divRepo.appendChild(p);
            projectsElement.appendChild(divRepo);
            slideProjects();

        }
    }
}

function filterElements(repos, language){
    if (language == null) {
        render(repos);
    } else {
        const reposFilter = repos.filter(repo => repo.language === language);
        render(reposFilter);
    }
}

function slideProjects(){
    const controls = document.querySelectorAll('.control')
    const projects = document.querySelectorAll('.project')
    const maxProjects = projects.length;
    let currentItem = 0
    controls.forEach(control => {
        control.addEventListener('click', () =>{
            const isLeft = control.classList.contains('left')
            if(isLeft){
                currentItem -= 1;
            }else{
                currentItem += 1;
            }
            if(currentItem >= maxProjects){
                currentItem = 0;
            }
            if(currentItem < 0 ){
                currentItem = maxProjects - 1;
            }
            projects.forEach(project => project.classList.remove('currentItem'))
            projects[currentItem].scrollIntoView({
            });
        })
    })
}

function goGithub(){
    alert("Encaminhando para github");
    window.location = "https://github.com/JoseMatheus29";
}

getRepositories();

