import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { LoginComponent } from './login/login.component';
import { RekognitionComponent } from './rekognition/rekognition.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WinesComponent } from './wines/wines.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'wineform', component: WineFormComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'wines', component: WinesComponent },
  { path: 'cocktail', component: CocktailsComponent },
  { path: 'rekognition', component: RekognitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
