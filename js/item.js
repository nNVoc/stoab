export function clickableitems(itens, set, get) {
    itens.forEach((item, i) => {
        var checkbox = document.createElement("input");
        var label = document.createElement("label");
        checkbox.type = "checkbox";
        checkbox.id = "item-" + i;
        checkbox.name = "item-" + i;
        label.innerText = item.innerText;
        item.innerText = '';
        item.classList.add("item");
        item.setAttribute("id", "itemi-" + i);
        label.appendChild(checkbox);
        item.appendChild(label);

        checkbox.addEventListener("change", () => {
            item.classList.toggle("checked", checkbox.checked)
            set("item-" + i, checkbox.checked)
        })

        if (get("item-" + i)) {
            checkbox.checked = true;
            item.classList.add("checked");
        }
    })
}
