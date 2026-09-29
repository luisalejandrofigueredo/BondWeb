import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-arquitectura',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="arquitectura">
      <span class="etiqueta">El sistema</span>
      <h2>Todo lo que necesita una investigación, en un solo lugar</h2>
      <p class="sub">
        Bond es un sistema completo y ya funcionando: grafo de relaciones,
        evidencia multimedia, línea de tiempo y administración de equipos
        y casos.
      </p>
      <div class="rejilla c2" style="margin-top: 30px">
        @for (m of modulos(); track m.nombre) {
          <article class="tarjeta">
            <div class="icono">{{ m.icono }}</div>
            <h3>{{ m.nombre }}</h3>
            <p>{{ m.texto }}</p>
          </article>
        }
      </div>
    </section>
  `,
  styles: [],
})
export class Arquitectura {
  protected readonly modulos = signal([
    {
      icono: '🖥️', nombre: 'Investigación en grafo',
      texto: 'Lienzo colaborativo para conectar personas, empresas, vehículos y cuentas. Zoom, agrupamientos, búsqueda y presentación del caso en una sola pantalla.',
    },
    {
      icono: '🗂️', nombre: 'Gestión de casos y evidencia',
      texto: 'Proyectos, relaciones, eventos, documentos, audios, videos e imágenes forenses organizados por caso, con accesos por usuario y equipo.',
    },
    {
      icono: '🕰️', nombre: 'Línea de tiempo judicial',
      texto: 'Qué pasó, cuándo pasó y quién estaba vinculado: la cronología del caso construida sobre la misma evidencia del grafo.',
    },
    {
      icono: '🛡️', nombre: 'Administración y control',
      texto: 'Gestión de usuarios, permisos y catálogos para que cada equipo vea solo los casos que le corresponden.',
    },
  ]);
}
