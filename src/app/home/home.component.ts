import { Component,HostListener,ElementRef,OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {init} from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('moveBox', [
      state('move', style({ transform: 'translateX(0) translateY(0)' })),
      transition('* => move', [
        animate('2s', style({ transform: 'translateX({{x}}px) translateY({{y}}px)' }))
      ], { params: { x: 0, y: 0 } })
    ])
  ]

})
export class HomeComponent implements OnInit{
  @ViewChild('container', { static: true }) container!: ElementRef;

  public logoPath = 'assets/GRAVITYDOTS LOGO.png';
  public logoAltText = 'GravityDots';
  public showMenu = false;
  private targetSectionPosition: number | undefined;

  public logopathTwo = 'assets/GRAVITYDOTS LOGO 2.png';

  public socialIcons = [
    { href: 'https://www.instagram.com/gravitydots/', iconClass: 'fa-brands fa-instagram', color: '#ffffff' },
    { href: 'https://www.facebook.com/GravityDots', iconClass: 'fa-brands fa-facebook', color: '#ffffff' },
    { href: 'https://www.linkedin.com/company/gravitydots/', iconClass: 'fa-brands fa-linkedin', color: '#ffffff' }
  ];

  public navList = [
    {name:'home',path:'/#home-page'},
    {name:'services',path:'#services'},
    {name:'about us',path:'#about-us'},
    {name:'contact us',path:'#contact-us'}
  ];

  public mainServices = [
    { imgSrc: 'assets/services/Branding.jpg', description: 'Branding' },
    { imgSrc: 'assets/services/Printing Editorials & Packaging design.jpg', description: 'Printing Editorials & Packaging design' },
    { imgSrc: 'assets/services/Digital_ Social Media management.jpg', description: 'Digital/ Social Media management' },
    { imgSrc: 'assets/services/Paid Advertising.jpg', description: 'Paid Advertising' },
    { imgSrc: 'assets/services/Creative Website Developmen.jpg', description: 'Creative Website Development' },
    { imgSrc: 'assets/services/Seo.jpg', description: 'Content creation <br>& <br>SEO' }
  ];

  public boxes: Array<{ top: number, left: number, zIndex: number,imagePath: string }> = [];
  public clientImages: string[] = [
    'assets/clients/1.png',
    'assets/clients/2.png',
    'assets/clients/3.png',
    'assets/clients/4.png',
    'assets/clients/5.png',
    'assets/clients/6.png',
    'assets/clients/7.png',
    'assets/clients/8.png',
    'assets/clients/9.png',
    'assets/clients/10.png',
    'assets/clients/12.png',
    'assets/clients/13.png',
    'assets/clients/14.png',
    'assets/clients/15.png',
    'assets/clients/16.png',
    'assets/clients/17.png',
    'assets/clients/18.png',
    'assets/clients/19.png',
    'assets/clients/20.png',
    'assets/clients/21.png',
    'assets/clients/22.png',
    'assets/clients/23.png',
    'assets/clients/24.png',
  ];
  // public servicesList = [
  //   {
  //     name: "Creative Logo",
  //     logoPath: "https://i.postimg.cc/63ckFJ7D/Creative-Logo.png"
  //   },
  //   {
  //     name: "Customised Branding",
  //     logoPath: "https://i.postimg.cc/fLM4HTbc/Customised-branding.png"
  //   },
  //   {
  //     name: "Flyer/Brochure/Menu Card",
  //     logoPath: "https://i.postimg.cc/Zq8tFyJY/Flyer-Brochure-Menu-card.png"
  //   },
  //   {
  //     name: "Graphical Design",
  //     logoPath: "https://i.postimg.cc/25RNZxRX/Graphical-Design.png"
  //   },
  //   {
  //     name: "Digital Marketing",
  //     logoPath: "https://i.postimg.cc/XYy0qzhC/Digital-Marketing.png"
  //   },
  //   {
  //     name: "Social Media Management",
  //     logoPath: "https://i.postimg.cc/J4FL1LT8/Social-media-management.png"
  //   },
  //   {
  //     name: "Creative Logo",
  //     logoPath: "https://i.postimg.cc/63ckFJ7D/Creative-Logo.png"
  //   },
  //   {
  //     name: "Paid Ads",
  //     logoPath: "https://i.postimg.cc/1RJSj6wf/Paid-ads.png"
  //   }
  // ];

  // public servicesList2 = [
  //   {
  //     name: "SEO",
  //     logoPath: "https://i.postimg.cc/Gt71Twdk/SEO.png"
  //   },
  //   {
  //     name: "Content Creation",
  //     logoPath: "https://i.postimg.cc/k4yC9RHY/Content-creation.png"
  //   },
  //   {
  //     name: "Keyword Research",
  //     logoPath: "https://i.postimg.cc/hjnnH127/Keyword-research.png"
  //   },
  //   {
  //     name: "Influencer Marketing",
  //     logoPath: "https://i.postimg.cc/d3tY0tPs/Influencer-Marketing.png"
  //   },
  //   {
  //     name: "Traditional Marketing",
  //     logoPath: "https://i.postimg.cc/65b9yRpD/Traditional-Marketing.png"
  //   },
  //   {
  //     name: "Website Development",
  //     logoPath: "https://i.postimg.cc/XYZnFJZX/Website-Development.png"
  //   },
  //   {
  //     name: "Website Maintenance and Support",
  //     logoPath: "https://i.postimg.cc/Bnd4C0Dp/Website-Maintenance-and-Support.png"
  //   },
  //   {
  //     name: "UI/UX Design",
  //     logoPath: "https://i.postimg.cc/nchFFTp4/UI-UX-design.png"
  //   }
  // ];
  
  public isHidden = false;
  private lastScrollTop = 0;
  private scrollThreshold = 100;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.createBalls();
    this.generateRandomBoxes();
    this.animateBoxes();
    init({
    })
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.showMenu && window.innerWidth <= 768) {
      return;
    }

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.scrollThreshold) {
      if (currentScroll > this.lastScrollTop) {
        this.isHidden = true; // Scroll down
      } else {
        this.isHidden = false; // Scroll up
      }
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  createBalls() {
    const colors = ["#FFF", "#ffffff00"];
    const numBalls = 50;
    const balls: HTMLElement[] = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = this.renderer.createElement('div');
      let containerHeight = this.container.nativeElement.offsetHeight
      this.renderer.addClass(ball, 'ball');
      this.renderer.setStyle(ball, 'background', colors[Math.floor(Math.random() * colors.length)]);
      this.renderer.setStyle(ball, 'left', `${Math.floor(Math.random() * 95)}vw`);
      this.renderer.setStyle(ball, 'border', '1px solid white');
      this.renderer.setStyle(ball, 'top', `${Math.floor(Math.random() * 400)}vh`);
      this.renderer.setStyle(ball, 'transform', `scale(${Math.random()})`);
      const size = `${Math.random()}em`;
      this.renderer.setStyle(ball, 'width', size);
      this.renderer.setStyle(ball, 'height', size);

      balls.push(ball);
      this.renderer.appendChild(this.container.nativeElement, ball);
    }

    balls.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      el.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000, 
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
    });
  }

  toggleMenu(){
    if(window.innerWidth <= 768) {
      this.showMenu = !this.showMenu;
    }
    if (this.showMenu) {
      this.isHidden = false
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  generateRandomBoxes(): void {
    let containerSize = window.innerWidth <= 768 ? window.innerWidth : 600;
    let boxSize = window.innerWidth <= 768 ? 80 : 100;

    const overlap = 3;
    const numberOfBoxes = 30;

    for (let i = 0; i < numberOfBoxes; i++) {
      let positionValid = false;
      let top = 0;
      let left = 0;

      while (!positionValid) {
        top = Math.random() * (containerSize - boxSize);
        left = Math.random() * (containerSize - boxSize);

        positionValid = this.checkPosition(top, left, boxSize, overlap);
      }

      const zIndex = Math.floor(Math.random() * 10) + 1; 
      const imagePath = this.getRandomImagePath();

      this.boxes.push({ top, left, zIndex,imagePath });
    }
  }

  checkPosition(top: number, left: number, boxSize: number, overlap: number): boolean {
    if (this.boxes.length === 0) {
      return true;
    }

    for (let box of this.boxes) {
      const topDiff = Math.abs(box.top - top);
      const leftDiff = Math.abs(box.left - left);

      if ((topDiff < boxSize - overlap && topDiff > boxSize + overlap) ||
          (leftDiff < boxSize - overlap && leftDiff > boxSize + overlap)) {
        return false;
      }
    }
    return true;
  }

  animateBoxes(): void {
    let containerSize = window.innerWidth <= 768 ? window.innerWidth : 600;
    let boxSize = window.innerWidth <= 768 ? 80 : 100;

    setInterval(() => {
      this.boxes.forEach(box => {
        box.top = Math.random() * (containerSize - boxSize);
        box.left = Math.random() * (containerSize - boxSize);
        box.zIndex = Math.floor(Math.random() * 10) + 1;
      });
    }, 2000);
  }

  getRandomImagePath(): string {
    const index = Math.floor(Math.random() * this.clientImages.length);
    return this.clientImages[index];
  }
}