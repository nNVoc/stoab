var itens = document.querySelectorAll("ul>li");

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
    item.appendChild(label);
    label.appendChild(checkbox);

    checkbox.addEventListener("change", () => {
        item.classList.toggle("checked", checkbox.checked)
    })
})

