import { Serie } from "./serie.js";
import { Data } from "./data.js";

const seriesTBody: HTMLElement = document.getElementById('body')!; // Nodo tbody que tiene el id="body"
let avgSeasons : HTMLElement = document.getElementById("avgSeasons")!;

renderDataInTable(Data);

avgSeasons.innerHTML = seasonsAverageCalculator(Data).toString();

function renderDataInTable(serie: Serie[]): void {
    console.log('Desplegando series');
    serie.forEach(d => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${d.num}</td>
                           <td>${d.name}</td>
                           <td>${d.channel}</td>
                           <td>${d.seasons}</td>`;
                           seriesTBody.appendChild(trElement);
  });
}

function seasonsAverageCalculator(serie: Serie[]) : number {
    let suma : number = 0;
    serie.forEach((serie) => {
        suma += serie.seasons;});
    let promedio : number = suma / (serie.length);
    return promedio;
}