import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  
  isScrolled = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onWindowScroll() {
    let element = document.querySelector('.nav') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbarShow');
    } else {
      element.classList.remove('navbarShow');
    }
  }
 
}
