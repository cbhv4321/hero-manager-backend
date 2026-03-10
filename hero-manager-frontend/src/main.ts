import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './componants/app/app';

bootstrapApplication(AppComponent)
.catch((err) => {console.error(err);});