$(".menus").click(function(){var m=this.innerText;menu(m)});$(".icons").dblclick(function(){var s=this.title;toggle(s)});function toggle(s){switch(s){case "Finder":var d=document.querySelector(".finder_img");if(d.style.bottom==="-900px"){d.style.bottom="150px"}else{d.style.bottom="-900px"}
break;case "Launchpad":var d=document.querySelector("#launch_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "App Store":var d=document.querySelector(".appstore_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Safari":var d=document.querySelector(".safari_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Face Time":var d=document.querySelector(".facetime_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Messages":var d=document.querySelector(".messages_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Maps":var d=document.querySelector(".maps_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "VLC Player":var d=document.querySelector(".vlc_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Contacts":var d=document.querySelector(".contacts_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Calender":var d=document.querySelector(".calender_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Reminders":var d=document.querySelector(".reminders_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Notes":var d=document.querySelector(".notes_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Podcasts":var d=document.querySelector(".podcasts_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Keynote":var d=document.querySelector(".keynote_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Pages":var d=document.querySelector(".pages_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Books":var d=document.querySelector(".books_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Settings":var d=document.querySelector(".settings_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Siri":var d=document.querySelector(".siri_img");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;default:}}
function menu(m){switch(m){case "File":var d=document.querySelector(".filemenu_png");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Edit":var d=document.querySelector(".editmenu_png");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "View":var d=document.querySelector(".viewmenu_png");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Go":var d=document.querySelector(".gomenu_png");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Window":var d=document.querySelector(".windowmenu_png");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;case "Help":var d=document.querySelector(".helpmenu_png");if(d.style.display==="none"){d.style.display="inline"}else{d.style.display="none"}
break;default:}}
$(".apple_logo").click(function(){var r=document.querySelector(".mac_png");if(r.style.display==="none"){r.style.display="inline"}else{r.style.display="none"}})