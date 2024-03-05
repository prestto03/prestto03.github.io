import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { PlagasComponent } from './pages/plagas/index/plagas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EmpresarialComponent } from './components/empresarial/empresarial.component';
import { ResidencialComponent } from './components/residencial/residencial.component';
import { HomeComponent } from './pages/home/home.component';
import { TrabajaNosotrosComponent } from './pages/trabaja-nosotros/trabaja-nosotros.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { BaseFundamentalComponent } from './components/base-fundamental/base-fundamental.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { JardineriaComponent } from './pages/jardineria/index/jardineria.component';
import { LimpiezaComponent } from './pages/limpieza/index/limpieza.component';
import { DesinfeccionComponent } from './pages/desinfeccion/index/desinfeccion.component';
import { ProcesadoresAlimentosComponent } from './pages/sectores/procesadores-alimentos/procesadores-alimentos.component';
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
import { FarmaciasComponent } from './pages/sectores/farmacias/farmacias.component';
import { TerminosCondicionesComponent } from './pages/terminos-condiciones/terminos-condiciones.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexComponent } from './pages/sectores/index/index.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch:'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'tratamientos', component: TratamientosComponent},
  { path: 'procesos', component: ProcesosComponent },
  { path: 'plagas', component: PlagasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'base-fundamental', component: BaseFundamentalComponent },
  { path: 'limpieza', component: LimpiezaComponent },
  { path: 'noticias', component: NoticiasComponent},
  { path: 'servicios', component: ServiciosComponent },
  { path: 'empresarial', component: EmpresarialComponent},
  { path: 'residencial', component: ResidencialComponent},
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  { path: 'certificaciones', component: CertificacionesComponent},
  { path: 'jardines', component: JardineriaComponent},
  { path: 'desinfeccion', component: DesinfeccionComponent},
  { path: 'certificados', component: CertificadosComponent},
  { path: 'sectores/procesadores-alimentos', component: ProcesadoresAlimentosComponent },
  { path: 'sectores/servicios-alimentos-bebidas', component: ServicioAlimentosComponent },
  { path: 'sectores/comercio', component: ComercioComponent },
  { path: 'sectores/hospitales', component: PlagasHospitalesComponent },
  { path: 'sectores/hoteles', component: HotelesComponent },
  { path: 'sectores/material-empaque', component: MaterialEmpaqueComponent },
  { path: 'sectores/urbanizaciones', component: PlagasUrbanizacionesComponent },
  { path: 'sectores/instalaciones-gubernamentales', component: PlagasInstGubernamentalesComponent },
  { path: 'sectores/farmaceutico', component: FarmaciasComponent },
  { path: 'sectores/centros-educativos', component: PlagasEscuelasComponent },
  { path: 'sectores/bodegas', component: BodegasComponent },
  { path: 'sectores/logistica', component: LogisticaComponent },
  { path: 'sectores/instituciones-financieras', component: InstFinancierasComponent },
  { path: 'sectores/otros-sectores', component: OtrosSectoresComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'trabaja-con-nosotros', component: TrabajaNosotrosComponent },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
  { path: 'terminos-y-condiciones', component: TerminosCondicionesComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'sectores', component: IndexComponent },


  { path: '**', redirectTo: '404' }
  // { path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
