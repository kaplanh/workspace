const taskInput = document.querySelector(".taskinput");
// const silBtn = document.getElementById('sil');
const submitBtn = document.getElementById("submit");

const tasksSectıon = document.querySelector("#taskssectıon");

const ul = document.querySelector("ul");
const li = document.createElement('li');
ul.appendChild(li);

submitBtn.onclick = function () {
    if (!taskInput.value) {
        alert("Please add some task!");
    } else {
        ul.innerHTML += ` <li>${tasksInput.value}</li>`;
        taskInput.value = "";
        javascriptKontrol();
        
    }
   

};


   li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${
      task.completed ? "checked" : ""
       }>
              <input type="text" value="${task.task}" class="task ${
      task.completed ? "completed" : ""
    }" onfocus="getCurrentTask(this)" onblur="editTask(this)">
          <i class="fa fa-trash" onclick="removeTask(this)"></i>`; 
    list.insertBefore(li, list.children[0]);
    //!element.insertBefore(new, existing) veya 
    //!node.insertBefore(new, existing)
    // !new:Eklenecek node - düğüm(element - öğe). 
    // !existing-mevcut:öncesine eklenmesini istedigimiz  düğüm(öğe). bu kisma null yazarsak,sona eklenir.
  });
}
