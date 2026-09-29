import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero contenedor" id="inicio">
      <div class="hero-grid">
        <div>
          <span class="etiqueta rosa">Sistema de investigación criminal</span>
          <h1>Adiós a los Exceles.<br><span class="grad">Análisis criminal en tiempo real con grafos.</span></h1>
          <p class="lead">
            Bond combina <b>grafos de relaciones</b>, evidencia multimedia centralizada
            (documentos, audios, video, DICOM) y línea de tiempo judicial para que
            un caso complejo se vea —y se pruebe— en una sola pantalla.
          </p>
          <div class="hero-cta">
            <a class="btn btn-primario" href="#videos">▶ Ver Bond en video</a>
            <a class="btn btn-fantasma" href="#arquitectura">Conocer el sistema</a>
          </div>
          <div class="hero-mini">
            @for (dato of datos(); track dato.valor) {
              <div><b>{{ dato.valor }}</b><span>{{ dato.etiqueta }}</span></div>
            }
          </div>
        </div>
        <div class="tarjeta-grafo">
          <div class="cinta"><span>☰</span> Caso Cloacas</div>
          <svg viewBox="0 0 520 340" role="img" aria-label="Grafo de caso criminal">
            <rect width="520" height="340" fill="#0b1120" />
            @for (arista of aristas(); track arista.id) {
              <line
                class="flujo"
                [attr.x1]="arista.x1" [attr.y1]="arista.y1"
                [attr.x2]="arista.x2" [attr.y2]="arista.y2"
                stroke="#38e1ff" stroke-width="1.6" opacity="0.75" />
            }
            @for (nodo of nodos(); track nodo.id) {
              <g>
                <circle [attr.cx]="nodo.x" [attr.cy]="nodo.y" r="18" fill="none" stroke="#d81b60" opacity="0.5" class="pulso" />
                <circle [attr.cx]="nodo.x" [attr.cy]="nodo.y" r="9" [attr.fill]="nodo.color" stroke="#fff" stroke-width="1.4" />
                <text [attr.x]="nodo.x" [attr.y]="nodo.y + 30" text-anchor="middle" fill="#c9d6ea" font-size="10.5">{{ nodo.nombre }}</text>
              </g>
            }
          </svg>
          <div class="pie"><span>● personas &nbsp; ● empresas &nbsp; ● cuentas</span><span>tiempo real · colaborativo</span></div>
        </div>
      </div>
    </section>
    <div class="cinta-logos" aria-hidden="true">
      <span>PERSONAS <span class="punto">●</span></span><span>VEHÍCULOS <span class="punto">●</span></span><span>CUENTAS BANCARIAS <span class="punto">●</span></span><span>DOCUMENTOS <span class="punto">●</span></span><span>AUDIOS <span class="punto">●</span></span><span>DICOM <span class="punto">●</span></span><span>TIMELINE <span class="punto">●</span></span><span>TESTAFERROS <span class="punto">●</span></span>
    </div>
  `,
  styles: [],
})
export class Hero {
  protected readonly datos = signal([
    { valor: '1 pantalla', etiqueta: 'todo el caso conectado' },
    { valor: '-80%', etiqueta: 'tiempo de cruce de datos' },
    { valor: 'Multimedia', etiqueta: 'PDF · audio · video · DICOM' },
  ]);

  protected readonly nodos = signal([
    { id: 1, x: 90, y: 90, nombre: 'Alejandro', color: '#d81b60' },
    { id: 2, x: 250, y: 60, nombre: 'Torre Lujo', color: '#38e1ff' },
    { id: 3, x: 410, y: 95, nombre: 'Atlantic Blue', color: '#34d399' },
    { id: 4, x: 130, y: 220, nombre: 'Inversiones Sur', color: '#fbbf24' },
    { id: 5, x: 300, y: 200, nombre: 'Camioneta Porsche', color: '#d81b60' },
    { id: 6, x: 450, y: 230, nombre: 'El Mago', color: '#38e1ff' },
    { id: 7, x: 260, y: 290, nombre: 'Ratobock', color: '#a78bfa' },
  ]);

  protected readonly aristas = signal([
    { id: 'a1', x1: 90, y1: 90, x2: 250, y2: 60 },
    { id: 'a2', x1: 250, y1: 60, x2: 410, y2: 95 },
    { id: 'a3', x1: 90, y1: 90, x2: 130, y2: 220 },
    { id: 'a4', x1: 130, y1: 220, x2: 300, y2: 200 },
    { id: 'a5', x1: 300, y1: 200, x2: 450, y2: 230 },
    { id: 'a6', x1: 410, y1: 95, x2: 450, y2: 230 },
    { id: 'a7', x1: 250, y1: 60, x2: 300, y2: 200 },
    { id: 'a8', x1: 130, y1: 220, x2: 260, y2: 290 },
    { id: 'a9', x1: 300, y1: 200, x2: 260, y2: 290 },
  ]);
}
