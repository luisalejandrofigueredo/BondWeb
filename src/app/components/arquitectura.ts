import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-arquitectura',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="arquitectura">
      <span class="etiqueta">El sistema real</span>
      <h2>Front-end + Back-end ya funcionando</h2>
      <p class="sub">
        Bond no es un mockup: el repositorio ya incluye el cliente Angular, la API
        Express + Postgres, el panel de administración y el servidor web. Esta página
        presenta ese sistema.
      </p>
      <div class="rejilla c2" style="margin-top: 30px">
        @for (m of modulos(); track m.nombre) {
          <article class="tarjeta">
            <div class="icono">{{ m.icono }}</div>
            <h3>{{ m.nombre }}</h3>
            <p>{{ m.texto }}</p>
            <code>{{ m.stack }}</code>
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
      icono: '🖥️', nombre: 'BondClientTablet — App de investigación',
      texto: 'Lienzo de grafos colaborativo, visores de PDF/DICOM/video, timeline de eventos, grupos y etiquetas. Componentes standalone con signals y control flow moderno.',
      stack: 'Angular 22 · ng-gd · Cornerstone · Material',
    },
    {
      icono: '🔌', nombre: 'newBondServer — API judicial',
      texto: 'Proyectos, nodos, relaciones, eventos, archivos y usuarios con autenticación JWT. Esquema auto-sincronizado y datos demo del caso JFK (1991).',
      stack: 'Express · TypeORM · Postgres · JWT',
    },
    {
      icono: '🛠️', nombre: 'BondAdmin — Administración',
      texto: 'Gestión de usuarios, permisos y catálogos del sistema para equipos de investigación.',
      stack: 'Angular · gestión de accesos',
    },
    {
      icono: '🌐', nombre: 'BondWebServer + esta web',
      texto: 'Servidor web y sitio institucional (este proyecto BondWeb) para presentar el sistema con sus imágenes y casos.',
      stack: 'Node · Angular 22 · signals',
    },
  ]);
}
