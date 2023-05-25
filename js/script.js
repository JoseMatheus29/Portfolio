
const repositories = document.querySelector('#repos');
const urlRepos="https://api.github.com/users/josematheus29/repos"

function getRepos(){
    axios.get(urlRepos)
    .then(response =>{
        const data = response.data;
        renderRepos(data);
    })
    .catch(error => console.log(error))
}

getRepos()

function renderRepos(data){
    for (i=0; i<data.length; i++){
        const divRepo = document.createElement('div');
        divRepo.setAttribute('class', 'container')
        divRepo.innerHTML=`<div class="repositories">
        <div class="title-date">
            <h5 class="title-repository">${data[i].name}</h5>
            <span class="date-create">${Intl.DateTimeFormat('pt-BR').format(new Date (data[i].created_at))}</span>
        </div>
        <div class="link">
            <a href="${data[i].svn_url}"class="link-repository" target="_blank">link</a>
            <span class="language"><span class="circle"></span>${data[i].language}</span> 
        </div>
        </div>`
        repositories.appendChild(divRepo);
    }
}
