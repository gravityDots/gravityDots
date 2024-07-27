import { Component,HostListener,ElementRef,OnInit, Renderer2, ViewChild, AfterViewInit, QueryList } from '@angular/core';
import {init} from 'aos';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

interface PortfolioImages {
  path: string;
  name: string;
  id: String;
}

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
  public activeClass = false;
  public socialIcons = [
    { href: 'https://www.instagram.com/gravitydots/', iconClass: 'fa-brands fa-instagram'},
    { href: 'https://www.facebook.com/GravityDots', iconClass: 'fa-brands fa-facebook'},
    { href: 'https://www.linkedin.com/company/gravitydots/', iconClass: 'fa-brands fa-linkedin'}
  ];

  public navList = [
    {name:'home',path:'/',id:'home-page'},
    {name:'services',path:'/services',id:'services'},
    {name:'about us',path:'/about-us',id:'about-us'},
    {name:'portfolio',path:'/portfolio',id:'portfolio'},
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

  // public portfolioImages = [
  //   {path:"assets/portfolio/BRANDING2.jpg",name:'branding', id:'branding'},
  //   {path:"assets/portfolio/BRANDING.jpg", name:'branding',id:''},
  //   {path:"assets/portfolio/BRANDING3.jpg",name:'branding',id:''},
  //   {path:"assets/portfolio/Printing Editorials & Packaging design.jpg",name:'Printing design <br> & <br> Packaging',id:'printing'},
  //   {path:"assets/portfolio/Printing Editorials & Packaging design (2).jpg",name:'Printing design <br> & <br> Packaging',id:''},
  //   {path:"assets/portfolio/Printing Editorials & Packaging design (3).jpg",name:'Printing design <br> & <br> Packaging',id:''},
  //   {path:"assets/portfolio/Social media.jpg",name:'Social media',id:'dsm'},
  //   {path:"assets/portfolio/Social media (2).jpg",name:'Social media',id:'dsm'},
  //   {path:"assets/portfolio/Social media (3).jpg",name:'Social media',id:'dsm'},
  //   {path:"assets/portfolio/Paid Advertising.jpg", name:'paid advertising',id:'ads' },
  //   {path:"assets/portfolio/SEO.jpg", name:'SEO', id:'seo'},
  // ]

  public portfolioImages = [
    {path:"https://i.postimg.cc/BbtDL8Wj/BRANDING2.jpg",name:'branding', id:'branding'},
    {path:"https://i.postimg.cc/KYynqvTW/BRANDING.jpg", name:'branding',id:''},
    {path:"https://i.postimg.cc/90S9GWVJ/BRANDING3.jpg",name:'branding',id:''},
    {path:"https://i.postimg.cc/T2Hn8cmg/Printing-Editorials-Packaging-design.jpg",name:'Printing Editorials & Packaging design',id:'printing'},
    {path:"https://i.postimg.cc/zXsWvXxf/Printing-Editorials-Packaging-design-2.jpg",name:'Printing Editorials & Packaging design',id:''},
    {path:"https://i.postimg.cc/4N7VXhbM/Printing-Editorials-Packaging-design-3.jpg",name:'Printing Editorials & Packaging design',id:''},
    {path:"https://i.postimg.cc/mDL74X8N/Social-media.jpg",name:'Social media',id:'dsm'},
    {path:"https://i.postimg.cc/76K0Z3Rv/Social-media-2.jpg",name:'Social media',id:''},
    {path:"https://i.postimg.cc/bvH1KcHw/Social-media-3.jpg",name:'Social media',id:''},
    {path:"https://i.postimg.cc/kgWSb3Hv/Paid-Advertising.jpg", name:'paid advertising',id:'ads' },
    {path:"https://i.postimg.cc/yNBZhp44/SEO.jpg", name:'SEO', id:'seo'},
  ]
  
  public brandingImages:PortfolioImages[] = [
    {path:"https://i.postimg.cc/BbtDL8Wj/BRANDING2.jpg",name:'Branding', id:'branding'},
    {path:"https://i.postimg.cc/KYynqvTW/BRANDING.jpg", name:'Branding',id:''},
    {path:"https://i.postimg.cc/90S9GWVJ/BRANDING3.jpg",name:'Branding',id:''},
  ]

  public printingImages:PortfolioImages[] = [
    {path:"https://i.postimg.cc/T2Hn8cmg/Printing-Editorials-Packaging-design.jpg",name:'Printing Editorials & Packaging design',id:'printing'},
    {path:"https://i.postimg.cc/zXsWvXxf/Printing-Editorials-Packaging-design-2.jpg",name:'Printing Editorials & Packaging design',id:''},
    {path:"https://i.postimg.cc/4N7VXhbM/Printing-Editorials-Packaging-design-3.jpg",name:'Printing Editorials & Packaging design',id:''},
  ]
  
  public socialMediaImages:PortfolioImages[] = [
    {path:"https://i.postimg.cc/mDL74X8N/Social-media.jpg",name:'Digital/ Social Media management',id:'dsm'},
    {path:"https://i.postimg.cc/76K0Z3Rv/Social-media-2.jpg",name:'Digital/ Social Media management',id:''},
    {path:"https://i.postimg.cc/bvH1KcHw/Social-media-3.jpg",name:'Digital/ Social Media management',id:''},
  ]

  public adsImages:PortfolioImages[] = [
    {path:"https://i.postimg.cc/kgWSb3Hv/Paid-Advertising.jpg", name:'paid advertising',id:'ads' },
  ]

  public developmentImages:PortfolioImages[] = []

  public contentImages:PortfolioImages[] = [
    {path:"https://i.postimg.cc/yNBZhp44/SEO.jpg", name:'Content creation & SEO', id:'seo'},
  ]

  constructor(private renderer: Renderer2,private router: Router) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
   }

  ngOnInit(): void {
    if(window.innerWidth <= 768) {
      this.activeClass = true;
    }
    this.portfolio = [
      { name: 'Branding',path:"../../assets/compressed/BRANDING (2).webp",id:'branding'},
      { name: 'Printing Editorials & Packaging design',path:"../../assets/compressed/Printing Editorials & Packaging design.webp",id:'printing'},
      { name: 'Digital/ Social Media management',path:"../../assets/compressed/Social media.webp",id:'dsm'},
      { name: 'Paid Advertising',path:"../../assets/compressed/Paid Advertising.webp", id:'ads'},
      { name: 'Creative Website Development',path:"../../assets/compressed/BRANDING (2).webp",id:'web'},
      { name: 'Content creation & SEO',path:"../../assets/compressed/SEO.webp",id:'seo'}
    ];
  
    this.createBalls();
    init({
    })
  }

  ngAfterViewInit(): void {
    if(window.innerWidth > 768) {
      this.initGSAPAnimation();
    }
  }

  // initGSAPAnimation(): void {
  //   const imagePanel = gsap.utils.toArray(".portfolio-images");

  //   gsap.to(imagePanel, {
  //     x: () => -(window.innerWidth * 0.85) * (imagePanel.length - 1),
  //     scrollTrigger: {
  //         trigger: '.portfolio',
  //         pin: true,
  //         scrub: 30,
  //         snap: {
  //           snapTo: 1 / (imagePanel.length - 1), 
  //           duration: { min: 1, max: 2 },
  //           ease: "power1.inOut"
  //         },
         
  //         end: () => {
  //             const portfolio = document.querySelector('.portfolio') as HTMLElement;
  //             return "+=" + portfolio.offsetWidth;
  //         },
  //       }
  //   });
  // }

  // initGSAPAnimation(targetId?:any): void {
  //   const portfolio = document.getElementById('portfolio') as HTMLElement;
  //   const panels = document.querySelectorAll(".panel")

  //   if (portfolio) {
  //     const totalWidth = portfolio.scrollWidth;
  //     const numPanels = panels.length;

  //     const t1 = gsap.timeline({
  //       defaults: {
  //           ease: "none"
  //       }
  //     });
  //     t1.to('.portfolio', {
  //         x: - (totalWidth - window.innerWidth),
  //         duration: numPanels * 2 
  //     });

  //     ScrollTrigger.create({
  //         animation: t1,
  //         trigger: '.portfolio',
  //         pin: true,
  //         scrub: 5,
  //         end: () => "+=" + totalWidth,
  //         snap: {
  //           snapTo: 1 / (numPanels - 1), 
  //           duration: 0.5, // Animation duration for snapping
  //           delay: 0.1, // Delay before snapping occurs
  //           ease: "power1.inOut" // Easing function for snapping
  //       }
  //     });
  //   }
  // }
  
  initGSAPAnimation(targetId?:any): void {
    const branding = document.getElementById('branding') as HTMLElement;
    const printing = document.getElementById('printing') as HTMLElement;
    const dsm = document.getElementById('dsm') as HTMLElement;
    const ads = document.getElementById('ads') as HTMLElement;
    const web = document.getElementById('web') as HTMLElement;
    const seo = document.getElementById('seo') as HTMLElement;


    const panels1 = document.querySelectorAll(".panel1")
    const panels2 = document.querySelectorAll(".panel2")
    const panels3 = document.querySelectorAll(".panel3")
    const panels4 = document.querySelectorAll(".panel4")
    const panels5 = document.querySelectorAll(".panel5")
    const panels6 = document.querySelectorAll(".panel6")


    if (branding) {
      const totalWidth = branding.scrollWidth;
      const numPanels = panels1.length;

      const t1 = gsap.timeline({
        defaults: {
            ease: "none"
        }
      });
      t1.to('.panel-wrapper1', {
          x: - (totalWidth - window.innerWidth),
          duration: numPanels 
      });

      ScrollTrigger.create({
          animation: t1,
          trigger: '.panel-wrapper1',
          pin: true,
          scrub: 3,
          end: () => "+=" + totalWidth,
          snap: {
            snapTo: 1 / (numPanels - 1), 
            duration: 0.5,
            delay: 0.1,
            ease: "power1.inOut" // Easing function for snapping
        }
      });
    }

    if (printing) {
      const totalWidth = printing.scrollWidth;
      const numPanels = panels2.length;

      const t1 = gsap.timeline({
        defaults: {
            ease: "none"
        }
      });
      t1.to('.panel-wrapper2', {
          x: - (totalWidth - window.innerWidth),
          duration: numPanels 
      });

      ScrollTrigger.create({
          animation: t1,
          trigger: '.panel-wrapper2',
          pin: true,
          scrub: 3,
          end: () => "+=" + totalWidth,
          snap: {
            snapTo: 1 / (numPanels - 1), 
            duration: 0.5,
            delay: 0.1,
            ease: "power1.inOut"
        }
      });
    }

    if (dsm) {
      const totalWidth = dsm.scrollWidth;
      const numPanels = panels3.length;

      const t1 = gsap.timeline({
        defaults: {
            ease: "none"
        }
      });
      t1.to('.panel-wrapper3', {
          x: - (totalWidth - window.innerWidth),
          duration: numPanels 
      });

      ScrollTrigger.create({
          animation: t1,
          trigger: '.panel-wrapper3',
          pin: true,
          scrub: 3,
          end: () => "+=" + totalWidth,
          snap: {
            snapTo: 1 / (numPanels - 1), 
            duration: 0.5,
            delay: 0.1,
            ease: "power1.inOut"
        }
      });
    }

    // if (ads) {
    //   const totalWidth = ads.scrollWidth;
    //   const numPanels = panels4.length;

    //   const t1 = gsap.timeline({
    //     defaults: {
    //         ease: "none"
    //     }
    //   });
    //   t1.to('.panel-wrapper4', {
    //       x: - (totalWidth - window.innerWidth),
    //       duration: numPanels 
    //   });

    //   ScrollTrigger.create({
    //       animation: t1,
    //       trigger: '.panel-wrapper4',
    //       pin: true,
    //       scrub: 3,
    //       end: () => "+=" + totalWidth,
    //       snap: {
    //         snapTo: 1 / (numPanels - 1), 
    //         duration: 0.5,
    //         delay: 0.1,
    //         ease: "power1.inOut"
    //     }
    //   });
    // }

    if (web) {
      const totalWidth = web.scrollWidth;
      const numPanels = panels5.length;

      const t1 = gsap.timeline({
        defaults: {
            ease: "none"
        }
      });
      t1.to('.panel-wrapper5', {
          x: - (totalWidth - window.innerWidth),
          duration: numPanels 
      });

      ScrollTrigger.create({
          animation: t1,
          trigger: '.panel-wrapper5',
          pin: true,
          scrub: 3,
          end: () => "+=" + totalWidth,
          snap: {
            snapTo: 1 / (numPanels - 1), 
            duration: 0.5,
            delay: 0.1,
            ease: "power1.inOut"
        }
      });
    }

    // if (seo) {
    //   const totalWidth = seo.scrollWidth;
    //   const numPanels = panels6.length;

    //   const t1 = gsap.timeline({
    //     defaults: {
    //         ease: "none"
    //     }
    //   });
    //   t1.to('.panel-wrapper6', {
    //       x: - (totalWidth - window.innerWidth),
    //       duration: numPanels 
    //   });

    //   ScrollTrigger.create({
    //       animation: t1,
    //       trigger: '.panel-wrapper6',
    //       pin: true,
    //       scrub: 3,
    //       end: () => "+=" + totalWidth,
    //       snap: {
    //         snapTo: 1 / (numPanels - 1), 
    //         duration: 0.5,
    //         delay: 0.1,
    //         ease: "power1.inOut"
    //     }
    //   });
    // }
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
      let outer = document.querySelector('.main') as HTMLElement;
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

  goToService(id: any) {
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    }
    else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
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