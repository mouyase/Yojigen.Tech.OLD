!function(e,t,n){"use strict"
var a=e(t),i=e(n),s=e("html"),o=e("body"),l=e("html, body"),r=e("#s"),c=e("#rocket"),d=s.hasClass("lt-ie7"),f=s.hasClass("lt-ie8")
if(e(".userinfo .login-link").click(function(){return e("#minty_login").fadeIn(),!1}),e("#minty_login").click(function(t){"TD"==t.target.tagName&&e("#minty_login").fadeOut()}),e("#m-btns .search").click(function(){o.toggleClass("m-search"),r.focus()}),e(".mobile-menu").length?e("#m-btns .menu").click(function(){o.toggleClass("expand-mobile-menu")}):e("#m-menu option").each(function(){e(this).val()==location.href&&e(this).prop("selected",!0)}),d&&e(".menu-item-has-children").mouseenter(function(){e(this).find(".sub-menu").show()}).mouseleave(function(){e(this).find(".sub-menu").hide()}),f&&r.focus(function(){r.addClass("focus")}).blur(function(){r.removeClass("focus")}),d||t.matchMedia&&t.matchMedia("(max-width: 568px)").matches||a.scroll(function(){a.scrollTop()>Math.max(400,a.height())?c.addClass("show"):c.removeClass("show")}).load(function(){if(MINTY.stickySidebar){var t=e("#sidebar"),n=e("#sidebar-top"),i=e("#sidebar-bottom")
if("top"==MINTY.stickySidebar&&n.length)var s=n,o=t.height()+t.offset().top
else if("bottom"==MINTY.stickySidebar&&i.length)var s=i,o=s.offset().top-85
s&&s.length&&a.scroll(function(){var e=a.scrollTop()
s[e>o?"addClass":"removeClass"]("sticky")}).resize(function(){s.css("left",t.offset().left)}).resize()}}),c.click(function(){return c.addClass("launch"),l.animate({scrollTop:0},600,function(){c.removeClass("show launch")}),!1}),"object"==typeof slideList&&slideList.length){var m,h=e(".slideshow-wrap"),u=slideList.length,p=0
h.html('<a href="'+slideList[0].link+'" title="'+slideList[0].title+'" target="'+(slideListNewWin?"_blank":"_self")+'"><img src="'+slideList[0].image+'" alt="'+slideList[0].title+'" width="220" height="110"></a>')
var v=function(t){var n=e("a",h)
p=isNaN(t)?u-1>p?p+1:0:t,n.clone().addClass("temp").appendTo(h).fadeOut(function(){e(this).remove()}),n.attr("href",slideList[p].link).attr("target",slideListNewWin?"_blank":"_self").attr("title",slideList[p].title).html('<img src="'+slideList[p].image+'" alt="'+slideList[p].title+'">')}
if(u>1){var g=e("<span class='prev'>&lsaquo;</span>"),y=e("<span class='next'>&rsaquo;</span>")
g.click(function(){v(0===p?u-1:p-1)}),y.click(function(){v()}),h.append(g).append(y).hover(function(){clearInterval(m)},function(){m=setInterval(v,7e3)}),m=setInterval(v,7e3)}}var b=e("#main"),k=0
b.on("click",".loadmore",function(a,i){if(k)return!1
var s=e(this).attr("title",MINTY.i18n.loading).addClass("loading"),o=s.attr("href")
return k=1,e.get(o,function(a){s.parent().remove()
var l=e(a),r=l.find(".hentry").addClass("fadein"),c=l.filter("title").text();
if(MINTY.loadPostsCallback)MINTY.loadPostsCallback(r.get());
b.append(r).append(l.find(".navigation")),i&&E(r.eq(0)),t.history&&history.pushState&&history.pushState(null,c,o),n.title=c,k=0}),!1})
var C=e("#comments")
C.on("click",".loadmore",function(){var t=e(this)
return t.hasClass("loading")?!1:(t.attr("title",MINTY.i18n.loading).addClass("loading"),e.get(t.attr("href"),function(n){t.parent().remove()
var a=e(n).find(".commentlist").addClass("fadein");
if(MINTY.loadCommentsCallback)MINTY.loadCommentsCallback(a.get());
if(!n.getElementsByClassName)e(".lazyload").each(function(){this.src=this.getAttribute("data-src")})
C.append(a).append(e(n).find(".navigation"))}),!1)})
var T=0,I=C.find(".commentlist"),x=C.find(".pagination")
C.on("click","a.page-numbers",function(){return T?!1:(C.find("#cancel-comment-reply-link").click(),T=1,C.addClass("loading"),I.add(x).attr("title",MINTY.i18n.loading),e.get(e(this).attr("href"),function(t){var n=e(t).find("#comments")
I.html(n.find(".commentlist").html()),t.lazySizes&&lazySizes.loader.checkElems(),x.html(n.find(".pagination").html()).add(I).removeAttr("title"),C.removeClass("loading"),T=0}),!1)})
var w=e("#commentform"),N=e("#comment"),M=e("#comments-title"),S=e("#comment-settings"),z=e(".comment-settings-toggle"),L=e("span",z),Y=e("#author"),_=e("#submit")
if(z.click(function(){S.hasClass("show")||(S.addClass("show"),e(this).removeClass("required"),Y.focus(),setTimeout(function(){i.on("click.comment",function(e){S.find(e.target).length||e.target==S[0]||(S.removeClass("show"),i.off("click.comment"))})},100))}),Y.on("change input",function(){L.text(e(this).val())}),N.keydown(function(e){if(e.ctrlKey&&13==e.keyCode)w.trigger("submit")
else if(9==e.keyCode)return z.click(),!1}),e("#respond input").add(N).on("invalid",function(){e(this).one("input change",function(){e(this).parent().removeClass("invalid")}).parent().addClass("invalid"),e(this)[0]!=N[0]&&z.click()}),e(".commentlist").eq(0).children().length<10&&e("#comments .loadmore").length&&e("#comments .loadmore").trigger("click"),MINTY.ajaxComment){var j,q,D=15
w.submit(function(){return e.ajax({type:this.method,url:MINTY.ajaxurl,data:e(this).serialize()+"&action=minty_ajax_comment",beforeSend:function(){q=e("#comment_parent").val(),_.val(MINTY.i18n.posting+".").prop("disabled",!0),N.prop("disabled",!0),j=t.setInterval(function(){_.val(MINTY.i18n.posting+"..."==_.val()?MINTY.i18n.posting+".":_.val()+".")},700)},success:function(n){if(t.clearInterval(j),/<\/li>/.test(n)){if(e(".commentlist").length>0){"0"==q?e("<div style='display:none'>"+n+"</div>").prependTo(e(".commentlist").eq(0)).fadeIn():e("<ol class='children' style='display:none'>"+n+"</ol>").insertAfter(e("#comment-"+q)).fadeIn()
var a=parseInt((M.text().match(/\d/g)||[0]).join(""))+1
a>999&&(a=(""+a/1e3).replace(".",",")),M.text(MINTY.i18n.comments.replace("%s", a))}else e(".no-comments").replaceWith(e("<ol class='commentlist' style='display:none'>"+n+"</ol>").fadeIn()),M.text(MINTY.i18n.one_comment)
N.prop("disabled",!1).val(""),P()}else alert(e("<div>"+n+"</div>").text()),_.prop("disabled",!1).val(MINTY.i18n.post_comment),N.prop("disabled",!1)},error:function(e,n,a){console&&console.log&&console.log(e,n,a),t.clearInterval(j),alert(MINTY.i18n.comment_fail),_.prop("disabled",!1).val(MINTY.i18n.post_comment),N.prop("disabled",!1)}}),!1})
var P=function(){D>0?(_.val(MINTY.i18n.comment_success+"("+D--+")"),setTimeout(P,1e3)):(_.val(MINTY.i18n.post_comment).prop("disabled",!1),D=15)}}if(MINTY.keyboardNavigation){var A
i.keypress(function(t){var n=t.target.tagName
if("TEXTAREA"!=n&&"INPUT"!=n)switch(t.which){case 106:var a=e(".previous-post a")[0]
if(a)location.href=a.href
else{if(k)return
if(A){var s=A.next()
s.hasClass("ga")&&(s=s.next()),s.hasClass("hentry")?E(s):e(".loadmore").length&&(e(".loadmore").trigger("click",1),l.animate({scrollTop:i.height()},500))}else E(e(".hentry").eq(1))}t.preventDefault()
break
case 107:var o=e(".next-post a")[0]
if(o)location.href=o.href
else{if(k)return
if(A){var r=A.prev()
r.hasClass("ga")&&(r=r.prev()),r.hasClass("hentry")&&E(r)}else E(e(".hentry").eq(1))}t.preventDefault()
break
case 114:N.focus(),t.preventDefault()
break
case 47:e("#s").focus(),t.preventDefault()}})
var E=function(e){e&&(A=e,l.stop().animate({scrollTop:A.offset().top-85},500))}}if(MINTY.infiniteScroll>0){var O=parseInt(MINTY.infiniteScroll)
i.on("inview",".navigation .loadmore",function(t,n){1>O?i.off("inview"):n&&!e(this).hasClass("loading")&&(e(this).trigger("click"),O--)})}e(".widget-title span").each(function(){var t=e(this)
t.attr("title",t.text())}),t.lazySizes&&lazySizes.loader.checkElems(),location.hash.indexOf("#comment-")>-1&&t.setTimeout(function(){i.scrollTop(i.scrollTop()-74)},10),"ontouchstart"in t?(n.documentElement.className+="touch",e(".menu-item-has-children, .page_item_has_children").attr("aria-haspopup",!0).children("a").on("touchend",function(){return e(this).next().toggle(),!1})):"object"==typeof NProgress&&(NProgress.configure({showSpinner:!1}),NProgress.start(),n.onreadystatechange=function(){"complete"==n.readyState&&setTimeout(NProgress.done,500)});if(e.fn.Swipe){var s=e("#featured-content").Swipe({auto:MINTY.slidesTimeout}).data('Swipe');if(s){e('.swipe-prev').click(s.prev);e('.swipe-next').click(s.next)}};e.fn.fancybox&&e(".gallery").each(function(){var t=e(this),n=t.attr("id"),a=t.find(".gallery-item a")
a.each(function(){var t=e(this)
t.attr("rel",n).attr("title",t.find("img").attr("alt"))}).fancybox()});
var Z=e('#nav>ul');if(Z.width()==523){a.resize(function(){Z.css('width',a.width()-40-e("#hgroup").outerWidth()-e("#header .userinfo").outerWidth()-e("#header .connect").outerWidth())}).resize()};
e(".must-log-in a").click(function(){return e("#minty_login").fadeIn().length==0})}(jQuery,window,document);