import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Header2Component } from './components/header2/header2.component';
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
import { ServicioAlimentosComponent } from './pages/sectores/servicio-alimentos/servicio-alimentos.component';
import { ComercioComponent } from './pages/sectores/comercio/comercio.component';
import { HotelesComponent } from './pages/sectores/hoteles/hoteles.component';
import { MaterialEmpaqueComponent } from './pages/sectores/material-empaque/material-empaque.component';
import { PlagasUrbanizacionesComponent } from './pages/sectores/plagas-urbanizaciones/plagas-urbanizaciones.component';
import { PlagasInstGubernamentalesComponent } from './pages/sectores/plagas-inst-gubernamentales/plagas-inst-gubernamentales.component';
import { PlagasHospitalesComponent } from './pages/sectores/plagas-hospitales/plagas-hospitales.component';
import { PlagasEscuelasComponent } from './pages/sectores/plagas-escuelas/plagas-escuelas.component';
import { BodegasComponent } from './pages/sectores/bodegas/bodegas.component';
import { LogisticaComponent } from './pages/sectores/logistica/logistica.component';
import { InstFinancierasComponent } from './pages/sectores/inst-financieras/inst-financieras.component';
import { OtrosSectoresComponent } from './pages/sectores/otros-sectores/otros-sectores.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TratamientoGranosComponent } from './pages/plagas/tratamiento-granos/tratamiento-granos.component';
import { TratamientoTermitasComponent } from './pages/plagas/tratamiento-termitas/tratamiento-termitas.component';
import { TratamientoEspecialComponent } from './pages/plagas/tratamiento-especial/tratamiento-especial.component';
import { TrabajaNosotrosComponent } from './pages/trabaja-nosotros/trabaja-nosotros.component';
import { TerminosCondicionesComponent } from './pages/terminos-condiciones/terminos-condiciones.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    ServicioAlimentosComponent,
    ComercioComponent,
    HotelesComponent,
    MaterialEmpaqueComponent,
    PlagasUrbanizacionesComponent,
    PlagasInstGubernamentalesComponent,
    PlagasHospitalesComponent,
    PlagasEscuelasComponent,
    BodegasComponent,
    LogisticaComponent,
    InstFinancierasComponent,
    OtrosSectoresComponent,
    ContactoComponent,
    TratamientoGranosComponent,
    TratamientoTermitasComponent,
    TratamientoEspecialComponent,
    TrabajaNosotrosComponent,
    PreguntasFrecuentesComponent,
    TerminosCondicionesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
