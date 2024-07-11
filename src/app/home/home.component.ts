import { Component,HostListener,ElementRef,OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import {init} from 'aos';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit,AfterViewInit{
  @ViewChild('main', { static: true }) main!: ElementRef;
  @ViewChild('homePage', { static: true }) homePage!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('contactUs') contactUs!: ElementRef;
  @ViewChild('portfolioImageContainer') portfolioImageContainer!: ElementRef;


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
    { href: 'https://www.instagram.com/gravitydots/', iconClass: 'fa-brands fa-instagram'},
    { href: 'https://www.facebook.com/GravityDots', iconClass: 'fa-brands fa-facebook'},
    { href: 'https://www.linkedin.com/company/gravitydots/', iconClass: 'fa-brands fa-linkedin'}
  ];

  public navList = [
    {name:'home',path:'/',id:'home-page'},
    {name:'services',path:'/services',id:'services'},
    {name:'about us',path:'/about-us',id:'about-us'},
    // {name:'portfolio',path:'/portfolio',id:'portfolio'},
    {name:'contact us',path:'/contact-us',id:'contact-us'}
  ];

  public mainServices = [
    { imgSrc: 'assets/services/Branding.jpg', description: 'Branding', id:'branding'},
    { imgSrc: 'assets/services/Printing Editorials & Packaging design.jpg', description: 'Printing Editorials & Packaging design', id:'printing' },
    { imgSrc: 'assets/services/Digital_ Social Media management.jpg', description: 'Digital/ Social Media management', id:'dsm' },
    { imgSrc: 'assets/services/Paid Advertising.jpg', description: 'Paid Advertising', id:'ads' },
    { imgSrc: 'assets/services/Creative Website Developmen.jpg', description: 'Creative Website Development', id:'web' },
    { imgSrc: 'assets/services/Seo.jpg', description: 'Content creation <br>& <br>SEO', id:'seo' }
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
    'assets/clients/25.jpg',
    'assets/clients/26.jpg',
    'assets/clients/27.jpg',
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

  // public portfolio = [
  //   { name: 'Branding',path:"../../assets/portfolio/BRANDING.jpg",id:'branding'},
  //   { name: 'Printing Editorials & Packaging design',path:"../../assets/portfolio/Printing Editorials & Packaging design.jpg",id:'printing'},
  //   { name: 'Digital/ Social Media management',path:"../../assets/portfolio/Social media.jpg",id:'dsm'},
  //   { name: 'Paid Advertising',path:"../../assets/portfolio/Paid Advertising.jpg", id:'ads'},
  //   { name: 'Creative Website Development',path:"../../assets/portfolio/BRANDING (2).jpg",id:'web'},
  //   { name: 'Content creation & SEO',path:"../../assets/portfolio/SEO.jpg",id:'seo'}
  // ];
  public portfolio:any = [];
  loadedImages: string[] = [];

  public portfolioImages = [
    {
      name:"branding",
      id:'branding',
      images:[
        {path:"assets/portfolio/BRANDING (2).jpg",name:'branding', id:'branding'},
        {path:"assets/portfolio/BRANDING.jpg", name:'branding', id:'branding'},
        {path:"assets/portfolio/BRANDING (3).jpg",name:'branding', id:'branding'},
      ]
    },
    {
      name:"Packaging design <br> & <br> Printing Editorials",
      id:'printing',
      images:[
        {path:"assets/portfolio/Printing Editorials & Packaging design.jpg",name:'Printing Editorials & Packaging design',id:'printing'},
        {path:"assets/portfolio/Printing Editorials & Packaging design (2).jpg",name:'Printing Editorials & Packaging design',id:'printing'},
        {path:"assets/portfolio/Printing Editorials & Packaging design (3).jpg",name:'Printing Editorials & Packaging design',id:'printing'},
      ]
    },
    {
      name:"Social media",
      id:'dsm',
      images:[
        {path:"assets/portfolio/Social media.jpg",name:'Social media',id:'dsm'},
        {path:"assets/portfolio/Social media (2).jpg",name:'Social media',id:'dsm'},
        {path:"assets/portfolio/Social media (3).jpg",name:'Social media',id:'dsm'}
      ]
    },
    {
      name:"paid advertising",
      id:'ads',
      images:[
        {path:"assets/portfolio/Paid Advertising.jpg", name:'paid advertising',id:'ads' },
      ]
    },
    {
      name:"SEO",
      id:'seo',
      images:[
        {path:"assets/portfolio/SEO.jpg", name:'SEO', id:'seo'},
      ]
    }
    
  ]

  constructor(private renderer: Renderer2,private router: Router) {
    gsap.registerPlugin(ScrollTrigger);
   }

  ngOnInit(): void {
    this.portfolio = [
      { name: 'Branding',path:"../../assets/compressed/BRANDING (2).webp",id:'branding'},
      { name: 'Printing Editorials & Packaging design',path:"../../assets/compressed/Printing Editorials & Packaging design.webp",id:'printing'},
      { name: 'Digital/ Social Media management',path:"../../assets/compressed/Social media.webp",id:'dsm'},
      { name: 'Paid Advertising',path:"../../assets/compressed/Paid Advertising.webp", id:'ads'},
      { name: 'Creative Website Development',path:"../../assets/compressed/BRANDING (2).webp",id:'web'},
      { name: 'Content creation & SEO',path:"../../assets/compressed/SEO.webp",id:'seo'}
    ];

    // const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       this.loadImage(entry.target.getAttribute('data-src'));
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // });
  
    // this.portfolio.forEach(item => {
    //   const img = document.createElement('img');
    //   img.setAttribute('data-src', item.path);
    //   img.classList.add('lazyloaded');
    //   observer.observe(img);
    // });

    this.createBalls();
    // this.createShapes();
    init({
    })
  }

  ngAfterViewInit(): void {
    // this.initGSAPAnimation();
  }

  initGSAPAnimation(): void {
    const imagePanel = gsap.utils.toArray(".portfolio-images");

    gsap.to(imagePanel, {
      xPercent: -100 * (imagePanel.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: '.portfolio',
        pin: true,
        scrub: 2,
        snap: 1 / (imagePanel.length - 1),
        end: () => {
          const portfolio = document.querySelector('.portfolio') as HTMLElement;
          return "+=" + portfolio.offsetWidth;
        }
      }
    });
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

    if(path === '/contact-us' && goToDiv === 'contact-us'){
      let outer = document.querySelector('.main-outer') as HTMLElement;
      window.scrollTo(0,outer.offsetHeight)
    }

    this.showNavList = !this.showNavList;
    this.currentClass = this.currentClass === 'toggle-menu' ? 'close-menu' : 'toggle-menu';
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll():void {
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

  goToService(id:any){
    let serviceListItem =  document.getElementById(id) as HTMLElement;
    if(window.innerWidth <= 768) {
      setTimeout(() => {
        serviceListItem?.scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    }
    else {
      serviceListItem?.scrollIntoView({ behavior: 'smooth' });
    }

    // serviceListItem.classList.add('active-portfolio')
  }

  createBalls() {
    const colors = ["#FFF", "#ffffff00"];
    const numBalls = 80;
    const balls: HTMLElement[] = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = this.renderer.createElement('div');
      this.renderer.addClass(ball, 'ball');
      this.renderer.setStyle(ball, 'background', colors[Math.floor(Math.random() * colors.length)]);
      this.renderer.setStyle(ball, 'border', '1px solid white');
      if(window.innerWidth <= 425) {
        this.renderer.setStyle(ball, 'top', `${Math.floor(Math.random() * 400)}vh`);
        this.renderer.setStyle(ball, 'left', `${Math.floor(Math.random() * 80)}vw`);
      }
      else {
        this.renderer.setStyle(ball, 'top', `${Math.floor(Math.random() * 450)}vh`);
        this.renderer.setStyle(ball, 'left', `${Math.floor(Math.random() * 90)}vw`);
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