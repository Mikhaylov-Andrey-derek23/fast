$(document).ready(function(){
    
    var sliderEl = $(".slider");
    var sliderBox = sliderEl.find(".box");
    var sliderItems = sliderBox.find(".composite");
    var sliderBlocks = sliderBox.find(".composite");
    var sliderCount = sliderItems.length;
    var oneSlideSize = sliderEl.width();
    var intervalID = -1;
    var bulletsBox = sliderEl.find(".bullets");
    var navHeight = $('nav').innerHeight();
    var $width = $(window).width();

    $('[data-type=background]').each(function(){
        var bs = $(this);
    
        $(window).scroll(function(){
            var c1 = -($(window).scrollTop()/bs.data('spead'));
            var c2 = 'center ' + c1 +'px';  
            
            bs.css({backgroundPosition: c2});
            
        })
    })
   
   

    var nowSlideShow = 0;
    sliderBox.css({
        'width': oneSlideSize * (sliderCount + 2) + "px",
        'height': sliderEl.height() + "px",
        'left': (nowSlideShow - 1) * oneSlideSize + "px"
    });

    sliderItems.css({
        "width": oneSlideSize + "px",
        "height": sliderEl.height() + "px"
    });

    
   
    /*var firstEl = sliderItems.first().clone();
    sliderBox.prepend(sliderItems.last().clone());
    sliderBox.append(firstEl);
    console.log(sliderBox)*/
    var firstEl = sliderBlocks.first().clone();
    sliderBox.prepend(sliderBlocks.last().clone());
    sliderBox.append(firstEl)

    renderBullets(0);

    $(".slider .arrow.left").click(function(){
        if( sliderEl.hasClass('animated') ) return;
 
        nowSlideShow--;
        changeSlide();

    });

    $(".slider .arrow.right").click(function(){
        if( sliderEl.hasClass('animated') ) return;

        nowSlideShow++;
        changeSlide();      
    });

    function changeSlide(){
        clearInterval(intervalID);
        createRepeat();
        sliderEl.addClass('animated');
        sliderBox.animate({
            "left": -(nowSlideShow * oneSlideSize) - oneSlideSize + "px"
        }, 500, function(){
            if(nowSlideShow === sliderCount){
                nowSlideShow = 0;
            }else if(nowSlideShow === -1){
                nowSlideShow = sliderCount - 1;
            }

            sliderBox.css("left", -(nowSlideShow * oneSlideSize) - oneSlideSize + "px");       

            sliderEl.removeClass('animated'); 
            renderBullets(nowSlideShow);   
        });

    }

    createRepeat();
    function createRepeat(){
        intervalID = setInterval(function(){
            $(".slider .arrow.right").click();
        }, 8000);
    }

    function renderBullets(nowSlide){
        if( !bulletsBox.hasClass('ready') ){
            sliderItems.each(function(index){
                var bullet = $("<div></div>");
                bullet.addClass("circle");
                
                if(nowSlide === index){
                    bullet.addClass("active");
                }

                bulletsBox.append(bullet);
            });

            bulletsBox.addClass("ready");
        }else{
            bulletsBox.find(".circle").removeClass("active").eq(nowSlide).addClass("active");
        }
    }

    $(".bullets").on("click", ".circle", function(){
        if(sliderEl.hasClass("animated")) return;

        nowSlideShow = $(".bullets .circle").index( $(this) );

        changeSlide();
    });

    $(".cross").click(function() {
         $(".nav_mobil").css('display', 'block');
         console.log('Pi opi')
        
    })

 
    $('a').click(function(){
        var selector = $(this).attr('href');
        var targetEl = $(selector);
    if($width<=900){
            $("html, body").animate({
            scrollTop: targetEl.offset().top
            }, 500);
            $('.nav_mobil').css('display', 'none');
            }
        else{
            $("html, body").animate({
                scrollTop: targetEl.offset().top - navHeight
                }, 500);
            $("nav a").css("color", "#777");
            $(this).css('color', '#3eb0f7');
                
            }
        return false
        }) 

        $(".tr1").css({
            "animation": "shift_left 700ms linear reverse"
         
        })
        $(".tr1").addClass('activ');

        $(".tr2").css({
            "animation": "shift_right 700ms linear reverse" 
        })
        $(".tr2").addClass('activ');

        var main = $('#main')[0].getBoundingClientRect().top - navHeight - 1;
        var winh =  $(window).height();
        
      

        if(main<(winh- (winh*0.2))){
            $(".s1 .photo").css({
                "animation": "shift_right 700ms linear reverse"
             
            })
            $(".photo").addClass('activ');

            $(".s1 .comp").css({
                "animation": "shift_left 700ms linear reverse" 
            })
            $(".comp").addClass('activ');
        }

        var b = $("div");
        var i = 1; 
        console.log(b)

        $(window).scroll(function(){
            var sec1Top = $('.s1')[0].getBoundingClientRect().top - navHeight -1;
            var main = $('#main')[0].getBoundingClientRect().top - navHeight - 1;
            var advantages = $('#advantages')[0].getBoundingClientRect().top - navHeight - 1; 
            var order = $('#order')[0].getBoundingClientRect().top - navHeight - 1; 
            var  price = $('#price')[0].getBoundingClientRect().top - navHeight - 1; 
            var  comment = $('#comment')[0].getBoundingClientRect().top - navHeight - 1;
            var contact = $('#contact')[0].getBoundingClientRect().top - navHeight - 1;
            var winh =  $(window).height();
             

                     
           
            if (sec1Top<=0){
                $('header nav').css('position', 'fixed');
                $('header nav').css('top', '0');
                $('header nav').css('width', '100%');
                }
            else if (sec1Top>0){
                $('header nav').css('position', 'relative');
                
                 }
            
            if( main<=0 && advantages>0 && order>0 && price>0 && comment>0 && contact>0){
                $("nav a").css("color", "#777");
                $(".nav_mobil a").css("color", "#777");
                $('a[href="#main"]').css("color", "#3eb0f7");
               
            }
            if( advantages<=0 && order>0 && price>0 && comment>0 && contact>0){
                $("nav a").css("color", "#777");
                $(".nav_mobil a").css("color", "#777");
                $('a[href="#advantages"]').css("color", "#3eb0f7");
               
            }
            if( order<=0 && price>0 && comment>0 && contact>0){
                $("nav a").css("color", "#777");
                $(".nav_mobil a").css("color", "#777");
                $('a[href="#order"]').css("color", "#3eb0f7");
            }
            if( price<=0 && comment>0 && contact>0){
                $("nav a").css("color", "#777");
                $(".nav_mobil a").css("color", "#777");
                $('a[href="#price"]').css("color", "#3eb0f7");
            }
            if( comment<=0 && contact>0){
                $("nav a").css("color", "#777");
                $(".nav_mobil a").css("color", "#777");
                $('a[href="#comment"]').css("color", "#3eb0f7");
            }
            if( contact<=0){
                $("nav a").css("color", "#777");
                $(".nav_mobil a").css("color", "#777");
                $('a[href="#contact"]').css("color", "#3eb0f7");
            }

            var div_all = $("div");
            

            $.each(div_all, function(){
               var v = $(this) 
               var vs = v[0].getBoundingClientRect().top - navHeight - 1;
               if(v.hasClass("div.nav_mobil")) return;
               if(v.hasClass("logo")) return;
               if(v.hasClass("nav_general")) return;
               if(v.hasClass("activ")) return;
               if(v.hasClass("hed_1")) return;
               if(v.hasClass("communication_tech")) return; 
               if(v.hasClass("tech_header")) return;           
               if(v.hasClass("s4_1")) return; 
               if(v.hasClass("tech_s4_1")) return; 
               if(v.hasClass("photo")) return; 
               if(v.hasClass("comp")) return; 
               if(v.hasClass("head_general")) return;
               if(v.hasClass("tr1")) return;
               if(v.hasClass("tr2")) return;
               if(v.hasClass("s1_1")) return;
               if(v.hasClass('nav_mobil')) return;
               if(v.hasClass('cross')) return;
               
               else if(vs<(winh- (winh*0.00))){
                if(i === 1){
                   
                    v.css({
                        "animation": "shift_right 700ms linear reverse" 
                    })
                   v.addClass('activ');
                }

                else if(i===2){
                    v.css({
                        "animation": "shift_left 700ms linear reverse" 
                    })
                    v.addClass('activ');
                }

                else if(i===3){
                    
                    v.css({
                        "animation": "shift_up 700ms linear reverse" 
                    })
                    v.addClass('activ');
                    i = 0;
                }
                else{
                    v.addClass('activ');
                }
                i +=1;
               
            }            
           
            })  

            //"animation": "shift_right 1500ms linear reverse" 

           });

        $("form").submit(function(e){
            e.preventDefault();
            
            
            if( checkEmpty($(this).find("[name='name']")) & emailCheck($(this).find("[name='email']")) ){
                // $(this).submit();
                var method = this.getAttribute('method');
                var action = this.getAttribute('action');

                var name = this.querySelector("input[name='name']").value;
                var email = this.querySelector("input[name='email']").value;
                if(this.querySelector("textarea[name='comment']")){
                    var coment = this.querySelector("textarea[name='comment']").value;
                } else{
                    var coment = '';
                }
                
                console.log(coment);
                console.log(method, action, name, email);

                var ajax = new XMLHttpRequest();
           

                var postData ="name=" + name;
                postData +="&email=" + email;
                postData +="&coment=" + coment;
                console.log(postData)

                ajax.open(method, action, true);
                ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                ajax.send(postData);


                ajax.onreadystatechange = function(){
                    if( ajax.readyState !=4 ) return;

                    var message = "";

                    if( ajax.responseText === 'ok' ){
                        message = "Спасибо за вашу заявку";
                    }else if(ajax.responseText === 'error'){
                        message = "Произошла ошибка";
                    }   

                    alert(message);
                }
                }else{
                    alert("Введите данные в подсвеченные формы");
                }
            
                $(this).find("input[name='name']").val('');
                $(this).find("input[name='email']").val('');
                $(this).find("textarea[name='comment']").val('');


        });
    
        function checkEmpty(el){
            if( el.val() == "" ){
                el.css("background-color", "#ffdbdb6e");
               
                el.keypress(function(e){
                    $(this).css("background-color", "white");
                   
    
                });
                return false;
            }else{
                return true;
            } 
        }
    
        function emailCheck(el){
            var emailUser = el.val();
    
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
            if(re.test(emailUser)){
                return true;
            }else{
                el.css("background-color", "#ffdbdb6e");
    
                el.keypress(function(e){
                    $(this).css("background-color", "white");
                });
    
                return false;
            }
    
            
        }
    

    $('.action_price_1').click(function (){
        
        
        $('.action_price_1').css("background-color", "#3eb0f7");
        $('.action_price_1').css("color", "white");  
        $('textarea').val('Я хочу '+$(this).parent().find('p').first().text() + '... ');
    });
    
    
        var form = document.querySelector('form');

        console.log(form)

        form.addEventListener('submit', function(e){
            
        });

        
    
      
   
});