/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// 分类模板
function createTempletWithCategroy() {
	var typeSet = arguments[0];
	var results = arguments[1];
	if(typeSet != null) {
		typeSet.forEach(function (typeItem) {
	    	if(typeItem == "Movie") {
	    		movieTemplet(results);
	    	} else if(typeItem == "Video") {
	    		videoTemplet(results);
	    	} else if(typeItem == "Music") {
	    		musicTemplet(results);
	    	} else if(typeItem == "Restaurant") {
	    		waimaiTemplet(results);
	    	} else if(typeItem == "Product") {
	    		productTemplet(results);
	    	} else if(typeItem == "News") {
	    		newsTemplet(results);
	    	} else if(typeItem == "Coupon") {
	    		couponTemplet(results);
	    	}
		});
	}
}

// 不分类模板
function createTempletWithOutCategroy(data) {
	var categroy = "<div class=\"categroy all\">"
				+"		<div class=\"search-result\">"
				+"			<div class=\"categroy-panel\">"
				+"				<div align=\"center\">"
				+"					<span class=\"categroy-title\">电影</span>"
				+"				</div>";
	
	var sum = "";
	var count = 0;
	for(var i = 0; i < data.length; i++) {
		if(data[i].type == "Movie") {
			++count;
			if(count == 3) {
				sum += "<div class=\"more-movie\" style=\"display:none;\">";
			}

			var imgName = "";
			var title = "";
			var scoreWidth = "0%";
			var score = "暂无评分";
			var information = "";
			var introduction = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			if(data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if(nameArr.length == 1) {
					imgName = data[i].from_app　+ ".png";
				} else {
					for(var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if(j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if(data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if(data[i].score != null && data[i].score != "") {
				scoreWidth = (data[i].score　/　5)　* 100 + "%";
				score = data[i].score;
			}


			if(data[i].information != null && data[i].information != "") {
				information += "<div><span style=\"color:#666666;font-size:12px;\">" + data[i].information.split("主演")[0] + "</span></div>";
				information += "<div><span style=\"color:#666666;font-size:12px;\">" + "主演" + data[i].information.split("类型")[0].split("主演")[1] + "</span></div>";
			}

			
			if(data[i].introduction != null && data[i].introduction != "") {
				introduction = data[i].introduction;
			}
			
			if(data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}

			var item = "<div class='card-panel hoverable search-result'>"
				+"			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>"
				+"			<div class=\"card-content\">"
				+"				<div class=\"card-title\">"
				+"					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">"+ title +"</a>"
				+"				</div>"
				+"				<div class=\"starrating icon-star\">"
				+"					<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>"
				+"				</div>"
				+"				<span style=\"color:#ffc30c;font-size:13px;\">" + score + "(豆瓣)" + "</span>"
				+"			</div>"
				+"			<div class=\"card-content\">"
				+				information
				+"			</div>"
				+"			<div class='card-content'>"
				+"				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
				+"			</div>"
				+"		</div>";
			sum += item;
		}
		if((i == data.length - 1) && count >= 3) {
			sum += "<div class=\"tcdPageCode-movie\">"
				+"		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>"
				+"		<span class=\"current\">3</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>"
				+"		<span>...</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>"
				+"		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>"
				+"	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-movie\">"
				+"		<span class=\"slide-text-movie\">展开▾</span>"
				+"	</div>";
		}
	}
	categroy += sum;
	categroy +="	</div>"
			 +"	</div>"
			 +"</div>";
			
	$("#fulltext-search").append(categroy);
	
	var y = 0; 
	$(".movie .categroy-panel .card-panel").each(function () {
		++y;
		if(y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});
	
	$(".tcdPageCode-movie").createPage({
        pageCount: Math.ceil(count/5),
        current:1,
        backFn:function(p){
        	var z = 0;
        	$(".movie .categroy-panel .card-panel").each(function () {
        		++z;
        		if(z >= ((p-1)*5+1) && z <= 5*p) {
        			$(this).css("display", "block");
        		} else {
        			$(this).css("display", "none");
        		}
        	});
            //console.log(p);
        }
    });
	
	$(".slide-movie").click(function(){
		  if($(".more-movie").css("display") == "none") {
			  $(".more-movie").slideDown();
			  $(".slide-text-movie").text("折叠");
		  } else {
			  $(".more-movie").slideUp();
			  $(".slide-text-movie").text("展开▾");
		  }
	});
}



/* 电影模板 */
function movieTemplet(data) {
	var categroy = "<div class=\"categroy movie\">"
				+"		<div class=\"search-result\">"
				+"			<div class=\"categroy-panel\">"
				+"				<div align=\"center\">"
				+"					<span class=\"categroy-title\">电影</span>"
				+"				</div>";
	
	var sum = "";
	var count = 0;
	for(var i = 0; i < data.length; i++) {
		if(data[i].type == "Movie") {
			++count;
			if(count == 3) {
				sum += "<div class=\"more-movie\" style=\"display:none;\">";
			}

			var imgName = "";
			var title = "";
			var scoreWidth = "0%";
			var score = "暂无评分";
			var information = "";
			var introduction = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			if(data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if(nameArr.length == 1) {
					imgName = data[i].from_app　+ ".png";
				} else {
					for(var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if(j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if(data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if(data[i].score != null && data[i].score != "") {
				scoreWidth = (data[i].score　/　5)　* 100 + "%";
				score = data[i].score;
			}


			if(data[i].information != null && data[i].information != "") {
				information += "<div><span style=\"color:#666666;font-size:12px;\">" + data[i].information.split("主演")[0] + "</span></div>";
				information += "<div><span style=\"color:#666666;font-size:12px;\">" + "主演" + data[i].information.split("类型")[0].split("主演")[1] + "</span></div>";
			}

			
			if(data[i].introduction != null && data[i].introduction != "") {
				introduction = data[i].introduction;
			}
			
			if(data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}

			var item = "<div class='card-panel hoverable search-result'>"
				+"			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>"
				+"			<div class=\"card-content\">"
				+"				<div class=\"card-title\">"
				+"					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">"+ title +"</a>"
				+"				</div>"
				+"				<div class=\"starrating icon-star\">"
				+"					<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>"
				+"				</div>"
				+"				<span style=\"color:#ffc30c;font-size:13px;\">" + score + "(豆瓣)" + "</span>"
				+"			</div>"
				+"			<div class=\"card-content\">"
				+				information
				+"			</div>"
				+"			<div class='card-content'>"
				+"				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
				+"			</div>"
				+"		</div>";
			sum += item;
		}
		if((i == data.length - 1) && count >= 3) {
			sum += "<div class=\"tcdPageCode-movie\">"
				+"		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>"
				+"		<span class=\"current\">3</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>"
				+"		<span>...</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>"
				+"		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>"
				+"	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-movie\">"
				+"		<span class=\"slide-text-movie\">展开▾</span>"
				+"	</div>";
		}
	}
	categroy += sum;
	categroy +="	</div>"
			 +"	</div>"
			 +"</div>";
			
	$("#fulltext-search").append(categroy);
	
	var y = 0; 
	$(".movie .categroy-panel .card-panel").each(function () {
		++y;
		if(y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});
	
	$(".tcdPageCode-movie").createPage({
        pageCount: Math.ceil(count/5),
        current:1,
        backFn:function(p){
        	var z = 0;
        	$(".movie .categroy-panel .card-panel").each(function () {
        		++z;
        		if(z >= ((p-1)*5+1) && z <= 5*p) {
        			$(this).css("display", "block");
        		} else {
        			$(this).css("display", "none");
        		}
        	});
            //console.log(p);
        }
    });
	
	$(".slide-movie").click(function(){
		  if($(".more-movie").css("display") == "none") {
			  $(".more-movie").slideDown();
			  $(".slide-text-movie").text("折叠");
		  } else {
			  $(".more-movie").slideUp();
			  $(".slide-text-movie").text("展开▾");
		  }
	});
}

/* 视频模板 */
function videoTemplet(data) {
	
	var categroy = "<div class=\"categroy video\">"
				+"	<div class=\"search-result\">"
				+"		<div class=\"categroy-panel\">"
				+"			<div align=\"center\">"
				+"				<span class=\"categroy-title\">视频</span>"
				+"			</div>";
	
	var sum = "";
	var count = 0;
	for(var i = 0; i < data.length; i++) {
		if(data[i].type == "Video") {
			++count;
			if(count == 3) {
				sum += "<div class=\"more-video\" style=\"display:none;\">";
			}

			var imgName = "";
			var title = "";
		
			var writer = "";
			var description = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			if(data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if(nameArr.length == 1) {
					imgName = data[i].from_app　+ ".png";
				} else {
					for(var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if(j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if(data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}

			if(data[i].writer != null && data[i].writer != "") {
				writer = data[i].writer;
			}
			
			if(data[i].description != null && data[i].description != "") {
				description = data[i].description;
			}
			
			if(data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}

			var item = "<div class='card-panel hoverable search-result'>"
				+"			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>"
				+"			<div class=\"card-content\">"
				+"				<div class=\"card-title\">"
				+"					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">"+ writer + "----" + title +"</a>"
				+"				</div>"
				+"			</div>"
				+"			<div class=\"card-content\">"
				+"				<p style=\"font-size:13px;\" class=\"summary\">"
				+"					<span style=\"color:#707070;\">"
				+ 						description
				+"					</span>"
				+"				</p>"
				+"			</div>"
				+"			<div class='card-content'>"
				+"				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
				+"			</div>"
				+"		</div>";
			sum += item;
		}
		if((i == data.length - 1) && count >= 3) {
			sum += "<div class=\"tcdPageCode-video\">"
				+"		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>"
				+"		<span class=\"current\">3</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>"
				+"		<span>...</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>"
				+"		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>"
				+"	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-video\">"
				+"		<span class=\"slide-text-video\">展开▾</span>"
				+"	</div>";
		}
	}
	categroy += sum;
	categroy +="	</div>"
		 	 +"	</div>"
		 	 +"</div>";
			
	$("#fulltext-search").append(categroy);
	
	var y = 0; 
	$(".video .categroy-panel .card-panel").each(function () {
		++y;
		if(y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});
	
	$(".tcdPageCode-video").createPage({
        pageCount: Math.ceil(count/5),
        current:1,
        backFn:function(p){
        	var z = 0;
        	$(".video .categroy-panel .card-panel").each(function () {
        		++z;
        		if(z >= ((p-1)*5+1) && z <= 5*p) {
        			$(this).css("display", "block");
        		} else {
        			$(this).css("display", "none");
        		}
        	});
            //console.log(p);
        }
    });
	
	$(".slide-video").click(function(){
		  if($(".more-video").css("display") == "none") {
			  $(".more-video").slideDown();
			  $(".slide-text-video").text("折叠");
		  } else {
			  $(".more-video").slideUp();
			  $(".slide-text-video").text("展开▾");
		  }
	});
}

/* 音乐模板 */
function　musicTemplet(data) {
	
	
	
}

/* 外卖模板 */
function waimaiTemplet(data) {
	var categroy = "<div class=\"categroy waimai\">"
				+"		<div class=\"search-result\">"
				+" 			<div class=\"categroy-panel\">"
				+" 				<div align=\"center\">"
				+"					<span class=\"categroy-title\">外卖</span>"
				+" 				</div>";
	var sum = "";
	var count= 0;
	for(var i = 0; i < data.length; i++) {
		if(data[i].type == "Restaurant") {
			++count;
			if(count == 3) {
				sum += "<div class=\"more-waimai\" style=\"display:none;\">";
			}
			var imgName = "";
			var title = "";
			var scoreWidth = "0%";
			var score = "暂无评分";
			var right1 = "";
			var right2 = "";
			var desOrother = "";
			var address = "";
			var geoDistance = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			
			if(data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if(nameArr.length == 1) {
					imgName = data[i].from_app　+ ".png";
				} else {
					for(var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if(j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if(data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if(data[i].score != null && data[i].score != "") {
				scoreWidth = (data[i].score　/　5)　* 100 + "%";
				score = data[i].score;
			}
			if(data[i].recent_order_num != null && data[i].recent_order_num != "") {
				right1 = " 月销量/" + data[i].recent_order_num;
			} else if(data[i].avg_price != null && data[i].avg_price != "") {
				right1 = " 人均/" + data[i].avg_price;
			}
			if(data[i].phone != null && data[i].phone != "") {
				right2 = "  联系电话:" + data[i].phone;
			}　else if(data[i].city != null && data[i].city != "") {
				right2 = "  所在城市:" + data[i].city;
			}
			if(data[i].description != null && data[i].description != "" && typeof(data[i].description) != "undefined") {
				desOrother = data[i].description;
			} else {
				if(data[i].opening_hours != null && data[i].opening_hours != "" && typeof(data[i].opening_hours) != "undefined") {
					desOrother += "营业时间:" +  data[i].opening_hours + "<br/>";
				}
				if(data[i].recommend_item != null && data[i].recommend_item != "" && typeof(data[i].recommend_item) != "undefined") {
					desOrother += "推荐:";
					for(var k = 0; k < data[i].recommend_item.length; k++) {
						desOrother +=  data[i].recommend_item[k] + "    ";
					}
					desOrother += "<br/>";
				}
			}
			if(data[i].address != null && data[i].address != "") {
				address = data[i].address;
			} else if(data[i].poi_address != null && data[i].poi_address != "") {
				address = data[i].poi_address;
			}
			if(data[i].geoDistance != null && data[i].geoDistance != "") {
				geoDistance = data[i].geoDistance;
			}
			
			if(data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}
			var item ="	<div class=\"card-panel hoverable search-result\">"
					+"		<div>"
					+"			<img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\">"
					+"		</div>"
					+"		<div class=\"card-content\">"
					+"			<div class=\"card-title\">"
					+"				<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>"
					+"			</div>"
					+"			<div class=\"starrating icon-star\" >"
					+"				<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>"
					+"			</div>"
					+"			<span style=\"font-size:13px;color:#ffc30c;\"> " + score + "</span>"
					+"			<span style=\"color:#707070;font-size:10px;\">" + right1 + "</span>"
					+"			<span style=\"color:#707070;font-size:10px;\">" + right2 + "</span>"
					+"		</div>"
					+"		<div class=\"card-content\">"
					+"			<p style=\"font-size:13px;\" class=\"summary\">"
					+"				<span style=\"color:#707070;\">"
					+ 					desOrother
					+"				</span>"
					+"			</p>"
					+"		</div>"
					+"		<div class=\"card-content\">"
					+"			<span style=\"color:#707070;font-size:11px;\">" + address + "</span>"
					+"			<span style=\"color:#ff6d00;font-size:11px;\">" + "  " + geoDistance + "</span>"
					+"			<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
					+"		</div>"
					+"	</div>";
			sum += item;
		}
		if((i == data.length - 1) && count >= 3) {
			sum += "<div class=\"tcdPageCode-waimai\">"
				+"		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>"
				+"		<span class=\"current\">3</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>"
				+"		<span>...</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>"
				+"		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>"
				+"	</div>";
			
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-waimai\">"
				+"		<span class=\"slide-text-waimai\">展开▾</span>"
				+"	</div>";
		}
	}
	categroy += sum;
	categroy +="	</div>"
			 +"	</div>"
			 +"</div>";
	$("#fulltext-search").append(categroy);
	
	var y = 0; 
	$(".waimai .categroy-panel .card-panel").each(function () {
		++y;
		if(y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});
	
	$(".tcdPageCode-waimai").createPage({
        pageCount: Math.ceil(count/5),
        current:1,
        backFn:function(p){
        	var z = 0;
        	$(".waimai .categroy-panel .card-panel").each(function () {
        		++z;
        		if(z >= ((p-1)*5+1) && z <= 5*p) {
        			$(this).css("display", "block");
        		} else {
        			$(this).css("display", "none");
        		}
        	});
            //console.log(p);
        }
    });
	
	$(".slide-waimai").click(function(){
		  if($(".more-waimai").css("display") == "none") {
			  $(".more-waimai").slideDown();
			  $(".slide-text-waimai").text("折叠");
		  } else {
			  $(".more-waimai").slideUp();
			  $(".slide-text-waimai").text("展开▾");
		  }
	});
}

/* 商品模板 */
function productTemplet(data) {
	var categroy = "<div class=\"categroy product\">"
		+"				<div class=\"search-result\">"
		+" 					<div class=\"categroy-panel\">"
		+" 						<div align=\"center\">"
		+"							<span class=\"categroy-title\">商品</span>"
		+" 						</div>";
	var sum = "";
	var count = 0;
	for(var i = 0; i < data.length; i++) {
		if(data[i].type == "Product") {
			++count;
			if(count == 3) {
				sum += "<div class=\"more-product\" style=\"display:none;\">";
			}
			var imgName = "";
			var title = "";
			var introduction = "";
			var tags = "TAGS:&nbsp;&nbsp;&nbsp;&nbsp;";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			
			if(data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if(nameArr.length == 1) {
					imgName = data[i].from_app　+ ".png";
				} else {
					for(var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if(j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if(data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if(data[i].introduction != null && data[i].introduction != "") {
				for(var k = 0; k < data[i].introduction.length; k++) {
					if(k < 6) {
						introduction += data[i].introduction[k] + "<br/>";
					}
				}
			}
			if(data[i].tags != null && data[i].tags != "") {
				for(var l = 0; l < data[i].tags.length; l++) {
					tags += data[i].tags[l].replace(/\s+/g, "") + "&nbsp;&nbsp;&nbsp;&nbsp;";
				}
			}
			if(data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}
			var item ="<div class=\"card-panel hoverable search-result\">"
				+"			<div>"
				+"				<img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\">"
				+"			</div>"
				+"			<div class=\"card-content\">"
				+"				<div class=\"card-title\">"
				+"					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>"
				+"				</div>"
				+"			</div>"
				+"			<div class=\"card-content\">"
				+"				<div>"
				+"					<span style=\"color:#666666;font-size:12px;\">" + introduction + "</span>"
				+"				</div>"
				+"			</div>"
				+"			<div class=\"card-content\">"
				+"				<div>"
				+"					<span style=\"color:#ff6d00;font-size:10px;\">" + tags + "</span>"
				+"				</div>"
				+"				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
				+"			</div>"
				+"		</div>";
			sum += item;
		}
		if((i == data.length - 1) && count >= 3) {
			sum += "<div class=\"tcdPageCode-product\">"
				+"		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>"
				+"		<span class=\"current\">3</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>"
				+"		<span>...</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>"
				+"		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>"
				+"	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-product\">"
				+"		<span class=\"slide-text-product\">展开▾</span>"
				+"	</div>";
		}
	}
	categroy += sum;
	categroy +="	</div>"
		 	 +"	</div>"
		 	 +"</div>";
	$("#fulltext-search").append(categroy);
	
	var y = 0; 
	$(".product .categroy-panel .card-panel").each(function () {
		++y;
		if(y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});
	
	$(".tcdPageCode-product").createPage({
        pageCount: Math.ceil(count/5),
        current:1,
        backFn:function(p){
        	var z = 0;
        	$(".product .categroy-panel .card-panel").each(function () {
        		++z;
        		if(z >= ((p-1)*5+1) && z <= 5*p) {
        			$(this).css("display", "block");
        		} else {
        			$(this).css("display", "none");
        		}
        	});
            //console.log(p);
        }
    });
	
	$(".slide-product").click(function(){
	  if($(".more-product").css("display") == "none") {
		  $(".more-product").slideDown();
		  $(".slide-text-product").text("折叠");
	  } else {
		  $(".more-product").slideUp();
		  $(".slide-text-product").text("展开▾");
	  }
	});
}

/* 新闻模板 */
function newsTemplet(data) {
	var categroy = "<div class=\"categroy news\">"
		+"				<div class=\"search-result\">"
		+"					<div class=\"categroy-panel\">"
		+"						<div align=\"center\">"
		+"							<span class=\"categroy-title\">新闻</span>"
		+"						</div>";

	var sum = "";
	var count = 0;
	for(var i = 0; i < data.length; i++) {
		if(data[i].type == "News") {
			++count;
			if(count == 3) {
				sum += "<div class=\"more-news\" style=\"display:none;\">";
			}
			var imgName = "";
			var title = "";
			var content = "";
			var writer = "";
			var time = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			
			if(data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if(nameArr.length == 1) {
					imgName = data[i].from_app　+ ".png";
				} else {
					for(var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if(j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if(data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if(data[i].content != null && data[i].content != "") {
				content = data[i].content.length <= 60 ? data[i].content : data[i].content.substr(0, 60) + "....";
			}
			if(data[i].writer != null && data[i].writer != "") {
				writer = data[i].writer;
			}
			if(data[i].time != null && data[i].time != "") {
				time = data[i].time;
			}
			if(data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}
		
			var item = "<div class='card-panel hoverable search-result'>"
				+"			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>"
				+"			<div class=\"card-content\">"
				+"				<div class=\"card-title\">"
				+"					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>"
				+"				</div>"
				+"			</div>"
				+"			<div class=\"card-content\">"
				+"				<p style=\"font-size:13px;\" class=\"summary\">"
				+"					<span style=\"color:#707070;\">"
				+ 						content
				+"					</span>"
				+"				</p>"
				+"			</div>"
				+"			<div class='card-content'>"
				+"				<span style=\"color:#039be5;font-size:11px;\">" + writer + "   " + time + "</span>"
				+"				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
				+"			</div>"
				+"		</div>";
			sum += item;
		}
		if((i == data.length - 1)  && count >= 3) {
			sum += "<div class=\"tcdPageCode-news\">"
				+"		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>"
				+"		<span class=\"current\">3</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>"
				+"		<span>...</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>"
				+"		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>"
				+"	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-news\">"
				+"		<span class=\"slide-text-news\">展开▾</span>"
				+"	</div>";
		}
	}
	categroy += sum;
	categroy +="	</div>"
		 	 +"	</div>"
		 	 +"</div>";
			
	$("#fulltext-search").append(categroy);
	
	var y = 0; 
	$(".news .categroy-panel .card-panel").each(function () {
		++y;
		if(y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});
	
	$(".tcdPageCode-news").createPage({
        pageCount: Math.ceil(count/5),
        current:1,
        backFn:function(p){
        	var z = 0;
        	$(".news .categroy-panel .card-panel").each(function () {
        		++z;
        		if(z >= ((p-1)*5+1) && z <= 5*p) {
        			$(this).css("display", "block");
        		} else {
        			$(this).css("display", "none");
        		}
        	});
            //console.log(p);
        }
    });
		
	$(".slide-news").click(function(){
	  if($(".more-news").css("display") == "none") {
		  $(".more-news").slideDown();
		  $(".slide-text-news").text("折叠");
	  } else {
		  $(".more-news").slideUp();
		  $(".slide-text-news").text("展开▾");
	  }
	});
}

/* 团购模板 */
function couponTemplet(data) {
	var categroy = "<div class=\"categroy coupon\">"
		+"				<div class=\"search-result\">"
		+" 					<div class=\"categroy-panel\">"
		+" 						<div align=\"center\">"
		+"							<span class=\"categroy-title\">团购</span>"
		+" 						</div>";
	var sum = "";
	var count= 0;
	for(var i = 0; i < data.length; i++) {
		if(data[i].type == "Coupon") {
			++count;
			if(count == 3) {
				sum += "<div class=\"more-coupon\" style=\"display:none;\">";
			}
			var imgName = "";
			var title = "";
			var scoreWidth = "0%";
			var score = "暂无评分";
			var right1 = "";
			var right2 = "";
			var desOrother = "";
			var address = "";
			var geoDistance = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			
			if(data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if(nameArr.length == 1) {
					imgName = data[i].from_app　+ ".png";
				} else {
					for(var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if(j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if(data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if(data[i].score != null && data[i].score != "") {
				scoreWidth = (data[i].score　/　5)　* 100 + "%";
				score = data[i].score;
			}
			if(data[i].retail_price != null && data[i].retail_price != "") {
				right1 = "  零售价:" + data[i].retail_price;
			} else if(data[i].sale_count != null && data[i].sale_count != "") {
				right1 = "　　已销售" + data[i].sale_count;
			}
			if(data[i].price != null && data[i].price != "") {
				right2 = "  团购价:" + data[i].price;
			}　else if(data[i].city != null && data[i].city != "") {
				right2 = "  所在城市:" + data[i].city;
			}
			if(data[i].deal_details != null && data[i].deal_details != "" && typeof(data[i].deal_details) != "undefined") {
				desOrother = data[i].deal_details.length <= 60 ? data[i].deal_details : data[i].deal_details.substr(0, 60) + "...."; 
			}
			if(data[i].poi_info.poi_address != null && data[i].poi_info.poi_address != "") {
				address = data[i].poi_info.poi_address;
			} else if(data[i].poi_info.poi_name != null && data[i].poi_info.poi_name != "") {
				address = data[i].poi_info.poi_name;
			}
			if(data[i].geoDistance != null && data[i].geoDistance != "") {
				geoDistance = data[i].geoDistance;
			}
			
			if(data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}
			var item ="	<div class=\"card-panel hoverable search-result\">"
					+"		<div>"
					+"			<img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\">"
					+"		</div>"
					+"		<div class=\"card-content\">"
					+"			<div class=\"card-title\">"
					+"				<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>"
					+"			</div>"
					+"			<div class=\"starrating icon-star\" >"
					+"				<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>"
					+"			</div>"
					+"			<span style=\"font-size:13px;color:#ffc30c;\"> " + score + "</span>"
					+"			<span style=\"color:#707070;font-size:10px;\">" + right1 + "</span>"
					+"			<span style=\"color:#707070;font-size:10px;\">" + right2 + "</span>"
					+"		</div>"
					+"		<div class=\"card-content\">"
					+"			<p style=\"font-size:13px;\" class=\"summary\">"
					+"				<span style=\"color:#707070;\">"
					+ 					desOrother
					+"				</span>"
					+"			</p>"
					+"		</div>"
					+"		<div class=\"card-content\">"
					+"			<span style=\"color:#707070;font-size:11px;\">" + address + "</span>"
					+"			<span style=\"color:#ff6d00;font-size:11px;\">"  + "  " + geoDistance + "</span>"
					+"			<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
					+"		</div>"
					+"	</div>";
				sum += item;
			}
		if((i == data.length - 1) && count >= 3) {
			sum += "<div class=\"tcdPageCode-coupon\">"
				+"		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>"
				+"		<span class=\"current\">3</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>"
				+"		<span>...</span>"
				+"		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>"
				+"		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>"
				+"	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-coupon\">"
				+"		<span class=\"slide-text-coupon\">展开▾</span>"
				+"	</div>";
		}
		}
	categroy += sum;
	categroy +="	</div>"
		 	 +"	</div>"
		 	 +"</div>";
	$("#fulltext-search").append(categroy);
	
	var y = 0; 
	$(".coupon .categroy-panel .card-panel").each(function () {
		++y;
		if(y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});
	
	$(".tcdPageCode-coupon").createPage({
        pageCount: Math.ceil(count/5),
        current:1,
        backFn:function(p){
        	var z = 0;
        	$(".coupon .categroy-panel .card-panel").each(function () {
        		++z;
        		if(z >= ((p-1)*5+1) && z <= 5*p) {
        			$(this).css("display", "block");
        		} else {
        			$(this).css("display", "none");
        		}
        	});
            //console.log(p);
        }
    });
	
	$(".slide-coupon").click(function(){
	  if($(".more-coupon").css("display") == "none") {
		  $(".more-coupon").slideDown();
		  $(".slide-text-coupon").text("折叠");
	  } else {
		  $(".more-coupon").slideUp();
		  $(".slide-text-coupon").text("展开▾");
	  }
	});
}

/* 知识模板 */


/* 搜索异步调用 */
function search() {
	var $searchQuery = $("#search-query");	// 用户搜索串
	var model = 0;	// 保留模板 1号表示不分类
	if($searchQuery.val().trim() == "") {
		return;
	}
	var params = {
		"source": "me",
		"searchQuery": $searchQuery.val(),
		"typeName": "",
		"lat": "",
		"lon": "",
    };
	if(typeof(arguments[0]) != "undefined" && arguments[0] != "") {
		$("#result-categroy-title").text(arguments[0] + ":搜索结果");
		params["typeName"] = arguments[0];
	}
	if($("#lat").val() != "" || $("#lat").val() != null) {
		params["lat"] = $("#lat").val();
	}
	if($("#lon").val() != "" || $("#lon").val() != null) {
		params["lon"] = $("#lon").val();
	}
    $.ajax({
    	/*url: "http://localhost:8080/MobileSearch/api/search!search.action",*/
        url: "http://60.205.139.71:8080/MobileSearch/api/search!search.action",
        /*url: "http://10.27.221.107/MobileSearch/api/search!search.action",*/
        type: "GET",
        dataType : "json",
        data : params, 
        success : function (data) {
        	$("#fulltext-search").empty();
        	var results = data.results;
        	var typeSet = new Set();
        	
        	// 如果搜索查询结果为空
        	if(results.length == 0) {
        		var noResults = "<span class=\"no-results\">很抱歉，我们没有查询到与\"" + $("#search-query").val() + "\"相关的结果</span>";
        		$("#fulltext-search").append(noResults);
        	}
        	for(var x = 0; x < results.length; x++) {
        		typeSet.add(results[x].type);
        	}
        	
        	if(model　== 0) {
        		// 调用生成模板方法-分类
        		createTempletWithCategroy(typeSet, results);
        	} else {
        		// 调用生成模板方法-不分类
        		createTempletWithOutCategroy(typeSet);
        	}
        },
        error : function (errorInfo , errorType) {
        	alert("无法识别搜索串");
        }
    });
}

/* 获取参数 */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) {
   	 return  decodeURIComponent(r[2]);
    }
    return null;
}

/* 获取地理信息 */
function getLocation() {
	 if(navigator.geolocation) {  
		 // 百度地图API功能  
		 /*var map = new BMap.Map("container");  
		 var point = new BMap.Point(116.331398,39.897445);  
         map.centerAndZoom(point,12); */ 
         var geolocation = new BMap.Geolocation();
         geolocation.getCurrentPosition(function(r) {
             if(this.getStatus() == BMAP_STATUS_SUCCESS) {  
                 //var mk = new BMap.Marker(r.point);
                 //map.addOverlay(mk);
                 //map.panTo(r.point);
                 var latText = "<input id=\"lat\" type=\"hidden\" value=\"" + r.point.lat + "\"/>";
                 var lonText = "<input id=\"lon\" type=\"hidden\" value=\"" + r.point.lng + "\"/>";
                 $(".body-main").append(latText);
                 $(".body-main").append(lonText);
             }  
             else {
                 alert('瞬间爆炸，定位失败'+this.getStatus());  
             }          
         },{enableHighAccuracy: true})
     }
}


/***/ })
/******/ ]);