import "./css/index.css";

const app = document.getElementById("app");
const div = document.createElement("div");

div.innerHTML = `
<div class="container">
<p>Hola Mundo</p>
</div>
`;
app.appendChild(div);

