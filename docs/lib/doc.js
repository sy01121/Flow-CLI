define(function(e){var t,o=e("jquery"),i=e("base"),n=o("#nav"),a=o("section.wrap");t="<ul>",a.each(function(e,i){t+='<li><a href="#'+o(i).attr("id")+'">'+o(i).find("h2").eq(0).text()+"</a><ul>"+function(){for(var e="",t=0;t<o(i).find("h3").length;t++)e+='<li><a href="#'+o(i).find("h3").eq(t).attr("id")+'">'+o(i).find("h3").eq(t).text()+"</a></li>";return e}()+"</ul></li>"}),t+="</ul>",n.html(t);var d,r=o("#modules_index"),l=o("#modules_list");d='<ul class="full-row">',l.find("tr[id]").each(function(e,t){var i=o(t).attr("id");d+='<li class="span-4 smal-8"><a href="#'+i+'">'+i+"</a></li>"}),d+="</ul>",r.html(d),o("#modules_list").find("tr").each(function(e,t){o(t).children("td:last").find("pre").length>1&&o(t).children("td:last").append('<p><a href="javascript:;" target="_blank" class="viewDemo">viewDemo</a></p>')}).end().on("click",".viewDemo",function(e){e.preventDefault(),window.DemoTitle=o(this).parents("tr").find("td").eq(0).text(),window.DemoHtml=o(this).parents("td").find("pre").eq(-2).text(),window.DemoJs=o(this).parents("td").find("pre").eq(-1).text(),window.open("demo.html")}),e("copy"),e("box");var c=o('<div id="d_clip_button">Copy</div>').appendTo("body"),s="";c.css({position:"absolute",padding:"3px 14px",border:"1px solid #ccc",background:"#fff",top:"-999px",zIndex:999,borderRadius:"3px"});var p=function(e){var t=o(e.target).is("pre")?o(e.target):o(e.target).parents("pre");t.data("oncopy")||(s=t.data("code"),c.css({left:t.offset().left+(t.outerWidth(!0)-c.outerWidth(!0)),top:t.offset().top}).show().zclip("remove").zclip({copy:s,afterCopy:function(){o.box.msg("复制成功",{delay:1e3})}}),o("pre").data("oncopy",!1),t.data("oncopy",!0))};if(i.browser.isMobile||(i.browser.ie&&i.browser.ie<9?o.box.msg("您的浏览器版本太低，无法启用代码高亮和demo演示，建议使用chrome或360浏览器。",{color:"danger",delay:3e3}):e.async("./highlight/highlight.pack",function(e){o("pre").each(function(t,i){o(i).find("code").length&&o(i).data("code",o(i).text()).find("code").each(function(t,o){e.highlightBlock(o)})}),o("body").on("mouseenter","pre",p)})),window.console){var f=console;f&&(f.log("%c\n\t","font-size:130px;background:url('http://g.hiphotos.bdimg.com/album/s%3D1100%3Bq%3D90/sign=51698e337d3e6709ba0041fe0bf7a44c/08f790529822720efa1c90ee79cb0a46f31fabd0.jpg') no-repeat"),f.log("hello,"+i.getType()))}});