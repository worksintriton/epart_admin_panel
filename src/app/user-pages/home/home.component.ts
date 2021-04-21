import { Component, OnInit } from '@angular/core';
import 'owl.carousel';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  
      $(window).on('load', function () {
        $('[data-bgimg]').each(function () {
          var bgImgUrl = $(this).data('bgimg');
          $(this).css({
            'background-image': 'url(' + bgImgUrl + ')', 
          });
        });
      });

      $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
         $(".sticky-header").removeClass("sticky");
        }else{
         $(".sticky-header").addClass("sticky");
        }
    });
 
    $(document).ready(function() {
      $('.slider_area').owlCarousel({
        animateOut: 'fadeOut',
        autoplay: true,
        loop: true,
            nav: false,
            autoplayTimeout: 8000,
            items: 1,
            dots:true,
        });
    });

      $('.product_column5').on('changed.owl.carousel initialized.owl.carousel', function (event) {
          $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
          autoplay: true,
          loop: true,
          nav: true,
          autoplayTimeout: 8000,
          items: 5,
          margin:20,
          dots:false,
          navText: ['<i class="ion-ios-arrow-thin-left"></i>','<i class="ion-ios-arrow-thin-right"></i>'],
          responsiveClass:true,
      responsive:{
          0:{
          items:1,
        },
              576:{
          items:2,
        },
              768:{
          items:3,
        },
              992:{
          items:4,
        },
              1200:{
          items:5,
        },


        }
    });
  
        $('.product_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplayTimeout: 8000,
            items: 4,
            margin:20,
            dots:false,
            navText: ['<i class="ion-ios-arrow-thin-left"></i>','<i class="ion-ios-arrow-thin-right"></i>'],
            responsiveClass:true,
        responsive:{
            0:{
            items:1,
          },
                576:{
            items:2,
          },
                768:{
            items:3,
          },
                992:{
            items:4,
          },


          }
      });
  
      $('.product_sidebar_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
          $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
          autoplay: true,
          loop: true,
          nav: true,
          autoplayTimeout: 8000,
          items: 4,
          margin:20,
          dots:false,
          navText: ['<i class="ion-ios-arrow-thin-left"></i>','<i class="ion-ios-arrow-thin-right"></i>'],
          responsiveClass:true,
      responsive:{
          0:{
          items:1,
        },
              576:{
          items:2,
        },
              768:{
          items:3,
        },
                  
              1200:{
          items:4,
        },
        }
    });


        /*---featured column3 activation---*/
        $('.featured_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
          $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
          autoplay: true,
      loop: true,
          nav: false,
          autoplayTimeout: 8000,
          items: 3,
          dots:false,
          responsiveClass:true,
      responsive:{
          0:{
          items:1,
        },
              768:{
          items:2,
        },
              992:{
          items:3,
        },
  
        }
      });
      
  
      /*---product column3 activation---*/
      $('.product_column3').owlCarousel({
          autoplay: true,
      loop: true,
          nav: true,
          autoplayTimeout: 8000,
          items: 3,
          margin:20,
          dots:false,
          navText: ['<i class="ion-ios-arrow-thin-left"></i>','<i class="ion-ios-arrow-thin-right"></i>'],
          responsiveClass:true,
      responsive:{
          0:{
          items:1,
        },
              768:{
          items:2,
        },
              992:{
          items:3,
        },
  
        }
      });
      
      /*---product column2 activation---*/
      $('.product_column2').owlCarousel({
          autoplay: true,
      loop: true,
          nav: true,
          autoplayTimeout: 8000,
          items: 2,
          margin:20,
          dots:false,
          navText: ['<i class="ion-ios-arrow-thin-left"></i>','<i class="ion-ios-arrow-thin-right"></i>'],
          responsiveClass:true,
      responsive:{
          0:{
          items:1,
        },
              768:{
          items:1,
                  margin:0,
        },
               992:{
          items:2,
        },   
        }
      });
      
      $('#nav-tab a,#nav-tab2 a').on('click', function (e) {
          e.preventDefault()
          $(this).tab('show')
      })
      
      /*---product column4 activation---*/
      $('.blog_column4').owlCarousel({
          autoplay: true,
      loop: true,
          nav: true,
          autoplayTimeout: 8000,
          items: 4,
          margin:20,
          dots:false,
          navText: ['<i class="ion-ios-arrow-thin-left"></i>','<i class="ion-ios-arrow-thin-right"></i>'],
          responsiveClass:true,
      responsive:{
          0:{
          items:1,
        },
              768:{
          items:3,
        },
               992:{
          items:3,
        }, 
              1200:{
          items:4,
        }, 
        }
      });
      
      /*---blog thumb activation---*/
      $('.blog_thumb_active').owlCarousel({
          autoplay: true,
      loop: true,
          nav: true,
          autoplayTimeout: 8000,
          items: 1,
          margin:20,
          navText: ['<i class="ion-ios-arrow-thin-left"></i>','<i class="ion-ios-arrow-thin-right"></i>'],
      });
      
      /*---brand container activation---*/
       $('.brand_container').on('changed.owl.carousel initialized.owl.carousel', function (event) {
          $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
          autoplay: true,
      loop: true,
          nav: false,
          autoplayTimeout: 8000,
          items: 5,
          dots:false,
          responsiveClass:true,
      responsive:{
          0:{
          items:1,
        },
              480:{
          items:2,
        },
              768:{
          items:3,
        },
              992:{
          items:4,
        },
              1200:{
          items:5,
        },
  
        }
      });
      
      /*---small product activation---*/
      $('.small_product_active').slick({
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1,
          arrows:false,
          rows: 3,
          responsive:[
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                    slidesToScroll: 1,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                    slidesToScroll: 1,
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                    slidesToScroll: 2,
                }
              },
          ]
      });
  
      /*---single product activation---*/
      $('.single-product-active').owlCarousel({
          autoplay: true,
      loop: true,
          nav: true,
          autoplayTimeout: 8000,
          items: 4,
          margin:15,
          dots:false,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsiveClass:true,
      responsive:{
          0:{
          items:1,
        },
              320:{
          items:2,
        },
              992:{
          items:3,
        },
              1200:{
          items:4,
        },
  
  
        }
      });
   
      /*---testimonial active activation---*/
      $('.testimonial_active').owlCarousel({
          autoplay: true,
      loop: true,
          nav: false,
          autoplayTimeout: 8000,
          items: 1,
          dots:true,
      })
   
      /*---product navactive activation---*/
      $('.product_navactive').owlCarousel({
          autoplay: true,
      loop: true,
          nav: true,
          autoplayTimeout: 8000,
          items: 4,
          dots:false,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsiveClass:true,
      responsive:{
          0:{
          items:1,
        },
              250:{
          items:2,
        },
              480:{
          items:3,
        },
              768:{
          items:4,
        },
        
          }
      });
  
      $('.modal').on('shown.bs.modal', function (e) {
          $('.product_navactive').resize();
      });

      $('.product_navactive a').on('click',function(e){
        e.preventDefault();
  
        var $href = $(this).attr('href');
  
        $('.product_navactive a').removeClass('active');
        $(this).addClass('active');
  
        $('.product-details-large .tab-pane').removeClass('active show');
        $('.product-details-large '+ $href ).addClass('active show');
  
      })
         
      /*--- Magnific Popup Video---*/
      $('.video_popup').magnificPopup({
          type: 'iframe',
          removalDelay: 300,
          mainClass: 'mfp-fade'
      });
      
      /*--- new vidio play Video---*/
      $('.new_vidio_play').magnificPopup({
          type: 'iframe',
          removalDelay: 300,
          mainClass: 'mfp-fade'
      });
      
      /*--- Magnific Popup Video---*/
      $('.port_popup').magnificPopup({
          type: 'image',
          gallery: {
              enabled: true
          }
      });
   
      /*--- niceSelect---*/
       $('.select_option').niceSelect();
      
      /*---  Accordion---*/
      $(".faequently-accordion").collapse({
          accordion:true,
          open: function() {
          this.slideDown(300);
        },
        close: function() {
          this.slideUp(300);
        }		
      });
    
    }

}
