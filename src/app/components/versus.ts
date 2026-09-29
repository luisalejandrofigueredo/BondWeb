import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-versus',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="versus">
      <span class="etiqueta rosa">Bond vs. Excel</span>
      <h2>Evolucioná tu investigación</h2>
      <p class="sub">
        Las hojas de cálculo fragmentan el caso, propagan errores de fórmula y obligan
        a cruzar datos a mano. Bond centraliza la evidencia multimedia y acelera el análisis.
      </p>
      <div class="versus">
        <article class="tarjeta col-buen">
          <h3>✅ Con Bond</h3>
          <ul>
            @for (v of conBond(); track v) {
              <li><b>✔</b> {{ v }}</li>
            }
          </ul>
        </article>
        <article class="tarjeta col-mal">
          <h3>❌ Con Excel tradicional</h3>
          <ul>
            @for (v of conExcel(); track v) {
              <li><b>✘</b> {{ v }}</li>
            }
          </ul>
        </article>
      </div>
      <figure class="foto-marco">
        <img src="assets/bondvsexel.jpg" alt="Comparativa Bond vs Excel en análisis judicial" loading="lazy">
        <figcaption>Infografía del proyecto: mapeo automático de redes criminales frente al cruce manual en planillas.</figcaption>
      </figure>
    </section>
  `,
  styles: [],
})
export class Versus {
  protected readonly conBond = signal([
    'Mapeo automático de redes criminales en un grafo visual.',
    'Centralización de evidencia multimedia: PDF, audio, video, DICOM.',
    'Identificación intuitiva de testaferros y fases de integración.',
    'Reducción masiva de tiempos de análisis judicial.',
    'Análisis criminal en tiempo real y colaborativo.',
  ]);

  protected readonly conExcel = signal([
    'Cruce manual de datos, lento y propenso a error humano.',
    'Fragmentación de archivos: cada planilla una isla.',
    'Puntos clave difíciles de ver entre miles de filas.',
    'Errores de fórmula que contaminan toda la investigación.',
    'Sin contexto visual ni línea de tiempo del caso.',
  ]);
}
