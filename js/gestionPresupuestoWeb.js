import * as gestionPresupuesto from './gestionPresupuesto.js';
 
 function mostrarDatoEnId(idElemento, valor) {
    let elem = document.getElementById(idElemento);
    let p = document.createElement("p");
    p.textContent = valor;
    elem.appendChild(p);
 }

function mostrarGastoWeb(idElemento, gastos) {
    let div = document.getElementById(idElemento);
    for (let gasto of gastos) {
        let aux = "";
        for (let etiq of gasto.etiquetas) {
            aux += `
            <span class="gasto-etiquetas-etiqueta">
                ${etiq}
            </span>`
        }
        div.innerHTML += 
            `<div class="gasto">
                <div class="gasto-descripcion">${gasto.descripcion}</div>
                <div class="gasto-fecha">${gasto.fecha}</div> 
                <div class="gasto-valor">${gasto.valor}</div> 
                <div class="gasto-etiquetas">
                ${aux}`;
    }
}




export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}