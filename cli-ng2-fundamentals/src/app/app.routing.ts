import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthService } from './services'

import {MainComponent, NotesComponent, AboutComponent, AuthComponent } from './containers';

const appRoutes:Routes = [
	{
		path: '',
		component: MainComponent,
		canActivate: [AuthService],
		children: [
			{path: '', component: NotesComponent},
			{path: 'about', component: AboutComponent},
		]
	},
	{
		path: 'auth',
		component: AuthComponent
	},
	{
		path: '**' ,
		redirectTo: ''
		
	},



];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);