
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const table = document.getElementById("alicuotas");
const url = 'http://127.0.0.1:8000/mensajes/mismensajes/';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data;
 
  return authors.forEach((e,i) => {    //< ---  recorremos data

    let tr = document.createElement("tr"); //< ---  creamos una fila
    
    let td = document.createElement("td"); //< ---  Hacemos columna index dentro de la fila
    td.classList.add("index");
    td.innerHTML = i;
    tr.appendChild(td); //< --- Agregamos la columna en la fila
  
    for (p in e) {  //< ---  recorremos cada propiedad de cada elemento
  
      let td = document.createElement("td"); //< ---  Hacemos columna dentro de la fila
      td.classList.add(p);//<-- le podemos agregar a toda la columna la misma clase
      td.innerHTML = e[p]; 
  
      tr.appendChild(td); //< --- Agregamos la columna en la fila
  
    }
  
    table.appendChild(tr); //< --- Agregamos la fila a la tabla
  
  });


})

const cards = document.getElementById("tarjeta");

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data;
 
  return authors.forEach((e) => {    //< ---  recorremos data

    //let tr = document.getElementById("tarjeta"); //< ---  creamos una fila
    
    let td = document.createElement("li"); //< ---  Hacemos columna index dentro de la fila
    //td.classList.add("index");
    td.innerHTML = e;
    //tr.appendChild(td); //< --- Agregamos la columna en la fila
    let pos=0
    for (p in e) {  //< ---  recorremos cada propiedad de cada elemento
  
      let td = document.createElement("li"); //< ---  Hacemos columna dentro de la fila
      td.classList.add("list-group-item");//<-- le podemos agregar a toda la columna la misma clase
      if (pos =1) {
        
        //console.log( authors[pos]['mensaje'])
        console.log(e);
        td.innerHTML = e[p];
        // console.log(authors)
      };
      //
      
      
      pos=pos + 1


      //tr.appendChild(td); //< --- Agregamos la columna en la fila
      cards.appendChild(td);
    }
    
     //< --- Agregamos la fila a la tabla
  
  });


})



// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// const ul = document.getElementById('authors');
// const url = 'https://randomuser.me/api/?results=10';

// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let authors = data.results;
//   return authors.map(function(author) {
//     let li = createNode('li');
//     let img = createNode('img');
//     let span = createNode('span');
//     img.src = author.picture.medium;
//     span.innerHTML = `${author.name.first} ${author.name.last}`;
//     append(li, img);
//     append(li, span);
//     append(ul, li);
//   })
// })
// .catch(function(error) {
//   console.log(error);
// });