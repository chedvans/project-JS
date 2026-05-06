


function getName(event) {
  event.preventDefault()

  // ניקוי המשתמש הקודם
  // localStorage.removeItem('user')

  let inputs = document.getElementsByTagName("input");
  let person = {
    email: inputs[0].value,
    password: inputs[1].value,
  };

  let allJson = localStorage.getItem("people");
  let allpeople = JSON.parse(allJson) || [];
  let userFound = false;

  for (let index = 0; index < allpeople.length; index++) {
    let User = allpeople[index];
    if (User.email == person.email) {
      userFound = true;
      if (User.password == person.password) {
        sessionStorage.setItem("x", User.name);
        sessionStorage.setItem("email", User.email);

        // שמירה ב-localStorage לבדיקה בתשלום
        localStorage.setItem("user", User.name);

        window.location = "./index.html";
        return //  עוצרים את הפונקציה
      } else {
        inputs[1].value = "" // מנקים את הסיסמה
        alert("סיסמה שגויה")

        // גם אם הסיסמה שגויה - נוודא שהמשתמש לא יישמר בטעות
        localStorage.removeItem('user')
        return
      }
    }
  }

  // אם לא מצאנו אף משתמש עם המייל הזה
  if (!userFound) {
    alert("אינך רשום, הירשם")
    window.location = "register.html"
    return
  }
}
function saveName(event) {
  event.preventDefault()

  // קבלת הנתונים מהשדות
  let details = document.getElementsByClassName('p')

  let person = {
    name: details[0].value,
    email: details[1].value,
    password: details[2].value,
     cart: []
  }
  console.log("משתמש:", person)

  // קבלת הרשימה הקיימת או יצירת רשימה חדשה
  let allPeople = JSON.parse(localStorage.getItem("people")) || []
let one=false
let i;
for(i=0;i<allPeople.length;i++){
  if(allPeople[i].email==person.email)
    one=true;
}
if(one){
    alert("הינך רשום, אנא התחבר")
    window.location = "Login.html"
    return
}else{
    allPeople.push(person)
    localStorage.setItem("people", JSON.stringify(allPeople))
    alert("נרשמת בהצלחה!")

    // שמירה ב-sessionStorage למשתמש מחובר
    sessionStorage.setItem("x", person.name)
    sessionStorage.setItem("email", person.email)

    // שמירה ב-localStorage לבדיקה בתשלום
    localStorage.setItem("user", person.name)

    window.location = "./index.html";
}}