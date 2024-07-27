import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoading = true;
  // public logoPath = '../../assets/GRAVITYDOTS LOGO.png'
  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
}
