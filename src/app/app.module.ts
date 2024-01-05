import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectoresComponent } from './components/sectores/sectores.component';
import { PlagasComponent } from './pages/plagas/index/plagas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FooterComponent } from './components/footer/footer.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { HomeComponent } from './pages/home/home.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BaseFundamentalComponent } from './components/base-fundamental/base-fundamental.component';
import { ResidencialComponent } from './components/residencial/residencial.component';
import { EmpresarialComponent } from './components/empresarial/empresarial.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Header2Component } from './components/header2/header2.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { RuedaComponent } from './components/rueda/rueda.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { JardineriaComponent } from './pages/jardineria/index/jardineria.component';
import { HeaderBlackComponent } from './components/header-black/header-black.component';
import { LimpiezaComponent } from './pages/limpieza/index/limpieza.component';
import { GarantiaComponent } from './components/garantia/garantia.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { DesinfeccionComponent } from './pages/desinfeccion/index/desinfeccion.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { CoberturaNacionalComponent } from './components/cobertura-nacional/cobertura-nacional.component';
import { PasosSistemaEcovitaliComponent } from './components/pasos-sistema-ecovitali/pasos-sistema-ecovitali.component';
import { PuntosclaveAuditoriaComponent } from './components/puntosclave-auditoria/puntosclave-auditoria.component';
import { ProcesadoresAlimentosComponent } from './pages/sectores/procesadores-alimentos/procesadores-alimentos.component';
import { FarmaciasComponent } from './pages/sectores/farmacias/farmacias.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectoresComponent,
    PlagasComponent,
    FooterComponent,
    TratamientosComponent,
    ProcesosComponent,
    NoticiasComponent,
    HomeComponent,
    CertificacionesComponent,
    ServiciosComponent,
    BaseFundamentalComponent,
    ResidencialComponent,
    EmpresarialComponent,
    PreguntasFrecuentesComponent,
    InicioComponent,
    Header2Component,
    PreloaderComponent,
    RuedaComponent,
    CardComponentComponent,
    JardineriaComponent,
    NosotrosComponent,
    HeaderBlackComponent,
    LimpiezaComponent,
    GarantiaComponent,
    ContactformComponent,
    DesinfeccionComponent,
    CertificadosComponent,
    CoberturaNacionalComponent,
    PasosSistemaEcovitaliComponent,
    PuntosclaveAuditoriaComponent,
    ProcesadoresAlimentosComponent,
    FarmaciasComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
