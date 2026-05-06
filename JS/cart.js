
//הוספת מוצר לסל

function add(event) {


  console.log('כפתןר')

  let arrP = []

  let alljson = localStorage.getItem('product')

  // נקבל את המיקום במערך
 let b = event.currentTarget.getAttribute('data-index')

  if (alljson == null) {
    shoes[b].amount = 1 // כמות התחלתית
    arrP.push(shoes[b])
    alljson = JSON.stringify(arrP)
    localStorage.setItem('product', alljson)
  } else {
    arrP = JSON.parse(alljson)
    let i = 0
    for (i = 0; i < arrP.length; i++) {
      if (arrP[i].id == shoes[b].id) {
        arrP[i].amount++
        break
      }
    }
    if (i == arrP.length) {
      shoes[b].amount = 1
      arrP.push(shoes[b])
    }
    alljson = JSON.stringify(arrP)
    localStorage.setItem('product', alljson)
  }
  alert("המוצר נוסף לסל")

  displayCart()
}




//הצגת המוצרים בסל

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('product'));
  let totalSumElement = document.getElementById('totalSum');
  let cartContainer = document.getElementById('cartContainer');
  cartContainer.innerHTML = '';

  if (!cart || cart.length === 0) {
    cartContainer.innerText = 'העגלה ריקה';
    return;
  }

  let totalSum = 0

  cart.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    let itemTotal = item.price * item.amount;
    totalSum += itemTotal;

    itemDiv.innerHTML = `
      <div class="buttons">
        <span class="delete-btn" onclick="deleteItem(${item.id})"></span>
      </div>
      <div class="image">
        <img src="${item.image1}" width="100" />
      </div>
      <div class="description">
        <span>${item.name}</span>
        <span>${item.category}</span>
      </div>
      <div class="quantity">
        <button class="plus-btn" onclick="changeAmount(${item.id}, 1)">+</button>
        <input type="text" value="${item.amount}" readonly>
        <button class="minus-btn" onclick="changeAmount(${item.id}, -1)">-</button>
      </div>
      <div class="total-price">${item.price * item.amount} ש"ח</div>
    `;



    cartContainer.appendChild(itemDiv);
  });

 


   if (totalSumElement) {
    totalSumElement.innerText = `סה"כ: ${totalSum} ש"ח`;
  }
   console.log("totalSumElement:", totalSumElement);
  console.log("totalSum:", totalSum);
}
 displayCart()

// פונקציה לשינוי כמות
function changeAmount(id, change) {
  let cart = JSON.parse(localStorage.getItem('product'));
  let item = cart.find(p => p.id == id);

  if (item) {
    item.amount += change;
    if (item.amount < 1) item.amount = 1;
    localStorage.setItem('product', JSON.stringify(cart));
    displayCart();
  }
}

// פונקציה למחיקת מוצר
function deleteItem(id) {
  let cart = JSON.parse(localStorage.getItem('product'));
  cart = cart.filter(p => p.id != id);
  localStorage.setItem('product', JSON.stringify(cart));
  displayCart();
}



///כפתור לתשלום
document.getElementById('payButton').addEventListener('click', function() {
  let user = localStorage.getItem('user');

  // בדיקה אם המשתמש קיים
  if (!user || user.trim() === '') {
    alert('יש להירשם לפני ביצוע תשלום');
    window.location.href = 'register.html';
    return;
  }

  // בדיקה אם העגלה ריקה
  let cart = JSON.parse(localStorage.getItem('product'));
  if (!cart || cart.length === 0) {
    alert('העגלה ריקה, אין אפשרות לשלם');
    return;
  }

  // אם יש משתמש והעגלה לא ריקה - מבצעים תשלום


  let message = document.getElementById('paymentMessage')
  message.innerText = 'המשלוח בדרך!'
  message.style.opacity = 1

  // ניקוי העגלה
  localStorage.removeItem('product')
  displayCart(); // רענון העגלה

  setTimeout(() => {
    message.style.opacity = 0;
    window.location.href = 'index.html';//שולחים בחזרה לדף הבית
  }, 3000);
})






