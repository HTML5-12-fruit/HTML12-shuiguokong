(function () {
	var xml=new XMLHttpRequest();
	var url="../json/pret.json";
	xml.open("get",url,true);
	xml.send(null);
	xml.onload = function() {
		var obj=JSON.parse(xml.responseText);
		var len = obj.con.length;
		for (var i=0; i<len; i++) {
			var Str=obj.con[i].text;
			var newStr =Str.substring(0,18)+'……';
			$(".periphery").append("<div class='center_content'><div class='left_circle'><div class='left_line'></div></div><div class='right_circle'><div class='right_line'></div></div><div class='left_bottom'></div><div class='right_bottom'></div><div class='big_circle'><img src='../"+obj.con[i].pics+"'></div><div class='writing'><h2 class='tittle'>"+obj.con[i].Stitle+"</h2><span class='paragraph'>"+newStr+"</span></div><div class='arrowhead'><img src='../images/arrowhead.png'></div></div>");
		}
		load2();
		$(".center_content").click(function () {
			var a=$(this).index();
			$('.know-h3').html(obj.con[a].Stitle);
			$('p').html(obj.con[a].text);
			$('.know-apple').attr('src',obj.con[a].pics);
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
		$('.top-bag').click(function () {
			window.location.href = 'http://localhost/test100/%E6%B0%B4%E6%9E%9C%E6%8E%A7/##';
		});
	}
})();