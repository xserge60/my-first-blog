function injectCSS() {
css = "@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700,300\");\n" +
".md-dark {\n" +
"  color: rgba(0, 0, 0, 0.54);\n" +
"}\n" +
".md-dark.md-inactive {\n" +
"  color: rgba(0, 0, 0, 0.26);\n" +
"}\n" +
".md-light {\n" +
"  color: #ffffff;\n" +
"}\n" +
".md-light.md-inactive {\n" +
"  color: rgba(255, 255, 255, 0.3);\n" +
"}\n" +
"@font-face {\n" +
"  font-family: 'Material Icons';\n" +
"  font-style: normal;\n" +
"  font-weight: 400;\n" +
"  src: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v18/2fcrYFNaTjcS6g4U3t-Y5StnKWgpfO2iSkLzTz-AABg.ttf) format('truetype');\n" +
"}\n" +
".material-icons {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal;\n" +
"  font-style: normal;\n" +
"  font-size: 24px;\n" +
"  line-height: 1;\n" +
"  letter-spacing: normal;\n" +
"  text-transform: none;\n" +
"  display: inline-block;\n" +
"  white-space: nowrap;\n" +
"  word-wrap: normal;\n" +
"  direction: ltr;\n" +
"}\n" +
"body {\n" +
"  border: 0px !important;\n" +
"  border-radius: 0px !important;\n" +
"  -webkit-border-radius: 0px !important;\n" +
"  -moz-border-radius: 0px !important;\n" +
"  background: white !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  max-width: none !important;\n" +
"  min-width: 0 !important;\n" +
"  max-height: none !important;\n" +
"  min-height: 0 !important;\n" +
"  background: white;\n" +
"  height: 560px !important;\n" +
"  width: 470px !important;\n" +
"  overflow: hidden !important;\n" +
"  /* --- HEADER --- */\n" +
"  /* --- CONTENT --- */\n" +
"  /* --- FOOTER --- */\n" +
"}\n" +
"body #letyshops-header-container {\n" +
"  border: none !important;\n" +
"  border-radius: none !important;\n" +
"  -webkit-border-radius: none !important;\n" +
"  -moz-border-radius: none !important;\n" +
"  background: none !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  max-width: none !important;\n" +
"  min-width: 0 !important;\n" +
"  max-height: none !important;\n" +
"  min-height: 0 !important;\n" +
"  height: 95px !important;\n" +
"  width: inherit !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  /*.letyshops-transition();*/\n" +
"  height: 95px !important;\n" +
"  width: inherit !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status {\n" +
"  height: 55px !important;\n" +
"  width: inherit !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-company {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  float: left !important;\n" +
"  width: 200px !important;\n" +
"  height: inherit !important;\n" +
"  background: transparent !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-company .letyshops-header-logo {\n" +
"  display: inline-block !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: inherit !important;\n" +
"  width: 45px !important;\n" +
"  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAlCAYAAABVjVnMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplZWU2OTQxYS02NDliLWFlNGUtOGIxNy1mOTRjYjRkNjNiMjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkYyMjE5NTJGQTQ0MTFFNUI5Q0ZCMUFDNTJFRjAzNEYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkYyMjE5NTFGQTQ0MTFFNUI5Q0ZCMUFDNTJFRjAzNEYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFhNzgzMWE3LTdiNzYtZGY0Zi1hMzFiLTA0OGFjZGJlMGM4OCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjEyMmMxMmIxLWQ2MzAtMTFlNS1iZTJkLWM4OTU1MjQ0NGVmNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkVmrsgAAAKNSURBVHjaxNhLaBNBHMfxbFpqqe9KJaD4ahGspVhRkPoCQSOCWMX6OFlvFgS91cfJiwfxYhFEEREFQTz0IYgKihfFi4IVC8ViQEsPEpHWg1o163fwHxim2exMslkHPmw2mc1vd2d2ZhLP9/3E/yjVsr2BOXiKfoxXPFldMZZi0v9XfuM+9iApn0dO3znqTy/D2BdhYD2azGDlql+4DCJVYpiHLTiJ9kJXrFRhICB8HJssw1QTbUYvnuOwnEAiKFiZgf6A8B/S9sVCu5HBN5zF+rA21q3Fq4DwX+gIOK5L66A3cQCPXIKv+MXLT2wrcNwQRtCAlXLVD12CZ+FdSPiXfA/VmmgKG2X/tNQbcwlWFuN9SPhrCVT123BdO/6uVq/J/P5kkbFlDO14UKROGy7K60ac0j5r0F6vMw9MhgxsrfKFQeUxJrAMfchiBW5jq1ZvftCQGWSmDJ9mUcPrEbQY9TulQ5ll2lPgWcxOHjpxCAvxGS9xDxmt3i4Moso4/jtSmHS5YlsLkDWu8hMmcMa1V7u4YITmsBeXzKEyquBG1OGrFvoHx8Om1GSJ0/gqDMhTodp2nrw/ip24jJzNQsDFDunV+Xn6GkZl2qspZSFgY7WEPpH9ajSXslJxudXqsbqF2ahFt7w/HHpby7zVaa0D9US55gpzR0KfRfEI2t7q3TJyqfImitWtTXANeqWNEzIpxBK8X2Yf/URiCU4b+6m4gptlm9Pm6FiC62WrpsEprMGSOIKzss3IMkd1soNxBA/Jdi7OyS/KE6irdHCfbJfLrVbP9AucLyfYZumjTu4tFkl75ztZBz5od6QiY/UGWayno/rJajtkqsVdF45F9YeA5/gfyHZ8xEi5wX8FGACtjQcdynLg2gAAAABJRU5ErkJggg==\");\n" +
"  background-position: center center !important;\n" +
"  background-repeat: no-repeat !important;\n" +
"  background-size: initial !important;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-company .letyshops-header-name {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 16px !important;\n" +
"  line-height: 55px !important;\n" +
"  color: white !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  border-radius: 2px !important;\n" +
"  -moz-border-radius: 2px !important;\n" +
"  -webkit-border-radius: 2px !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: inherit !important;\n" +
"  padding: 0 0 0 5px !important;\n" +
"  vertical-align: middle;\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-entry {\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  float: right !important;\n" +
"  transform: skewX(-24deg) scaleY(0.9) !important;\n" +
"  -webkit-transform: skewX(-24deg) scaleY(0.9) !important;\n" +
"  -moz-transform: skewX(-24deg) scaleY(0.9) !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  width: 125px !important;\n" +
"  background-color: #feb843;\n" +
"  padding: 0 0 0 25px !important;\n" +
"  transform-origin: bottom left !important;\n" +
"  border-radius: 0px 0px 0 3px !important;\n" +
"  -moz-border-radius: 0px 0px 0 3px !important;\n" +
"  -webkit-border-radius: 0px 0px 0 3px !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-entry i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: 100 !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: #EFEDED !important;\n" +
"  transform: skewX(24deg) scaleY(1.2) !important;\n" +
"  -webkit-transform: skewX(24deg) scaleY(1.2) !important;\n" +
"  -moz-transform: skewX(24deg) scaleY(1.2) !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-entry span {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 16px !important;\n" +
"  line-height: 55px !important;\n" +
"  color: white !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  transform: skewX(24deg) scaleY(1.2) !important;\n" +
"  -webkit-transform: skewX(24deg) scaleY(1.2) !important;\n" +
"  -moz-transform: skewX(24deg) scaleY(1.2) !important;\n" +
"  height: inherit !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-transform: capitalize !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-entry:hover {\n" +
"  width: 130px !important;\n" +
"  padding: 0 0 0 20px !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-entry:hover i:hover {\n" +
"  color: white !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-info {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  float: right !important;\n" +
"  height: inherit !important;\n" +
"  width: 250px !important;\n" +
"  background: transparent !important;\n" +
"  text-align: right !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 15px 0 0 !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-info .letyshops-header-info-notification {\n" +
"  display: inline-block !important;\n" +
"  height: inherit !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-info .letyshops-header-info-notification i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: rgba(255, 255, 255, 0.6) !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  width: inherit !important;\n" +
"  line-height: 55px !important;\n" +
"  cursor: pointer !important;\n" +
"  text-align: center !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-info .letyshops-header-info-notification i:hover {\n" +
"  color: rgba(255, 255, 255, 0.75) !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-info .letyshops-header-info-notification .letyshops-header-bell-anim {\n" +
"  animation: shake 0.8s infinite ease;\n" +
"  -moz-animation: shake 0.8s infinite ease;\n" +
"  -webkit-animation: shake 0.8s infinite ease;\n" +
"}\n" +
"@keyframes shake {\n" +
"  0% {\n" +
"    transform: rotate(-20deg);\n" +
"  }\n" +
"  15% {\n" +
"    transform: rotate(-10deg);\n" +
"  }\n" +
"  30% {\n" +
"    transform: rotate(0deg);\n" +
"  }\n" +
"  40% {\n" +
"    transform: rotate(10deg);\n" +
"  }\n" +
"  55% {\n" +
"    transform: rotate(20deg);\n" +
"  }\n" +
"  65% {\n" +
"    transform: rotate(10deg);\n" +
"  }\n" +
"  80% {\n" +
"    transform: rotate(0deg);\n" +
"  }\n" +
"  100% {\n" +
"    transform: rotate(-10deg);\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes shake {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-20deg);\n" +
"  }\n" +
"  15% {\n" +
"    -webkit-transform: rotate(-10deg);\n" +
"  }\n" +
"  30% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"  }\n" +
"  40% {\n" +
"    -webkit-transform: rotate(10deg);\n" +
"  }\n" +
"  55% {\n" +
"    -webkit-transform: rotate(20deg);\n" +
"  }\n" +
"  65% {\n" +
"    -webkit-transform: rotate(10deg);\n" +
"  }\n" +
"  80% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"  }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-10deg);\n" +
"  }\n" +
"}\n" +
"@-moz-keyframes shake {\n" +
"  0% {\n" +
"    -moz-transform: rotate(-20deg);\n" +
"  }\n" +
"  15% {\n" +
"    -moz-transform: rotate(-10deg);\n" +
"  }\n" +
"  30% {\n" +
"    -moz-transform: rotate(0deg);\n" +
"  }\n" +
"  40% {\n" +
"    -moz-transform: rotate(10deg);\n" +
"  }\n" +
"  55% {\n" +
"    -moz-transform: rotate(20deg);\n" +
"  }\n" +
"  65% {\n" +
"    -moz-transform: rotate(10deg);\n" +
"  }\n" +
"  80% {\n" +
"    -moz-transform: rotate(0deg);\n" +
"  }\n" +
"  100% {\n" +
"    -moz-transform: rotate(-10deg);\n" +
"  }\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-info .letyshops-header-info-user-picture {\n" +
"  display: inline-block !important;\n" +
"  border-radius: 50% !important;\n" +
"  -moz-border-radius: 50% !important;\n" +
"  -webkit-border-radius: 50% !important;\n" +
"  height: 24px !important;\n" +
"  width: 24px !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  margin: 0 10px 0 20px !important;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-info .letyshops-header-info-balance {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 55px !important;\n" +
"  color: white !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: inherit !important;\n" +
"  text-transform: lowercase !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-status .letyshops-header-info .letyshops-header-info-balance span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 16px !important;\n" +
"  line-height: 16px !important;\n" +
"  color: white !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  height: inherit !important;\n" +
"  vertical-align: middle !important;\n" +
"  padding: 0 !important;\n" +
"  text-transform: uppercase !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-tabs {\n" +
"  height: 40px !important;\n" +
"  width: inherit !important;\n" +
"  background: transparent !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-tabs .letyshops-tab {\n" +
"  display: inline-block !important;\n" +
"  -webkit-transition: all 0ms ease;\n" +
"  -moz-transition: all 0ms ease;\n" +
"  -o-transition: all 0ms ease;\n" +
"  transition: all 0ms ease;\n" +
"  height: inherit !important;\n" +
"  width: 33.3% !important;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-tabs .letyshops-tab .letyshops-tab-title {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  width: initial !important;\n" +
"  height: 38px !important;\n" +
"  margin: auto !important;\n" +
"  line-height: 38px !important;\n" +
"  text-align: center !important;\n" +
"  text-transform: uppercase !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-tabs .letyshops-tab .letyshops-tab-line {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 2px !important;\n" +
"  background: #ffa619 !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-tabs .letyshops-tab:hover .letyshops-tab-title {\n" +
"  color: white !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-tabs .letyshops-tab:hover .letyshops-tab-line {\n" +
"  height: 3px !important;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-tabs .selected-tab {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 14px !important;\n" +
"  color: white !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-header .letyshops-header-tabs .unselected-tab {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 14px !important;\n" +
"  color: rgba(255, 255, 255, 0.6) !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"}\n" +
"body #letyshops-header-container .letyshops-gradient-scheme-blue {\n" +
"  background: -moz-linear-gradient(to right, #2FBEFF, #1796FB);\n" +
"  background: -webkit-linear-gradient(to right, #2FBEFF, #1796FB);\n" +
"  background: -o-linear-gradient(to right, #2FBEFF, #1796FB);\n" +
"  background: -ms-linear-gradient(to right, #2FBEFF, #1796FB);\n" +
"  background: linear-gradient(to right, #2FBEFF, #1796FB);\n" +
"}\n" +
"body #letyshops-header-container .letyshops-gradient-scheme-red {\n" +
"  background: -moz-linear-gradient(to right, #f76149, #e53935);\n" +
"  background: -webkit-linear-gradient(to right, #f76149, #e53935);\n" +
"  background: -o-linear-gradient(to right, #f76149, #e53935);\n" +
"  background: -ms-linear-gradient(to right, #f76149, #e53935);\n" +
"  background: linear-gradient(to right, #f76149, #e53935);\n" +
"}\n" +
"body #letyshops-header-container .letyshops-gradient-scheme-green {\n" +
"  background: -moz-linear-gradient(to right, #66bb6a, #4cb16d);\n" +
"  background: -webkit-linear-gradient(to right, #66bb6a, #4cb16d);\n" +
"  background: -o-linear-gradient(to right, #66bb6a, #4cb16d);\n" +
"  background: -ms-linear-gradient(to right, #66bb6a, #4cb16d);\n" +
"  background: linear-gradient(to right, #66bb6a, #4cb16d);\n" +
"}\n" +
"body #letyshops-header-container .letyshops-gradient-scheme-lilac {\n" +
"  background: -moz-linear-gradient(to right, #7986cb, #776ebb);\n" +
"  background: -webkit-linear-gradient(to right, #7986cb, #776ebb);\n" +
"  background: -o-linear-gradient(to right, #7986cb, #776ebb);\n" +
"  background: -ms-linear-gradient(to right, #7986cb, #776ebb);\n" +
"  background: linear-gradient(to right, #7986cb, #776ebb);\n" +
"}\n" +
"body #letyshops-content-container {\n" +
"  display: inline-block !important;\n" +
"  width: 2365px !important;\n" +
"  height: 415px !important;\n" +
"  position: relative !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  overflow: hidden !important;\n" +
"  /* -- STORES TAB -- */\n" +
"  /* -- OFFERS TAB -- */\n" +
"  /* -- INVITATION TAB -- */\n" +
"  /* -- NOTIFICATION TAB -- */\n" +
"  /* -- STORE CARD -- */\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store {\n" +
"  display: inline-block !important;\n" +
"  width: 470px !important;\n" +
"  height: 415px !important;\n" +
"  top: 0px !important;\n" +
"  vertical-align: top !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores {\n" +
"  background: white;\n" +
"  height: 415px !important;\n" +
"  width: inherit !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-search-bar-container {\n" +
"  border: none !important;\n" +
"  border-radius: none !important;\n" +
"  -webkit-border-radius: none !important;\n" +
"  -moz-border-radius: none !important;\n" +
"  background: none !important;\n" +
"  padding: 0 !important;\n" +
"  max-width: none !important;\n" +
"  min-width: 0 !important;\n" +
"  max-height: none !important;\n" +
"  min-height: 0 !important;\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  height: 95px !important;\n" +
"  width: inherit !important;\n" +
"  background: white;\n" +
"  margin: 0 !important;\n" +
"  padding: 25px 15px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-search-bar-container .letyshops-search-bar-wrapper {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: 45px !important;\n" +
"  overflow: visible !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-search-bar-container .letyshops-search-bar-wrapper .letyshops-search-bar {\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 500 !important;\n" +
"  font-size: 16.5px !important;\n" +
"  line-height: normal !important;\n" +
"  color: #515b60 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  border-radius: 2px !important;\n" +
"  -moz-border-radius: 2px !important;\n" +
"  -webkit-border-radius: 2px !important;\n" +
"  box-shadow: 0px 1px 7px -2px #515b60 !important;\n" +
"  -webkit-box-shadow: 0px 1px 7px -2px #515b60 !important;\n" +
"  -moz-box-shadow: 0px 1px 7px -2px #515b60 !important;\n" +
"  height: 45px !important;\n" +
"  width: 100% !important;\n" +
"  vertical-align: middle !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 0 0 45px !important;\n" +
"  outline: 0 !important;\n" +
"  border: 0 !important;\n" +
"  box-sizing: border-box !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-search-bar-container .letyshops-search-bar-wrapper .letyshops-search-bar-btn {\n" +
"  height: 45px !important;\n" +
"  width: 45px !important;\n" +
"  position: absolute !important;\n" +
"  margin: auto !important;\n" +
"  left: 0 !important;\n" +
"  top: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-search-bar-container .letyshops-search-bar-wrapper .letyshops-search-bar-btn i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: #515b60 !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  width: inherit !important;\n" +
"  line-height: 45px !important;\n" +
"  cursor: pointer !important;\n" +
"  text-align: center !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-search-bar-container .letyshops-search-bar-wrapper .letyshops-search-bar-btn i:hover {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 27px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list {\n" +
"  height: 320px !important;\n" +
"  width: 100% !important;\n" +
"  overflow-x: hidden !important;\n" +
"  overflow-y: scroll !important;\n" +
"  padding: 0 17px 0 0 !important;\n" +
"  margin: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-section {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 17px !important;\n" +
"  line-height: 30px !important;\n" +
"  color: #142d3a !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  height: 30px !important;\n" +
"  width: auto !important;\n" +
"  position: relative !important;\n" +
"  text-align: left;\n" +
"  cursor: default !important;\n" +
"  padding: 0 0 0 20px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper {\n" +
"  box-shadow: 0 0 8px -3px #515b60 !important;\n" +
"  -webkit-box-shadow: 0 0 8px -3px #515b60 !important;\n" +
"  -moz-box-shadow: 0 0 8px -3px #515b60 !important;\n" +
"  border-radius: 2px !important;\n" +
"  -moz-border-radius: 2px !important;\n" +
"  -webkit-border-radius: 2px !important;\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  height: auto !important;\n" +
"  width: 440px !important;\n" +
"  margin: 2px 15px 40px 15px !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 65px !important;\n" +
"  width: auto !important;\n" +
"  position: relative !important;\n" +
"  border-bottom: solid 1px rgba(176, 190, 197, 0.37) !important;\n" +
"  padding: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-logo {\n" +
"  height: initial !important;\n" +
"  width: 130px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 65px !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-logo img {\n" +
"  height: auto !important;\n" +
"  max-height: 55px;\n" +
"  max-width: 110px;\n" +
"  width: auto !important;\n" +
"  line-height: 65px !important;\n" +
"  display: inline-block !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-description {\n" +
"  display: inline-block !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: inherit !important;\n" +
"  width: 170px !important;\n" +
"  vertical-align: middle !important;\n" +
"  margin-left: 10px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-description .letyshops-store-name {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 55% !important;\n" +
"  position: relative !important;\n" +
"  overflow: hidden !important;\n" +
"  text-overflow: ellipsis;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-description .letyshops-store-name span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 16px !important;\n" +
"  line-height: 15px !important;\n" +
"  color: #142d3a !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  padding: 0 !important;\n" +
"  position: absolute !important;\n" +
"  bottom: 4px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-description .letyshops-store-type {\n" +
"  height: 45% !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-description .letyshops-store-type span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 400 !important;\n" +
"  font-size: 12px !important;\n" +
"  line-height: 12px !important;\n" +
"  color: #b0bec5 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  text-transform: lowercase !important;\n" +
"  position: absolute !important;\n" +
"  top: 4px !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-cashback {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 300 !important;\n" +
"  font-size: 15px !important;\n" +
"  line-height: 15px !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  position: absolute !important;\n" +
"  height: inherit !important;\n" +
"  text-transform: lowercase !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-cashback span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 18px !important;\n" +
"  line-height: 65px !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  text-transform: uppercase !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-cashback-extended {\n" +
"  display: inline-block !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  max-width: 90px !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-cashback-extended .letyshops-store-cashback-user {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 300 !important;\n" +
"  font-size: 15px !important;\n" +
"  line-height: 15px !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 40px !important;\n" +
"  line-height: 58.5px !important;\n" +
"  text-align: left !important;\n" +
"  text-transform: lowercase !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-cashback-extended .letyshops-store-cashback-user span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 18.5px !important;\n" +
"  line-height: 65px !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  text-transform: uppercase !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-cashback-extended .letyshops-store-cashback-default {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 300 !important;\n" +
"  font-size: 11px !important;\n" +
"  line-height: 11px !important;\n" +
"  color: #b0bec5 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 23px !important;\n" +
"  text-transform: lowercase !important;\n" +
"  padding: 2px 0 0 0 !important;\n" +
"  text-align: left !important;\n" +
"  text-decoration: line-through !important;\n" +
"  -moz-text-decoration-line: line-through !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-heart {\n" +
"  display: inline-block !important;\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  width: 50px !important;\n" +
"  position: absolute !important;\n" +
"  right: 5px !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-heart i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  height: auto !important;\n" +
"  line-height: 65px !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-heart i:hover {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 26px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-heart .red {\n" +
"  color: #e53935 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item .letyshops-store-heart .grey {\n" +
"  color: #b0bec5 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item:hover {\n" +
"  background: rgba(35, 171, 253, 0.08) !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 65px !important;\n" +
"  width: auto !important;\n" +
"  position: relative !important;\n" +
"  border-bottom: solid 1px rgba(176, 190, 197, 0.37) !important;\n" +
"  padding: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-logo {\n" +
"  height: initial !important;\n" +
"  width: 130px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 65px !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-logo img {\n" +
"  height: auto !important;\n" +
"  max-height: 55px;\n" +
"  max-width: 110px;\n" +
"  width: auto !important;\n" +
"  line-height: 65px !important;\n" +
"  display: inline-block !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-description {\n" +
"  display: inline-block !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: inherit !important;\n" +
"  width: 170px !important;\n" +
"  vertical-align: middle !important;\n" +
"  margin-left: 10px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-description .letyshops-store-name {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 55% !important;\n" +
"  position: relative !important;\n" +
"  overflow: hidden !important;\n" +
"  text-overflow: ellipsis;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-description .letyshops-store-name span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 16px !important;\n" +
"  line-height: 15px !important;\n" +
"  color: #142d3a !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  padding: 0 !important;\n" +
"  position: absolute !important;\n" +
"  bottom: 4px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-description .letyshops-store-type {\n" +
"  height: 45% !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-description .letyshops-store-type span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 400 !important;\n" +
"  font-size: 12px !important;\n" +
"  line-height: 12px !important;\n" +
"  color: #b0bec5 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  text-transform: lowercase !important;\n" +
"  position: absolute !important;\n" +
"  top: 4px !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-cashback {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 300 !important;\n" +
"  font-size: 15px !important;\n" +
"  line-height: 15px !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  position: absolute !important;\n" +
"  height: inherit !important;\n" +
"  text-transform: lowercase !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-cashback span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 18px !important;\n" +
"  line-height: 65px !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  text-transform: uppercase !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-cashback-extended {\n" +
"  display: inline-block !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  max-width: 90px !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-cashback-extended .letyshops-store-cashback-user {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 300 !important;\n" +
"  font-size: 15px !important;\n" +
"  line-height: 15px !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 40px !important;\n" +
"  line-height: 58.5px !important;\n" +
"  text-align: left !important;\n" +
"  text-transform: lowercase !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-cashback-extended .letyshops-store-cashback-user span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 18.5px !important;\n" +
"  line-height: 65px !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  text-transform: uppercase !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-cashback-extended .letyshops-store-cashback-default {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 300 !important;\n" +
"  font-size: 11px !important;\n" +
"  line-height: 11px !important;\n" +
"  color: #b0bec5 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 23px !important;\n" +
"  text-transform: lowercase !important;\n" +
"  padding: 2px 0 0 0 !important;\n" +
"  text-align: left !important;\n" +
"  text-decoration: line-through !important;\n" +
"  -moz-text-decoration-line: line-through !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-heart {\n" +
"  display: inline-block !important;\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  width: 50px !important;\n" +
"  position: absolute !important;\n" +
"  right: 5px !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-heart i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  height: auto !important;\n" +
"  line-height: 65px !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-heart i:hover {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 26px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-heart .red {\n" +
"  color: #e53935 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special .letyshops-store-heart .grey {\n" +
"  color: #b0bec5 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special span {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 65px !important;\n" +
"  color: #ffa619 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  vertical-align: middle !important;\n" +
"  padding: 0 0 0 10px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list .letyshops-stores-tab-wrapper .letyshops-stores-tab-item-special:hover {\n" +
"  background: rgba(35, 171, 253, 0.08) !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-content-stores .letyshops-scroll-list-blur {\n" +
"  background: -moz-linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  background: -webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  background: -o-linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  background: -ms-linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  height: 60px !important;\n" +
"  width: inherit !important;\n" +
"  position: absolute !important;\n" +
"  bottom: -5px !important;\n" +
"  -webkit-filter: blur(4px) !important;\n" +
"  -moz-filter: blur(4px) !important;\n" +
"  -o-filter: blur(4px) !important;\n" +
"  -ms-filter: blur(4px) !important;\n" +
"  filter: blur(4px) !important;\n" +
"  pointer-events: none !important;\n" +
"  /*important*/\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-stores-empty {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  background: white;\n" +
"  height: 320px !important;\n" +
"  width: inherit !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-stores-empty .letyshops-stores-empty-img {\n" +
"  width: 100% !important;\n" +
"  background-image: url(\"data:image/png;base64,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\");\n" +
"  height: 160px !important;\n" +
"  background-position: center center !important;\n" +
"  background-size: contain !important;\n" +
"  background-repeat: no-repeat !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-stores-empty .letyshops-stores-empty-result {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 19px !important;\n" +
"  line-height: 19px !important;\n" +
"  color: #515b60 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: 50px !important;\n" +
"  margin: auto !important;\n" +
"  text-align: center !important;\n" +
"  font-stretch: ultra-expanded;\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-stores-empty .letyshops-stores-empty-notice {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 400 !important;\n" +
"  font-size: 15px !important;\n" +
"  line-height: 28px !important;\n" +
"  color: #b0bec5 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: 100px !important;\n" +
"  width: 360px !important;\n" +
"  margin: auto !important;\n" +
"  text-align: center !important;\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-stores-wait {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  background: white;\n" +
"  height: 320px !important;\n" +
"  width: inherit !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-store .letyshops-stores-wait .letyshops-stores-wait-img {\n" +
"  width: 100% !important;\n" +
"  background-image: url(\"data:image/gif;base64,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\");\n" +
"  height: inherit !important;\n" +
"  background-position: center center !important;\n" +
"  background-size: 64px !important;\n" +
"  background-repeat: no-repeat !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer {\n" +
"  display: inline-block !important;\n" +
"  width: 470px !important;\n" +
"  height: 415px !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  background: white;\n" +
"  height: 415px !important;\n" +
"  width: inherit !important;\n" +
"  overflow: hidden !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-special-content {\n" +
"  height: 140px !important;\n" +
"  width: 470px !important;\n" +
"  position: absolute !important;\n" +
"  top: 0px !important;\n" +
"  z-index: 666 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-special-content .letyshops-special-offer {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  background: -moz-linear-gradient(to right, #050A0C, #142d3a);\n" +
"  background: -webkit-linear-gradient(to right, #050A0C, #142d3a);\n" +
"  background: -o-linear-gradient(to right, #050A0C, #142d3a);\n" +
"  background: -ms-linear-gradient(to right, #050A0C, #142d3a);\n" +
"  background: linear-gradient(to right, #050A0C, #142d3a);\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  width: inherit !important;\n" +
"  opacity: 0.94 !important;\n" +
"  padding: 0 15px !important;\n" +
"  overflow: hidden !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-special-content .letyshops-special-offer .letyshops-special-img {\n" +
"  display: inline-block !important;\n" +
"  width: 30% !important;\n" +
"  vertical-align: middle !important;\n" +
"  overflow: hidden !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-special-content .letyshops-special-offer .letyshops-special-img img {\n" +
"  width: 100% !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-special-content .letyshops-special-offer .letyshops-special-divider {\n" +
"  display: inline-block !important;\n" +
"  height: 140px !important;\n" +
"  width: 5% !important;\n" +
"  line-height: 140px !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-special-content .letyshops-special-offer .letyshops-special-point {\n" +
"  display: inline-block !important;\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  width: 65% !important;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-special-content .letyshops-special-offer .letyshops-special-point span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 300 !important;\n" +
"  font-size: 18px !important;\n" +
"  line-height: 1.25 !important;\n" +
"  color: white !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  display: inline-block !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-special-content .letyshops-special-offer:hover {\n" +
"  opacity: 1 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-offers-tab-color-block {\n" +
"  width: 100% !important;\n" +
"  height: 40px !important;\n" +
"  background: -moz-linear-gradient(to right, #050A0C, #142d3a);\n" +
"  background: -webkit-linear-gradient(to right, #050A0C, #142d3a);\n" +
"  background: -o-linear-gradient(to right, #050A0C, #142d3a);\n" +
"  background: -ms-linear-gradient(to right, #050A0C, #142d3a);\n" +
"  background: linear-gradient(to right, #050A0C, #142d3a);\n" +
"  position: absolute !important;\n" +
"  top: 140px !important;\n" +
"  z-index: 665 !important;\n" +
"  opacity: 0.94 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list {\n" +
"  height: inherit !important;\n" +
"  width: 100% !important;\n" +
"  overflow-x: hidden !important;\n" +
"  overflow-y: scroll !important;\n" +
"  padding: 0 17px 0 0 !important;\n" +
"  margin: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper {\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  margin: 15px 15px !important;\n" +
"  height: auto !important;\n" +
"  width: 440px !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item {\n" +
"  box-shadow: 0 2px 11px -3px #515b60 !important;\n" +
"  -webkit-box-shadow: 0 2px 11px -3px #515b60 !important;\n" +
"  -moz-box-shadow: 0 2px 11px -3px #515b60 !important;\n" +
"  border-radius: 3px !important;\n" +
"  -moz-border-radius: 3px !important;\n" +
"  -webkit-border-radius: 3px !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: 95px !important;\n" +
"  width: auto !important;\n" +
"  background: white !important;\n" +
"  position: relative !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  margin: 0 0 8px 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  z-index: 665 !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-logo {\n" +
"  box-sizing: content-box !important;\n" +
"  -moz-box-sizing: content-box !important;\n" +
"  -webkit-box-sizing: content-box !important;\n" +
"  height: initial !important;\n" +
"  width: 120px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 65px !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-logo img {\n" +
"  height: auto !important;\n" +
"  max-height: 60px !important;\n" +
"  max-width: 110px !important;\n" +
"  width: auto !important;\n" +
"  line-height: 65px !important;\n" +
"  display: inline-block !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-description {\n" +
"  display: inline-block !important;\n" +
"  height: inherit !important;\n" +
"  width: 280px !important;\n" +
"  vertical-align: middle !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-description .letyshops-offer-point {\n" +
"  height: 50% !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-description .letyshops-offer-point span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 400 !important;\n" +
"  font-size: 13.5px !important;\n" +
"  line-height: 14px !important;\n" +
"  color: #142d3a !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  transform: scaleY(1.1) !important;\n" +
"  -webkit-transform: scaleY(1.1) !important;\n" +
"  -moz-transform: scaleY(1.1) !important;\n" +
"  padding: 0 !important;\n" +
"  position: absolute !important;\n" +
"  bottom: 0px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-description .letyshops-offer-cashback {\n" +
"  line-height: 40px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-description .letyshops-offer-cashback span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 13px !important;\n" +
"  line-height: inherit !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  text-transform: lowercase !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-heart {\n" +
"  display: inline-block !important;\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  width: 50px !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  padding: 0 20px 0 0;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-heart i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  height: auto !important;\n" +
"  line-height: 95px !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-heart i:hover {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 26px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-heart .red {\n" +
"  color: #e53935 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item .letyshops-offer-heart .grey {\n" +
"  color: #b0bec5 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offer-tab-item:hover {\n" +
"  box-shadow: 0 2px 11px -1px #515b60 !important;\n" +
"  -webkit-box-shadow: 0 2px 11px -1px #515b60 !important;\n" +
"  -moz-box-shadow: 0 2px 11px -1px #515b60 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special {\n" +
"  box-shadow: 0 2px 11px -3px #515b60 !important;\n" +
"  -webkit-box-shadow: 0 2px 11px -3px #515b60 !important;\n" +
"  -moz-box-shadow: 0 2px 11px -3px #515b60 !important;\n" +
"  border-radius: 3px !important;\n" +
"  -moz-border-radius: 3px !important;\n" +
"  -webkit-border-radius: 3px !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: 95px !important;\n" +
"  width: auto !important;\n" +
"  background: white !important;\n" +
"  position: relative !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  margin: 0 0 8px 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  z-index: 665 !important;\n" +
"  cursor: pointer !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-logo {\n" +
"  box-sizing: content-box !important;\n" +
"  -moz-box-sizing: content-box !important;\n" +
"  -webkit-box-sizing: content-box !important;\n" +
"  height: initial !important;\n" +
"  width: 120px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 65px !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-logo img {\n" +
"  height: auto !important;\n" +
"  max-height: 60px !important;\n" +
"  max-width: 110px !important;\n" +
"  width: auto !important;\n" +
"  line-height: 65px !important;\n" +
"  display: inline-block !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-description {\n" +
"  display: inline-block !important;\n" +
"  height: inherit !important;\n" +
"  width: 280px !important;\n" +
"  vertical-align: middle !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-description .letyshops-offer-point {\n" +
"  height: 50% !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-description .letyshops-offer-point span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 400 !important;\n" +
"  font-size: 13.5px !important;\n" +
"  line-height: 14px !important;\n" +
"  color: #142d3a !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  transform: scaleY(1.1) !important;\n" +
"  -webkit-transform: scaleY(1.1) !important;\n" +
"  -moz-transform: scaleY(1.1) !important;\n" +
"  padding: 0 !important;\n" +
"  position: absolute !important;\n" +
"  bottom: 0px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-description .letyshops-offer-cashback {\n" +
"  line-height: 40px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-description .letyshops-offer-cashback span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 13px !important;\n" +
"  line-height: inherit !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  text-transform: lowercase !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-heart {\n" +
"  display: inline-block !important;\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: inherit !important;\n" +
"  width: 50px !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  padding: 0 20px 0 0;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-heart i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  height: auto !important;\n" +
"  line-height: 95px !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-heart i:hover {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 26px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-heart .red {\n" +
"  color: #e53935 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special .letyshops-offer-heart .grey {\n" +
"  color: #b0bec5 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special span {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 95px !important;\n" +
"  color: #ffa619 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  vertical-align: middle !important;\n" +
"  padding: 0 0 0 10px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special:hover {\n" +
"  box-shadow: 0 2px 11px -1px #515b60 !important;\n" +
"  -webkit-box-shadow: 0 2px 11px -1px #515b60 !important;\n" +
"  -moz-box-shadow: 0 2px 11px -1px #515b60 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list .letyshops-offers-tab-wrapper .letyshops-offers-tab-item-special:hover span:hover {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 14.5px !important;\n" +
"  line-height: 95px !important;\n" +
"  color: #ffa619 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-scroll-list-blur {\n" +
"  background: -moz-linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  background: -webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  background: -o-linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  background: -ms-linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white);\n" +
"  height: 60px !important;\n" +
"  width: inherit !important;\n" +
"  position: absolute !important;\n" +
"  bottom: -5px !important;\n" +
"  -webkit-filter: blur(4px) !important;\n" +
"  -moz-filter: blur(4px) !important;\n" +
"  -o-filter: blur(4px) !important;\n" +
"  -ms-filter: blur(4px) !important;\n" +
"  filter: blur(4px) !important;\n" +
"  z-index: 665 !important;\n" +
"  pointer-events: none !important;\n" +
"  /*important*/\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-offers-wait {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  background: white;\n" +
"  height: inherit !important;\n" +
"  width: inherit !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-offer .letyshops-content-offers .letyshops-offers-wait .letyshops-offers-wait-img {\n" +
"  width: 100% !important;\n" +
"  background-image: url(\"data:image/gif;base64,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\");\n" +
"  height: inherit !important;\n" +
"  background-position: center center !important;\n" +
"  background-size: 64px !important;\n" +
"  background-repeat: no-repeat !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation {\n" +
"  display: inline-block !important;\n" +
"  width: 470px !important;\n" +
"  height: 415px !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation {\n" +
"  background: white;\n" +
"  height: 415px !important;\n" +
"  width: inherit !important;\n" +
"  overflow: hidden !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list {\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  height: 350px !important;\n" +
"  width: 440px !important;\n" +
"  overflow-x: hidden !important;\n" +
"  overflow-y: auto !important;\n" +
"  padding: 0 10px !important;\n" +
"  margin: 60px auto 0px auto !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .jspVerticalBar {\n" +
"  width: 8px !important;\n" +
"  right: 10px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .jspVerticalBar .jspTrack {\n" +
"  background: white;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .jspVerticalBar .jspTrack .jspDrag {\n" +
"  border-radius: 10px !important;\n" +
"  -moz-border-radius: 10px !important;\n" +
"  -webkit-border-radius: 10px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper {\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  height: auto !important;\n" +
"  width: 410px !important;\n" +
"  margin: 0px !important;\n" +
"  padding: 0 !important;\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-title {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 17.5px !important;\n" +
"  line-height: inherit !important;\n" +
"  color: #515b60 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: 50px !important;\n" +
"  width: inherit !important;\n" +
"  text-align: start !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-cashback {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: inherit !important;\n" +
"  color: #555758 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  height: 50px !important;\n" +
"  width: inherit !important;\n" +
"  text-align: start !important;\n" +
"  padding: 0 !important;\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-cashback span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: inherit !important;\n" +
"  color: #515b60 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-referral-description {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 22px !important;\n" +
"  color: #555758 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: 50px !important;\n" +
"  width: inherit !important;\n" +
"  text-align: start !important;\n" +
"  padding: 0 !important;\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-social {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: 70px !important;\n" +
"  width: inherit !important;\n" +
"  cursor: default !important;\n" +
"  margin: 10px auto !important;\n" +
"  text-align: center !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-social img {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 60px !important;\n" +
"  width: 60px !important;\n" +
"  cursor: pointer !important;\n" +
"  margin: 1px !important;\n" +
"  opacity: 0.82 !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-social img:hover {\n" +
"  opacity: 1 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-referral-box {\n" +
"  height: auto !important;\n" +
"  width: inherit !important;\n" +
"  padding: 0px 5px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-referral-box .letyshops-invitation-referral-box-header {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 11px !important;\n" +
"  line-height: 20px !important;\n" +
"  color: #8b99a0 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  width: inherit !important;\n" +
"  text-align: start !important;\n" +
"  padding: 0 0 0 3px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-referral-box .letyshops-invitation-referral-box-link {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 500 !important;\n" +
"  font-size: 15px !important;\n" +
"  line-height: 20px !important;\n" +
"  color: #515b60 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  display: inline-block !important;\n" +
"  height: 26px !important;\n" +
"  width: 360px !important;\n" +
"  text-align: start !important;\n" +
"  border-bottom: 1px solid #515b60;\n" +
"  padding: 0 0 0 3px !important;\n" +
"  cursor: text !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-referral-box .letyshops-invitation-referral-box-btn {\n" +
"  display: inline-block !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: 22px !important;\n" +
"  margin: 0 0 0 15px !important;\n" +
"  position: relative !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-referral-box .letyshops-invitation-referral-box-btn i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: 600 !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 20px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: #515b60 !important;\n" +
"  height: auto !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-referral-box .letyshops-invitation-referral-box-btn .copy-success {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 500 !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 20px !important;\n" +
"  color: #555758 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  border-radius: 6px !important;\n" +
"  -moz-border-radius: 6px !important;\n" +
"  -webkit-border-radius: 6px !important;\n" +
"  position: absolute !important;\n" +
"  display: none;\n" +
"  height: 20px !important;\n" +
"  width: initial !important;\n" +
"  right: -15px !important;\n" +
"  top: 30px !important;\n" +
"  padding: 0 5px 0 5px !important;\n" +
"  border: 1px solid rgba(0, 0, 0, 0.56) !important;\n" +
"  text-align: center !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-invitation .letyshops-content-invitation .letyshops-scroll-list .letyshops-invitation-tab-wrapper .letyshops-invitation-referral-box .letyshops-invitation-referral-box-btn:hover i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: 600 !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 20.5px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: #142d3a !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification {\n" +
"  display: inline-block !important;\n" +
"  width: 470px !important;\n" +
"  height: 415px !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification {\n" +
"  background: white;\n" +
"  height: 415px !important;\n" +
"  width: inherit !important;\n" +
"  overflow: hidden !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list {\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  height: inherit !important;\n" +
"  width: 450px !important;\n" +
"  overflow-x: hidden !important;\n" +
"  overflow-y: auto !important;\n" +
"  padding: 0 10px !important;\n" +
"  margin: auto !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .jspVerticalBar {\n" +
"  width: 8px !important;\n" +
"  right: 10px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .jspVerticalBar .jspTrack {\n" +
"  background: white;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .jspVerticalBar .jspTrack .jspDrag {\n" +
"  border-radius: 10px !important;\n" +
"  -moz-border-radius: 10px !important;\n" +
"  -webkit-border-radius: 10px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .letyshops-notification-tab-wrapper {\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  height: auto !important;\n" +
"  width: 440px !important;\n" +
"  margin: 0px !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .letyshops-notification-tab-wrapper .letyshops-notification-tab-item {\n" +
"  height: auto !important;\n" +
"  width: auto !important;\n" +
"  background: white !important;\n" +
"  border: 0 !important;\n" +
"  margin: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .letyshops-notification-tab-wrapper .letyshops-notification-tab-item .letyshops-notification-date {\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: initial !important;\n" +
"  width: 15% !important;\n" +
"  display: inline-block !important;\n" +
"  padding: 20px 0 0 0 !important;\n" +
"  vertical-align: top !important;\n" +
"  text-align: left !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .letyshops-notification-tab-wrapper .letyshops-notification-tab-item .letyshops-notification-date span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: inherit !important;\n" +
"  color: #b0bec5 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  text-transform: lowercase !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .letyshops-notification-tab-wrapper .letyshops-notification-tab-item .letyshops-notification-markup-wrapper {\n" +
"  display: inline-block !important;\n" +
"  height: inherit !important;\n" +
"  width: 80% !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .letyshops-notification-tab-wrapper .letyshops-notification-tab-item .letyshops-notification-markup-wrapper .letyshops-notification-markup {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 20px !important;\n" +
"  color: #515b60 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: inherit !important;\n" +
"  width: auto !important;\n" +
"  padding: 20px 0 20px 12px !important;\n" +
"  vertical-align: middle !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .letyshops-notification-tab-wrapper .letyshops-notification-tab-item .letyshops-notification-markup-wrapper .letyshops-notification-markup::before {\n" +
"  border-radius: 50% !important;\n" +
"  -moz-border-radius: 50% !important;\n" +
"  -webkit-border-radius: 50% !important;\n" +
"  position: absolute !important;\n" +
"  content: '';\n" +
"  width: 10px !important;\n" +
"  height: 10px !important;\n" +
"  left: -12px !important;\n" +
"  margin: 5px 0 0 0 !important;\n" +
"  background: #b0bec5;\n" +
"  z-index: 999 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .letyshops-notification-tab-wrapper .letyshops-notification-tab-item .letyshops-notification-markup-wrapper .letyshops-notification-markup-special::before {\n" +
"  background: #ffa000;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-notification .letyshops-content-notification .letyshops-scroll-list .letyshops-notification-tab-wrapper .letyshops-notification-tab-item .letyshops-notification-markup-wrapper .letyshops-notification-markup::after {\n" +
"  content: '';\n" +
"  width: 1px;\n" +
"  background: #b0bec5 !important;\n" +
"  height: 100% !important;\n" +
"  position: absolute;\n" +
"  top: 0px !important;\n" +
"  left: -7px;\n" +
"  z-index: 900 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store {\n" +
"  display: inline-block !important;\n" +
"  width: 470px !important;\n" +
"  height: 415px !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  vertical-align: top !important;\n" +
"  position: absolute !important;\n" +
"  top: 0px !important;\n" +
"  right: 3px !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store {\n" +
"  background: white;\n" +
"  height: 415px !important;\n" +
"  width: inherit !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  position: relative !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store {\n" +
"  border-radius: 3px !important;\n" +
"  -moz-border-radius: 3px !important;\n" +
"  -webkit-border-radius: 3px !important;\n" +
"  box-shadow: 0 2px 13px -5px #515b60 !important;\n" +
"  -webkit-box-shadow: 0 2px 13px -5px #515b60 !important;\n" +
"  -moz-box-shadow: 0 2px 13px -5px #515b60 !important;\n" +
"  width: 450px !important;\n" +
"  height: 395px !important;\n" +
"  margin: 10px auto !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  /*.letyshops-card-footer-activated:hover {\n" +
"            background: rgba(129, 225, 132, 1) !important;\n" +
"          }*/\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body {\n" +
"  width: initial;\n" +
"  height: 310px !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info {\n" +
"  height: 70px !important;\n" +
"  width: 100% !important;\n" +
"  padding: 10px 0 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-logo {\n" +
"  display: inline-block !important;\n" +
"  box-sizing: content-box !important;\n" +
"  -moz-box-sizing: content-box !important;\n" +
"  -webkit-box-sizing: content-box !important;\n" +
"  height: auto !important;\n" +
"  width: 200px !important;\n" +
"  min-width: 155px !important;\n" +
"  text-align: center !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-logo img {\n" +
"  height: auto !important;\n" +
"  max-height: 70px !important;\n" +
"  max-width: 170px !important;\n" +
"  width: auto !important;\n" +
"  line-height: 70px !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-empty {\n" +
"  display: inline-block !important;\n" +
"  width: 10px !important;\n" +
"  height: inherit !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-cashback {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 400 !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 70px !important;\n" +
"  color: #515b60 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  width: 190px !important;\n" +
"  height: inherit !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: right !important;\n" +
"  padding: 0 !important;\n" +
"  overflow: hidden !important;\n" +
"  cursor: default;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-cashback span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 24px !important;\n" +
"  line-height: 70px !important;\n" +
"  color: black !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  height: inherit !important;\n" +
"  padding: 0 0 0 5px !important;\n" +
"  text-transform: uppercase !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-heart {\n" +
"  display: inline-block !important;\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  width: 50px !important;\n" +
"  height: inherit !important;\n" +
"  position: absolute !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  padding: 0 !important;\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-heart i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  height: auto !important;\n" +
"  line-height: 70px !important;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-heart i:hover {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 26px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-heart .red {\n" +
"  color: #e53935 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-info .letyshops-store-heart .grey {\n" +
"  color: #b0bec5 !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-rules {\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  width: inherit !important;\n" +
"  height: 200px !important;\n" +
"  overflow: visible !important;\n" +
"  padding: 10px 0 0 25px !important;\n" +
"  margin: 0;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-rules .letyshops-card-body-rules-header {\n" +
"  width: inherit !important;\n" +
"  height: 20px !important;\n" +
"  padding: 0 0 10px 0 !important;\n" +
"  margin: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: left !important;\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-rules .letyshops-card-body-rules-header span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 14px !important;\n" +
"  color: #050A0C !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  line-height: 20px !important;\n" +
"  height: inherit !important;\n" +
"  padding: 0 !important;\n" +
"  text-transform: capitalize;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-rules .letyshops-card-body-rules-conditions {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 1.45em !important;\n" +
"  color: #515b60 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: text !important;\n" +
"  -webkit-user-select: text !important;\n" +
"  -khtml-user-select: text !important;\n" +
"  -moz-user-select: text !important;\n" +
"  -ms-user-select: text !important;\n" +
"  user-select: text !important;\n" +
"  height: 170px !important;\n" +
"  width: 100% !important;\n" +
"  padding: 0 17px 0 0 !important;\n" +
"  text-overflow: ellipsis;\n" +
"  overflow-x: hidden !important;\n" +
"  overflow-y: scroll !important;\n" +
"  cursor: text !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-body .letyshops-card-body-rules .letyshops-card-body-rules-conditions p {\n" +
"  -webkit-touch-callout: text !important;\n" +
"  -webkit-user-select: text !important;\n" +
"  -khtml-user-select: text !important;\n" +
"  -moz-user-select: text !important;\n" +
"  -ms-user-select: text !important;\n" +
"  user-select: text !important;\n" +
"  margin: 0 0 3px 0 !important;\n" +
"  padding: 0 !important;\n" +
"  line-height: 1.45em !important;\n" +
"  text-overflow: ellipsis;\n" +
"  cursor: text !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-footer {\n" +
"  display: inline-block !important;\n" +
"  width: inherit !important;\n" +
"  height: 85px !important;\n" +
"  line-height: 85px !important;\n" +
"  border-top: 1px solid rgba(176, 190, 197, 0.37) !important;\n" +
"  overflow: hidden !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-footer .letyshops-card-main-btn {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 14px !important;\n" +
"  color: white !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  box-shadow: 0px 2px 6px -2px #515b60 !important;\n" +
"  -webkit-box-shadow: 0px 2px 6px -2px #515b60 !important;\n" +
"  -moz-box-shadow: 0px 2px 6px -2px #515b60 !important;\n" +
"  border-radius: 3px !important;\n" +
"  -moz-border-radius: 3px !important;\n" +
"  -webkit-border-radius: 3px !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  border: none !important;\n" +
"  height: 45px !important;\n" +
"  width: 300px !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  margin-top: 20px !important;\n" +
"  background: #81c784;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-footer .letyshops-card-main-btn:hover {\n" +
"  background: #4cb16d;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-footer-activated {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  width: inherit !important;\n" +
"  height: 85px !important;\n" +
"  background-color: #81c784;\n" +
"  line-height: 85px !important;\n" +
"  border-top: 1px solid rgba(176, 190, 197, 0.37) !important;\n" +
"  overflow: hidden !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  border-radius: 0px 0px 3px 3px !important;\n" +
"  -moz-border-radius: 0px 0px 3px 3px !important;\n" +
"  -webkit-border-radius: 0px 0px 3px 3px !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-footer-activated .letyshops-notification-activated-img {\n" +
"  display: inline-block !important;\n" +
"  height: auto !important;\n" +
"  max-height: 95px !important;\n" +
"  width: 110px !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"  /*i:hover {\n" +
"                .material-icons(62px, 700);\n" +
"              }*/\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-footer-activated .letyshops-notification-activated-img i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: 700 !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 60px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: white !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 300ms ease;\n" +
"  -moz-transition: all 300ms ease;\n" +
"  -o-transition: all 300ms ease;\n" +
"  transition: all 300ms ease;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-footer-activated .letyshops-notification-activated-text {\n" +
"  display: inline-block !important;\n" +
"  height: inherit !important;\n" +
"  max-height: 95px !important;\n" +
"  width: 210px !important;\n" +
"  position: relative;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: start !important;\n" +
"  text-align: -webkit-start !important;\n" +
"}\n" +
"body #letyshops-content-container #letyshops-content-container-certain-store .letyshops-content-store .letyshops-card-store .letyshops-card-footer-activated .letyshops-notification-activated-text span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 400 !important;\n" +
"  font-size: 17px !important;\n" +
"  line-height: 17px !important;\n" +
"  color: white !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  margin-top: -9px;\n" +
"  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-footer-container {\n" +
"  background-color: white;\n" +
"  height: 50px !important;\n" +
"  width: inherit !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper {\n" +
"  height: 50px !important;\n" +
"  width: inherit !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-switcher {\n" +
"  float: left !important;\n" +
"  height: inherit !important;\n" +
"  max-height: 50px !important;\n" +
"  width: 300px !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 0 0 15px !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: start !important;\n" +
"  position: relative !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-switcher .letyshops-footer-copy {\n" +
"  display: inline-block !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: inherit !important;\n" +
"  width: inherit !important;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: default !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-switcher .letyshops-footer-copy i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: #b0bec5 !important;\n" +
"  height: auto !important;\n" +
"  vertical-align: middle !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-switcher .letyshops-footer-copy span {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 13px !important;\n" +
"  line-height: 50px !important;\n" +
"  color: #b0bec5 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  height: inherit !important;\n" +
"  vertical-align: middle !important;\n" +
"  padding: 0 0 0 5px !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-switcher .letyshops-footer-all-stores {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 50px !important;\n" +
"  color: #ffa619 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  vertical-align: middle !important;\n" +
"  padding: 0 0 0 10px !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-switcher .letyshops-footer-all-stores:hover {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 15px !important;\n" +
"  line-height: 50px !important;\n" +
"  color: #ffa619 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-navigation {\n" +
"  float: right !important;\n" +
"  height: inherit !important;\n" +
"  max-height: 50px !important;\n" +
"  width: initial !important;\n" +
"  /*70px !important;*/\n" +
"  padding: 0 !important;\n" +
"  margin: 0 10px 0 0 !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-navigation .letyshops-footer-help {\n" +
"  float: left !important;\n" +
"  height: auto !important;\n" +
"  width: 35px !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-navigation .letyshops-footer-help i {\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal;\n" +
"  font-style: normal;\n" +
"  font-size: 24px;\n" +
"  line-height: 1;\n" +
"  letter-spacing: normal;\n" +
"  text-transform: none;\n" +
"  display: inline-block;\n" +
"  white-space: nowrap;\n" +
"  word-wrap: normal;\n" +
"  direction: ltr;\n" +
"  color: #b0bec5 !important;\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  margin-top: 12px !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-navigation .letyshops-footer-help i:hover {\n" +
"  color: #8b99a0 !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-navigation .letyshops-footer-settings {\n" +
"  float: right !important;\n" +
"  display: none !important;\n" +
"  /* for new release*/\n" +
"  height: auto !important;\n" +
"  width: 35px !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-navigation .letyshops-footer-settings i {\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal;\n" +
"  font-style: normal;\n" +
"  font-size: 24px;\n" +
"  line-height: 1;\n" +
"  letter-spacing: normal;\n" +
"  text-transform: none;\n" +
"  display: inline-block;\n" +
"  white-space: nowrap;\n" +
"  word-wrap: normal;\n" +
"  direction: ltr;\n" +
"  color: #b0bec5 !important;\n" +
"  margin-top: 12px !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"body #letyshops-footer-container .letyshops-footer-wrapper .letyshops-footer-navigation .letyshops-footer-settings i:hover {\n" +
"  color: #8b99a0 !important;\n" +
"}";
var headEl = document.getElementsByTagName("head")[0];
var styleEl = document.createElement("style");
headEl.appendChild(styleEl);
if (styleEl.styleSheet) {
if (!styleEl.styleSheet.disabled) {
styleEl.styleSheet.cssText = css;
}
} else {
try {
styleEl.innerHTML = css;
} catch(e) {
styleEl.innerText = css;
}
}
}
