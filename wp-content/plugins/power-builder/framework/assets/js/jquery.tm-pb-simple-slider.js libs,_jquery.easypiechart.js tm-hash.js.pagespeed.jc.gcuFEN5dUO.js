var mod_pagespeed_wmhTbYuBRQ = "(function($){$.tm_pb_simple_slider=function(el,options){var settings=$.extend({slide:'.tm-slide',arrows:'.tm-pb-slider-arrows',prev_arrow:'.tm-pb-arrow-prev',next_arrow:'.tm-pb-arrow-next',controls:'.tm-pb-controllers a',carousel_controls:'.tm_pb_carousel_item',control_active_class:'tm-pb-active-control',previous_text:tm_pb_custom.previous,next_text:tm_pb_custom.next,fade_speed:500,use_arrows:true,use_controls:true,manual_arrows:'',append_controls_to:'',controls_below:false,controls_class:'tm-pb-controllers',slideshow:false,slideshow_speed:7000,show_progress_bar:false,tabs_animation:false,use_carousel:false},options);var $tm_slider=$(el),$tm_slide=$tm_slider.closest_descendent(settings.slide),tm_slides_number=$tm_slide.length,tm_fade_speed=settings.fade_speed,tm_active_slide=0,$tm_slider_arrows,$tm_slider_prev,$tm_slider_next,$tm_slider_controls,$tm_slider_carousel_controls,tm_slider_timer,controls_html='',carousel_html='',$progress_bar=null,progress_timer_count=0,$tm_pb_container=$tm_slider.find('.tm_pb_container'),tm_pb_container_width=$tm_pb_container.width(),is_post_slider=$tm_slider.hasClass('tm_pb_post_slider');$tm_slider.tm_animation_running=false;$.data(el,\"tm_pb_simple_slider\",$tm_slider);$tm_slide.eq(0).addClass('tm-pb-active-slide');if(!settings.tabs_animation){if(!$tm_slider.hasClass('tm_pb_bg_layout_dark')&&!$tm_slider.hasClass('tm_pb_bg_layout_light')){$tm_slider.addClass(tm_get_bg_layout_color($tm_slide.eq(0)));}}if(settings.use_arrows&&tm_slides_number>1){if(settings.manual_arrows=='')$tm_slider.append('<div class=\"tm-pb-slider-arrows\"><a class=\"tm-pb-arrow-prev\" href=\"#\">'+'<span>'+settings.previous_text+'</span>'+'</a><a class=\"tm-pb-arrow-next\" href=\"#\">'+'<span>'+settings.next_text+'</span>'+'</a></div>');else\n$tm_slider.append(settings.manual_arrows);$tm_slider_arrows=$tm_slider.find(settings.arrows);$tm_slider_prev=$tm_slider.find(settings.prev_arrow);$tm_slider_next=$tm_slider.find(settings.next_arrow);$tm_slider_next.click(function(){if($tm_slider.tm_animation_running)return false;$tm_slider.tm_slider_move_to('next');return false;});$tm_slider_prev.click(function(){if($tm_slider.tm_animation_running)return false;$tm_slider.tm_slider_move_to('previous');return false;});$tm_slider.find(settings.slide).on('swipeleft',function(){$tm_slider.tm_slider_move_to('next');});$tm_slider.find(settings.slide).on('swiperight',function(){$tm_slider.tm_slider_move_to('previous');});}if(settings.use_controls&&tm_slides_number>1){for(var i=1;i<=tm_slides_number;i++){controls_html+='<a href=\"#\"'+(i==1?' class=\"'+settings.control_active_class+'\"':'')+'>'+i+'</a>';}controls_html='<div class=\"'+settings.controls_class+'\">'+controls_html+'</div>';if(settings.append_controls_to=='')$tm_slider.append(controls_html);else\n$(settings.append_controls_to).append(controls_html);if(settings.controls_below)$tm_slider_controls=$tm_slider.parent().find(settings.controls);else\n$tm_slider_controls=$tm_slider.find(settings.controls);tm_maybe_set_controls_color($tm_slide.eq(0));$tm_slider_controls.click(function(){if($tm_slider.tm_animation_running)return false;$tm_slider.tm_slider_move_to($(this).index());return false;});}if(settings.use_carousel&&tm_slides_number>1){for(var i=1;i<=tm_slides_number;i++){slide_id=i-1;image_src=($tm_slide.eq(slide_id).data('image')!==undefined)?'url('+$tm_slide.eq(slide_id).data('image')+')':'none';carousel_html+='<div class=\"tm_pb_carousel_item '+(i==1?settings.control_active_class:'')+'\" data-slide-id=\"'+slide_id+'\">'+'<div class=\"tm_pb_video_overlay\" href=\"#\" style=\"background-image: '+image_src+';\">'+'<div class=\"tm_pb_video_overlay_hover\"><a href=\"#\" class=\"tm_pb_video_play\"></a></div>'+'</div>'+'</div>';}carousel_html='<div class=\"tm_pb_carousel\">'+'<div class=\"tm_pb_carousel_items\">'+carousel_html+'</div>'+'</div>';$tm_slider.after(carousel_html);$tm_slider_carousel_controls=$tm_slider.siblings('.tm_pb_carousel').find(settings.carousel_controls);$tm_slider_carousel_controls.click(function(){if($tm_slider.tm_animation_running)return false;var $this=$(this);$tm_slider.tm_slider_move_to($this.data('slide-id'));return false;});}if(settings.slideshow&&tm_slides_number>1){$tm_slider.hover(function(){if($tm_slider.hasClass('tm_slider_auto_ignore_hover')){return;}$tm_slider.addClass('tm_slider_hovered');if(typeof tm_slider_timer!='undefined'){clearInterval(tm_slider_timer);}},function(){if($tm_slider.hasClass('tm_slider_auto_ignore_hover')){return;}$tm_slider.removeClass('tm_slider_hovered');tm_slider_auto_rotate();});}tm_slider_auto_rotate();function tm_slider_auto_rotate(){if(settings.slideshow&&tm_slides_number>1&&!$tm_slider.hasClass('tm_slider_hovered')){tm_slider_timer=setTimeout(function(){$tm_slider.tm_slider_move_to('next');},settings.slideshow_speed);}}function tm_stop_video(active_slide){var $tm_video,tm_video_src;if(active_slide.has('iframe').length){$tm_video=active_slide.find('iframe');tm_video_src=$tm_video.attr('src');$tm_video.attr('src','');$tm_video.attr('src',tm_video_src);}else if(active_slide.has('video').length){if(!active_slide.find('.tm_pb_section_video_bg').length){$tm_video=active_slide.find('video');$tm_video[0].pause();}}}function tm_fix_slider_content_images(){var $this_slider=$tm_slider,$slide_image_container=$this_slider.find('.tm-pb-active-slide .tm_pb_slide_image');$slide_video_container=$this_slider.find('.tm-pb-active-slide .tm_pb_slide_video');$slide=$slide_image_container.closest('.tm_pb_slide'),$slider=$slide.closest('.tm_pb_slider'),slide_height=$slider.innerHeight(),image_height=parseInt(slide_height*0.8),$top_header=$('#top-header'),$main_header=$('#main-header'),$tm_transparent_nav=$('.tm_transparent_nav'),$tm_vertical_nav=$('.tm_vertical_nav');$slide_image_container.find('img').css('maxHeight',image_height+'px');if($slide.hasClass('tm_pb_media_alignment_center')){$slide_image_container.css('marginTop','-'+parseInt($slide_image_container.height()/2)+'px');}$slide_video_container.css('marginTop','-'+parseInt($slide_video_container.height()/2)+'px');$slide_image_container.find('img').addClass('active');}function tm_get_bg_layout_color($slide){if($slide.hasClass('tm_pb_bg_layout_dark')){return'tm_pb_bg_layout_dark';}return'tm_pb_bg_layout_light';}function tm_maybe_set_controls_color($slide){var next_slide_dot_color,$arrows,arrows_color;if(typeof $tm_slider_controls!=='undefined'&&$tm_slider_controls.length){next_slide_dot_color=$slide.data('dots_color')||'';if(next_slide_dot_color!==''){$tm_slider_controls.attr('style','background-color: '+hex_to_rgba(next_slide_dot_color,'0.3')+';')\n$tm_slider_controls.filter('.tm-pb-active-control').attr('style','background-color: '+hex_to_rgba(next_slide_dot_color)+'!important;');}else{$tm_slider_controls.removeAttr('style');}}if(typeof $tm_slider_arrows!=='undefined'&&$tm_slider_arrows.length){$arrows=$tm_slider_arrows.find('a');arrows_color=$slide.data('arrows_color')||'';if(arrows_color!==''){$arrows.css('color',arrows_color);}else{$arrows.css('color','inherit');}}}function tm_fix_builder_content(){if(is_post_slider){setTimeout(function(){var $tm_pb_circle_counter=$('.tm_pb_circle_counter'),$tm_pb_number_counter=$('.tm_pb_number_counter');window.tm_fix_testimonial_inner_width();if($tm_pb_circle_counter.length){window.tm_pb_reinit_circle_counters($tm_pb_circle_counter);}if($tm_pb_number_counter.length){window.tm_pb_reinit_number_counters($tm_pb_number_counter);}window.tm_reinint_waypoint_modules();},1000);}}function hex_to_rgba(color,alpha){var color_16=parseInt(color.replace('#',''),16),red=(color_16>>16)&255,green=(color_16>>8)&255,blue=color_16&255,alpha=alpha||1,rgba;rgba=red+','+green+','+blue+','+alpha;rgba='rgba('+rgba+')';return rgba;}$tm_window.load(function(){tm_fix_slider_content_images();});$tm_window.resize(function(){tm_fix_slider_content_images();});$tm_slider.tm_slider_move_to=function(direction){var $active_slide=$tm_slide.eq(tm_active_slide),$next_slide;$tm_slider.tm_animation_running=true;$tm_slider.removeClass('tm_slide_transition_to_next tm_slide_transition_to_previous').addClass('tm_slide_transition_to_'+direction);$tm_slider.find('.tm-pb-moved-slide').removeClass('tm-pb-moved-slide');if(direction=='next'||direction=='previous'){if(direction=='next')tm_active_slide=(tm_active_slide+1)<tm_slides_number?tm_active_slide+1:0;else\ntm_active_slide=(tm_active_slide-1)>=0?tm_active_slide-1:tm_slides_number-1;}else{if(tm_active_slide==direction){$tm_slider.tm_animation_running=false;return;}tm_active_slide=direction;}if(typeof tm_slider_timer!='undefined')clearInterval(tm_slider_timer);$next_slide=$tm_slide.eq(tm_active_slide);$tm_slider.trigger('simple_slider_before_move_to',{direction:direction,next_slide:$next_slide});$tm_slide.each(function(){$(this).css('zIndex',1);});$active_slide.css('zIndex',2).removeClass('tm-pb-active-slide').addClass('tm-pb-moved-slide');$next_slide.css({'display':'block',opacity:0}).addClass('tm-pb-active-slide');tm_fix_slider_content_images();tm_fix_builder_content();if(settings.use_controls)$tm_slider_controls.removeClass(settings.control_active_class).eq(tm_active_slide).addClass(settings.control_active_class);if(settings.use_carousel)$tm_slider_carousel_controls.removeClass(settings.control_active_class).eq(tm_active_slide).addClass(settings.control_active_class);if(!settings.tabs_animation){tm_maybe_set_controls_color($next_slide);$next_slide.animate({opacity:1},tm_fade_speed);$active_slide.addClass('tm_slide_transition').css({'display':'list-item','opacity':1}).animate({opacity:0},tm_fade_speed,function(){var active_slide_layout_bg_color=tm_get_bg_layout_color($active_slide),next_slide_layout_bg_color=tm_get_bg_layout_color($next_slide);$(this).css('display','none').removeClass('tm_slide_transition');tm_stop_video($active_slide);$tm_slider.removeClass(active_slide_layout_bg_color).addClass(next_slide_layout_bg_color);$tm_slider.tm_animation_running=false;$tm_slider.trigger('simple_slider_after_move_to',{next_slide:$next_slide});});}else{$next_slide.css({'display':'none',opacity:0});$active_slide.addClass('tm_slide_transition').css({'display':'block','opacity':1}).animate({opacity:0},tm_fade_speed,function(){$(this).css('display','none').removeClass('tm_slide_transition');$next_slide.css({'display':'block','opacity':0}).animate({opacity:1},tm_fade_speed,function(){$tm_slider.tm_animation_running=false;$tm_slider.trigger('simple_slider_after_move_to',{next_slide:$next_slide});});});}tm_slider_auto_rotate();}}\n$.fn.tm_pb_simple_slider=function(options){return this.each(function(){new $.tm_pb_simple_slider(this,options);});}}(jQuery));";
var mod_pagespeed_F89pf48goD = "(function(root,factory){if(typeof exports==='object'){module.exports=factory(require('jquery'));}else if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(root.jQuery);}}(this,function($){var CanvasRenderer=function(el,options){var cachedBackground;var canvas=document.createElement('canvas');el.appendChild(canvas);if(typeof(G_vmlCanvasManager)!=='undefined'){G_vmlCanvasManager.initElement(canvas);}var ctx=canvas.getContext('2d');canvas.width=canvas.height=options.size;var scaleBy=1;if(window.devicePixelRatio>1){scaleBy=window.devicePixelRatio;canvas.style.width=canvas.style.height=[options.size,'px'].join('');canvas.width=canvas.height=options.size*scaleBy;ctx.scale(scaleBy,scaleBy);}ctx.translate(options.size/2,options.size/2);ctx.rotate((-1/2+options.rotate/180)*Math.PI);var radius=(options.size-options.lineWidth)/2;if(options.scaleColor&&options.scaleLength){radius-=options.scaleLength+2;}Date.now=Date.now||function(){return+(new Date());};var drawCircle=function(color,lineWidth,percent,alpha){percent=Math.min(Math.max(-1,percent||0),1);var isNegative=percent<=0?true:false;ctx.beginPath();ctx.arc(0,0,radius,0,Math.PI*2*percent,isNegative);ctx.strokeStyle=color;ctx.globalAlpha=alpha;ctx.lineWidth=lineWidth;ctx.stroke();};var drawScale=function(){var offset;var length;ctx.lineWidth=1;ctx.fillStyle=options.scaleColor;ctx.save();for(var i=24;i>0;--i){if(i%6===0){length=options.scaleLength;offset=0;}else{length=options.scaleLength*0.6;offset=options.scaleLength-length;}ctx.fillRect(-options.size/2+offset,0,length,1);ctx.rotate(Math.PI/12);}ctx.restore();};var reqAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};}());var drawBackground=function(){if(options.scaleColor)drawScale();if(options.trackColor)drawCircle(options.trackColor,options.lineWidth,1,options.trackAlpha);};this.getCanvas=function(){return canvas;};this.getCtx=function(){return ctx;};this.clear=function(){ctx.clearRect(options.size/-2,options.size/-2,options.size,options.size);};this.draw=function(percent){if(!!options.scaleColor||!!options.trackColor){if(ctx.getImageData&&ctx.putImageData){if(!cachedBackground){drawBackground();cachedBackground=ctx.getImageData(0,0,options.size*scaleBy,options.size*scaleBy);}else{ctx.putImageData(cachedBackground,0,0);}}else{this.clear();drawBackground();}}else{this.clear();}ctx.lineCap=options.lineCap;var color;if(typeof(options.barColor)==='function'){color=options.barColor(percent);}else{color=options.barColor;}drawCircle(color,options.lineWidth,percent/100,options.barAlpha);}.bind(this);this.animate=function(from,to){var startTime=Date.now();options.onStart(from,to);var animation=function(){var process=Math.min(Date.now()-startTime,options.animate.duration);var currentValue=options.easing(this,process,from,to-from,options.animate.duration);this.draw(currentValue);options.onStep(from,to,currentValue);if(process>=options.animate.duration){options.onStop(from,to);}else{reqAnimationFrame(animation);}}.bind(this);reqAnimationFrame(animation);}.bind(this);};var EasyPieChart=function(el,opts){var defaultOptions={barColor:'#ef1e25',barAlpha:1.0,trackColor:'#f9f9f9',trackAlpha:1.0,scaleColor:'#dfe0e0',scaleLength:5,lineCap:'round',lineWidth:3,size:110,rotate:0,render:true,animate:{duration:1000,enabled:true},easing:function(x,t,b,c,d){t=t/(d/2);if(t<1){return c/2*t*t+b;}return-c/2*((--t)*(t-2)-1)+b;},onStart:function(from,to){return;},onStep:function(from,to,currentValue){return;},onStop:function(from,to){return;}};if(typeof(CanvasRenderer)!=='undefined'){defaultOptions.renderer=CanvasRenderer;}else if(typeof(SVGRenderer)!=='undefined'){defaultOptions.renderer=SVGRenderer;}else{throw new Error('Please load either the SVG- or the CanvasRenderer');}var options={};var currentValue=0;var init=function(){this.el=el;this.options=options;for(var i in defaultOptions){if(defaultOptions.hasOwnProperty(i)){options[i]=opts&&typeof(opts[i])!=='undefined'?opts[i]:defaultOptions[i];if(typeof(options[i])==='function'){options[i]=options[i].bind(this);}}}if(typeof(options.easing)==='string'&&typeof(jQuery)!=='undefined'&&jQuery.isFunction(jQuery.easing[options.easing])){options.easing=jQuery.easing[options.easing];}else{options.easing=defaultOptions.easing;}if(typeof(options.animate)==='number'){options.animate={duration:options.animate,enabled:true};}if(typeof(options.animate)==='boolean'&&!options.animate){options.animate={duration:1000,enabled:options.animate};}this.renderer=new options.renderer(el,options);this.renderer.draw(currentValue);if(el.dataset&&el.dataset.percent){this.update(parseFloat(el.dataset.percent));}else if(el.getAttribute&&el.getAttribute('data-percent')){this.update(parseFloat(el.getAttribute('data-percent')));}}.bind(this);this.update=function(newValue){newValue=parseFloat(newValue);if(options.animate.enabled){this.renderer.animate(currentValue,newValue);}else{this.renderer.draw(newValue);}currentValue=newValue;return this;}.bind(this);this.disableAnimation=function(){options.animate.enabled=false;return this;};this.enableAnimation=function(){options.animate.enabled=true;return this;};init();};$.fn.easyPieChart=function(options){return this.each(function(){var instanceOptions;if(!$.data(this,'easyPieChart')){instanceOptions=$.extend({},options,$(this).data());$.data(this,'easyPieChart',new EasyPieChart(this,instanceOptions));}});};}));";
var mod_pagespeed_A24DzFAyTy = "var tm_hash_module_seperator='||',tm_hash_module_param_seperator='|';function process_tm_hashchange(hash){if((hash.indexOf(tm_hash_module_seperator,0))!==-1){modules=hash.split(tm_hash_module_seperator);for(var i=0;i<modules.length;i++){var module_params=modules[i].split(tm_hash_module_param_seperator);var element=module_params[0];module_params.shift();if($('#'+element).length){$('#'+element).trigger({type:\"tm_hashchange\",params:module_params});}}}else{module_params=hash.split(tm_hash_module_param_seperator);var element=module_params[0];module_params.shift();if($('#'+element).length){$('#'+element).trigger({type:\"tm_hashchange\",params:module_params});}}}function tm_set_hash(module_state_hash){module_id=module_state_hash.split(tm_hash_module_param_seperator)[0];if(!$('#'+module_id).length){return;}if(window.location.hash){var hash=window.location.hash.substring(1),new_hash=[];if((hash.indexOf(tm_hash_module_seperator,0))!==-1){modules=hash.split(tm_hash_module_seperator);var in_hash=false;for(var i=0;i<modules.length;i++){var element=modules[i].split(tm_hash_module_param_seperator)[0];if(element===module_id){new_hash.push(module_state_hash);in_hash=true;}else{new_hash.push(modules[i]);}}if(!in_hash){new_hash.push(module_state_hash);}}else{module_params=hash.split(tm_hash_module_param_seperator);var element=module_params[0];if(element!==module_id){new_hash.push(hash);}new_hash.push(module_state_hash);}hash=new_hash.join(tm_hash_module_seperator);}else{hash=module_state_hash;}var yScroll=document.body.scrollTop;window.location.hash=hash;document.body.scrollTop=yScroll;}";
