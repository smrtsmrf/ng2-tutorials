"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var friend_service_1 = require('./friend.service');
var FriendComponent = (function () {
    // Inject FriendService and assign it to _friendService
    function FriendComponent(_friendService) {
        this._friendService = _friendService;
        this.componentName = 'FriendComponent';
        // Utilize .get request from app/friend.service.ts to populate friends object
        this.friends = _friendService.getFriends();
    }
    FriendComponent = __decorate([
        core_1.Component({
            selector: 'my-friends',
            providers: [friend_service_1.FriendService],
            styles: ["\n     div { \n     background-color:#EFEFEF;\n     margin-bottom:15px;\n     padding:15px;\n     border:1px solid #DDD;\n     box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);\n    border-radius:3px;\n  }\n  h2 { \n    text-align: center;\n  }\n  "],
            template: "<h1>Hello from the {{ componentName }}!</h1><div *ngFor=\"let f of friends\"><h3>Name: {{ f.name }}</h3><h4>Age: {{ f.age }}</h4>        </div>"
        }), 
        __metadata('design:paramtypes', [friend_service_1.FriendService])
    ], FriendComponent);
    return FriendComponent;
}());
exports.FriendComponent = FriendComponent;
//# sourceMappingURL=friend.component.js.map