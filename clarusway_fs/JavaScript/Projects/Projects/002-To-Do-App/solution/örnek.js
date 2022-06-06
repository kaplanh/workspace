function addUIItem(txt) {
  let li = document.createElement("li");
  li.innerHTML = txt;
  list.insertBefore(li, list.childNodes[0]);
  const delBtn = document.createElement("button");
  delBtn.textContent = "x"; // a button needs some text, a  simple  "x" should do for a "Delete button"
  delBtn.classList.add("fas", "fa-trash-alt");
  li.appendChild(delBtn);
  delBtn.addEventListener("click", (e) => {
    li.parentNode.removeChild(li); // remove from the UI
    savedTasks = savedTasks.filter((e) => e !== txt); // remove the in-memory element
    localStorage.setItem("tasks", JSON.stringify(savedTasks)); // store the new list in localStorage
  });
}
function addUIItem(txt) {
  let li = document.createElement("li");
  li.innerHTML = txt;
  list.insertBefore(li, list.childNodes[0]);
  const delBtn = document.createElement("button");
  delBtn.textContent = "x"; // a button needs some text, a  simple  "x" should do for a "Delete button"
  delBtn.classList.add("fas", "fa-trash-alt");
  li.appendChild(delBtn);
  delBtn.addEventListener("click", (e) => {
    li.parentNode.removeChild(li); // remove from the UI
    savedTasks = savedTasks.filter((e) => e !== txt); // remove the in-memory element
    localStorage.setItem("tasks", JSON.stringify(savedTasks)); // store the new list in localStorage
  });
}