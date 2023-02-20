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
      outputBox.textContent = "";
      let result = await response.json();
      console.log(result);

      result.forEach((element) => {
        let cardBox = document.createElement("div");
        cardBox.id = "cardBox";

        let avatar = document.createElement("img");
        avatar.src = element.avatar_url;

        let login = document.createElement("div");
        login.textContent = element.login;

        cardBox.append(avatar, login);
        outputBox.append(cardBox);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("#btn").addEventListener("click", showUsers);

// fetch(ENDPOINT)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.error(error));
