import { Component,HostListener,ElementRef,OnInit, Renderer2, ViewChild } from '@angular/core';
import {init} from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  // public mainServices = [
  //   { imgSrc: 'assets/Main Services.gif', description: 'Branding' },
  //   { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fbanijhrol4-annie-spratt-776x951.jpg', description: 'Printing Editorials & Packaging design' },
  //   { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/2rm8p0rkxiw-marius-masalar-776x582.jpg', description: 'Digital/ Social Media management' },
  //   { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/71nlan-2ya-andrew-neel-2-776x620.jpg', description: 'Paid Advertising' },
  //   { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/hdyo6rr3kqk-scott-webb-1172x780.jpg', description: 'Creative Website Development <br>& <br>SEO' },
  //   { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fvazbu6zae-andrew-neel-776x517.jpg', description: 'Content creation' }
  // ];


  public servicesList = [
    {
      name: "Creative Logo",
      logoPath: "assets/icons/Creative Logo.png.png"
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
      name: "Creative Logo",
      logoPath: "assets/icons/Creative Logo.png"
    },
    {
      name: "Paid Ads",
      logoPath: "assets/icons/Paid ads.png"
    }
  ];

  public servicesList2 = [
    {
      name: "SEO",
      logoPath: "assets/icons/Content creation.png"
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
      name: "Website Development",
      logoPath: "assets/icons/Website Development.png"
    },
    {
      name: "Website Maintenance and Support",
      logoPath: "assets/icons/Website Maintenance and Support.png"
    },
    {
      name: "UI/UX Design",
      logoPath: "assets/icons/UI_UX design.png"
    }
  ];

  public mainServices = [
    { imgSrc: 'https://i.postimg.cc/Xvm3Q0Cx/Main-Services.gif', description: 'Branding' },
    { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fbanijhrol4-annie-spratt-776x951.jpg', description: 'Printing Editorials & Packaging design' },
    { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/2rm8p0rkxiw-marius-masalar-776x582.jpg', description: 'Digital/ Social Media management' },
    { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/71nlan-2ya-andrew-neel-2-776x620.jpg', description: 'Paid Advertising' },
    { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/hdyo6rr3kqk-scott-webb-1172x780.jpg', description: 'Creative Website Development <br>& <br>SEO' },
    { imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fvazbu6zae-andrew-neel-776x517.jpg', description: 'Content creation' }
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
    init({})
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
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}