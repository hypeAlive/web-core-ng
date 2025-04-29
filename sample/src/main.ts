import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ModalContainerComponent } from "web-core-ng"

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
