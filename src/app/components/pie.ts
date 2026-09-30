import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: true,
  template: `
    <footer>
      <div class="contenedor foot-grid">
        <a class="marca" href="#inicio">
          <img class="marca-logo" src="icon.svg" alt="Bond" width="40" height="40">
          <span><b>BOND</b><small>GRAFOS · ANÁLISIS JUDICIAL · SEGURIDAD</small></span>
        </a>
        <nav>
          @for (item of enlaces(); track item.href) {
            <a [href]="item.href">{{ item.texto }}</a>
          }
        </nav>
        <div class="foot-contacto">
          <span>Contacto: <b>Luis Alejandro Figueredo</b></span>
          <a href="mailto:luisalejandrofigueredo@gmail.com">✉ luisalejandrofigueredo&#64;gmail.com</a>
        </div>
        <span style="font-size: 0.85rem">Sitio institucional del proyecto Bond · {{ anio() }}</span>
      </div>
    </footer>
  `,
  styles: [],
})
export class Pie {
  protected readonly anio = signal(new Date().getFullYear());
  protected readonly enlaces = signal([
    { href: '#evidencia', texto: 'Evidencia' },
    { href: '#versus', texto: 'Bond vs Excel' },
    { href: '#expedientes', texto: 'Expedientes' },
    { href: '#casos', texto: 'Casos' },
    { href: '#videos', texto: 'Videos' },
    { href: '#inicio-rapido', texto: 'Instalación' },
  ]);
}
