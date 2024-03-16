import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (userPrefersDark) {
      this.setThema('dark')
    }
    if (userPrefersLight) {
      this.setThema('light')
    }
  }

  title = 'Web-Reconocimiento';

  //js normal 
  //const setTheme = theme => document.documentElement.className = theme;
  setThema(t: string) {
    // document.body.classList.toggle('dark')
    document.documentElement.className = t;
  }

}
