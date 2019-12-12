const constructRepo = repo => {
  const repoElement = document.createElement('div')

  const repoName = document.createElement('h2')
  repoName.classList.add('repo-name')
  repoName.innerText = repo.name

  repoElement.appendChild(repoName)

  return repoElement
}

const constructRepos = repos => repos.map(constructRepo)

const getRepos = () => 
  fetch("https://api.github.com/users/meech-ward/repos")
  .then(r => r.json())

document.addEventListener("DOMContentLoaded", function() {

  const reposContainer = document.querySelector("#repos-container")

  const appendRepo = repo => reposContainer.appendChild(repo)
  
  getRepos()
    .then(constructRepos)
    .then(repos => repos.forEach(appendRepo))
    .catch(console.error)
})