import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="barra">
      <div class="barra-int">
        <a class="marca" href="#inicio">
          <img class="marca-logo" src="icon.svg" alt="Bond" width="40" height="40">
          <span><b>BOND</b><small>GRAFOS · JUDICIAL · SEGURIDAD</small></span>
        </a>
        <button class="menu-btn" (click)="menuAbierto.update(v => !v)" aria-label="Abrir menú">☰</button>
        <nav class="nav" [class.movill]="menuAbierto()">
          @for (item of enlaces(); track item.href) {
            <a [href]="item.href" (click)="menuAbierto.set(false)">{{ item.texto }}</a>
          }
          <a class="btn btn-primario" href="#videos" (click)="menuAbierto.set(false)">▶ Ver videos</a>
        </nav>
      </div>
    </header>
  `,
  styles: [],
})
export class Header {
  protected readonly menuAbierto = signal(false);
  protected readonly enlaces = signal([
    { href: '#evidencia', texto: 'Evidencia' },
    { href: '#versus', texto: 'Bond vs Excel' },
    { href: '#expedientes', texto: 'Expedientes' },
    { href: '#arquitectura', texto: 'Sistema' },
    { href: '#casos', texto: 'Casos' },
    { href: '#videos', texto: 'Videos' },
    { href: '#inicio-rapido', texto: 'Instalación' },
  ]);
}
