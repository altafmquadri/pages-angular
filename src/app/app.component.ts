import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 3;

  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Oh Sunny Day',
      url:
        'https://images.unsplash.com/photo-1563630381190-77c336ea545a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'A white Rose',
      url:
        'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'The perfect snack',
      url:
        'https://images.unsplash.com/photo-1468577760773-139c2f1c335f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8amFtfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
  ];
}
