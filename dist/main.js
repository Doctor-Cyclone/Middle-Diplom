(()=>{"use strict";var e,t,l,s,n,o,c,i,a,d,y,r,u;u=document.querySelector(".club-select").querySelector(".clubs-list ul"),window.addEventListener("click",(function(e){var t=e.target;if(t.closest(".club-select"))"block"===u.style.display?u.style.display="none":u.style.display="block";else if(!t.closest(".clubs-list")){if("block"!==u.style.display)return;u.style.display="none"}})),a=document.getElementById("free_visit_form"),d=document.getElementById("callback_form"),y=document.getElementById("gift"),r=document.querySelector(".fixed-gift"),window.addEventListener("click",(function(e){var t=e.target;t.classList.contains("open-popup")?a.style.display="block":t.classList.contains("callback-btn")?d.style.display="block":t.closest(".fixed-gift")?(r.style.display="none",y.style.display="block"):(t.closest(".close-form")||t.closest(".overlay")||t.closest(".close-btn"))&&function(e){e.closest("#free_visit_form")?a.style.display="none":e.closest("#callback_form")?d.style.display="none":y.style.display="none"}(t)})),l=document.querySelector(".main-slider"),s=l.querySelectorAll(".slide-text"),n=l.querySelectorAll(".slide"),o=0,c=function(){n[o].style.display="none",++o>=n.length&&(o=0),n[o].style.display="block"},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;t=setInterval(c,e)},s.forEach((function(e){e.addEventListener("mouseover",(function(){clearInterval(t)})),e.addEventListener("mouseout",(function(){i(2e3)}))})),i(2e3),e=document.querySelector(".popup-menu"),window.addEventListener("click",(function(t){var l=t.target;(l.closest(".menu-button")||l.closest(".close-menu-btn")||"A"===l.tagName)&&("block"===e.style.display?e.style.display="none":e.style.display="block")}))})();