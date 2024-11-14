"use strict";(self.webpackChunkmifosx_web_app=self.webpackChunkmifosx_web_app||[]).push([["src_app_collaterals_collaterals_module_ts"],{19750:(k,h,o)=>{o.r(h),o.d(h,{CollateralsModule:()=>K});var Z=o(36895),T=o(78434),x=o(87734),v=o(33734),u=o(83689),y=o(13450),t=o(94650),U=o(80529);let f=(()=>{class a{constructor(e){this.http=e}getFilteredClients(e,l,r,c,d){let C=(new U.LE).set("displayName",c).set("orphansOnly",r.toString()).set("sortOrder",l).set("orderBy",e);return d&&(C=C.set("officeId",d)),this.http.get("/clients",{params:C})}getClientCollateral(e,l){return this.http.get(`/clients/${e}/collaterals/${l}`)}updateClientCollateral(e,l,r){return this.http.put(`/clients/${e}/collaterals/${l}`,r)}deleteCollateral(e,l){return this.http.delete(`/clients/${e}/collaterals/${l}`)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(U.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var L=o(65412),D=o(92216),m=o(1576),b=o(4859),p=o(73546),i=o(30671),q=o(30998),A=o(49274),O=o(35769),w=o(39122);const M=function(){return["edit"]};function P(a,n){1&a&&(t.TgZ(0,"button",16),t._uU(1,"\n      "),t._UZ(2,"fa-icon",17),t._uU(3),t.ALo(4,"translate"),t.qZA()),2&a&&(t.Q6J("routerLink",t.DdM(4,M)),t.xp6(3),t.hij("\n      ",t.lcZ(4,2,"labels.buttons.Edit"),"\n    "))}function R(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.deleteCollateral())}),t._uU(1,"\n      "),t._UZ(2,"fa-icon",19),t._uU(3),t.ALo(4,"translate"),t.qZA()}2&a&&(t.xp6(3),t.hij("\n      ",t.lcZ(4,1,"labels.buttons.Delete"),"\n    "))}function E(a,n){1&a&&(t.TgZ(0,"th",20),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"labels.inputs.ID")," "))}function I(a,n){if(1&a&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij("\n                ",e.loanId,"\n                ")}}function N(a,n){1&a&&(t.TgZ(0,"th",20),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"labels.inputs.Last Repayment")))}function Y(a,n){if(1&a&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij(" ",e.lastRepayment," ")}}function F(a,n){1&a&&(t.TgZ(0,"th",20),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"labels.inputs.Remaining Amount")," "))}function S(a,n){if(1&a&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"formatNumber"),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.remainingAmount)," ")}}function Q(a,n){1&a&&(t.TgZ(0,"th",20),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"labels.inputs.Last Repayment Date")," "))}function V(a,n){if(1&a&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.lastRepaymentDate)," ")}}function J(a,n){1&a&&t._UZ(0,"tr",22)}function B(a,n){1&a&&t._UZ(0,"tr",23)}let j=(()=>{class a{constructor(e,l,r,c){this.route=e,this.collateralsService=l,this.router=r,this.dialog=c,this.collateralColumns=["ID","Last Repayment","Remaining Amount","Last Repayment Date"],this.route.data.subscribe(d=>{this.clientCollateralData=d.clientCollateralData})}deleteCollateral(){this.dialog.open(y.F,{data:{deleteContext:`collateral ${this.clientCollateralData.id}`}}).afterClosed().subscribe(l=>{l.delete&&this.collateralsService.deleteCollateral(this.clientCollateralData.clientId,this.clientCollateralData.id).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route})})})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(u.gz),t.Y36(f),t.Y36(u.F0),t.Y36(L.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["mifosx-view-collateral"]],decls:78,vars:27,consts:[["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","2%","fxLayout.lt-md","column",1,"container","m-b-20"],["mat-raised-button","","color","primary",3,"routerLink",4,"mifosxHasPermission"],["mat-raised-button","","color","warn",3,"click",4,"mifosxHasPermission"],[1,"client-collateral-card"],[1,"content"],[1,"tab-container","mat-typography"],["fxLayout","row","fxLayoutGap","32px",1,"group-details-container","m-b-30"],["mat-table","",1,"mat-elevation-z1","m-b-30",3,"dataSource"],["matColumnDef","ID"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Last Repayment"],["matColumnDef","Remaining Amount"],["matColumnDef","Last Repayment Date"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-raised-button","","color","primary",3,"routerLink"],["icon","edit",1,"m-r-10"],["mat-raised-button","","color","warn",3,"click"],["icon","trash",1,"m-r-10"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,l){1&e&&(t.TgZ(0,"div",0),t._uU(1,"\n    "),t.YNc(2,P,5,5,"button",1),t._uU(3,"\n    "),t.YNc(4,R,5,3,"button",2),t._uU(5,"\n  "),t.qZA(),t._uU(6,"\n\n"),t.TgZ(7,"mat-card",3),t._uU(8,"\n\n    "),t.TgZ(9,"mat-card-content",4),t._uU(10,"\\\n\n        "),t.TgZ(11,"div",5),t._uU(12,"\n\n            "),t.TgZ(13,"h3"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._uU(16,"\n\n            "),t.TgZ(17,"div",6),t._uU(18,"\n              "),t.TgZ(19,"p"),t._uU(20),t.ALo(21,"translate"),t._UZ(22,"br"),t._uU(23),t.ALo(24,"translate"),t._UZ(25,"br"),t._uU(26),t.ALo(27,"translate"),t._UZ(28,"br"),t._uU(29),t.ALo(30,"translate"),t._UZ(31,"br"),t._uU(32,"\n              "),t.qZA(),t._uU(33,"\n\n            "),t.qZA(),t._uU(34,"\n\n\n            "),t.TgZ(35,"h3"),t._uU(36),t.ALo(37,"translate"),t.qZA(),t._uU(38,"\n\n            "),t.TgZ(39,"table",7),t._uU(40,"\n\n            "),t.ynx(41,8),t._uU(42,"\n                "),t.YNc(43,E,3,3,"th",9),t._uU(44,"\n                "),t.YNc(45,I,2,1,"td",10),t._uU(46,"\n            "),t.BQk(),t._uU(47,"\n\n            "),t.ynx(48,11),t._uU(49,"\n                "),t.YNc(50,N,3,3,"th",9),t._uU(51,"\n                "),t.YNc(52,Y,2,1,"td",10),t._uU(53,"\n            "),t.BQk(),t._uU(54,"\n\n            "),t.ynx(55,12),t._uU(56,"\n                "),t.YNc(57,F,3,3,"th",9),t._uU(58,"\n                "),t.YNc(59,S,3,3,"td",10),t._uU(60,"\n            "),t.BQk(),t._uU(61,"\n\n            "),t.ynx(62,13),t._uU(63,"\n                "),t.YNc(64,Q,3,3,"th",9),t._uU(65,"\n                "),t.YNc(66,V,3,3,"td",10),t._uU(67,"\n\n            "),t.BQk(),t._uU(68,"\n\n            "),t._uU(69,"\n            "),t.YNc(70,J,1,0,"tr",14),t._uU(71,"\n            "),t.YNc(72,B,1,0,"tr",15),t._uU(73,"\n\n            "),t.qZA(),t._uU(74,"\n\n        "),t.qZA(),t._uU(75,"\n\n\n    "),t.qZA(),t._uU(76,"\n\n"),t.qZA(),t._uU(77,"\n")),2&e&&(t.xp6(2),t.Q6J("mifosxHasPermission","UPDATE_CLIENT_COLLATERAL_PRODUCT"),t.xp6(2),t.Q6J("mifosxHasPermission","DELETE_CLIENT_COLLATERAL_PRODUCT"),t.xp6(10),t.Oqu(t.lcZ(15,15,"labels.heading.Client Collateral Details")),t.xp6(6),t.AsE("\n                ",t.lcZ(21,17,"labels.inputs.name"),": ",l.clientCollateralData.name,""),t.xp6(3),t.AsE("\n                ",t.lcZ(24,19,"labels.inputs.Quantity"),": ",l.clientCollateralData.quantity,""),t.xp6(3),t.AsE("\n                ",t.lcZ(27,21,"labels.inputs.Total Value"),": ",l.clientCollateralData.total,""),t.xp6(3),t.AsE("\n                ",t.lcZ(30,23,"labels.inputs.Total Collateral Value"),": ",l.clientCollateralData.totalCollateral,""),t.xp6(7),t.Oqu(t.lcZ(37,25,"labels.heading.Transaction Details")),t.xp6(3),t.Q6J("dataSource",l.clientCollateralData.loanTransactionData),t.xp6(31),t.Q6J("matHeaderRowDef",l.collateralColumns),t.xp6(2),t.Q6J("matRowDefColumns",l.collateralColumns))},dependencies:[u.rH,D.BN,m.xw,m.SQ,m.Wh,b.lW,p.a8,p.dn,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,q.A,A.X$,O.E,w.w],styles:[".client-collateral-card[_ngcontent-%COMP%]{margin:0 auto;max-width:80rem;width:90%;padding:0}.tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   .group-details-container[_ngcontent-%COMP%]{border:1px solid;padding:1%}.tab-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{margin-left:auto}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.select-row[_ngcontent-%COMP%]:hover, .tab-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),a})(),g=(()=>{class a{constructor(e){this.collateralsService=e}resolve(e){const l=e.parent.paramMap.get("clientId"),r=e.parent.paramMap.get("collateralId");return this.collateralsService.getClientCollateral(l,r)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(f))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();var s=o(24006),$=o(99639),_=o(59549),H=o(284);function z(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.TgZ(4,"strong"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t._uU(7,"\n                            "),t.qZA()),2&a&&(t.xp6(1),t.AsE("\n                                ",t.lcZ(2,3,"labels.inputs.Quantity")," ",t.lcZ(3,5,"labels.commons.is")," "),t.xp6(4),t.Oqu(t.lcZ(6,7,"labels.commons.required")))}const G=function(){return["../../"]},X=[{path:"",data:{title:"Collateral",breadcrumb:"Collateral",routeParamBreadcrumb:!1},children:[{path:":collateralId",data:{title:"Collateral View",routeParamBreadcrumb:"collateralId"},children:[{path:"",component:j,resolve:{clientCollateralData:g}},{path:"edit",data:{title:"edit",routeParamBreadcrumb:"edit"},component:(()=>{class a{constructor(e,l,r,c,d){this.formBuilder=e,this.route=l,this.router=r,this.settingsService=c,this.collateralService=d,this.route.data.subscribe(C=>{this.collateralDetails=C.clientCollateralData}),this.clientId=this.route.parent.snapshot.params.clientId}ngOnInit(){this.createClientCollateralForm()}createClientCollateralForm(){this.clientCollateralForm=this.formBuilder.group({quantity:["",s.kI.required],name:[{value:"",disabled:!0}],total:[{value:"",disabled:!0}],totalCollateral:[{value:"",disabled:!0}]}),this.clientCollateralForm.patchValue({name:this.collateralDetails.name,quantity:this.collateralDetails.quantity,total:this.collateralDetails.total,totalCollateral:this.collateralDetails.totalCollateral})}submit(){this.collateralService.updateClientCollateral(this.clientId,this.collateralDetails.id,{quantity:this.clientCollateralForm.value.quantity,locale:this.settingsService.language.code}).subscribe(()=>{this.router.navigate(["../"],{relativeTo:this.route})})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(s.QS),t.Y36(u.gz),t.Y36(u.F0),t.Y36($.g),t.Y36(f))},a.\u0275cmp=t.Xpm({type:a,selectors:[["mifosx-edit-collateral"]],decls:66,vars:23,consts:[[1,"container"],[3,"formGroup","ngSubmit"],["fxLayout","column"],["matInput","","required","","formControlName","name"],["matInput","","required","","formControlName","quantity"],[4,"ngIf"],["matInput","","required","","formControlName","total"],["matInput","","required","","formControlName","totalCollateral"],["fxLayoutGap","5px","fxLayout","row","fsLayout.xs","column","fxLayoutAlign","center"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0),t._uU(1,"\n\n    "),t.TgZ(2,"mat-card"),t._uU(3,"\n\n        "),t.TgZ(4,"form",1),t.NdJ("ngSubmit",function(){return l.submit()}),t._uU(5,"\n\n            "),t.TgZ(6,"mat-card-content"),t._uU(7,"\n\n                "),t.TgZ(8,"div",2),t._uU(9,"\n                    \n                    "),t.TgZ(10,"div",2),t._uU(11,"\n\n                        "),t.TgZ(12,"mat-form-field"),t._uU(13,"\n                            "),t.TgZ(14,"mat-label"),t._uU(15),t.ALo(16,"translate"),t.qZA(),t._uU(17,"\n                            "),t._UZ(18,"input",3),t._uU(19,"\n                        "),t.qZA(),t._uU(20,"\n\n                        "),t.TgZ(21,"mat-form-field"),t._uU(22,"\n                            "),t.TgZ(23,"mat-label"),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._uU(26,"\n                            "),t._UZ(27,"input",4),t._uU(28,"\n                            "),t.YNc(29,z,8,9,"mat-error",5),t._uU(30,"\n                        "),t.qZA(),t._uU(31,"\n\n                        "),t.TgZ(32,"mat-form-field"),t._uU(33,"\n                            "),t.TgZ(34,"mat-label"),t._uU(35),t.ALo(36,"translate"),t.qZA(),t._uU(37,"\n                            "),t._UZ(38,"input",6),t._uU(39,"\n                        "),t.qZA(),t._uU(40,"\n\n                        "),t.TgZ(41,"mat-form-field"),t._uU(42,"\n                            "),t.TgZ(43,"mat-label"),t._uU(44),t.ALo(45,"translate"),t.qZA(),t._uU(46,"\n                            "),t._UZ(47,"input",7),t._uU(48,"\n                        "),t.qZA(),t._uU(49,"\n\n                    "),t.qZA(),t._uU(50,"\n\n                "),t.qZA(),t._uU(51,"\n\n            "),t.qZA(),t._uU(52,"\n\n            "),t.TgZ(53,"mat-card-actions",8),t._uU(54,"\n                "),t.TgZ(55,"button",9),t._uU(56),t.ALo(57,"translate"),t.qZA(),t._uU(58,"\n                "),t.TgZ(59,"button",10),t._uU(60),t.ALo(61,"translate"),t.qZA(),t._uU(62," \n            "),t.qZA(),t._uU(63,"\n\n        "),t.qZA(),t._uU(64,"\n    \n    "),t.qZA(),t._uU(65,"\n\n"),t.qZA()),2&e&&(t.xp6(4),t.Q6J("formGroup",l.clientCollateralForm),t.xp6(11),t.Oqu(t.lcZ(16,10,"labels.inputs.name")),t.xp6(9),t.Oqu(t.lcZ(25,12,"labels.inputs.Quantity")),t.xp6(5),t.Q6J("ngIf",l.clientCollateralForm.controls.quantity.hasError("required")),t.xp6(6),t.Oqu(t.lcZ(36,14,"labels.inputs.Total")),t.xp6(9),t.Oqu(t.lcZ(45,16,"labels.inputs.Total Collateral Value")),t.xp6(11),t.Q6J("routerLink",t.DdM(22,G)),t.xp6(1),t.Oqu(t.lcZ(57,18,"labels.buttons.Cancel")),t.xp6(3),t.Q6J("disabled",!l.clientCollateralForm.valid),t.xp6(1),t.Oqu(t.lcZ(61,20,"labels.buttons.Submit")))},dependencies:[Z.O5,u.rH,m.xw,m.SQ,m.Wh,b.lW,p.a8,p.dn,p.hq,_.TO,_.KE,_.hX,H.Nt,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,A.X$],styles:[".container[_ngcontent-%COMP%]{width:37rem}"]}),a})(),resolve:{clientCollateralData:g}}]}]}];let W=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[g],imports:[u.Bz.forChild(X),u.Bz]}),a})(),K=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[Z.ez,W,x.m,T.o,v.D]}),a})()}}]);