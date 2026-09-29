import { Component, computed, signal } from '@angular/core';

interface NodoDemo {
  id: string;
  tipo: string;
  nombre: string;
  x: number;
  y: number;
  color: string;
  detalle: string;
  conexiones: string[];
  ficha: [string, string][];
}

@Component({
  selector: 'app-grafo-demo',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="grafo">
      <span class="etiqueta">Grafo interactivo</span>
      <h2>Tocá un nodo. Así se razona un caso en Bond</h2>
      <p class="sub">
        Mini demostración del concepto: cada nodo tiene ficha, evidencia y conexiones.
        En la aplicación real el lienzo es colaborativo (librería <b>ng-gd</b>) con zoom,
        agrupamientos y búsqueda.
      </p>
      <div class="chips">
        @for (n of nodos(); track n.id) {
          <button [class.activo]="seleccionadoId() === n.id" (click)="seleccionar(n.id)">
            {{ n.nombre }}
          </button>
        }
      </div>
      <div class="grafo-demo">
        <div class="tarjeta-grafo">
          <div class="cinta"><span>☰</span> JFK (1991) — Conspiración · demo conceptual</div>
          <svg viewBox="0 0 560 360" role="img" aria-label="Demo de grafo interactivo">
            <rect width="560" height="360" fill="#0b1120" />
            @for (a of aristasDemo(); track a.id) {
              <line class="flujo" [attr.x1]="a.x1" [attr.y1]="a.y1" [attr.x2]="a.x2" [attr.y2]="a.y2"
                stroke="#38e1ff" stroke-width="1.5" opacity="0.7" />
            }
            @for (n of nodos(); track n.id) {
              <g class="nodo" [class.seleccionado]="seleccionadoId() === n.id" (click)="seleccionar(n.id)">
                @if (seleccionadoId() === n.id) {
                  <circle class="halo" [attr.cx]="n.x" [attr.cy]="n.y" r="26" fill="none" stroke="#38e1ff" stroke-width="2" />
                }
                <circle [attr.cx]="n.x" [attr.cy]="n.y" r="20" fill="none" stroke="#d81b60" opacity="0.45" class="pulso" />
                <circle class="nucleo" [attr.cx]="n.x" [attr.cy]="n.y" [attr.r]="seleccionadoId() === n.id ? 13 : 10"
                  [attr.fill]="n.color" stroke="#fff" stroke-width="1.5" />
                <text [attr.x]="n.x" [attr.y]="n.y + 36" text-anchor="middle" fill="#c9d6ea" font-size="11">{{ n.nombre }}</text>
              </g>
            }
          </svg>
          <div class="pie"><span>hacé clic en cualquier nodo o chip</span><span>{{ nodos().length }} nodos · {{ aristasDemo().length }} vínculos</span></div>
        </div>
        <aside class="tarjeta detalle-nodo">
          @if (seleccionado(); as s) {
            <span class="tipo">{{ s.tipo }}</span>
            <h3>{{ s.nombre }}</h3>
            <p class="sub" style="font-size: 0.95rem">{{ s.detalle }}</p>
            <dl>
              @for (f of s.ficha; track f[0]) {
                <dt>{{ f[0] }}</dt><dd>{{ f[1] }}</dd>
              }
            </dl>
            <p class="sub" style="font-size: 0.9rem; margin-top: 12px">Vínculos: {{ s.conexiones.join(' · ') }}</p>
          }
        </aside>
      </div>
    </section>
  `,
  styles: [],
})
export class GrafoDemo {
  protected readonly nodos = signal<NodoDemo[]>([
    {
      id: 'oswald', tipo: 'Persona', nombre: 'Lee Harvey Oswald', x: 290, y: 250, color: '#d81b60',
      detalle: 'Nodo central del caso demo. Concentra eventos, autopsia y estudios complementarios.',
      conexiones: ['Clay Shaw', 'David Ferrie', 'La Sombra'],
      ficha: [['Rol', 'Nodo persona'], ['Evidencia', 'DICOM + informe'], ['Proyecto', 'JFK (1991)']],
    },
    {
      id: 'garrison', tipo: 'Persona', nombre: 'Jim Garrison', x: 280, y: 70, color: '#38e1ff',
      detalle: 'Investigador. Sus hipótesis se modelan como relaciones etiquetadas entre nodos.',
      conexiones: ['David Ferrie', 'Clay Shaw'],
      ficha: [['Rol', 'Investigador'], ['Relaciones', '2 hipótesis'], ['Estado', 'Activo']],
    },
    {
      id: 'ferrie', tipo: 'Persona', nombre: 'David Ferrie', x: 440, y: 120, color: '#f87171',
      detalle: 'Conectado con múltiples aristas: el grafo revela su posición de intermediación.',
      conexiones: ['Jim Garrison', 'Clay Shaw', 'Perry Russo'],
      ficha: [['Centralidad', 'Alta'], ['Vínculos', '3 directos'], ['Evidencia', 'Documentos']],
    },
    {
      id: 'shaw', tipo: 'Persona', nombre: 'Clay Shaw', x: 430, y: 240, color: '#f87171',
      detalle: 'Empresario vinculado a la trama. Cada arista guarda su descripción y fuente.',
      conexiones: ['Lee Harvey Oswald', 'David Ferrie'],
      ficha: [['Tipo', 'Persona jurídica/física'], ['Fuente', 'Legajo'], ['Riesgo', 'Alto']],
    },
    {
      id: 'russo', tipo: 'Testigo', nombre: 'Perry Russo', x: 510, y: 180, color: '#34d399',
      detalle: 'Testimonio asociado como evento multimedia sobre la arista correspondiente.',
      conexiones: ['David Ferrie'],
      ficha: [['Tipo', 'Testigo'], ['Evidencia', 'Audio'], ['Confiabilidad', 'A verificar']],
    },
    {
      id: 'sombra', tipo: 'Entidad', nombre: 'La Sombra', x: 120, y: 250, color: '#a78bfa',
      detalle: 'Entidad sin identificar: el grafo permite trabajar con alias hasta resolver identidad.',
      conexiones: ['Lee Harvey Oswald', 'Vorne Bundy'],
      ficha: [['Identidad', 'No resuelta'], ['Alias', '2 registros'], ['Prioridad', 'Alta']],
    },
  ]);

  protected readonly seleccionadoId = signal('oswald');
  protected readonly seleccionado = computed(() =>
    this.nodos().find((n) => n.id === this.seleccionadoId()),
  );

  protected readonly aristasDemo = computed(() => {
    const porId = new Map(this.nodos().map((n) => [n.id, n]));
    const pares: [string, string][] = [
      ['oswald', 'shaw'],
      ['oswald', 'sombra'],
      ['garrison', 'ferrie'],
      ['garrison', 'shaw'],
      ['ferrie', 'shaw'],
      ['ferrie', 'russo'],
      ['sombra', 'oswald'],
    ];
    return pares.map(([a, b], i) => {
      const n1 = porId.get(a)!;
      const n2 = porId.get(b)!;
      return { id: `e${i}`, x1: n1.x, y1: n1.y, x2: n2.x, y2: n2.y };
    });
  });

  protected seleccionar(id: string): void {
    this.seleccionadoId.set(id);
  }
}
