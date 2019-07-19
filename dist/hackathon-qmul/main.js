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
/* harmony import */ var _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interaction/interaction.component */ "./src/app/interaction/interaction.component.ts");
/* harmony import */ var _qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qr-reader/qr-reader.component */ "./src/app/qr-reader/qr-reader.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var routes = [
    { path: 'interaction/:source/:canvases/:annotation', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_3__["InteractionComponent"] },
    { path: 'single/:source/:canvases', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_3__["InteractionComponent"] },
    { path: 'interaction/:source/:canvases', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_3__["InteractionComponent"] },
    { path: 'interaction/:map', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_3__["InteractionComponent"] },
    { path: 'home', component: _qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_4__["QrReaderComponent"] },
    { path: '', redirectTo: "/interaction/aquila_v/0,2", pathMatch: "full" }
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
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image/image.component */ "./src/app/image/image.component.ts");
/* harmony import */ var _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interaction/interaction.component */ "./src/app/interaction/interaction.component.ts");
/* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audio/audio.component */ "./src/app/audio/audio.component.ts");
/* harmony import */ var _canvas_controls_canvas_controls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvas-controls/canvas-controls.component */ "./src/app/canvas-controls/canvas-controls.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _magic_glass_magic_glass_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./magic-glass/magic-glass.component */ "./src/app/magic-glass/magic-glass.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./qr-reader/qr-reader.component */ "./src/app/qr-reader/qr-reader.component.ts");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm5/zxing-ngx-scanner.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");









//import { ControlsComponent } from './controls/controls.component';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__["CanvasComponent"],
                _image_image_component__WEBPACK_IMPORTED_MODULE_7__["ImageComponent"],
                _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_8__["InteractionComponent"],
                // ControlsComponent,
                _audio_audio_component__WEBPACK_IMPORTED_MODULE_9__["AudioComponent"],
                _canvas_controls_canvas_controls_component__WEBPACK_IMPORTED_MODULE_10__["CanvasControlsComponent"],
                _magic_glass_magic_glass_component__WEBPACK_IMPORTED_MODULE_13__["MagicGlassComponent"],
                _qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_16__["QrReaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_11__["NgxYoutubePlayerModule"].forRoot(),
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_17__["ZXingScannerModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]
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

module.exports = "\r\n\r\naudio{    width: 50%;\r\n  display:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxVQUFVLFVBQVU7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6Ii4uL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmF1ZGlveyAgICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufSJdfQ== */"

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

module.exports = "#wrapper{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n#zoom{\r\n    padding: .4rem;\r\n    margin: 0.2em;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    color: black;\r\n    min-width: 2em;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color:white;\r\n}\r\n\r\n#zoom button{\r\n    color:white;\r\n    background-color:black;\r\n    border-radius:0.5em;\r\n    font-weight:bold;\r\n}\r\n\r\n#zoomToFit{\r\n    background-image:url(\"/assets/images/graphics/arrow_back.png\");\r\n    width:1.5em;\r\n    height:2em;\r\n        background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#cats{margin-right:5%}\r\n\r\n.showButton{\r\n    background-color:black;\r\n    color:white;\r\n    opacity:0.5;\r\n      width:2em;\r\n    height:2em;\r\n}\r\n\r\n.hideButton{\r\n    background-color:black;\r\n    color:black;\r\n    width:2em;\r\n    height:2em;\r\n}\r\n\r\n.categorySwitch{\r\n margin-left:1em;\r\n    padding-left:0.5em;\r\n    border-left: 2px solid white;\r\n}\r\n\r\n.iconButton{\r\n    border-radius: 0.2em;\r\n    border:2px outset rgb(20,20,20);\r\n    width:3em;\r\n    height:3em;\r\n    margin:0.25em;\r\n     background-size: 100% 100%;\r\n    -webkit-transition : background-image 1s ease-out;\r\n    transition : background-image 1s ease-out;\r\n  \r\n}\r\n\r\n.icon_back{\r\n    background-image:url(\"/assets/images/icons/returnv2.png\");\r\n}\r\n\r\n.icon_home{\r\n    background-image:url(\"/assets/images/icons/home%20key%20blue.png\");\r\n}\r\n\r\n.icon_home:hover{\r\n    background-image:url(\"/assets/images/icons/home%20yellow.png\");\r\n}\r\n\r\n.Script{\r\n    background-image: url('/assets/images/icons/script blue.png');\r\n}\r\n\r\n.Script_on{\r\n    background-image: url('/assets/images/icons/script yellow.png');\r\n}\r\n\r\n.Text{\r\n    background-image: url('/assets/images/icons/text blue.png');\r\n}\r\n\r\n.Text_on{\r\n    background-image: url('/assets/images/icons/text yellow.png');\r\n}\r\n\r\n.Author{\r\n    background-image: url('/assets/images/icons/author blue.png');\r\n}\r\n\r\n.Author_on{\r\n    background-image: url('/assets/images/icons/author yellow.png');\r\n}\r\n\r\n.Material{\r\n    background-image: url('/assets/images/icons/material blue.png');\r\n}\r\n\r\n.Material_on{\r\n    background-image: url('/assets/images/icons/material yellow.png');\r\n}\r\n\r\n.City, .Region{\r\n    background-image:url(\"/assets/images/icons/map%20blue.png\");\r\n}\r\n\r\n.CIty_on, .Region_on{\r\n    background-image:url(\"/assets/images/icons/map%20yellow.png\");\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhbnZhcy1jb250cm9scy9jYW52YXMtY29udHJvbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFxQjtJQUFyQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDJCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGNBQWM7SUFDZCw4QkFBcUI7SUFBckIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFJQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhEQUE4RDtJQUM5RCxXQUFXO0lBQ1gsVUFBVTtRQUNOLDRCQUE0QjtJQUNoQywwQkFBMEI7QUFDOUI7O0FBRUEsTUFBTSxlQUFlOztBQUdyQjtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztNQUNULFNBQVM7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBR0E7Q0FDQyxlQUFlO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0tBQ1osMEJBQTBCO0lBQzNCLGlEQUF5QztJQUF6Qyx5Q0FBeUM7O0FBRTdDOztBQUdBO0lBQ0kseURBQXlEO0FBQzdEOztBQUdBO0lBQ0ksa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksOERBQThEO0FBQ2xFOztBQUlBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksK0RBQStEO0FBQ25FOztBQUVBO0lBQ0ksMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksK0RBQStEO0FBQ25FOztBQUVBO0lBQ0ksK0RBQStEO0FBQ25FOztBQUVBO0lBQ0ksaUVBQWlFO0FBQ3JFOztBQUdBO0lBQ0ksMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFIiwiZmlsZSI6Ii4uL2NhbnZhcy1jb250cm9scy9jYW52YXMtY29udHJvbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI3pvb217XHJcbiAgICBwYWRkaW5nOiAuNHJlbTtcclxuICAgIG1hcmdpbjogMC4yZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1pbi13aWR0aDogMmVtO1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbiN6b29tIGJ1dHRvbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6MC41ZW07XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcblxyXG4jem9vbVRvRml0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9ncmFwaGljcy9hcnJvd19iYWNrLnBuZ1wiKTtcclxuICAgIHdpZHRoOjEuNWVtO1xyXG4gICAgaGVpZ2h0OjJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNjYXRze21hcmdpbi1yaWdodDo1JX1cclxuXHJcblxyXG4uc2hvd0J1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG9wYWNpdHk6MC41O1xyXG4gICAgICB3aWR0aDoyZW07XHJcbiAgICBoZWlnaHQ6MmVtO1xyXG59XHJcblxyXG4uaGlkZUJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIHdpZHRoOjJlbTtcclxuICAgIGhlaWdodDoyZW07XHJcbn1cclxuXHJcblxyXG4uY2F0ZWdvcnlTd2l0Y2h7XHJcbiBtYXJnaW4tbGVmdDoxZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6MC41ZW07XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmljb25CdXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIGJvcmRlcjoycHggb3V0c2V0IHJnYigyMCwyMCwyMCk7XHJcbiAgICB3aWR0aDozZW07XHJcbiAgICBoZWlnaHQ6M2VtO1xyXG4gICAgbWFyZ2luOjAuMjVlbTtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIHRyYW5zaXRpb24gOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2Utb3V0O1xyXG4gIFxyXG59XHJcblxyXG5cclxuLmljb25fYmFja3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcmV0dXJudjIucG5nXCIpO1xyXG59XHJcblxyXG5cclxuLmljb25faG9tZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZSUyMGtleSUyMGJsdWUucG5nXCIpO1xyXG59XHJcblxyXG4uaWNvbl9ob21lOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9ob21lJTIweWVsbG93LnBuZ1wiKTtcclxufVxyXG5cclxuXHJcblxyXG4uU2NyaXB0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pY29ucy9zY3JpcHQgYmx1ZS5wbmcnKTtcclxufVxyXG5cclxuLlNjcmlwdF9vbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2NyaXB0IHllbGxvdy5wbmcnKTtcclxufVxyXG5cclxuLlRleHR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ljb25zL3RleHQgYmx1ZS5wbmcnKTtcclxufVxyXG5cclxuLlRleHRfb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ljb25zL3RleHQgeWVsbG93LnBuZycpO1xyXG59XHJcblxyXG4uQXV0aG9ye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pY29ucy9hdXRob3IgYmx1ZS5wbmcnKTtcclxufVxyXG5cclxuLkF1dGhvcl9vbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYXV0aG9yIHllbGxvdy5wbmcnKTtcclxufVxyXG5cclxuLk1hdGVyaWFse1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pY29ucy9tYXRlcmlhbCBibHVlLnBuZycpO1xyXG59XHJcblxyXG4uTWF0ZXJpYWxfb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ljb25zL21hdGVyaWFsIHllbGxvdy5wbmcnKTtcclxufVxyXG5cclxuXHJcbi5DaXR5LCAuUmVnaW9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9tYXAlMjBibHVlLnBuZ1wiKTtcclxufVxyXG5cclxuLkNJdHlfb24sIC5SZWdpb25fb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2ljb25zL21hcCUyMHllbGxvdy5wbmdcIik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/canvas-controls/canvas-controls.component.html":
/*!****************************************************************!*\
  !*** ./src/app/canvas-controls/canvas-controls.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <div id=\"zoom\" role=\"group\" aria-label=\"Manuscript zoom\">\n         <button  id=\"zoomIn\" (click)=\"zoomChng(0.1)\" class=\"iconButton\">+</button>\n        <button  cid=\"zoomOut\" (click)=\"zoomChng(-0.1)\" class=\"iconButton\">-</button>\n         <button  (click)=\"goBack(1)\"  class=\"iconButton icon_back\"> </button>\n        <button  (click)=\"navigate('aquila_v','0,2')\" class=\"iconButton icon_home\"></button>\n    </div>\n    \n    <div id=cats>\n        <ng-container  *ngFor=\"let zc of zoneCategories\">\n            <button  class=\"iconButton\" (click)=\"zc.selected=!zc.selected; selectionChng()\" [ngClass]=\"zc.selected ? zc.name+'_on':zc.name\" ></button>\n        </ng-container>\n     </div>\n</div>  \n\n\n"

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
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation.service */ "./src/app/services/navigation.service.ts");




var CanvasControlsComponent = /** @class */ (function () {
    function CanvasControlsComponent(router, navigation) {
        this.router = router;
        this.navigation = navigation;
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
    CanvasControlsComponent.prototype.goBack = function (i) {
        this.navigation.goBack(i);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
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

module.exports = "*{box-sizing:boder-box}\r\n\r\n#msCanvas, manuscript{-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s, -webkit-transform .5s; -webkit-transition: background-image .5x; transition: background-image .5x; -webkit-transform-origin:center center; transform-origin:center center}\r\n\r\n#msCanvas,#interactiveCanvas, #animationCanvas{position:absolute;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transition:background-color 1s, -webkit-transform .5s;transition:background-color 1s, -webkit-transform .5s;transition:transform .5s, background-color 1s;transition:transform .5s, background-color 1s, -webkit-transform .5s; \r\n}\r\n\r\n#msWrapper{position:absolute;\r\n    overflow:scroll;\r\nscroll-behavior: smooth;\r\nbackground-color: rgb(20,20,20);\r\n  /*  background-image:url(\"https://www.draconica.net/ft2019/wp-content/uploads/sites/21/2019/02/bg3.jpg\");*/\r\nwidth: 98%;\r\nheight: 98%;\r\nmargin: 0.1em;\r\n-webkit-transition: -webkit-transform 2s ease-out;\r\ntransition: -webkit-transform 2s ease-out;\r\ntransition: transform 2s ease-out;\r\ntransition: transform 2s ease-out, -webkit-transform 2s ease-out;\r\n}\r\n\r\napp-canvas-controls{\r\n    background-color:transparent;\r\n    width:100%;\r\n    height:5%;\r\n    position:fixed;\r\n    top:0;\r\n    left:0.5%;\r\n    color:white;\r\n}\r\n\r\n#manuscript{border: 1px solid black;\r\nwidth: 100%;\r\nheight: 100%;\r\nposition: absolute;\r\n    background-color:black;\r\nleft:0%;\r\ntop:0}\r\n\r\nh1{\r\n       position: absolute;\r\n    top: 6%;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 0;\r\n    color: transparent;\r\n    -webkit-transition:color 1s;\r\n    transition:color 1s;\r\n}\r\n\r\nh1:hover{\r\n    color:black;\r\n}\r\n\r\n/* CUSTOM SCROLLBAR */\r\n\r\n::-webkit-scrollbar {\r\n    width: 11px;\r\n    height: 11px;\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n    width: 0px;\r\n    height: 0px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgb(20,20,20);\r\n    border: 2px solid #ffffff;\r\n    border-radius: 50px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #ffffff;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n    background: #000000;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: rgb(20,20,20);\r\n    border: 0px none #ffffff;\r\n    border-radius: 39px;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-track:active {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n    background: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxFQUFFLG9CQUFvQjs7QUFFdEIsc0JBQXNCLHdDQUF3QixDQUF4QixnQ0FBd0IsQ0FBeEIsd0JBQXdCLENBQXhCLCtDQUF3QixFQUFFLHdDQUFnQyxFQUFoQyxnQ0FBZ0MsRUFBRSxzQ0FBNkIsRUFBN0IsOEJBQThCOztBQUdoSCwrQ0FBK0MsaUJBQWlCLENBQUMsaUNBQXlCLENBQXpCLHlCQUF5QixDQUFDLDZEQUE2QyxDQUE3QyxxREFBNkMsQ0FBN0MsNkNBQTZDLENBQTdDLG9FQUE2QztBQUN4STs7QUFDQSxXQUFXLGlCQUFpQjtJQUN4QixlQUFlO0FBQ25CLHVCQUF1QjtBQUN2QiwrQkFBK0I7RUFDN0IsMEdBQTBHO0FBQzVHLFVBQVU7QUFDVixXQUFXO0FBQ1gsYUFBYTtBQUNiLGlEQUFpQztBQUFqQyx5Q0FBaUM7QUFBakMsaUNBQWlDO0FBQWpDLGdFQUFpQztBQUNqQzs7QUFJQTtJQUNJLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsU0FBUztJQUNULGNBQWM7SUFDZCxLQUFLO0lBQ0wsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQSxZQUFZLHVCQUF1QjtBQUNuQyxXQUFXO0FBQ1gsWUFBWTtBQUNaLGtCQUFrQjtJQUNkLHNCQUFzQjtBQUMxQixPQUFPO0FBQ1AsS0FBSzs7QUFFTDtPQUNPLGtCQUFrQjtJQUNyQixPQUFPO0lBQ1AsT0FBTztJQUNQLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBLHFCQUFxQjs7QUFFckI7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6Ii4uL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7Ym94LXNpemluZzpib2Rlci1ib3h9XHJcblxyXG4jbXNDYW52YXMsIG1hbnVzY3JpcHR7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC41eDsgdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfVxyXG5cclxuXHJcbiNtc0NhbnZhcywjaW50ZXJhY3RpdmVDYW52YXMsICNhbmltYXRpb25DYW52YXN7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXMsIGJhY2tncm91bmQtY29sb3IgMXM7IFxyXG59XHJcbiNtc1dyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzpzY3JvbGw7XHJcbnNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsMjAsMjApO1xyXG4gIC8qICBiYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vd3d3LmRyYWNvbmljYS5uZXQvZnQyMDE5L3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8yMS8yMDE5LzAyL2JnMy5qcGdcIik7Ki9cclxud2lkdGg6IDk4JTtcclxuaGVpZ2h0OiA5OCU7XHJcbm1hcmdpbjogMC4xZW07XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAycyBlYXNlLW91dDtcclxufVxyXG5cclxuXHJcblxyXG5hcHAtY2FudmFzLWNvbnRyb2xze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NSU7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowLjUlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiNtYW51c2NyaXB0e2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5sZWZ0OjAlO1xyXG50b3A6MH1cclxuXHJcbmgxe1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2JTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246Y29sb3IgMXM7XHJcbn1cclxuXHJcbmgxOmhvdmVye1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLyogQ1VTVE9NIFNDUk9MTEJBUiAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTFweDtcclxuICAgIGhlaWdodDogMTFweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMCwyMCwyMCk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMCwyMCwyMCk7XHJcbiAgICBib3JkZXI6IDBweCBub25lICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzOXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMCwyMCwyMCk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMCwyMCwyMCk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/canvas/canvas.component.html":
/*!**********************************************!*\
  !*** ./src/app/canvas/canvas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n     \n<div id=manuscript [style.width]=height  #manuscript>\n    \n  \n    \n            <div id=\"msWrapper\" #msWrapper [style.overflow]=\"mode=='interaction' ? 'scroll':'hidden'\" >\n                \n          <canvas #msCanvas id=msCanvas [style.opacity]=1 [attr.width]=\"imgData.width\" [attr.height]=\"imgData.height\" style=\"border:2px solid black;\n            background-color:transparent'); background-image:url('')\" draggable ></canvas>\n                <canvas #animationCanvas id=animationCanvas  [attr.width]=\"imgData.width\" [attr.height]=\"imgData.height\" style=\"border:2px solid black;\n            background-color:transparent'); background-image:url('')\" draggable ></canvas>\n             <canvas #interactiveCanvas  [style.opacity]=1 id=interactiveCanvas  [attr.width]=\"imgData.width\" [attr.height]=\"imgData.height\"  style=\"border:2px solid black;\n            background-color:transparent'); background-image:url('')\" draggable (document:mousemove)=\"locatePolygon($event, ctx, false)\" (click)=\"locatePolygon($event, ctx, true)\">\n                   \n                </canvas>    \n            <app-canvas-controls *ngIf=\"mode=='interaction'\" [opacityRatio]=opacityRatio [zoom]=\"zoom\" [fitZoom]=\"fitZoom\" [zoneCategories]=\"zoneCategories\" (changeZoom)=\"zoomChng($event)\" (changeSelection)=\"redrawSelected($event)\"  (changeOpacity)=\"opacityChng($event)\" ></app-canvas-controls>\n                 \n                \n                 <app-magic-glass [fontSize]=\"imgData.fontSize\" [infoWindow]=infoWindow [manuscript]=animation #magicglass></app-magic-glass>\n               \n            </div>\n     \n  \n    \n      </div>  \n \n\n   "

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
        this.magicGlass.transcription = "";
    };
    CanvasComponent.prototype.ngAfterViewInit = function () {
        this.ctx = this.canvas.nativeElement.getContext("2d");
        this.interCtx = this.interaction.nativeElement.getContext("2d");
        this.animCtx = this.animation.nativeElement.getContext("2d");
        //  let zones = this.zones.filter((z)=>z.category=="Území");
        this.displayedZones = this.zones;
        if (this.displayedZones) {
            this.processZones(this.displayedZones);
        }
        this._drawingSvc.runAnimations(this.ctx, this.animCtx, this.animation, this.zoom, Date.now(), 5000);
    };
    CanvasComponent.prototype.ngOnChanges = function () {
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
        if (this.mode == "interaction") {
            this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        }
        this.animCtx.clearRect(0, 0, this.interaction.nativeElement.width, this.interaction.nativeElement.height);
        this._drawingSvc.animations = [];
        zones.forEach(function (zone) {
            if (_this.mode != "preview") {
                zone.draw(_this.ctx);
            }
            _this._drawingSvc.animations = _this._drawingSvc.animations.concat(zone.addToAnimations(_this.canvas, _this.zoom));
        });
        if (this._drawingSvc.animations.length > 0) {
            // this.canvas.nativeElement.style.transition="transform "+this.slideConfig.duration/1000+"s";
            // this.interaction.nativeElement.style.transition="transform "+this.slideConfig.duration/1000+"s";
            // this.animation.nativeElement.style.transition="transform "+this.slideConfig.duration/1000+"s";
            // this.scaleCanvas([this.canvas,  this.animation], this.wrapper, this.outer, this.fitZoom*this.slideConfig.zoom, this.fitZoom, this.slideConfig.translate);
            this._drawingSvc.animationStage = 0;
            //this.zoomChng(0.2);
            var ref = this;
        }
    };
    CanvasComponent.prototype.locatePolygon = function (mouse, ctx, display) {
        if (this.mode == "interaction" && this.displayedZones) {
            var rZone;
            var ref_1 = this;
            //z.cat!="movement" && 
            this.displayedZones.filter(function (z) { return (z != ref_1.selectedZone && z.category != "Mrak"); }).forEach(function (zone, zid) {
                //let points = zone.points;
                var points = zone.fingerCoords;
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                for (var p = 1; p < points.length; p++) {
                    ctx.lineTo(points[p].x, points[p].y);
                }
                ctx.closePath();
                if (ctx.isPointInPath(mouse.offsetX, mouse.offsetY)) {
                    rZone = zone;
                }
            });
            if (rZone) {
                this.interCtx.clearRect(0, 0, this.interaction.nativeElement.width, this.interaction.nativeElement.height);
                // this._drawingSvc.drawPolygon(this.interCtx, rZone.points,"highlight");
                rZone.highlight(this.interCtx);
                if (display == true) {
                    this.clicked.emit(rZone);
                    this.focusOn(rZone);
                    this.selectedZone = rZone;
                }
            }
            else {
                if (display == true) {
                    this.zoomChng(this.fitZoom - this.zoom);
                }
            }
        }
    };
    CanvasComponent.prototype.calcZoomToFit = function () {
        var wrapperWidth = this.wrapper.nativeElement.offsetWidth;
        var wrapperHeight = this.wrapper.nativeElement.offsetHeight;
        var ratioX = parseInt(wrapperWidth) / parseInt(this.imgData.width);
        var ratioY = parseInt(wrapperHeight) / parseInt(this.imgData.height);
        if (ratioX <= ratioY) {
            return ratioX;
        }
        else {
            return ratioY;
        }
    };
    CanvasComponent.prototype.zoomChng = function (zChng) {
        this.magicGlass.hideFrame();
        var newZoomLevel = this.zoom + parseFloat(zChng);
        this.zoom = newZoomLevel >= .1 ? newZoomLevel : .1;
        this.scaleCanvas([this.canvas, this.interaction, this.animation], this.wrapper, this.outer, this.zoom, this.fitZoom, { x: 0, y: 0 });
    };
    CanvasComponent.prototype.moveInTime = function (year) {
        this.canvas.nativeElement.style.opacity = 1;
        this.interaction.nativeElement.style.opacity = 0;
        // this.displayedZones = this.zones.filter((z)=>year>=z.startDate && year<=z.endDate);
        //    this.processZones(this.displayedZones);
    };
    CanvasComponent.prototype.redrawSelected = function (e) {
        this.displayedZones = this.zones.filter(function (z) { return e[z.category] == true; });
        this.processZones(this.displayedZones);
    };
    CanvasComponent.prototype.scaleCanvas = function (canvases, inner, outer, zoom, fitZoom, translate) {
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
        inner.nativeElement.style.width = nw;
        inner.nativeElement.style.height = nh;
    };
    CanvasComponent.prototype.focusOn = function (zone) {
        var xtr = zone.imgCoords;
        var sx = xtr.max.x - xtr.min.x;
        var sy = xtr.max.y - xtr.min.y;
        var vw = this.outer.nativeElement.clientWidth;
        var vh = this.outer.nativeElement.clientHeight;
        var ox = (vw - sx) / 2;
        var oy = (vh - sy) / 2;
        var nzm;
        if (ox < oy) {
            nzm = vw / sx * 0.7;
        }
        else {
            nzm = vh / sy * 0.7;
        }
        var ref = this;
        //ref.moveScreen(xtr,ox,oy, nzm, zone);
        this.zoomChng(nzm - this.zoom);
        // ref.moveScreen(xtr,ox,oy, nzm, zone);
        setTimeout(function () { ref.moveScreen(xtr, ox, oy, nzm, zone); }, 500);
    };
    ;
    CanvasComponent.prototype.moveScreen = function (xy, ox, oy, nzm, zone) {
        //-((xy.max.x-xy.min.y/3)*nzm)
        //-((xy.max.y-xy.min.y/3)*nzm)
        var x = Math.max(0, (xy.min.x * nzm - ((xy.max.x - xy.min.x) / 6 * nzm)));
        var y = Math.max(0, (xy.min.y * nzm - ((xy.max.y - xy.min.y) / 6 * nzm)));
        // this.wrapper.nativeElement.scrollTop = y;
        //this.wrapper.nativeElement.scrollLeft = x;
        this.wrapper.nativeElement.scroll(x, y);
        zone.activate(this.ctx, this.magicGlass, nzm);
        var ref = this;
        // this.canvas.nativeElement.removeEventListener("transitionend", ref.moveScreen);
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
/*! exports provided: Zone, Icon, Region, Annotation, Cover, Poster, Slide, Text, Curtain, Cloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return Zone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Annotation", function() { return Annotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cover", function() { return Cover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poster", function() { return Poster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curtain", function() { return Curtain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cloud", function() { return Cloud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_drawing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/drawing.service */ "./src/app/services/drawing.service.ts");


var settingsDict = { Script: "region_green", Author: "region_blue", Discovery: "region_yellow", Text: "region_white", Material: "region_purple", Region: "region_purple", City: "region_yellow" };
var iconSize = 100;
var Zone = /** @class */ (function () {
    function Zone(slide) {
        this.drawing = new _services_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingSvc"]();
        this.visited = false;
        this.static = true;
        this.word = slide.word;
        this.category = slide.cat;
        this.title = slide.fields.title.value;
        this.image = slide.fields.image.value;
        this.description = slide.fields.text.value;
        this.music = slide.fields.video.value;
        // this.comment = slide.fields.comment.value;
        this.points = this.drawing.stringToPath(slide.shape);
        this.imgCoords = this.calcImgCoords(this.points);
        this.fingerCoords = this.calcFingerCoords();
        //   let timeSpan = slide.fields.timeSpan.value.split("-");
        //  this.startDate=timeSpan[0];
        //    this.endDate=timeSpan[1];
        this.drawingSetting = settingsDict[slide.cat];
        if (slide.fields.image.value) {
            this.img = new Image();
            this.img.src = slide.fields.image.value;
            //this.source=slide.fields.icon.value;
        }
    }
    Zone.prototype.calcFingerCoords = function () {
        var a = { x: this.imgCoords.topLeft.x, y: this.imgCoords.topLeft.y };
        var b = { x: this.imgCoords.topLeft.x + iconSize, y: this.imgCoords.topLeft.y };
        var c = { x: this.imgCoords.topLeft.x + iconSize, y: this.imgCoords.topLeft.y + iconSize };
        var d = { x: this.imgCoords.topLeft.x, y: this.imgCoords.topLeft.y + iconSize };
        return [a, b, c, d];
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
        _this.source = slide.fields.icon.value;
        if (slide.fields.path.value) {
            var pathPoints = _this.drawing.stringToPath(slide.fields.path.value);
            _this.animationPath = _this.drawing.calcAnimationPath(_this.imgCoords.topLeft, pathPoints);
        }
        return _this;
    }
    Icon.prototype.draw = function (ctx) {
        this.drawing.drawImage(ctx, this);
    };
    Icon.prototype.addToAnimations = function (canvas, zoom) {
        return [this];
    };
    Icon.prototype.animate = function (ctx, stage, canvas, zoom) {
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
        return _this;
    }
    Region.prototype.draw = function (ctx) {
        this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.drawPolygon(ctx, this.points, this.drawingSetting);
    };
    Region.prototype.addToAnimations = function (canvas, zoom) {
        return [this];
    };
    Region.prototype.animate = function (ctx, stage, canvas, zoom) {
        ctx.save();
        this.drawing.applySetting(ctx, this.drawingSetting);
        ctx.globalAlpha = stage;
        this.draw(ctx);
        ctx.restore();
    };
    Region.prototype.activate = function (ctx, component, zoom) {
        // ctx.clearRect(this.imgCoords.topLeft.x, this.imgCoords.topLeft.y, this.imgCoords.width, this.imgCoords.height);
        component.placeFrame(this, zoom);
        this.visited = true;
        this.draw(ctx);
    };
    Region.prototype.highlight = function (ctx) {
        this.drawing.applySetting(ctx, "highlight");
        this.drawing.drawPolygon(ctx, this.points, "highlight");
    };
    return Region;
}(Zone));

var Annotation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Annotation, _super);
    function Annotation(slide, imgData) {
        var _this = _super.call(this, slide) || this;
        _this.offset = 0;
        _this.duration = 8000;
        var transcription = null;
        var translation = null;
        if (slide.fields.transcription) {
            transcription = slide.fields.transcription.value.split(" ").map(function (w) { return { transcript: w, translation: "" }; });
        }
        if (slide.fields.translation) {
            translation = slide.fields.translation.value.split(" ").map(function (w) { return { transcript: w }; });
        }
        _this.msText = { transcription: transcription, translation: translation, bgImage: imgData.url, bgImage2: imgData.url2, map: slide.fields.map.value, mapLink: slide.fields.map_link.value, link: slide.fields.link.value };
        return _this;
    }
    Annotation.prototype.draw_polygon = function (ctx) {
        this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.drawPolygon(ctx, this.points, this.drawingSetting);
    };
    Annotation.prototype.draw = function (ctx) {
        //  this.draw_polygon(ctx);
        var finger = new Image();
        if (this.visited == false) {
            finger.src = "/assets/images/icons/interface clickers green.png";
        }
        else {
            finger.src = "/assets/images/icons/interface clickers red.png";
        }
        var ref = this;
        finger.onload = function () {
            ctx.drawImage(finger, ref.imgCoords.topLeft.x, ref.imgCoords.topLeft.y, iconSize, iconSize);
        };
    };
    Annotation.prototype.highlight = function (ctx) {
        this.drawing.applySetting(ctx, "highlight");
        this.drawing.drawPolygon(ctx, this.points, "highlight");
        this.draw(ctx);
    };
    Annotation.prototype.addToAnimations = function (canvas, zoom) {
        return [this];
    };
    Annotation.prototype.animate_old = function (ctx, stage, canvas, zoom) {
        ctx.save();
        this.drawing.applySetting(ctx, this.drawingSetting);
        ctx.globalAlpha = stage;
        this.draw_polygon(ctx);
        ctx.restore();
    };
    Annotation.prototype.animate = function (ctx, stage, canvas, zoom) {
        var x = (this.fingerCoords[0].x + (iconSize / 2));
        var y = (this.fingerCoords[0].y + (iconSize / 2));
        var small = (iconSize * 1.5 + (100 * stage)) * zoom;
        var big = (iconSize * 2 + (100 * stage)) * zoom;
        ctx.save();
        ctx.lineWidth = 9;
        ctx.strokeStyle = "green";
        ctx.globalAlpha = 0.3 + stage;
        ctx.beginPath();
        ctx.arc(x, y, small, -Math.PI / 3, Math.PI / 3);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, big, -Math.PI / 3, Math.PI / 3);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, small, Math.PI / 1.5, -Math.PI / 1.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, big, Math.PI / 1.5, -Math.PI / 1.5);
        ctx.stroke();
        ctx.restore();
    };
    Annotation.prototype.activate = function (ctx, component, zoom) {
        // ctx.clearRect(this.imgCoords.topLeft.x, this.imgCoords.topLeft.y, this.imgCoords.width, this.imgCoords.height);
        component.placeFrame(this, zoom);
        this.visited = true;
        this.draw(ctx);
    };
    return Annotation;
}(Zone));

var Cover = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Cover, _super);
    function Cover(slide) {
        return _super.call(this, slide) || this;
    }
    Cover.prototype.draw = function (ctx) {
        this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.drawCover(ctx, this.points);
    };
    Cover.prototype.addToAnimations = function (canvas, zoom) {
        return [this];
    };
    Cover.prototype.animate = function (ctx, stage, canvas, zoom) {
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
        _this.source = slide.fields.icon.value;
        return _this;
    }
    Poster.prototype.addToAnimations = function (canvas, zoom) {
        this.transformSetting = this.drawing.calcScaleToFit(this.imgCoords, canvas, zoom);
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
        this.text = text;
        this.x = x;
        this.y = y;
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
    };
    Cloud.prototype.draw = function (ctx) {
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

module.exports = "* {box-sizing: border-box}\r\n\r\n#container{\r\n    position:absolute;\r\n    left:0;\r\n    bottom:0;\r\n    width: 98%;\r\n    height:0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column nowrap;\r\n    background-color: rgba(0,0,0,0.8);\r\n    color: white;\r\n    padding:1em;\r\n    z-index:2500;\r\n    overflow-y : scroll;\r\n        -webkit-transition: height 2s;\r\n        transition: height 2s;\r\n}\r\n\r\n#image{\r\n   background-color: rgba(100,100,100,0.3);\r\nmargin: 0.5em;\r\n    margin-bottom: 1em;\r\nmargin-bottom: 0;\r\nbox-shadow: 0 0 15px rgba(0,0,0,0.7);\r\nmax-width: 100%;\r\nborder: 2px outset rgb(100,100,100);\r\n}\r\n\r\n#description{\r\n       background-color: rgba(0,0,0,0.7);\r\nmargin:0.5em;\r\n    padding:1em;\r\nbox-shadow: 0 0 15px rgba(0,0,0,0.7);\r\n   max-width:100%;\r\n}\r\n\r\n#description h2{\r\n    border-bottom : 1px solid white;\r\n    color:rgb(255,242,204);\r\n}\r\n\r\n.iconButton{\r\n    position:absolute;\r\n    right:0;\r\n    top:0;\r\n    border-radius: 0.2em;\r\n    border:2px outset rgb(20,20,20);\r\n    width:3em;\r\n    height:3em;\r\n    margin:0.25em;\r\n     background-size: 100% 100%;\r\n    -webkit-transition : background-image 1s ease-out;\r\n    transition : background-image 1s ease-out;\r\n\r\n    background-image:url(\"/assets/images/icons/close.png\");\r\n}\r\n\r\n.iconButton:hover{\r\n    box-shadow:0 0 5px yellow;\r\n}\r\n\r\nspan.keyWord{\r\n   font-weight:bold;\r\n    color:#5d91b6\r\n}\r\n\r\n/* CUSTOM SCROLLBAR */\r\n\r\n::-webkit-scrollbar {\r\n    width: 11px;\r\n    height: 11px;\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n    width: 0px;\r\n    height: 0px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgb(20,20,20);\r\n    border: 2px solid #ffffff;\r\n    border-radius: 50px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #ffffff;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n    background: #000000;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: rgb(20,20,20);\r\n    border: 0px none #ffffff;\r\n    border-radius: 39px;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-track:active {\r\n    background: rgb(20,20,20);\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n    background: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxzQkFBc0I7O0FBRXpCO0lBQ0ksaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixRQUFRO0lBQ1IsVUFBVTtJQUNWLFFBQVE7SUFDUixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBd0I7SUFBeEIsNkJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO1FBQ2YsNkJBQXFCO1FBQXJCLHFCQUFxQjtBQUM3Qjs7QUFFQTtHQUNHLHVDQUF1QztBQUMxQyxhQUFhO0lBQ1Qsa0JBQWtCO0FBQ3RCLGdCQUFnQjtBQUNoQixvQ0FBb0M7QUFDcEMsZUFBZTtBQUNmLG1DQUFtQztBQUNuQzs7QUFFQTtPQUNPLGlDQUFpQztBQUN4QyxZQUFZO0lBQ1IsV0FBVztBQUNmLG9DQUFvQztHQUNqQyxjQUFjO0FBQ2pCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsS0FBSztJQUNMLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0tBQ1osMEJBQTBCO0lBQzNCLGlEQUF5QztJQUF6Qyx5Q0FBeUM7O0lBRXpDLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtHQUNHLGdCQUFnQjtJQUNmO0FBQ0o7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiLi4vaW1hZ2UvaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG4jY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBib3R0b206MDtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6MDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuICAgIHotaW5kZXg6MjUwMDtcclxuICAgIG92ZXJmbG93LXkgOiBzY3JvbGw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xyXG59XHJcblxyXG4jaW1hZ2V7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLDEwMCwxMDAsMC4zKTtcclxubWFyZ2luOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxubWFyZ2luLWJvdHRvbTogMDtcclxuYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLDAsMCwwLjcpO1xyXG5tYXgtd2lkdGg6IDEwMCU7XHJcbmJvcmRlcjogMnB4IG91dHNldCByZ2IoMTAwLDEwMCwxMDApO1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb257XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbm1hcmdpbjowLjVlbTtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG5ib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgIG1heC13aWR0aDoxMDAlO1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb24gaDJ7XHJcbiAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgY29sb3I6cmdiKDI1NSwyNDIsMjA0KTtcclxufVxyXG5cclxuLmljb25CdXR0b257XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB0b3A6MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgYm9yZGVyOjJweCBvdXRzZXQgcmdiKDIwLDIwLDIwKTtcclxuICAgIHdpZHRoOjNlbTtcclxuICAgIGhlaWdodDozZW07XHJcbiAgICBtYXJnaW46MC4yNWVtO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbiA6IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1vdXQ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jbG9zZS5wbmdcIik7XHJcbn1cclxuXHJcbi5pY29uQnV0dG9uOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzowIDAgNXB4IHllbGxvdztcclxufVxyXG5cclxuc3Bhbi5rZXlXb3Jke1xyXG4gICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgY29sb3I6IzVkOTFiNlxyXG59XHJcblxyXG4vKiBDVVNUT00gU0NST0xMQkFSICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxuICAgIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM5cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwLDIwLDIwKTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/image/image.component.html":
/*!********************************************!*\
  !*** ./src/app/image/image.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=container #container>\n    <button (click)=\"close()\" *ngIf=\"opened==true\" style=\"float:right\" class=\"iconButton\"></button>\n\n    <img [src]=\"imgUrl\" id=image *ngIf=\"imgUrl\" />\n\n    <div id=description *ngIf=\"description\">\n        <h2 id=imgHeadline>{{name}}</h2>\n        <p class=description [innerHTML]=highlightKws(description)>\n        </p>\n    </div>\n    <app-audio [songUrl]=\"songUrl\" mode=\"interaction\" [youTubeId]=\"youTubeId\"></app-audio>\n\n\n</div>"

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
        this.keyWords = ["Aquila", "Genizah", "palimpsest", "Pyyut", "Palestine", "poetry", "Yannai"];
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
        this.container.nativeElement.style.height = "50%";
        this.opened = true;
    };
    ImageComponent.prototype.highlightKws = function (text) {
        var result = text;
        this.keyWords.forEach(function (kw) { return result = result.replace(kw, "<strong>" + kw + "</strong>"); });
        return result;
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

module.exports = "app-audio{\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n    margin:1%;\r\n    z-index:1000;\r\n}\r\n\r\n#timeMachine{\r\n          position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    bottom: 0%;\r\n    z-index: 5000;\r\n    background-color: transparent;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column nowrap;\r\n}\r\n\r\n#timeMachine h2{\r\n   width:100%;\r\n    text-align:center;\r\n    font-size: 50px;\r\n    background-color:black;\r\n    border-radius: 0.5em;\r\n    \r\n}\r\n\r\n#timeMachine p{\r\n    width:90%;\r\n    margin:5%;\r\n    text-align:center;\r\n     background-color:black;\r\n    border-radius: 0.5em;\r\n    padding:\r\n}\r\n\r\n.selectButton{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column-nowrap;\r\n   border: none;\r\n    position: fixed;\r\n    bottom: 0%;\r\n    width: 50%;\r\n    height: 100%;\r\n    background-color: transparent;\r\n    font-size: 50px;\r\n    -webkit-transition: background-color 2s ease-out;\r\n    transition: background-color 2s ease-out;\r\n}\r\n\r\n.selectButton:hover{\r\n    background-color:rgba(255,255,255,0.2);\r\n}\r\n\r\n.selectButton h3{\r\n    font-size:35px;\r\n    position:absolute;\r\n    bottom:50%;\r\n    width:90%;\r\n    margin:5%;\r\n    text-align:center;\r\n}\r\n\r\n#aquila{\r\n    right:0;\r\n    color:white;\r\n}\r\n\r\n#yannai{\r\n    left:0;\r\n    color:black;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ludGVyYWN0aW9uL2ludGVyYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsS0FBSztJQUNMLE9BQU87SUFDUCxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtVQUNVLGVBQWU7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXdCO0lBQXhCLDZCQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUI7O0FBR0E7R0FDRyxVQUFVO0lBQ1QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1QsaUJBQWlCO0tBQ2hCLHNCQUFzQjtJQUN2QixvQkFBb0I7SUFDcEI7QUFDSjs7QUFHQTtJQUNJLG1CQUFZO0lBQVosWUFBWTtJQUNaLDRCQUF3QjtJQUF4Qiw2QkFBd0I7WUFBeEIsd0JBQXdCO0dBQ3pCLFlBQVk7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnREFBd0M7SUFBeEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsV0FBVztBQUNmOztBQUVBO0lBQ0ksTUFBTTtJQUNOLFdBQVc7QUFDZiIsImZpbGUiOiIuLi9pbnRlcmFjdGlvbi9pbnRlcmFjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWF1ZGlve1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBtYXJnaW46MSU7XHJcbiAgICB6LWluZGV4OjEwMDA7XHJcbn1cclxuXHJcbiN0aW1lTWFjaGluZXtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG59XHJcblxyXG5cclxuI3RpbWVNYWNoaW5lIGgye1xyXG4gICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBcclxufVxyXG5cclxuI3RpbWVNYWNoaW5lIHB7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW46NSU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBwYWRkaW5nOlxyXG59XHJcblxyXG5cclxuLnNlbGVjdEJ1dHRvbntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uLW5vd3JhcDtcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5zZWxlY3RCdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxufVxyXG5cclxuLnNlbGVjdEJ1dHRvbiBoM3tcclxuICAgIGZvbnQtc2l6ZTozNXB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBib3R0b206NTAlO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luOjUlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbiNhcXVpbGF7XHJcbiAgICByaWdodDowO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiN5YW5uYWl7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuIl19 */"

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
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _classes_zone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/zone */ "./src/app/classes/zone.ts");






var InteractionComponent = /** @class */ (function () {
    function InteractionComponent(_activatedRoute, _dataService, router, navigation) {
        this._activatedRoute = _activatedRoute;
        this._dataService = _dataService;
        this.router = router;
        this.navigation = navigation;
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
        var ref = this;
        this._activatedRoute.paramMap.subscribe(function (p) {
            var source = p.get('source');
            var canvases = p.get('canvases').split(",");
            var annotation = p.get('annotation');
            ref.navigation.previousRoutes.unshift([source, canvases.join(","), annotation]);
            if (!annotation) {
                annotation = null;
            }
            ref.initialize(canvases, source, annotation);
        });
        // let id=<string>this._activatedRoute.snapshot.params['zid'];
    };
    InteractionComponent.prototype.initialize = function (canvases, source, annotation) {
        this.zones = [];
        this.zoneLoader = [];
        this.zoneCategories = [];
        this.cis = [];
        if (canvases.length > 1) {
            this.mode = "preview";
        }
        else {
            this.mode = "interaction";
        }
        var ref = this;
        var _loop_1 = function (i) {
            this_1.cis.push(i);
            this_1._dataService.fetchJson(source + "_" + canvases[i]).subscribe(function (data) {
                var imgData = data["imgData"];
                // ref.canvases._results[i].imgData=imgData;
                if (annotation) {
                    data.slides = [data.slides[annotation]];
                }
                var zoneLoader = ref.processIcons(data);
                // ref.displayZones();
                //  ref.canvases._results[i].zones=ref.zoneLoader.zones;         
                // ref.canvases._results[i].zoneCategories=ref.zoneLoader.zoneCategories;  
                var catList = ref.zones.map(function (zone) { return zone.category; });
                // this.cats=new Set(catList);
                ref.zones[i] = zoneLoader.zones;
                ref.zoneCategories[i] = zoneLoader.zoneCategories;
                ref.imgData[i] = imgData;
                if (annotation) {
                    ref.displayClicked(ref.zones[i][annotation]);
                    ref.infoWindow.open();
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < canvases.length; i++) {
            _loop_1(i);
        }
    };
    InteractionComponent.prototype.displayClicked = function (e) {
        // this.infoWindow.open();
        this.name = e.title;
        this.description = e.description;
        this.imgUrl = e.image;
        this.youTubeId = e.music;
        this.songUrl = "";
    };
    InteractionComponent.prototype.processIcons = function (slideSet) {
        var ref = this;
        var result = [];
        var categories = {};
        slideSet.slides.forEach(function (slide) {
            var newZone;
            slide.component = ref;
            if (ref.mode != "preview") {
                switch (slide.cat) {
                    case "translation":
                        newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Annotation"](slide, slideSet.imgData);
                        break;
                    case "Script":
                        newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Annotation"](slide, slideSet.imgData);
                        break;
                    case "Content":
                        newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Annotation"](slide, slideSet.imgData);
                        break;
                    case "Author":
                        newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Annotation"](slide, slideSet.imgData);
                        break;
                    case "Text":
                        newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Annotation"](slide, slideSet.imgData);
                        break;
                    case "Material":
                        newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Annotation"](slide, slideSet.imgData);
                        break;
                    case "Region":
                        newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Region"](slide, slideSet.imgData);
                        break;
                    case "Discovery":
                        newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Annotation"](slide, slideSet.imgData);
                        break;
                    case "City":
                        newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Region"](slide, slideSet.imgData);
                        break;
                }
            }
            else {
                newZone = new _classes_zone__WEBPACK_IMPORTED_MODULE_5__["Region"](slide, slideSet.imgData);
            }
            if (!categories[slide.cat]) {
                var selectedVal = void 0;
                selectedVal = true;
                categories[slide.cat] = { name: slide.cat, zoneCount: 0, selected: selectedVal };
            }
            categories[slide.cat].zoneCount++;
            result.push(newZone);
        });
        var zoneCategories = [];
        for (var c in categories) {
            zoneCategories.push(categories[c]);
        }
        return { zones: result, zoneCategories: zoneCategories };
    };
    InteractionComponent.prototype.displayZones = function () {
        this.zones = this.zoneLoader;
    };
    InteractionComponent.prototype.moveInTime = function (e) {
        //  this.canvases._results.forEach((c)=>c.moveInTime(e.srcElement.value));
        var ref = this;
        if (e == 1) {
            this.canvases._results[1].wrapper.nativeElement.addEventListener("transitionend", function () { ref.navigate(['interaction/aquila_v/' + e]), 3000; });
            this.canvases._results[1].wrapper.nativeElement.style.transform = "rotate(180deg)";
        }
        else {
            ref.navigate(['interaction/aquila_v/' + e]);
        }
    };
    InteractionComponent.prototype.navigate = function (r) {
        this.router.navigate(r);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
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

module.exports = "#container{\r\n    position:absolute;\r\nborder:4px outset black;\r\n    border-radius:0.2em;\r\n    background-color:transparent;\r\n    font-size:45px;\r\n    display:none;\r\n    z-index:2000;\r\n    padding:0;\r\n    margin:0;\r\n    -webkit-transform:scale(1.05,1.05);\r\n            transform:scale(1.05,1.05);\r\n    -webkit-transition: display 2s smooth;\r\n    transition: display 2s smooth;\r\n}\r\n\r\n#controls{\r\n    height: 25px;\r\n    position:absolute;\r\n    bottom: 0px;\r\n}\r\n\r\nspan.transcription{\r\n    color:navy;\r\n    font-weight:bold;\r\n    margin-right: 0.3em;\r\n}\r\n\r\nspan.translation{\r\n    color:darkred;\r\n    font-weight:bold;\r\n    margin-right: 0.3em;\r\n}\r\n\r\n.textBox{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row wrap;\r\n    background-color: rgba(255,255,255,0.3);\r\n    margin:0;\r\n    padding:0;\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\nbutton{\r\n    color:white;\r\n    background-color:black;\r\n    border-radius:0.5em;\r\n    font-weight:bold;\r\n}\r\n\r\n#hideButton{\r\n    margin:0;\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n}\r\n\r\n.iconButton{\r\n    border-radius: 0.2em;\r\n    border:2px outset rgb(20,20,20);\r\n    width:3em;\r\n    height:3em;\r\n    margin:0.25em;\r\n     background-size: 100% 100%;\r\n    -webkit-transition : background-image 1s ease-out;\r\n    transition : background-image 1s ease-out;\r\n  \r\n}\r\n\r\n.icon_close{\r\n    background-image:url(\"/assets/images/icons/close.png\");\r\n}\r\n\r\n.icon_translation{\r\n    background-image:url(\"/assets/images/icons/translate%20blue.png\");\r\n}\r\n\r\n.icon_translation:hover{\r\n    background-image:url(\"/assets/images/icons/translate%20yellow.png\");\r\n}\r\n\r\n.icon_transcription{\r\n    background-image:url(\"/assets/images/icons/transcribe%20blue.png\");\r\n}\r\n\r\n.icon_transcription:hover{\r\n    background-image:url(\"/assets/images/icons/transcribe%20yellow.png\");\r\n}\r\n\r\n.icon_layers{\r\n    background-image:url(\"/assets/images/icons/material%20blue.png\");\r\n}\r\n\r\n.icon_layers:hover{\r\n    background-image:url(\"/assets/images/icons/material%20yellow.png\");\r\n}\r\n\r\n.icon_map{\r\n    background-image:url(\"/assets/images/icons/map%20blue.png\");\r\n}\r\n\r\n.icon_map:hover{\r\n    background-image:url(\"/assets/images/icons/map%20yellow.png\");\r\n}\r\n\r\n.icon_more{\r\n    background-image:url(\"/assets/images/icons/text%20blue.png\");\r\n}\r\n\r\n.icon_more:hover{\r\n    background-image:url(\"/assets/images/icons/text%20yellow.png\");\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21hZ2ljLWdsYXNzL21hZ2ljLWdsYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIsdUJBQXVCO0lBQ25CLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLHFDQUE2QjtJQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBWTtJQUFaLFlBQVk7SUFDWiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixLQUFLO0lBQ0wsT0FBTztBQUNYOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7S0FDWiwwQkFBMEI7SUFDM0IsaURBQXlDO0lBQXpDLHlDQUF5Qzs7QUFFN0M7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBR0E7SUFDSSxpRUFBaUU7QUFDckU7O0FBRUE7SUFDSSxtRUFBbUU7QUFDdkU7O0FBRUE7SUFDSSxrRUFBa0U7QUFDdEU7O0FBRUE7SUFDSSxvRUFBb0U7QUFDeEU7O0FBRUE7SUFDSSxnRUFBZ0U7QUFDcEU7O0FBRUE7SUFDSSxrRUFBa0U7QUFDdEU7O0FBRUE7SUFDSSwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSw2REFBNkQ7QUFDakU7O0FBQ0E7SUFDSSw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSw4REFBOEQ7QUFDbEUiLCJmaWxlIjoiLi4vbWFnaWMtZ2xhc3MvbWFnaWMtZ2xhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuYm9yZGVyOjRweCBvdXRzZXQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOjAuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTo0NXB4O1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgei1pbmRleDoyMDAwO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSwxLjA1KTtcclxuICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMnMgc21vb3RoO1xyXG59XHJcblxyXG4jY29udHJvbHN7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuc3Bhbi50cmFuc2NyaXB0aW9ue1xyXG4gICAgY29sb3I6bmF2eTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xyXG59XHJcblxyXG5zcGFuLnRyYW5zbGF0aW9ue1xyXG4gICAgY29sb3I6ZGFya3JlZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xyXG59XHJcblxyXG4udGV4dEJveHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czowLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbiNoaWRlQnV0dG9ue1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgcmlnaHQ6MDtcclxufVxyXG5cclxuLmljb25CdXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIGJvcmRlcjoycHggb3V0c2V0IHJnYigyMCwyMCwyMCk7XHJcbiAgICB3aWR0aDozZW07XHJcbiAgICBoZWlnaHQ6M2VtO1xyXG4gICAgbWFyZ2luOjAuMjVlbTtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIHRyYW5zaXRpb24gOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2Utb3V0O1xyXG4gIFxyXG59XHJcblxyXG4uaWNvbl9jbG9zZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2xvc2UucG5nXCIpO1xyXG59XHJcblxyXG5cclxuLmljb25fdHJhbnNsYXRpb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RyYW5zbGF0ZSUyMGJsdWUucG5nXCIpO1xyXG59XHJcblxyXG4uaWNvbl90cmFuc2xhdGlvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdHJhbnNsYXRlJTIweWVsbG93LnBuZ1wiKTtcclxufVxyXG5cclxuLmljb25fdHJhbnNjcmlwdGlvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdHJhbnNjcmliZSUyMGJsdWUucG5nXCIpO1xyXG59XHJcblxyXG4uaWNvbl90cmFuc2NyaXB0aW9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9pY29ucy90cmFuc2NyaWJlJTIweWVsbG93LnBuZ1wiKTtcclxufVxyXG5cclxuLmljb25fbGF5ZXJze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9tYXRlcmlhbCUyMGJsdWUucG5nXCIpO1xyXG59XHJcblxyXG4uaWNvbl9sYXllcnM6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2ljb25zL21hdGVyaWFsJTIweWVsbG93LnBuZ1wiKTtcclxufVxyXG5cclxuLmljb25fbWFwe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9tYXAlMjBibHVlLnBuZ1wiKTtcclxufVxyXG5cclxuLmljb25fbWFwOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9tYXAlMjB5ZWxsb3cucG5nXCIpO1xyXG59XHJcbi5pY29uX21vcmV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RleHQlMjBibHVlLnBuZ1wiKTtcclxufVxyXG5cclxuLmljb25fbW9yZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGV4dCUyMHllbGxvdy5wbmdcIik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/magic-glass/magic-glass.component.html":
/*!********************************************************!*\
  !*** ./src/app/magic-glass/magic-glass.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" #container>\n\n    <button id=hideButton (click)=\"hideFrame()\" class=\"iconButton icon_close\"></button>\n\n    <div *ngIf=\"mode=='transcription'\" class=textBox [style.font-size]=fontSize>\n        <span class=\"transcription\" *ngFor=\"let w of msText.transcription\" >{{w.transcript}}\n        <span class=translation>{{w.translation}}</span></span>\n    </div>\n\n    <div *ngIf=\"mode=='translation'\" class=textBox [style.font-size]=fontSize>\n        <span class=\"translation\" *ngFor=\"let w of msText.translation\">{{w.transcript}}</span>\n    </div>\n\n    <div id=\"controls\">\n        <button (click)=\"mode='transcription'\" *ngIf=\"msText.transcription\" class=\"iconButton icon_transcription\"></button>\n        <button (click)=\"mode='translation'\" *ngIf=\"msText.translation\" class=\"iconButton icon_translation\"></button>\n        <button (click)=\"layers()\" class=\"iconButton icon_layers\"></button>\n        <button (click)=\"showInfo($event)\" class=\"iconButton icon_more\" matTooltip=\"msText.link\"></button>\n        <button *ngIf=\"msText.mapLink\" (click)=\"navigate('map',msText.map)\" class=\"iconButton icon_map\" [title]=\"msText.mapLink\"></button>\n        <button (click)=\"clear()\" class=\"iconButton icon_close\"></button>\n    </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MagicGlassComponent = /** @class */ (function () {
    function MagicGlassComponent(data, router) {
        this.data = data;
        this.router = router;
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
    MagicGlassComponent.prototype.navigate = function (set, part) {
        console.log("going to map");
        this.router.navigate(['interaction/' + set + '/' + part + "/0"]);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MagicGlassComponent);
    return MagicGlassComponent;
}());



/***/ }),

/***/ "./src/app/qr-reader/qr-reader.component.css":
/*!***************************************************!*\
  !*** ./src/app/qr-reader/qr-reader.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9xci1yZWFkZXIvcXItcmVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/qr-reader/qr-reader.component.html":
/*!****************************************************!*\
  !*** ./src/app/qr-reader/qr-reader.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Hold your device over a QR code.\n<zxing-scanner #scanner class=\"test-class\" start=\"true\" [device]=\"selectedDevice\" (scanSuccess)=\"handleQrCodeResult($event)\"></zxing-scanner>"

/***/ }),

/***/ "./src/app/qr-reader/qr-reader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/qr-reader/qr-reader.component.ts ***!
  \**************************************************/
/*! exports provided: QrReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrReaderComponent", function() { return QrReaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QrReaderComponent = /** @class */ (function () {
    function QrReaderComponent() {
        this.hasCameras = false;
        this.selectedDevice = null;
    }
    QrReaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scanner.camerasFound.subscribe(function (devices) {
            _this.hasCameras = true;
            console.log('Devices: ', devices);
            _this.availableDevices = devices;
            // selects the devices's back camera by default
            // for (const device of devices) {
            //     if (/back|rear|environment/gi.test(device.label)) {
            //         this.scanner.changeDevice(device);
            //         this.selectedDevice = device;
            //         break;
            //     }
            // }
        });
        this.scanner.camerasNotFound.subscribe(function (devices) {
            console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
        });
        this.scanner.permissionResponse.subscribe(function (answer) {
            _this.hasPermission = answer;
        });
    };
    QrReaderComponent.prototype.handleQrCodeResult = function (resultString) {
        console.log('Result: ', resultString);
        this.qrResultString = resultString;
        window.location.href = resultString;
    };
    QrReaderComponent.prototype.onDeviceSelectChange = function (selectedValue) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scanner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QrReaderComponent.prototype, "scanner", void 0);
    QrReaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qr-reader',
            template: __webpack_require__(/*! ./qr-reader.component.html */ "./src/app/qr-reader/qr-reader.component.html"),
            styles: [__webpack_require__(/*! ./qr-reader.component.css */ "./src/app/qr-reader/qr-reader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QrReaderComponent);
    return QrReaderComponent;
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
        this.animating = true;
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
        if (this.animating) {
            animCtx.clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
            var ref_1 = this;
            this.animations.forEach(function (a, ai) {
                var now = Date.now();
                var runningTime = now - startTime;
                // console.log("running: "+runningTime);
                if (a.offset <= runningTime && a.offset + a.duration >= runningTime) {
                    a.animate(animCtx, ref_1.calcStage(startTime + a.offset, a.duration), canvas, zoom);
                }
            });
            if (this.animationStage < 1) {
                this.animationStage = this.calcStage(startTime, duration);
                requestAnimationFrame(function () { ref_1.runAnimations(ctx, animCtx, canvas, zoom, startTime, duration); });
            }
            else {
                //  console.log("animation finished");
                animCtx.clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
                this.animationStage = 0;
                this.runAnimations(ctx, animCtx, canvas, zoom, Date.now(), 5000);
                this.animations.filter(function (a) { return a.fixed; }).forEach(function (a) {
                    a.draw(ctx);
                });
                //    console.log(this.animations);
            }
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

/***/ "./src/app/services/navigation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavigationService = /** @class */ (function () {
    function NavigationService(router) {
        this.router = router;
        this.previousRoutes = [];
        this.previousRoutes = [];
    }
    NavigationService.prototype.goBack = function (i) {
        console.log(this.previousRoutes);
        var path = "interaction/" + this.previousRoutes[i].join("/");
        this.navigate([path]);
    };
    NavigationService.prototype.navigate = function (r) {
        this.router.navigate(r);
    };
    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationService);
    return NavigationService;
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