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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 1.4.0
(function () {
  var $;

  $ = window.jQuery || window.Zepto || window.$;

  $.fn.fancySelect = function (opts) {
    var isiOS, settings;
    if (opts == null) {
      opts = {};
    }
    settings = $.extend({
      forceiOS: false,
      includeBlank: false,
      optionTemplate: function optionTemplate(optionEl) {
        return optionEl.text();
      },
      triggerTemplate: function triggerTemplate(optionEl) {
        return optionEl.text();
      }
    }, opts);
    isiOS = !!navigator.userAgent.match(/iP(hone|od|ad)/i);
    return this.each(function () {
      var copyOptionsToList, disabled, options, sel, trigger, updateTriggerText, wrapper;
      sel = $(this);
      if (sel.hasClass('fancified') || sel[0].tagName !== 'SELECT') {
        return;
      }
      sel.addClass('fancified');
      sel.css({
        width: 1,
        height: 1,
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0
      });
      sel.wrap('<div class="fancy-select">');
      wrapper = sel.parent();
      if (sel.data('class')) {
        wrapper.addClass(sel.data('class'));
      }
      wrapper.append('<div class="trigger">');
      if (!(isiOS && !settings.forceiOS)) {
        wrapper.append('<ul class="options">');
      }
      trigger = wrapper.find('.trigger');
      options = wrapper.find('.options');
      disabled = sel.prop('disabled');
      if (disabled) {
        wrapper.addClass('disabled');
      }
      updateTriggerText = function updateTriggerText() {
        var triggerHtml;
        triggerHtml = settings.triggerTemplate(sel.find(':selected'));
        return trigger.html(triggerHtml);
      };
      sel.on('blur.fs', function () {
        if (trigger.hasClass('open')) {
          return setTimeout(function () {
            return trigger.trigger('close.fs');
          }, 120);
        }
      });
      trigger.on('close.fs', function () {
        trigger.removeClass('open');
        return options.removeClass('open');
      });
      trigger.on('click.fs', function () {
        var offParent, parent;
        if (!disabled) {
          trigger.toggleClass('open');
          if (isiOS && !settings.forceiOS) {
            if (trigger.hasClass('open')) {
              return sel.focus();
            }
          } else {
            if (trigger.hasClass('open')) {
              parent = trigger.parent();
              offParent = parent.offsetParent();
              if (parent.offset().top + parent.outerHeight() + options.outerHeight() + 20 > $(window).height() + $(window).scrollTop()) {
                options.addClass('overflowing');
              } else {
                options.removeClass('overflowing');
              }
            }
            options.toggleClass('open');
            if (!isiOS) {
              return sel.focus();
            }
          }
        }
      });
      sel.on('enable', function () {
        sel.prop('disabled', false);
        wrapper.removeClass('disabled');
        disabled = false;
        return copyOptionsToList();
      });
      sel.on('disable', function () {
        sel.prop('disabled', true);
        wrapper.addClass('disabled');
        return disabled = true;
      });
      sel.on('change.fs', function (e) {
        if (e.originalEvent && e.originalEvent.isTrusted) {
          return e.stopPropagation();
        } else {
          return updateTriggerText();
        }
      });
      sel.on('keydown', function (e) {
        var hovered, newHovered, w;
        w = e.which;
        hovered = options.find('.hover');
        hovered.removeClass('hover');
        if (!options.hasClass('open')) {
          if (w === 13 || w === 32 || w === 38 || w === 40) {
            e.preventDefault();
            return trigger.trigger('click.fs');
          }
        } else {
          if (w === 38) {
            e.preventDefault();
            if (hovered.length && hovered.index() > 0) {
              hovered.prev().addClass('hover');
            } else {
              options.find('li:last-child').addClass('hover');
            }
          } else if (w === 40) {
            e.preventDefault();
            if (hovered.length && hovered.index() < options.find('li').length - 1) {
              hovered.next().addClass('hover');
            } else {
              options.find('li:first-child').addClass('hover');
            }
          } else if (w === 27) {
            e.preventDefault();
            trigger.trigger('click.fs');
          } else if (w === 13 || w === 32) {
            e.preventDefault();
            hovered.trigger('click.fs');
          } else if (w === 9) {
            if (trigger.hasClass('open')) {
              trigger.trigger('close.fs');
            }
          }
          newHovered = options.find('.hover');
          if (newHovered.length) {
            options.scrollTop(0);
            return options.scrollTop(newHovered.position().top - 12);
          }
        }
      });
      options.on('click.fs', 'li', function (e) {
        var clicked;
        clicked = $(this);
        sel.val(clicked.data('raw-value'));
        if (!isiOS) {
          sel.trigger('blur.fs').trigger('focus.fs');
        }
        options.find('.selected').removeClass('selected');
        clicked.addClass('selected');
        trigger.addClass('selected');

        /* 修改form表单 */
        if (clicked.attr("data-raw-value") == 1) {
          $("#search-form").attr("action", "mobile_result.jsp");
        } else if (clicked.attr("data-raw-value") == 2) {
          $("#search-form").attr("action", "http://139.129.96.158:8080/DeepAnswer/front/developerAction!answer.action");
        }

        /* 修改form表单 */
        return sel.val(clicked.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs');
      });
      options.on('mouseenter.fs', 'li', function () {
        var hovered, nowHovered;
        nowHovered = $(this);
        hovered = options.find('.hover');
        hovered.removeClass('hover');
        return nowHovered.addClass('hover');
      });
      options.on('mouseleave.fs', 'li', function () {
        return options.find('.hover').removeClass('hover');
      });
      copyOptionsToList = function copyOptionsToList() {
        var selOpts;
        updateTriggerText();
        if (isiOS && !settings.forceiOS) {
          return;
        }
        selOpts = sel.find('option');
        return sel.find('option').each(function (i, opt) {
          var optHtml;
          opt = $(opt);
          if (!opt.prop('disabled') && (opt.val() || settings.includeBlank)) {
            optHtml = settings.optionTemplate(opt);
            if (opt.prop('selected')) {
              return options.append("<li data-raw-value=\"" + opt.val() + "\" class=\"selected\">" + optHtml + "</li>");
            } else {
              return options.append("<li data-raw-value=\"" + opt.val() + "\">" + optHtml + "</li>");
            }
          }
        });
      };
      sel.on('update.fs', function () {
        wrapper.find('.options').empty();
        return copyOptionsToList();
      });
      return copyOptionsToList();
    });
  };
}).call(undefined);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzFlYjYyMmRlYzhkM2ViOTBhNDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsLXNlbGVjdC9mYW5jeS1zZWxlY3QuanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImpRdWVyeSIsIlplcHRvIiwiZm4iLCJmYW5jeVNlbGVjdCIsIm9wdHMiLCJpc2lPUyIsInNldHRpbmdzIiwiZXh0ZW5kIiwiZm9yY2VpT1MiLCJpbmNsdWRlQmxhbmsiLCJvcHRpb25UZW1wbGF0ZSIsIm9wdGlvbkVsIiwidGV4dCIsInRyaWdnZXJUZW1wbGF0ZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwiZWFjaCIsImNvcHlPcHRpb25zVG9MaXN0IiwiZGlzYWJsZWQiLCJvcHRpb25zIiwic2VsIiwidHJpZ2dlciIsInVwZGF0ZVRyaWdnZXJUZXh0Iiwid3JhcHBlciIsImhhc0NsYXNzIiwidGFnTmFtZSIsImFkZENsYXNzIiwiY3NzIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwib3BhY2l0eSIsIndyYXAiLCJwYXJlbnQiLCJkYXRhIiwiYXBwZW5kIiwiZmluZCIsInByb3AiLCJ0cmlnZ2VySHRtbCIsImh0bWwiLCJvbiIsInNldFRpbWVvdXQiLCJyZW1vdmVDbGFzcyIsIm9mZlBhcmVudCIsInRvZ2dsZUNsYXNzIiwiZm9jdXMiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXQiLCJvdXRlckhlaWdodCIsInNjcm9sbFRvcCIsImUiLCJvcmlnaW5hbEV2ZW50IiwiaXNUcnVzdGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaG92ZXJlZCIsIm5ld0hvdmVyZWQiLCJ3Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImluZGV4IiwicHJldiIsIm5leHQiLCJjbGlja2VkIiwidmFsIiwiYXR0ciIsIm5vd0hvdmVyZWQiLCJzZWxPcHRzIiwiaSIsIm9wdCIsIm9w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QUEwQmdDLElBQUlMLEdBQUosTUFBYTlELFNBQVNHLFlBQWhELENBQUosRUFBbUU7QUFDakVpRSxzQkFBVXBFLFNBQVNJLGNBQVQsQ0FBd0IrRCxHQUF4QixDQUFWO0FBQ0EsZ0JBQUlBLElBQUloQyxJQUFKLENBQVMsVUFBVCxDQUFKLEVBQTBCO0FBQ3hCLHFCQUFPckIsUUFBUW1CLE1BQVIsQ0FBZSwwQkFBMkJrQyxJQUFJTCxHQUFKLEVBQTNCLEdBQXdDLHdCQUF4QyxHQUFtRU0sT0FBbkUsR0FBNkUsT0FBNUYsQ0FBUDtBQUNELGFBRkQsTUFFTztBQUNMLHFCQUFPdEQsUUFBUW1CLE1BQVIsQ0FBZSwwQkFBMkJrQyxJQUFJTCxHQUFKLEVBQTNCLEdBQXdDLEtBQXhDLEdBQWdETSxPQUFoRCxHQUEwRCxPQUF6RSxDQUFQO0FBQ0Q7QUFDRjtBQUNGLFNBWE0sQ0FBUDtBQVlELE9BbkJEO0FBb0JBckQsVUFBSXVCLEVBQUosQ0FBTyxXQUFQLEVBQW9CLFlBQVc7QUFDN0JwQixnQkFBUWdCLElBQVIsQ0FBYSxVQUFiLEVBQXlCbUMsS0FBekI7QUFDQSxlQUFPekQsbUJBQVA7QUFDRCxPQUhEO0FBSUEsYUFBT0EsbUJBQVA7QUFDRCxLQTlMTSxDQUFQO0FBK0xELEdBL01EO0FBaU5ELENBdE5ELEVBc05HMEQsSUF0TkgsWSIsImZpbGUiOiJqcy9tb2RlbC1zZWxlY3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzFlYjYyMmRlYzhkM2ViOTBhNDIiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNC4wXG4oZnVuY3Rpb24oKSB7XG4gIHZhciAkO1xuXG4gICQgPSB3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byB8fCB3aW5kb3cuJDtcblxuICAkLmZuLmZhbmN5U2VsZWN0ID0gZnVuY3Rpb24ob3B0cykge1xuICAgIHZhciBpc2lPUywgc2V0dGluZ3M7XG4gICAgaWYgKG9wdHMgPT0gbnVsbCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcbiAgICAgIGZvcmNlaU9TOiBmYWxzZSxcbiAgICAgIGluY2x1ZGVCbGFuazogZmFsc2UsXG4gICAgICBvcHRpb25UZW1wbGF0ZTogZnVuY3Rpb24ob3B0aW9uRWwpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbkVsLnRleHQoKTtcbiAgICAgIH0sXG4gICAgICB0cmlnZ2VyVGVtcGxhdGU6IGZ1bmN0aW9uKG9wdGlvbkVsKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25FbC50ZXh0KCk7XG4gICAgICB9XG4gICAgfSwgb3B0cyk7XG4gICAgaXNpT1MgPSAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQKGhvbmV8b2R8YWQpL2kpO1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29weU9wdGlvbnNUb0xpc3QsIGRpc2FibGVkLCBvcHRpb25zLCBzZWwsIHRyaWdnZXIsIHVwZGF0ZVRyaWdnZXJUZXh0LCB3cmFwcGVyO1xuICAgICAgc2VsID0gJCh0aGlzKTtcbiAgICAgIGlmIChzZWwuaGFzQ2xhc3MoJ2ZhbmNpZmllZCcpIHx8IHNlbFswXS50YWdOYW1lICE9PSAnU0VMRUNUJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWwuYWRkQ2xhc3MoJ2ZhbmNpZmllZCcpO1xuICAgICAgc2VsLmNzcyh7XG4gICAgICAgIHdpZHRoOiAxLFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pO1xuICAgICAgc2VsLndyYXAoJzxkaXYgY2xhc3M9XCJmYW5jeS1zZWxlY3RcIj4nKTtcbiAgICAgIHdyYXBwZXIgPSBzZWwucGFyZW50KCk7XG4gICAgICBpZiAoc2VsLmRhdGEoJ2NsYXNzJykpIHtcbiAgICAgICAgd3JhcHBlci5hZGRDbGFzcyhzZWwuZGF0YSgnY2xhc3MnKSk7XG4gICAgICB9XG4gICAgICB3cmFwcGVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cInRyaWdnZXJcIj4nKTtcbiAgICAgIGlmICghKGlzaU9TICYmICFzZXR0aW5ncy5mb3JjZWlPUykpIHtcbiAgICAgICAgd3JhcHBlci5hcHBlbmQoJzx1bCBjbGFzcz1cIm9wdGlvbnNcIj4nKTtcbiAgICAgIH1cbiAgICAgIHRyaWdnZXIgPSB3cmFwcGVyLmZpbmQoJy50cmlnZ2VyJyk7XG4gICAgICBvcHRpb25zID0gd3JhcHBlci5maW5kKCcub3B0aW9ucycpO1xuICAgICAgZGlzYWJsZWQgPSBzZWwucHJvcCgnZGlzYWJsZWQnKTtcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgICAgdXBkYXRlVHJpZ2dlclRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRyaWdnZXJIdG1sO1xuICAgICAgICB0cmlnZ2VySHRtbCA9IHNldHRpbmdzLnRyaWdnZXJUZW1wbGF0ZShzZWwuZmluZCgnOnNlbGVjdGVkJykpO1xuICAgICAgICByZXR1cm4gdHJpZ2dlci5odG1sKHRyaWdnZXJIdG1sKTtcbiAgICAgIH07XG4gICAgICBzZWwub24oJ2JsdXIuZnMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXIudHJpZ2dlcignY2xvc2UuZnMnKTtcbiAgICAgICAgICB9LCAxMjApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRyaWdnZXIub24oJ2Nsb3NlLmZzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyaWdnZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgIH0pO1xuICAgICAgdHJpZ2dlci5vbignY2xpY2suZnMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9mZlBhcmVudCwgcGFyZW50O1xuICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgdHJpZ2dlci50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgIGlmIChpc2lPUyAmJiAhc2V0dGluZ3MuZm9yY2VpT1MpIHtcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHJpZ2dlci5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICAgIHBhcmVudCA9IHRyaWdnZXIucGFyZW50KCk7XG4gICAgICAgICAgICAgIG9mZlBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnQoKTtcbiAgICAgICAgICAgICAgaWYgKChwYXJlbnQub2Zmc2V0KCkudG9wICsgcGFyZW50Lm91dGVySGVpZ2h0KCkgKyBvcHRpb25zLm91dGVySGVpZ2h0KCkgKyAyMCkgPiAkKHdpbmRvdykuaGVpZ2h0KCkgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmFkZENsYXNzKCdvdmVyZmxvd2luZycpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucmVtb3ZlQ2xhc3MoJ292ZXJmbG93aW5nJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGlmICghaXNpT1MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZWwub24oJ2VuYWJsZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWwucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBjb3B5T3B0aW9uc1RvTGlzdCgpO1xuICAgICAgfSk7XG4gICAgICBzZWwub24oJ2Rpc2FibGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHJldHVybiBkaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHNlbC5vbignY2hhbmdlLmZzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC5pc1RydXN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdXBkYXRlVHJpZ2dlclRleHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZWwub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBob3ZlcmVkLCBuZXdIb3ZlcmVkLCB3O1xuICAgICAgICB3ID0gZS53aGljaDtcbiAgICAgICAgaG92ZXJlZCA9IG9wdGlvbnMuZmluZCgnLmhvdmVyJyk7XG4gICAgICAgIGhvdmVyZWQucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICAgIGlmICghb3B0aW9ucy5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgaWYgKHcgPT09IDEzIHx8IHcgPT09IDMyIHx8IHcgPT09IDM4IHx8IHcgPT09IDQwKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlci50cmlnZ2VyKCdjbGljay5mcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodyA9PT0gMzgpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChob3ZlcmVkLmxlbmd0aCAmJiBob3ZlcmVkLmluZGV4KCkgPiAwKSB7XG4gICAgICAgICAgICAgIGhvdmVyZWQucHJldigpLmFkZENsYXNzKCdob3ZlcicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5maW5kKCdsaTpsYXN0LWNoaWxkJykuYWRkQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh3ID09PSA0MCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGhvdmVyZWQubGVuZ3RoICYmIGhvdmVyZWQuaW5kZXgoKSA8IG9wdGlvbnMuZmluZCgnbGknKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIGhvdmVyZWQubmV4dCgpLmFkZENsYXNzKCdob3ZlcicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5maW5kKCdsaTpmaXJzdC1jaGlsZCcpLmFkZENsYXNzKCdob3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodyA9PT0gMjcpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRyaWdnZXIudHJpZ2dlcignY2xpY2suZnMnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHcgPT09IDEzIHx8IHcgPT09IDMyKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBob3ZlcmVkLnRyaWdnZXIoJ2NsaWNrLmZzJyk7XG4gICAgICAgICAgfSBlbHNlIGlmICh3ID09PSA5KSB7XG4gICAgICAgICAgICBpZiAodHJpZ2dlci5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXIudHJpZ2dlcignY2xvc2UuZnMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3SG92ZXJlZCA9IG9wdGlvbnMuZmluZCgnLmhvdmVyJyk7XG4gICAgICAgICAgaWYgKG5ld0hvdmVyZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjcm9sbFRvcCgwKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnNjcm9sbFRvcChuZXdIb3ZlcmVkLnBvc2l0aW9uKCkudG9wIC0gMTIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvcHRpb25zLm9uKCdjbGljay5mcycsICdsaScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGNsaWNrZWQ7XG4gICAgICAgIGNsaWNrZWQgPSAkKHRoaXMpO1xuICAgICAgICBzZWwudmFsKGNsaWNrZWQuZGF0YSgncmF3LXZhbHVlJykpO1xuICAgICAgICBpZiAoIWlzaU9TKSB7XG4gICAgICAgICAgc2VsLnRyaWdnZXIoJ2JsdXIuZnMnKS50cmlnZ2VyKCdmb2N1cy5mcycpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNsaWNrZWQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgIHRyaWdnZXIuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgIFxuICAgICAgICAvKiDkv67mlLlmb3Jt6KGo5Y2VICovXG4gICAgICAgIGlmKGNsaWNrZWQuYXR0cihcImRhdGEtcmF3LXZhbHVlXCIpID09IDEpIHtcbiAgICAgICAgXHQkKFwiI3NlYXJjaC1mb3JtXCIpLmF0dHIoXCJhY3Rpb25cIiwgXCJtb2JpbGVfcmVzdWx0LmpzcFwiKTtcbiAgICAgICAgfSBlbHNlIGlmKGNsaWNrZWQuYXR0cihcImRhdGEtcmF3LXZhbHVlXCIpID09IDIp44CAe1xuICAgICAgICBcdCQoXCIjc2VhcmNoLWZvcm1cIikuYXR0cihcImFjdGlvblwiLCBcImh0dHA6Ly8xMzkuMTI5Ljk2LjE1ODo4MDgwL0RlZXBBbnN3ZXIvZnJvbnQvZGV2ZWxvcGVyQWN0aW9uIWFuc3dlci5hY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvKiDkv67mlLlmb3Jt6KGo5Y2VICovXG4gICAgICAgIHJldHVybiBzZWwudmFsKGNsaWNrZWQuZGF0YSgncmF3LXZhbHVlJykpLnRyaWdnZXIoJ2NoYW5nZS5mcycpLnRyaWdnZXIoJ2JsdXIuZnMnKS50cmlnZ2VyKCdmb2N1cy5mcycpO1xuICAgICAgfSk7XG4gICAgICBvcHRpb25zLm9uKCdtb3VzZWVudGVyLmZzJywgJ2xpJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBob3ZlcmVkLCBub3dIb3ZlcmVkO1xuICAgICAgICBub3dIb3ZlcmVkID0gJCh0aGlzKTtcbiAgICAgICAgaG92ZXJlZCA9IG9wdGlvbnMuZmluZCgnLmhvdmVyJyk7XG4gICAgICAgIGhvdmVyZWQucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICAgIHJldHVybiBub3dIb3ZlcmVkLmFkZENsYXNzKCdob3ZlcicpO1xuICAgICAgfSk7XG4gICAgICBvcHRpb25zLm9uKCdtb3VzZWxlYXZlLmZzJywgJ2xpJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmZpbmQoJy5ob3ZlcicpLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xuICAgICAgfSk7XG4gICAgICBjb3B5T3B0aW9uc1RvTGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsT3B0cztcbiAgICAgICAgdXBkYXRlVHJpZ2dlclRleHQoKTtcbiAgICAgICAgaWYgKGlzaU9TICYmICFzZXR0aW5ncy5mb3JjZWlPUykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWxPcHRzID0gc2VsLmZpbmQoJ29wdGlvbicpO1xuICAgICAgICByZXR1cm4gc2VsLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24oaSwgb3B0KSB7XG4gICAgICAgICAgdmFyIG9wdEh0bWw7XG4gICAgICAgICAgb3B0ID0gJChvcHQpO1xuICAgICAgICAgIGlmICghb3B0LnByb3AoJ2Rpc2FibGVkJykgJiYgKG9wdC52YWwoKSB8fCBzZXR0aW5ncy5pbmNsdWRlQmxhbmspKSB7XG4gICAgICAgICAgICBvcHRIdG1sID0gc2V0dGluZ3Mub3B0aW9uVGVtcGxhdGUob3B0KTtcbiAgICAgICAgICAgIGlmIChvcHQucHJvcCgnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5hcHBlbmQoXCI8bGkgZGF0YS1yYXctdmFsdWU9XFxcIlwiICsgKG9wdC52YWwoKSkgKyBcIlxcXCIgY2xhc3M9XFxcInNlbGVjdGVkXFxcIj5cIiArIG9wdEh0bWwgKyBcIjwvbGk+XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuYXBwZW5kKFwiPGxpIGRhdGEtcmF3LXZhbHVlPVxcXCJcIiArIChvcHQudmFsKCkpICsgXCJcXFwiPlwiICsgb3B0SHRtbCArIFwiPC9saT5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBzZWwub24oJ3VwZGF0ZS5mcycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3cmFwcGVyLmZpbmQoJy5vcHRpb25zJykuZW1wdHkoKTtcbiAgICAgICAgcmV0dXJuIGNvcHlPcHRpb25zVG9MaXN0KCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb3B5T3B0aW9uc1RvTGlzdCgpO1xuICAgIH0pO1xuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZGVsLXNlbGVjdC9mYW5jeS1zZWxlY3QuanMiXSwic291cmNlUm9vdCI6IiJ9