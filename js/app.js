let urlApi = 'https://jsonplaceholder.typicode.com';

// variables
const btn = document.getElementById('getInfo');
const content = document.getElementById('content');

// Funciones
const getUser = async (id) => {
  const response = await fetch(`${urlApi}/users/${id}`);
  const user = await response.json();
  return user;
}

const getAlbumUser = async (id) => {
  const response = await fetch(`${urlApi}/users/${id}/albums`)
  const albums = await response.json();
  return albums;
};

const ShowUserInfo = async (user, albums) => {
  const { name, username, email, phone, address } = user;
  let HTML = `
    <div class="album">
      <h3 class="title"><strong>Name</strong>: ${name}</h3>
      <p class="description"><strong>username</strong>: ${username}</p>
      <p class="description"><strong>Email</strong>: ${email}</p>
      <p class="description"><strong>Phone</strong>: ${phone}</p>
      <p class="description"><strong>City</strong>: ${address.city}</p>
      <button class="btn" id="getAlbumUser">Obtener Albunes</button>
      <div class="conteiner" id="conteiner"></div>
    </div>`;
    content.innerHTML += HTML;
    // Nueva funcionalidad 
    // ~~~~~~~~~~~~~~~~~~~~~~~~~;
    // const userAlbum = document.querySelectorAll('#getAlbumUser');
    // userAlbum.forEach(item => {
    //   item.addEventListener('click', () => {
    //     albums.map(element => {
    //       let CODEHtml = `
    //       <div class="userAlbums">
    //         <p class="description">Album: ${element.title}</p>
    //       </div>
    //       `;
    //       const conteiner = document.getElementById('conteiner')
    //       return conteiner.innerHTML += CODEHtml;
    //     });
    //   });
    // });
};

// funcion global
const getInfo = async (id) => {
  try {
    const user = await getUser(id);
    const album = await getAlbumUser(id);
    const info = await ShowUserInfo(user, album);
  } catch (error) {
    console.log(`Lo sentimos el usuario no existe: ${error}`)
  }
};

// Inicializacion
let id = 1;
btn.onclick = () => getInfo(id++);