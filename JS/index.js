

   //שם משתמש 
let name = sessionStorage.getItem("x");
let welcome = document.getElementById("welcome");

if (welcome) {
  welcome.innerHTML = `
    <span>${name ? name : 'אורח'}</span>
    <span>&nbsp;|&nbsp;</span>
    <button id="logoutButton" style="background:none; border:none; padding:0; cursor:pointer;">יציאה</button>
  `;

  //קשור לכפתור יאציאה שימחוק את המשתמש שנכנס ולא ישאר בכלל מוסיף  בכל מקרה שהכפתור קיים
  let logoutBtn = document.getElementById('logoutButton');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      sessionStorage.clear();
      localStorage.removeItem('user');
      location.reload();
    });
  }
}
///פונקציה לכפתור של התחברות מאמצע הדף
 function login(){

window.location = "./Login.html";

}
