import { Component,HostListener,ElementRef,OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {init} from 'aos';
import { Router } from '@angular/router';

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
  @ViewChild('main', { static: true }) main!: ElementRef;
  @ViewChild('homePage', { static: true }) homePage!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;

  public logoPath = 'assets/GRAVITYDOTS LOGO.png';
  public defaultHomePath = '/'
  public logopathTwo = 'assets/GRAVITYDOTS LOGO 2.png';
  public logoAltText = 'GravityDots';
  public showMenu = false;
  public isHidden = false;
  private lastScrollTop = 0;
  private scrollThreshold = 100;
  public currentClass: string = 'toggle-menu';
  public showNavList:boolean = false;
  
  public socialIcons = [
    { href: 'https://www.instagram.com/gravitydots/', iconClass: 'fa-brands fa-instagram', color: '#ffffff' },
    { href: 'https://www.facebook.com/GravityDots', iconClass: 'fa-brands fa-facebook', color: '#ffffff' },
    { href: 'https://www.linkedin.com/company/gravitydots/', iconClass: 'fa-brands fa-linkedin', color: '#ffffff' }
  ];

  public navList = [
    {name:'home',path:'/',id:'home-page'},
    {name:'services',path:'/services',id:'services'},
    {name:'about us',path:'/about-us',id:'about-us'},
    {name:'contact us',path:'/contact-us',id:'contact-us'}
  ];

  public mainServices = [
    { imgSrc: 'assets/services/Branding.jpg', description: 'Branding' },
    { imgSrc: 'assets/services/Printing Editorials & Packaging design.jpg', description: 'Printing Editorials & Packaging design' },
    { imgSrc: 'assets/services/Digital_ Social Media management.jpg', description: 'Digital/ Social Media management' },
    { imgSrc: 'assets/services/Paid Advertising.jpg', description: 'Paid Advertising' },
    { imgSrc: 'assets/services/Creative Website Developmen.jpg', description: 'Creative Website Development' },
    { imgSrc: 'assets/services/Seo.jpg', description: 'Content creation <br>& <br>SEO' }
  ];

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
    'assets/clients/11.png',
    'assets/clients/12.png',
        // list repeat
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
    'assets/clients/11.png',
    'assets/clients/12.png',
    // list repeat
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
    'assets/clients/11.png',
    'assets/clients/12.png'
  ];
  public clientImages2: string[] = [
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
    //list repeat
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
     //list repeat
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

  public servicesList = [
    {
      name: "Creative Logo",
      logoPath: "assets/icons/Creative Logo.png"
    },
    {
      name: "Customised Branding",
      logoPath: "assets/icons/Customised branding.png"
    },
    {
      name: "Flyer/Brochure/Menu Card",
      logoPath: "assets/icons/Flyer_Brochure_Menu card.png"
    },
    {
      name: "Graphical Design",
      logoPath: "assets/icons/Graphical Design.png"
    },
    {
      name: "Digital Marketing",
      logoPath: "assets/icons/Digital Marketing.png"
    },
    {
      name: "Social Media Management",
      logoPath: "assets/icons/Social media management.png"
    },
    {
      name: "Paid Ads",
      logoPath: "assets/icons/Paid ads.png"
    },
    {
      name: "UI/UX Design",
      logoPath: "assets/icons/UI_UX design.png"
    },
    //repeat
    {
      name: "Creative Logo",
      logoPath: "assets/icons/Creative Logo.png"
    },
    {
      name: "Customised Branding",
      logoPath: "assets/icons/Customised branding.png"
    },
    {
      name: "Flyer/Brochure/Menu Card",
      logoPath: "assets/icons/Flyer_Brochure_Menu card.png"
    },
    {
      name: "Graphical Design",
      logoPath: "assets/icons/Graphical Design.png"
    },
    {
      name: "Digital Marketing",
      logoPath: "assets/icons/Digital Marketing.png"
    },
    {
      name: "Social Media Management",
      logoPath: "assets/icons/Social media management.png"
    },
    {
      name: "Paid Ads",
      logoPath: "assets/icons/Paid ads.png"
    },
    {
      name: "UI/UX Design",
      logoPath: "assets/icons/UI_UX design.png"
    },
    //repeat
    {
      name: "Creative Logo",
      logoPath: "assets/icons/Creative Logo.png"
    },
    {
      name: "Customised Branding",
      logoPath: "assets/icons/Customised branding.png"
    },
    {
      name: "Flyer/Brochure/Menu Card",
      logoPath: "assets/icons/Flyer_Brochure_Menu card.png"
    },
    {
      name: "Graphical Design",
      logoPath: "assets/icons/Graphical Design.png"
    },
    {
      name: "Digital Marketing",
      logoPath: "assets/icons/Digital Marketing.png"
    },
    {
      name: "Social Media Management",
      logoPath: "assets/icons/Social media management.png"
    },
    {
      name: "Paid Ads",
      logoPath: "assets/icons/Paid ads.png"
    },
    {
      name: "UI/UX Design",
      logoPath: "assets/icons/UI_UX design.png"
    }
  ];

  public servicesList2 = [
    {
      name: "SEO",
      logoPath: "assets/icons/SEO.png"
    },
    {
      name: "Content Creation",
      logoPath: "assets/icons/Content creation.png"
    },
    {
      name: "Keyword Research",
      logoPath: "assets/icons/Keyword research.png"
    },
    {
      name: "Influencer Marketing",
      logoPath: "assets/icons/Influencer Marketing.png"
    },
    {
      name: "Traditional Marketing",
      logoPath: "assets/icons/Traditional Marketing.png"
    },
    {
      name: "UI/UX Design",
      logoPath: "assets/icons/UI_UX design.png"
    },
    {
      name: "Website Development",
      logoPath: "assets/icons/Website Development.png"
    },
    {
      name: "Website Maintenance and Support",
      logoPath: "assets/icons/Website Maintenance and Support.png"
    },
    //repeat
    {
      name: "SEO",
      logoPath: "assets/icons/SEO.png"
    },
    {
      name: "Content Creation",
      logoPath: "assets/icons/Content creation.png"
    },
    {
      name: "Keyword Research",
      logoPath: "assets/icons/Keyword research.png"
    },
    {
      name: "Influencer Marketing",
      logoPath: "assets/icons/Influencer Marketing.png"
    },
    {
      name: "Traditional Marketing",
      logoPath: "assets/icons/Traditional Marketing.png"
    },
    {
      name: "UI/UX Design",
      logoPath: "assets/icons/UI_UX design.png"
    },
    {
      name: "Website Development",
      logoPath: "assets/icons/Website Development.png"
    },
    {
      name: "Website Maintenance and Support",
      logoPath: "assets/icons/Website Maintenance and Support.png"
    },
    //repeat
    {
      name: "SEO",
      logoPath: "assets/icons/SEO.png"
    },
    {
      name: "Content Creation",
      logoPath: "assets/icons/Content creation.png"
    },
    {
      name: "Keyword Research",
      logoPath: "assets/icons/Keyword research.png"
    },
    {
      name: "Influencer Marketing",
      logoPath: "assets/icons/Influencer Marketing.png"
    },
    {
      name: "Traditional Marketing",
      logoPath: "assets/icons/Traditional Marketing.png"
    },
    {
      name: "UI/UX Design",
      logoPath: "assets/icons/UI_UX design.png"
    },
    {
      name: "Website Development",
      logoPath: "assets/icons/Website Development.png"
    },
    {
      name: "Website Maintenance and Support",
      logoPath: "assets/icons/Website Maintenance and Support.png"
    }
  ];

  constructor(private renderer: Renderer2,private router: Router) { }

  ngOnInit(): void {
    this.createBalls();
    // this.createShapes();
    init({
    })
  }

  toDefaultPath() {
    document.getElementById('home-page')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  toggleMenu(path?:any,goToDiv?:any){
    if(path && goToDiv) {
      if (path) {
        this.router.navigate([path]).then(() => {
          if (goToDiv) {
            document.getElementById(goToDiv)?.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } else {
        if (goToDiv) {
          document.getElementById(goToDiv)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    if(window.innerWidth <= 768) {
      this.showMenu = !this.showMenu;
    }
    if (this.showMenu) {
      this.isHidden = false
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }

    this.showNavList = !this.showNavList;
    this.currentClass = this.currentClass === 'toggle-menu' ? 'close-menu' : 'toggle-menu';
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

  createShapes() {
    const colors = ["#FFF", "#ffffff00"];
    const numShapes = 70;
    const shapes: HTMLElement[] = [];
    const shapeClasses = ['square', 'triangle', 'pentagon', 'hexagon'];
  
    for (let i = 0; i < numShapes; i++) {
      let shape = this.renderer.createElement('div');
      const shapeClass = shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
      
      this.renderer.addClass(shape, 'shape');
      this.renderer.addClass(shape, shapeClass);
      this.renderer.setStyle(shape, 'background', colors[Math.floor(Math.random() * colors.length)]);
      this.renderer.setStyle(shape, 'border', '1px solid white');
      this.renderer.setStyle(shape, 'left', `${Math.floor(Math.random() * 95)}vw`);
      this.renderer.setStyle(shape, 'top', `${Math.floor(Math.random() * 10)}vh`);
      this.renderer.setStyle(shape, 'transform', `scale(${Math.random()})`);
  
      const size = `${Math.random()}em`;
      if (shapeClass !== 'triangle') {
        this.renderer.setStyle(shape, 'width', size);
        this.renderer.setStyle(shape, 'height', size);
      }
  
      shapes.push(shape);
      this.renderer.appendChild(this.container.nativeElement, shape);
    }
  
    shapes.forEach((el, i) => {
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

  createBalls() {
    const colors = ["#FFF", "#ffffff00"];
    const numBalls = 80;
    const balls: HTMLElement[] = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = this.renderer.createElement('div');
      this.renderer.addClass(ball, 'ball');
      this.renderer.setStyle(ball, 'background', colors[Math.floor(Math.random() * colors.length)]);
      this.renderer.setStyle(ball, 'left', `${Math.floor(Math.random() * 95)}vw`);
      this.renderer.setStyle(ball, 'border', '1px solid white');

      if(window.innerWidth <= 425) {
        this.renderer.setStyle(ball, 'top', `${Math.floor(Math.random() * 500)}vh`);
      }
      else {
        this.renderer.setStyle(ball, 'top', `${Math.floor(Math.random() * 550)}vh`);
      }
      this.renderer.setStyle(ball, 'transform', `scale(${Math.random()})`);
      const size = `${Math.random()}em`;
      this.renderer.setStyle(ball, 'width', size);
      this.renderer.setStyle(ball, 'height', size);

      balls.push(ball);
      this.renderer.appendChild(this.main.nativeElement, ball);
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
}