// Imports do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'; // pra deixar o layout responsivo
import { NgxMaskModule } from 'ngx-mask'; // Import para usar máscara

// Imports do Germano | essencialmente os componentes criados para montar tudo.
import { AppRoutingModule } from './app-routing.module'; // Para fazer o sistema de mudar de 'aba' entre calc e tabuada
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';


// Serviços do Germano
import { CalculadoraService } from './calculadora.service'; // serviço usado para as contas principais como solicitado
import { ErrorService } from './error.service'; //

// Imports do Angular Material (css) com os elementos(botões, inputs, etc) usados
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    CalculadoraComponent,
    TabuadaComponent,
    DialogMessageComponent
  ],
  entryComponents: [
    DialogMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    NgxMaskModule.forRoot(),
    MatDialogModule
  ],
  providers: [
    CalculadoraService,
    {
      provide: ErrorHandler,
      useClass: ErrorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
