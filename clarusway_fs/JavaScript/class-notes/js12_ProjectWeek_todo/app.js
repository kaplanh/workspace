//* ======================================================
//*                     TODO APP
//* ======================================================
const btn = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-ul');

window.onload = function () {
  todoInput.focus();
};

btn.addEventListener('click', (e) => {
  console.log(todoInput.value);
  todoUl.innerHTML += `
    <li>
      <i class="fa fa-check"></i>
      <p>${todoInput.value}</p>
      <i class="fa fa-trash"></i>
    </li>`;
  todoInput.value = '';
});

todoInput.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.key === 'Enter') {
    btn.click();
  }
});

todoUl.addEventListener('click', (e) => {
  //!Event, sil butonlarının birisinden geldi ise
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains('fa-check')) {
   
  }
});


//! event.target.parentElement.classList.toggle("checked");toggle=>içine verdiğimiz classı kontrol eder varsa kaldırır yoksa ekler
// !nputa maxlength vererek kısıtlayadabilirsiniz maksimum karakter sayısını:sweat_smile:
