import"./chunk-POLL2CVR.js";import{bootstrapApplication as A}from"@angular/platform-browser";import{importProvidersFrom as u}from"@angular/core";import{PreloadAllModules as c,provideRouter as f,withDebugTracing as h,withPreloading as v,withViewTransitions as g}from"@angular/router";import{HttpClientModule as C}from"@angular/common/http";import{DATE_PIPE_DEFAULT_OPTIONS as x}from"@angular/common";import"@angular/core";import*as o from"@angular/core";var m=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.\u0275\u0275defineComponent({type:e,selectors:[["app-todo-list"]],standalone:!0,features:[o.\u0275\u0275StandaloneFeature],decls:2,vars:0,template:function(i,d){i&1&&(o.\u0275\u0275elementStart(0,"p"),o.\u0275\u0275text(1,"todo-list works!"),o.\u0275\u0275elementEnd())}});let r=e;return r})();var s=[{path:"todo-list",component:m}];var a={providers:[{provide:x,useValue:{dateFormat:"longDate"}},u(C),f(s,v(c),h(),g())]};import{VERSION as T,inject as D}from"@angular/core";import{CommonModule as M}from"@angular/common";import{Router as S,RouterModule as w}from"@angular/router";import*as t from"@angular/core";import*as n from"@angular/router";var l=(()=>{let e=class e{constructor(){this.title="Angular Store",this.version=T.full,this.router=D(S)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-root"]],standalone:!0,features:[t.\u0275\u0275StandaloneFeature],decls:5,vars:0,consts:[["routerLink","/todo-list"]],template:function(i,d){i&1&&(t.\u0275\u0275elementStart(0,"h1"),t.\u0275\u0275text(1,"Hello Angular 17"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"a",0),t.\u0275\u0275text(3,"Todo List"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(4,"router-outlet"))},dependencies:[M,w,n.RouterOutlet,n.RouterLink]});let r=e;return r})();A(l,a).catch(r=>console.error(r));