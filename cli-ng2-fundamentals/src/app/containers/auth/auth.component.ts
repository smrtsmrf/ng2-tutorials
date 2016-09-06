import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
	user = {
		email: '',
		password: ''
	}

	mode:string = 'signin';
	linkText:string = 'Don\'t have an account?';

	changeMode() {
		if(this.mode === 'signin') {
			this.mode = 'signup';
			this.linkText = 'Already have an account?;'
		} else {
			this.mode = 'signin';
			this.linkText = 'Don\'t have an account?';
		}
	}

	authenticate() {
		this.authService.authenticate(this.mode, this.user)
			.subscribe(() => this.router.navigate(['']));
	}

  constructor(private authService:AuthService, private router:Router) { }



}
