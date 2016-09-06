import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent, NotesComponent, AboutComponent } from './containers';

const appRoutes:Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{path: '', component: NotesComponent},
			{path: 'about', component: AboutComponent},
		]
	},
	{
		path: '**' ,
		redirectTo: ''
		
	},
	// {
	// 	path: 'main',
	// 	component: MainComponent,
	// },
	// {
	// 	path: 'about',
	// 	component: AboutComponent,
	// },
	// {
	// 	path: '' ,
	// 	redirectTo: '/main',
	// 	pathMatch: 'full'
		
	// },

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);