import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quickstart',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="inicio-rapido">
      <span class="etiqueta">Instalación</span>
      <h2>Se instala en tu red privada</h2>
      <p class="sub">
        Por seguridad, Bond <b>no está disponible en internet</b>: se instala dentro
        de la red privada de tu institución y solo es accesible desde ella.
        Tus casos y tu evidencia nunca salen de tu infraestructura.
      </p>
      <div class="rejilla c3" style="margin-top: 30px">
        @for (p of pasos(); track p.titulo) {
          <article class="tarjeta">
            <div class="icono">{{ p.icono }}</div>
            <h3>{{ p.titulo }}</h3>
            <p>{{ p.texto }}</p>
          </article>
        }
      </div>
    </section>
  `,
  styles: [],
})
export class Quickstart {
  protected readonly pasos = signal([
    {
      icono: '🔒', titulo: 'Red privada, sin internet',
      texto: 'El sistema vive en tus propios servidores y solo responde dentro de tu red interna. Nada se expone a la web pública.',
    },
    {
      icono: '🏛️', titulo: 'Instalación a medida',
      texto: 'Instalamos y configuramos Bond en tu infraestructura, con tus usuarios, equipos y casos listos para trabajar.',
    },
    {
      icono: '🤝', titulo: 'Acompañamiento',
      texto: 'Capacitamos a tu equipo de investigación para pasar del corcho y las planillas al grafo desde el primer caso.',
    },
  ]);
}
