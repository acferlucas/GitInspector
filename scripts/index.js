const repositorios = []
let filteredRepositories = []

function loadData() {
  
  fetch('https://api.github.com/users/acferlucas/repos')
  .then((response) => response.json())
  .then((responseData) => {
    
    repositorios.push(...responseData)
    
    console.log(repositorios)
    const ul = document.getElementsByTagName('ul')[0]
    
    
    repositorios.forEach(repositorio =>{
      
      const li = document.createElement('li')
      const divPerfil = document.createElement('div')
      
      const img = document.createElement('img')
      img.setAttribute('src',"https://github.com/acferlucas.png")
      divPerfil.appendChild(img)
      const pnome = document.createElement('p')
      pnome.innerText ="Acfer lucas"
      divPerfil.appendChild(img)
      divPerfil.appendChild(pnome)
      
      
      li.appendChild(divPerfil)
      
      const divText = document.createElement('div')
      divText.setAttribute('id',"text-containerMain")
      
      const h2 = document.createElement('h2')
      h2.innerText = repositorio.name
      divText.appendChild(h2)
      
      const pDescription = document.createElement('p')
      pDescription.innerText = repositorio.description ? repositorio.description : "Sem descrição"
      divText.appendChild(pDescription)
      
      li.appendChild(divText)
      
      const divIcons = document.createElement('div')
      divIcons.setAttribute('id',"icon-area")
      const divOne = document.createElement('div')
      
      const divInside = document.createElement('div')
      divInside.classList.add('icon-area')
      
      imgInside = document.createElement('img')
      imgInside.setAttribute('src', "../assets/git-branch.svg")
      
      const pInside = document.createElement('p')
      pInside.innerText = repositorio.forks
      
      divInside.appendChild(imgInside)
      divInside.appendChild(pInside)
      
      const pone = document.createElement('p')
      pone.innerText ="Forks" 
      
      const divTwo = document.createElement('div')
      
      const divOutside = document.createElement('div')
      divOutside.classList.add('icon-area')
      
      const imgOutside = document.createElement('img')
      imgOutside.setAttribute('src',"../assets/star.svg")
      const pOutside = document.createElement('p')
      pOutside.innerText = repositorio.stargazers_count
      
      divOutside.appendChild(imgOutside)
      divOutside.appendChild(pOutside)
      
      const pTwo = document.createElement('p')
      pTwo.innerText = "Stars"
      
      divOne.appendChild(divInside)
      divTwo.appendChild(divOutside)
      
      divOne.appendChild(pone)
      divTwo.appendChild(pTwo)
      
      divIcons.appendChild(divOne)
      divIcons.appendChild(divTwo)
      
      li.appendChild(divIcons)
      
      ul.appendChild(li)
    })
  })
}

loadData()

function pesquisar(){
  
  const ul = document.getElementsByTagName('ul')[0]
  ul.innerHTML = '';
  filteredRepositories = []
  
  console.log(ul)
  const inputvalue = document.querySelector('input[type="text"]').value.toLowerCase()
  console.log(inputvalue)
  
  filteredRepositories = repositorios.filter(
    repositorio => repositorio.name.toLowerCase().includes(inputvalue)
    )
    
    filteredRepositories.forEach(newrepositorio => {
      
      const li = document.createElement('li')
      const divPerfil = document.createElement('div')
      
      const img = document.createElement('img')
      img.setAttribute('src',"https://github.com/acferlucas.png")
      divPerfil.appendChild(img)
      const pnome = document.createElement('p')
      pnome.innerText ="Acfer lucas"
      divPerfil.appendChild(img)
      divPerfil.appendChild(pnome)
      
      
      li.appendChild(divPerfil)
      
      const divText = document.createElement('div')
      divText.setAttribute('id',"text-containerMain")
      
      const h2 = document.createElement('h2')
      h2.innerText = newrepositorio.name
      divText.appendChild(h2)
      
      const pDescription = document.createElement('p')
      pDescription.innerText = newrepositorio.description ? newrepositorio.description : "Sem descrição"
      divText.appendChild(pDescription)
      
      li.appendChild(divText)
      
      const divIcons = document.createElement('div')
      divIcons.setAttribute('id',"icon-area")
      const divOne = document.createElement('div')
      
      const divInside = document.createElement('div')
      divInside.classList.add('icon-area')
      
      imgInside = document.createElement('img')
      imgInside.setAttribute('src', "../assets/git-branch.svg")
      
      const pInside = document.createElement('p')
      pInside.innerText = newrepositorio.forks
      
      divInside.appendChild(imgInside)
      divInside.appendChild(pInside)
      
      const pone = document.createElement('p')
      pone.innerText ="Forks" 
      
      const divTwo = document.createElement('div')
      
      const divOutside = document.createElement('div')
      divOutside.classList.add('icon-area')
      
      const imgOutside = document.createElement('img')
      imgOutside.setAttribute('src',"../assets/star.svg")
      const pOutside = document.createElement('p')
      pOutside.innerText = newrepositorio.stargazers_count
      
      divOutside.appendChild(imgOutside)
      divOutside.appendChild(pOutside)
      
      const pTwo = document.createElement('p')
      pTwo.innerText = "Stars"
      
      divOne.appendChild(divInside)
      divTwo.appendChild(divOutside)
      
      divOne.appendChild(pone)
      divTwo.appendChild(pTwo)
      
      divIcons.appendChild(divOne)
      divIcons.appendChild(divTwo)
      
      li.appendChild(divIcons)
      
      ul.appendChild(li)
    })
    
  }