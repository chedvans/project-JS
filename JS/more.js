
///קשור לדרוג של הנעל 

function createStarsHTML(reviews) {
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
        sum += reviews[i].rating;
    }
    let avgRating = sum / reviews.length;

    let starsHTML = '';
    let fullStars = Math.floor(avgRating);
    let halfStar = avgRating % 1 >= 0.5;

    // קודם מחושב כמה כוכבים ריקים יש
    let emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    // כוכבים מלאים בצבע זהב
    for (let i = 0; i < fullStars; i++) {
        starsHTML += `<i class="far fa-star" style="color: gold;"></i>`;
    }

    // חצי כוכב אם צריך
    if (halfStar) {
        starsHTML += `<i class="fas fa-star-half-alt" style="color: gold;"></i>`;
    }

    // כוכבים ריקים בצבע אפור
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += `<i class="fas fa-star" style="color: lightgray;"></i>`;
    }

    return `<div class="product-rating">${starsHTML}<span>${avgRating.toFixed(1)} (${reviews.length})</span></div>`;
}


//פונקציה שמראה את פרטי הנעל 
function showDetails(shoe) {
    let section = document.querySelector('section');
    section.innerHTML = `
    <div class="card-wrapper">
        <div class="card">
            <div class="product-imgs">
                <div class="img-display">
                    <div class="img-showcase">
                        <img src="${shoe.image1}" alt="shoe image">
                        <img src="${shoe.image2}" alt="shoe image">
                        <img src="${shoe.image3}" alt="shoe image">
                        <img src="${shoe.image4}" alt="shoe image">
                    </div>
                </div>
                <div class="img-select">
                    <div class="img-item">
                        <a href="#" data-id="1">
                            <img src="${shoe.image1}" alt="shoe image">
                        </a>
                    </div>
                    <div class="img-item">
                        <a href="#" data-id="2">
                            <img src="${shoe.image2}" alt="shoe image">
                        </a>
                    </div>
                    <div class="img-item">
                        <a href="#" data-id="3">
                            <img src="${shoe.image3}" alt="shoe image">
                        </a>
                    </div>
                    <div class="img-item">
                        <a href="#" data-id="4">
                            <img src="${shoe.image4}" alt="shoe image">
                        </a>
                    </div>
                </div>
            </div>
            <div class="product-content">
                <h2 class="product-title">${shoe.name}</h2>
                <a href="#" class="product-link">visit ${shoe.brand} store</a>
                ${createStarsHTML(shoe.reviews)}

                <div class="product-price">
                    <p class="last-price">Old Price: <span>₪${shoe.price + 50}</span></p>
                    <p class="new-price">New Price: <span>₪${shoe.price}</span></p>
                </div>

                <div class="product-detail">
                    <h2>About this item:</h2>
                    <p>${shoe.description}</p>
                    <h3>Reviews:</h3>
                    <p>${shoe.reviews[0].comment}</p>
                    <ul>
                        <li>Color: <span>${shoe.color}</span></li>
                        <li>Category: <span>${shoe.category}</span></li>
                        <li>Type: <span>${shoe.type}</span></li>
                        <li>Shipping: <span>Free</span></li>
                    </ul>
                </div>

                <div class="purchase-info">
                    <input type="number" min="0" value="1">
                    <button type="button" class="btn">Add to Cart <i class="fas fa-shopping-cart"></i></button>
                    <button type="button" class="btn">Compare</button>
                </div>
            </div>
        </div>
    </div>
    `;

    activateSlider();
}

// פונקציה שמטפלת בפעולה של מעבר התמונות
function activateSlider() {
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage(imgId);
        });
    });

    window.addEventListener('resize', () => slideImage(imgId));
}

// פונקציה שמזיזה את התמונות
function slideImage(imgId) {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
}

// פונקציה שנקראת כשאת לוחצת על כפתור "More"
function more(id) {
     document.getElementById("home").style.display = "none";
    let shoe = null;

    for (let i = 0; i < shoes.length; i++) {
        if (shoes[i].id === id) {
            shoe = shoes[i];
            break;
        }
    }

    if (shoe) {
        showDetails(shoe)    //פה יש שימוש בפונקציית פרטי הנעל 
    } else {
        alert("אין כזה נעל") ///אף פעם לא יקרה
    }
}


