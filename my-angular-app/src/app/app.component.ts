import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<{ message: string }>('http://localhost:8000/api/hello')
      .subscribe({
        next: (response) => {
          this.message = response.message;
        },
        error: (error) => {
          console.error('Error fetching data:', error);
          this.message = 'Error connecting to backend';
        },
      });
  }
}
