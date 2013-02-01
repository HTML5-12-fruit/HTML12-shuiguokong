(function () {
	var whichOne = localStorage.skip;
	var xml=new XMLHttpRequest();
	var url="../json/know.json";
	xml.open("get",url,true);
	xml.send(null);
	xml.onload = function() {
		var obj=JSON.parse(xml.responseText);
		var len = obj.con.length;
		$('.know-h3').html(obj.con[whichOne].name);
		$('p').html(obj.con[whichOne].text);
		$('.know-apple').attr('src',obj.con[whichOne].pics);
		load1();
	}

	function load1() {
		var myscroll;
		function loaded() {
			myscroll =new iScroll("textOut",{bounce:false,vScrollbar:false});
			$('.top-bag').click(function () {
				window.location.href = 'http://localhost/test100/%E6%B0%B4%E6%9E%9C%E6%8E%A7/##';
			})
		}
		loaded();
		document.addEventListener("touchmove",function (e) {
			e.preventDefault();
		},false);
	}
})();








