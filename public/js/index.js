$("#menu_icon").on("click", function () {
    $("#primary_mobile_navigation").slideToggle()
})
// $("#menu_icon").on("click",function(){
//     if($(this).hasClass("active")){
//         $(this).removeClass("active")
//         $(this).find("+#primary_mobile_navigation").slideUp()

//     }else{
//         $(this).addClass("active")
//         $(this).find("+#primary_mobile_navigation").slideDown()

//     }
// })


//===================首頁文字自動撥放=======================================
$(".pic_title_p:last-child").clone().prependTo("#pic_title")
$(".pic_title_p").eq(1).clone().appendTo("#pic_title")

let current_slide_offset = 0

function autoslide() {
    current_slide_offset = current_slide_offset - 10
    if (current_slide_offset != -2540) {
        $("#pic_title").animate({
            "margin-left": current_slide_offset
        }, 90)
    } else {
        $("#pic_title").animate({
            "margin-left": current_slide_offset
        }, 90, function () {
            $("#pic_title").css({
                "margin-left": 0
            })
        })
        current_slide_offset = 0
    }
} //function autoslide end 

function first_loop() {
    setInterval(function () {
        autoslide()
    }, 90)
}

first_loop()



//========================concept圖片輪播=================================
$("#concept_pic:last-child").clone().prependTo(".concept_pic_gp2")
$("#concept_pic:nth-child(2)").clone().appendTo(".concept_pic_gp2")


let concept_slide_offset = -360

function autoslide_concept_prev() {
    concept_slide_offset = concept_slide_offset + 360
    if (concept_slide_offset != 0) {
        $(".concept_pic_gp2").animate({
            "margin-left": concept_slide_offset
        }, 600)
    } else {
        $(".concept_pic_gp2").animate({
            "margin-left": concept_slide_offset
        }, 600, function () {
            $(".concept_pic_gp2").css({
                "margin-left": -720
            })
        })
        concept_slide_offset = -720
    }
    if (concept_slide_offset == -720) {
        $("#concept_btn_prev").removeClass("active")
        $("#concept_btn_next").addClass("active")

    } else {
        $("#concept_btn_prev").addClass("active")
        $("#concept_btn_next").removeClass("active")

    }
} //function autoslide_concept_prev end 

$("#concept_btn_prev").addClass("active")

function autoslide_concept_next() {
    concept_slide_offset = concept_slide_offset - 360
    if (concept_slide_offset != -1080) {
        $(".concept_pic_gp2").animate({
            "margin-left": concept_slide_offset
        }, 600)
    } else {
        $(".concept_pic_gp2").animate({
            "margin-left": concept_slide_offset
        }, 600, function () {
            $(".concept_pic_gp2").css({
                "margin-left": -360
            })
        })
        concept_slide_offset = -360
    }
    if (concept_slide_offset == -720) {
        $("#concept_btn_prev").removeClass("active")
        $("#concept_btn_next").addClass("active")

    } else {
        $("#concept_btn_prev").addClass("active")
        $("#concept_btn_next").removeClass("active")

    }
} //function autoslide_concept_next end 

function concept_loop() {
    setInterval(function () {
        autoslide_concept_next()
    }, 3500)
}
concept_loop()

$("#concept_btn_next").on("click", function () {
    $(".concept_pic_gp2").css({
        "margin-left": 0
    })
    // autoslide_concept_next()
    $("#concept_btn_next").addClass("active")
    $("#concept_btn_prev").removeClass("active")

}) //#concept_btn_next click end

$("#concept_btn_prev").on("click", function () {
    $(".concept_pic_gp2").css({
        "margin-left": -360
    })
    // autoslide_concept_prev()
    $("#concept_btn_prev").addClass("active")
    $("#concept_btn_next").removeClass("active")

}) //#concept_btn_prev click end


//===================concept文字變色=======================
$(window).on("load", function () {

    let window_scroll_top = $(window).scrollTop()
    let top_text = $(".top_text .inner")
    let bottom_text = $(".bottom_text")
    let concept_gp = $(".concept_gp")
    let concept_gp2_title = $("#concept_gp2_title")
    let situation_top_text = $(".situation_top_text .situation_inner")
    let situation_bottom_text = $(".situation_bottom_text")
    let situation_gp2_title = $("#situation_gp2_title")
    let machine_title = $("#machine_title")
    let machine_title_row = $("#machine_title_row")
    let machine_gp2_title = $("#machine_gp2_title")
    let machine_gp2_title_row = $("#machine_gp2_title_row")


    $(window).scroll(function () {
        console.log($(window).scrollTop())
        window_scroll_top = $(window).scrollTop()

        TweenLite.to(top_text, 1, {
            x: window_scroll_top / -6
        })
        TweenLite.to(bottom_text, 1, {
            y: window_scroll_top / 6
        })


        TweenLite.to(concept_gp2_title, 1, {
            y: window_scroll_top / 12
        })
        
        TweenLite.to(situation_gp2_title, 1, {
            y: window_scroll_top / 12
        })

        TweenLite.to(machine_gp2_title, 1, {
            y: window_scroll_top / 12
        })
        TweenLite.to(machine_gp2_title_row, 1, {
            y: window_scroll_top / 12
        })
        
        TweenLite.to(machine_title, 1, {
            y: window_scroll_top / 10
        })
        TweenLite.to(machine_title_row, 1, {
            y: window_scroll_top / 10
        })


        if ($(window).width() < 768) {
            if ($(window).scrollTop() >= 1200) {
                $("#concept_gp2_title").addClass("active")
                $("#concept_gp2_bgc").addClass("active")
                $("#concept_gp2_pic").addClass("active")

            } else {
                $("#concept_gp2_title").removeClass("active")
                $("#concept_gp2_bgc").removeClass("active")
                $("#concept_gp2_pic").removeClass("active")

            }
            if ($(window).scrollTop() >= 2600) {
                $("#situation_gp2_title").addClass("active")
                $("#situation_gp2_bgc").addClass("active")
                $("#situation_gp2_pic").addClass("active")

            } else {
                $("#situation_gp2_title").removeClass("active")
                $("#situation_gp2_bgc").removeClass("active")
                $("#situation_gp2_pic").removeClass("active")

            }
        }else{
            if ($(window).scrollTop() >= 1000) {
                $("#concept_gp2_title").addClass("active")
                $("#concept_gp2_bgc").addClass("active")
                $("#concept_gp2_pic").addClass("active")


            } else {
                $("#concept_gp2_title").removeClass("active")
                $("#concept_gp2_bgc").removeClass("active")
                $("#concept_gp2_pic").removeClass("active")

            }
            if ($(window).scrollTop() >= 2800) {
                $("#situation_gp2_title").addClass("active")
                $("#situation_gp2_bgc").addClass("active")
                $("#situation_gp2_pic").addClass("active")


            } else {
                $("#situation_gp2_title").removeClass("active")
                $("#situation_gp2_bgc").removeClass("active")
                $("#situation_gp2_pic").removeClass("active")

            }
        }


        if ($(window).width() < 999) {
            $("#machine_gp2_title_row").removeClass("active")
            if ($(window).scrollTop() >= 4000) {
                $("#machine_gp2_title").addClass("active")
                $("#machine_gp2_bgc").addClass("active")
                $("#machine_gp2_pic1").addClass("active")
                $("#machine_gp2_pic2").addClass("active")


            } else {
                $("#machine_gp2_title").removeClass("active")
                $("#machine_gp2_bgc").removeClass("active")
                $("#machine_gp2_pic1").removeClass("active")
                $("#machine_gp2_pic2").removeClass("active")

            }
        }else{
            if ($(window).scrollTop() >= 4200) {
                $("#machine_gp2_title_row").addClass("active")
                $("#machine_gp2_bgc").addClass("active")
                $("#machine_gp2_pic1").addClass("active")
                $("#machine_gp2_pic2").addClass("active")



            } else {
                $("#machine_gp2_title_row").removeClass("active")
                $("#machine_gp2_bgc").removeClass("active")
                $("#machine_gp2_pic1").removeClass("active")
                $("#machine_gp2_pic2").removeClass("active")

            }
        }
       
        
        TweenLite.to(situation_top_text, 1, {
            x: window_scroll_top / 12
        })
        TweenLite.to(situation_bottom_text, 1, {
            x: window_scroll_top / 12
        })


    }) //window scroll end

})
$("#page_top").on("click",function(){
    console.log("text")


    // $("html, body").animate({屬性},秒數)
    $("html, body").animate({
        "scrollTop":0
    },400) //html,body animate end


})//page_top click end

$(window).scroll(function(){
    if($(window).scrollTop() > 500){
        $("#page_top").stop().fadeIn()
    }else{
        $("#page_top").stop().fadeOut()

    }
})