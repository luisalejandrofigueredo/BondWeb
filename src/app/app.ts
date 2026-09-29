import { Component } from '@angular/core';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Evidencias } from './components/evidencias';
import { Versus } from './components/versus';
import { GrafoDemo } from './components/grafo-demo';
import { Arquitectura } from './components/arquitectura';
import { Casos } from './components/casos';
import { Quickstart } from './components/quickstart';
import { Pie } from './components/pie';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Evidencias, Versus, GrafoDemo, Arquitectura, Casos, Quickstart, Pie],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
