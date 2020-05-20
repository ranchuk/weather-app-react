(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[4,5],{163:function(n,e,t){"use strict";t.r(e);var r=t(27),a=t(0),i=t.n(a),c=t(26),o=t(28),u=t(65),l=t(66),m=t(159),f=t.n(m),d=t(161),s=t.n(d);function p(){var n=Object(r.a)(["\n    display:flex;\n    font-size: 6rem;\n    font-weight: 400;\n    letter-spacing: 0.5rem;\n    margin-bottom: 2rem;\n\n    @media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) { \n                font-size: 3rem;\n    }\n"]);return p=function(){return n},n}function v(){var n=Object(r.a)(["\n    position:relative;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    color:#ffffff;\n    animation-name: fadeIn;\n    animation-duration: 2s;\n    animation-timing-function: ease-out;\n    z-index: 1;\n    @keyframes fadeIn {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n"]);return v=function(){return n},n}function b(){var n=Object(r.a)(["\n    text-transform: uppercase;\n    display: block;\n    margin-right: 3rem;\n    @media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) { \n                margin-right: 1rem;\n    }\n"]);return b=function(){return n},n}function h(){var n=Object(r.a)(["\n    text-transform: uppercase;\n    font-size: 3rem;\n    letter-spacing: 0.2rem;\n\n    @media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) { \n                font-size: 2rem;\n    }\n"]);return h=function(){return n},n}function x(){var n=Object(r.a)(["\nwidth:10rem;\n@media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) { \n                width:7rem;\n    }\n"]);return x=function(){return n},n}function g(){var n=Object(r.a)(["\ndisplay:flex;\nalign-items:center;\njustify-content: space-between;\nfont-size:4rem;\ntransform:translateX(5%);\n"]);return g=function(){return n},n}function y(){var n=Object(r.a)(["\nfont-size:4rem;\nposition: absolute;\nborder-radius:1rem;\nwidth: 10rem ;\nheight:5rem;\nbackground-color:#ffffff;\ntransition: all .4s ease-in-out;\nanimation: mymove 3s infinite;\ntop:50%;\n\n&:hover {\n    transform: scale(1.1);\n    left: 0rem;\n}\ncursor: pointer;\n@media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) { \n                top:150%;\n    }\n@keyframes mymove {\n        0% {\n            left:-7rem;\n        }\n        50% {\n            left: -4rem;\n        }\n        100% {\n            left:-7rem;\n        }\n}\n"]);return y=function(){return n},n}function j(){var n=Object(r.a)(["\n    position:absolute;\n    display:inline-block;\n    right: 0px;\n    top:50%;\n    display:flex;\n    align-items:center;\n    transform:translateY(-50%);\n"]);return j=function(){return n},n}var w=function(n){var e=n.currentCity,t=n.favorites,r=Object(c.b)(),a=Object(c.c)(function(n){return n.degreeType.isCelsius}),o=e&&t.length>0&&t.find(function(n){return n.cityInfo.Key===e.cityInfo.Key}),m=function(){r(o?Object(u.a)(e,!1):Object(u.a)(e,!0))};return i.a.createElement(C,null,i.a.createElement(T,null,i.a.createElement(I,null,e&&e.cityInfo&&e.cityInfo.LocalizedName),a&&i.a.createElement("div",null,Math.round(e.todayWeather.Temperature.Metric.Value),"\xb0C"),!a&&i.a.createElement("div",null,Object(l.b)(e.todayWeather.Temperature.Metric.Value),"\xb0F")),i.a.createElement(O,null,i.a.createElement(E,null,o?i.a.createElement(f.a,{onClick:function(){return m()},color:"secondary",fontSize:"inherit"}):i.a.createElement(s.a,{onClick:function(){return m()},color:"secondary",fontSize:"inherit"}))),i.a.createElement(k,null,i.a.createElement(W,null,e.todayWeather.WeatherText),i.a.createElement(z,{src:"https://developer.accuweather.com/sites/default/files/".concat(e.todayWeather.WeatherIcon<10?"0"+e.todayWeather.WeatherIcon:e.todayWeather.WeatherIcon,"-s.png"),alt:"icon"})))},E=o.a.span(j()),O=o.a.div(y()),k=o.a.div(g()),z=o.a.img(x()),W=o.a.span(h()),I=o.a.span(b()),C=o.a.div(v()),T=o.a.div(p()),M=t(162),S=t.n(M);function V(){var n=Object(r.a)(["\nmargin-bottom:1rem;\nfont-size: 2.5rem;\nfont-weight: 600;\n"]);return V=function(){return n},n}function F(){var n=Object(r.a)(["\n    margin-bottom:1rem;\n    display:flex;\n    justify-content:center;\n    align-items: center;\n"]);return F=function(){return n},n}function D(){var n=Object(r.a)(["        \n    padding: 2.5rem;\n    text-align:center;\n    font-size: 1.8rem;\n    height:15rem;\n    background-color:#ffffff;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n    flex-grow:1;\n    min-width:15rem;\n    width: 20%;\n    margin-right:2rem;\n    border-radius: 2rem;\n    /* letter-spacing: 0.1rem; */\n    font-weight: 400;\n"]);return D=function(){return n},n}function L(){var n=Object(r.a)(["\n\n        display: flex;\n        justify-content: space-between;\n        /* margin-top:10rem; */\n        @media screen \n        and (max-device-width: 1049px) \n        and (-webkit-min-device-pixel-ratio: 1) { \n            overflow:scroll;\n            padding:1.5rem;\n        }\n"]);return L=function(){return n},n}function N(){var n=Object(r.a)(["\nposition: absolute;\nleft: 50%;\ntransform: translateX(-50%);\nwidth: 100%;\npadding: 2rem;\nz-index: 1;\nbottom: 0px;\nanimation-name: fadeIn;\nanimation-duration: 2s;\n/* animation-timing-function: ease-out; */\n@media screen \n        and (max-device-width: 580px) \n        and (-webkit-min-device-pixel-ratio: 1) { \n        }\n@media screen \n        and (min-device-width: 1049px) \n        and (-webkit-min-device-pixel-ratio: 1) { \n            /* bottom: 0px; */\n        }\n    @keyframes fadeIn {\n        0% {\n            bottom: -10%;\n            opacity: 0;\n        }\n        100% {\n            bottom: 0px;\n            opacity: 1;\n        }\n    }\n\n"]);return N=function(){return n},n}function X(){var n=Object(r.a)(["\n"]);return X=function(){return n},n}function A(){var n=Object(r.a)(["\nmargin-right:0.5rem;\n"]);return A=function(){return n},n}var H=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],J=function(n){var e=n.currentCity,t=Object(c.c)(function(n){return n.degreeType.isCelsius});return i.a.createElement(P,null,i.a.createElement(R,null,e&&e.fiveDayaWeather&&e.fiveDayaWeather.DailyForecasts.map(function(n,e){return i.a.createElement(Y,{key:e},i.a.createElement(B,null,H[new Date(S()(n.Date)).getDay()]),i.a.createElement(q,null,i.a.createElement(K,null,"Max:"),t&&i.a.createElement(_,null,Object(l.a)(n.Temperature.Maximum.Value),"\xb0C"),!t&&i.a.createElement(_,null,n.Temperature.Maximum.Value,"\xb0F")),i.a.createElement(q,null,i.a.createElement(K,null,"Min:"),t&&i.a.createElement(_,null,Object(l.a)(n.Temperature.Minimum.Value),"\xb0C"),!t&&i.a.createElement(_,null,n.Temperature.Minimum.Value,"\xb0F")))})))},K=o.a.div(A()),_=o.a.div(X()),P=o.a.div(N()),R=o.a.div(L()),Y=o.a.div(D()),q=o.a.div(F()),B=o.a.div(V());function G(){var n=Object(r.a)(["\n    margin-top:5rem;\n    @media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) {     \n            margin-top:10rem;\n    }\n"]);return G=function(){return n},n}var Q=function(){Object(c.b)();var n=Object(c.c)(function(n){return n.currentCity}).data,e=Object(c.c)(function(n){return n.favorites.data});return i.a.createElement(U,null,i.a.createElement(w,{currentCity:n,favorites:e}),i.a.createElement(J,{currentCity:n}))},U=o.a.div(G()),Z=t(155);function $(){var n=Object(r.a)(["\nmargin-top:1rem;\ncolor:#ffffff;\nfont-size:3rem;\n    @media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) { \n                font-size:2rem;\n    }\n"]);return $=function(){return n},n}function nn(){var n=Object(r.a)(["\n    position: absolute;\n    left:50%;\n    top:50%;\n    transform: translate(-50%,-50%);\n    text-align:center;\n    color:#ffffff;\n"]);return nn=function(){return n},n}function en(){var n=Object(r.a)(["\n/* text-align:center; */\n"]);return en=function(){return n},n}t.d(e,"SpinnerWrapper",function(){return rn}),t.d(e,"SpinnerText",function(){return an});e.default=function(){var n=Object(c.c)(function(n){return n.currentCity});return i.a.createElement(tn,null,n.loading||null===n.data?i.a.createElement(rn,null,i.a.createElement(Z.a,{color:"inherit",size:"6rem"}),i.a.createElement(an,null,"Loading weather data...")):i.a.createElement(Q,null))};var tn=o.a.div(en()),rn=o.a.div(nn()),an=o.a.div($())},165:function(n,e,t){"use strict";var r=t(158);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(t(0)),i=(0,r(t(160)).default)(a.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.default=i},166:function(n,e,t){"use strict";t.r(e),t.d(e,"ImageAndStatus",function(){return W}),t.d(e,"Image",function(){return I}),t.d(e,"CityAndTempStyle",function(){return L});var r=t(27),a=t(0),i=t.n(a),c=t(26),o=t(28),u=t(65),l=t(155),m=t(55),f=t(165),d=t.n(f),s=t(47),p=t(66),v=t(163);function b(){var n=Object(r.a)(["\n    display:flex;\n    align-items:center;\n    font-size: 2.5rem;\n    margin-bottom: 1rem;\n    justify-content: space-around;\n\n    @media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) { \n                font-size: 2rem;\n    }\n"]);return b=function(){return n},n}function h(){var n=Object(r.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size:25px;\n"]);return h=function(){return n},n}function x(){var n=Object(r.a)(["\n    display:block;\n"]);return x=function(){return n},n}function g(){var n=Object(r.a)(["\n    cursor:pointer;\n    margin-bottom:30px;\n"]);return g=function(){return n},n}function y(){var n=Object(r.a)(["\n    border:0.1rem solid #ffffff;\n    border-radius: 1.5rem;\n    margin:2rem;\n    text-align:center;\n    padding:2rem;\n    cursor:pointer;\n\n    font-size: 1.4rem;\n    background-color:#ffffff;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n    min-width:15rem;\n    max-width:20rem;\n\n    transition: all .4s ease-in-out;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n"]);return y=function(){return n},n}function j(){var n=Object(r.a)(["\n                font-size: 1.5rem;\n    display:flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content:space-between;\n"]);return j=function(){return n},n}function w(){var n=Object(r.a)(["\ndisplay:inline-block;\nmargin-bottom: 5rem;\ncolor:#ffffff;\n    font-size: 4.5rem;\n    @media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) {     \n            font-size: 3rem;\n            margin-bottom: 3rem;\n\n    }\n"]);return w=function(){return n},n}function E(){var n=Object(r.a)(["\n    margin-top: 0rem;\n    text-align: center;\n"]);return E=function(){return n},n}function O(){var n=Object(r.a)(["\n    color:#ffffff;\n    position: absolute;\n    left:50%;\n    top:50%;\n    transform: translate(-50%,-50%);\n    font-size: 3rem;\n"]);return O=function(){return n},n}function k(){var n=Object(r.a)(["\nwidth:10rem;\n"]);return k=function(){return n},n}function z(){var n=Object(r.a)(["\ndisplay:flex;\nalign-items:center;\njustify-content: space-around;\nfont-size:2.5rem;\ntransform: translateX(5%);\n@media screen \n            and (max-device-width: 580px) \n            and (-webkit-min-device-pixel-ratio: 1) { \n                font-size:2rem;\n    }\n"]);return z=function(){return n},n}e.default=function(n){var e=Object(c.b)(),t=Object(c.c)(function(n){return n.favorites}),r=Object(c.c)(function(n){return n.degreeType.isCelsius});return Object(a.useEffect)(function(){t.data.length>0&&e(Object(u.b)(t.data))},[]),i.a.createElement(T,null,i.a.createElement(M,null,"Favorites"),0===t.data.length?i.a.createElement(C,null,"No Favorites Selected"):t.loading?i.a.createElement(v.SpinnerWrapper,null,i.a.createElement(l.a,{color:"inherit",size:"6rem"}),i.a.createElement(v.SpinnerText,null,"Loading weather data...")):i.a.createElement(S,null,t.data.map(function(t,a){return i.a.createElement(V,{key:a},i.a.createElement(F,{onClick:function(r){e(Object(s.a)(t.cityInfo)),n.history.push("/")}},i.a.createElement(L,null,i.a.createElement(D,null,t.cityInfo.LocalizedName),r&&i.a.createElement("span",null,Math.round(t.todayWeather.Temperature.Metric.Value),"\xb0C"),!r&&i.a.createElement("span",null,Object(p.b)(t.todayWeather.Temperature.Metric.Value),"\xb0F")),i.a.createElement(W,null,i.a.createElement("span",null,t.todayWeather.WeatherText),i.a.createElement(I,{src:"https://developer.accuweather.com/sites/default/files/".concat(t.todayWeather.WeatherIcon<10?"0"+t.todayWeather.WeatherIcon:t.todayWeather.WeatherIcon,"-s.png"),alt:"icon"}))),i.a.createElement(m.a,{onClick:function(n){return e(Object(u.a)(t,!1))},variant:"contained",color:"secondary",fontSize:"inherit",startIcon:i.a.createElement(d.a,null)},i.a.createElement("span",null,"Remove from Favorite")))})))};var W=o.a.div(z()),I=o.a.img(k()),C=o.a.div(O()),T=o.a.div(E()),M=o.a.span(w()),S=o.a.div(j()),V=o.a.div(y()),F=o.a.div(g()),D=o.a.span(x()),L=(o.a.div(h()),o.a.div(b()))}}]);
//# sourceMappingURL=4.51334fea.chunk.js.map