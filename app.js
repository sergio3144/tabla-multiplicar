let formulario = document.querySelector('form');
let input = formulario.children[0];
let table = formulario.nextElementSibling

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    setTimeout(() => {
        let i = 1
        if(input.value != '') {
            while(i <= 10) {
            table.innerHTML += `<td>${input.value}</td> <td class="multi">x</td> <td>${i}</td> <td>=</td> <td class="resultado">${input.value * i}</td>`;
            i++;
        }
    } else {
        alert('No puede ir vacio')
    }
},0)
limpiarHtml()
})

function limpiarHtml () {
    while(table.firstChild) {
        table.removeChild(table.firstChild)
    }
}