import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  standalone: true,
  template: `
    <section class="bloque contenedor" id="videos">
      <span class="etiqueta rosa">Bond en video</span>
      <h2>Mirá Bond funcionando</h2>
      <p class="sub">
        Lista de reproducción con el sistema en acción: grafos de investigación,
        seguimiento de expedientes y análisis criminal en tiempo real.
      </p>
      <div class="video-marco">
        <iframe
          [src]="embedSeguro()"
          title="Lista de reproducción de Bond en YouTube"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
      <div class="hero-cta" style="margin-top: 20px">
        <a class="btn btn-primario" [href]="playlistUrl()" target="_blank" rel="noopener">▶ Abrir playlist en YouTube</a>
      </div>
    </section>
  `,
  styles: [],
})
export class Videos {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly playlistUrl = signal('https://www.youtube.com/playlist?list=PLEzJvYmh5HS4');
  protected readonly embedSeguro = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube-nocookie.com/embed/videoseries?list=PLEzJvYmh5HS4',
    ),
  );
}
