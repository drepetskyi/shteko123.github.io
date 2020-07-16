$(document).ready(function(){

    $(".open_m").click(function(){
      $(".liniyka").slideDown(300);
      $(".p0").slideDown(290); 
      $(".vypadayuche_menu").slideDown(2000);
      $(".line_yellow1").fadeIn(2000);

    });

    $(".fone").click(function(){
      $(".liniyka").fadeOut(800);
      $(".p0").fadeOut(800);
      $(".vypadayuche_menu").fadeOut(800);
      $(".line_yellow1").fadeOut(200);
      $(".deskMenuRight").fadeOut();

    });

    $(".close_mob_menu").click(function(){
      $(".liniyka").fadeOut(800);
      $(".p0").fadeOut(800);
      $(".vypadayuche_menu").fadeOut(800);
      $(".line_yellow1").fadeOut(200);
      $(".deskMenuRight").fadeOut();

    });

    $(".r_3_1").click(function(){
      $(".r_3_1").hide(500);
      $(".r_3_2").show(500);
      $(".stiny").show(500);
      $(".electro").show(500);
      $(".r_4").show(500);
      $(".other").show(500);
      
    })


    $(".r_3_2").click(function(){
      $(".r_3_1").show(500);
      $(".r_3_2").hide(500);
      $(".stiny").hide(500);
      $(".electro").hide(500);
      $(".r_4").hide(500);
      $(".other").hide(500);
      $('input[name="c"]').prop('checked', false);    
      $('select[name="electro"]').val(1);
      $('select[name="stiny"]').val(1);
    })

    $(".ie").click(function(){
      $(".info_close").show(500);
      $(".info").slideDown(500);
    })

    $(".info_close").click(function(){
      $(".info").slideUp(500);
      $(".info_close").hide(500);

    })  
       
    $(".r_1_2").keyup(function () { 
      this.value = this.value.replace(/[^0-9\.]/g,'');
    });

   /*Розрахунок вартості*/
    $(".total").click(function(){
      $(".result").show(300);
      let pl = parseInt( $(".r_1_2").val()); /*вказана площа*/
      let v1 = parseFloat($('input[name="r"]:checked').val()); /* тип ремонту*/     
      let v2 = parseFloat($('select[name="electro"]').val()); /* ВИБІР ПО ЕЛЕКТРИЦІ*/
      let v3 = parseFloat($('select[name="stiny"]').val()); /* ВИБІР ПО CТІНИ*/
      
      let ces = [];
      $('input[name="c"]:checked').each(function(){
        ces.push(parseFloat(this.value));
      });

      let dobutokCes = 1;
      for(i=0; i<ces.length; i++){
        dobutokCes= dobutokCes*ces[i];
      }
      
      let sum = Math.round(1500*pl*v1*v2*v3*dobutokCes);
      
      $(".res").html(String(sum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + " грн.");
    })

    $(".clear").click(function(){
      $(".result").hide(300);
      shcystka();
    })

    function shcystka(){
      $(".r_1_2").val("0");
      $('input[name="r"][value="1.0"]').prop('checked', true);
      $('select[name="electro"]').val(1);
      $('select[name="stiny"]').val(1);
      $('input[name="c"]').prop('checked', false);    

    };

    /* кол-бек*/
    $(".call").click(function(){
      $(".forma_callback").show(500);
    });

    $(".go_no").click(function(){
      $(".forma_callback").hide(500);
    });

    $(".phone1").keyup(function () { 
      this.value = this.value.replace(/[^0-9\.]/g,'');
    });

    /* натискання на бургерт*/
    $(".project").click(function(){
      $(".deskMenuAll").show(1000);
      $(".close").show(1500);
      $(".burger1").fadeOut(800);
      $(".burger2").fadeOut(800);
      $(".burger3").fadeOut(800);
    });

    /* натискання на хрестик для бургера*/
    $(".close").click(function(){
      $(".deskMenuAll").fadeOut(1000);
      $(".deskMenuRight").fadeOut(1000);
      $(".close").fadeOut(800);
      $(".burger1").fadeIn(1000);
      $(".burger2").fadeIn(1000);
      $(".burger3").fadeIn(1000);
    });

   /* про нас*/
    $(".aboutUs").click(function(){
      $(".deskMenuRight").fadeIn();
      $(".why_not_det").fadeIn(800);
      $(".calc_det").fadeOut();
      $(".tecnology_det").fadeOut();
      $(".porf_det").fadeOut();

    });

    /* розрахувати*/
    $(".rozrakhunok").click(function(){
      $(".deskMenuRight").fadeIn();
      $(".calc_det").fadeIn(800);
      $(".why_not_det").fadeOut();
      $(".tecnology_det").fadeOut();
      $(".porf_det").fadeOut();


    });
         /* технології*/
    $(".teckhnology").click(function(){
      $(".deskMenuRight").fadeIn();
      $(".tecnology_det").fadeIn(800);
      $(".calc_det").fadeOut();
      $(".why_not_det").fadeOut();
      $(".porf_det").fadeOut();

    });
         /* проекти*/
     $(".proekry").click(function(){
       $(".deskMenuRight").fadeIn();
       $(".porf_det").fadeIn(800);
       $(".calc_det").fadeOut();
       $(".why_not_det").fadeOut();
       $(".tecnology_det").fadeOut();
    });

    /* мобільне меню */
    $(".au_mob").click(function(){
      $(".deskMenuRight").fadeIn();

      $(".why_not_det").fadeIn(800);
      $(".calc_det").fadeOut();
      $(".tecnology_det").fadeOut();
      $(".porf_det").fadeOut();

    });

    $(".teckh_mob").click(function(){
      $(".deskMenuRight").fadeIn();

      $(".why_not_det").fadeOut();
      $(".calc_det").fadeOut();
      $(".tecnology_det").fadeIn(800);
      $(".porf_det").fadeOut();

    });

    $(".project_mob").click(function(){
      $(".deskMenuRight").fadeIn();

      $(".why_not_det").fadeOut();
      $(".calc_det").fadeOut();
      $(".tecnology_det").fadeOut();
      $(".porf_det").fadeIn(800);

    });

    $(".vary_mob").click(function(){
      $(".deskMenuRight").fadeIn();

      $(".why_not_det").fadeOut();
      $(".calc_det").fadeIn(800);
      $(".tecnology_det").fadeOut();
      $(".porf_det").fadeOut();

    });


});

 
