import { Component, signal } from '@angular/core';

interface PuntoExpediente {
  icono: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-expedientes',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="expedientes">
      <span class="etiqueta">Seguimiento de expedientes</span>
      <h2>Cada expediente, vivo de principio a fin</h2>
      <p class="sub">
        En Bond cada expediente es un caso con su propio grafo: personas, empresas,
        lugares y objetos conectados por sus vínculos. Los eventos del expediente —
        declaraciones, allanamientos, pericias, audiencias — se registran sobre
        <b>nodos</b> o sobre <b>conexiones</b>, y pueden
        <b>pasarse de un nodo a una conexión y viceversa</b> a medida que
        la investigación avanza y se entiende mejor dónde pertenece cada hecho.
      </p>
      <div class="rejilla c4" style="margin-top: 30px">
        @for (p of puntos(); track p.titulo) {
          <article class="tarjeta">
            <div class="icono">{{ p.icono }}</div>
            <h3>{{ p.titulo }}</h3>
            <p>{{ p.texto }}</p>
          </article>
        }
      </div>
      <div class="tarjeta-grafo exp-diagrama">
        <div class="cinta"><span>☰</span> Expediente 123/24 — el evento se mueve con la investigación</div>
        <svg viewBox="0 0 560 230" role="img" aria-label="Un evento pasa de un nodo a una conexión">
          <defs>
            <marker id="flecha-exp" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
              <path d="M0,0 L8,4.5 L0,9 Z" fill="#ff3d7f" />
            </marker>
          </defs>
          <rect width="560" height="230" fill="#0b1120" />
          <line x1="90" y1="150" x2="470" y2="150" stroke="#38e1ff" stroke-width="1.8" opacity="0.8" />
          <text x="280" y="142" text-anchor="middle" fill="#7d8aa0" font-size="11">conexión · transacción</text>
          <circle cx="90" cy="150" r="17" fill="none" stroke="#d81b60" opacity="0.5" class="pulso" />
          <circle cx="90" cy="150" r="10" fill="#d81b60" stroke="#fff" stroke-width="1.4" />
          <text x="90" y="185" text-anchor="middle" fill="#c9d6ea" font-size="11">Persona</text>
          <circle cx="470" cy="150" r="10" fill="#38e1ff" stroke="#fff" stroke-width="1.4" />
          <text x="470" y="185" text-anchor="middle" fill="#c9d6ea" font-size="11">Empresa</text>
          <rect x="14" y="46" width="196" height="30" rx="15" fill="rgba(216,27,96,0.2)" stroke="#d81b60" />
          <text x="112" y="65" text-anchor="middle" fill="#ffc4d8" font-size="12">📌 Allanamiento · en nodo</text>
          <rect x="336" y="46" width="212" height="30" rx="15" fill="rgba(56,225,255,0.12)" stroke="#38e1ff" />
          <text x="442" y="65" text-anchor="middle" fill="#b8f1ff" font-size="12">📌 Allanamiento · en conexión</text>
          <path d="M212,61 C 250,61 260,90 300,92" fill="none" stroke="#ff3d7f" stroke-width="2"
            stroke-dasharray="6 6" class="flujo" marker-end="url(#flecha-exp)" />
          <path d="M348,92 C 320,95 315,61 220,61" fill="none" stroke="#38e1ff" stroke-width="1.4"
            stroke-dasharray="4 6" opacity="0.7" />
          <text x="280" y="214" text-anchor="middle" fill="#9aa7bd" font-size="12">El evento se pasa del nodo a la conexión — y viceversa</text>
        </svg>
        <div class="pie"><span>eventos · nodos · conexiones</span><span>el expediente siempre actualizado</span></div>
      </div>
    </section>
  `,
  styles: [],
})
export class Expedientes {
  protected readonly puntos = signal<PuntoExpediente[]>([
    { icono: '📁', titulo: 'Expediente como caso', texto: 'Cada expediente reúne su grafo, su evidencia y su cronología en un único lugar consultable.' },
    { icono: '📍', titulo: 'Eventos en nodos', texto: 'Allanamientos, declaraciones o pericias registrados sobre la persona, lugar u objeto al que corresponden.' },
    { icono: '🔗', titulo: 'Eventos en conexiones', texto: 'Hechos que pertenecen al vínculo —una transacción, una llamada, un traslado— viven sobre la conexión misma.' },
    { icono: '🔄', titulo: 'Eventos que se mueven', texto: 'Si la investigación revela que un hecho corresponde a otro elemento, el evento se pasa del nodo a la conexión o viceversa, sin perder su historia.' },
  ]);
}
