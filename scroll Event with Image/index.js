

$(window).scroll(function () {  
    const scroll2 = $(section2).offset().top;   //2までの距離の値
    const scroll3 = $(section3).offset().top;   //3までの距離の値
    const scroll4 = $(section4).offset().top;   //4までの距離の値
    const scrollValue = $(this).scrollTop();    //scrollした量
    const height = $(window).height();
    // console.log(height);
    // console.log(scrollValue);
    // console.log(scroll2);
    // scrollした量が距離の値を上回った場合、cssのopacityを1にする
    if(scrollValue > scroll2 - height){
        $('#section2').css('opacity', '1');
    }if(scrollValue > scroll3 - height){
        $('#section3').css('opacity', '1');
    }if(scrollValue > scroll4 - height){
        $('#section4').css('opacity', '1');
    }
});
