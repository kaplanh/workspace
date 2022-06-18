//* ===========================================================
//*                          3- FETCH API
//*=============================================================
//! https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods den bakabilirsin

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.


// !then() başarılı işlem sonucunu yakalıyor
// !catch () hata yakalıyor
// !fetch() in içinde başarılı işlem sonucu kendi içinde resolve() çağırılıyor ve resolve tarafından dönen veriyi biz then() içinde kullanacağımız ismini bu örnekte res dedik


// fetch("https://api.github.com/users")
//     .then((res) => {res.json())
//     .then((data)=> console.log(data))
//     .catch((err) => console.log(err));

    //!fetch in çalışma mantığı şu ben sunucuya ulaştım bana cevap geldi ben işimi yaptım gibi kabul ediyor ulasamazsa catch ye girer


    

//    fetch("https://api.github.com/user")
//        .then((res) => {
//            if (!res.ok) {
//                throw new Error(`Something went wrong: ${res.status}`);
//            }
//            return res.json();
//        })
//        .then((data) => {
//            dataFromAPI = data;
//            console.log(dataFromAPI);
//        })
//     .catch((err) => console.log(err));




// !fetch("https://api.github.com/users",method);get, post, put, delete virgülden sonraki kisma birsey yazmazsak default olarak get alir

fetch("https://api.github.com/users")
  .then((res) => {
    //! error handling catch sadece ulasamazsa error döndürdügünde hata veriyordu diger hata durumlari icin if koyduk
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => updateDom(data))
  .catch((err) => console.log(err));

const updateDom = (data) => {
  const userDiv = document.querySelector(".users");

  data.forEach((user) => {
    // !destr
    const { login, avatar_url, html_url } = user;
    userDiv.innerHTML += `
    <h2 class="text-warning">NAME:${login}</h2>
    <img src=${avatar_url} width="50%" alt="" />;
  `;
  });
};
