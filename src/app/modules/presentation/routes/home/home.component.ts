import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	sectionTitle: string = 'Home';
	title:string = 'Home'

	subscribeToEmitter(event: string) {
		this.sectionTitle = event;
	}

	currentYear = new Date().getFullYear();

	constructor() {}

	ngOnInit() {}
}
