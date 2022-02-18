const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 표기

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막는 코드
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; //동일한 결과 string안에 변수 값을 표현하는 방법
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);