const display = document.querySelector('.display');
document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        genereteRandomAnimal();
    }
});

const genereteRandomAnimal = async () => {
    let url = 'https://zoo-animal-api.herokuapp.com/animals/rand';
    // let res = await fetch(url);
    // let data = await res.json();
    const res = await axios.get(url);
    renderAnimal(res);
       
};

const renderAnimal = (res) => {
    
    const { name, latin_name, animal_type, geo_range, image_link, habitat } = res.data;
    display.innerHTML = `<ul>
    <li class='img-container'><img src="${image_link}" alt="img" width="50%"/></li>    <li>Name: ${name}</li>    <li>Type: ${animal_type}</li>    <li>Geo Range: ${geo_range}</li>    <li>Habitat: ${habitat}</li>    <li>Latin Name: ${latin_name}</li>  </ul>`;
};

setInterval(genereteRandomAnimal, 5000);
