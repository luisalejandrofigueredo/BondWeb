import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: true,
  template: `
    <footer>
      <div class="contenedor foot-grid">
        <a class="marca" href="#inicio">
          <span class="marca-logo">B</span>
          <span><b>BOND</b><small>GRAFOS · ANÁLISIS JUDICIAL · SEGURIDAD</small></span>
        </a>
        <nav>
          @for (item of enlaces(); track item.href) {
            <a [href]="item.href">{{ item.texto }}</a>
          }
        </nav>
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
