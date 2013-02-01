(function () {
	var xml=new XMLHttpRequest();
	var url="../json/tabu.json";
	xml.open("get",url,true);
	xml.send(null);
	xml.onload = function() {
		var obj=JSON.parse(xml.responseText);
		var len = obj.con[0].length;
		for (var i=1; i<len; i++) {
			var Str=obj.con[0][i].text;
			var newStr =Str.substring(0,25)+'…';

			$(".periphery").append("<div class='center_content'><div class='left_circle'><div class='left_line'></div></div><div class='right_circle'><div class='right_line'></div></div><div class='left_bottom'></div><div class='right_bottom'></div><div class='writing'><h2 class='tittle	tabu-tittle'>"+obj.con[0][i].Stitle+"</h2><span class='paragraph	tabu-text'>"+newStr+"</span></div><div class='arrowhead'><img src='../images/arrowhead.png'></div></div>");
		}
		load2();
		$(".center_content").click(function () {
			var a=$(this).index();
			$('.know-h3').html(obj.con[0][a+1].Stitle);
			$('p').html(obj.con[0][a+1].text);
			$(".pret-third").css("z-index","1").animate({left:0});
			load1();
		});
	}
	function load1() {
		var myscroll;
		function loaded() {
			myscroll =new iScroll("textOut",{bounce:false,vScrollbar:false});

		}
		loaded();
		document.addEventListener("touchmove",function (e) {
			e.preventDefault();
		},false);
		$(".top-bg").click(function () {
			$(".pret-third").animate({left:400});
		});
		$('.top-bag').click(function () {
				window.location.href = 'http://localhost/test100/%E6%B0%B4%E6%9E%9C%E6%8E%A7/##';
		});
	}
	function load2() {
		var myscroll;
		function loaded() {
			myscroll =new iScroll("center3",{bounce:false,vScrollbar:false});
		}
		loaded();
		document.addEventListener("touchmove",function (e) {
			e.preventDefault();
		},false);
	}
})();