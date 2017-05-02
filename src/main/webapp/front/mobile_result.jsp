<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="keywords" content="移动搜索 知识搜索　本体　语义搜索　美食　团购　团购券">
	<meta name="description" content="燕云搜索是结合移动搜索和知识搜索的搜索引擎，由阿约倾情奉献">
	<meta name="renderer" content="webkit">
	<meta http-equiv="Cache-Control" content="no-siteapp">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<title>燕云搜索</title>
	<link rel='icon' href='./imgs/logo/logo.ico' type=‘image/x-ico’ />
	<link rel="stylesheet" type="text/css" href="./css/main/main-css.css">
	<link rel="stylesheet" href="./css/main/kinerloader2.css"/>
	<link rel="stylesheet" href="./css/search-result/search-result.css">
	<link rel="stylesheet" media="screen, projection" href="./css/model-select/fancy-select.css">
	<link rel="stylesheet" type="text/css" href="./css/model-select/normalize.css" />
	<link href="./css/font-awesome-4.5.0/css/font-awesome.min.css" rel="stylesheet" />
	
</head>
<body class="bxg" style="zoom: 1; background-color: #FFF;">
	<div class="logo-results-main">
		<a href="mobile_index.jsp"><img id="logo" alt="logo" src="./imgs/logo/logo.png" /></a>
	</div>
	<div class="search-main">
		<div class="model-select">
			<section id="basic-usage">
				<select id="basic-usage-demo">
					<option value="1">移动搜索</option>
					<option value="2">知识搜索</option>
				</select>
			</section>
		</div>
		<div class="search-input mobile-line">
			<form id="search-form" action="mobile_result.jsp" target="_self">
				<input class="search-query" id="search-query" placeholder=" 外卖 / 商品 / 团购券 / 新闻..."
					autocorrect="on"
					autocomplete="off" maxlength="50"
					list="suggests" x-webkit-speech="" required="required" baiduSug="1">
				<input name=ie type=hidden value=utf-8>
				<datalist id="suggests"></datalist>
				<input class="s_btn" id="search" type="button" value="搜索" >
			</form>
		</div>
		
		<!-- 搜索导航栏 -->
		<ul class="nav-category">
			<li><a class="all-link" href="#1">全部</a></li>
			<li><a class="movie-link" href="#2">电影</a></li>
			<li><a class="video-link" href="#3">视频</a></li>
			<li><a class="restaurant-link" href="#4">外卖</a></li>
			<li><a class="product-link" href="#5">商品</a></li>
			<li><a class="news-link" href="#6">新闻</a></li>
			<li><a class="coupon-link" href="#7">团购</a></li>
		</ul>
	</div>
	
	<div class="body-main">
		<%-- <div class="loader duration-3s-before" style='margin-left:-5%;margin-top:5%;'>
			<a href="javascript:;"></a>
			<span style='margin-left:40px;font-size:30px;margin-bottom:10px;color:#1E90FF;'>Answer</span>
		</div> --%>
		
		<!-- ES搜索 -->
		<div id="fulltext-search">
			
		</div>
	</div>
	

	<!-- 模式选择 -->
	<script src="./js/libs/jquery-3.1.1.min.js"></script>
	<script src="./js/plugins/jquery.page.js"></script>
	<script src="./js/libs/bootstrap.min.js"></script>
	<script src="./js/main/main.js"></script>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=SZtUO9rpXLqAN0vOrHrVe9HmW3hGsL46"></script>  	
	<script charset="gbk" src="http://www.baidu.com/js/opensug.js"></script>
	<script src="./js/model-select/fancy-select.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$('#basic-usage-demo').fancySelect();
		});
	</script>
	
	<!-- ES搜索结果 -->
	<script type="text/javascript">
		
		$("document").ready(function () {
			getLocation();	// 获取地理位置
			var searchQuery = GetQueryString("searchQuery");
		   	$(".nav-category li a").each(function () {
				$(this).click(function () {
					search($(this).attr("class").split("-")[0]);	
				});
		   	});
			
			if(searchQuery != null || searchQuery != "") {
			   $("#search-query").val(searchQuery);
			}
			search();
		});
		$("#search-query").keydown(function(e){
			var curKey = e.which;
			if(curKey == 13) {
				/* $("#回车事件按钮控件").click(); */
				search();
				return false;
			}
		});
		$("#search").click(function (){
			search();
		});
		
		var params = {
	    		"XOffset":2, //提示框位置横向偏移量,单位px
	    		"YOffset":0, //提示框位置纵向偏移量,单位px
	    		"width":350, //提示框宽度，单位px
	    		"fontColor":"black", //提示框文字颜色
	    		"fontColorHI":"black", //提示框高亮选择时文字颜色
	    		"fontSize":"13px", //文字大小
	    		"fontFamily":"sans-serif", //文字字体
	    		"borderColor":"#757373", //提示框的边框颜色
	    		"bgcolorHI":"#b0aeae", //提示框高亮选择的颜色
	    		"sugSubmit":false //选中提示框中词条时是否提交表单
	    };
		function confirmCallback() {
			
		}
	   	BaiduSuggestion.bind("suggests", params, confirmCallback);
	</script>
	<!-- ES搜索结果 -->
	
</body>
</html>