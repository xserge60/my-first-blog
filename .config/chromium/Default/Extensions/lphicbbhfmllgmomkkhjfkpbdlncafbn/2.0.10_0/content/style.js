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
"#letyshops-notification {\n" +
"  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.3) !important;\n" +
"  -webkit-box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.3) !important;\n" +
"  -moz-box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.3) !important;\n" +
"  height: 280px !important;\n" +
"  width: 320px !important;\n" +
"  background-color: white;\n" +
"  position: relative;\n" +
"  border: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-header {\n" +
"  height: 45px !important;\n" +
"  width: inherit !important;\n" +
"  background-color: #f3f3f3;\n" +
"  text-align: left !important;\n" +
"  text-align: -webkit-left !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-header .letyshops-notification-logo {\n" +
"  display: inline-block !important;\n" +
"  max-height: inherit !important;\n" +
"  height: inherit !important;\n" +
"  width: 40px !important;\n" +
"  text-align: -webkit-left !important;\n" +
"  text-align: left !important;\n" +
"  margin: 0 0 0 5px !important;\n" +
"  background-repeat: no-repeat !important;\n" +
"  background-position: center center !important;\n" +
"  background-image: url(\"data:image/png;base64,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\") !important;\n" +
"  background-size: contain !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-header .letyshops-notification-name {\n" +
"  display: inline-block !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 0 0 3px !important;\n" +
"  vertical-align: top !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-header .letyshops-notification-name span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 400 !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 45px !important;\n" +
"  color: #b1b4b6 !important;\n" +
"  letter-spacing: -0.01em !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  text-transform: capitalize;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  border: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  cursor: default !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-header .letyshops-notification-close {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  position: absolute !important;\n" +
"  height: 22px !important;\n" +
"  width: 22px !important;\n" +
"  top: 10px !important;\n" +
"  right: 8px !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-header .letyshops-notification-close i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 22px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1 !important;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: #77868d !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-header .letyshops-notification-close:hover i {\n" +
"  color: #696969 !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content {\n" +
"  background-color: white;\n" +
"  height: 140px !important;\n" +
"  width: inherit !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-merchant-logo {\n" +
"  display: inline-block !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: auto !important;\n" +
"  max-height: 100px !important;\n" +
"  width: 160px !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-merchant-logo img {\n" +
"  max-height: 100px !important;\n" +
"  max-width: 150px !important;\n" +
"  margin: 0 auto 0 auto !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-merchant-cashback {\n" +
"  display: inline-block !important;\n" +
"  height: inherit !important;\n" +
"  width: 90px !important;\n" +
"  position: relative !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-merchant-cashback .letyshops-notification-merchant-cashback-phrase {\n" +
"  width: inherit !important;\n" +
"  position: absolute !important;\n" +
"  top: 50% !important;\n" +
"  margin-top: -25px !important;\n" +
"  margin-left: auto !important;\n" +
"  margin-right: auto !important;\n" +
"  padding: 0 !important;\n" +
"  cursor: default !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 14px !important;\n" +
"  color: #696969 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-merchant-cashback .letyshops-notification-merchant-rebate {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 18px !important;\n" +
"  line-height: 18px !important;\n" +
"  color: #263238 !important;\n" +
"  letter-spacing: 0em !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  width: inherit !important;\n" +
"  position: absolute !important;\n" +
"  top: 50% !important;\n" +
"  margin: auto !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-merchant-cashback .letyshops-notification-merchant-rebate span {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 600 !important;\n" +
"  font-size: 22px !important;\n" +
"  line-height: 22px !important;\n" +
"  color: #263238 !important;\n" +
"  letter-spacing: 0.02em !important;\n" +
"  text-transform: none;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  text-transform: uppercase;\n" +
"  cursor: default !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-heart {\n" +
"  display: inline-block !important;\n" +
"  height: auto !important;\n" +
"  width: 70px !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-heart i {\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 24px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1 !important;\n" +
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
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  -webkit-transition: all 0ms ease;\n" +
"  -moz-transition: all 0ms ease;\n" +
"  -o-transition: all 0ms ease;\n" +
"  transition: all 0ms ease;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center;\n" +
"  text-align: -webkit-center !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-heart i:hover {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: normal !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 26px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1 !important;\n" +
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
"#letyshops-notification .letyshops-notification-content .letyshops-notification-heart .red-heart {\n" +
"  color: #ef5350 !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-content .letyshops-notification-heart .grey-heart {\n" +
"  color: #77868d !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-hint {\n" +
"  background-color: white;\n" +
"  height: 110px !important;\n" +
"  width: inherit !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-hint .letyshops-notification-hint-img {\n" +
"  display: inline-block !important;\n" +
"  width: 50px !important;\n" +
"  vertical-align: top !important;\n" +
"  padding: 10px 0 0 0 !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-hint .letyshops-notification-hint-img i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: 200 !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 26px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1 !important;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: #ffa000 !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);\n" +
"  vertical-align: top !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"  cursor: default !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-hint .letyshops-notification-hint-text {\n" +
"  display: inline-block !important;\n" +
"  -webkit-touch-callout: text !important;\n" +
"  -webkit-user-select: text !important;\n" +
"  -khtml-user-select: text !important;\n" +
"  -moz-user-select: text !important;\n" +
"  -ms-user-select: text !important;\n" +
"  user-select: text !important;\n" +
"  width: 270px !important;\n" +
"  height: inherit !important;\n" +
"  text-align: left !important;\n" +
"  text-align: -webkit-left !important;\n" +
"  overflow: hidden !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-hint .letyshops-notification-hint-text span {\n" +
"  display: inline-block !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  line-height: 22px !important;\n" +
"  color: #696969 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n" +
"  cursor: text !important;\n" +
"  display: inline-block;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 16px 0 0 !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-button-wrapper {\n" +
"  background-color: white;\n" +
"  height: 95px !important;\n" +
"  width: inherit !important;\n" +
"  border-top: 2px solid #f3f3f3;\n" +
"  box-sizing: border-box !important;\n" +
"  -moz-box-sizing: border-box !important;\n" +
"  -webkit-box-sizing: border-box !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-button-wrapper .letyshops-notification-warning {\n" +
"  white-space: nowrap;\n" +
"  color: red;\n" +
"  margin: 5px auto -44px auto;\n" +
"  text-align: center;\n" +
"  font-family: Roboto, sans-serif !important;\n" +
"  font-size: 12px;\n" +
"  cursor: default;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-button-wrapper .letyshops-notification-warning .warning_message {\n" +
"  color: red;\n" +
"  text-decoration: underline;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-button-wrapper .letyshops-notification-info {\n" +
"  position: relative;\n" +
"  white-space: nowrap;\n" +
"  margin-top: 51px;\n" +
"  text-align: center;\n" +
"  font-family: Roboto, sans-serif !important;\n" +
"  font-size: 9px;\n" +
"  color: #5d5d5d;\n" +
"  cursor: default;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-button-wrapper .letyshops-notification-activate {\n" +
"  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.4) !important;\n" +
"  -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.4) !important;\n" +
"  -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.4) !important;\n" +
"  width: 255px !important;\n" +
"  height: 50px !important;\n" +
"  position: relative !important;\n" +
"  top: 50% !important;\n" +
"  margin-left: auto !important;\n" +
"  margin-right: auto !important;\n" +
"  margin-top: -25px !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"  border: none !important;\n" +
"  border-radius: 0px !important;\n" +
"  overflow: hidden !important;\n" +
"  cursor: pointer !important;\n" +
"  /*There is some corrections for timer that switched off*/\n" +
"  /*\n" +
"\n" +
"            a {\n" +
"              width: inherit !important;\n" +
"              height: inherit !important;\n" +
"              margin: 0 !important;\n" +
"              padding: 0 !important;\n" +
"\n" +
"              .letyshops-notification-shell-timer {\n" +
"                .letyshops-block();\n" +
"                display: inline-block !important;\n" +
"                width: 50px !important;\n" +
"                height: inherit !important;\n" +
"                margin: 0 !important;\n" +
"                padding: 0 !important;\n" +
"\n" +
"                button {\n" +
"                  .letyshops-border-radius(0px 3px 3px 0px);\n" +
"                  width: inherit !important;\n" +
"                  height: inherit !important;\n" +
"                  background-color: @orange !important;\n" +
"                  background: @orange !important;\n" +
"                  min-width: 0 !important;\n" +
"                  padding: 0 !important;\n" +
"                  border: 0 !important;\n" +
"                  cursor: pointer !important;\n" +
"\n" +
"                  i {\n" +
"                    .material-icons;\n" +
"                    .md-light;\n" +
"                    .letyshops-noselect();\n" +
"                    vertical-align: sub !important;\n" +
"                    text-align: center !important;\n" +
"                    text-align: -webkit-center !important;\n" +
"                  }\n" +
"                }\n" +
"              }\n" +
"            }\n" +
"      */\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-button-wrapper .letyshops-notification-activate .letyshops-notification-shell-button {\n" +
"  -webkit-transition: all 500ms ease;\n" +
"  -moz-transition: all 500ms ease;\n" +
"  -o-transition: all 500ms ease;\n" +
"  transition: all 500ms ease;\n" +
"  display: inline-block !important;\n" +
"  width: 255px !important;\n" +
"  height: inherit !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  vertical-align: top !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-button-wrapper .letyshops-notification-activate .letyshops-notification-shell-button a {\n" +
"  width: inherit !important;\n" +
"  height: inherit !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 0 !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-button-wrapper .letyshops-notification-activate .letyshops-notification-shell-button a button {\n" +
"  border-radius: 3px 3px 3px 3px !important;\n" +
"  -moz-border-radius: 3px 3px 3px 3px !important;\n" +
"  -webkit-border-radius: 3px 3px 3px 3px !important;\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 500 !important;\n" +
"  font-size: 15px !important;\n" +
"  line-height: 15px !important;\n" +
"  color: white !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  width: inherit !important;\n" +
"  height: inherit !important;\n" +
"  background-color: #81c784 !important;\n" +
"  background: #81c784 !important;\n" +
"  border: 0 !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-button-wrapper .letyshops-notification-activate .letyshops-notification-shell-button:hover a button {\n" +
"  background-color: #4ec765 !important;\n" +
"  background: #4ec765 !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-success-wrapper {\n" +
"  background-color: #81c784;\n" +
"  height: 95px !important;\n" +
"  width: inherit !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-success-wrapper .letyshops-notification-activated-img {\n" +
"  display: inline-block !important;\n" +
"  height: auto !important;\n" +
"  max-height: 95px !important;\n" +
"  width: 110px !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-success-wrapper .letyshops-notification-activated-img i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: 700 !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 60px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1 !important;\n" +
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
"  vertical-align: middle !important;\n" +
"  text-align: center !important;\n" +
"  text-align: -webkit-center !important;\n" +
"  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n" +
"  cursor: default !important;\n" +
"}\n" +
"#letyshops-notification .letyshops-notification-success-wrapper .letyshops-notification-activated-text {\n" +
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
"#letyshops-notification .letyshops-notification-success-wrapper .letyshops-notification-activated-text span {\n" +
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
".letyshops-notification-extended {\n" +
"  height: 370px !important;\n" +
"}\n" +
"#letyshops-notify {\n" +
"  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.3) !important;\n" +
"  -webkit-box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.3) !important;\n" +
"  -moz-box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.3) !important;\n" +
"  -webkit-touch-callout: none !important;\n" +
"  -webkit-user-select: none !important;\n" +
"  -khtml-user-select: none !important;\n" +
"  -moz-user-select: none !important;\n" +
"  -ms-user-select: none !important;\n" +
"  user-select: none !important;\n" +
"  height: 70px !important;\n" +
"  width: 320px !important;\n" +
"  background-color: #fff;\n" +
"  position: relative;\n" +
"  border: 0 !important;\n" +
"  padding: 0 !important;\n" +
"  margin: 0 !important;\n" +
"}\n" +
"#letyshops-notify .letyshops-notify-logo {\n" +
"  width: 70px !important;\n" +
"  height: 70px !important;\n" +
"  float: left;\n" +
"  margin: 0 !important;\n" +
"  background: #81c784;\n" +
"  background-repeat: no-repeat !important;\n" +
"  background-position: center center !important;\n" +
"  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAbhUlEQVR4Xu3dd5M8X1UG8NOgAoqBpAIiqGQwAgIqVimU5Xvwvfg6+Ms3Qs7BnFGCIFngR86hrU/Xfbbu9m/2O3m3p3en6tbM7s7sdN/nnnOeE+65Qx34GMfxb6pqqKqfamOsqq9W1Zer6kttfKGqjK9V1Xer6nvDMPzgwK98+NgBMwCggx7jOL65qp5YVT9TVU9q/+TrVfWVBjKgv9gGgL8D4Kr6flVZDD9pz16PwzB4fniceAaOAfivq+pnq+ppVfX0qvq5JqXfqCpAA/WxNvz8rar6dgOaNAMa4CTa+OEwDD8+8f3d+393DMB/1YD9jar6zap6dpPIAEdigWp8swEe8KlyCwDw/mZ43w8eJPm0a/IYgP+wqp5bVb/fxkur6snd5ZHGHzbpBF6kmX2muj/Xnqlyat2wKCbV/QD0aYA+BuBfr6rnVdWrq+o1VfXbnap+SlU9obOxgCO1RgD+fCNgIWSeSfg1tV1VP6qqH98XwMdxhEkGlM1jDcNAWPZ+HAMwu0stA9Z4eZPoX62qZ3bEC3liY2ODgUg9B3CvI8Gk3Ov8PZ/57n2wz+M4AjMDgfXa8zAMA3O29+MYgKljQP5WGy+uqhe18YKqemqTYBcVdR2VHTuNbCFeLh7g/1dVn66qz7QR9f21Q1fw3jNyRx9okgtMI67nT7fXTxiGgUnb+3EMwD77i01qn9OI1iuq6neq6iWNXWc1em/coLhHng0qOUSMz/w/bXyys9PUt8VAXRs/uVSVPVPB5ifqONLag5zXAP7fvdFt//yQz02fGceRm0RVGwgXgH+vqetfbm6U9/CVNy0mAJNqIAOQirZSAe2ZnTaQsp55ey+tcHG2eRxH0mk++hGJzaJPnMA9hnSag70fB0twA5gKAaDxjAbs71bVKxvgfmfwkSeyMHu4kV59A46N5jYB1E0BO0BbxVS4hcCu/2gYBhJ9EY8mvUwb82VODHOHlJpLi90cTFG/LmbgPs3J3o9jAfb5kIFfqCp2GLgkmR3Gsn+tqfKJLMwY4lxtT1LZ1LCbZIPZZdL8qar6z6r6rwY42x3GvQiV3alfQPT3mtfmAJhMm/kyAjSJzgLPIsdNvP7+oQv5KID75TSOo5XJdQrpEvx4YRvPaj6ym6CONknzfHVazW6QtAIa8fpoG15j2/42TUDs813Z5nEcQ45IoiF8GzUcFezZ3/L7kCjPsOBOJugTXuLngwNApwTYRVLHbC/3SYSLJL+sk2KqyQo2GdseJNkNk1Q3CVCS/NkGNokGtN+ZjCnWfRfuVJNcoEXdus+f74Z7JgDew6b2atjizEis3vPVOFR6o0a2TfROf28+nFUbFURFI1xsMqkGvAVAPfUA37TITETUNXsLwPjQ7DB1/ZEm0fGdv3lb7lQD1dzEU8h9uz/xeVrL/SKgVDHQgWzB4hX4Be+Adoomcp8xU1fPx2ilk0lwI13+nxt2I1g1e2wAmD3mTgHaQojaukldxz6HUSJTVrrVj3QBlz3+7455mywLYXKnjpmYTau6LeKo4F4Nux8A/lJbwEDu7Wwk2z0zO/H1aZ+ALLjjuq+yaqe4/pMCnEkZx9HNW7nPb3aZumaP2WVAu3nkwqp309seYdsmgG3GsBMMwazjO3vtb1PW6tTSPI4jIKN63QNAM/J7QLv/LEyaaFr/DUBAWqDAtSBDpL49DEPeu20+dv77uQAmlVFZJgCosceYNim2APyNXdr2mHLGzX5RXewTu0xlY9kk+d87hp3EBpt8sjzzOI7Ac+3hGbSUITwL8NhamiZhV+bDdfZZNcAaIYhY8kGx5m0TdxaAm7oGchgj1Rz3Scya64SImSjqPBGdm3hBD1Kvskk0CaCu/6WBTIqTyLAIjop8NVvr+mgaCzJJFhzDoKWATILjIQCOGu79dpKbGHtCsDTNWYM1ZwO4A9nkIBxxmUgwlW1yAG1iYtfiKz9qYc59ZzbXRH6iqj7e/GWvhTrZt7Drg0qFxnEMO2ZSfqXdB06RHHiSK8BN8QLpdU0GQpUwK8km0QH+G+dQy/3knRXgDmTqixQbVrykhHi1iaKqQ0JuCmn219yTr2SqkpGirgH7H41lkyI2mZTvbeMaqQKsa5RYce3y3oZrx5bj+gE3UprgDDvr+y1g77MI/M310TpfPrdbdxsA+w62KS4DdWaCpBg9U9MhKADeFgSZ21TEZCr5aXaOf/zPTWWT6DBVUrUXs27BCyDSNIaFiUswM7RQatHwAmo5NWhApD18J+ml2kk/kEn031XV37u2iwe4STEpoKYNhAuwJooU+50bJ8UmbN9FFwIWaTaBcaE+1hh27LLJthB2Arp5AxYgs5IRb4BqRvZSf5aKUip4sq2NGJJaGswCd3/Y/wer6kOCNscEMbYRrJMGOm76skZS3CBgDbbLZAHXaxLixuMbHwqwS0CoejeE+wRsvjK7DAw2eacCgmZ/SW4CNsANObQgSazvYAp8L2AtIpqISrd4qXdEEtCujwn5QFV9eE0AW70pCPBsotgwjJR6Tt6zL1XZZYHGv8x7qWtEJgV/1DV2bbB7VCdJQ262uiXN73Wdf1RVr29q2fUyOT5v8fxj+98AjtCQbhqK50CV0y6A9x7x9NVJMIBNFGADtNeYtDDeVWnKgSq6Xwx9iJO7xD/+t0a6qOoU+5lwWagbgwvjOAKSpvmzqvrTpoFiCthX/5c99R2kl1QzR0BVlKhezeeTOGGXLYr3N5A/vRYVbdVb1Vg0UJEUq9vNU2HJruziJm1zofqgCGklxQbCRXoERaKuY48fB3IzLQBzrW9qILPHgE1pkf8lJk5N+15q2bB4/6BVm3pNNfPJAez9766q97quiwe4kaw+xMeGSUBY4WwbdklSjF3cpF0AjuompSnuI7lUNfb6r22yp4zNfJK7vC7yR9X+ZVW9sWkbiyMkLhktwLn+8AxaKoWIFrQFxGwgYKT97VX1TvZ4F1Oxq63a9L59Cc1B3zUL0pNYwL6urXJuU4L0KbfNde17ffOIFyabVJzJZS/Zv39oqjqF90KFV59t7hGzQfMA+C+q6s8bWbI4fN4zE0CiqWf3wI0isTQTTwHQSJqHxWSxUetvqap3NK1ycK53FzD2ncBd/ufG9zSQqWCTZiKoaLnihP4AjW2nKOAU6jr2GNDApFIT0oz0yS8jXdO2mSa9CbHiB8D6k7YggQ5YWgBQwBVjpoIxZurcPfkMoNliZsk8xw6T4ADMjZuiXOeKaN0mwGHIXAb2GKBUGvJlYqx4v48/bJK3BT12UdcpZDORwAQsNWtyMeuw62mS20KkSVyHBZe8tgXpfwH2n5qaZldpCPcGSKZHVSnJ9TmLl922WC0gi8H3vbVJME7gd5eXbHiEX8wfxDRJB3UNYGwTKREKTCrRQthUx7WrFulDmj5DghLSFAwhzYINf9v82JT9AMv1JXGPM7hG1+Y97C8pRNomJt60jsX6qkasSLCffZZku2fXQ5X7PBtMRfPPaZZsrT1Z5iuTdGsSnC/sVGCS5CYCIYnPiHQBPgEQKps071Lm8yjw+xIgqpUEA9fAgoFPmiwEZiTlwJ65ea4HEAIVNMBnQpCav2wB2MJjAJhE515cvweiBVQs+j1tkSWdKFZ++QA3O5cCteyOSGGAZyPVH6QoYcxM0q4SPH9fgiDi1lQrn5g9ZlNJI/UtMuVvtEuiUClpJYUASinvVzq7bbHG9+UdADgRLwsjRQ0WiO/iB4tm0SL+31Sycw47fOsS3BEZ3+3GY+tMROLUISkpDPC3XQoDttnk1DlhtCaWNLGDeTb5XB4A4wOkN9WOiY6l6lHFyNjVOgu78gwMJNLnST523QNMAwhTCpAAmPvGr37sHImHOwF4pq6TbyWpXIrUcSFdpEDgwEQnc3OMBGfrC1sq6U6KTThg+5pri8730iApKpAtAvJUcN9sL62SQnYAU8/sMJsdcJMmjKuE5HGzDAtLHHsq31krwAmCkBqskz3meyaVuE9pzzYbnHLV7FfO9hg2mCQnvciEhM2H/QI38WuCAVwLwPXRNFhzqlbi8iXPHW+A5gAoFm6QYIAzD186R1TrriXYjfdtINjfTBJXI2W2qfo4VHrDoudbV9MwxgQD2WQDPUDGj/ZzfhcfmWQiUhZlRor+XTfJvtod2C6c5gBw8tUApkGkEL+4VoD7iolIAb8YwKkp9p5dSNY8kpVKxhTqZZdEvwc5e6CAHKJFWoEB1MSpCQNzkn1Frs31AhXBSgEe0GmjbOnpM2QBOBmuAAz0VQKcao+UoEaCk4jAZJEUErwLyeqT/9maSmoNQGajuWf+Z0aA9+x92fPE1gKKNBopaHdd+AFQAeo5G+2S/91USAhgdl/IlBRHRU9Ea3US3Bh1X9SGRYsEJVDPj4wPugvJ6muRQ44imeLG2UUw5YS7ccWMuwK5VGRwkwBroQEzBYPUcq4twZnstIy2mcfULZyeZAGY9E7XtjqS1fnEfXlt3xIiOyEwWhIUdddzB6/7qFVcIWyX+4E8CWoITpDcFOGlu0/CjVMvkK5/l8tLuQ2Xh8Riyok1A5pmSTVKihYeFUMHMJsruBI3yQJcp5vU+cSpoSYRKa9l2wBsclO3laZrqT+OGkzXgOw1TosIIUmuSADOHqC4PFOJTZ+ya35tNmmTSN8NTCNFC15z6RJOzf6kTSQwZsPf+kCHrBYJTpXJ11cT6JjPQtd8hERwOajmSI1ng4rMntpseQmRAXB8XFICOK5QaqZITeqm0rsrO/muNWBrqUL/H5lKRSWp5bYhVVlwbG0SIr29fdztdVohocp3tVClxUej0CJT4OQYN2HTZ+/UTeovqItRZ/sHsAFNNSZoT5pSZks1JkYN3BSdm8SQJ9LBBaEGSbOJTLe9iSHP7V5rsWAx0SbAJLV6gckU4QjZJej7Ex9/1Dz2W24sLgGVt3XJhmSTDirM37YgFgNwF92KNFDH2W8MWHYYuF7H9qWOeg5wCBSb22/RTNWj9Ny1toldFQe1a0FRwSRW2BHxE3wBeKR2XiAYICOFmVs/x2SQVgDLJEk4JCN1+fngbSttg9pOcQC1jKUCNVsy+wSAiQyxIpXZYsreZYNaWHJ8W2q5r+DwP1L4R0LxAGrZiP0FNsnupbYHsW8/4X/nf6bYIP62dKE0pXg0s+GaztaCYnESvCFOHWLVd6WZ276eZGXTeC/V2fmQjWjXiuwaB8h+ZXaXOn5ty1FTy0lfWli95Gb+EvEClu/yc1i1Rcc8pNgA4ZPBUjjg9zsV4e8rIHn/YgHeoLJ7F2mXTeN90GN6fROJaXaXTaWemQFJA2WyUn/UcgIdN7lA/n/IXXY1pB8HgAU3qGPgInxXbts5mHO/GBYP8KErd5/Ptfpn6pf0ikrJCJFg5Irt77sR9Go5XxM1jLUjdsC2KEi8vwGVS8QnJ8nZ3vqtczDnB4C7GWjkin1PLFkwQ6gUseIaAb3v2LcJ4D6oQlJTBO//ekhkIFcAtgASZDlrRaUvvpcSnAYqXcI+xerZ1prdFwgW0rVprnrWjNAlDci+ctPSs8PiIMEB2N/SQffkLRvmmuteAdyV7pr0AGRO2NmESEmvpAc3KVWe3jMPQvQ1Xuq5SGnSgH4WBSPBvksyYQq2DMPAT7+1x70BeBaCTAlNKjOERNP3GoPmB8+THPNUJLWccymST05rp2z6Tvwc4Pzxr972oSSrB3jWzypM2XMCECSRK6S4/Y8bwcoZFPOmbT0zJ4kyQxhx9iGzv5IaAPaIz2wxTCnIc7Pm1avormlKGqekpWDCmnG3UgzgmUp+QxvqswVUwpy9P8Xz6YzL3yWVAE2vLjY4qUkkKpGyZLvu5JiC1UlwSxYkKILopKaLTUz7JSwXaO4f8KJU2QOMPftcfN4kMlJum2ODBCmySyINX9K+SYbq5ImDQwz3qgCeJSyU+WDH2fFHKtlMkjZFkJqf6n0AFtxgh8WcLYY8vC+tfdlRYBpIVXpl+n85b+JxuxUPAeZUn1kFwJ1aTrvedJ+TjUpRvZg2FZoyGSo0wQ3ukB2PpJerRAP0NdQyPgDEhpNfZnfTb5LknjWmfCjgFw9w1+mVrU2FpqAFJkw9c1X8nsokvYINJM9i8J4cR9Bv9wRucsppaQxEEShhx6QgU/pj28kiG5OvAWBAZTNbQo3pA+L3pA9I1CtgqFfRJHY2Za6ps0piIbvxfcZ7+yOAUpiXTWNTguG22fGuEr0GgKlTkipPLDAh1Jj8LSbNbekbiQMLA7YYlOcabDB1zmZzjWKrY2PTHbavuExJ7SP7fOwKxLned5EAz46goX6pZLY2vSPT4AU5EjoUYbLlMxu9qF8AJySZWuacLYEpR2qz2Swb086a3js10JcKMLUcVwhQAMV+AUYSU78FKFtE7AOy8TrtFrJFVDgyLSTiJ3OLctZiXzvtNYZ89vjxKUG+VICBkRNL5G+FF7k5VDO2nObhVKvyVAPA7HFf75xEvsWSQ7tS25XkfYoF2NlrZT6nBOJc/+tSAc7uP/HidKKLDyv+m/aC7K9dBIZSmWzwBlQWSao0cnbT5O7Mzjd2ttwiAhf7LoSLA7jZX2qZvU0n+XSA9TvqGxlKS990nkW0/G4qUW1uU9S8eYvEXqvX2ndCl/b+SwUYKaKODek920j8DpMmfXFlBCbEi0WduEeIE7cHS6Z6+xKcKbBxaTZ224K6GIBn0SqM2U76vpkaYsUuJ40XJhwXJ8/ZQShJ7zGp3ktVwWsCOKecsJl9uwQEK03FvYedzcbutNXnz3od6Z1Ci2sFtQf9IiS4SS9ghR1JKrdIURwJVonRby8FXk5hyXOanqWdsG0iiwwtbpPIff9+KQCLSAktZusKfxe4crciUWHCqUHGmHNoVs5vINWI1LSD8D5I72R69l0Rd/H+luOlhrlECJUuPFQz6RVPlpwHLnZMFac9EuZ81v23dzEf+3znpQDMtgpo5ITxvtmnSFS6uYoxk1iRK76v1xjz1ORsbQx5F6AvBWCpQECm8hHAfODssk8nV9mfvkUh2zu1Pjp3295dJvsu3rNogLsjW0WuBDHYXIMkx+9lmyXjgcsF6jd3Yc+rClzsu0gWC3CrYRZ25NtizmlaalsJ6U0HHuo7R8+ytyT41o6t2XfCb/v9SwYYcUpHWhkiUpu6KYl5wFPdWLGaqHStA3AK0L9wiQmCUy6CJQMsTpxDINlarhHpVTtFPWcLKftLFfN5cy6DrZnyv1oTXVwGaPUAd4ENqpjkpgQHuUoHvL7BJ9UccLlGwGWLtQd8APiUK+bY/9W1UhCdkkggtXxeJCtdd7Lnx9flcEpVjql4lEGiqs/Se+rYe7zNzy9KRc8SClKCbK4dB6JWghxscvpz5NrTpBu4ATinolz1dL7NSV3Sdy0NYGq332kP2PlO+/kReCRYKvAB4A0ra2kAc4vSC4s6pp5tKeH7ikOne2ufxw3AaexNVaf384MEL0mdjOPI9UmrJDlfjDm1Vum+njZLWZzZ5ZfSWM8B+MEGLwXgZn9JLx9XWFJgA8kCspIcwY5Nqc4kGLKNE8Ap03lg0QsDmJRK5ucI2rQQBDbwNz2QrLkfrBb6wQ9eUrqwSTD1nAI64OYw5rQQ3ASwQEd6UAl2IFtpuK3J9oMfvAQpbgDbDNb3yuD7co/8XlJ/00MSX6gy+44ALF2o4P0hVLkEcF1DSy5gznpTGSomSW66u2LY89pkRCsnqARkPrA2gc4X/Nx9Kc25CcfFuEkNYNKqgD3VkgC3ISynoG0CWCWHOmiJfWWxCJZDp/RjdjrZvai9uhSAJRVyuBTft+8TzQdOT0pA983As5dI1SSAdXJ9XzuAeetR7kvRYue4jqVJMN9XYCPdbpAu7Jl/HHVMJXukjBbQ6ROpohJ7dvgykJGuRe68PweYm/7n0gBGqtLOiKpOb2gEiySq3CCtJFglR5pzY8oK3pXFCnI43VNX9ZzPe62r+21N7hK+Z2kASw+mnZEIls1lQJQbFtBI4TqA2WV/zxlFfuc9t9pRfQkgPuoalgwwCUawAjDJzY77NFDp+zinuoPURkVLGSJgdjuc5UyEB4B3nIHGoqlo9pealmiIis6WUFWSkvuiVwrxgJ9DtXKApb9j0AafmPs0nXT2UDa7IxjneFsDGMl6fSNaAEayABiA1TkjTmwxcpWj5rBtPjO1rbqyP/xRrdZ0NtF9jGotTUUDKW6SYEfO8EWy0jpQaQ6JTOt84FsYSntEvPTfoJrTYlDy4dqJ3edYoEv9n0sDWBaJ7TVSXJdjdEhtmn3aZwRwv/NIE2/PyBa1bLDHCvD4xj5rR+FF9dg4duEsCWDXInIFWNIrJi3wQSqpXkSJeiaNscWAZo9Jr8CIBAWfme+bPHFqpIE87ey/TyAvDWAqOecH65rDbaJ+ka1UbuRQi+wexJJVWpJ6i4LEU9vsM9vrCBuES600Js6ftpP/Intu7CvRSwOYWwQsQ9owm82objY3G7rZ1xxNo3+VGHZODc+WFqxa4EPqEOkiwWz3dPrZfYlRLw1gVRtcJUMu2N5fEk2S2U4qmS/M/bF7EHhYMqYN5FSD+LzXPuPv6dGRE09UeiTkua9QXNT7FwNwSxkqic1ZhUBij7lLpJlbRFpljEiwdKC8LyKVDeJsNWBTCcJPJrE5dYz9RrY+NQwDm776x9IAFrygWrPZG7jcJrlhkaqc4s31YVedwyu5QH0rueVOUdHZAeH/sLUiX4Bmv33WMwa+uq468xW7NIATuMCESTLiJLKFIYs5J2tEaqUDDWra792LDFM6zgKaygd6+j/TAOw4VZ+DoRfbKfYU6mVpAKt3zmngCFd/xJyfXS+7StXKFhlUdY6qoaox6GSaLAogJxoGVIUBiU9PR82ueXP4ogBudtg1AYokklzZJUCTaJINQMRJQsExrfxcwKUYIJ+PXZZxsjjYd6qc7QVsGn5r7XCWs3tPIYHH/o/FAZwbGscRIMgSosW/5Q8DmZ8r3kw9v6dJ8FUf5z6IMY5jdkqQYIsjTUpznq8giQM0VlvWs2SAgYMRCz+qi86Zvnxj0odgIVrcpZwHSBqvwGqniubk0JT89MfPCnooBlht+HLJAIcwZRO44AdVLYzpIdABXM9cJ1L9WK9uZ2co5Ti7a8fOrhlck7RkgBGunP/H3SHF2eGPGacOWhCDTTY+PwxDelAea75W8fklA+zaspWUPRapEtnKPqW4TMKPWLXgxyfvSwBj19W3WIAbo84x6YDGhHM6SlKIiBObmsYrHxmGQfz54dFmYNEAd4w6HXd025FxMrwGNFst/MgWyzABeNEnodzm6rsUgF0nu5v6K74tkAHs90gWNc0OC0Gunh3vukguAuCmrtPegboGtByxQU0DVYRK4btAxur929UBPIty5eDJTREqYcspWrXmEOQqAe5sMvepD0EKbpBa4PYArzYEuSvA/w95qkoPm9Hm3gAAAABJRU5ErkJggg==\") !important;\n" +
"  background-size: 35px !important;\n" +
"}\n" +
"#letyshops-notify .letyshops-notify-content {\n" +
"  width: 250px !important;\n" +
"  height: 70px !important;\n" +
"  float: right;\n" +
"}\n" +
"#letyshops-notify .letyshops-notify-content .letyshops-notify-content-name {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 500 !important;\n" +
"  font-size: 14.5px !important;\n" +
"  line-height: 14.5px !important;\n" +
"  color: #263238 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  width: inherit !important;\n" +
"  height: 24px !important;\n" +
"  display: block !important;\n" +
"  padding: 10px 8px 0 8px !important;\n" +
"  margin: 0 !important;\n" +
"  box-sizing: border-box !important;\n" +
"}\n" +
"#letyshops-notify .letyshops-notify-content .letyshops-notify-content-msg {\n" +
"  font-family: 'Roboto', sans-serif !important;\n" +
"  font-weight: 400 !important;\n" +
"  font-size: 13px !important;\n" +
"  line-height: 14px !important;\n" +
"  color: #263238 !important;\n" +
"  letter-spacing: normal !important;\n" +
"  text-transform: none;\n" +
"  width: inherit !important;\n" +
"  height: 36px !important;\n" +
"  display: block !important;\n" +
"  margin: 0 !important;\n" +
"  padding: 6px 8px 0px 8px !important;\n" +
"  box-sizing: border-box !important;\n" +
"  overflow: hidden;\n" +
"  text-overflow: ellipsis;\n" +
"}\n" +
"#letyshops-notify .letyshops-notify-close {\n" +
"  position: absolute !important;\n" +
"  height: 12px !important;\n" +
"  width: 12px !important;\n" +
"  top: 2px !important;\n" +
"  right: 5px !important;\n" +
"  cursor: pointer !important;\n" +
"}\n" +
"#letyshops-notify .letyshops-notify-close i {\n" +
"  font-family: 'Material Icons';\n" +
"  font-weight: 500 !important;\n" +
"  font-style: normal !important;\n" +
"  font-size: 14px !important;\n" +
"  display: inline-block !important;\n" +
"  line-height: 1 !important;\n" +
"  text-transform: none !important;\n" +
"  letter-spacing: normal !important;\n" +
"  word-wrap: normal !important;\n" +
"  white-space: nowrap !important;\n" +
"  direction: ltr;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  font-feature-settings: 'liga';\n" +
"  color: #77868d !important;\n" +
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
