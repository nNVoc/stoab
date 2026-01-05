var itens = document.querySelectorAll("ul>li");
var li2nds = document.querySelectorAll(".li-2nd");
var li1sts = document.querySelectorAll(".li-1st");

function setchecked(key) {
    return localStorage.getItem(key) === "true";
}

const maior = [...itens].reduce((a,b) => b.innerText.length > a.innerText.length ? b : a);
document.querySelectorAll("ul").forEach(ul => {
    ul.style.gridAutoRows = `${maior.innerText.length * 1.2}px`;
})

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
        localStorage.setItem("item-" + i, checkbox.checked)
    })

    if (setchecked("item-" + i)) { /* precisa colocar o checkbox.checked = true, pq se não o bagulho vai estar com a class checked sem estar com sua checkbox no checked, então terei de clicar duas vezes para deixá-la false */
        checkbox.checked = true;
        item.classList.add("checked");
    }
})

li2nds.forEach((li2nd, j) => {
    var article = document.createElement("article");
    article.id = "counter-" + j;
    article.classList.add("counter-2nd", "counter");

    const items = li2nd.querySelectorAll(".item");

    function atualizar() {
        const concluidos = li2nd.querySelectorAll(".item.checked").length;
        article.textContent = `${concluidos} / ${items.length}`;
    }

    const observer = new MutationObserver(mutations => {
        for (const m of mutations) {
            if (m.type === "attributes" && m.attributeName) {
                atualizar();
                break;
            }
        }
    })

    items.forEach(item => {
        observer.observe(item, {
            attributes: true,
            attributeFilter: ["class"]
        });
    })

    li2nd.appendChild(article);
    atualizar();
})

li1sts.forEach((li1st, k) => {
    var article = document.createElement("article");
    article.id = "counter-" + k;
    article.classList.add("counter-1st", "counter");

    const items = li1st.querySelectorAll(".item");

    function atualizar() {
        var concluidos = li1st.querySelectorAll(".item.checked").length;
        article.textContent = `${concluidos} / ${items.length}`;
    }

    const observer = new MutationObserver(mutations => {
        for (const m of mutations) {
            if (m.type === "attributes" && m.attributeName) {
                atualizar();
                break;
            }
        }
    })

    items.forEach(item => {
        observer.observe(item, {
            attributes: true,
            attributeFilter: ["class"]
        });
    })
    
    li1st.appendChild(article);
    atualizar();
})




