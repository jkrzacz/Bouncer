"use strict";(self.webpackChunkClientAppRCP=self.webpackChunkClientAppRCP||[]).push([[58],{4058:(x,r,e)=>{e.r(r),e.d(r,{HomeModule:()=>O});var c=e(9808),g=e(7512),m=e(1759),d=e(1009),p=e(2367),n=e(4893),u=e(1672),l=e(5925),h=e(7497);function f(t,a){if(1&t&&n._UZ(0,"app-home-card",13),2&t){const o=n.oxw();n.s9C("title",o.formatMessage("Settings")),n.s9C("description",o.formatMessage("RCPDesc"))}}function b(t,a){if(1&t&&n._UZ(0,"app-home-card",14),2&t){const o=n.oxw();n.Q6J("title",o.formatMessage("LeavingHall"))("description",o.formatMessage("LeavingHallDescription"))}}function C(t,a){if(1&t&&n._UZ(0,"app-home-card",15),2&t){const o=n.oxw();n.Q6J("title",o.formatMessage("HistoryLeavingHall"))("description",o.formatMessage("ReportHistoryLeavingHallDuringWorkDesc"))}}let v=(()=>{class t{constructor(o,i){this.authService=o,this.permissionStorage=i,this.formatMessage=d.wv,this.permissionOption=p.U}ngOnInit(){this.user=this.authService.GetUserSession()}isAdmin(){return 1===Number(this.user.role)}isPermission(o){return this.permissionStorage.checkPermission(o)}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(u.e),n.Y36(l.L))},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],decls:19,vars:8,consts:[[1,"page"],[1,"card"],[1,"text-center",2,"margin-top","20px"],["src","./assets/images/color-image/time.png","width","40%"],[1,"text-container"],[2,"margin-top","20px"],[1,"row","justify-content-center"],["imageSrc","./assets/images/color-image/icons8-user-settings-64.png","navigation","/app-profile",3,"title","description"],["imageSrc","./assets/images/color-image/icons8-time-is-money-64.png","title","Bouncer","navigation","/work-time",3,"description"],["imageSrc","./assets/images/color-image/icons8-settings-64.png","navigation","/settings",3,"title","description",4,"ngIf"],["imageSrc","./assets/images/color-image/icons8-leave-64.png","navigation","/workstation-checkin/workstation-checkin",3,"title","description",4,"ngIf"],["imageSrc","./assets/images/color-image/icons8-schedule-64.png","navigation","/workstation-checkin/workstation-checkin-report",3,"title","description",4,"ngIf"],[1,"separator"],["imageSrc","./assets/images/color-image/icons8-settings-64.png","navigation","/settings",3,"title","description"],["imageSrc","./assets/images/color-image/icons8-leave-64.png","navigation","/workstation-checkin/workstation-checkin",3,"title","description"],["imageSrc","./assets/images/color-image/icons8-schedule-64.png","navigation","/workstation-checkin/workstation-checkin-report",3,"title","description"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"h2"),n.TgZ(3,"b"),n._uU(4),n.qZA(),n.qZA(),n.TgZ(5,"h3"),n.TgZ(6,"b"),n._uU(7),n.qZA(),n.qZA(),n.TgZ(8,"div",2),n._UZ(9,"img",3),n.qZA(),n.TgZ(10,"div",4),n._UZ(11,"h6",5),n.qZA(),n.TgZ(12,"div",6),n._UZ(13,"app-home-card",7),n._UZ(14,"app-home-card",8),n.YNc(15,f,1,2,"app-home-card",9),n.YNc(16,b,1,2,"app-home-card",10),n.YNc(17,C,1,2,"app-home-card",11),n.qZA(),n._UZ(18,"div",12),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.hij(" ",i.formatMessage("Home"),""),n.xp6(3),n.Oqu(i.formatMessage("AiutApp")),n.xp6(6),n.s9C("title",i.formatMessage("Profile")),n.s9C("description",i.formatMessage("ProfileDesc")),n.xp6(1),n.s9C("description",i.formatMessage("RCPDesc")),n.xp6(1),n.Q6J("ngIf",i.isAdmin()),n.xp6(1),n.Q6J("ngIf",i.isPermission(i.permissionOption.ViewCurrentExitHall)),n.xp6(1),n.Q6J("ngIf",i.isPermission(i.permissionOption.ViewWorkstationCheckinReport)))},directives:[h.x,c.O5],styles:[".page[_ngcontent-%COMP%]{width:100%;height:100%}.card[_ngcontent-%COMP%]{border-radius:5px;border:none;width:auto;height:50%;padding:10px;background:white;box-shadow:0 8px 15px #666;margin:10px}hr[_ngcontent-%COMP%]{size:2;border-radius:2;width:99%}button[_ngcontent-%COMP%], dx-button[_ngcontent-%COMP%]{border-radius:5px;border:none;background:#337ab7;color:#fff;box-shadow:0 8px 15px #666}.btn-succ[_ngcontent-%COMP%]{background:#5cb85c}.btn-dang[_ngcontent-%COMP%]{background:#d9534f}.btn-war[_ngcontent-%COMP%]{background:#f0ad4e}.btn-second[_ngcontent-%COMP%]{background:#919191}button[_ngcontent-%COMP%]:hover{background:#296293;color:#fff;border:none}button[_ngcontent-%COMP%]:active{background:#193d5b;color:#fff;border:none}dx-button[_ngcontent-%COMP%]:hover{background:#296293;color:#fff;border:none}dx-button[_ngcontent-%COMP%]:active{background:#193d5b;color:#fff;border:none}dx-button[_ngcontent-%COMP%]:focus{background:#337ab7;color:#fff;border:none;outline:none!important}.btn-succ[_ngcontent-%COMP%]:hover{background:#4aab4a}.btn-dang[_ngcontent-%COMP%]:hover{background:#d43a36}.btn-war[_ngcontent-%COMP%]:hover{background:#eea032}.btn-second[_ngcontent-%COMP%]:hover{background:#828282}.btn-succ[_ngcontent-%COMP%]:active{background:#3d8b3d}.btn-dang[_ngcontent-%COMP%]:active{background:#b52b27}.btn-war[_ngcontent-%COMP%]:active{background:#df8a13}.btn-second[_ngcontent-%COMP%]:active{background:#6b6b6b}.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active:focus, .btn.active[_ngcontent-%COMP%]:focus, .btn.focus[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:active.focus, .btn.active.focus[_ngcontent-%COMP%]{outline:none!important}#button-home[_ngcontent-%COMP%]{text-align:right;margin-right:1%;margin-top:40px}.unclickable[_ngcontent-%COMP%]{box-shadow:0 0 5px -2px #000!important;background-color:#fff!important;color:#000000de!important}.unclickable[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:invert(75%)}.card[_ngcontent-%COMP%]{border-radius:5px;border:none;width:auto;height:50%;padding:10px;background:white;align-items:center;box-shadow:0 8px 15px #666;margin:10px}.text-container[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.separator[_ngcontent-%COMP%]{margin-top:100px}"]}),t})();var s=e(7440);const M=[{path:"",component:v,canActivate:[m.PP]}];let P=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.ez,P,g.t]]}),t})()}}]);