import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quickstart',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="inicio-rapido">
      <span class="etiqueta">Puesta en marcha</span>
      <h2>Probalo con el caso demo en minutos</h2>
      <p class="sub">
        El back-end incluye un seed que crea el proyecto <b>JFK (1991)</b> con nodos,
        relaciones, grupos y eventos. Usuario demo: <b>jfk&#64;bond.local</b>.
      </p>
      <div class="pasos">
        @for (p of pasos(); track p.titulo) {
          <div class="paso">
            <div class="num">{{ p.num }}</div>
            <div>
              <h3 style="margin-bottom: 8px">{{ p.titulo }}</h3>
              <p class="sub" style="font-size: 0.95rem; margin-bottom: 10px">{{ p.texto }}</p>
              <pre class="bloque-codigo">{{ p.codigo }}</pre>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [],
})
export class Quickstart {
  protected readonly pasos = signal([
    {
      num: '1', titulo: 'Levantá la API (newBondServer)',
      texto: 'Configurá src/.env con confirmUrl y changePasswordUrl, y una base Postgres bond local.',
      codigo: 'cd newBondServer\nnpm install\nnpm run seed        # crea el caso JFK (1991)\nnpm run dev           # API con JWT desactivado (-nm=true)',
    },
    {
      num: '2', titulo: 'Levantá el cliente (BondClientTablet)',
      texto: 'Apunta a http://localhost:5000/ vía environment.baseUrl.',
      codigo: 'cd BondClientTablet\nnpm install\nnpm start           # http://localhost:4200/',
    },
    {
      num: '3', titulo: 'Ingresá al caso demo',
      texto: 'Abrí el gestor de proyectos y buscá el proyecto JFK (1991): grafo, timeline y visores listos.',
      codigo: 'usuario: jfk@bond.local\nclave:   JFKDemo2026!',
    },
  ]);
}
