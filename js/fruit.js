function homePage() {
	var nowNum = 0;//设置初始化为0，记录上一个块的下标
	$('#nav a').click(function () {
		var newNum = $(this).index();//获取div块的索引值
		if (nowNum == newNum) {
			/*单击的是当前块，不发生任何运动*/
		}
		else {
			/*不是当前，发生运动*/
			$('.show div').stop(true,true);
			$($('.show>div')[newNum]).animate({'left':'0'},1000);
			$($('.show>div')[nowNum]).animate({'left':'-320px'},1000,function () {
				$('.show>div')[nowNum].style.left='320px';
				nowNum = newNum;
			});
		}
	});

	/*
	 *原理：无
	 *关系：无
	 *作用：获取后台数据
	 *作者：lvyan 
	 */
	$.getJSON('json/diet-index.json',function (data) {
		//JS添加食疗结构与后台数据
		for (var i=0; i<data.diet.length; i++) {
			$('.center-beyond').append('<div class="con diet-con" a="'+i+'"><div class="left-border"><div class="round">'+(i+1)+'</div></div><div class="right-border"><a href="##"><span>'+data.diet[i]+'</span></a></div></div>');
		}
		//JS添加禁忌结构与后台数据
		for (var i=0; i<data.tabu.length; i++) {
			$('.centerBeyond').append('<div class="con tabu-con" a="'+i+'"><div class="left-border"><div class="round">'+(i+1)+'</div></div><div class="right-border"><a href="##"><span>'+data.tabu[i]+'</span></a></div></div>');
		}
		//JS添加知识结构与后台数据
		for (var i=0; i<data.know.length; i++) {
			$('.knowCon').append('<li class="know-con" a="'+i+'"><a href="##"><img src="'+data.know[i].pics+'"/></a><span>'+data.know[i].name+'</span></li>');
			console.log(i);
		}
		domLoaded();
	})
	
		
	/*
	 *
	 *作用:引用iScroll框架实现滚动的效果
	 *作者：lvyan 
	 */
	function domLoaded() {
		//食疗网页滚动的效果
		function page() {
			var myscroll;
			function loaded() {
				myscroll =new iScroll("centerShow",{vScrollbar:false});
			}
			loaded();
			document.addEventListener("touchmove",function (e) {
				e.preventDefault();
			},false);
		}page();

		/*
		 *原理：无
		 *关系：无
		 *作用：禁忌网页滚动的效果
		 *作者：lvyan 
		 */
		function tabuPage() {
			var myscroll;
			function loaded() {
				myscroll =new iScroll("tabuShow",{vScrollbar:false});
			}
			loaded();
			document.addEventListener("touchmove",function (e) {
				e.preventDefault();
			},false);
		}tabuPage();
		
		/*
		 *原理：无
		 *关系：无
		 *作用：知识网页滚动的效果
		 *作者：lvyan 
		 */
		function knowShow() {
			var myscroll;
			function loaded() {
				myscroll =new iScroll("knowShow",{vScrollbar:false});
			}
			loaded();
			document.addEventListener("touchmove",function (e) {
				e.preventDefault();
			},false);
		}knowShow();
		
		/*
		 *原理：无
		 *关系：无
		 *作用：美容网页滚动的效果
		 *作者：lvyan 
		 */
		function pretShow() {
			var myscroll;
			function loaded() {
				myscroll =new iScroll("pretShow",{vScrollbar:false});
			}
			loaded();
			document.addEventListener("touchmove",function (e) {
				e.preventDefault();
			},false);
		}pretShow();
	/*
	 *原理：给类名为con的类添加点击事件，然后记录属性a的内容存储到本地存储。
	 *作用：跳转到指定页面。
	 *关系：无
	 *作者：lvyan
	 */
		$('.diet-con').bind('click',function () {
			localStorage.skip = this.getAttribute('a') ;
			window.location.href = 
			'sub/diet--sub.html';
		});
		$('.tabu-con').bind('click',function () {
			localStorage.skip = this.getAttribute('a') ;
			window.location.href = 'sub/tabu--sub.html';
		});
		$('.pret-con').bind('click',function () {
			localStorage.skip = this.getAttribute('a') ;
			window.location.href = 'sub/pret--sub.html';
		});
		$('.slim-con').bind('click',function () {
			localStorage.skip = this.getAttribute('a') ;
			window.location.href = 'sub/slim--sub.html';
		});
		$('.know-con').bind('click',function () {
			localStorage.skip = this.getAttribute('a') ;
			window.location.href = 'sub/know--sub.html';
		});
	};
}homePage();
	

	