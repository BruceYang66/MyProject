/**
 * Created by BruceOne on 2016/6/24.
 */
/*$(document).ready(function(){
    $("#nav ul>li").click(function(){
        sessionStorage["dd"]=$(this).index();
    })
    $("#nav ul>li").eq( sessionStorage["dd"]).addClass("yixuan").siblings().removeClass()
})*/
$(document).ready(function () {
    //----------����---------
    $("#btn_search").click(function () {
        if ($("#search_text").val() != "") {
            $("section>div:nth-child(1)").css("display", "none")
            $(".pailie").hide();
            $(".pailie").find('h4:contains(' + $("#search_text").val() + ')').parents(".pailie").show()
            if ($(".pailie").find('h4:contains(' + $("#search_text").val() + ')').html() == undefined) {
                alert("No related movie")
            }
        } else {
            alert("Please enter the content ")
        }
    })
})
/*
 ͼƬ����*/
$(document).ready(function () {
    page = 1;
    Article = $(".article1");
    Content_ul = Article.find(".img_quan");
    Width = $(".img_active").width();
    Pages = Content_ul.find(".img_active").length;
    try {
        //  var Pages = Math.ceil(Lenght1 / 1);
        $("#previous").click(function () {
            clearTimeout("st");
            if (!Content_ul.is(':animated')) {
                if (page == 1) {
                    Content_ul.animate({'left': '-' + Width * (Pages - 1)}, "slow");
                    page = Pages;
                } else {
                    Content_ul.animate({'left': '+=' + Width}, "slow");
                    page--;
                }
            }
            $('.art_ol li').eq(page - 1).addClass('baise').siblings().removeClass();
        })
        $("#next").click(function () {
            clearTimeout("st");
            if (!Content_ul.is(':animated')) {
                if (page == Pages) {
                    Content_ul.animate({left: 0}, "slow");
                    page = 1;
                } else {
                    Content_ul.animate({left: '-=' + Width}, "slow");
                    page++;
                }
            }
            $('.art_ol li').eq(page - 1).addClass('baise').siblings().removeClass();
        })

    } catch (e) {
        alert(e.message)
    } finally {
        setTimeout("shows()", 3000);
    }
})
function shows() {
    if (!$(".img_quan").is(':animated')) {
        if (page == Pages) {
            $(".img_quan").animate({left: 0}, "slow");
            page = 1;
        } else {
            $(".img_quan").animate({left: '-=' + Width}, "slow");
            page++;
        }
    }
    $('.art_ol li').eq(page - 1).addClass('baise').siblings().removeClass();
    st = setTimeout("shows()", 3000)
}
shows()


/*
 �����*/
/*
 $(document).ready(function(){
 alert("sdfsd")
 if (localStorage.pagecount)
 {
 localStorage.pagecount=Number(localStorage.pagecount) +1;
 }
 else
 {
 localStorage.pagecount=1;
 }
 alert("Visits " + localStorage.pagecount + " time(s) this session.");
 /!* document.write("Visits " + localStorage.pagecount + " time(s) this session.");
 function showliu(){

 var texta=document.getElementById("texta");
 var label1=document.getElementById("label1");
 texta.innerHTML=localStorage.textname;
 // localStorage.removeItem("pagecount");
 //document.write( localStorage.uname);
 //localStorage.textname="nihao";
 //document.write(  localStorage.getItem("pagecount") );
 /!*  localStorage.setItem(��fresh��,��vfresh.org��); //����һ����ֵ
 localStorage.getItem(��fresh��); //��ȡһ����ֵ
 localStorage.key(0); //��ȡָ���±�ļ������ƣ���ͬArray��
 localStorage.removeItem(��fresh��); //ɾ��һ����ֵ
 localStorage.clear(); //���storage*!/
 }
 showliu()*!/
 })*/
