const projectsElement = document.querySelector('.projects');

let currentPage = 1;
const projectsPerPage = 9;
let allRepos = [];

async function getRepositories(language) {
    try { 
        const response = await fetch('https://api.github.com/users/JoseMatheus29')
        const user = await response.json()
        const reposResponse = await fetch(`${user.repos_url}?per_page=100`);
        const repositorios = await reposResponse.json()
        if (language == null) {
            allRepos = repositorios.filter(repo => repo.description); 
        } else {
            allRepos = repositorios.filter(repo => repo.description && repo.language === language);
        }
        currentPage = 1;
        renderPage();
    } catch(e) {
        console.log(e)
    }
}

function render(repos) {
    projectsElement.innerHTML = '';
    for (let i = 0; i < repos.length; i++) {
        if (repos[i].description) {
            const divRepo = document.createElement('div');
            divRepo.setAttribute('class', 'bg-neutral-800 border border-neutral-700 rounded-lg shadow-sm p-5 flex flex-col min-h-[220px]');
            const aTitle = document.createElement('a');
            aTitle.setAttribute('href', repos[i].svn_url);
            aTitle.setAttribute('target', '_blank');
            const h5 = document.createElement('h5');
            h5.setAttribute('class', 'mb-2 text-2xl font-bold tracking-tight text-white');
            h5.textContent = repos[i].name;
            aTitle.appendChild(h5);
            const p = document.createElement('p');
            p.setAttribute('class', 'mb-3 font-normal text-gray-400');
            p.textContent = repos[i].description;
            const aBtn = document.createElement('a');
            aBtn.setAttribute('href', repos[i].svn_url);
            aBtn.setAttribute('target', '_blank');
            aBtn.setAttribute('class', 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 transition mt-auto');
            aBtn.innerHTML = `Saber Mais
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-2" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>`;
            divRepo.appendChild(aTitle);
            divRepo.appendChild(p);
            divRepo.appendChild(aBtn);

            projectsElement.appendChild(divRepo);
        }
    }
}

function renderPage() {
    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const reposToShow = allRepos.slice(start, end);
    render(reposToShow);
    renderPagination();
}

function renderPagination() {
    let paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.className = 'pagination flex justify-center gap-4 mt-8';
        projectsElement.parentNode.appendChild(paginationContainer);
    }
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(allRepos.length / projectsPerPage);

    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Anterior';
    prevBtn.className = 'px-4 py-2 bg-neutral-700 text-white rounded hover:bg-green-600 transition disabled:opacity-50';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage();
        }
    };
    paginationContainer.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `px-3 py-2 rounded ${i === currentPage ? 'bg-green-600 text-white' : 'bg-neutral-700 text-white hover:bg-green-600'}`;
        pageBtn.onclick = () => {
            currentPage = i;
            renderPage();
        };
        paginationContainer.appendChild(pageBtn);
    }
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Próxima';
    nextBtn.className = 'px-4 py-2 bg-neutral-700 text-white rounded hover:bg-green-600 transition disabled:opacity-50';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage();
        }
    };
    paginationContainer.appendChild(nextBtn);
}

getRepositories();

