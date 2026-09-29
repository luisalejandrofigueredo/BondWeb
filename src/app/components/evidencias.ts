import { Component, signal } from '@angular/core';

interface Evidencia {
  icono: string;
  titulo: string;
  texto: string;
  etiqueta: string;
}

@Component({
  selector: 'app-evidencias',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="evidencia">
      <span class="etiqueta">Centralización de evidencia</span>
      <h2>Todo el caso, conectado en un solo grafo</h2>
      <p class="sub">
        Bond mapea automáticamente redes criminales: cada persona, vehículo, cuenta,
        documento o audio es un nodo. Cada transacción, llamada o vínculo es una arista.
        Los puntos clave dejan de estar escondidos en planillas.
      </p>
      <div class="rejilla c4" style="margin-top: 30px">
        @for (e of evidencias(); track e.titulo) {
          <article class="tarjeta">
            <div class="icono">{{ e.icono }}</div>
            <h3>{{ e.titulo }}</h3>
            <p>{{ e.texto }}</p>
            <code>{{ e.etiqueta }}</code>
          </article>
        }
      </div>
    </section>
  `,
  styles: [],
})
export class Evidencias {
  protected readonly evidencias = signal<Evidencia[]>([
    { icono: '🧑‍⚖️', titulo: 'Personas', texto: 'Sospechosos, testigos y testaferros identificados en el grafo con sus vínculos directos.', etiqueta: 'nodo · persona' },
    { icono: '🚗', titulo: 'Vehículos', texto: 'Autos, camionetas y flotas vinculados a personas, empresas y movimientos.', etiqueta: 'nodo · vehículo' },
    { icono: '🏦', titulo: 'Cuentas bancarias', texto: 'Transacciones y triangulaciones trazadas como aristas entre cuentas y titulares.', etiqueta: 'arista · transacción' },
    { icono: '📄', titulo: 'Documentos', texto: 'PDF y Word adjuntos a los nodos: pericias, escritos y legajos siempre a mano.', etiqueta: 'PDF · Word' },
    { icono: '🎧', titulo: 'Audios', texto: 'Escuchas y testimonios asociados a eventos y personas dentro del proyecto.', etiqueta: 'audio · evento' },
    { icono: '🩻', titulo: 'Imagen forense', texto: 'Visor de imágenes integrado para autopsias y estudios complementarios del caso.', etiqueta: 'imagen · pericia' },
    { icono: '🎞️', titulo: 'Video y timeline', texto: 'Videos y línea de tiempo de eventos: qué pasó, cuándo y quién estaba vinculado.', etiqueta: 'timeline' },
    { icono: '🕸️', titulo: 'Detección de testaferros', texto: 'La topología del grafo revela intermediarios y estructuras de integración.', etiqueta: 'análisis de red' },
  ]);
}
