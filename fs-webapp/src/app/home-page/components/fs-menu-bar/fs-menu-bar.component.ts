import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'fs-menu-bar',
  templateUrl: './fs-menu-bar.component.html'
})

export class FSMenuBarComponent implements OnInit {
  children: NodeList | null = null;

  currentSection = 'home';

  imagePath = 'flyshipp.png';

  isNavbarCollapsed = true;

  @HostListener('window:scroll', ['$event']) private onScroll(event: any) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    const parentOffset = event.target.scrollingElement.offsetTop;
    this.children?.forEach((element) => {
      const element_: HTMLElement = element as HTMLElement;
      if ((element_.offsetTop - parentOffset) <= scrollTop) {
        this.currentSection = element_.id;
      }
    });
  }

  links = [
    { title: 'FlyShipp SPA', fragment: 'home' },
    { title: 'Quienes somos', fragment: 'presentation' },
    { title: 'Trabaja con nosotros', fragment: 'workWithUs' },
    { title: 'Contactos', fragment: 'services' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.children = document.querySelectorAll('.fs-section');
  }

  onNavSelected(event: string) {
    this.children?.forEach((element) => {
      const element_: HTMLElement = element as HTMLElement;
      if (element_.id === event) {
        element_.scrollIntoView({ behavior: "smooth" });
      }
    })
  }
}
