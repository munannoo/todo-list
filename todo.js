let todoList
// let lists = document.querySelectorAll('li')
// console.log(lists)
let listContainerDom = document.getElementById('lists_container')
let txt = document.getElementById('txt_list')
let add_btn = document.getElementById('btn_list')

let add_todo = () => {
  let toDo = txt.value
  let todoList = document.createElement('li')
  todoList.classList.add('todo')
  todoList.innerHTML = `
  <input type="checkbox" class="checkbox" onclick="removeList()">
  <h4>${toDo}</h4>`

  listContainerDom.appendChild(todoList)
  txt.value = ''
}

let removeList = () => {
  listContainer = listContainerDom.children 
  for (const lists of listContainer) {
    if (lists.children[0].checked === true) {
      lists.parentNode.removeChild(lists)
    }
  }
}


add_btn.addEventListener('mousedown', add_todo)

