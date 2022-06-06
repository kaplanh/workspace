// *localStorage
//! localStorage verileri bir kullanıcının bilgisayarında yerel olarak depolamak için kullanılan genel bir nesnedir.

// ! Verileri kullanıcının web tarayıcısı tarafından erişilebilecek şekilde depolamak için kullanılır.
    
//! localStorage, bir key - value depolama sistemidir.

// !5MB limiti vardır.

// *localStorage yöntemleri şunlardır:
// !1-setItem(key, value);localStorage'e yeni bir key/value çifti yerlestirmek için
// ?örnek: localStorage.setItem("name", "John");

//!2-getItem(key)  localStorage den bir key' in value'sunu almak için
// ?örnek:localStorage.getItem('name');

// !3-removeItem(key);localStorage den bir key/value çiftini kaldırmak için
// ?örnek:localStorage.removeItem('name');

// !4-clear() tüm anahtar/değer çiftlerini temizlemek için
// ?örnek:localStorage.clear();

// *Uygulamamız aşağıdaki adımlarda çalışacak:

//! 1 - Load tasks - Görevleri yükle: Sayfa yüklendiğinde uygulama, localStorage'da herhangi bir görev olup olmadığını kontrol eder. Herhangi bir görev varsa, bunları gösterecektir.


// !2 - Add task Görev ekle: Kullanıcı ekle düğmesine tıkladığında, uygulama görevi listeye ekler ve localStorage'da saklar.


// !3 - Edit task - Görevi düzenle: Kullanıcı görevin kendisine tıkladığında görevi düzenleyebilir ve görevden focus'u kaldırdıklarında uygulama, görevi localStorage'da günceller.



//!4-Mark complete - Tamamlandı olarak işaretle: Kullanıcı onay kutusunu tıkladığında, uygulama görevi tamamlandı olarak işaretler ve onu localStorage'da saklar.


//! 5-Remove task-Görevi kaldır: Kullanıcı çöp kutusu düğmesini tıkladığında, uygulama görevi listeden kaldırır ve ayrıca localStorage'dan kaldırır.

// *Yukarıda bahsedilen görevlerin her biri için bir fonksiyon oluşturmalı ve kullanıcı eylemi gerçekleştirdiğinde onu çağırmalıyız.



// *1-Kullanıcı sayfayı ilk yüklediğinde, localStorage'da herhangi bir görev olup olmadığını kontrol etmemiz gerekiyor. Herhangi bir görev varsa, onu göstermemiz gerekir.

// element.addEventListener(olay, fonksiyon)
// HTML olayları için bir çok örnek verilebilir
// •
// Kullanıcı Fareyi tıkladığında onclick
// •
// Bir web sayfası yüklendiğinde onload
// •
// Fare bir elemanın üzerine geldiğinde onmouseover
// •
// Fare bir elemanın üzerinden ayrıldığında onmouseout
// •
// Bir elemanın içeriği değiştiğinde onchange
// •
// Bir HTML formu gönderildiğinde onsubmit
// •
// Klavyeden bir tuşa basıldığında onkeyup
//Bir kullanıcı bir giriş alanından ayrıldığında bir JavaScript yürütün  onblur

// *--------------------------------------------------------1 - Uygulama yüklendiğinde tüm görevleri localStorage'dan almak icin ------------------------------------------------------
// element.addEventListener(olay, fonksiyon)
window.addEventListener("load", () => {
  //set item to localStorage
  localStorage.setItem("tasks", loadTasks);//sen silmedigin müddetce orda kalir
  //set item to localStorage
  //* sessionStorage.setItem("tasks", loadTasks);
  //oturum kapatildiginda sessiondaki veriler silinir önemli veriler icin bunu kullanmak lazim  
})//sayfa yenilendiginde veya baska bir sayfaya gectigimizde sayfa load olur

window.onload = loadTasks;
function loadTasks() {
  //! Görevleri localStorage'dan alıp ve bir array-diziye dönüştür

  // *---------JSON---------
  // !array icindeki Objectler örnek:
  // let text =
  //   '{ "employees" : [' +
  //   '{ "firstName":"John" , "lastName":"Doe" },' +
  //   '{ "firstName":"Anna" , "lastName":"Smith" },' +
  //   '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
  // !Bu JSON u kullanabilmek icin array'i bir JavaScript nesnesine dönüştürmek gerekir bunun için JSON.parse() yerleşik JavaScript işlevini kullanmaliyiz:

  // ?const obj = JSON.parse(text);

  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  //   !let text = "ABCDEFG"
  //! const myArr = Array.from(text);A,B,C,D,E,F,G



  // *------------------------------------------------------Tasklar-Görevler arasında dolaşıp ve bunları listeye eklemek icin ---------------------------------------------------



  tasks.forEach((task) => {
    const list = document.querySelector("ul"); //!document.querySelector(CSS seçici)
    // !Bir elemanı id, class, özellik, tür ve değere göre seçmek için kullanılır Eşleşen ilk elemanı seçer

    // !  document.querySelectorAll(CSS seçici) Bir
    // !elemanı id, class, özellik, tür ve değere göre seçmek için kullanılır Eşleşen elemanların listesini döndürür
    const li = document.createElement("li"); //!document.createElement(isim)
    // !Yeni bir eleman oluşturur.
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${
      task.completed ? "checked" : ""
    }>//!element.innerHTML = yeni içerik 
    // !Bir HTML elemanın içeriğini değiştirir
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

// *-------------------Task add-Görev ekleme işlevi-------------

// !Yeni bir görev eklemek için önce 'addTask' adında bir javascript fonksiyonu oluştur.
  
//  !Önce fonksiyon içinde, görevin boş olup olmadığını kontrol et. Boşsa geri dön ve kullanıcıyı alert-uyar. 

//! Ardından görevin listede olup olmadığını kontrol et. Varsa, tekrar geri dön ve kullanıcıyı alert-uyar.

// !Görev listede yoksa, görevi listeye ekle ve localStorage'da sakla.


// !Görev boş değilse, yeni bir li öğesi oluştur ve innerHTML'sini liste öğesi için HTML koduyla ayarla ve görev değerini backticks-ters tik kullanarak içine koy.

// !Şimdi oluşturulan liste öğesini insertBefore yöntemini kullanarak listenin başına ekle.
  
  // !Son olarak, eklenecek bir sonraki görev için clear input - giriş bölümünü temizle
  


function addTask() {
  const task = document.querySelector("form imput");
  const list = document.querySelector("ul");
  //görev boşsa return-dön
  if (task.value === "") {
    alert("Please add some task!");
    return false;
  }
  // check görev zaten var
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  // check görev zaten var
  tasks.forEach(todo => {
    if (todo.task === task.value) {
      alert("Task already exist!");
      task.value = "";
      return;
    }
  });
  // localStorage'e task- görev ekle
//  ! JSON'un yaygın bir kullanımı, bir web sunucusuna/sunucudan veri alışverişi yapmaktır. Bir web sunucusuna veri gönderirken, verinin bir string-dize olması gerekir. JSON.stringify() ile bir JavaScript nesnesini bir dizgeye dönüştürün.
//  * örnek:
// !  const obj = {name: "John", age: 30, city: "New York"};
  //! const myJSON = JSON.stringify(obj);
  // ?{ "name": "John", "age": 30, "city": "New York" }



  localStorage.setItem("tasks", JSON.stringgify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));
  // liste öğesi oluştur, innerHTML ekle ve ul'ye ekle
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" clas="check">
  <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
  list.insertBefore(li, list.children[0]);
  // clear input
  task.value = "";
}
  
// !Ayrıca, addTask fonksiyonunu çağırmak için forma bir submit event listener-gönderme olay dinleyicisi ekleyin

document.querySelector("form").addListener("submit", e => {
  e.preventDefault();//!Bir linkin-bağlantının URL'yi açmasını önler
  addTask();
});

//* --------------------------------                Görevi edit-düzenleme fonksiyonu ------------------------------------

// !1-Önce değişikliği izlemek için düzenlenmekte olan mevcut görevi kaydet. Böylece kullanıcı giriş alanına odaklandığında, mevcut görev currentTask değişkeninde saklanır.

// !2-Şimdi görevin listede olup olmadığını kontrol et. Eğer oradaysa, tekrar geri dön ve kullanıcıyı alert-uyar.
  
  
// !3-Görev listede yoksa görevi düzenle ve localStorage'da sakla.

// değişiklikleri izlemek için mevcut görevi sakla
var currentTask = null;
// ?? neden var ile tanimlaniyor ama const ile tanimlanmiyor?

//mevcut görevi al
function getCurrentTask(event) {
  currentTask = event.value;
}

//görevi düzenle ve yerel depolamayı güncelle
function editTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  // görevin boş olup olmadığını kontrol et

  if (event.value === "") {
    alert("Task is empty!");
    event.value = currentTask;
    return;   
  }
//görev zaten var
  tasks.forEach((task) => {
    if (task.task === event.value) {
      alert("Task already exist!");
      event.value = currentTask;
      return;
    }
  });
  //local storage güncelle

  localStorage.setItem("tasks", JSON.stringify(tasks));
}


// *--------------------------------                 Görevin tamamını tamamlandi olarak işaretleme fonksiyonu                        ---------------------------------

// !TaskComplete fonksiyonu, görevi tamamlanmış bir görev olarak işaretler.

// !fonksiyon, öğenin classList property  aracılığıyla toggle yöntemini kullanarak listenin <span> element-öğesinde temel olarak bir CSS sınıfı 'complete' arasında geçiş yapar
  // ? classList
  // ?<span>
  // ?toggle

  //! fonksiyon, görevin completed property-tamamlanmış özelliğini güncelleyerek localStorage'de günceller.
  function taskComplete(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach((task) => {
      if (task.task === event.nextElementSibling.value) {
        task.completed = !task.completed;//?ne anlama geliyor
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.nextElementSibling.classList.toggle("completed");
    //toggle gecis yapar
  }


  // *-------------------------------              Görevin tamamını silme fonksiyonu                           ------------------------------------

// !Çöp düğmesi burada görevi silmek için kullanılır. Önceki fonksiyonla aynı olay parametresi çöp düğmesine işaret eder.

//! Son olarak, görevi listeden kaldırarak yerel depolamayı güncelle.

function removeTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem(&quot;tasks&quot;)));
  tasks.forEach(task =&gt; {
    if (task.task === event.parentNode.children[1].value) {
      // delete task
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem(&quot;tasks&quot;, JSON.stringify(tasks));
  event.parentElement.remove();
}





