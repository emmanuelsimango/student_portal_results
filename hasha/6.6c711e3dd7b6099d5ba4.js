(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{PTPi:function(t,a,r){"use strict";r.r(a);var s=r("DUip"),e=r("Valr"),n=r("QJY3"),o=r("/ZHs"),i=r("PKNe"),l=r("TYT/"),f=[{path:"auth/:reg/:token",component:function(){function t(t,a,r){this.route=t,this.auth=a,this.router=r,this.serverDetails=new o.a}return t.prototype.ngOnInit=function(){var t=this;this.regNumber=this.route.snapshot.paramMap.get("reg"),this.token=this.route.snapshot.paramMap.get("token"),this.regNumber&&this.token&&(this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/dashboard",this.auth.auth(this.regNumber,this.token).subscribe((function(a){a&&(console.log(t.returnUrl),t.router.navigate([t.returnUrl]))}),(function(t){console.log(t)})))},t.\u0275fac=function(a){return new(a||t)(l.Ob(s.a),l.Ob(i.a),l.Ob(s.b))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-auth"]],decls:10,vars:0,consts:[[1,"d-flex","justify-content-center","align-items-center","flex-column"],[1,"loader"],[1,"loader__bar"],[1,"loader__ball"]],template:function(t,a){1&t&&(l.Tb(0,"div",0),l.Tb(1,"div",1),l.Pb(2,"div",2),l.Pb(3,"div",2),l.Pb(4,"div",2),l.Pb(5,"div",2),l.Pb(6,"div",2),l.Pb(7,"div",3),l.Sb(),l.Tb(8,"h6"),l.Fc(9," Varifying User, Please Wait!! "),l.Sb(),l.Sb())},styles:["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{background:#ea4961;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.loader[_ngcontent-%COMP%]{position:relative;width:75px;height:100px}.loader__bar[_ngcontent-%COMP%]{position:absolute;bottom:0;width:10px;height:50%;background:#24b0ed;-webkit-transform-origin:center bottom;transform-origin:center bottom;box-shadow:1px 1px 0 rgba(0,0,0,.2)}.loader__bar[_ngcontent-%COMP%]:first-child{left:0;-webkit-transform:scaleY(.2);transform:scaleY(.2);-webkit-animation:barUp1 4s infinite;animation:barUp1 4s infinite}.loader__bar[_ngcontent-%COMP%]:nth-child(2){left:15px;-webkit-transform:scaleY(.4);transform:scaleY(.4);-webkit-animation:barUp2 4s infinite;animation:barUp2 4s infinite}.loader__bar[_ngcontent-%COMP%]:nth-child(3){left:30px;-webkit-transform:scaleY(.6);transform:scaleY(.6);-webkit-animation:barUp3 4s infinite;animation:barUp3 4s infinite}.loader__bar[_ngcontent-%COMP%]:nth-child(4){left:45px;-webkit-transform:scaleY(.8);transform:scaleY(.8);-webkit-animation:barUp4 4s infinite;animation:barUp4 4s infinite}.loader__bar[_ngcontent-%COMP%]:nth-child(5){left:60px;-webkit-transform:scale(1);transform:scale(1);-webkit-animation:barUp5 4s infinite;animation:barUp5 4s infinite}.loader__ball[_ngcontent-%COMP%]{position:absolute;bottom:10px;left:0;width:10px;height:10px;background:rgba(202,163,80,.95);border-radius:50%;-webkit-animation:ball 4s infinite;animation:ball 4s infinite}@-webkit-keyframes ball{0%{-webkit-transform:translate(0);transform:translate(0)}5%{-webkit-transform:translate(8px,-14px);transform:translate(8px,-14px)}10%{-webkit-transform:translate(15px,-10px);transform:translate(15px,-10px)}17%{-webkit-transform:translate(23px,-24px);transform:translate(23px,-24px)}20%{-webkit-transform:translate(30px,-20px);transform:translate(30px,-20px)}27%{-webkit-transform:translate(38px,-34px);transform:translate(38px,-34px)}30%{-webkit-transform:translate(45px,-30px);transform:translate(45px,-30px)}37%{-webkit-transform:translate(53px,-44px);transform:translate(53px,-44px)}40%{-webkit-transform:translate(60px,-40px);transform:translate(60px,-40px)}50%{-webkit-transform:translate(60px);transform:translate(60px)}57%{-webkit-transform:translate(53px,-14px);transform:translate(53px,-14px)}60%{-webkit-transform:translate(45px,-10px);transform:translate(45px,-10px)}67%{-webkit-transform:translate(37px,-24px);transform:translate(37px,-24px)}70%{-webkit-transform:translate(30px,-20px);transform:translate(30px,-20px)}77%{-webkit-transform:translate(22px,-34px);transform:translate(22px,-34px)}80%{-webkit-transform:translate(15px,-30px);transform:translate(15px,-30px)}87%{-webkit-transform:translate(7px,-44px);transform:translate(7px,-44px)}90%{-webkit-transform:translateY(-40px);transform:translateY(-40px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes ball{0%{-webkit-transform:translate(0);transform:translate(0)}5%{-webkit-transform:translate(8px,-14px);transform:translate(8px,-14px)}10%{-webkit-transform:translate(15px,-10px);transform:translate(15px,-10px)}17%{-webkit-transform:translate(23px,-24px);transform:translate(23px,-24px)}20%{-webkit-transform:translate(30px,-20px);transform:translate(30px,-20px)}27%{-webkit-transform:translate(38px,-34px);transform:translate(38px,-34px)}30%{-webkit-transform:translate(45px,-30px);transform:translate(45px,-30px)}37%{-webkit-transform:translate(53px,-44px);transform:translate(53px,-44px)}40%{-webkit-transform:translate(60px,-40px);transform:translate(60px,-40px)}50%{-webkit-transform:translate(60px);transform:translate(60px)}57%{-webkit-transform:translate(53px,-14px);transform:translate(53px,-14px)}60%{-webkit-transform:translate(45px,-10px);transform:translate(45px,-10px)}67%{-webkit-transform:translate(37px,-24px);transform:translate(37px,-24px)}70%{-webkit-transform:translate(30px,-20px);transform:translate(30px,-20px)}77%{-webkit-transform:translate(22px,-34px);transform:translate(22px,-34px)}80%{-webkit-transform:translate(15px,-30px);transform:translate(15px,-30px)}87%{-webkit-transform:translate(7px,-44px);transform:translate(7px,-44px)}90%{-webkit-transform:translateY(-40px);transform:translateY(-40px)}to{-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes barUp1{0%{-webkit-transform:scaleY(.2);transform:scaleY(.2)}40%{-webkit-transform:scaleY(.2);transform:scaleY(.2)}50%{-webkit-transform:scale(1);transform:scale(1)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scaleY(.2);transform:scaleY(.2)}}@keyframes barUp1{0%{-webkit-transform:scaleY(.2);transform:scaleY(.2)}40%{-webkit-transform:scaleY(.2);transform:scaleY(.2)}50%{-webkit-transform:scale(1);transform:scale(1)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scaleY(.2);transform:scaleY(.2)}}@-webkit-keyframes barUp2{0%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}50%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}90%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}to{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}@keyframes barUp2{0%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}50%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}90%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}to{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}@-webkit-keyframes barUp3{0%{-webkit-transform:scaleY(.6);transform:scaleY(.6)}to{-webkit-transform:scaleY(.6);transform:scaleY(.6)}}@keyframes barUp3{0%{-webkit-transform:scaleY(.6);transform:scaleY(.6)}to{-webkit-transform:scaleY(.6);transform:scaleY(.6)}}@-webkit-keyframes barUp4{0%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}40%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}90%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}to{-webkit-transform:scaleY(.8);transform:scaleY(.8)}}@keyframes barUp4{0%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}40%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}90%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}to{-webkit-transform:scaleY(.8);transform:scaleY(.8)}}@-webkit-keyframes barUp5{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scaleY(.2);transform:scaleY(.2)}90%{-webkit-transform:scaleY(.2);transform:scaleY(.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes barUp5{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scaleY(.2);transform:scaleY(.2)}90%{-webkit-transform:scaleY(.2);transform:scaleY(.2)}to{-webkit-transform:scale(1);transform:scale(1)}}"]}),t}()}],m=r("MnXN"),p=r("cUzu");r.d(a,"AuthLayoutModule",(function(){return b}));var b=function(){function t(){}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(a){return new(a||t)},imports:[[e.b,s.f.forChild(f),n.a,p.b,m.i]]}),t}()}}]);