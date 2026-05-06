



function store() {
   document.getElementById("home").style.display = "none";
  let section = document.getElementsByTagName('section')[0];
  section.innerHTML = "";

  for (let i = 0; i < shoes.length; i++) {
    let div = document.createElement('div');
    div.className = 'div-card';

    let img = document.createElement('img');
    img.src = shoes[i].image1;

   let button = document.createElement('button');
button.classList.add('add-to-cart-button');
button.innerHTML = `
  <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
`;
button.setAttribute('data-index', i);
button.addEventListener('click', add)


 let button2 = document.createElement('button')
 button2.innerText = 'MORE'
 button2.classList.add('more-button')
 button2.addEventListener('click', function () { more(shoes[i].id) })

    let price = document.createElement('p')
    price.innerText = ` ₪${shoes[i].price}`

    let name = document.createElement('h3')
    name.innerText = shoes[i].name

    let category = document.createElement('p');
    category.innerText = `קטגוריה: ${shoes[i].category}`;

 

    let brand = document.createElement('p');
    brand.innerText = ` ${shoes[i].brand}`;

    div.appendChild(name);
    div.appendChild(img);
    div.appendChild(price);
    div.appendChild(category)
    div.appendChild(brand);
    div.appendChild(button);
    div.appendChild(button2);
    section.appendChild(div);
     
  }
}




function showCategory(category) {
   document.getElementById("home").style.display = "none";
  let section = document.getElementsByTagName('section')[0];
  section.innerHTML = "";

  for (let i = 0; i < shoes.length; i++) {
    if (shoes[i].type === category) {
      let div = document.createElement('div');
      div.className = 'div-card';

      let img = document.createElement('img');
      img.src = shoes[i].image1;

      let button = document.createElement('button');
button.classList.add('add-to-cart-button');

button.innerHTML = `
  <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
`;

button.setAttribute('data-index', i);
button.addEventListener('click', add)

       let button2 = document.createElement('button')
 button2.innerText = 'MORE'
 button2.classList.add('more-button');
button2.addEventListener('click', function () { more(shoes[i].id) })


      

      let price = document.createElement('p');
      price.innerText = ` ₪${shoes[i].price} `;

      let name = document.createElement('h3');
      name.innerText = shoes[i].name;

      let type = document.createElement('p');
      type.innerText = `סוג: ${shoes[i].type}`;

      let brand = document.createElement('p');
      brand.innerText = ` ${shoes[i].brand}`;

      div.appendChild(name);
      div.appendChild(img);
      div.appendChild(price);
      div.appendChild(brand);
      div.appendChild(button);
      div.appendChild(button2);
      section.appendChild(div);
    }
  }
}

function showBrand(category) {
   document.getElementById("home").style.display = "none";
  let section = document.getElementsByTagName('section')[0];
  section.innerHTML = "";

  for (let i = 0; i < shoes.length; i++) {
    if (shoes[i].brand === category) {
      let div = document.createElement('div');
      div.className = 'div-card';

      let img = document.createElement('img');
      img.src = shoes[i].image1;

      let button = document.createElement('button'); ///כפתור הוספה לסל
button.classList.add('add-to-cart-button');

button.innerHTML = `
  <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
`;

button.setAttribute('data-index', i);
button.addEventListener('click', add); // תחליפי לפונקציה שלך


      let button2 = document.createElement('button')
 button2.innerText = 'MORE'
 button2.classList.add('more-button');
button2.addEventListener('click', function () { more(shoes[i].id) })

      let price = document.createElement('p');
      price.innerText = ` ₪${shoes[i].price} `;

      let name = document.createElement('h3');
      name.innerText = shoes[i].name;

      let type = document.createElement('p');
      type.innerText = `סוג: ${shoes[i].type}`;

      let brand = document.createElement('p');
      brand.innerText = ` ${shoes[i].brand}`;

      div.appendChild(name);
      div.appendChild(img);
      div.appendChild(price);
      div.appendChild(type);
      div.appendChild(brand);
      div.appendChild(button);
      div.appendChild(button2);
      section.appendChild(div);
    }
  }
}