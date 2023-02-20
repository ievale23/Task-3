/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

let outputBox = document.getElementById("output");

async function showUsers() {
  try {
    let response = await fetch("https://api.github.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      let result = await response.json();
      console.log(result);

      let login = document.createElement("div");
      login.textContent = result.login;

      let avatar = document.createElement("img");
      avatar.src = result.avatar_url;

      outputBox.append(login, avatar);
    }
  } catch (error) {
    console.log(error);
  }
}

function trinamUzrasa() {
  outputBox.textContent = "";
}

document.querySelector("#btn").addEventListener("click", showUsers);

// fetch(ENDPOINT)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.error(error));
