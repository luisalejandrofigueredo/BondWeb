import { Component, computed, signal } from '@angular/core';

interface Caso {
  id: string;
  tab: string;
  titulo: string;
  imagen: string;
  alt: string;
  descripcion: string;
  puntos: string[];
}

@Component({
  selector: 'app-casos',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="casos">
      <span class="etiqueta rosa">Casos y material del proyecto</span>
      <h2>Del corcho con hilos al grafo digital</h2>
      <p class="sub">Imágenes reales de la carpeta <b>imagenes/</b> del proyecto Bond.</p>
      <div class="casos-tabs">
        @for (c of casos(); track c.id) {
          <button [class.activo]="activoId() === c.id" (click)="activoId.set(c.id)">{{ c.tab }}</button>
        }
      </div>
      @if (activo(); as c) {
        <div class="caso">
          <img [src]="c.imagen" [alt]="c.alt" loading="lazy">
          <div>
            <h3 style="font-size: 1.4rem; margin-bottom: 10px">{{ c.titulo }}</h3>
            <p class="sub" style="font-size: 0.98rem">{{ c.descripcion }}</p>
            <ul>
              @for (p of c.puntos; track p) {
                <li>{{ p }}</li>
              }
            </ul>
          </div>
        </div>
      }
    </section>
  `,
  styles: [],
})
export class Casos {
  protected readonly casos = signal<Caso[]>([
    {
      id: 'jfk', tab: 'Caso JFK (1991)',
      titulo: 'Resolviendo JFK con grafos',
      imagen: 'assets/jfk.jpeg', alt: 'Comparativa del caso JFK entre corcho físico y grafo Bond',
      descripcion: 'El clásico panel de corcho con fotos e hilos rojos, replicado como grafo digital consultable: Bond Gestor de proyectos — JFK (1991).',
      puntos: [
        'Cada foto del corcho es un nodo con ficha y evidencia.',
        'Cada hilo rojo es una relación etiquetada y fundada.',
        'El caso se presenta como proyecto cargado dentro de tu instalación privada.',
      ],
    },
    {
      id: 'cloacas', tab: 'Caso Cloacas',
      titulo: 'Análisis criminal en tiempo real',
      imagen: 'assets/presentacionbond.jpg', alt: 'Grafo del Caso Cloacas en Bond frente a planilla Excel tachada',
      descripcion: 'De la planilla interminable al grafo del Caso Cloacas: nodos de personas, empresas y jurisdicciones conectados entre sí.',
      puntos: [
        'Adiós a los excesos de filas y columnas.',
        'El grafo muestra rutas de integración de un vistazo.',
        'Ideal para presentar el caso en audiencia.',
      ],
    },
    {
      id: 'versus', tab: 'Análisis judicial',
      titulo: 'Bond vs. Excel: análisis judicial',
      imagen: 'assets/bondvsexel.jpg', alt: 'Infografía Bond vs Excel',
      descripcion: 'Comparativa del proyecto: mapeo automático, evidencia multimedia y detección de testaferros frente al cruce manual.',
      puntos: [
        'Cuentas, personas, vehículos, documentos, audios y DICOM.',
        'Sin errores de fórmula ni archivos fragmentados.',
        'Reducción masiva de tiempos de investigación.',
      ],
    },
  ]);

  protected readonly activoId = signal('jfk');
  protected readonly activo = computed(() => this.casos().find((c) => c.id === this.activoId()));
}
