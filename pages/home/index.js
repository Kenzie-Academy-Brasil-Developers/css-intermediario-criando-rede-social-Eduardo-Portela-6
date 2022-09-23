/* Desenvolva a lógica da página aqui */

/*<ul class="sugestion-list flex">
              <li class="profile flex align-center gap-1 justify-between">
                <div class="flex align-center gap-1">
                  <img src="assets/img/user1.svg" alt="imagem-Samuel">
                  <div>
                    <p>Samuel Leão</p>
                    <cite class="text-3">Front end Enginer</cite>
                  </div>
                </div>
                <button class="follow-button">Seguir</button>
              </li>*/


const sugestionList = document.querySelector(".sugestion-list")
sugestionList.classList.add("flex")

function listSugestionUser(list, ref){ 
    for(let i =0; i < list.length; i++){
        for(let j = 0; j < sugestUsers.length; j++){
            if(list[i].id == sugestUsers[j]){
                let currentUser = list[i]
                let cardDone = createSugestUser(currentUser)
                ref.appendChild(cardDone)
            }
        }
}
}

listSugestionUser(users, sugestionList)

function createSugestUser(user){
    let userImg = user.img
    let userName = user.user
    let userStack = user.stack

    let cardLi = document.createElement("li")
    cardLi.classList = "profile flex align-center gap-1 justify-between margin-tb-2"
    cardLi.innerHTML = `
    <div class="flex align-center gap-2">
    <img src="${userImg}" alt="imagem-Samuel">
    <div>
      <p>${userName}</p>
      <cite class="text-3">${userStack}</cite>
    </div>
  </div>
  <button class="follow-button">Seguir</button>
    `
    return cardLi
}


const listPost = document.querySelector(".post-list")

function listPosts(listUser, listPost,ref){
    for(let i = 0; i < listUser.length; i++){ 
        for(j = 0; j < listPost.length; j++){
            if(listUser[i].id == listPost[j].user){
                let = currentPost = listPost[j]
                let = currentUser = listUser[i]
                let = postDone = createPost(currentUser, currentPost)
                ref.appendChild(postDone)
            }
        } 
    }
}

listPosts(users, posts, listPost)

function createPost(user, post){
    let userImg = user.img
    let userName = user.user
    let userStack = user.stack

    let postTitle = post.title
    
    let postLi = document.createElement("li")
    postLi.classList = "profile "
    
    postLi.innerHTML = `
    <div class=" div-profile flex align-center gap-1 pad-tb-1">
    <img src="${userImg}" alt="imagem-Samuel">
    <div>
      <p>${userName}</p>
      <cite class="text-3">${userStack}</cite>
    </div>
  </div>
  <h2 class="post-title line-heigth">${postTitle}</h2>
  <p class="post-description pad-tb-1 line-heigth">${post.text}</p>
  <div class="buttons flex align-center gap-1">
    <button data-modal-control="modal-post" id="${post.user}" class="open-post">Abrir post</button>
    <div>
      
      <span>0</span>
    </div>
  </div>
    `
    return postLi
}

    const modalWrapper = document.querySelector(".modal-wrapper")
    const modal = document.createElement("div")
    modal.classList ="modal padding-full-2"
    modalWrapper.appendChild(modal)
    modal.innerHTML = `
    <div class=" div-profile flex align-center gap-1">
            <img src="">
            <div>
              <p>Samuel Leão</p>
              <cite class="text-3">Front end Enginer</cite>
            </div>
          </div>
          <h2 class="post-title margin-tb-2">Como criar um interface simples e agradável utilizando boas práticas de design</h2>
          <p class="post-description">Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.</p>
          <button data-modal-control="modal-post" class="close-modal">X</button>
        </div>
    `

const dataModalToggle = document.querySelectorAll("[data-modal-control]")

for(let i = 0; i <dataModalToggle.length; i++){
    dataModalToggle[i].addEventListener("click", function(event){
       
        let valueDataModalControl = dataModalToggle[i].getAttribute("data-modal-control")
        document.getElementById(valueDataModalControl).classList.toggle("show-modal")

        let idTarget = event.target.id
       
        let postNew = posts.find((element) => {
            return element.user == idTarget
        })

        let userNew = users.find((element) => {
            return element.id == postNew.user  ? element : "" 
        })

        let modalImg    = document.querySelector(".div-profile img")
        let modalName   = document.querySelector(".div-profile div p")
        let modalStack  = document.querySelector(".div-profile div cite")

        let modalTitle = document.querySelector(".post-title") 
        let modalText  = document.querySelector(".post-description")

        modalImg.src = `${userNew.img}`
        modalName.innerText = `${userNew.user}`
        modalStack.innerText = `${userNew.stack}`

        modalTitle.innerText = `${postNew.title}`
        modalText.innerText = `${postNew.text}`

    })
}






/*/* <div class="modal">
          <div class=" div-profile flex align-center gap-1">
            <img src="assets/img/user1.svg" alt="imagem-Samuel">
            <div>
              <p>Samuel Leão</p>
              <cite class="text-3">Front end Enginer</cite>
            </div>
          </div>
          <h2 class="post-title">Como criar um interface simples e agradável utilizando boas práticas de design</h2>
          <p class="post-description">Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.</p>
          <button data-modal-control="modal-post" class="close-modal">X</button>
        </div>*/





/*<li class="profile">
            <div class=" div-profile flex align-center gap-1">
              <img src="assets/img/user1.svg" alt="imagem-Samuel">
              <div>
                <p>Samuel Leão</p>
                <cite class="text-3">Front end Enginer</cite>
              </div>
            </div>
            <h2 class="post-title">Como criar um interface simples e agradável utilizando boas práticas de design</h2>
            <p class="post-description">Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.</p>
            <div class="buttons flex align-center gap-1">
              <button class="open-post">Abrir post</button>
              <div>
                <button class="like"><img src="assets/img/heart.png" alt=""></button>
                <span>0</span>
              </div>
            </div>
          </li>*/

          /*<li class="profile">
            <div class=" div-profile flex align-center gap-1">
              <img src="assets/img/user1.svg" alt="imagem-Samuel">
              <div>
                <p>Samuel Leão</p>
                <cite class="text-3">Front end Enginer</cite>
              </div>
            </div>
            <h2 class="post-title">Como criar um interface simples e agradável utilizando boas práticas de design</h2>
            <p class="post-description">Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.</p>
            <div class="buttons flex align-center gap-1">
              <button class="open-post">Abrir post</button>
              <div>
                <button class="like"><img src="assets/img/heart.png" alt=""></button>
                <span>0</span>
              </div>
            </div>
          </li>

          <li class="profile">
            <div class=" div-profile flex align-center gap-1">
              <img src="assets/img/user1.svg" alt="imagem-Samuel">
              <div>
                <p>Samuel Leão</p>
                <cite class="text-3">Front end Enginer</cite>
              </div>
            </div>
            <h2 class="post-title">Como criar um interface simples e agradável utilizando boas práticas de design</h2>
            <p class="post-description">Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.</p>
            <div class="buttons flex align-center gap-1">
              <button class="open-post">Abrir post</button>
              <div>
                <button class="like"><img src="assets/img/heart.png" alt=""></button>
                <span>0</span>
              </div>
            </div>
          </li>

          <li class="profile">
            <div class=" div-profile flex align-center gap-1">
              <img src="assets/img/user1.svg" alt="imagem-Samuel">
              <div>
                <p>Samuel Leão</p>
                <cite class="text-3">Front end Enginer</cite>
              </div>
            </div>
            <h2 class="post-title">Como criar um interface simples e agradável utilizando boas práticas de design</h2>
            <p class="post-description">Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.</p>
            <div class="buttons flex align-center gap-1">
              <button class="open-post">Abrir post</button>
              <div>
                <button class="like"><img src="assets/img/heart.png" alt=""></button>
                <span>0</span>
              </div>
            </div>
          </li>*/