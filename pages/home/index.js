/* Desenvolva a lógica da página aqui */

const sugestionList = document.querySelector(".sugestion-list")
sugestionList.classList.add("flex")

//Função que seleciona quais usuarios aparecerão como sugestoes
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
buttonFollowsugestions()
}

listSugestionUser(users, sugestionList)

//Função de animção dos botões de follow
function buttonFollowsugestions(){
  const followButtons = document.querySelectorAll(".follow-button")

  for(let i = 0; i < followButtons.length; i++){
    let currentButton = followButtons[i]
    currentButton.addEventListener("click", () =>{
    currentButton.classList.toggle("follow-button")
    currentButton.classList.toggle("button-follow-on") ? currentButton.innerHTML = `Seguindo <i class="fa-solid fa-check"></i>` : currentButton.innerText = "Seguir"
    })
  }
}



//Função que cria sugestões de followw
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

//Função de listar os posts
function listPosts(listUser, listPost,ref){
    ref.innerHTML = ``
    for(let i = 0; i < listUser.length; i++){ 
        for(j = 0; j < listPost.length; j++){
            if(listUser[i].id == listPost[j].user){
                let = currentPost = listPost[j]
                let = currentUser = listUser[i]
                let = postDone = createPost(currentUser, currentPost)
                ref.append(postDone)
              }
            } 
          }
}

listPosts(users, posts, listPost)

//Função de criar posts padrão
function createPost(user, post){
    let userImg = user.img
    let userName = user.user
    let userStack = user.stack

    let postTitle = post.title
    
    let postLi = document.createElement("li")
    postLi.classList = "profile "
    
    postLi.innerHTML = `
    <div class=" div-profile flex align-center gap-1 pad-top-1">
      <img src="${userImg}" alt="imagem-Samuel">
      <div>
        <p>${userName}</p>
        <cite class="text-3">${userStack}</cite>
     </div>
  </div>
  <h2 class="post-title line-heigth pad-tb-1 ">${postTitle}</h2>
  <p class="post-description post-description-cut line-heigth" id="${post.id_post}">${post.text}</p>
  <div class="buttons flex align-center gap-1">
    <button data-modal-control="modal-post" id="${post.user}" class="open-post margin-tb-1" ">Abrir post</button>
    <div>
      <button class="like" id="${post.id_post}"><i class="fas fa-heart"></i></button>
      <span class="count" id="${post.id_post}">0</span>
    </div>
  </div>
    `
    return postLi
}

//Criando modal dinamico
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
          <div>
          <h2 class="post-title margin-tb-2">Como criar um interface simples e agradável utilizando boas práticas de design</h2>
          <p class="post-description">Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.</p>
          <button data-modal-control="modal-post" class="close-modal">X</button>
        </div>
    `

//Função para mostrar o modal e fechar.
function showCloseModal(){
  const dataModalToggle = document.querySelectorAll("[data-modal-control]")
  for(let i = 0; i <dataModalToggle.length; i++){
      dataModalToggle[i].addEventListener("click", function(event){
        
          let valueDataModalControl = dataModalToggle[i].getAttribute("data-modal-control")
          document.getElementById(valueDataModalControl).classList.toggle("show-modal")

          let idTarget = event.target.id
          let idPostTarget = event.target.parentElement.parentElement.children[2].id

          let postNew = posts.find((element) => {
              return element.user == idTarget ? true : false
          })

          let postText = posts.find((element) => {
            return element.id_post == idPostTarget
          })
          let userNew = users.find((element) => {
            return element.id == postNew.user
          })
          
          let modalImg    = document.querySelector(".div-profile img")
          let modalName   = document.querySelector(".div-profile div p")
          let modalStack  = document.querySelector(".div-profile div cite")

          let modalTitle = document.querySelector(".post-title") 
          let modalText  = document.querySelector(".post-description")

          modalImg.src = `${userNew.img}`
          modalName.innerText = `${userNew.user}`
          modalStack.innerText = `${userNew.stack}`

          modalTitle.innerText = `${postText.title}`
          modalText.innerText = `${postText.text}`
      })
  }
}
showCloseModal()




//Pegar as descrições do post feito pelo usuario e jogar no modal
let buttonNewPost = document.querySelector(".button-post").addEventListener("click", ()=>{
  let newPostTilte = document.getElementById("new-post-title").value
  let newPostDescription = document.getElementById("description").value
  createNewPost(newPostTilte,newPostDescription)
  listPosts(users, posts, listPost)
  showCloseModal()
  buttonLike()
})

//Função que lista o post feito pelo usuario logado
function createNewPost(postTitle, postDescription){
  showCloseModal()
  let newPost = {
    id_post: (posts.length + 1), 
    user: (users[0].id),
    title: postTitle,
    text: postDescription
  }
  posts.push(newPost)
  return posts
}

//função para o botão de like
function buttonLike(){
  const buttonLike = document.querySelectorAll(".like")
    buttonLike.forEach((element) => {
      //console.log(element.id)
      element.addEventListener("click", () => {
        element.classList.toggle("like-red")
        sumButtonLike(element)
      })
    })
}

buttonLike()

//Função que faz a soma do like no post
function sumButtonLike(post){
  const count = document.querySelectorAll(".count")
  for(let i = 0; i < count.length; i++){
    let countAtual = count[i]
    if(post.className.includes("like-red")){
      countAtual.innerText =  `${countAtual.id == post.id ? Number(countAtual.innerText) + 1 : countAtual.innerText} `
    }else{
      countAtual.innerText =  `${countAtual.id == post.id ? Number(countAtual.innerText) - 1 : countAtual.innerText}`
    }
  }
}
