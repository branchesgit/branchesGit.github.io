define(["zepto","ajax","fx"],function(e){function a(){var a=d.oData,s=d.$elem,t=1;a&&s.each(function(){e(this).children().each(function(){e(this).remove()}),e(this).addClass(d.klass),e(this).append(i(t,d.oData))})}function s(){var a=d.$elem;a.each(function(){e(this).children().each(function(){e(this).remove()})})}function t(){var a=d.$elem;a.on("click",function(s){var t,l=s.target,n=e(l).closest("li"),i=n.find("a").eq(0),c=n.data("level"),r=n.data("index"),u=n.data("close");o(u,n),void 0!==u||c===d.selectLevel&&r===d.selectIndex||(a.find(".select").each(function(){e(this).removeClass("select")}),i.addClass("select"),t=n.parents("li"),a.find("li").each(function(){void 0!==e(this).data("sub-select")&&(e(this).data("sub-select","0"),e(this).removeClass("sub-select-close"))}),t.length&&t.data("sub-select","1")),d.selectIndex=r,d.selectLevel=c;var h=n.find("ul");if(1===u){n.removeClass(d.closeKlass).addClass(d.openItemKlass),n.data("close","0"),h.removeClass("hidden"),h.css({height:0});var v=36*h.find("li").length;h.animate({height:v+"px"},300,"ease-out",function(){h.css({height:"auto"})}),1===parseInt(n.data("sub-select"),10)&&n.removeClass("sub-select-close"),d.openItem=n}else if(0===u){n.removeClass(d.openItemKlass).addClass(d.closeKlass),n.data("close","1");var v=36*h.find("li").length;h.css({height:v+"px"}),h.animate({height:0},300,"ease-out",function(){}),1===parseInt(n.data("sub-select"),10)&&n.addClass("sub-select-close")}})}function l(e){d.loadedData=!0,d.oData=e,a(),t()}function n(e){d.loadedData=!1,d.oData=null,s()}var d={mutils:!1,url:"./data.json",success:null,error:null,loadedData:!1,$elem:null,rightKlass:"arrow right",klass:"branches-menu",hidden:"hidden",itemKlass:"item",itemTKlass:"menu-title",selectLevel:"1",selectIndex:"1",openItem:null,closeKlass:"item-colse",openItemKlass:"item-open"};e.fn.Menus=function(a){d=e.extend({},d,a),d.$elem=this,r()};var i=function(a,s){var t=e("<ul></ul>");return 1!==a?t.addClass(d.hidden):t.addClass("nav navbar-nav"),e.each(s,function(e,s){t.append(c(a,e,s))}),t},c=function(a,s,t){var l=e("<li></li>");l.data("level",a).data("index",s).addClass(d.itemKlass),1===a&&0===s&&l.addClass("item-first");var n=e('<a href="'+(t.href||"javascript:void(0);")+'" target="'+(t.target||"_blank")+'"> </a>'),c=e("<span>"+t.title+"</span>");if(c.addClass(d.itemTKlass),1===a){var o=e('<i class="menu-icon"></i>');n.append(o)}return n.addClass(t["class"]).append(c),l.append(n),t.subs&&(n.append(e('<span class="'+d.rightKlass+'"></span>')),l.append(i(++a,t.subs)),l.data("close","1")),l},o=function(e,a){var s=d.openItem;s&&(a.data("level")===s.data("level")&&a.data("index")===s.data("index")||void 0!==e&&(s.removeClass(d.openItemKlass).addClass(d.closeKlass),s.data("close","1"),s.find("ul").addClass("hidden"),1===parseInt(s.data("sub-select"),10)&&s.addClass("sub-select-close")))},r=function(){var a=d.url;a=a.indexOf("?")!==-1?a.replace("?","?time="+ +new Date)+"&":a+"?time="+ +new Date,e.ajax({url:a,data:d.data||{},dataType:"json",success:d.success||l,error:d.error||n})}});