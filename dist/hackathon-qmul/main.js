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
    { path: 'interaction/:source/:canvases/:annotation', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_4__["InteractionComponent"] },
    { path: 'single/:source/:canvases', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_4__["InteractionComponent"] },
    { path: 'interaction/:source/:canvases', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_4__["InteractionComponent"] },
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

module.exports = "* {box-sizing: border-box}\r\nhtml,body {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: black;\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxzQkFBc0I7QUFDekI7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcbmh0bWwsYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"

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
/* harmony import */ var _split_screen_split_screen_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./split-screen/split-screen.component */ "./src/app/split-screen/split-screen.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");










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
                _magic_glass_magic_glass_component__WEBPACK_IMPORTED_MODULE_14__["MagicGlassComponent"],
                _split_screen_split_screen_component__WEBPACK_IMPORTED_MODULE_15__["SplitScreenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_12__["NgxYoutubePlayerModule"].forRoot(),
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]
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

module.exports = "\r\n\r\naudio{    width: 50%;\r\n  display:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8vYXVkaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFVBQVUsVUFBVTtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdWRpby9hdWRpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5hdWRpb3sgICAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/audio/audio.component.html":
/*!********************************************!*\
  !*** ./src/app/audio/audio.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<youtube-player *ngIf=\"youTubeId\"\n          [videoId]=\"youTubeId\"\n          (ready)=\"saveYT($event)\"\n          (change)=\"changeYT($event)\"\n                 width=\"50%\" \n       >\n        </youtube-player>\n\n\n<div id=audio>\n     <audio id=music controls #music>\n        <source id=song [src]=\"songUrl\" type=\"audio/mpeg\" #song>\n    </audio>\n    \n     <audio id=voice controls #voice>\n        <source id=comment [src]=\"commentUrl\" type=\"audio/mpeg\" #comment>\n    </audio>\n    \n</div>\n    \n"

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
        console.log("audio changes");
        if (this.youTubeId) {
            console.log("receiving youtube id: " + this.youTubeId);
            this.youTube.loadVideoById(this.youTubeId);
            this.music.nativeElement.pause();
            // this.youTube.playVideo();
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

module.exports = "#wrapper{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\n#zoom{\r\n    padding: .4rem;\r\n    margin: 0.2em;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    color: black;\r\n    min-width: 2em;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color:white;\r\n}\r\n\r\n#zoom button{\r\n    color:white;\r\n    background-color:black;\r\n    border-radius:0.5em;\r\n    font-weight:bold;\r\n}\r\n\r\n#zoomToFit{\r\n    background-image:url(\"/assets/images/graphics/arrow_back.png\");\r\n    width:1.5em;\r\n    height:2em;\r\n        background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.dspButton{\r\n    border-radius: 0.2em;\r\nfont-weight:bold;\r\n    margin:0.25em;\r\n  \r\n}\r\n\r\n.showButton{\r\n    background-color:black;\r\n    color:white;\r\n    opacity:0.5;\r\n}\r\n\r\n.hideButton{\r\n    background-color:black;\r\n    color:black;\r\n}\r\n\r\n.categorySwitch{\r\n margin-left:1em;\r\n    padding-left:0.5em;\r\n    border-left: 2px solid white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzLWNvbnRyb2xzL2NhbnZhcy1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQXFCO0lBQXJCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osY0FBYztJQUNkLDhCQUFxQjtJQUFyQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOERBQThEO0lBQzlELFdBQVc7SUFDWCxVQUFVO1FBQ04sNEJBQTRCO0lBQ2hDLDBCQUEwQjtBQUM5Qjs7QUFHQTtJQUNJLG9CQUFvQjtBQUN4QixnQkFBZ0I7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtDQUNDLGVBQWU7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY2FudmFzLWNvbnRyb2xzL2NhbnZhcy1jb250cm9scy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jem9vbXtcclxuICAgIHBhZGRpbmc6IC40cmVtO1xyXG4gICAgbWFyZ2luOiAwLjJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWluLXdpZHRoOiAyZW07XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiN6b29tIGJ1dHRvbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6MC41ZW07XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcblxyXG4jem9vbVRvRml0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9ncmFwaGljcy9hcnJvd19iYWNrLnBuZ1wiKTtcclxuICAgIHdpZHRoOjEuNWVtO1xyXG4gICAgaGVpZ2h0OjJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcblxyXG4uZHNwQnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbmZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW46MC4yNWVtO1xyXG4gIFxyXG59XHJcblxyXG4uc2hvd0J1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG9wYWNpdHk6MC41O1xyXG59XHJcblxyXG4uaGlkZUJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLmNhdGVnb3J5U3dpdGNoe1xyXG4gbWFyZ2luLWxlZnQ6MWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OjAuNWVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/canvas-controls/canvas-controls.component.html":
/*!****************************************************************!*\
  !*** ./src/app/canvas-controls/canvas-controls.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n<div id=\"zoom\" role=\"group\" aria-label=\"Manuscript zoom\">\n\n            <button  id=\"zoomIn\" (click)=\"zoomChng(0.1)\">\n              +\n            </button>\n            <button  cid=\"zoomOut\" (click)=\"zoomChng(-0.1)\">\n              -\n            </button>\n    \n\n        \n     <button  (click)=\"zoomChng(fitZoom-zoom)\" *ngIf=\"zoom>fitZoom\">\n             Back\n            </button>\n    \n    <button (click)=\"navigate('map',0)\">Map</button>\n    \n    <button  (click)=\"navigate('aquila_v','0,1')\" >\n             Home\n            </button>\n    \n          </div>\n    <ng-container  *ngFor=\"let zc of zoneCategories\" >\n   \n        <button [style.border-color]=catColors[zc.name] [style.color]=catColors[zc.name] class=\"dspButton\" (click)=\"zc.selected=!zc.selected; selectionChng()\" [ngClass]=\"zc.selected ? 'hideButton' : 'showButton'\">{{zc.name}} ({{zc.zoneCount}})</button>\n    \n    </ng-container>\n    \n    \n    \n</div>  \n\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CanvasControlsComponent = /** @class */ (function () {
    function CanvasControlsComponent(router) {
        this.router = router;
        this.changeZoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeOpacity = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.catColors = { Content: "yellow", Script: "red" };
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
    CanvasControlsComponent.prototype.navigate = function (set, part) {
        console.log("going to map");
        this.router.navigate(['interaction/' + set + '/' + part]);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "*{box-sizing:boder-box}\r\n\r\n#msCanvas, manuscript{-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s, -webkit-transform .5s; -webkit-transition: background-image .5x; transition: background-image .5x; -webkit-transform-origin:center center; transform-origin:center center}\r\n\r\n#msCanvas,#interactiveCanvas, #animationCanvas{position:absolute;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transition:background-color 1s, -webkit-transform .5s;transition:background-color 1s, -webkit-transform .5s;transition:transform .5s, background-color 1s;transition:transform .5s, background-color 1s, -webkit-transform .5s; \r\n}\r\n\r\n#msWrapper{position:absolute;\r\n    overflow:scroll;\r\n\r\nbackground-color: rgb(20,20,20);\r\n  /*  background-image:url(\"https://www.draconica.net/ft2019/wp-content/uploads/sites/21/2019/02/bg3.jpg\");*/\r\nwidth: 98%;\r\nheight: 98%;\r\nmargin: 0.1em;}\r\n\r\napp-canvas-controls{\r\n    background-color:transparent;\r\n    width:100%;\r\n    height:5%;\r\n    position:fixed;\r\n    top:0;\r\n    left:0.5%;\r\n    color:white;\r\n}\r\n\r\n#manuscript{border: 1px solid black;\r\nwidth: 100%;\r\nheight: 100%;\r\nposition: absolute;\r\n    background-color:black;\r\nleft:0%;\r\ntop:0}\r\n\r\nh1{\r\n       position: absolute;\r\n    top: 6%;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 0;\r\n    color: transparent;\r\n    -webkit-transition:color 1s;\r\n    transition:color 1s;\r\n}\r\n\r\nh1:hover{\r\n    color:black;\r\n}\r\n\r\n/* CUSTOM SCROLLBAR */\r\n\r\n::-webkit-scrollbar {\r\n    width: 11px;\r\n    height: 11px;\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n    width: 0px;\r\n    height: 0px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgb(20,20,20);\r\n    border: 2px solid #ffffff;\r\n    border-radius: 50px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #ffffff;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n    background: #000000;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: rgb(20,20,20);\r\n    border: 0px none #ffffff;\r\n    border-radius: 39px;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-track:active {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n    background: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsb0JBQW9COztBQUV0QixzQkFBc0Isd0NBQXdCLENBQXhCLGdDQUF3QixDQUF4Qix3QkFBd0IsQ0FBeEIsK0NBQXdCLEVBQUUsd0NBQWdDLEVBQWhDLGdDQUFnQyxFQUFFLHNDQUE2QixFQUE3Qiw4QkFBOEI7O0FBR2hILCtDQUErQyxpQkFBaUIsQ0FBQyxpQ0FBeUIsQ0FBekIseUJBQXlCLENBQUMsNkRBQTZDLENBQTdDLHFEQUE2QyxDQUE3Qyw2Q0FBNkMsQ0FBN0Msb0VBQTZDO0FBQ3hJOztBQUNBLFdBQVcsaUJBQWlCO0lBQ3hCLGVBQWU7O0FBRW5CLCtCQUErQjtFQUM3QiwwR0FBMEc7QUFDNUcsVUFBVTtBQUNWLFdBQVc7QUFDWCxhQUFhLENBQUM7O0FBSWQ7SUFDSSw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLFNBQVM7SUFDVCxjQUFjO0lBQ2QsS0FBSztJQUNMLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUEsWUFBWSx1QkFBdUI7QUFDbkMsV0FBVztBQUNYLFlBQVk7QUFDWixrQkFBa0I7SUFDZCxzQkFBc0I7QUFDMUIsT0FBTztBQUNQLEtBQUs7O0FBRUw7T0FDTyxrQkFBa0I7SUFDckIsT0FBTztJQUNQLE9BQU87SUFDUCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsMkJBQW1CO0lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFDQSxxQkFBcUI7O0FBRXJCO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7Ym94LXNpemluZzpib2Rlci1ib3h9XHJcblxyXG4jbXNDYW52YXMsIG1hbnVzY3JpcHR7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC41eDsgdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfVxyXG5cclxuXHJcbiNtc0NhbnZhcywjaW50ZXJhY3RpdmVDYW52YXMsICNhbmltYXRpb25DYW52YXN7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXMsIGJhY2tncm91bmQtY29sb3IgMXM7IFxyXG59XHJcbiNtc1dyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzpzY3JvbGw7XHJcblxyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsMjAsMjApO1xyXG4gIC8qICBiYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vd3d3LmRyYWNvbmljYS5uZXQvZnQyMDE5L3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8yMS8yMDE5LzAyL2JnMy5qcGdcIik7Ki9cclxud2lkdGg6IDk4JTtcclxuaGVpZ2h0OiA5OCU7XHJcbm1hcmdpbjogMC4xZW07fVxyXG5cclxuXHJcblxyXG5hcHAtY2FudmFzLWNvbnRyb2xze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NSU7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowLjUlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiNtYW51c2NyaXB0e2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5sZWZ0OjAlO1xyXG50b3A6MH1cclxuXHJcbmgxe1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2JTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246Y29sb3IgMXM7XHJcbn1cclxuXHJcbmgxOmhvdmVye1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLyogQ1VTVE9NIFNDUk9MTEJBUiAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTFweDtcclxuICAgIGhlaWdodDogMTFweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMCwyMCwyMCk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMCwyMCwyMCk7XHJcbiAgICBib3JkZXI6IDBweCBub25lICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzOXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMCwyMCwyMCk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMCwyMCwyMCk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/canvas/canvas.component.html":
/*!**********************************************!*\
  !*** ./src/app/canvas/canvas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n     \n<div id=manuscript [style.width]=height  #manuscript>\n    \n  \n    \n            <div id=\"msWrapper\" #msWrapper [style.overflow]=\"mode=='interaction' ? 'scroll':'hidden'\">\n          <canvas #msCanvas id=msCanvas [style.opacity]=1 [attr.width]=\"imgData.width\" [attr.height]=\"imgData.height\" style=\"border:2px solid black;\n            background-color:transparent'); background-image:url('')\" draggable ></canvas>\n                <canvas #animationCanvas id=animationCanvas  [attr.width]=\"imgData.width\" [attr.height]=\"imgData.height\" style=\"border:2px solid black;\n            background-color:transparent'); background-image:url('')\" draggable ></canvas>\n             <canvas #interactiveCanvas  [style.opacity]=1 id=interactiveCanvas  [attr.width]=\"imgData.width\" [attr.height]=\"imgData.height\"  style=\"border:2px solid black;\n            background-color:transparent'); background-image:url('')\" draggable (document:mousemove)=\"locatePolygon($event, ctx, false)\" (click)=\"locatePolygon($event, ctx, true)\">\n                   \n                </canvas>    \n            \n                 <app-canvas-controls *ngIf=\"mode=='interaction'\" [opacityRatio]=opacityRatio [zoom]=\"zoom\" [fitZoom]=\"fitZoom\" [zoneCategories]=\"zoneCategories\" (changeZoom)=\"zoomChng($event)\" (changeSelection)=\"redrawSelected($event)\"  (changeOpacity)=\"opacityChng($event)\" ></app-canvas-controls>\n                \n                 <app-magic-glass [fontSize]=\"imgData.fontSize\" [infoWindow]=infoWindow [manuscript]=animation #magicglass></app-magic-glass>\n                <h1 > {{imgData.title}}</h1>\n            </div>\n     \n  \n    \n      </div>  \n \n\n   "

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
        this.startTime = Date.now();
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
        if (this.displayedZones) {
            this.processZones(this.displayedZones);
        }
    };
    CanvasComponent.prototype.ngOnChanges = function () {
        console.log(this.zones);
        console.log(this.imgData);
        //  console.log("--CANVAS--ON CHANGES--");
        if (this.imgData) {
            this.bgImage = this.imgData.url;
            this.canvas.nativeElement.style.backgroundImage = "url(" + this.bgImage + ")";
            //  this.interaction.nativeElement.style.backgroundImage="url("+this.imgData.url2+")";
            this.zoom = this.calcZoomToFit();
            this.fitZoom = this.zoom;
            this.scaleCanvas([this.canvas, this.interaction, this.animation], this.wrapper, this.outer, this.zoom, this.fitZoom, { x: 0, y: 0 });
        }
        if (this.ctx && this.interCtx && this.animCtx) {
            this.displayedZones = this.zones;
            if (this.displayedZones) {
                this.processZones(this.displayedZones);
            }
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
            if (_this.mode == "preview") {
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
            console.log("running animations");
            var ref_1 = this;
            ref_1._drawingSvc.runAnimations(ref_1.ctx, ref_1.animCtx, ref_1.animation, ref_1.zoom, Date.now(), 8000);
            setInterval(function () { ref_1._drawingSvc.runAnimations(ref_1.ctx, ref_1.animCtx, ref_1.animation, ref_1.zoom, Date.now(), 8000); }, 8500);
        }
    };
    CanvasComponent.prototype.locatePolygon = function (mouse, ctx, display) {
        if (this.mode == "interaction" && this.displayedZones) {
            var rZone;
            var ref_2 = this;
            //z.cat!="movement" && 
            this.displayedZones.filter(function (z) { return (z != ref_2.selectedZone && z.category != "Mrak"); }).forEach(function (zone, zid) {
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
                //    console.log(this.magicGlass);
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
        this.magicGlass.hideFrame();
        // console.log(zChng);
        // console.log("before:", this.zoom);
        var newZoomLevel = this.zoom + parseFloat(zChng);
        this.zoom = newZoomLevel >= .1 ? newZoomLevel : .1;
        //  console.log("after:", this.zoom);
        this.scaleCanvas([this.canvas, this.interaction, this.animation], this.wrapper, this.outer, this.zoom, this.fitZoom, { x: 0, y: 0 });
    };
    CanvasComponent.prototype.moveInTime = function (year) {
        console.log("moving to " + year);
        console.log(this.zones);
        this.canvas.nativeElement.style.opacity = 1;
        this.interaction.nativeElement.style.opacity = 0;
        // this.displayedZones = this.zones.filter((z)=>year>=z.startDate && year<=z.endDate);
        //    this.processZones(this.displayedZones);
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
        zone.activate(this.ctx, this.magicGlass, nzm);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("slideConfig"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "slideConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("top"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CanvasComponent.prototype, "top", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("height"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CanvasComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("infoWindow"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CanvasComponent.prototype, "infoWindow", void 0);
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
/*! exports provided: Zone, Icon, Region, Cover, Poster, Slide, Text, Curtain, Cloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return Zone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
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
        console.log("constructing zone");
        this.static = true;
        this.word = slide.word;
        this.category = slide.cat;
        this.title = slide.fields.title.value;
        this.image = slide.fields.image.value;
        this.description = slide.fields.description.value;
        this.music = slide.fields.music.value;
        // this.comment = slide.fields.comment.value;
        this.points = this.drawing.stringToPath(slide.shape);
        this.imgCoords = this.calcImgCoords(this.points);
        console.log(this.imgCoords);
        var timeSpan = slide.fields.timeSpan.value.split("-");
        this.startDate = timeSpan[0];
        this.endDate = timeSpan[1];
        if (slide.fields.drawingSetting) {
            this.drawingSetting = slide.fields.drawingSetting.value;
        }
        else {
            this.drawingSetting = slide.cat;
        }
        if (slide.fields.image.value) {
            this.img = new Image();
            this.img.src = slide.fields.image.value;
            //console.log("image loaded: " + this.img.src);
            this.source = slide.fields.icon.value;
        }
        console.log(this);
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
    function Region(slide, imgData) {
        var _this = _super.call(this, slide) || this;
        _this.offset = 0;
        _this.duration = 8000;
        //console.log("constructing region");
        var transcription = null;
        var translation = null;
        if (slide.fields.transcription) {
            transcription = slide.fields.transcription.value.split(" ").map(function (w) { return { transcript: w, translation: "" }; });
        }
        if (slide.fields.translation) {
            translation = slide.fields.translation.value.split(" ").map(function (w) { return { transcript: w }; });
        }
        _this.msText = { transcription: transcription, translation: translation, bgImage: imgData.url, bgImage2: imgData.url2 };
        console.log(_this);
        return _this;
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
    Region.prototype.activate = function (ctx, component, zoom) {
        console.log("activating");
        console.log(component.container.nativeElement);
        // ctx.clearRect(this.imgCoords.topLeft.x, this.imgCoords.topLeft.y, this.imgCoords.width, this.imgCoords.height);
        component.placeFrame(this, zoom);
        console.log(component);
    };
    return Region;
}(Zone));

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
        _this.img.src = slide.fields.image.value;
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

module.exports = "* {box-sizing: border-box}\r\n\r\n#container{\r\n    position:absolute;\r\n    left:0;\r\n    bottom:0;\r\n    width: 100%;\r\n    height:0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column nowrap;\r\n    background-color: rgba(0,0,0,0.8);\r\n    color: white;\r\n    padding:1em;\r\n    z-index:2500;\r\n    overflow-y : scroll;\r\n        -webkit-transition: height 2s;\r\n        transition: height 2s;\r\n}\r\n\r\n#image{\r\n   background-color: rgba(100,100,100,0.3);\r\nmargin: 0.5em;\r\n    margin-bottom: 1em;\r\nmargin-bottom: 0;\r\nbox-shadow: 0 0 15px rgba(0,0,0,0.7);\r\nmax-width: 100%;\r\nborder: 2px outset rgb(100,100,100);\r\n}\r\n\r\n#description{\r\n       background-color: rgba(0,0,0,0.7);\r\nmargin:0.5em;\r\n    padding:1em;\r\nbox-shadow: 0 0 15px rgba(0,0,0,0.7);\r\n   max-width:100%;\r\n}\r\n\r\n#description h2{\r\n    border-bottom : 1px solid white;\r\n}\r\n\r\n#closeButton{\r\n    border:none;\r\n    color:white;\r\n    background-color:transparent;\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n    width:2em;\r\n    height : 2em;\r\n    border-radius:0.2em;\r\n}\r\n\r\n#closeButton:hover{\r\n   color:black;\r\n    background-color:rgba(255,255,255,0.5);\r\n}\r\n\r\n/* CUSTOM SCROLLBAR */\r\n\r\n::-webkit-scrollbar {\r\n    width: 11px;\r\n    height: 11px;\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n    width: 0px;\r\n    height: 0px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgb(20,20,20);\r\n    border: 2px solid #ffffff;\r\n    border-radius: 50px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #ffffff;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n    background: #000000;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: rgb(20,20,20);\r\n    border: 0px none #ffffff;\r\n    border-radius: 39px;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-track:active {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n    background: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFHLHNCQUFzQjs7QUFFekI7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsUUFBUTtJQUNSLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUF3QjtJQUF4Qiw2QkFBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7UUFDZiw2QkFBcUI7UUFBckIscUJBQXFCO0FBQzdCOztBQUVBO0dBQ0csdUNBQXVDO0FBQzFDLGFBQWE7SUFDVCxrQkFBa0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLG9DQUFvQztBQUNwQyxlQUFlO0FBQ2YsbUNBQW1DO0FBQ25DOztBQUVBO09BQ08saUNBQWlDO0FBQ3hDLFlBQVk7SUFDUixXQUFXO0FBQ2Ysb0NBQW9DO0dBQ2pDLGNBQWM7QUFDakI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsS0FBSztJQUNMLE9BQU87SUFDUCxTQUFTO0lBQ1QsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtHQUNHLFdBQVc7SUFDVixzQ0FBc0M7QUFDMUM7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS9pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuXHJcbiNjb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuICAgIHotaW5kZXg6MjUwMDtcclxuICAgIG92ZXJmbG93LXkgOiBzY3JvbGw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xyXG59XHJcblxyXG4jaW1hZ2V7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLDEwMCwxMDAsMC4zKTtcclxubWFyZ2luOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxubWFyZ2luLWJvdHRvbTogMDtcclxuYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLDAsMCwwLjcpO1xyXG5tYXgtd2lkdGg6IDEwMCU7XHJcbmJvcmRlcjogMnB4IG91dHNldCByZ2IoMTAwLDEwMCwxMDApO1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb257XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbm1hcmdpbjowLjVlbTtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG5ib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgIG1heC13aWR0aDoxMDAlO1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb24gaDJ7XHJcbiAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b257XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgd2lkdGg6MmVtO1xyXG4gICAgaGVpZ2h0IDogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czowLjJlbTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uOmhvdmVye1xyXG4gICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG59XHJcblxyXG4vKiBDVVNUT00gU0NST0xMQkFSICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxuICAgIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM5cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/image/image.component.html":
/*!********************************************!*\
  !*** ./src/app/image/image.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=container #container>\n    <button (click)=\"close()\" *ngIf=\"opened==true\" style=\"float:right\" id=\"closeButton\">X</button>\n    \n    <img [src]=\"imgUrl\" id=image *ngIf=\"imgUrl\"/>\n    \n    <div id=description *ngIf=\"description\">\n        <h2 id=imgHeadline>{{name}}</h2>\n        <p class=description>\n    {{description}}\n        </p>\n    </div>\n    \n\n    <app-audio [songUrl]=\"songUrl\" mode=\"interaction\" [youTubeId]=\"youTubeId\"></app-audio>\n\n\n</div>\n"

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
        this.opened = false;
    }
    ImageComponent.prototype.ngOnChanges = function () {
    };
    ImageComponent.prototype.close = function () {
        console.log("closing infowindow");
        this.container.nativeElement.style.height = "0px";
        this.opened = false;
    };
    ImageComponent.prototype.open = function () {
        console.log("opening infowindow");
        this.container.nativeElement.style.height = "70%";
        this.opened = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgUrl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageComponent.prototype, "imgUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('youTubeId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageComponent.prototype, "youTubeId", void 0);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("container"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageComponent.prototype, "container", void 0);
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

module.exports = "app-audio{\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n    margin:1%;\r\n    z-index:1000;\r\n}\r\n\r\n#timeMachine{\r\n          position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    bottom: 0%;\r\n    z-index: 5000;\r\n    background-color: transparent;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column nowrap;\r\n}\r\n\r\n#timeMachine h2{\r\n   width:100%;\r\n    text-align:center;\r\n    font-size: 50px;\r\n    background-color:black;\r\n    border-radius: 0.5em;\r\n    \r\n}\r\n\r\n#timeMachine p{\r\n    width:90%;\r\n    margin:5%;\r\n    text-align:center;\r\n     background-color:black;\r\n    border-radius: 0.5em;\r\n    padding:\r\n}\r\n\r\n.selectButton{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column-nowrap;\r\n   border: none;\r\n    position: fixed;\r\n    bottom: 0%;\r\n    width: 50%;\r\n    height: 100%;\r\n    background-color: transparent;\r\n    font-size: 50px;\r\n    -webkit-transition: background-color 2s ease-out;\r\n    transition: background-color 2s ease-out;\r\n}\r\n\r\n.selectButton:hover{\r\n    background-color:rgba(255,255,255,0.5);\r\n}\r\n\r\n.selectButton h3{\r\n    font-size:35px;\r\n    position:absolute;\r\n    bottom:50%;\r\n    width:90%;\r\n    margin:5%;\r\n    text-align:center;\r\n}\r\n\r\n#aquila{\r\n    right:0;\r\n    color:white;\r\n}\r\n\r\n#yannai{\r\n    left:0;\r\n    color:black;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixLQUFLO0lBQ0wsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO1VBQ1UsZUFBZTtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxVQUFVO0lBQ1YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBd0I7SUFBeEIsNkJBQXdCO1lBQXhCLHdCQUF3QjtBQUM1Qjs7QUFHQTtHQUNHLFVBQVU7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7S0FDaEIsc0JBQXNCO0lBQ3ZCLG9CQUFvQjtJQUNwQjtBQUNKOztBQUdBO0lBQ0ksbUJBQVk7SUFBWixZQUFZO0lBQ1osNEJBQXdCO0lBQXhCLDZCQUF3QjtZQUF4Qix3QkFBd0I7R0FDekIsWUFBWTtJQUNYLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdEQUF3QztJQUF4Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxNQUFNO0lBQ04sV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1hdWRpb3tcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgbWFyZ2luOjElO1xyXG4gICAgei1pbmRleDoxMDAwO1xyXG59XHJcblxyXG4jdGltZU1hY2hpbmV7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxufVxyXG5cclxuXHJcbiN0aW1lTWFjaGluZSBoMntcclxuICAgd2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgXHJcbn1cclxuXHJcbiN0aW1lTWFjaGluZSBwe1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luOjUlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgcGFkZGluZzpcclxufVxyXG5cclxuXHJcbi5zZWxlY3RCdXR0b257XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1ub3dyYXA7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc2VsZWN0QnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbn1cclxuXHJcbi5zZWxlY3RCdXR0b24gaDN7XHJcbiAgICBmb250LXNpemU6MzVweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjUwJTtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbjo1JTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4jYXF1aWxhe1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4jeWFubmFpe1xyXG4gICAgbGVmdDowO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/interaction/interaction.component.html":
/*!********************************************************!*\
  !*** ./src/app/interaction/interaction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   <app-image [imgUrl]=\"imgUrl\" [name]=\"name\" [description]=\"description\" [youTubeId]=youTubeId #infoWindow></app-image>\n\n    <app-canvas [height]=\"getHeight(ci)\" [top]=\"getTop(ci)\" *ngFor=\"let ci of cis\" [imgData]=imgData[ci] [zones]=zones[ci]  [zoneCategories]=zoneCategories[ci]  [mode]=\"mode\"  (clicked)=\"displayClicked($event)\"  [infoWindow]=infoWindow #canvas > </app-canvas>  \n\n<div *ngIf=\"mode=='preview'\" id=\"timeMachine\">\n    <div (click)=\"moveInTime(0)\" id=\"aquila\" class=\"selectButton\"><h3>Aquila</h3></div>\n    <div (click)=\"moveInTime(1)\" id=\"yannai\" class=\"selectButton\"><h3>Yannai</h3></div>\n    \n    <h2> The Aquila Palimpsest</h2>\n<p>\n    This manuscript contains two texts: a 10th century copy of 6th-7th century liturgical poetry by the Jewish poet Yannai, written over a 6th century copy of a literal Greek translation of the Hebrew bible by the 2nd century Jewish translator Aquila. In this manuscript, the Greek under-text is upside-down in relation to the upper Hebrew text. </p>\n    \n    \n\n</div>\n\n\n\n<!--<app-controls [cats]=\"cats\"></app-controls>\n\n<app-audio [songUrl]=\"songUrl\" [mode]=\"mode\" [youTubeId]=\"youTubeId\"></app-audio>\n-->\n"

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
    function InteractionComponent(_activatedRoute, _dataService, router) {
        this._activatedRoute = _activatedRoute;
        this._dataService = _dataService;
        this.router = router;
        this.soundLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoneLoader = [];
        this.zones = [];
        this.imgData = [];
        this.youTubeId = "";
        this.zoneCategories = [];
        this.mode = "interaction";
        this.imgCounter = 0;
        this.cis = [];
        this.zones = [];
        this.zoneCategories = [];
    }
    InteractionComponent.prototype.ngOnInit = function () {
        console.log("afterViewInit");
        console.log(this.canvases);
        // console.log("route at component: "+this._activatedRoute.snapshot.params['map']);
        //   console.log("selected zone: "+this._activatedRoute.snapshot.params['zone']);
        //this._dataService.askOxford("ΤΗΣ","el");
        var source = this._activatedRoute.snapshot.params['source'];
        var canvases = this._activatedRoute.snapshot.params['canvases'].split(",");
        var annotation = this._activatedRoute.snapshot.params['annotation'];
        console.log(annotation);
        if (canvases.length > 1) {
            this.mode = "preview";
        }
        var ref = this;
        var _loop_1 = function (i) {
            this_1.cis.push(i);
            this_1._dataService.fetchJson(source + "_" + canvases[i]).subscribe(function (data) {
                console.log(data);
                var imgData = data["imgData"];
                // ref.canvases._results[i].imgData=imgData;
                console.log(imgData);
                console.log("processing loop");
                if (annotation) {
                    data.slides = [data.slides[annotation]];
                }
                var zoneLoader = ref.processIcons(data);
                console.log(ref.zoneLoader);
                // ref.displayZones();
                //  ref.canvases._results[i].zones=ref.zoneLoader.zones;         
                // ref.canvases._results[i].zoneCategories=ref.zoneLoader.zoneCategories;  
                var catList = ref.zones.map(function (zone) { return zone.category; });
                // this.cats=new Set(catList);
                ref.zones[i] = zoneLoader.zones;
                ref.zoneCategories[i] = zoneLoader.zoneCategories;
                ref.imgData[i] = imgData;
                console.log(ref.zones);
            });
        };
        var this_1 = this;
        for (var i = 0; i < canvases.length; i++) {
            _loop_1(i);
        }
        console.log(ref.zones);
        // let id=<string>this._activatedRoute.snapshot.params['zid'];
    };
    InteractionComponent.prototype.displayClicked = function (e) {
        //console.log("clicked");
        //console.log(e);
        // this.infoWindow.open();
        this.name = e.word;
        this.description = e.description;
        this.imgUrl = e.image;
        this.youTubeId = e.music;
        this.songUrl = "";
    };
    InteractionComponent.prototype.processIcons = function (slideSet) {
        console.log("Processing icons");
        var ref = this;
        var result = [];
        var categories = {};
        slideSet.slides.forEach(function (slide) {
            console.log("PROCESSING " + slide.word);
            var newZone;
            slide.component = ref;
            switch (slide.cat) {
                case "translation":
                    newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_4__["Region"](slide, slideSet.imgData);
                    break;
                case "Script":
                    newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_4__["Region"](slide, slideSet.imgData);
                    break;
                case "Content":
                    newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_4__["Region"](slide, slideSet.imgData);
                    break;
                case "Region":
                    newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_4__["Region"](slide, slideSet.imgData);
                    break;
            }
            if (!categories[slide.cat]) {
                var selectedVal = void 0;
                selectedVal = true;
                categories[slide.cat] = { name: slide.cat, zoneCount: 0, selected: selectedVal };
            }
            categories[slide.cat].zoneCount++;
            result.push(newZone);
            console.log(result);
        });
        console.log(result);
        var zoneCategories = [];
        for (var c in categories) {
            zoneCategories.push(categories[c]);
        }
        return { zones: result, zoneCategories: zoneCategories };
    };
    InteractionComponent.prototype.displayZones = function () {
        this.zones = this.zoneLoader;
        console.log("displaying zones");
    };
    InteractionComponent.prototype.moveInTime = function (e) {
        //  this.canvases._results.forEach((c)=>c.moveInTime(e.srcElement.value));
        this.router.navigate(['single/aquila_v/' + e]);
    };
    InteractionComponent.prototype.getTop = function (ci) {
        return ci * 50 + "%";
    };
    InteractionComponent.prototype.getHeight = function (ci) {
        return (100 / (ci + 1)) + "%";
    };
    InteractionComponent.prototype.onSwipe = function (e) {
        alert("swipe");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InteractionComponent.prototype, "soundLoaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("canvas"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InteractionComponent.prototype, "canvases", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("infoWindow"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InteractionComponent.prototype, "infoWindow", void 0);
    InteractionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interaction',
            template: __webpack_require__(/*! ./interaction.component.html */ "./src/app/interaction/interaction.component.html"),
            styles: [__webpack_require__(/*! ./interaction.component.css */ "./src/app/interaction/interaction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "#container{\r\n    position:absolute;\r\nborder:4px outset black;\r\n    border-radius:0.2em;\r\n    background-color:transparent;\r\n    font-size:45px;\r\n    display:none;\r\n    z-index:2000;\r\n    padding:0;\r\n    margin:0;\r\n    -webkit-transform:scale(1.05,1.05);\r\n            transform:scale(1.05,1.05);\r\n    -webkit-transition: display 2s smooth;\r\n    transition: display 2s smooth;\r\n}\r\n\r\n#controls{\r\n    height: 25px;\r\n    position:absolute;\r\n    bottom: 0px;\r\n}\r\n\r\nspan.transcription{\r\n    color:navy;\r\n    font-weight:bold;\r\n    margin-right: 0.3em;\r\n}\r\n\r\nspan.translation{\r\n    color:darkred;\r\n    font-weight:bold;\r\n    margin-right: 0.3em;\r\n}\r\n\r\n.textBox{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row wrap;\r\n    background-color: rgba(255,255,255,0.3);\r\n    margin:0;\r\n    padding:0;\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\nbutton{\r\n    color:white;\r\n    background-color:black;\r\n    border-radius:0.5em;\r\n    font-weight:bold;\r\n}\r\n\r\n#hideButton{\r\n    margin:0;\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFnaWMtZ2xhc3MvbWFnaWMtZ2xhc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQix1QkFBdUI7SUFDbkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIscUNBQTZCO0lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUdBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFZO0lBQVosWUFBWTtJQUNaLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLEtBQUs7SUFDTCxPQUFPO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9tYWdpYy1nbGFzcy9tYWdpYy1nbGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG5ib3JkZXI6NHB4IG91dHNldCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6MC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOjQ1cHg7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB6LWluZGV4OjIwMDA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1LDEuMDUpO1xyXG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAycyBzbW9vdGg7XHJcbn1cclxuXHJcbiNjb250cm9sc3tcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5zcGFuLnRyYW5zY3JpcHRpb257XHJcbiAgICBjb2xvcjpuYXZ5O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIG1hcmdpbi1yaWdodDogMC4zZW07XHJcbn1cclxuXHJcbnNwYW4udHJhbnNsYXRpb257XHJcbiAgICBjb2xvcjpkYXJrcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIG1hcmdpbi1yaWdodDogMC4zZW07XHJcbn1cclxuXHJcbi50ZXh0Qm94e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOjAuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5cclxuI2hpZGVCdXR0b257XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICByaWdodDowO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/magic-glass/magic-glass.component.html":
/*!********************************************************!*\
  !*** ./src/app/magic-glass/magic-glass.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" #container >\n    \n    <button id=hideButton (click)=\"hideFrame()\">X</button>\n    \n    <div *ngIf=\"mode=='transcription'\" class=textBox [style.font-size]=fontSize>\n        <span class=\"transcription\" *ngFor=\"let w of msText.transcription\" (click)=\"translate(w)\">{{w.transcript}}/{{w.translation}}</span>\n    </div>\n    \n     <div *ngIf=\"mode=='translation'\" class=textBox [style.font-size]=fontSize>\n        <span class=\"translation\" *ngFor=\"let w of msText.translation\" >{{w.transcript}}</span>\n    </div>\n    \n    <div id=\"controls\">\n    <button (click)=\"mode='transcription'\" *ngIf=\"msText.transcription\">Transcribe</button>\n     <button (click)=\"mode='translation'\" *ngIf=\"msText.translation\">Translate</button>\n    <button (click)=\"layers()\">Layers</button>\n     <button (click)=\"clear()\">Clear</button>\n     <button (click)=\"showInfo($event)\">Learn more</button>\n    </div>\n</div>"

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
        this.msText = {};
        this.width = 0;
    }
    MagicGlassComponent.prototype.ngOnInit = function () {
    };
    MagicGlassComponent.prototype.placeFrame = function (source, zoom) {
        this.manuscript.nativeElement.style["background-color"] = "rgba(0,0,0,0.5)";
        console.log(this.msText);
        this.container.nativeElement.style["background-image"] = "url('" + source.msText.bgImage + "')";
        this.container.nativeElement.style["background-position"] = -source.imgCoords.topLeft.x + "px " + -source.imgCoords.topLeft.y + "px";
        this.container.nativeElement.style.display = "block";
        this.container.nativeElement.style.width = source.imgCoords.width * zoom + "px";
        this.container.nativeElement.style.height = (source.imgCoords.height) * zoom + "px";
        this.msText = source.msText;
        this.container.nativeElement.style.left = source.imgCoords.topLeft.x * zoom + "px";
        this.container.nativeElement.style.top = source.imgCoords.topLeft.y * zoom + "px";
        console.log(this.container.nativeElement.style);
    };
    MagicGlassComponent.prototype.hideFrame = function () {
        this.manuscript.nativeElement.style["background-color"] = "transparent";
        console.log("hiding magic glass");
        this.container.nativeElement.style.display = "none";
    };
    MagicGlassComponent.prototype.translate = function (w) {
        console.log(w);
        this.data.askOxford(w.transcript, "el").subscribe(function (resp) { return w.translation = resp.results[0].lexicalEntries[0].entries[0].senses[0].translations[0].text; });
    };
    MagicGlassComponent.prototype.layers = function () {
        this.container.nativeElement.style["background-image"] = "url('" + this.msText.bgImage2 + "')";
    };
    MagicGlassComponent.prototype.clear = function () {
        this.container.nativeElement.style["background-image"] = "url('" + this.msText.bgImage + "')";
        this.mode = "none";
    };
    MagicGlassComponent.prototype.showInfo = function () {
        this.infoWindow.open();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("fontSize"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MagicGlassComponent.prototype, "fontSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("manuscript"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MagicGlassComponent.prototype, "manuscript", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("infoWindow"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MagicGlassComponent.prototype, "infoWindow", void 0);
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

module.exports = "#wrapper{\r\n        width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    background-size: cover;\r\n}\r\n\r\n#portalMenu{\r\n     background-image:url(\"https://www.draconica.net/ft2019/wp-content/uploads/sites/21/2019/02/bg3.jpg\");\r\nheight:80%;\r\n    width:50%;\r\n    box-shadow: 0 0 1em silver;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\na{\r\n    font-size:16pt;\r\n    color:silver;\r\n    text-decoration:none;\r\n    margin:0.2em;\r\n    border-radius:0.2em;\r\n    border: 1px solid silver;\r\n    padding:0.2em;\r\n    -webkit-transition:background-color 0.5s;\r\n    transition:background-color 0.5s;\r\n}\r\n\r\na:hover{\r\n    background-color:rgba(0,0,0,0.6);\r\n}\r\n\r\nh2{\r\n    width:96%;\r\n    color:silver;\r\n    border-bottom:1px solid silver;\r\n    text-align:center;\r\n    padding:0.2em;\r\n}\r\n\r\nimg{\r\n    margin:1em;\r\n    height:40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL3BvcnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsV0FBVztJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXdCO0lBQXhCLDZCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtLQUNLLG9HQUFvRztBQUN6RyxVQUFVO0lBQ04sU0FBUztJQUNULDBCQUEwQjtJQUMxQixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBd0I7SUFBeEIsNkJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isd0NBQWdDO0lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNwb3J0YWxNZW51e1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiaHR0cHM6Ly93d3cuZHJhY29uaWNhLm5ldC9mdDIwMTkvd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzIxLzIwMTkvMDIvYmczLmpwZ1wiKTtcclxuaGVpZ2h0OjgwJTtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gc2lsdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYXtcclxuICAgIGZvbnQtc2l6ZToxNnB0O1xyXG4gICAgY29sb3I6c2lsdmVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBtYXJnaW46MC4yZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjAuMmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgcGFkZGluZzowLjJlbTtcclxuICAgIHRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAwLjVzO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNik7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgd2lkdGg6OTYlO1xyXG4gICAgY29sb3I6c2lsdmVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgc2lsdmVyO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjAuMmVtO1xyXG59XHJcblxyXG5cclxuaW1ne1xyXG4gICAgbWFyZ2luOjFlbTtcclxuICAgIGhlaWdodDo0MCU7XHJcbn0iXX0= */"

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
        this.drawingSettings.region_blue = { fillStyle: "rgba(0,0,255,0.2)", strokeStyle: "black", lineWidth: 3, shadowColor: "black", shadowBlur: 0 };
        this.drawingSettings.region_red = { fillStyle: "rgba(255,0,0,0.2)", strokeStyle: "transparent", lineWidth: 0, shadowColor: "black", shadowBlur: 50 };
        this.drawingSettings.region_purple = { fillStyle: "rgba(255,0,255,0.2)", strokeStyle: "black", lineWidth: 3, shadowColor: "transparent", shadowBlur: 0 };
        this.drawingSettings.region_yellow = { fillStyle: "rgba(239, 222, 28, 0.2)", strokeStyle: "transparent", lineWidth: 0, shadowColor: "black", shadowBlur: 50 };
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

/***/ "./src/app/split-screen/split-screen.component.css":
/*!*********************************************************!*\
  !*** ./src/app/split-screen/split-screen.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwbGl0LXNjcmVlbi9zcGxpdC1zY3JlZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/split-screen/split-screen.component.html":
/*!**********************************************************!*\
  !*** ./src/app/split-screen/split-screen.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  split-screen works!\n</p>\n"

/***/ }),

/***/ "./src/app/split-screen/split-screen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/split-screen/split-screen.component.ts ***!
  \********************************************************/
/*! exports provided: SplitScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitScreenComponent", function() { return SplitScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplitScreenComponent = /** @class */ (function () {
    function SplitScreenComponent() {
    }
    SplitScreenComponent.prototype.ngOnInit = function () {
    };
    SplitScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-split-screen',
            template: __webpack_require__(/*! ./split-screen.component.html */ "./src/app/split-screen/split-screen.component.html"),
            styles: [__webpack_require__(/*! ./split-screen.component.css */ "./src/app/split-screen/split-screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SplitScreenComponent);
    return SplitScreenComponent;
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