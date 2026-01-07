export function ajustargridrows(itens) {
    const maior = [...itens].reduce((a,b) => b.innerText.length > a.innerText.length ? b : a);
    document.querySelectorAll("ul").forEach(ul => {
        ul.style.gridAutoRows = `${maior.innerText.length * 1.3}px`;
        if (window.innerWidth >= 1600) {
            ul.style.gridAutoRows = `80px`
        }
    })
}