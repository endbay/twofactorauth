$(".email-button").click(function(){let a=new Map;a.set("de","Unterst\xFCtzung von Zwei-Faktor-Authentifizierung"),a.set("en","Support Two Factor Authentication"),a.set("es","Considere implementar autenticaci\xF3n de doble factor"),a.set("he","\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D1\u05D0\u05D9\u05DE\u05D5\u05EA \u05D3\u05D5-\u05E9\u05DC\u05D1\u05D9"),a.set("it","Suportare l'autenticazione a due fattori"),a.set("ko","2\uB2E8\uACC4 \uC778\uC99D \uC9C0\uC6D0\uC744 \uC694\uCCAD\uD569\uB2C8\uB2E4");let b=$(this).data("lang");a.has(b)||(b="en"),window.open("mailto:"+$(this).data("email")+"?subject="+a.get(b))}),$(".facebook-button").click(function(){const a=`https://facebook.com/${$(this).data("facebook")}`;social_media_notice(a)}),$(".twitter-button").click(function(){const a=twitter_uri($(this).data("lang"),$(this).data("twitter"));social_media_notice(a)});function social_media_notice(a){if("hidden"!==window.localStorage.getItem("social-media-notice")){let b=new bootstrap.Modal($("#social-media-warn"));b.toggle(),$("#social-media-accept").attr("onclick",`window.localStorage.setItem('social-media-notice', 'hidden');window.open('${a}', '_blank');`)}else window.open(a,"_blank")}function twitter_uri(a,b){let c=new Map,d=[];d=[],d.push("Bezpe%C4%8Dnost+je+d%C5%AFle%C5%BEit%C3%A1%2C+%40TWITTERHANDLE.+Byli+bychom+r%C3%A1di%2C+kdybyste+podporovali+dvoufaktorov%C3%A9+ov%C4%9B%C5%99en%C3%AD."),c.set("cs",d),d=[],d.push("Sicherheit+ist+wichtig%2C+%40TWITTERHANDLE.+Bitte+aktiviert+Zwei-Faktor-Authentifizierung+auf+eurer+Webseite."),d.push("Zwei-Faktor-Authentifizierung+ist+ein+wichtiges+Sicherheitsmerkmal.+Bitte+unterst%C3%BCtzt+dies+doch+auch%2C+%40TWITTERHANDLE."),d.push("Wir+w%C3%BCrden+es+sehr+begr%C3%BC%C3%9Fen%2C+wenn+ihr+Zwei-Faktor-Authentifizierung+unterst%C3%BCtzen+w%C3%BCrdet%2C+%40TWITTERHANDLE.+Die+Sicherheit+der+Accounts+wird+dadurch+wesentlich+erh%C3%B6ht."),c.set("de",d),d=[],d.push("Security+is+important%2C+%40TWITTERHANDLE.+We%27d+like+it+if+you+supported+two+factor+authentication."),d.push("Two+factor+authentication+is+an+important+security+feature.+We%27d+like+to+see+it+supported+%40TWITTERHANDLE."),d.push("We%27d+appreciate+it+if+you+could+support+two+factor+authentication+%40TWITTERHANDLE.+It+greatly+improves+account+security."),c.set("en",d),d=[],d.push("La+seguridad+es+importante%2C+%40TWITTERHANDLE.+Nos+gustar%C3%ADa+que+consideren+implementar+autenticaci%C3%B3n+de+doble+factor+%282FA%29."),c.set("es",d),d=[],d.push("La+s%C3%A9curit%C3%A9+est+importante+%40TWITTERHANDLE.+C%27est+pour+quand+la+double+authentification+%282FA%29%3F"),c.set("fr",d),d=[],d.push("%D7%90%D7%91%D7%98%D7%97%D7%AA+%D7%9E%D7%99%D7%93%D7%A2+%D7%94%D7%99%D7%90+%D7%93%D7%91%D7%A8+%D7%97%D7%A9%D7%95%D7%91%2C+%40TWITTERHANDLE.+%D7%9E%D7%AA%D7%99+%D7%AA%D7%AA%D7%9E%D7%9B%D7%95+%D7%91%D7%90%D7%99%D7%9E%D7%95%D7%AA+%D7%93%D7%95-%D7%A9%D7%9C%D7%91%D7%99%3F"),c.set("he",d),d=[],d.push("La+sicurezza+%C3%A8+importante%2C+%40TWITTERHANDLE.+Ci+piacerebbe+che+supportaste+l%27autenticazione+a+due+fattori+%282FA%29."),c.set("it",d),d=[],d.push("%40TWITTERHANDLE%2C+%EB%B3%B4%EC%95%88%EC%9D%80+%EC%A4%91%EC%9A%94%ED%95%A9%EB%8B%88%EB%8B%A4.+%EC%9B%B9+%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90+2%EB%8B%A8%EA%B3%84+%EC%9D%B8%EC%A6%9D%282FA%29%EC%9D%84+%EC%B6%94%EA%B0%80%ED%95%B4+%EC%A3%BC%EC%84%B8%EC%9A%94."),c.set("ko",d),d=[],d.push("A+seguran%C3%A7a+%C3%A9+importante%2C+%40TWITTERHANDLE.+Agradecemos+que+suportasse+a+autentica%C3%A7%C3%A3o+de+dois+fatores+%282FA%29."),c.set("pt",d),d=[],d.push("S%C3%A4kerhet+%C3%A4r+viktigt%2C+%40TWITTERHANDLE.+V%C3%A4nligen+l%C3%A4gg+till+two+factor+authentication+p%C3%A5+er+hemsida."),d.push("%40TWITTERHANDLE+sn%C3%A4lla+l%C3%A4gg+till+tv%C3%A5faktorsautentisering+f%C3%B6r+anv%C3%A4ndare."),c.set("sv",d),c.has(a)&&null!=a||(a="en");const e=Math.floor(Math.random()*c.get(a).length),f=c.get(a)[e].replace("TWITTERHANDLE",b);return`https://twitter.com/intent/tweet?text=${f}&url=${"https%3A%2F%2F2fa.directory"}&hashtags=SupportTwoFactorAuth&related=${"2faorg"}`}