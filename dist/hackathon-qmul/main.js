(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portal/portal.component */ "./src/app/portal/portal.component.ts");
/* harmony import */ var _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interaction/interaction.component */ "./src/app/interaction/interaction.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var routes = [
    { path: 'interaction/:map/:zone', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_4__["InteractionComponent"] },
    { path: 'interaction/:map', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_4__["InteractionComponent"] },
    { path: 'portal', component: _portal_portal_component__WEBPACK_IMPORTED_MODULE_3__["PortalComponent"] },
    { path: './', component: _portal_portal_component__WEBPACK_IMPORTED_MODULE_3__["PortalComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box}\r\nhtml,body {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: black;\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCO0FBQ3pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuaHRtbCxib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<html>\n    <body>\n        <router-outlet></router-outlet>\n    </body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import { Islide } from '../Islide';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Images';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/canvas/canvas.component.ts");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portal/portal.component */ "./src/app/portal/portal.component.ts");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image/image.component */ "./src/app/image/image.component.ts");
/* harmony import */ var _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interaction/interaction.component */ "./src/app/interaction/interaction.component.ts");
/* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audio/audio.component */ "./src/app/audio/audio.component.ts");
/* harmony import */ var _canvas_controls_canvas_controls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./canvas-controls/canvas-controls.component */ "./src/app/canvas-controls/canvas-controls.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _magic_glass_magic_glass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./magic-glass/magic-glass.component */ "./src/app/magic-glass/magic-glass.component.ts");










//import { ControlsComponent } from './controls/controls.component';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__["CanvasComponent"],
                _portal_portal_component__WEBPACK_IMPORTED_MODULE_7__["PortalComponent"],
                _image_image_component__WEBPACK_IMPORTED_MODULE_8__["ImageComponent"],
                _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_9__["InteractionComponent"],
                // ControlsComponent,
                _audio_audio_component__WEBPACK_IMPORTED_MODULE_10__["AudioComponent"],
                _canvas_controls_canvas_controls_component__WEBPACK_IMPORTED_MODULE_11__["CanvasControlsComponent"],
                _magic_glass_magic_glass_component__WEBPACK_IMPORTED_MODULE_14__["MagicGlassComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_12__["NgxYoutubePlayerModule"].forRoot(),
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/audio/audio.component.css":
/*!*******************************************!*\
  !*** ./src/app/audio/audio.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\naudio{    width: 90px;\r\n    height: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxVQUFVLFdBQVc7SUFDakIsWUFBWTtBQUNoQiIsImZpbGUiOiIuLi9hdWRpby9hdWRpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5hdWRpb3sgICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/audio/audio.component.html":
/*!********************************************!*\
  !*** ./src/app/audio/audio.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<youtube-player\n          [videoId]=\"youTubeId\"\n          (ready)=\"saveYT($event)\"\n          (change)=\"changeYT($event)\"\n                 width=\"200\" height=\"100\"\n       >\n        </youtube-player>\n\n\n<div id=audio>\n     <audio id=music controls #music>\n        <source id=song [src]=\"songUrl\" type=\"audio/mpeg\" #song>\n    </audio>\n    \n     <audio id=voice controls #voice>\n        <source id=comment [src]=\"commentUrl\" type=\"audio/mpeg\" #comment>\n    </audio>\n    \n    \n"

/***/ }),

/***/ "./src/app/audio/audio.component.ts":
/*!******************************************!*\
  !*** ./src/app/audio/audio.component.ts ***!
  \******************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AudioComponent = /** @class */ (function () {
    function AudioComponent() {
        this.canPlay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AudioComponent.prototype.ngAfterViewInit = function () {
        var ref = this;
        this.music.nativeElement.oncanplay = function () {
            console.log("player ready");
            ref.canPlay.emit("ready");
        };
        if (this.songUrl) {
            this.song.nativeElement.src = this.songUrl;
            console.log("loading song");
            this.music.nativeElement.load();
            if (this.playing) {
                this.music.nativeElement.play();
            }
        }
    };
    AudioComponent.prototype.ngOnChanges = function () {
        if (this.youTubeId) {
            this.youTube.loadVideoById(this.youTubeId);
            this.music.nativeElement.pause();
            this.youTube.playVideo();
        }
        //   console.log("PLAY: " + this.mode);
        if (this.songUrl && (this.playing || this.mode == "interaction")) {
            console.log("loading song");
            this.music.nativeElement.load();
            this.youTube.stopVideo();
            this.youTubeId = "";
            this.youTube.clearVideo();
            this.music.nativeElement.play();
        }
    };
    AudioComponent.prototype.saveYT = function (yt) {
        console.log("saving YT");
        this.youTube = yt;
        //  this.youTube.playVideo();
    };
    AudioComponent.prototype.changeYT = function (e) {
        console.log("YT message");
        //console.log(this.youTube);
        //this.youTube.playVideo();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("music"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AudioComponent.prototype, "music", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("song"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AudioComponent.prototype, "song", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("voice"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AudioComponent.prototype, "voice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("comment"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AudioComponent.prototype, "comment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("youTubeId"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AudioComponent.prototype, "youTubeId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("songUrl"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AudioComponent.prototype, "songUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("playing"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AudioComponent.prototype, "playing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("mode"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AudioComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("commentUrl"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AudioComponent.prototype, "commentUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AudioComponent.prototype, "canPlay", void 0);
    AudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audio',
            template: __webpack_require__(/*! ./audio.component.html */ "./src/app/audio/audio.component.html"),
            styles: [__webpack_require__(/*! ./audio.component.css */ "./src/app/audio/audio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AudioComponent);
    return AudioComponent;
}());



/***/ }),

/***/ "./src/app/canvas-controls/canvas-controls.component.css":
/*!***************************************************************!*\
  !*** ./src/app/canvas-controls/canvas-controls.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\n#zoom{\r\n    padding: .4rem;\r\n    margin: 0.2em;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    color: black;\r\n    min-width: 2em;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color:white;\r\n}\r\n\r\n#zoom button{\r\n    color:white;\r\n    background-color:black;\r\n    border-radius:0.5em;\r\n    font-weight:bold;\r\n}\r\n\r\n#zoomToFit{\r\n    background-image:url(\"/assets/images/graphics/arrow_back.png\");\r\n    width:1.5em;\r\n    height:2em;\r\n        background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.dspButton{\r\n    border-radius: 50%;\r\n    width:1em;\r\n    height: 1em;\r\n    margin:0.25em;\r\n  \r\n}\r\n\r\n.showButton{\r\n    background-color:black;\r\n}\r\n\r\n.hideButton{\r\n    background-color:white;\r\n}\r\n\r\n.categorySwitch{\r\n margin-left:1em;\r\n    padding-left:0.5em;\r\n    border-left: 2px solid white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhbnZhcy1jb250cm9scy9jYW52YXMtY29udHJvbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFxQjtJQUFyQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDJCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGNBQWM7SUFDZCw4QkFBcUI7SUFBckIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhEQUE4RDtJQUM5RCxXQUFXO0lBQ1gsVUFBVTtRQUNOLDRCQUE0QjtJQUNoQywwQkFBMEI7QUFDOUI7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtDQUNDLGVBQWU7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6Ii4uL2NhbnZhcy1jb250cm9scy9jYW52YXMtY29udHJvbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuI3pvb217XHJcbiAgICBwYWRkaW5nOiAuNHJlbTtcclxuICAgIG1hcmdpbjogMC4yZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1pbi13aWR0aDogMmVtO1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4jem9vbSBidXR0b257XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOjAuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5cclxuI3pvb21Ub0ZpdHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvZ3JhcGhpY3MvYXJyb3dfYmFjay5wbmdcIik7XHJcbiAgICB3aWR0aDoxLjVlbTtcclxuICAgIGhlaWdodDoyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG5cclxuLmRzcEJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOjFlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luOjAuMjVlbTtcclxuICBcclxufVxyXG5cclxuLnNob3dCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uaGlkZUJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeVN3aXRjaHtcclxuIG1hcmdpbi1sZWZ0OjFlbTtcclxuICAgIHBhZGRpbmctbGVmdDowLjVlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/canvas-controls/canvas-controls.component.html":
/*!****************************************************************!*\
  !*** ./src/app/canvas-controls/canvas-controls.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n<div id=\"zoom\" role=\"group\" aria-label=\"Manuscript zoom\">\n    {{opacityRatio}}\n            <button type=\"button\" class=\"btn btn-secondary\" id=\"zoomIn\" (click)=\"zoomChng(0.1)\">\n              +\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary\" id=\"zoomOut\" (click)=\"zoomChng(-0.1)\">\n              -\n            </button>\n\n\n        \n     <button type=\"button\" class=\"btn btn-secondary\" id=\"zoomToFit\" (click)=\"zoomChng(fitZoom-zoom)\" *ngIf=\"zoom>fitZoom\">\n             \n            </button>\n          </div>\n    <ng-container  *ngFor=\"let zc of zoneCategories\" >\n    <span class=categorySwitch *ngIf=\"zc.name!='Mrak'\">\n        <button class=\"dspButton\" (click)=\"zc.selected=!zc.selected; selectionChng()\" [ngClass]=\"zc.selected ? 'hideButton' : 'showButton'\"></button>\n        {{zc.name}} ({{zc.zoneCount}})\n    \n    </span>\n    </ng-container>\n    \n    \n    \n    <input type=\"range\" min=0 max=1 step=0.1 (change)=\"opacityChng($event)\">\n</div>  \n\n\n"

/***/ }),

/***/ "./src/app/canvas-controls/canvas-controls.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/canvas-controls/canvas-controls.component.ts ***!
  \**************************************************************/
/*! exports provided: CanvasControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasControlsComponent", function() { return CanvasControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanvasControlsComponent = /** @class */ (function () {
    function CanvasControlsComponent() {
        this.changeZoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeOpacity = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CanvasControlsComponent.prototype.ngOnInit = function () {
    };
    CanvasControlsComponent.prototype.zoomChng = function (value) {
        this.changeZoom.emit(value);
    };
    CanvasControlsComponent.prototype.selectionChng = function () {
        var selected = {};
        this.zoneCategories.forEach(function (zc) { return selected[zc.name] = zc.selected; });
        this.changeSelection.emit(selected);
    };
    CanvasControlsComponent.prototype.opacityChng = function (e) {
        console.log(e.srcElement.value);
        this.changeOpacity.emit(e.srcElement.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasControlsComponent.prototype, "changeZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasControlsComponent.prototype, "changeSelection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasControlsComponent.prototype, "changeOpacity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("zoom"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CanvasControlsComponent.prototype, "zoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("fitZoom"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CanvasControlsComponent.prototype, "fitZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("opacityRatio"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CanvasControlsComponent.prototype, "opacityRatio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("zoneCategories"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CanvasControlsComponent.prototype, "zoneCategories", void 0);
    CanvasControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas-controls',
            template: __webpack_require__(/*! ./canvas-controls.component.html */ "./src/app/canvas-controls/canvas-controls.component.html"),
            styles: [__webpack_require__(/*! ./canvas-controls.component.css */ "./src/app/canvas-controls/canvas-controls.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CanvasControlsComponent);
    return CanvasControlsComponent;
}());



/***/ }),

/***/ "./src/app/canvas/canvas.component.css":
/*!*********************************************!*\
  !*** ./src/app/canvas/canvas.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{box-sizing:boder-box}\r\n\r\n#msCanvas, manuscript{-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s, -webkit-transform .5s; -webkit-transition: background-image .5x; transition: background-image .5x; -webkit-transform-origin:center center; transform-origin:center center}\r\n\r\n#msCanvas,#interactiveCanvas, #animationCanvas{position:absolute;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s, -webkit-transform .5s; \r\n}\r\n\r\n#msWrapper{position:absolute;\r\n    overflow:scroll;\r\n\r\nbackground-color: rgb(20,20,20);\r\n  /*  background-image:url(\"https://www.draconica.net/ft2019/wp-content/uploads/sites/21/2019/02/bg3.jpg\");*/\r\nwidth: 98%;\r\nheight: 98%;\r\nmargin: 0.1em;}\r\n\r\napp-canvas-controls{\r\n    background-color:transparent;\r\n    width:100%;\r\n    height:5%;\r\n    position:fixed;\r\n    top:0;\r\n    left:0.5%;\r\n    color:white;\r\n}\r\n\r\n#manuscript{border: 1px solid black;\r\nwidth: 100%;\r\nheight: 100%;\r\nposition: absolute;\r\n    background-color:black;\r\nleft:0%;\r\ntop:0}\r\n\r\n/* CUSTOM SCROLLBAR */\r\n\r\n::-webkit-scrollbar {\r\n    width: 11px;\r\n    height: 11px;\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n    width: 0px;\r\n    height: 0px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgb(20,20,20);\r\n    border: 2px solid #ffffff;\r\n    border-radius: 50px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #ffffff;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n    background: #000000;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: rgb(20,20,20);\r\n    border: 0px none #ffffff;\r\n    border-radius: 39px;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-track:active {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n    background: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxFQUFFLG9CQUFvQjs7QUFFdEIsc0JBQXNCLHdDQUF3QixDQUF4QixnQ0FBd0IsQ0FBeEIsd0JBQXdCLENBQXhCLCtDQUF3QixFQUFFLHdDQUFnQyxFQUFoQyxnQ0FBZ0MsRUFBRSxzQ0FBNkIsRUFBN0IsOEJBQThCOztBQUdoSCwrQ0FBK0MsaUJBQWlCLENBQUMsaUNBQXlCLENBQXpCLHlCQUF5QixDQUFDLHdDQUF3QixDQUF4QixnQ0FBd0IsQ0FBeEIsd0JBQXdCLENBQXhCLCtDQUF3QjtBQUNuSDs7QUFDQSxXQUFXLGlCQUFpQjtJQUN4QixlQUFlOztBQUVuQiwrQkFBK0I7RUFDN0IsMEdBQTBHO0FBQzVHLFVBQVU7QUFDVixXQUFXO0FBQ1gsYUFBYSxDQUFDOztBQUlkO0lBQ0ksNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixTQUFTO0lBQ1QsY0FBYztJQUNkLEtBQUs7SUFDTCxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBLFlBQVksdUJBQXVCO0FBQ25DLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0lBQ2Qsc0JBQXNCO0FBQzFCLE9BQU87QUFDUCxLQUFLOztBQUdMLHFCQUFxQjs7QUFFckI7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6Ii4uL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7Ym94LXNpemluZzpib2Rlci1ib3h9XHJcblxyXG4jbXNDYW52YXMsIG1hbnVzY3JpcHR7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC41eDsgdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfVxyXG5cclxuXHJcbiNtc0NhbnZhcywjaW50ZXJhY3RpdmVDYW52YXMsICNhbmltYXRpb25DYW52YXN7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXM7IFxyXG59XHJcbiNtc1dyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzpzY3JvbGw7XHJcblxyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsMjAsMjApO1xyXG4gIC8qICBiYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vd3d3LmRyYWNvbmljYS5uZXQvZnQyMDE5L3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8yMS8yMDE5LzAyL2JnMy5qcGdcIik7Ki9cclxud2lkdGg6IDk4JTtcclxuaGVpZ2h0OiA5OCU7XHJcbm1hcmdpbjogMC4xZW07fVxyXG5cclxuXHJcblxyXG5hcHAtY2FudmFzLWNvbnRyb2xze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NSU7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowLjUlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiNtYW51c2NyaXB0e2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5sZWZ0OjAlO1xyXG50b3A6MH1cclxuXHJcblxyXG4vKiBDVVNUT00gU0NST0xMQkFSICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxuICAgIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM5cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/canvas/canvas.component.html":
/*!**********************************************!*\
  !*** ./src/app/canvas/canvas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      {{title}}\n<div id=manuscript #manuscript>\n            <div id=\"msWrapper\" #msWrapper [style.overflow]=\"mode=='interaction' ? 'scroll':'hidden'\">\n          <canvas #msCanvas id=msCanvas [style.opacity]=1-opacityRatio [attr.width]=\"imgData.width\" [attr.height]=\"imgData.height\" style=\"border:2px solid black;\n            background-color:transparent'); background-image:url('')\" draggable ></canvas>\n                <canvas #animationCanvas id=animationCanvas  [attr.width]=\"imgData.width\" [attr.height]=\"imgData.height\" style=\"border:2px solid black;\n            background-color:transparent'); background-image:url('')\" draggable ></canvas>\n             <canvas #interactiveCanvas  [style.opacity]=opacityRatio id=interactiveCanvas  [attr.width]=\"imgData.width\" [attr.height]=\"imgData.height\"  style=\"border:2px solid black;\n            background-color:transparent'); background-image:url('')\" draggable (document:mousemove)=\"locatePolygon($event, ctx, false)\" (click)=\"locatePolygon($event, ctx, true)\">\n                   \n                </canvas>    \n            \n                 <app-canvas-controls *ngIf=\"mode=='interaction'\" [opacityRatio]=opacityRatio [zoom]=\"zoom\" [fitZoom]=\"fitZoom\" [zoneCategories]=\"zoneCategories\" (changeZoom)=\"zoomChng($event)\" (changeSelection)=\"redrawSelected($event)\"  (changeOpacity)=\"opacityChng($event)\" ></app-canvas-controls>\n                \n                 <app-magic-glass #magicglass></app-magic-glass>\n                \n            </div>\n     \n\n      </div>  \n \n\n   "

/***/ }),

/***/ "./src/app/canvas/canvas.component.ts":
/*!********************************************!*\
  !*** ./src/app/canvas/canvas.component.ts ***!
  \********************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drawing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/drawing.service */ "./src/app/services/drawing.service.ts");



var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(_drawingSvc) {
        this._drawingSvc = _drawingSvc;
        // @Input("slideZoom") slideZoom: number;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayedZones = [];
        this.opacityRatio = 1;
        this.zoom = 1;
        this.fitZoom = 0.4;
    }
    CanvasComponent.prototype.ngOnInit = function () {
        // console.log("--CANVAS--ON INIT--");
        this.magicGlass.transcription = "";
    };
    CanvasComponent.prototype.ngAfterViewInit = function () {
        //  console.log("--CANVAS--AFTER VIEW INIT--");
        this.ctx = this.canvas.nativeElement.getContext("2d");
        this.interCtx = this.interaction.nativeElement.getContext("2d");
        this.animCtx = this.animation.nativeElement.getContext("2d");
        //  let zones = this.zones.filter((z)=>z.category=="Území");
        this.displayedZones = this.zones;
        console.log(this.zones);
        this.processZones(this.displayedZones);
    };
    CanvasComponent.prototype.ngOnChanges = function () {
        console.log(this.zones);
        //  console.log("--CANVAS--ON CHANGES--");
        if (this.imgData) {
            this.bgImage = this.imgData.url;
            this.canvas.nativeElement.style.backgroundImage = "url(" + this.bgImage + ")";
            this.interaction.nativeElement.style.backgroundImage = "url(" + this.imgData.url2 + ")";
            this.zoom = this.calcZoomToFit();
            this.fitZoom = this.zoom;
            this.scaleCanvas([this.canvas, this.interaction, this.animation], this.wrapper, this.outer, this.zoom, this.fitZoom, { x: 0, y: 0 });
        }
        if (this.ctx && this.interCtx && this.animCtx) {
            this.displayedZones = this.zones;
            this.processZones(this.displayedZones);
        }
    };
    CanvasComponent.prototype.processZones = function (zones) {
        var _this = this;
        console.log(zones);
        if (this.mode == "interaction") {
            this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        }
        this.animCtx.clearRect(0, 0, this.interaction.nativeElement.width, this.interaction.nativeElement.height);
        this._drawingSvc.animations = [];
        zones.forEach(function (zone) {
            //    console.log("canvas drawing zones: ");
            //  console.log(zone);
            if (zone.category == "Slide" || _this.mode == "presentation") {
                //  console.log("adding to animations");
                //    console.log(zone);
                //   this._drawingSvc.animations.push({img:zone.img,imgCoords:zone.imgCoords,cat:zone.cat, source:zone.fields.icon.value, destination:zone.fields.destination.value.split(","),shift:[<number>0,<number>0] });
                _this._drawingSvc.animations = _this._drawingSvc.animations.concat(zone.addToAnimations(_this.canvas, _this.zoom));
            }
            else {
                zone.draw(_this.ctx);
            }
        });
        if (this._drawingSvc.animations.length > 0) {
            // this.canvas.nativeElement.style.transition="transform "+this.slideConfig.duration/1000+"s";
            // this.interaction.nativeElement.style.transition="transform "+this.slideConfig.duration/1000+"s";
            // this.animation.nativeElement.style.transition="transform "+this.slideConfig.duration/1000+"s";
            // this.scaleCanvas([this.canvas,  this.animation], this.wrapper, this.outer, this.fitZoom*this.slideConfig.zoom, this.fitZoom, this.slideConfig.translate);
            //console.log("RUNNING ANIMATIONS");
            //   console.log(this._drawingSvc.animations);
            this._drawingSvc.animationStage = 0;
            //this.zoomChng(0.2);
            this._drawingSvc.runAnimations(this.ctx, this.animCtx, this.animation, this.zoom, this.startTime, this.slideConfig.duration);
        }
    };
    CanvasComponent.prototype.locatePolygon = function (mouse, ctx, display) {
        if (this.mode == "interaction") {
            var rZone;
            var ref_1 = this;
            //z.cat!="movement" && 
            this.displayedZones.filter(function (z) { return (z != ref_1.selectedZone && z.category != "Mrak"); }).forEach(function (zone, zid) {
                var points = zone.points;
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                //console.log(zone.WORD["#text"]+"="+points[0].x+":"+ points[0].y);
                for (var p = 1; p < points.length; p++) {
                    //  console.log(zone);
                    ctx.lineTo(points[p].x, points[p].y);
                    //console.log(points[p].x+":"+ points[p].y);
                }
                ctx.closePath();
                if (ctx.isPointInPath(mouse.offsetX, mouse.offsetY)) {
                    rZone = zone;
                }
            });
            if (rZone) {
                //  console.log(rZone.word);
                this.animCtx.clearRect(0, 0, this.interaction.nativeElement.width, this.interaction.nativeElement.height);
                // this._drawingSvc.drawPolygon(this.interCtx, rZone.points,"highlight");
                rZone.highlight(this.animCtx);
                console.log(this.magicGlass);
                if (display == true) {
                    //   console.log(rZone);
                    this.clicked.emit(rZone);
                    this.focusOn(rZone);
                    this.selectedZone = rZone;
                }
            }
        }
    };
    CanvasComponent.prototype.calcZoomToFit = function () {
        //    console.log("calculating zoom");
        //   console.log(this.wrapper);
        // console.log(this.wrapper.nativeElement.offsetHeight);
        var wrapperWidth = this.wrapper.nativeElement.offsetWidth;
        var wrapperHeight = this.wrapper.nativeElement.offsetHeight;
        //   console.log(wrapperWidth +" <> "+wrapperHeight);
        var ratioX = parseInt(wrapperWidth) / parseInt(this.imgData.width);
        var ratioY = parseInt(wrapperHeight) / parseInt(this.imgData.height);
        //  console.log(ratioX +" - "+ratioY);
        if (ratioX <= ratioY) {
            //  console.log("returning X");
            return ratioX;
        }
        else {
            return ratioY;
        }
    };
    CanvasComponent.prototype.zoomChng = function (zChng) {
        // console.log(zChng);
        // console.log("before:", this.zoom);
        var newZoomLevel = this.zoom + parseFloat(zChng);
        this.zoom = newZoomLevel >= .1 ? newZoomLevel : .1;
        //  console.log("after:", this.zoom);
        this.scaleCanvas([this.canvas, this.interaction, this.animation], this.wrapper, this.outer, this.zoom, this.fitZoom, { x: 0, y: 0 });
    };
    CanvasComponent.prototype.opacityChng = function (or) {
        this.canvas.nativeElement.style.opacity = 1 - or;
        this.interaction.nativeElement.style.opacity = or;
    };
    CanvasComponent.prototype.redrawSelected = function (e) {
        //   console.log(e);
        this.displayedZones = this.zones.filter(function (z) { return e[z.category] == true; });
        this.processZones(this.displayedZones);
    };
    CanvasComponent.prototype.scaleCanvas = function (canvases, inner, outer, zoom, fitZoom, translate) {
        //  console.log("scaling to: "+zoom);
        var dw = parseInt(outer.nativeElement.style.width); // manuscript element
        var dh = parseInt(outer.nativeElement.style.height);
        var nw = parseInt(this.imgData.width) * zoom;
        var nh = parseInt(this.imgData.height) * zoom;
        var ref = this;
        canvases.forEach(function (c) {
            var shift = " ";
            if (zoom < fitZoom) {
                //c.nativeElement.style["transform-origin"]= "center center";  
                shift = " translate(500px, 500px)";
            }
            else {
                c.nativeElement.style["transform-origin"] = "top left";
            }
            c.nativeElement.style.transform = "scale(" + zoom + "," + zoom + ") translate(" + translate.x + "px," + translate.y + "px)";
            if (nw < dw && nh < dh) {
                c.nativeElement.style.overflow = "hidden";
            }
            else {
                c.nativeElement.style.overflow = "scroll";
            }
        });
        // console.log(nw + "--" + nh);
        inner.nativeElement.style.width = nw;
        inner.nativeElement.style.height = nh;
    };
    CanvasComponent.prototype.focusOn = function (zone) {
        // console.log("zooming in");
        var xtr = zone.imgCoords;
        var sx = xtr.max.x - xtr.min.x;
        var sy = xtr.max.y - xtr.min.y;
        var vw = this.outer.nativeElement.clientWidth;
        var vh = this.outer.nativeElement.clientHeight;
        //  console.log(this.outer);
        var ox = (vw - sx) / 2;
        var oy = (vh - sy) / 2;
        var nzm;
        if (ox < oy) {
            nzm = vw / sx * 0.7;
        }
        else {
            nzm = vh / sy * 0.7;
        }
        //  console.log(vw + " : " + sx);
        //  console.log("new zoom: "+nzm);
        var ref = this;
        this.zoomChng(nzm - this.zoom);
        // ref.moveScreen(xtr,ox,oy, nzm, zone);
        setTimeout(function () { ref.moveScreen(xtr, ox, oy, nzm, zone); }, 700);
    };
    ;
    CanvasComponent.prototype.moveScreen = function (xy, ox, oy, nzm, zone) {
        //  console.log(((xy.max.x-xy.min.y)/6*nzm) + "//" + ((xy.max.y-xy.min.y)/6*nzm));
        //-((xy.max.x-xy.min.y/3)*nzm)
        //-((xy.max.y-xy.min.y/3)*nzm)
        var x = Math.max(0, (xy.min.x * nzm - ((xy.max.x - xy.min.x) / 6 * nzm)));
        var y = Math.max(0, (xy.min.y * nzm - ((xy.max.y - xy.min.y) / 6 * nzm)));
        // console.log(x + "-ss-" + y);
        //  console.log( this.outer);
        this.wrapper.nativeElement.scrollTop = y;
        this.wrapper.nativeElement.scrollLeft = x;
        zone.activate(this.magicGlass, nzm);
        // this.displayedZones = this.zones.filter((z)=>z.word!=zone.word);
        //this.processZones(this.displayedZones);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("magicglass"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "magicGlass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("msWrapper"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "wrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("manuscript"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "outer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("msCanvas"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("interactiveCanvas"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "interaction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("animationCanvas"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "animation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("les"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "les", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("zones"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "zones", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("zoneCategories"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "zoneCategories", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("imgData"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "imgData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("mode"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CanvasComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("startTime"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CanvasComponent.prototype, "startTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("slideConfig"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "slideConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "clicked", void 0);
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/canvas/canvas.component.html"),
            providers: [_services_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingSvc"]],
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/canvas/canvas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingSvc"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/classes/zone.ts":
/*!*********************************!*\
  !*** ./src/app/classes/zone.ts ***!
  \*********************************/
/*! exports provided: Zone, Icon, Region, Glass, Cover, Poster, Slide, Text, Curtain, Cloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return Zone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Glass", function() { return Glass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cover", function() { return Cover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poster", function() { return Poster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curtain", function() { return Curtain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cloud", function() { return Cloud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_drawing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/drawing.service */ "./src/app/services/drawing.service.ts");


var Zone = /** @class */ (function () {
    function Zone(slide) {
        this.drawing = new _services_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingSvc"]();
        //console.log("constructing zone");
        this.static = true;
        this.word = slide.word;
        this.category = slide.cat;
        this.title = slide.fields.title.value;
        this.image = "assets/images/" + slide.fields.image.value;
        this.description = slide.fields.description.value;
        this.music = slide.fields.music.value;
        // this.comment = slide.fields.comment.value;
        this.points = this.drawing.stringToPath(slide.shape);
        this.imgCoords = this.calcImgCoords(this.points);
        console.log(this.imgCoords);
        if (slide.fields.drawingSetting) {
            this.drawingSetting = slide.fields.drawingSetting.value;
        }
        else {
            this.drawingSetting = slide.cat;
        }
        if (slide.fields.image.value) {
            this.img = new Image();
            this.img.src = "assets/images/" + slide.fields.image.value;
            //console.log("image loaded: " + this.img.src);
            this.source = slide.fields.icon.value;
        }
        //console.log(this);
    }
    Zone.prototype.highlight = function (ctx) {
        this.drawing.applySetting(ctx, "highlight");
        this.drawing.drawPolygon(ctx, this.points, "highlight");
    };
    Zone.prototype.calcImgCoords = function (points) {
        var xs = points.map(function (p) { return p.x; });
        var ys = points.map(function (p) { return p.y; });
        var minX = this.myArrayMin(xs);
        var minY = this.myArrayMin(ys);
        var maxX = this.myArrayMax(xs);
        var maxY = this.myArrayMax(ys);
        return { topLeft: { x: minX, y: minY }, width: maxX - minX, height: maxY - minY, min: { x: minX, y: minY }, max: { x: maxX, y: maxY } };
    };
    Zone.prototype.myArrayMin = function (arr) {
        return Math.min.apply(null, arr);
    };
    Zone.prototype.myArrayMax = function (arr) {
        return Math.max.apply(null, arr);
    };
    return Zone;
}());

var Icon = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Icon, _super);
    function Icon(slide) {
        var _this = _super.call(this, slide) || this;
        _this.position = _this.imgCoords.topLeft;
        _this.img = new Image();
        _this.img.src = "assets/images/" + slide.fields.icon.value;
        //console.log("image loaded: " + this.img.src);
        _this.source = slide.fields.icon.value;
        if (slide.fields.path.value) {
            var pathPoints = _this.drawing.stringToPath(slide.fields.path.value);
            _this.animationPath = _this.drawing.calcAnimationPath(_this.imgCoords.topLeft, pathPoints);
        }
        return _this;
    }
    Icon.prototype.draw = function (ctx) {
        this.drawing.drawImage(ctx, this);
        console.log("drawing " + this.word);
    };
    Icon.prototype.addToAnimations = function (canvas, zoom) {
        //  console.log("adding" + this.word);
        return [this];
    };
    Icon.prototype.animate = function (ctx, stage, canvas, zoom) {
        // console.log("animating region");
        ctx.save();
        this.draw(ctx);
        ctx.restore();
    };
    return Icon;
}(Zone));

var Region = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Region, _super);
    function Region(slide) {
        return _super.call(this, slide) || this;
        //console.log("constructing region");
    }
    Region.prototype.draw = function (ctx) {
        //console.log("drawing Region");
        this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.drawPolygon(ctx, this.points, this.drawingSetting);
    };
    Region.prototype.addToAnimations = function (canvas, zoom) {
        console.log("adding" + this.word);
        return [this];
    };
    Region.prototype.animate = function (ctx, stage, canvas, zoom) {
        // console.log("animating region");
        ctx.save();
        this.drawing.applySetting(ctx, this.drawingSetting);
        ctx.globalAlpha = stage;
        this.draw(ctx);
        ctx.restore();
    };
    Region.prototype.activate = function (component, zoom) {
        component.hideFrame();
    };
    return Region;
}(Zone));

var Glass = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Glass, _super);
    function Glass(slide) {
        var _this = _super.call(this, slide) || this;
        //console.log("constructing region");
        _this.transcription = _this.description.split(" ").map(function (w) { return { transcript: w, translation: "" }; });
        return _this;
    }
    Glass.prototype.activate = function (component, zoom) {
        console.log("activating");
        console.log(component.container.nativeElement);
        component.placeFrame(this.imgCoords, zoom);
        component.transcription = this.transcription;
        console.log(component);
    };
    return Glass;
}(Region));

var Cover = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Cover, _super);
    function Cover(slide) {
        return _super.call(this, slide) || this;
        //console.log("constructing region");
    }
    Cover.prototype.draw = function (ctx) {
        //console.log("drawing Region");
        this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.drawCover(ctx, this.points);
    };
    Cover.prototype.addToAnimations = function (canvas, zoom) {
        console.log("adding" + this.word);
        return [this];
    };
    Cover.prototype.animate = function (ctx, stage, canvas, zoom) {
        // console.log("animating region");
        ctx.save();
        this.drawing.applySetting(ctx, this.drawingSetting);
        ctx.globalAlpha = stage;
        this.draw(ctx);
        ctx.restore();
    };
    return Cover;
}(Zone));

var Poster = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Poster, _super);
    function Poster(slide) {
        var _this = _super.call(this, slide) || this;
        _this.duration = 5000;
        _this.static = false;
        _this.animation = slide.fields.animation.value;
        _this.imgCoords = _this.calcImgCoords(_this.points);
        _this.position = _this.imgCoords.topLeft;
        _this.img = new Image();
        _this.img.src = "assets/images/" + slide.fields.image.value;
        //console.log("image loaded: " + this.img.src);
        _this.source = slide.fields.icon.value;
        return _this;
    }
    Poster.prototype.addToAnimations = function (canvas, zoom) {
        //console.log(this.img);
        this.transformSetting = this.drawing.calcScaleToFit(this.imgCoords, canvas, zoom);
        //console.log("TEXT: " + this.description);
        var text = new Text(this.description, 200, 500);
        return [this];
    };
    Poster.prototype.animate = function (ctx, stage, canvas, zoom) {
        ctx.save();
        this.setTransformSetting(stage, this.animation);
        this.drawing.drawTransparentImage(ctx, this, zoom);
        if (this.animation == "curtain") {
            this.drawing.drawCurtain(ctx, this);
        }
        ctx.restore();
    };
    Poster.prototype.draw = function (ctx) {
        this.drawing.drawStaticImage(ctx, this);
    };
    Poster.prototype.setTransformSetting = function (stage, version) {
        //console.log("SETTING V: " + version);
        switch (version) {
            case "all":
                this.transformSetting.globalAlpha = this.calcAlpha(stage);
                this.transformSetting.scale = this.calcScale(stage, 0.5, 1);
                this.transformSetting.translate = this.calcTranslate(stage, this.transformSetting.center);
                break;
            case "smAll":
                this.transformSetting.globalAlpha = this.calcAlpha(stage);
                this.transformSetting.scale = 1 + (stage / 5);
                this.transformSetting.translate = this.calcTranslate(stage, this.transformSetting.centerOrig);
                break;
            case "alpha":
                this.transformSetting.globalAlpha = this.calcAlpha(stage);
                this.transformSetting.scale = this.transformSetting.maxScale;
                this.transformSetting.translate = { x: 0, y: 0 };
                break;
            case "curtain":
                this.transformSetting.globalAlpha = 1 - stage;
                this.transformSetting.scale = this.transformSetting.maxScale;
                this.transformSetting.translate = { x: 0, y: 0 };
                break;
            case "static":
                this.transformSetting.globalAlpha = this.calcAlpha(stage);
                this.transformSetting.scale = 1;
                this.transformSetting.translate = { x: this.imgCoords.topLeft.x, y: this.imgCoords.topLeft.y };
                break;
        }
    };
    Poster.prototype.calcAlpha = function (stage) {
        var alpha;
        if (stage < 0.5) {
            alpha = Math.sqrt(stage / 0.5);
        }
        else {
            alpha = Math.sqrt((1 - stage) * 2);
        }
        return alpha;
    };
    Poster.prototype.calcScale = function (stage, initial, target) {
        var scale;
        scale = (this.transformSetting.maxScale * initial) + (((target - initial) * this.transformSetting.maxScale) * stage);
        return scale;
    };
    Poster.prototype.calcTranslate = function (stage, destination) {
        var x = this.imgCoords.topLeft.x + ((destination.x - this.imgCoords.topLeft.x) * stage);
        var y = this.imgCoords.topLeft.y + ((destination.y - this.imgCoords.topLeft.y) * stage);
        return { x: x, y: y };
    };
    return Poster;
}(Zone));

var Slide = /** @class */ (function () {
    function Slide(data, zones) {
        this.name = data.name;
        var text = data.text;
        this.duration = data.duration;
        this.zones = zones;
        this.music = data.music;
        this.zones.push(new Text(text, 1700, 2000));
        this.seqLength = this.zones.filter(function (z) { return z.text == null; }).length;
        this.seqCount = 0;
        this.setTiming(data);
    }
    Slide.prototype.addToAnimations = function (canvas, zoom) {
        var animations = [];
        this.zones.forEach(function (z) { return animations = animations.concat(z.addToAnimations(canvas, zoom)); });
        return animations;
    };
    Slide.prototype.animate = function (ctx, stage, canvas, zoom) {
        var animations = [];
        this.zones.forEach(function (z) { return z.animate(ctx, stage, canvas, zoom); });
        return animations;
    };
    Slide.prototype.setTiming = function (data) {
        var ref = this;
        var segment = this.duration / this.seqLength;
        this.zones.filter(function (z) { return z.text != null; }).forEach(function (z, zi) {
            z.offset = 0;
            z.duration = data.duration;
        });
        this.zones.filter(function (z) { return z.text == null; }).forEach(function (z, zi) {
            switch (data.seqMode) {
                case "S":
                    z.offset = 0;
                    z.duration = data.duration;
                    break;
                case "D":
                    z.offset = zi * segment;
                    z.duration = segment;
                    break;
                case "C":
                    z.offset = zi * segment;
                    z.duration = data.duration - z.offset;
                    break;
            }
        });
    };
    return Slide;
}());

var Text = /** @class */ (function () {
    function Text(text, x, y) {
        this.drawing = new _services_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingSvc"]();
        console.log(">> constructing TEXT: " + text);
        this.text = text;
        this.x = x;
        this.y = y;
        //console.log(this);
    }
    Text.prototype.addToAnimations = function (canvas, zoom) {
        return [this];
    };
    Text.prototype.animate = function (ctx, stage, canvas) {
        ctx.globalAlpha = this.calcAlpha(stage);
        this.drawing.writeText(ctx, this, canvas.nativeElement.offsetWidth, canvas.nativeElement.offsetHeight);
    };
    Text.prototype.calcAlpha = function (stage) {
        var alpha;
        if (stage < 0.5) {
            alpha = stage / 0.5;
        }
        else {
            alpha = (1 - stage) * 2;
        }
        return alpha;
    };
    return Text;
}());

var Curtain = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Curtain, _super);
    function Curtain(data, zones) {
        var _this = _super.call(this, data, zones) || this;
        _this.width = data.width;
        _this.height = data.height;
        _this.x = data.x;
        _this.y = data.y;
        for (var x = 0; x < data.x; x++) {
            for (var y = 0; y < data.y; y++) {
                _this.zones.push(new Cloud((data.width / data.x) * x, (data.height / data.y) * y, data.shape, data.setting));
            }
        }
        _this.zones.push(new Text(data.text, 1700, 2000));
        _this.setTiming(data);
        return _this;
    }
    return Curtain;
}(Slide));

var Cloud = /** @class */ (function () {
    function Cloud(x, y, shape, setting) {
        this.drawing = new _services_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingSvc"]();
        this.type = "element";
        this.drawingSetting = setting;
        this.points = this.drawing.stringToPath(shape);
        this.transformSetting = { maxScale: 1, scale: 1, translate: { x: this.getRandom(x - 50, x + 50), y: this.getRandom(y - 50, y + 50) }, globalAlpha: this.getRandom(0, 1) };
    }
    Cloud.prototype.addToAnimations = function () {
        return [this];
    };
    Cloud.prototype.animate = function (ctx, stage, canvas, zoom) {
        // console.log("animating region");
        ctx.save();
        this.randomizeSetting(stage);
        this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.applyTransform(ctx, this.transformSetting);
        ctx.globalAlpha = 1 - stage;
        this.draw(ctx);
        ctx.restore();
    };
    Cloud.prototype.randomizeSetting = function (stage) {
        this.transformSetting.translate.x += this.getRandom(-0.05, 0.05);
        this.transformSetting.translate.y += this.getRandom(-0.05, 0.05);
        this.transformSetting.globalAlpha = 1 - stage;
        this.transformSetting.scale += this.getRandom(0, 0.02);
        var ref = this;
        //this.points.forEach((point)=>{point.x+=ref.getRandom(0,1);});
        //   console.log(this.transformSetting);
    };
    Cloud.prototype.draw = function (ctx) {
        //console.log("drawing Region");
        this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.applyTransform(ctx, this.transformSetting);
        this.drawing.drawPolygon(ctx, this.points, this.drawingSetting);
    };
    Cloud.prototype.getRandom = function (min, max) {
        var result = min + (Math.random() * (max - min));
        return result;
    };
    Cloud.prototype.calcAlpha = function (stage) {
        var alpha;
        if (stage < 0.5) {
            alpha = Math.sqrt(stage / 0.5);
        }
        else {
            alpha = Math.sqrt((1 - stage) * 2);
        }
        return alpha;
    };
    return Cloud;
}());



/***/ }),

/***/ "./src/app/image/image.component.css":
/*!*******************************************!*\
  !*** ./src/app/image/image.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box}\r\n\r\n#container{\r\n    position:absolute;\r\n    left:0;\r\n    bottom:0;\r\n    width: 100%;\r\n    height:auto;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column nowrap;\r\n    background-color: rgba(0,0,0,0.8);\r\n    color: white;\r\n    padding:1em;\r\n    z-index:500;\r\n    overflow-y : scroll;\r\n    -webkit-transition: height 2s;\r\n    transition: height 2s;\r\n}\r\n\r\n#image{\r\n   background-color: rgba(100,100,100,0.3);\r\nmargin: 0.5em;\r\n    margin-bottom: 1em;\r\nmargin-bottom: 0;\r\nbox-shadow: 0 0 15px rgba(0,0,0,0.7);\r\nmax-width: 100%;\r\nborder: 2px outset rgb(100,100,100);\r\n}\r\n\r\n#description{\r\n       background-color: rgba(0,0,0,0.7);\r\nmargin:0.5em;\r\n    padding:1em;\r\nbox-shadow: 0 0 15px rgba(0,0,0,0.7);\r\n   max-width:100%;\r\n}\r\n\r\n#description h2{\r\n    border-bottom : 1px solid white;\r\n}\r\n\r\n/* CUSTOM SCROLLBAR */\r\n\r\n::-webkit-scrollbar {\r\n    width: 11px;\r\n    height: 11px;\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n    width: 0px;\r\n    height: 0px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgb(20,20,20);\r\n    border: 2px solid #ffffff;\r\n    border-radius: 50px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #ffffff;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n    background: #000000;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: rgb(20,20,20);\r\n    border: 0px none #ffffff;\r\n    border-radius: 39px;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-track:active {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n    background: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxzQkFBc0I7O0FBRXpCO0lBQ0ksaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBd0I7SUFBeEIsNkJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUFxQjtJQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7R0FDRyx1Q0FBdUM7QUFDMUMsYUFBYTtJQUNULGtCQUFrQjtBQUN0QixnQkFBZ0I7QUFDaEIsb0NBQW9DO0FBQ3BDLGVBQWU7QUFDZixtQ0FBbUM7QUFDbkM7O0FBRUE7T0FDTyxpQ0FBaUM7QUFDeEMsWUFBWTtJQUNSLFdBQVc7QUFDZixvQ0FBb0M7R0FDakMsY0FBYztBQUNqQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFJQSxxQkFBcUI7O0FBRXJCO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiIuLi9pbWFnZS9pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuXHJcbiNjb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuICAgIHotaW5kZXg6NTAwO1xyXG4gICAgb3ZlcmZsb3cteSA6IHNjcm9sbDtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAycztcclxufVxyXG5cclxuI2ltYWdle1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwxMDAsMTAwLDAuMyk7XHJcbm1hcmdpbjogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbm1hcmdpbi1ib3R0b206IDA7XHJcbmJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwwLDAsMC43KTtcclxubWF4LXdpZHRoOiAxMDAlO1xyXG5ib3JkZXI6IDJweCBvdXRzZXQgcmdiKDEwMCwxMDAsMTAwKTtcclxufVxyXG5cclxuI2Rlc2NyaXB0aW9ue1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xyXG5tYXJnaW46MC41ZW07XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLDAsMCwwLjcpO1xyXG4gICBtYXgtd2lkdGg6MTAwJTtcclxufVxyXG5cclxuI2Rlc2NyaXB0aW9uIGgye1xyXG4gICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBDVVNUT00gU0NST0xMQkFSICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxuICAgIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM5cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/image/image.component.html":
/*!********************************************!*\
  !*** ./src/app/image/image.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=container>\n    \n    <img [src]=\"imgUrl\" id=image *ngIf=\"imgUrl!=null\"/>\n    \n    <div id=description *ngIf=\"description\">\n        <h2 id=imgHeadline>{{name}}</h2>\n        <p class=description>\n    {{description}}\n        </p>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/image/image.component.ts":
/*!******************************************!*\
  !*** ./src/app/image/image.component.ts ***!
  \******************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnChanges = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgUrl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageComponent.prototype, "imgUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('name'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('description'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapTitle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageComponent.prototype, "mapTitle", void 0);
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/image/image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/interaction/interaction.component.css":
/*!*******************************************************!*\
  !*** ./src/app/interaction/interaction.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-audio{\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n    margin:1%;\r\n    z-index:1000;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ludGVyYWN0aW9uL2ludGVyYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsS0FBSztJQUNMLE9BQU87SUFDUCxTQUFTO0lBQ1QsWUFBWTtBQUNoQiIsImZpbGUiOiIuLi9pbnRlcmFjdGlvbi9pbnRlcmFjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWF1ZGlve1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBtYXJnaW46MSU7XHJcbiAgICB6LWluZGV4OjEwMDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/interaction/interaction.component.html":
/*!********************************************************!*\
  !*** ./src/app/interaction/interaction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n   <app-image [imgUrl]=\"imgUrl\" [name]=\"name\" [description]=\"description\" [mapTitle]=\"imgData.title\"></app-image>\n\n    <app-canvas [imgData]=\"imgData\" [zones]=\"zones\" [zoneCategories]=\"zoneCategories\" [mode]=\"mode\"  (clicked)=\"displayClicked($event)\"> </app-canvas>  \n\n\n<!--<app-controls [cats]=\"cats\"></app-controls>\n\n<app-audio [songUrl]=\"songUrl\" [mode]=\"mode\" [youTubeId]=\"youTubeId\"></app-audio>\n-->\n\n"

/***/ }),

/***/ "./src/app/interaction/interaction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/interaction/interaction.component.ts ***!
  \******************************************************/
/*! exports provided: InteractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionComponent", function() { return InteractionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _classes_zone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/zone */ "./src/app/classes/zone.ts");





var InteractionComponent = /** @class */ (function () {
    function InteractionComponent(_activatedRoute, _dataService) {
        this._activatedRoute = _activatedRoute;
        this._dataService = _dataService;
        this.soundLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.youTubeId = "";
        this.imgCounter = 0;
        this.zones = [];
        this.zoneCategories = [];
        this.mode = "interaction";
    }
    InteractionComponent.prototype.ngOnInit = function () {
        // console.log("route at component: "+this._activatedRoute.snapshot.params['map']);
        //   console.log("selected zone: "+this._activatedRoute.snapshot.params['zone']);
        //this._dataService.askOxford("ΤΗΣ","el");
        var map = this._activatedRoute.snapshot.params['map'];
        var zone = this._activatedRoute.snapshot.params['zone'];
        var ref = this;
        this._dataService.fetchJson(map).subscribe(function (data) {
            //  console.log(data);
            var imgData = data["imgData"];
            ref.imgData = imgData;
            // console.log(ref.imgData);
            ref.imgCount = data.slides.filter(function (s) { return s.fields.icon.value != ""; }).length;
            console.log("expecting " + ref.imgCount + "images total");
            ref.zoneLoader = ref.processIcons(data);
            //  console.log(ref.zones);
            ref.displayZones();
            var catList = ref.zones.map(function (zone) { return zone.category; });
            // this.cats=new Set(catList);
            if (zone) {
                ref.displayClicked(this.zones[zone]);
            }
        });
        // let id=<string>this._activatedRoute.snapshot.params['zid'];
    };
    InteractionComponent.prototype.displayClicked = function (e) {
        //console.log("clicked");
        //console.log(e);
        this.name = e.word;
        this.description = e.description;
        this.imgUrl = e.image;
        if (e.musicSource == "youTube") {
            this.youTubeId = e.music;
            this.songUrl = "";
        }
        else {
            this.songUrl = "assets/audio/music/" + e.music;
            this.youTubeId = "";
        }
        if (e.fields.comment.value) {
            this.commentUrl = "assets/audio/voice/" + e.fields.voice.value;
        }
        this.soundLoaded.emit(this.songUrl);
    };
    InteractionComponent.prototype.processIcons = function (slideSet) {
        var ref = this;
        var result = [];
        var categories = {};
        slideSet.slides.forEach(function (slide) {
            //  console.log("PROCESSING "+ slide.word);
            var newZone;
            slide.component = ref;
            switch (slide.cat) {
                case "translation":
                    newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_4__["Region"](slide);
                    break;
                case "Script":
                    newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_4__["Region"](slide);
                    break;
                case "Content":
                    newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_4__["Glass"](slide);
                    break;
            }
            if (!categories[slide.cat]) {
                var selectedVal = void 0;
                selectedVal = true;
                categories[slide.cat] = { name: slide.cat, zoneCount: 0, selected: selectedVal };
            }
            categories[slide.cat].zoneCount++;
            result.push(newZone);
            // console.log(result);
        });
        console.log(result);
        for (var c in categories) {
            this.zoneCategories.push(categories[c]);
        }
        return result;
    };
    InteractionComponent.prototype.displayZones = function () {
        this.zones = this.zoneLoader;
        console.log("displaying zones");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InteractionComponent.prototype, "soundLoaded", void 0);
    InteractionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interaction',
            template: __webpack_require__(/*! ./interaction.component.html */ "./src/app/interaction/interaction.component.html"),
            styles: [__webpack_require__(/*! ./interaction.component.css */ "./src/app/interaction/interaction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], InteractionComponent);
    return InteractionComponent;
}());



/***/ }),

/***/ "./src/app/magic-glass/magic-glass.component.css":
/*!*******************************************************!*\
  !*** ./src/app/magic-glass/magic-glass.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container{\r\n    position:absolute;\r\n    border:3px solid white;\r\n    background-color:transparent;\r\n    font-size:45px;\r\n    display:none;\r\n    z-index:5000;\r\n}\r\n\r\n\r\nspan.transcription{\r\n    color:blue;\r\n    margin-right: 0.3em;\r\n}\r\n\r\n\r\n.textBox{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row wrap;\r\n    \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21hZ2ljLWdsYXNzL21hZ2ljLWdsYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxtQkFBWTtJQUFaLFlBQVk7SUFDWiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjs7QUFFdkIiLCJmaWxlIjoiLi4vbWFnaWMtZ2xhc3MvbWFnaWMtZ2xhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJvcmRlcjozcHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOjQ1cHg7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB6LWluZGV4OjUwMDA7XHJcbn1cclxuXHJcblxyXG5zcGFuLnRyYW5zY3JpcHRpb257XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcclxufVxyXG5cclxuLnRleHRCb3h7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/magic-glass/magic-glass.component.html":
/*!********************************************************!*\
  !*** ./src/app/magic-glass/magic-glass.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" #container >\n    <div *ngIf=\"mode=='transcription'\" class=textBox>\n        <span class=\"transcription\" *ngFor=\"let w of transcription\" (click)=\"translate(w)\">{{w.transcript}}({{w.translation}})</span>\n    </div>\n    \n    <button (click)=\"mode='transcription'\">Transcribe</button>\n     <button (click)=\"mode='none'\">Clear</button>\n</div>"

/***/ }),

/***/ "./src/app/magic-glass/magic-glass.component.ts":
/*!******************************************************!*\
  !*** ./src/app/magic-glass/magic-glass.component.ts ***!
  \******************************************************/
/*! exports provided: MagicGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicGlassComponent", function() { return MagicGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



var MagicGlassComponent = /** @class */ (function () {
    function MagicGlassComponent(data) {
        this.data = data;
        this.width = 0;
    }
    MagicGlassComponent.prototype.ngOnInit = function () {
    };
    MagicGlassComponent.prototype.placeFrame = function (ic, zoom) {
        this.container.nativeElement.style.display = "block";
        this.container.nativeElement.style.border = "5px solid black";
        this.container.nativeElement.style.width = ic.width * zoom + "px";
        this.container.nativeElement.style.height = ic.height * zoom + "px";
        this.container.nativeElement.style.left = ic.topLeft.x * zoom + "px";
        this.container.nativeElement.style.top = ic.topLeft.y * zoom + "px";
        console.log(this.container.nativeElement.style);
    };
    MagicGlassComponent.prototype.hideFrame = function () {
        this.container.nativeElement.style.display = "none";
    };
    MagicGlassComponent.prototype.translate = function (w) {
        console.log(w);
        this.data.askOxford(w.transcript, "el").subscribe(function (resp) { return w.translation = resp.results[0].lexicalEntries[0].entries[0].senses[0].translations[0].text; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("transcription"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MagicGlassComponent.prototype, "transcription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("container"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MagicGlassComponent.prototype, "container", void 0);
    MagicGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magic-glass',
            template: __webpack_require__(/*! ./magic-glass.component.html */ "./src/app/magic-glass/magic-glass.component.html"),
            styles: [__webpack_require__(/*! ./magic-glass.component.css */ "./src/app/magic-glass/magic-glass.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], MagicGlassComponent);
    return MagicGlassComponent;
}());



/***/ }),

/***/ "./src/app/portal/portal.component.css":
/*!*********************************************!*\
  !*** ./src/app/portal/portal.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\n        width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    background-size: cover;\r\n}\r\n\r\n#portalMenu{\r\n     background-image:url(\"https://www.draconica.net/ft2019/wp-content/uploads/sites/21/2019/02/bg3.jpg\");\r\nheight:80%;\r\n    width:50%;\r\n    box-shadow: 0 0 1em silver;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\na{\r\n    font-size:16pt;\r\n    color:silver;\r\n    text-decoration:none;\r\n    margin:0.2em;\r\n    border-radius:0.2em;\r\n    border: 1px solid silver;\r\n    padding:0.2em;\r\n    -webkit-transition:background-color 0.5s;\r\n    transition:background-color 0.5s;\r\n}\r\n\r\na:hover{\r\n    background-color:rgba(0,0,0,0.6);\r\n}\r\n\r\nh2{\r\n    width:96%;\r\n    color:silver;\r\n    border-bottom:1px solid silver;\r\n    text-align:center;\r\n    padding:0.2em;\r\n}\r\n\r\nimg{\r\n    margin:1em;\r\n    height:40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFdBQVc7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUF3QjtJQUF4Qiw2QkFBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7S0FDSyxvR0FBb0c7QUFDekcsVUFBVTtJQUNOLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXdCO0lBQXhCLDZCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHdDQUFnQztJQUFoQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFHQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2QiLCJmaWxlIjoiLi4vcG9ydGFsL3BvcnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI3BvcnRhbE1lbnV7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL3d3dy5kcmFjb25pY2EubmV0L2Z0MjAxOS93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvMjEvMjAxOS8wMi9iZzMuanBnXCIpO1xyXG5oZWlnaHQ6ODAlO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBzaWx2ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5he1xyXG4gICAgZm9udC1zaXplOjE2cHQ7XHJcbiAgICBjb2xvcjpzaWx2ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIG1hcmdpbjowLjJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6MC4yZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICBwYWRkaW5nOjAuMmVtO1xyXG4gICAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC42KTtcclxufVxyXG5cclxuaDJ7XHJcbiAgICB3aWR0aDo5NiU7XHJcbiAgICBjb2xvcjpzaWx2ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmc6MC4yZW07XHJcbn1cclxuXHJcblxyXG5pbWd7XHJcbiAgICBtYXJnaW46MWVtO1xyXG4gICAgaGVpZ2h0OjQwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/portal/portal.component.html":
/*!**********************************************!*\
  !*** ./src/app/portal/portal.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=wrapper>\n\n<div id=portalMenu>\n    \n    <img src=\"/assets/images/graphics/header5.png\" />\n    <h2>Mapy</h2>\n    <a [routerLink]=\"['../interaction','aritreia']\">Aritreia</a><br>\n    <a [routerLink]=\"['../interaction','ernavorn']\">Ernavorn</a>\n        <h2>Prezentace</h2>\n    <a [routerLink]=\"['../presentation','trailer']\">Úvod</a><br>\n</div>\n    \n    \n</div>\n"

/***/ }),

/***/ "./src/app/portal/portal.component.ts":
/*!********************************************!*\
  !*** ./src/app/portal/portal.component.ts ***!
  \********************************************/
/*! exports provided: PortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalComponent", function() { return PortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortalComponent = /** @class */ (function () {
    function PortalComponent() {
    }
    PortalComponent.prototype.ngOnInit = function () {
    };
    PortalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal',
            template: __webpack_require__(/*! ./portal.component.html */ "./src/app/portal/portal.component.html"),
            styles: [__webpack_require__(/*! ./portal.component.css */ "./src/app/portal/portal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortalComponent);
    return PortalComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DataService = /** @class */ (function () {
    function DataService(_activatedRoute, http) {
        this._activatedRoute = _activatedRoute;
        this.http = http;
        this.presentation = { jedna: "prvni", dva: "druha" };
        console.log("data service construction");
        // console.log(this._activatedRoute.snapshot.params['zid']);
        //this.slide=this._activatedRoute.snapshot.params['zid'];
        //  console.log("SLIDE: "+ this.slide);
    }
    DataService.prototype.fetchJson = function (fileName) {
        console.log("fetch " + fileName);
        return this.http.get("/assets/json/" + fileName + ".json");
    };
    DataService.prototype.askOxford = function (word, language) {
        console.log("look up " + word);
        return this.http.get("/assets/php/askOxford.php?word=" + word + "&lang=" + language);
    };
    DataService.prototype.processIcons = function (slideSet) {
        console.log("PROCEsSING");
        var ref = this;
        slideSet.slides.forEach(function (slide) {
            slide.points = ref.stringToPath(slide.shape);
            slide.imgCoords = ref.calcImgCoords(slide.points);
            if (slide.fields.icon.value) {
                slide.position = slide.imgCoords.topLeft;
                slide.img = new Image();
                slide.img.src = "assets/images/" + slide.fields.icon.value;
                console.log("image loaded: " + slide.img.src);
                slide.source = slide.fields.icon.value;
            }
            if (slide.fields.image.value) {
                slide.img = new Image();
                slide.img.src = "assets/images/" + slide.fields.image.value;
                console.log("image loaded: " + slide.img.src);
                slide.source = slide.fields.icon.value;
            }
        });
    };
    DataService.prototype.getImgData = function (i) {
        return this.imgData[i];
    };
    DataService.prototype.getSlides = function (i) {
        var jsonData = this.fetchJson("aritreia").subscribe(function (data) {
            console.log(data);
            var result = data;
            this.processIcons(result);
            return result;
        });
    };
    DataService.prototype.stringToPath = function (pathString) {
        var coords = pathString.trim().split(/\s+/);
        var rsl = [];
        coords.forEach(function (c) {
            var xy = c.trim().split(",");
            rsl.push({ x: xy[0], y: xy[1] });
        });
        return rsl;
    };
    DataService.prototype.calcImgCoords = function (points) {
        var xs = points.map(function (p) { return p.x; });
        var ys = points.map(function (p) { return p.y; });
        var minX = this.myArrayMin(xs);
        var minY = this.myArrayMin(ys);
        var maxX = this.myArrayMax(xs);
        var maxY = this.myArrayMax(ys);
        return { topLeft: { x: minX, y: minY }, width: maxX - minX, height: maxY - minY, min: { x: minX, y: minY }, max: { x: maxX, y: maxY } };
    };
    DataService.prototype.myArrayMin = function (arr) {
        return Math.min.apply(null, arr);
    };
    DataService.prototype.myArrayMax = function (arr) {
        return Math.max.apply(null, arr);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/drawing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/drawing.service.ts ***!
  \*********************************************/
/*! exports provided: DrawingSvc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingSvc", function() { return DrawingSvc; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DrawingSvc = /** @class */ (function () {
    function DrawingSvc() {
        this.drawingSettings = { uzemi: {}, highlight: {}, highlight_line: {}, Flora: {}, region_white: {}, region_green: {}, region_green_dashed: {}, region_blue: {}, region_red: {}, region_red_dashed: {}, region_purple: {}, region_yellow: {}, border_black: {},
            text: {}, image: {}, cloud: {}, darkCloud: {}, blackness: {}, battlefield: {}, road: {}, sea_road: {}, shadow_outline: {} };
        this.animations = [];
        this.dynamics = [];
        this.animationStage = 0;
        this.drawingSettings.uzemi = { fillStyle: "transparent", strokeStyle: "red", lineWidth: 5, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.Flora = { fillStyle: "rgba(0,255,0,0.5)", strokeStyle: "transparent", lineWidth: 1, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.region_white = { fillStyle: "rgba(255,255,255,0.2)", strokeStyle: "black", lineWidth: 3, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.region_green = { fillStyle: "rgba(0,255,0,0.2)", strokeStyle: "black", lineWidth: 3, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.region_blue = { fillStyle: "rgba(0,0,255,0.2)", strokeStyle: "black", lineWidth: 3, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.region_red = { fillStyle: "rgba(255,0,0,0.2)", strokeStyle: "black", lineWidth: 3, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.region_purple = { fillStyle: "rgba(255,0,255,0.2)", strokeStyle: "black", lineWidth: 3, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.region_yellow = { fillStyle: "rgba(239, 222, 28, 0.2)", strokeStyle: "black", lineWidth: 3, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.border_black = { fillStyle: "transparent", strokeStyle: "black", lineWidth: 3, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.text = { fillStyle: "yellow", strokeStyle: "black", lineWidth: 3, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.highlight = { fillStyle: "rgba(255,255,255,0.2)", strokeStyle: "transparent", lineWidth: 5, shadowColor: "white", shadowBlur: 10 };
        this.drawingSettings.highlight_line = { fillStyle: "transparent", strokeStyle: "rgba(255,255,255,0.7)", lineWidth: 8, shadowColor: "white", shadowBlur: 5 };
        this.drawingSettings.image = { fillStyle: "white", strokeStyle: "transparent", lineWidth: 5, shadowColor: "white", shadowBlur: 10 };
        this.drawingSettings.shadow_outline = { fillStyle: "transparent", strokeStyle: "rgba(0,0,255,0.5)", lineWidth: 3, shadowColor: "blue", shadowBlur: 10 };
        this.drawingSettings.cloud = { fillStyle: "rgba(255,255,255,0.8)", strokeStyle: "transparent", lineWidth: 0, shadowColor: "rgba(255,255,255,0.8)", shadowBlur: 50 };
        this.drawingSettings.darkCloud = { fillStyle: "rgba(20,20,20,0.99)", strokeStyle: "transparent", lineWidth: 0, shadowColor: "rgba(255,255,255,0.8)", shadowBlur: 100 };
        this.drawingSettings.battlefield = { fillStyle: "rgba(255,0,0,0.5)", strokeStyle: "transparent", lineWidth: 0, shadowColor: "rgba(255,0,0,0.5)", shadowBlur: 10 };
        this.drawingSettings.road = { fillStyle: "transparent", strokeStyle: "rgba(89, 52, 0,0.9)", lineWidth: 4, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.sea_road = { fillStyle: "transparent", strokeStyle: "rgba(27, 29, 76,0.9)", lineWidth: 4, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.blackness = { fillStyle: "black", strokeStyle: "transparent", lineWidth: 0, shadowColor: "black", shadowBlur: 5 };
        this.imgData = {};
    }
    DrawingSvc.prototype.runAnimations = function (ctx, animCtx, canvas, zoom, startTime, duration) {
        //  console.log("animating");
        // this.applySetting(animCtx,"image");
        var ref = this;
        var requestAnimationFrame = window.requestAnimationFrame;
        requestAnimationFrame(function () { ref.animate(ctx, animCtx, canvas, zoom, startTime, duration); });
    };
    DrawingSvc.prototype.animate = function (ctx, animCtx, canvas, zoom, startTime, duration) {
        animCtx.clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
        var ref = this;
        this.animations.forEach(function (a, ai) {
            var now = Date.now();
            var runningTime = now - startTime;
            // console.log("running: "+runningTime);
            if (a.offset <= runningTime && a.offset + a.duration >= runningTime) {
                a.animate(animCtx, ref.calcStage(startTime + a.offset, a.duration), canvas, zoom);
            }
        });
        if (this.animationStage < 1) {
            this.animationStage = this.calcStage(startTime, duration);
            requestAnimationFrame(function () { ref.runAnimations(ctx, animCtx, canvas, zoom, startTime, duration); });
        }
        else {
            //  console.log("animation finished");
            animCtx.clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
            this.animations.filter(function (a) { return a.fixed; }).forEach(function (a) {
                console.log("fixing ");
                console.log(a);
                a.draw(ctx);
            });
            //    console.log(this.animations);
        }
    };
    DrawingSvc.prototype.calcStage = function (startTime, duration) {
        var now = Date.now();
        var diff = now - startTime;
        var stage = diff / duration;
        return stage;
    };
    DrawingSvc.prototype.writeText = function (ctx, text, canvasWidth, canvasHeight) {
        this.applySetting(ctx, "text");
        ctx.textAlign = "center";
        ctx.fillStyle = "yellow";
        var fontSize = canvasHeight / 20;
        ctx.font = "800 " + fontSize + "px Arial";
        var textWidth = ctx.measureText(text.text).width;
        var x = canvasWidth / 2;
        var y;
        if (textWidth <= canvasWidth - 50) {
            y = canvasHeight - 20 - fontSize;
            this.placeText(ctx, text.text.replace(";", ""), x, y);
        }
        else {
            var textSplit = text.text.split(";");
            y = canvasHeight - 40 - (fontSize * 2);
            this.placeText(ctx, textSplit[0], x, y);
            y = canvasHeight - 20 - fontSize;
            this.placeText(ctx, textSplit[1], x, y);
        }
    };
    DrawingSvc.prototype.placeText = function (ctx, text, x, y) {
        ctx.fillText(text, x, y);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.strokeText(text, x, y);
    };
    DrawingSvc.prototype.drawPolygon = function (ctx, points, setting) {
        // this.applySetting(ctx,this.drawingSettings[setting]);
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var p = 1; p < points.length; p++) {
            ctx.lineTo(points[p].x, points[p].y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
    DrawingSvc.prototype.drawLine = function (ctx, points, setting) {
        // this.applySetting(ctx,this.drawingSettings[setting]);
        ctx.beginPath();
        ctx.setLineDash([10, 6]);
        ctx.moveTo(points[0].x, points[0].y);
        for (var p = 1; p < points.length; p++) {
            ctx.lineTo(points[p].x, points[p].y);
        }
        ctx.stroke();
        ctx.setLineDash([]);
    };
    DrawingSvc.prototype.drawCover = function (ctx, points) {
        // this.applySetting(ctx,this.drawingSettings[setting]);
        ctx.fillRect(0, 0, 5000, 5000);
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var p = 1; p < points.length; p++) {
            ctx.lineTo(points[p].x, points[p].y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
    };
    DrawingSvc.prototype.drawImage = function (ctx, zone) {
        //  console.log(zone);
        //  ctx.globalAlpha=1;
        var shift = [0, 0];
        //   zone.img.src = "assets/images/"+zone.source;
        var ix = parseInt(zone.imgCoords.topLeft.x + shift[0]);
        var iy = parseInt(zone.imgCoords.topLeft.y + shift[1]);
        //console.log(ctx.globalAlpha);
        //  console.log(zone.img.src);
        //    console.log(zone.img+" / "+ix+" / "+ iy+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
        ctx.drawImage(zone.img, ix, iy, zone.imgCoords.width, zone.imgCoords.height);
        ctx.globalAlpha = 1;
    };
    DrawingSvc.prototype.drawStaticImage = function (ctx, zone) {
        this.applySetting(ctx, "image");
        // let img=new Image();
        zone.img.onload = function (img) {
            //    console.log(zone.img+" / "+zone.imgCoords.topLeft.x+" / "+ zone.imgCoords.topLeft.y+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
            ctx.drawImage(zone.img, zone.imgCoords.topLeft.x, zone.imgCoords.topLeft.y, zone.imgCoords.width, zone.imgCoords.height);
            ctx.font = "20px Georgia";
            //ctx.fillStyle="black";
            ctx.globalAlpha = 1;
            ctx.fillText(zone.word, zone.imgCoords.topLeft.x, zone.imgCoords.topLeft.y + zone.imgCoords.height);
        };
    };
    DrawingSvc.prototype.drawTransparentImage = function (ctx, zone, zoom) {
        //console.log(zone.alpha);
        this.applySetting(ctx, "image");
        this.applyTransform(ctx, zone.transformSetting);
        // ctx.scale(zone.maxScale, zone.maxScale);
        // console.log(zone.img+" / "+zzoone.imgCoords.topLeft.x+" / "+ zone.imgCoords.topLeft.y+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
        ctx.drawImage(zone.img, 0, 0, zone.imgCoords.width, zone.imgCoords.height);
    };
    DrawingSvc.prototype.drawCurtain = function (ctx, zone) {
        ctx.fillStyle = "rgba(0,0,0,0.7)";
        // console.log(zone.img+" / "+zzoone.imgCoords.topLeft.x+" / "+ zone.imgCoords.topLeft.y+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
        ctx.fillRect(0, 0, zone.imgCoords.width, zone.imgCoords.height);
    };
    //old version
    DrawingSvc.prototype.calcDestination = function (position, destination, stage) {
        // console.log(stage);
        var diffX = destination[0] - position.x;
        var diffY = destination[1] - position.y;
        //  console.log(diffY);
        var shift = [diffX * stage, diffY * stage];
        //  console.log(position);
        //    console.log(destination);
        //  console.log(shift);
        return shift;
    };
    DrawingSvc.prototype.calcAnimationPath = function (position, points) {
        var result = [{ start: { time: 0, point: position }, end: { time: 0, point: { x: position.x, y: position.y } }, distance: 0, relDistance: 0 }];
        var ref = this;
        points.forEach(function (p, pi) {
            result[pi].end.point = p;
            result[pi].distance = ref.calcPathLength(result[pi].start.point, result[pi].end.point);
            result.push({ start: { time: 0, point: p }, end: { time: 0, point: { x: position.x, y: position.y } }, distance: 0, relDistance: 0 });
        });
        var distances = result.map(function (r) { return r.distance; });
        // console.log("total distance array: " + distances);
        var totalDistance = distances.reduce(function (tot, d) { return tot + d; });
        //  console.log("total distance: " + totalDistance);
        var counter = 0;
        result.forEach(function (r, ri) {
            r.relDistance = r.distance / totalDistance;
            r.start.time = counter;
            counter += r.relDistance;
            r.end.time = counter;
        });
        return result;
    };
    DrawingSvc.prototype.calcPathLength = function (a, b) {
        var sx = Math.abs(a.x - b.x);
        var sy = Math.abs(a.y - b.y);
        var p = Math.sqrt(Math.pow(sx, 2) + Math.pow(sy, 2));
        return p;
    };
    DrawingSvc.prototype.applySetting = function (ctx, stg) {
        // ctx.globalAlpha=this.drawingSettings[stg].globalAlpha;
        ctx.fillStyle = this.drawingSettings[stg].fillStyle;
        ctx.strokeStyle = this.drawingSettings[stg].strokeStyle;
        ctx.lineWidth = this.drawingSettings[stg].lineWidth;
        ctx.shadowColor = this.drawingSettings[stg].shadowColor;
        ctx.shadowBlur = this.drawingSettings[stg].shadowBlur;
        if (this.drawingSettings[stg].dashed) {
            ctx.setLineDash([10, 6]);
        }
        else {
            ctx.setLineDash([]);
        }
    };
    DrawingSvc.prototype.applyTransform = function (ctx, transformSetting) {
        // console.log(">>> TRANSFORMING: " + transformSetting.globalAlpha);
        //console.log(transformSetting);
        var scale = transformSetting.scale;
        ctx.globalAlpha = transformSetting.globalAlpha;
        ctx.translate(transformSetting.translate.x, transformSetting.translate.y);
        ctx.scale(scale, scale);
    };
    DrawingSvc.prototype.calcScaleToFit = function (img, canvas, zoom) {
        // console.log(canvas);
        var wrapperWidth = canvas.nativeElement.offsetWidth;
        var wrapperHeight = canvas.nativeElement.offsetHeight;
        // console.log(wrapperWidth*zoom +" <> "+wrapperHeight*zoom);
        // console.log(img.width);
        var ratioX = parseInt(wrapperWidth) / parseInt(img.width);
        var ratioY = parseInt(wrapperHeight) / parseInt(img.height);
        //  console.log(ratioX +" - "+ratioY);
        var maxScale;
        if (ratioX <= ratioY) {
            maxScale = ratioX;
        }
        else {
            maxScale = ratioY;
        }
        var centerX = (wrapperWidth - (img.width * maxScale)) / 2;
        var centerY = (wrapperHeight - (img.height * maxScale)) / 2;
        var centerOrigX = (wrapperWidth - (img.width)) / 2;
        var centerOrigY = (wrapperHeight - (img.height)) / 2;
        //   console.log({maxScale: maxScale, center : {x:centerX, y:centerY}});
        return { maxScale: maxScale, center: { x: centerX, y: centerY }, centerOrig: { x: centerOrigX, y: centerOrigY } };
    };
    DrawingSvc.prototype.stringToPath = function (pathString) {
        var coords = pathString.trim().split(/\s+/);
        var rsl = [];
        coords.forEach(function (c) {
            var xy = c.trim().split(",");
            rsl.push({ x: xy[0], y: xy[1] });
        });
        return rsl;
    };
    //NOt USED
    DrawingSvc.prototype.drawTexture = function (ctx, zone, cat) {
        //  console.log("drawing texture");
        // console.log("texture loaded");
        // zone.img.src="assets/images/textures/forest_tile.png";
        var texture = ctx.createPattern(zone.img, "repeat");
        ctx.fillStyle = texture;
        ctx.strokeStyle = "transparent";
        ctx.beginPath();
        ctx.moveTo(zone.points[0].x, zone.points[0].y);
        for (var p = 1; p < zone.points.length; p++) {
            //    console.log(p);
            ctx.lineTo(zone.points[p].x, zone.points[p].y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.globalCompositeOperation = 'source-in';
        zone.source = "textures/forest_tile.png";
        //this.drawStaticImage(ctx,zone);)
        //     console.log(texture);
        //console.log("TEXTURE: /"+texture+" / "+zone.imgCoords.topLeft.x+" / "+ zone.imgCoords.topLeft.y+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
        // ctx.fillStyle="transparent";
        //  ctx.drawImage(texture,zone.imgCoords.topLeft.x, zone.imgCoords.topLeft.y, zone.imgCoords.width, zone.imgCoords.height);
        //ctx.fillStyle="blue";
        //ctx.fillRect(0,0,3000, 3000);
        ctx.globalCompositeOperation = 'source-over';
        //this.applySetting(ctx,this.drawingSettings[cat]);
    };
    DrawingSvc = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DrawingSvc);
    return DrawingSvc;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Elfin\Node\hackathon-qmul\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map