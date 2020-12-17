import "./css/index.css";
import text from './js/navbar'
const app = document.getElementById("app");
const div = document.createElement("div");

div.innerHTML = `
<div class="container">
<p>Hola Mundo</p>
${text}
</div>
`;
app.appendChild(div);

