const users = []
const ul = document.getElementsByTagName('ul')[0]

function loadUsers() {
  
  fetch('https://api.github.com/users/acferlucas/following')
  .then((response) => response.json())
  .then((usersData) => {
    
    users.push(...usersData)
    
    console.log(users)
    
    users.forEach(user =>{
      
      const li = document.createElement('li')
      const img = document.createElement('img')
      img.setAttribute('src',user.avatar_url)
      const h1 = document.createElement('h1')
      h1.innerText = user.login
      
      li.appendChild(img)
      li.appendChild(h1)
      
      const divText = document.createElement('div')
      divText.setAttribute('id',"text-container")
      
      const divBranch = document.createElement('div')
      
      const branchImg = document.createElement('img')
      branchImg.setAttribute('src',"../assets/git-branch.svg")
      const branchP = document.createElement('p')
      branchP.innerText = "0"
      
      divBranch.appendChild(branchImg)
      divBranch.appendChild(branchP)
      
      const divStar = document.createElement('div')
      
      const imgStar = document.createElement('img')
      imgStar.setAttribute('src',"../assets/star.svg")
      const pStar = document.createElement('p')
      pStar.innerText = "2"
      
      divStar.appendChild(imgStar)
      divStar.appendChild(pStar)
      
      divText.appendChild(divBranch)
      divText.appendChild(divStar)
      
      li.appendChild(divText)
      
      const followDiv = document.createElement('div')
      const pfollowing = document.createElement('p')
      const pfollow = document.createElement('p')
      
      pfollowing.innerText = "Following"
      pfollow.innerText = "Followers"
      
      followDiv.appendChild(pfollowing)
      followDiv.appendChild(pfollow)
      
      li.appendChild(followDiv)
      
      ul.appendChild(li)
      
      
    })
    
  })
}

loadUsers()