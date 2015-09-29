
$.get("_menuSuperior.html", function (data) {
    $("#menuSuperior").html(data);

});
$.get("_colunaDireita.html", function (data) {
    $("#colunaDireita").html(data);

});
$.get("_post.html", function (data) {
    $("#post").html(data);

});
$.get("_footer.html", function (data) {
    $("footer").html(data);
})

var _gaq = _gaq || [];
var pluginUrl =
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);

_gaq.push(['_setAccount', 'UA-49234394-1']);
_gaq.push(['_setDomainName', 'agenciabelem.com.br']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    /*ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';*/
    /* ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js'; */
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



