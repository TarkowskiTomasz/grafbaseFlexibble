"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[855],{7003:(v,f,s)=>{s.d(f,{H:()=>I});var t=s(5e3),e=s(3075);const d=a=>p=>a.required&&!p.value||Array.isArray(p.value)&&0===p.value.length?{required:!0}:Array.isArray(p.value)?a.invalidValues&&a.invalidValues.length&&p.value.some(o=>a.invalidValues.includes(o))?{appInvalidValues:a.invalidValuesMsg}:null:a.invalidValues&&a.invalidValues.length&&a.invalidValues.includes(p.value)?{appInvalidValues:a.invalidValuesMsg}:null;var u=s(2374),c=s(8054),r=s(9808),_=s(6042),h=s(2643),g=s(2683),A=s(1062),C=s(83);const Z=["select"];function T(a,p){if(1&a&&(t._UZ(0,"nz-option",6),t.ALo(1,"translate"),t.ALo(2,"translate"),t.ALo(3,"toUnit")),2&a){const o=p.$implicit;t.Q6J("nzValue",o.id)("nzLabel",t.lcZ(1,2,o.text||o.name||"")+(o.additional_text?" "+t.lcZ(2,4,o.additional_text):"")+(o.unit?" "+t.lcZ(3,6,o.unit):""))}}function V(a,p){if(1&a){const o=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"button",8),t.NdJ("click",function(){return t.CHM(o),t.oxw().selectAll()}),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"button",9),t.NdJ("click",function(){return t.CHM(o),t.oxw().unselectAll()}),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.qZA()}2&a&&(t.xp6(2),t.hij(" ",t.lcZ(3,2,"SELECT_ALL")," "),t.xp6(3),t.hij(" ",t.lcZ(6,4,"UNSELECT_ALL")," "))}function x(a,p){if(1&a){const o=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"input",10,11),t.NdJ("keydown.enter",function(){t.CHM(o);const l=t.MAs(2);return t.oxw().addItem(l)}),t.qZA(),t.TgZ(3,"button",12),t.NdJ("click",function(){t.CHM(o);const l=t.MAs(2);return t.oxw().addItem(l)}),t._UZ(4,"i",13),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.qZA()}2&a&&(t.xp6(5),t.hij(" ",t.lcZ(6,1,"ADD")," "))}function y(a){return a}let I=(()=>{class a{constructor(){this.cl="app-select",this.modelChange=new t.vpe,this.callbackChange=new t.vpe,this.showSearch=!0,this.disabled=!1,this.clearable=!1,this.multiple=!1,this.add=!1,this.inputId="",this.small=!1,this.placeholder="",this._validators={required:!1,invalidValues:null,invalidValuesMsg:""},this.noItemsKey="NO_ITEMS_FOUND",this.open=!1}set validators(o){this._validators=o,this.select&&this.select.control&&this._validators.invalidValues&&(this.select.control.setValidators([d(this._validators)]),this.select.control.updateValueAndValidity())}ngOnInit(){setTimeout(()=>{this.select&&this.select.control&&this._validators.invalidValues&&(this.select.control.setValidators([d(this._validators)]),this.select.control.updateValueAndValidity())})}change(){this.modelChange.emit(this.model),this.callbackChange&&this.callbackChange.next(null)}addItem(o){const n=o.value;!n||this.options.some(l=>l.id===n)||(this.options.push({id:n,text:n}),this.model=n,this.change(),this.open=!1)}selectAll(){this.model=this.options.map(o=>o.id),this.change()}unselectAll(){this.model=[],this.change()}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-select"]],viewQuery:function(o,n){if(1&o&&t.Gf(Z,5),2&o){let l;t.iGM(l=t.CRH())&&(n.select=l.first)}},hostVars:1,hostBindings:function(o,n){2&o&&t.uIk("class",n.cl)},inputs:{model:"model",options:"options",showSearch:"showSearch",disabled:"disabled",clearable:"clearable",multiple:"multiple",add:"add",inputId:"inputId",small:"small",placeholder:"placeholder",validators:"validators",inputClass:"inputClass",noItemsKey:"noItemsKey"},outputs:{modelChange:"modelChange",callbackChange:"callbackChange"},features:[t._Bn([],[{provide:e.gN,useFactory:y,deps:[[new t.FiY,e.F]]}])],decls:9,vars:20,consts:[[3,"field"],[3,"id","nzDropdownClassName","nzOptionHeightPx","nzShowSearch","nzOpen","nzNotFoundContent","ngClass","ngModel","name","nzAllowClear","nzMode","nzShowArrow","required","disabled","nzDropdownRender","nzPlaceHolder","nzOpenChange","ngModelChange"],["select","ngModel"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["multipleTemplate",""],["addTemplate",""],[3,"nzValue","nzLabel"],[1,"select-add-container"],["nz-button","","id","select_all_button",3,"click"],["nz-button","","id","unselect_all_button",3,"click"],["type","text","maxlength","128",3,"keydown.enter"],["inputElement",""],["nz-button","",3,"click"],[1,"icon_abb_16","icon-abb_plus_16"]],template:function(o,n){if(1&o&&(t.TgZ(0,"app-validate",0),t.TgZ(1,"nz-select",1,2),t.NdJ("nzOpenChange",function(i){return n.open=i})("ngModelChange",function(i){return n.model=i})("ngModelChange",function(){return n.change()}),t.ALo(3,"translate"),t.YNc(4,T,4,8,"nz-option",3),t.qZA(),t.YNc(5,V,7,6,"ng-template",null,4,t.W1O),t.YNc(7,x,7,3,"ng-template",null,5,t.W1O),t.qZA()),2&o){const l=t.MAs(2),i=t.MAs(6),m=t.MAs(8);t.Q6J("field",l),t.xp6(1),t.s9C("id",n.inputId),t.s9C("name",n.inputId),t.Q6J("nzDropdownClassName",n.small?"small-dropdown":"")("nzOptionHeightPx",n.small?24:32)("nzShowSearch",n.showSearch)("nzOpen",n.open)("nzNotFoundContent",t.lcZ(3,18,n.noItemsKey))("ngClass",n.inputClass)("ngModel",n.model)("nzAllowClear",!!n.clearable)("nzMode",n.multiple?"multiple":"default")("nzShowArrow",!0)("required",!!n._validators.required)("disabled",n.disabled)("nzDropdownRender",n.add?m:n.multiple?i:null)("nzPlaceHolder",n.placeholder),t.xp6(3),t.Q6J("ngForOf",n.options)}},directives:[u.P,c.Vq,r.mk,e.JJ,e.On,e.Q7,r.sg,c.Ip,_.ix,h.dQ,g.w],pipes:[A.X$,C.Z],styles:[".select-add-container[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.06);margin-top:5px;padding:10px;display:flex;flex-direction:row}.select-add-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:150px;margin-right:10px}"]}),a})()},2966:(v,f,s)=>{s.d(f,{_:()=>d});var t=s(5e3),e=s(9783);let d=(()=>{class u{constructor(r){this.messageService=r}success(r,_){this.showToast(r,"success",_)}info(r,_){this.showToast(r,"info",_)}warning(r,_){this.showToast(r,"warn",_)}error(r,_){this.showToast(r,"error",_)}showToast(r,_,h=!1){this.messageService.add({severity:_,detail:r,sticky:h})}clear(){this.messageService.clear()}}return u.\u0275fac=function(r){return new(r||u)(t.LFG(e.ez))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},2374:(v,f,s)=>{s.d(f,{P:()=>o});var t=s(1777),e=s(5e3),d=s(9808),u=s(1062);let c=(()=>{class n{transform(i){const m=Object.keys(i);return m&&m.length>0?m[0]:null}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275pipe=e.Yjl({name:"firstKey",type:n,pure:!0}),n})();function r(n,l){1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&n&&(e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",e.lcZ(3,2,"VALIDATE_REQUIRED")," "))}const _=function(n){return{number:n}};function h(n,l){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e.TgZ(2,"span",4),e._uU(3,"VALIDATE_MINIMUM_CHARACTERS"),e.qZA(),e.qZA()),2&n){const i=e.oxw(2);e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.Q6J("translateParams",e.VKq(2,_,i.field.errors.minlength.requiredLength))}}function g(n,l){1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&n&&(e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",e.lcZ(3,2,"VALIDATE_NEW_PASSWORD")," "))}function A(n,l){1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&n&&(e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",e.lcZ(3,2,"VALIDATE_PASSWORD_MATCH")," "))}function C(n,l){1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&n&&(e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",e.lcZ(3,2,"VALIDATE_IP")," "))}function Z(n,l){1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&n&&(e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",e.lcZ(3,2,"VALIDATE_IP_DOMAIN")," "))}function T(n,l){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e._uU(2),e.qZA()),2&n){const i=e.oxw(2);e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",i.field.errors.appValidValues," ")}}function V(n,l){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e._uU(2),e.qZA()),2&n){const i=e.oxw(2);e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",i.field.errors.appInvalidValues," ")}}function x(n,l){1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&n&&(e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",e.lcZ(3,2,"VALIDATE_UNIQUE")," "))}function y(n,l){1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",3),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&n&&(e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",e.lcZ(3,2,"VALIDATE_HEX")," "))}function I(n,l){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"span",5),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&n){const i=e.oxw(2);e.Q6J("@showErrorAnimation",void 0),e.xp6(2),e.hij("",e.xi3(3,2,"VALIDATE_LENGTH",e.VKq(5,_,i.field.errors.validLength))," ")}}function a(n,l){if(1&n&&(e.TgZ(0,"div",1),e.YNc(1,r,4,4,"div",2),e.ALo(2,"firstKey"),e.YNc(3,h,4,4,"div",2),e.ALo(4,"firstKey"),e.YNc(5,g,4,4,"div",2),e.ALo(6,"firstKey"),e.YNc(7,A,4,4,"div",2),e.ALo(8,"firstKey"),e.YNc(9,C,4,4,"div",2),e.ALo(10,"firstKey"),e.YNc(11,Z,4,4,"div",2),e.ALo(12,"firstKey"),e.YNc(13,T,3,2,"div",2),e.ALo(14,"firstKey"),e.YNc(15,V,3,2,"div",2),e.ALo(16,"firstKey"),e.YNc(17,x,4,4,"div",2),e.ALo(18,"firstKey"),e.YNc(19,y,4,4,"div",2),e.ALo(20,"firstKey"),e.YNc(21,I,4,7,"div",2),e.ALo(22,"firstKey"),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Q6J("ngIf","required"===e.lcZ(2,11,i.field.errors)),e.xp6(2),e.Q6J("ngIf","minlength"===e.lcZ(4,13,i.field.errors)),e.xp6(2),e.Q6J("ngIf","appValidatePassword"===e.lcZ(6,15,i.field.errors)),e.xp6(2),e.Q6J("ngIf","appValidateEqual"===e.lcZ(8,17,i.field.errors)),e.xp6(2),e.Q6J("ngIf","appValidateIp"===e.lcZ(10,19,i.field.errors)),e.xp6(2),e.Q6J("ngIf","appValidateIpDomain"===e.lcZ(12,21,i.field.errors)),e.xp6(2),e.Q6J("ngIf","appValidValues"===e.lcZ(14,23,i.field.errors)),e.xp6(2),e.Q6J("ngIf","appInvalidValues"===e.lcZ(16,25,i.field.errors)),e.xp6(2),e.Q6J("ngIf","appValidateUnique"===e.lcZ(18,27,i.field.errors)),e.xp6(2),e.Q6J("ngIf","appValidateHex"===e.lcZ(20,29,i.field.errors)),e.xp6(2),e.Q6J("ngIf","appValidateEqualLength"===e.lcZ(22,31,i.field.errors))}}const p=["*"];let o=(()=>{class n{constructor(){this.cl="app-validate"}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-validate"]],hostVars:1,hostBindings:function(i,m){2&i&&e.uIk("class",m.cl)},inputs:{field:"field",type:"type"},ngContentSelectors:p,decls:2,vars:1,consts:[["class","validation-error",4,"ngIf"],[1,"validation-error"],[4,"ngIf"],[1,"icon_abb_16","icon-abb_error-circle-1_16"],["translate","",3,"translateParams"],[1,"abb_icon_16","icon-abb_error-circle-1_16"]],template:function(i,m){1&i&&(e.F$t(),e.Hsn(0),e.YNc(1,a,23,33,"div",0)),2&i&&(e.xp6(1),e.Q6J("ngIf","tooltip"!==m.type&&m.field.invalid&&m.field.touched))},directives:[d.O5,u.Pi],pipes:[c,u.X$],styles:["[_nghost-%COMP%]{display:block}"],data:{animation:[(0,t.X$)("showErrorAnimation",[(0,t.eR)(":enter",[(0,t.oB)({transform:"scale(0.8)",opacity:0}),(0,t.jt)("300ms",(0,t.oB)({transform:"scale(1)",opacity:1}))])])]}}),n})()},7815:(v,f,s)=>{s.d(f,{b:()=>e});var t=s(5e3);let e=(()=>{class d{constructor(){this.checkForm=!0,this.appFormButtonClick=new t.vpe}onClick(c){this.checkForm?(Object.keys(this.form.controls).forEach(r=>this.form.controls[r].markAsTouched()),this.form.valid?this.appFormButtonClick.next(c):c.stopPropagation()):this.appFormButtonClick.next(c)}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275dir=t.lG2({type:d,selectors:[["","appFormButtonClick",""]],hostBindings:function(c,r){1&c&&t.NdJ("click",function(h){return r.onClick(h)})},inputs:{checkForm:"checkForm",form:"form"},outputs:{appFormButtonClick:"appFormButtonClick"}}),d})()},83:(v,f,s)=>{s.d(f,{Z:()=>e});var t=s(5e3);let e=(()=>{class d{transform(c){return c?"["+c+"]":""}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275pipe=t.Yjl({name:"toUnit",type:d,pure:!0}),d})()}}]);