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
    let refreshCount:any = sessionStorage.getItem('refreshCount');
    refreshCount = refreshCount ? parseInt(refreshCount, 10) : 0;

    if (refreshCount < 3) {
      sessionStorage.setItem('refreshCount', (refreshCount + 1).toString());
      window.location.reload();
    } else {
      this.loadContent();
      sessionStorage.removeItem('refreshCount');
    }
  }

  loadContent(): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
}
