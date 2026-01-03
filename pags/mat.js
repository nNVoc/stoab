var itens = document.querySelectorAll("ul>li");
var li2nds = document.querySelectorAll(".li-2nd");

itens.forEach((item, i) => {
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    checkbox.type = "checkbox";
    checkbox.id = "item-" + i;
    checkbox.name = "item-" + i;
    label.innerText = item.innerText;
    item.innerText = '';
    item.setAttribute("class", "item")
    item.setAttribute("id", "itemi-" + i)
    label.appendChild(checkbox);
    item.appendChild(label);

    checkbox.addEventListener("change", () => {
        item.classList.toggle("checked", checkbox.checked)
    })
})

li2nds.forEach((li2nd, j) => {
    var article = document.createElement("article");
    article.id = "article-" + j;
    article.setAttribute("class", "article-2nd");
    li2nd.appendChild(article);
})

/* Lê aí o gpt 
const counter = document.getElementById("counter");
const items = document.querySelectorAll(".item");

function atualizar() {
    const mudados = document.querySelectorAll(".item.changed").length;
    counter.textContent = `${mudados}/${items.length}`;
}

// observa mudanças de classe
const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "class") {
            atualizar();
            break;
        }
    }
});

// começa a observar
items.forEach(item => {
    observer.observe(item, {
        attributes: true,
        attributeFilter: ["class"]
    });
});

// inicial
atualizar();
 */


