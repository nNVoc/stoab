export function createcounter(list, num) {
    list.forEach((listitem, j) => {
        var article = document.createElement("article");
        article.id = "counter-" + j;
        article.classList.add("counter-" + num, "counter");

        const items = listitem.querySelectorAll(".item");

        function update() {
            const concluidos = listitem.querySelectorAll(".item.checked").length;
            article.textContent = `${concluidos} / ${items.length}`;
        }

        const observer = new MutationObserver(mutations => {
            for (const m of mutations) {
                if (m.type === "attributes" && m.attributeName) {
                    update();
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

        listitem.appendChild(article);
        update();
    })
}