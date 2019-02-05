(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular/compiler/src sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/@angular/compiler/src sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@angular/compiler/src sync recursive";

/***/ }),

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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n    <div class=\"mdc-layout-grid\">\n        <div class=\"mdc-layout-grid__cell\"><img src=\"http://alamiyamarkets.com/images/2018/01/02/logo.png\"/></div>\n    </div>\n    <div class=\"mdc-layout-grid\">\n    <h1 class=\"mdc-typography--headline1\">Deposit by Credit Card</h1>\n    </div>\n    <div *ngIf=showmessage class=\"mdc-layout-grid\">\n      <h3  class=\"mdc-typography--headline3\">{{message}}</h3>\n    </div>\n\n  <div *ngIf=showform class=\"mdc-layout-grid\">\n    <div class=\"mdc-layout-grid__inner\">\n\n      <div class=\"mdc-layout-grid__cell example-container\">\n        <mat-form-field>\n          <input matInput placeholder=\"First name\" [(ngModel)]=\"first_name\" name=\"first_name\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Last name\" [(ngModel)]=\"last_name\" required name=\"last_name\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Address: Apt#, Street #, Street name\" [(ngModel)]=\"address\" required name=\"address\"></textarea>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"City\" [(ngModel)]=\"city\" name=\"city\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"State\" [(ngModel)]=\"state\" name=\"state\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Zip\" [(ngModel)]=\"zip\" name=\"zip\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-select [(ngModel)]=\"country\" required name=\"country\" placeholder=\"Select country\">\n            <mat-option value=\"AF\">Afghanistan</mat-option>\n            <mat-option value=\"AX\">Åland Islands</mat-option>\n            <mat-option value=\"AL\">Albania</mat-option>\n            <mat-option value=\"DZ\">Algeria</mat-option>\n            <mat-option value=\"AS\">American Samoa</mat-option>\n            <mat-option value=\"AD\">Andorra</mat-option>\n            <mat-option value=\"AO\">Angola</mat-option>\n            <mat-option value=\"AI\">Anguilla</mat-option>\n            <mat-option value=\"AQ\">Antarctica</mat-option>\n            <mat-option value=\"AG\">Antigua and Barbuda</mat-option>\n            <mat-option value=\"AR\">Argentina</mat-option>\n            <mat-option value=\"AM\">Armenia</mat-option>\n            <mat-option value=\"AW\">Aruba</mat-option>\n            <mat-option value=\"AU\">Australia</mat-option>\n            <mat-option value=\"AT\">Austria</mat-option>\n            <mat-option value=\"AZ\">Azerbaijan</mat-option>\n            <mat-option value=\"BS\">Bahamas</mat-option>\n            <mat-option value=\"BH\">Bahrain</mat-option>\n            <mat-option value=\"BD\">Bangladesh</mat-option>\n            <mat-option value=\"BB\">Barbados</mat-option>\n            <mat-option value=\"BY\">Belarus</mat-option>\n            <mat-option value=\"BE\">Belgium</mat-option>\n            <mat-option value=\"BZ\">Belize</mat-option>\n            <mat-option value=\"BJ\">Benin</mat-option>\n            <mat-option value=\"BM\">Bermuda</mat-option>\n            <mat-option value=\"BT\">Bhutan</mat-option>\n            <mat-option value=\"BO\">Bolivia, Plurinational State of</mat-option>\n            <mat-option value=\"BQ\">Bonaire, Sint Eustatius and Saba</mat-option>\n            <mat-option value=\"BA\">Bosnia and Herzegovina</mat-option>\n            <mat-option value=\"BW\">Botswana</mat-option>\n            <mat-option value=\"BV\">Bouvet Island</mat-option>\n            <mat-option value=\"BR\">Brazil</mat-option>\n            <mat-option value=\"IO\">British Indian Ocean Territory</mat-option>\n            <mat-option value=\"BN\">Brunei Darussalam</mat-option>\n            <mat-option value=\"BG\">Bulgaria</mat-option>\n            <mat-option value=\"BF\">Burkina Faso</mat-option>\n            <mat-option value=\"BI\">Burundi</mat-option>\n            <mat-option value=\"KH\">Cambodia</mat-option>\n            <mat-option value=\"CM\">Cameroon</mat-option>\n            <mat-option value=\"CA\">Canada</mat-option>\n            <mat-option value=\"CV\">Cape Verde</mat-option>\n            <mat-option value=\"KY\">Cayman Islands</mat-option>\n            <mat-option value=\"CF\">Central African Republic</mat-option>\n            <mat-option value=\"TD\">Chad</mat-option>\n            <mat-option value=\"CL\">Chile</mat-option>\n            <mat-option value=\"CN\">China</mat-option>\n            <mat-option value=\"CX\">Christmas Island</mat-option>\n            <mat-option value=\"CC\">Cocos (Keeling) Islands</mat-option>\n            <mat-option value=\"CO\">Colombia</mat-option>\n            <mat-option value=\"KM\">Comoros</mat-option>\n            <mat-option value=\"CG\">Congo</mat-option>\n            <mat-option value=\"CD\">Congo, the Democratic Republic of the</mat-option>\n            <mat-option value=\"CK\">Cook Islands</mat-option>\n            <mat-option value=\"CR\">Costa Rica</mat-option>\n            <mat-option value=\"CI\">Côte d'Ivoire</mat-option>\n            <mat-option value=\"HR\">Croatia</mat-option>\n            <mat-option value=\"CU\">Cuba</mat-option>\n            <mat-option value=\"CW\">Curaçao</mat-option>\n            <mat-option value=\"CY\">Cyprus</mat-option>\n            <mat-option value=\"CZ\">Czech Republic</mat-option>\n            <mat-option value=\"DK\">Denmark</mat-option>\n            <mat-option value=\"DJ\">Djibouti</mat-option>\n            <mat-option value=\"DM\">Dominica</mat-option>\n            <mat-option value=\"DO\">Dominican Republic</mat-option>\n            <mat-option value=\"EC\">Ecuador</mat-option>\n            <mat-option value=\"EG\">Egypt</mat-option>\n            <mat-option value=\"SV\">El Salvador</mat-option>\n            <mat-option value=\"GQ\">Equatorial Guinea</mat-option>\n            <mat-option value=\"ER\">Eritrea</mat-option>\n            <mat-option value=\"EE\">Estonia</mat-option>\n            <mat-option value=\"ET\">Ethiopia</mat-option>\n            <mat-option value=\"FK\">Falkland Islands (Malvinas)</mat-option>\n            <mat-option value=\"FO\">Faroe Islands</mat-option>\n            <mat-option value=\"FJ\">Fiji</mat-option>\n            <mat-option value=\"FI\">Finland</mat-option>\n            <mat-option value=\"FR\">France</mat-option>\n            <mat-option value=\"GF\">French Guiana</mat-option>\n            <mat-option value=\"PF\">French Polynesia</mat-option>\n            <mat-option value=\"TF\">French Southern Territories</mat-option>\n            <mat-option value=\"GA\">Gabon</mat-option>\n            <mat-option value=\"GM\">Gambia</mat-option>\n            <mat-option value=\"GE\">Georgia</mat-option>\n            <mat-option value=\"DE\">Germany</mat-option>\n            <mat-option value=\"GH\">Ghana</mat-option>\n            <mat-option value=\"GI\">Gibraltar</mat-option>\n            <mat-option value=\"GR\">Greece</mat-option>\n            <mat-option value=\"GL\">Greenland</mat-option>\n            <mat-option value=\"GD\">Grenada</mat-option>\n            <mat-option value=\"GP\">Guadeloupe</mat-option>\n            <mat-option value=\"GU\">Guam</mat-option>\n            <mat-option value=\"GT\">Guatemala</mat-option>\n            <mat-option value=\"GG\">Guernsey</mat-option>\n            <mat-option value=\"GN\">Guinea</mat-option>\n            <mat-option value=\"GW\">Guinea-Bissau</mat-option>\n            <mat-option value=\"GY\">Guyana</mat-option>\n            <mat-option value=\"HT\">Haiti</mat-option>\n            <mat-option value=\"HM\">Heard Island and McDonald Islands</mat-option>\n            <mat-option value=\"VA\">Holy See (Vatican City State)</mat-option>\n            <mat-option value=\"HN\">Honduras</mat-option>\n            <mat-option value=\"HK\">Hong Kong</mat-option>\n            <mat-option value=\"HU\">Hungary</mat-option>\n            <mat-option value=\"IS\">Iceland</mat-option>\n            <mat-option value=\"IN\">India</mat-option>\n            <mat-option value=\"ID\">Indonesia</mat-option>\n            <mat-option value=\"IR\">Iran, Islamic Republic of</mat-option>\n            <mat-option value=\"IQ\">Iraq</mat-option>\n            <mat-option value=\"IE\">Ireland</mat-option>\n            <mat-option value=\"IM\">Isle of Man</mat-option>\n            <mat-option value=\"IL\">Israel</mat-option>\n            <mat-option value=\"IT\">Italy</mat-option>\n            <mat-option value=\"JM\">Jamaica</mat-option>\n            <mat-option value=\"JP\">Japan</mat-option>\n            <mat-option value=\"JE\">Jersey</mat-option>\n            <mat-option value=\"JO\">Jordan</mat-option>\n            <mat-option value=\"KZ\">Kazakhstan</mat-option>\n            <mat-option value=\"KE\">Kenya</mat-option>\n            <mat-option value=\"KI\">Kiribati</mat-option>\n            <mat-option value=\"KP\">Korea, Democratic People's Republic of</mat-option>\n            <mat-option value=\"KR\">Korea, Republic of</mat-option>\n            <mat-option value=\"KW\">Kuwait</mat-option>\n            <mat-option value=\"KG\">Kyrgyzstan</mat-option>\n            <mat-option value=\"LA\">Lao People's Democratic Republic</mat-option>\n            <mat-option value=\"LV\">Latvia</mat-option>\n            <mat-option value=\"LB\">Lebanon</mat-option>\n            <mat-option value=\"LS\">Lesotho</mat-option>\n            <mat-option value=\"LR\">Liberia</mat-option>\n            <mat-option value=\"LY\">Libya</mat-option>\n            <mat-option value=\"LI\">Liechtenstein</mat-option>\n            <mat-option value=\"LT\">Lithuania</mat-option>\n            <mat-option value=\"LU\">Luxembourg</mat-option>\n            <mat-option value=\"MO\">Macao</mat-option>\n            <mat-option value=\"MK\">Macedonia, the former Yugoslav Republic of</mat-option>\n            <mat-option value=\"MG\">Madagascar</mat-option>\n            <mat-option value=\"MW\">Malawi</mat-option>\n            <mat-option value=\"MY\">Malaysia</mat-option>\n            <mat-option value=\"MV\">Maldives</mat-option>\n            <mat-option value=\"ML\">Mali</mat-option>\n            <mat-option value=\"MT\">Malta</mat-option>\n            <mat-option value=\"MH\">Marshall Islands</mat-option>\n            <mat-option value=\"MQ\">Martinique</mat-option>\n            <mat-option value=\"MR\">Mauritania</mat-option>\n            <mat-option value=\"MU\">Mauritius</mat-option>\n            <mat-option value=\"YT\">Mayotte</mat-option>\n            <mat-option value=\"MX\">Mexico</mat-option>\n            <mat-option value=\"FM\">Micronesia, Federated States of</mat-option>\n            <mat-option value=\"MD\">Moldova, Republic of</mat-option>\n            <mat-option value=\"MC\">Monaco</mat-option>\n            <mat-option value=\"MN\">Mongolia</mat-option>\n            <mat-option value=\"ME\">Montenegro</mat-option>\n            <mat-option value=\"MS\">Montserrat</mat-option>\n            <mat-option value=\"MA\">Morocco</mat-option>\n            <mat-option value=\"MZ\">Mozambique</mat-option>\n            <mat-option value=\"MM\">Myanmar</mat-option>\n            <mat-option value=\"NA\">Namibia</mat-option>\n            <mat-option value=\"NR\">Nauru</mat-option>\n            <mat-option value=\"NP\">Nepal</mat-option>\n            <mat-option value=\"NL\">Netherlands</mat-option>\n            <mat-option value=\"NC\">New Caledonia</mat-option>\n            <mat-option value=\"NZ\">New Zealand</mat-option>\n            <mat-option value=\"NI\">Nicaragua</mat-option>\n            <mat-option value=\"NE\">Niger</mat-option>\n            <mat-option value=\"NG\">Nigeria</mat-option>\n            <mat-option value=\"NU\">Niue</mat-option>\n            <mat-option value=\"NF\">Norfolk Island</mat-option>\n            <mat-option value=\"MP\">Northern Mariana Islands</mat-option>\n            <mat-option value=\"NO\">Norway</mat-option>\n            <mat-option value=\"OM\">Oman</mat-option>\n            <mat-option value=\"PK\">Pakistan</mat-option>\n            <mat-option value=\"PW\">Palau</mat-option>\n            <mat-option value=\"PS\">Palestinian Territory, Occupied</mat-option>\n            <mat-option value=\"PA\">Panama</mat-option>\n            <mat-option value=\"PG\">Papua New Guinea</mat-option>\n            <mat-option value=\"PY\">Paraguay</mat-option>\n            <mat-option value=\"PE\">Peru</mat-option>\n            <mat-option value=\"PH\">Philippines</mat-option>\n            <mat-option value=\"PN\">Pitcairn</mat-option>\n            <mat-option value=\"PL\">Poland</mat-option>\n            <mat-option value=\"PT\">Portugal</mat-option>\n            <mat-option value=\"PR\">Puerto Rico</mat-option>\n            <mat-option value=\"QA\">Qatar</mat-option>\n            <mat-option value=\"RE\">Réunion</mat-option>\n            <mat-option value=\"RO\">Romania</mat-option>\n            <mat-option value=\"RU\">Russian Federation</mat-option>\n            <mat-option value=\"RW\">Rwanda</mat-option>\n            <mat-option value=\"BL\">Saint Barthélemy</mat-option>\n            <mat-option value=\"SH\">Saint Helena, Ascension and Tristan da Cunha</mat-option>\n            <mat-option value=\"KN\">Saint Kitts and Nevis</mat-option>\n            <mat-option value=\"LC\">Saint Lucia</mat-option>\n            <mat-option value=\"MF\">Saint Martin (French part)</mat-option>\n            <mat-option value=\"PM\">Saint Pierre and Miquelon</mat-option>\n            <mat-option value=\"VC\">Saint Vincent and the Grenadines</mat-option>\n            <mat-option value=\"WS\">Samoa</mat-option>\n            <mat-option value=\"SM\">San Marino</mat-option>\n            <mat-option value=\"ST\">Sao Tome and Principe</mat-option>\n            <mat-option value=\"SA\">Saudi Arabia</mat-option>\n            <mat-option value=\"SN\">Senegal</mat-option>\n            <mat-option value=\"RS\">Serbia</mat-option>\n            <mat-option value=\"SC\">Seychelles</mat-option>\n            <mat-option value=\"SL\">Sierra Leone</mat-option>\n            <mat-option value=\"SG\">Singapore</mat-option>\n            <mat-option value=\"SX\">Sint Maarten (Dutch part)</mat-option>\n            <mat-option value=\"SK\">Slovakia</mat-option>\n            <mat-option value=\"SI\">Slovenia</mat-option>\n            <mat-option value=\"SB\">Solomon Islands</mat-option>\n            <mat-option value=\"SO\">Somalia</mat-option>\n            <mat-option value=\"ZA\">South Africa</mat-option>\n            <mat-option value=\"GS\">South Georgia and the South Sandwich Islands</mat-option>\n            <mat-option value=\"SS\">South Sudan</mat-option>\n            <mat-option value=\"ES\">Spain</mat-option>\n            <mat-option value=\"LK\">Sri Lanka</mat-option>\n            <mat-option value=\"SD\">Sudan</mat-option>\n            <mat-option value=\"SR\">Suriname</mat-option>\n            <mat-option value=\"SJ\">Svalbard and Jan Mayen</mat-option>\n            <mat-option value=\"SZ\">Swaziland</mat-option>\n            <mat-option value=\"SE\">Sweden</mat-option>\n            <mat-option value=\"CH\">Switzerland</mat-option>\n            <mat-option value=\"SY\">Syrian Arab Republic</mat-option>\n            <mat-option value=\"TW\">Taiwan, Province of China</mat-option>\n            <mat-option value=\"TJ\">Tajikistan</mat-option>\n            <mat-option value=\"TZ\">Tanzania, United Republic of</mat-option>\n            <mat-option value=\"TH\">Thailand</mat-option>\n            <mat-option value=\"TL\">Timor-Leste</mat-option>\n            <mat-option value=\"TG\">Togo</mat-option>\n            <mat-option value=\"TK\">Tokelau</mat-option>\n            <mat-option value=\"TO\">Tonga</mat-option>\n            <mat-option value=\"TT\">Trinidad and Tobago</mat-option>\n            <mat-option value=\"TN\">Tunisia</mat-option>\n            <mat-option value=\"TR\">Turkey</mat-option>\n            <mat-option value=\"TM\">Turkmenistan</mat-option>\n            <mat-option value=\"TC\">Turks and Caicos Islands</mat-option>\n            <mat-option value=\"TV\">Tuvalu</mat-option>\n            <mat-option value=\"UG\">Uganda</mat-option>\n            <mat-option value=\"UA\">Ukraine</mat-option>\n            <mat-option value=\"AE\">United Arab Emirates</mat-option>\n            <mat-option value=\"GB\">United Kingdom</mat-option>\n            <mat-option value=\"US\">United States</mat-option>\n            <mat-option value=\"UM\">United States Minor Outlying Islands</mat-option>\n            <mat-option value=\"UY\">Uruguay</mat-option>\n            <mat-option value=\"UZ\">Uzbekistan</mat-option>\n            <mat-option value=\"VU\">Vanuatu</mat-option>\n            <mat-option value=\"VE\">Venezuela, Bolivarian Republic of</mat-option>\n            <mat-option value=\"VN\">Viet Nam</mat-option>\n            <mat-option value=\"VG\">Virgin Islands, British</mat-option>\n            <mat-option value=\"VI\">Virgin Islands, U.S.</mat-option>\n            <mat-option value=\"WF\">Wallis and Futuna</mat-option>\n            <mat-option value=\"EH\">Western Sahara</mat-option>\n            <mat-option value=\"YE\">Yemen</mat-option>\n            <mat-option value=\"ZM\">Zambia</mat-option>\n            <mat-option value=\"ZW\">Zimbabwe</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" required>\n          <!-- <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                  Email is <strong>required</strong>\n                </mat-error> -->\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput name=\"phone_no\" placeholder=\"Phone number\" [(ngModel)]=\"phone_no\" required>\n          <!-- <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                  Email is <strong>required</strong>\n                </mat-error> -->\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput name=\"mt4_account_number\" placeholder=\"MT4 Account Number\" [(ngModel)]=\"mt4_account_number\" required>\n          <!-- <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                  Email is <strong>required</strong>\n                </mat-error> -->\n        </mat-form-field>\n\n      </div>\n      <div class=\"mdc-layout-grid__cell example-container mdc-layout-grid__cell--span-1\"> </div>\n      <div class=\"mdc-layout-grid__cell example-container \">\n        <mat-form-field>\n          <input matInput placeholder=\"Amount\" [(ngModel)]=\"amount\" name=\"amount\" class=\"example-right-align\" required>\n\n        </mat-form-field>\n        <mat-form-field>\n          <select matNativeControl placeholder=\"Currency\" required [(ngModel)]=\"currency\" name=\"currency\">\n            <option value=\"USD\">USD</option>\n            <option value=\"EUR\">Euro</option>\n          </select>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput name=\"card_no\" placeholder=\"Credit Card number\" id=\"card_no\" autocomplete=\"cc-number\"\n            [(ngModel)]=\"card_no\" required ccNumber>\n        </mat-form-field>\n        <mat-form-field>\n          <select matNativeControl placeholder=\"Expiry Month\" required [(ngModel)]=\"ccExpiryMonth\" name=\"ccExpiryMonth\">\n            <option value=\"01\">January</option>\n            <option value=\"02\">February</option>\n            <option value=\"03\">March</option>\n            <option value=\"04\">April</option>\n            <option value=\"05\">May</option>\n            <option value=\"06\">June</option>\n            <option value=\"07\">July</option>\n            <option value=\"08\">August</option>\n            <option value=\"09\">September</option>\n            <option value=\"10\">October</option>\n            <option value=\"11\">November</option>\n            <option value=\"12\">December</option>\n          </select>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput min=\"1\" max=\"4\" placeholder=\"Expiry Year\" [(ngModel)]=\"ccExpiryYear\" name=\"ccExpiryYear\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput minlength=\"3\" maxlength=\"3\" placeholder=\"CVV\" [(ngModel)]=\"cvvNumber\" name=\"cvvNumber\"\n            required>\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=showform class=\"mdc-layout-grid\">\n      <div class=\"mdc-layout-grid__cell\"><button mat-flat-button color=\"primary\">Submit</button>\n        <mat-spinner *ngIf=showspinner></mat-spinner>\n      </div>\n  </div>\n  <div class=\"mdc-layout-grid\">\n    <div class=\"mdc-layout-grid__inner\">\n      <div class=\"mdc-layout-grid__cell--span-3\">\n        <img class=\"credit-card-logo\" src=\"http://2x8.af8.mwp.accessdomain.com/wp-content/uploads/2018/01/visa.png\">\n      </div>\n      <div class=\"mdc-layout-grid__cell--span-3\">\n        <img class=\"credit-card-logo\"  src=\"http://2x8.af8.mwp.accessdomain.com/wp-content/uploads/2018/01/visaelectron.png\">\n      </div>\n      <div class=\"mdc-layout-grid__cell--span-3\">\n        <img class=\"credit-card-logo\"  src=\"http://2x8.af8.mwp.accessdomain.com/wp-content/uploads/2018/01/mastercard.png\">\n      </div>\n      <div class=\"mdc-layout-grid__cell--span-3\">\n        <img class=\"credit-card-logo\"  src=\"http://2x8.af8.mwp.accessdomain.com/wp-content/uploads/2018/01/maestro.png\">\n      </div>\n\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-right-align {\n  text-align: right; }\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none; }\n\ninput.example-right-align {\n  -moz-appearance: textfield; }\n\n.credit-card-logo {\n  max-width: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VqYW5oby9Eb2N1bWVudHMvYWxhbWFpeWEtZm9ybS9teS1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25COztFQUVFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG4uY3JlZGl0LWNhcmQtbG9nb3tcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: MyErrorStateMatcher, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _directus_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @directus/sdk-js */ "./node_modules/@directus/sdk-js/dist/directus-sdk.umd.min.js");
/* harmony import */ var _directus_sdk_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_directus_sdk_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_logz_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-logz-io */ "./node_modules/angular-logz-io/fesm5/angular-logz-io.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/compiler/src/util */ "./node_modules/@angular/compiler/src/util.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7__);








/** @title Form field with label */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent(http, logz) {
        this.http = http;
        this.logz = logz;
        this.showspinner = false;
        this.myAppKey = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].key;
        this.fromemail = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].email;
        this.sendgridkey = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].sendgridkey;
        this.formsuccess = false;
        this.showform = true;
        this.showmessage = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
        ]);
        this.ccNumberController = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    AppComponent.prototype.test = function () {
        alert(this.myAppKey);
        alert(this.email);
    };
    /*
    checking the card type
    1 - For Amex
              2 - For Visa
              3 - For Mastercard
              4 - For Discover
    */
    AppComponent.prototype.GetCardType = function (number) {
        var re = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
        if (number.match(re) != null) {
            return '2';
        }
        re = new RegExp('^3[47][0-9]{13}$');
        if (number.match(re) != null) {
            return '1';
        }
        re = new RegExp('^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$');
        if (number.match(re) != null) {
            return '3';
        }
        re = new RegExp('^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$');
        if (number.match(re) != null) {
            return '4';
        }
        return '';
    };
    AppComponent.prototype.SendEmail = function (to, subject, message) {
        var msg = {
            'personalizations': [
                {
                    'to': [
                        {
                            'email': to
                        }
                    ],
                    'subject': subject
                }
            ],
            'from': {
                'email': this.fromemail
            },
            'content': [
                {
                    'type': 'text/html',
                    'value': message
                }
            ]
        };
        var ParseHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': "Bearer " + this.sendgridkey,
            })
        };
        var URL = 'https://api.sendgrid.com/v3/mail/send';
        this.showspinner = true;
        this.http.post(URL, msg, ParseHeaders).subscribe(function (res) {
            console.log(res);
        });
    };
    AppComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.showmessage = false;
        this.message = '';
        var client = new _directus_sdk_js__WEBPACK_IMPORTED_MODULE_5___default.a();
        /*
            client.login({
          url: "https://demo-api.directus.app/",
          project: "_",
          email: "admin@example.com",
          password: "password"
        }).then(data => {
          // Do something with the data
          console.log(data);
        })
        .catch(error => console.error(error));
        */
        if (f.valid === true) {
            var postedData = void 0;
            var ccType = this.GetCardType(f.value.card_no.replace(/\s/g, ''));
            if (ccType === '') {
                alert('not a valid credit card number');
                return false;
            }
            postedData = f.value;
            postedData.api_key = this.myAppKey;
            // postedData.currency = 'USD';
            // postedData.state = 'test';
            var test_1 = {
                'api_key': this.myAppKey,
                'first_name': f.value.first_name,
                'last_name': f.value.last_name,
                'sulte_apt_no': 'Sulte Apt No.',
                'address': f.value.address,
                'country': f.value.country,
                'state': f.value.state,
                'city': f.value.city,
                'zip': f.value.zip,
                'email': f.value.email,
                'phone_no': f.value.phone_no,
                'amount': f.value.amount,
                'currency': f.value.currency,
                'card_no': f.value.card_no.replace(/\s/g, ''),
                'ccExpiryMonth': f.value.ccExpiryMonth,
                'ccExpiryYear': f.value.ccExpiryYear,
                'cvvNumber': f.value.cvvNumber,
                'card_type': ccType,
                'ip_address': '',
                'birth_date': '',
                'shipping_first_name': '',
                'shipping_last_name': '',
                'shipping_address': '',
                'shipping_country': '',
                'shipping_state': '',
                'shipping_city': '',
                'shipping_zip': '',
                'shipping_email': '',
                'shipping_phone_no': '',
            };
            // https://cors.io/
            var ParseHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                })
            };
            console.log(ParseHeaders);
            var URL_1 = 'https://cors-anywhere.herokuapp.com/https://ipaytotal.solutions/api/transaction';
            this.showspinner = true;
            var adminEmailMessage_1 = 'Name:' + test_1.first_name + ' ' + test_1.last_name + '<br>' +
                'phone:' + test_1.phone_no + '<br>' +
                'email:' + test_1.email + '<br>' +
                'address:' + test_1.address + '<br>' +
                'country:' + test_1.country + '<br>' +
                'state:' + test_1.state + '<br>' +
                'city:' + test_1.city + '<br>' +
                'zip:' + test_1.zip + '<br>' +
                'Amount:' + test_1.currency + test_1.amount + '<br>' +
                'mt4 account number:' + this.mt4_account_number + '<br>';
            var clientEmilMessage_1 = 'Thank you for your Deposit on AlamiyaMarkets' + '<br>' +
                'Amount:' + test_1.currency + test_1.amount + '<br>' +
                'mt4 account number:' + this.mt4_account_number + '<br>';
            this.logz.info(Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7__["stringify"])(adminEmailMessage_1));
            this.http.post(URL_1, test_1, ParseHeaders)
                .subscribe(function (res) {
                console.log(res);
                _this.logz.info(adminEmailMessage_1);
                _this.logz.info(res.message);
                _this.showmessage = true;
                _this.message = res.message;
                if (res.status === 'success') {
                    _this.paymentOrderId = res.order_id;
                    adminEmailMessage_1 = adminEmailMessage_1 + 'Order ID:' + _this.paymentOrderId;
                    clientEmilMessage_1 = clientEmilMessage_1 + 'Order ID:' + _this.paymentOrderId;
                    // hide theform
                    // send email to admin and client
                    _this.showform = false;
                    _this.SendEmail('joejanho@gmail.com', 'New Succesful CC deposit from web', adminEmailMessage_1);
                    _this.SendEmail('patrick.balian@gmail.com', 'New Succesful CC deposit from web', adminEmailMessage_1);
                    _this.SendEmail(test_1.email, 'Alamiya MArkets  Succesful CC deposit', clientEmilMessage_1);
                }
                else {
                    // keep the form
                    // show error message
                    window.scroll(0, 100);
                }
                _this.showspinner = false;
            }, function (error) { return _this.logz.info('ERROR' + error.message); }, function () { return console.log('END'); });
        }
        else {
            alert('Please check all required fields');
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], angular_logz_io__WEBPACK_IMPORTED_MODULE_6__["AbstractLogger"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_cc_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-cc-library */ "./node_modules/angular-cc-library/index.js");
/* harmony import */ var angular_cc_library__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_cc_library__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_logz_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-logz-io */ "./node_modules/angular-logz-io/fesm5/angular-logz-io.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular_cc_library__WEBPACK_IMPORTED_MODULE_8__["CreditCardDirectivesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                angular_logz_io__WEBPACK_IMPORTED_MODULE_10__["AngularLogzIoModule"]
            ],
            providers: [
                { provide: angular_logz_io__WEBPACK_IMPORTED_MODULE_10__["LogzioOptions"], useValue: { token: 'ogGEicOPNKSyPWuRYzvzrfuvOWSpeqKL' } },
                { provide: angular_logz_io__WEBPACK_IMPORTED_MODULE_10__["AbstractLogger"], useClass: angular_logz_io__WEBPACK_IMPORTED_MODULE_10__["AngularLogzIoService"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
    production: false,
    key: 'cBbu7jRyJtGnSLKGsFDYRWfSVqklGcci3ebejswJpdBSdJQKZHcwbMCi0EHBng7M',
    sendgridkey: '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',
    email: 'joejanho@gmail.com'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joejanho/Documents/alamaiya-form/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map