"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[544],{5544:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CyberProperty)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1249);\n/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3290);\n/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1058);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4129);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2165);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\n\nvar _types = /*#__PURE__*/new WeakMap();\n\nvar _propertyPoints = /*#__PURE__*/new WeakMap();\n\nvar _propertyAllocate = /*#__PURE__*/new WeakMap();\n\nvar _propertyAllocateLimit = /*#__PURE__*/new WeakMap();\n\nvar CyberProperty = /*#__PURE__*/function (_ui$view$CyberTheme$C) {\n  _inherits(CyberProperty, _ui$view$CyberTheme$C);\n\n  var _super = _createSuper(CyberProperty);\n\n  function CyberProperty() {\n    var _this;\n\n    _classCallCheck(this, CyberProperty);\n\n    _this = _super.call(this);\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _types, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propertyPoints, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propertyAllocate, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propertyAllocateLimit, {\n      writable: true,\n      value: void 0\n    });\n\n    var types = _classPrivateFieldSet(_assertThisInitialized(_this), _types, core.PropertyTypes);\n\n    _this.btnCharmIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.CHR, 1]);\n\n    _this.btnCharmReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.CHR, -1]);\n\n    _this.btnIntelligenceIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.INT, 1]);\n\n    _this.btnIntelligenceReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.INT, -1]);\n\n    _this.btnStrengthIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.STR, 1]);\n\n    _this.btnStrengthReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.STR, -1]);\n\n    _this.btnMoneyIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.MNY, 1]);\n\n    _this.btnMoneyReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.MNY, -1]);\n\n    _this.inputCharm.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.CHR]);\n\n    _this.inputIntelligence.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.INT]);\n\n    _this.inputStrength.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.STR]);\n\n    _this.inputMoney.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.MNY]);\n\n    var selectAll = function selectAll(_ref) {\n      var item = _ref.currentTarget;\n      item.text = \'\';\n    };\n\n    _this.inputCharm.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n\n    _this.inputIntelligence.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n\n    _this.inputStrength.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n\n    _this.inputMoney.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n\n    _this.btnRandomAllocate.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.random);\n\n    _this.btnNext.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.next);\n\n    _this.listSelectedTalents.renderHandler = Laya.Handler.create(_assertThisInitialized(_this), _this.renderTalent, null, false);\n    return _this;\n  }\n\n  _createClass(CyberProperty, [{\n    key: "init",\n    value: function init(_ref2) {\n      var _classPrivateFieldSet2;\n\n      var talents = _ref2.talents;\n      this.listSelectedTalents.array = talents;\n      var talentIds = talents.map(function (talent) {\n        return talent.id;\n      }); // core.talentReplace(talentIds);\n\n      _classPrivateFieldSet(this, _propertyPoints, core.getPropertyPoints(talentIds));\n\n      _classPrivateFieldSet(this, _propertyAllocateLimit, core.propertyAllocateLimit);\n\n      this.labLeftPropertyPoint.text = _classPrivateFieldGet(this, _propertyPoints);\n\n      _classPrivateFieldSet(this, _propertyAllocate, (_classPrivateFieldSet2 = {}, _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).CHR, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).INT, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).STR, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).MNY, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).TLT, talentIds), _classPrivateFieldSet2));\n\n      this.updateAllocate();\n    }\n  }, {\n    key: "next",\n    value: function next() {\n      if (this.total < _classPrivateFieldGet(this, _propertyPoints)) {\n        return;\n      }\n\n      $ui.switchView(UI.pages.TRAJECTORY, {\n        propertyAllocate: _classPrivateFieldGet(this, _propertyAllocate),\n        talents: this.listSelectedTalents.array\n      });\n    }\n  }, {\n    key: "total",\n    get: function get() {\n      return _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).CHR] + _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).INT] + _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).STR] + _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).MNY];\n    }\n  }, {\n    key: "updateAllocate",\n    value: function updateAllocate() {\n      var charm = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).CHR];\n\n      var intelligence = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).INT];\n\n      var strength = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).STR];\n\n      var money = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).MNY];\n\n      this.inputCharm.text = \'\' + charm;\n      this.inputIntelligence.text = \'\' + intelligence;\n      this.inputStrength.text = \'\' + strength;\n      this.inputMoney.text = \'\' + money;\n      this.labLeftPropertyPoint.text = _classPrivateFieldGet(this, _propertyPoints) - this.total;\n      this.btnCharmIncrease.disabled = this.btnCharmIncrease.gray = false;\n      this.btnCharmReduce.disabled = this.btnCharmReduce.gray = false;\n      this.btnIntelligenceIncrease.disabled = this.btnIntelligenceIncrease.gray = false;\n      this.btnIntelligenceReduce.disabled = this.btnIntelligenceReduce.gray = false;\n      this.btnStrengthIncrease.disabled = this.btnStrengthIncrease.gray = false;\n      this.btnStrengthReduce.disabled = this.btnStrengthReduce.gray = false;\n      this.btnMoneyIncrease.disabled = this.btnMoneyIncrease.gray = false;\n      this.btnMoneyReduce.disabled = this.btnMoneyReduce.gray = false;\n\n      if (this.total >= _classPrivateFieldGet(this, _propertyPoints)) {\n        this.btnCharmIncrease.disabled = this.btnCharmIncrease.gray = true;\n        this.btnIntelligenceIncrease.disabled = this.btnIntelligenceIncrease.gray = true;\n        this.btnStrengthIncrease.disabled = this.btnStrengthIncrease.gray = true;\n        this.btnMoneyIncrease.disabled = this.btnMoneyIncrease.gray = true;\n      } else if (this.total <= 0) {\n        this.btnCharmReduce.disabled = this.btnCharmReduce.gray = true;\n        this.btnIntelligenceReduce.disabled = this.btnIntelligenceReduce.gray = true;\n        this.btnStrengthReduce.disabled = this.btnStrengthReduce.gray = true;\n        this.btnMoneyReduce.disabled = this.btnMoneyReduce.gray = true;\n      }\n\n      if (charm <= _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        this.btnCharmReduce.disabled = this.btnCharmReduce.gray = true;\n      } else if (charm >= _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        this.btnCharmIncrease.disabled = this.btnCharmIncrease.gray = true;\n      }\n\n      if (intelligence <= _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        this.btnIntelligenceReduce.disabled = this.btnIntelligenceReduce.gray = true;\n      } else if (intelligence >= _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        this.btnIntelligenceIncrease.disabled = this.btnIntelligenceIncrease.gray = true;\n      }\n\n      if (strength <= _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        this.btnStrengthReduce.disabled = this.btnStrengthReduce.gray = true;\n      } else if (strength >= _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        this.btnStrengthIncrease.disabled = this.btnStrengthIncrease.gray = true;\n      }\n\n      if (money <= _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        this.btnMoneyReduce.disabled = this.btnMoneyReduce.gray = true;\n      } else if (money >= _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        this.btnMoneyIncrease.disabled = this.btnMoneyIncrease.gray = true;\n      }\n    }\n  }, {\n    key: "check",\n    value: function check(left, right, value) {\n      if (value < left) return false;\n      if (value > right) return false;\n      return true;\n    }\n  }, {\n    key: "random",\n    value: function random() {\n      var t = _classPrivateFieldGet(this, _propertyPoints);\n\n      var arr = new Array(4).fill(_classPrivateFieldGet(this, _propertyAllocateLimit)[1]);\n\n      while (t > 0) {\n        var sub = Math.round(Math.random() * (Math.min(t, _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) - 1)) + 1;\n\n        while (true) {\n          var select = Math.floor(Math.random() * 4) % 4;\n          if (arr[select] - sub < 0) continue;\n          arr[select] -= sub;\n          t -= sub;\n          break;\n        }\n      }\n\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).CHR] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[0];\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).INT] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[1];\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).STR] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[2];\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).MNY] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[3];\n      this.updateAllocate();\n    }\n  }, {\n    key: "onPropertyAllocate",\n    value: function onPropertyAllocate(type, value) {\n      if (!this.check(_classPrivateFieldGet(this, _propertyAllocateLimit)[0], _classPrivateFieldGet(this, _propertyAllocateLimit)[1], _classPrivateFieldGet(this, _propertyAllocate)[type] + value)) {\n        return;\n      }\n\n      if (!this.check(0, _classPrivateFieldGet(this, _propertyPoints), this.total + value)) {\n        return;\n      }\n\n      _classPrivateFieldGet(this, _propertyAllocate)[type] += value;\n      this.updateAllocate();\n    }\n  }, {\n    key: "onPropertyAllocateInput",\n    value: function onPropertyAllocateInput(type, inputItem) {\n      var value = parseInt(inputItem.text) || 0;\n      var total = this.total;\n\n      if (total + value < 0) {\n        value = _classPrivateFieldGet(this, _propertyAllocateLimit)[0] * 4 - total;\n      } else if (total + value > _classPrivateFieldGet(this, _propertyPoints)) {\n        value = _classPrivateFieldGet(this, _propertyPoints) - total;\n      }\n\n      if (value < _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        value = _classPrivateFieldGet(this, _propertyAllocateLimit)[0];\n      } else if (value > _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        value = _classPrivateFieldGet(this, _propertyAllocateLimit)[1];\n      }\n\n      var alter = value - _classPrivateFieldGet(this, _propertyAllocate)[type];\n\n      if (alter) {\n        this.onPropertyAllocate(type, alter);\n      } else {\n        this.updateAllocate();\n      }\n    }\n  }, {\n    key: "renderTalent",\n    value: function renderTalent(box) {\n      var dataSource = box.dataSource;\n      var labTitle = box.getChildByName("labTitle");\n      var grade1 = box.getChildByName("grade1");\n      var grade2 = box.getChildByName("grade2");\n      var grade3 = box.getChildByName("grade3");\n      var labDescription = box.getChildByName("labDescription");\n      labTitle.text = dataSource.name;\n      labDescription.text = dataSource.description;\n\n      switch (dataSource.grade) {\n        case 1:\n          grade1.visible = true;\n          grade2.visible = false;\n          grade3.visible = false;\n          break;\n\n        case 2:\n          grade1.visible = false;\n          grade2.visible = true;\n          grade3.visible = false;\n          break;\n\n        case 3:\n          grade1.visible = false;\n          grade2.visible = false;\n          grade3.visible = true;\n          break;\n\n        default:\n          grade1.visible = false;\n          grade2.visible = false;\n          grade3.visible = false;\n          break;\n      }\n    }\n  }]);\n\n  return CyberProperty;\n}(ui.view.CyberTheme.CyberPropertyUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTU0NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFDQTtBQUFBOztBQUFBOztBQUNBOztBQURBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBOztBQUdBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBO0FBaENBO0FBaUNBOzs7O0FBT0E7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQU9BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFDQTtBQUZBO0FBS0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTs7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7QUFDQTs7QUFDQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXNCQTs7OztBQWpQQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmVfcmVzdGFydC8uL3NyYy91aS90aGVtZXMvY3liZXIvcHJvcGVydHkuanM/OTRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDeWJlclByb3BlcnR5IGV4dGVuZHMgdWkudmlldy5DeWJlclRoZW1lLkN5YmVyUHJvcGVydHlVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlcyA9XHJcbiAgICAgICAgdGhpcy4jdHlwZXMgPSBjb3JlLlByb3BlcnR5VHlwZXM7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuQ2hhcm1JbmNyZWFzZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLkNIUiwgMV0pO1xyXG4gICAgICAgIHRoaXMuYnRuQ2hhcm1SZWR1Y2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGUsIFt0eXBlcy5DSFIsIC0xXSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuSW50ZWxsaWdlbmNlSW5jcmVhc2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGUsIFt0eXBlcy5JTlQsIDFdKTtcclxuICAgICAgICB0aGlzLmJ0bkludGVsbGlnZW5jZVJlZHVjZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLklOVCwgLTFdKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5TdHJlbmd0aEluY3JlYXNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlLCBbdHlwZXMuU1RSLCAxXSk7XHJcbiAgICAgICAgdGhpcy5idG5TdHJlbmd0aFJlZHVjZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLlNUUiwgLTFdKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5Nb25leUluY3JlYXNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlLCBbdHlwZXMuTU5ZLCAxXSk7XHJcbiAgICAgICAgdGhpcy5idG5Nb25leVJlZHVjZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLk1OWSwgLTFdKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dENoYXJtLm9uKExheWEuRXZlbnQuSU5QVVQsIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlSW5wdXQsIFt0eXBlcy5DSFJdKTtcclxuICAgICAgICB0aGlzLmlucHV0SW50ZWxsaWdlbmNlLm9uKExheWEuRXZlbnQuSU5QVVQsIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlSW5wdXQsIFt0eXBlcy5JTlRdKTtcclxuICAgICAgICB0aGlzLmlucHV0U3RyZW5ndGgub24oTGF5YS5FdmVudC5JTlBVVCwgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGVJbnB1dCwgW3R5cGVzLlNUUl0pO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNb25leS5vbihMYXlhLkV2ZW50LklOUFVULCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZUlucHV0LCBbdHlwZXMuTU5ZXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbCA9ICh7Y3VycmVudFRhcmdldDogaXRlbX0pID0+IHsgaXRlbS50ZXh0PScnOyB9O1xyXG4gICAgICAgIHRoaXMuaW5wdXRDaGFybS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHNlbGVjdEFsbCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dEludGVsbGlnZW5jZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHNlbGVjdEFsbCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVuZ3RoLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgc2VsZWN0QWxsKTtcclxuICAgICAgICB0aGlzLmlucHV0TW9uZXkub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCBzZWxlY3RBbGwpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0blJhbmRvbUFsbG9jYXRlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMucmFuZG9tKTtcclxuICAgICAgICB0aGlzLmJ0bk5leHQub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5uZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0U2VsZWN0ZWRUYWxlbnRzLnJlbmRlckhhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMucmVuZGVyVGFsZW50LCBudWxsLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgI3R5cGVzO1xyXG4gICAgI3Byb3BlcnR5UG9pbnRzO1xyXG4gICAgI3Byb3BlcnR5QWxsb2NhdGU7XHJcbiAgICAjcHJvcGVydHlBbGxvY2F0ZUxpbWl0O1xyXG5cclxuICAgIGluaXQoe3RhbGVudHN9KSB7XHJcbiAgICAgICAgdGhpcy5saXN0U2VsZWN0ZWRUYWxlbnRzLmFycmF5ID0gdGFsZW50cztcclxuICAgICAgICBjb25zdCB0YWxlbnRJZHMgPSB0YWxlbnRzLm1hcCh0YWxlbnQgPT4gdGFsZW50LmlkKTtcclxuICAgICAgICAvLyBjb3JlLnRhbGVudFJlcGxhY2UodGFsZW50SWRzKTtcclxuICAgICAgICB0aGlzLiNwcm9wZXJ0eVBvaW50cyA9IGNvcmUuZ2V0UHJvcGVydHlQb2ludHModGFsZW50SWRzKTtcclxuICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXQgPSBjb3JlLnByb3BlcnR5QWxsb2NhdGVMaW1pdDtcclxuICAgICAgICB0aGlzLmxhYkxlZnRQcm9wZXJ0eVBvaW50LnRleHQgPSB0aGlzLiNwcm9wZXJ0eVBvaW50cztcclxuICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlID0ge1xyXG4gICAgICAgICAgICBbdGhpcy4jdHlwZXMuQ0hSXTogMCxcclxuICAgICAgICAgICAgW3RoaXMuI3R5cGVzLklOVF06IDAsXHJcbiAgICAgICAgICAgIFt0aGlzLiN0eXBlcy5TVFJdOiAwLFxyXG4gICAgICAgICAgICBbdGhpcy4jdHlwZXMuTU5ZXTogMCxcclxuICAgICAgICAgICAgW3RoaXMuI3R5cGVzLlRMVF06IHRhbGVudElkcyxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGxvY2F0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWwgPCB0aGlzLiNwcm9wZXJ0eVBvaW50cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICR1aS5zd2l0Y2hWaWV3KFxyXG4gICAgICAgICAgICBVSS5wYWdlcy5UUkFKRUNUT1JZLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUFsbG9jYXRlOiB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlLFxyXG4gICAgICAgICAgICAgICAgdGFsZW50czogdGhpcy5saXN0U2VsZWN0ZWRUYWxlbnRzLmFycmF5LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG90YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuQ0hSXVxyXG4gICAgICAgICAgICArICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLklOVF1cclxuICAgICAgICAgICAgKyAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5TVFJdXHJcbiAgICAgICAgICAgICsgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuTU5ZXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBbGxvY2F0ZSgpIHtcclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuQ0hSXTtcclxuICAgICAgICBjb25zdCBpbnRlbGxpZ2VuY2UgPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLklOVF07XHJcbiAgICAgICAgY29uc3Qgc3RyZW5ndGggPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLlNUUl07XHJcbiAgICAgICAgY29uc3QgbW9uZXkgPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLk1OWV07XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXRDaGFybS50ZXh0ID0gJycrY2hhcm07XHJcbiAgICAgICAgdGhpcy5pbnB1dEludGVsbGlnZW5jZS50ZXh0ID0gJycraW50ZWxsaWdlbmNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdHJlbmd0aC50ZXh0ID0gJycrc3RyZW5ndGg7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1vbmV5LnRleHQgPSAnJyttb25leTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJMZWZ0UHJvcGVydHlQb2ludC50ZXh0ID0gdGhpcy4jcHJvcGVydHlQb2ludHMgLSB0aGlzLnRvdGFsO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkNoYXJtSW5jcmVhc2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkNoYXJtSW5jcmVhc2UuZ3JheSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuQ2hhcm1SZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkNoYXJtUmVkdWNlLmdyYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ0bkludGVsbGlnZW5jZUluY3JlYXNlLmRpc2FibGVkID0gdGhpcy5idG5JbnRlbGxpZ2VuY2VJbmNyZWFzZS5ncmF5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5JbnRlbGxpZ2VuY2VSZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkludGVsbGlnZW5jZVJlZHVjZS5ncmF5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5TdHJlbmd0aEluY3JlYXNlLmRpc2FibGVkID0gdGhpcy5idG5TdHJlbmd0aEluY3JlYXNlLmdyYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ0blN0cmVuZ3RoUmVkdWNlLmRpc2FibGVkID0gdGhpcy5idG5TdHJlbmd0aFJlZHVjZS5ncmF5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5Nb25leUluY3JlYXNlLmRpc2FibGVkID0gdGhpcy5idG5Nb25leUluY3JlYXNlLmdyYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ0bk1vbmV5UmVkdWNlLmRpc2FibGVkID0gdGhpcy5idG5Nb25leVJlZHVjZS5ncmF5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsID49IHRoaXMuI3Byb3BlcnR5UG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hhcm1JbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuQ2hhcm1JbmNyZWFzZS5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5JbnRlbGxpZ2VuY2VJbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuSW50ZWxsaWdlbmNlSW5jcmVhc2UuZ3JheSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU3RyZW5ndGhJbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuU3RyZW5ndGhJbmNyZWFzZS5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5Nb25leUluY3JlYXNlLmRpc2FibGVkID0gdGhpcy5idG5Nb25leUluY3JlYXNlLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hhcm1SZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkNoYXJtUmVkdWNlLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkludGVsbGlnZW5jZVJlZHVjZS5kaXNhYmxlZCA9IHRoaXMuYnRuSW50ZWxsaWdlbmNlUmVkdWNlLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blN0cmVuZ3RoUmVkdWNlLmRpc2FibGVkID0gdGhpcy5idG5TdHJlbmd0aFJlZHVjZS5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5Nb25leVJlZHVjZS5kaXNhYmxlZCA9IHRoaXMuYnRuTW9uZXlSZWR1Y2UuZ3JheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhcm0gPD0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hhcm1SZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkNoYXJtUmVkdWNlLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcm0gPj0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hhcm1JbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuQ2hhcm1JbmNyZWFzZS5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbnRlbGxpZ2VuY2UgPD0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuSW50ZWxsaWdlbmNlUmVkdWNlLmRpc2FibGVkID0gdGhpcy5idG5JbnRlbGxpZ2VuY2VSZWR1Y2UuZ3JheSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlbGxpZ2VuY2UgPj0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuSW50ZWxsaWdlbmNlSW5jcmVhc2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkludGVsbGlnZW5jZUluY3JlYXNlLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0cmVuZ3RoIDw9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFswXSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blN0cmVuZ3RoUmVkdWNlLmRpc2FibGVkID0gdGhpcy5idG5TdHJlbmd0aFJlZHVjZS5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0cmVuZ3RoID49IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFsxXSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blN0cmVuZ3RoSW5jcmVhc2UuZGlzYWJsZWQgPSB0aGlzLmJ0blN0cmVuZ3RoSW5jcmVhc2UuZ3JheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9uZXkgPD0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTW9uZXlSZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0bk1vbmV5UmVkdWNlLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9uZXkgPj0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTW9uZXlJbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuTW9uZXlJbmNyZWFzZS5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2sobGVmdCwgcmlnaHQsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgbGVmdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IHJpZ2h0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tKCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcy4jcHJvcGVydHlQb2ludHM7XHJcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IEFycmF5KDQpLmZpbGwodGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHQgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChNYXRoLm1pbih0LCB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0pIC0gMSkpICsgMTtcclxuICAgICAgICAgICAgd2hpbGUodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgJSA0O1xyXG4gICAgICAgICAgICAgICAgaWYoYXJyW3NlbGVjdF0gLSBzdWIgPDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgYXJyW3NlbGVjdF0gLT0gc3ViO1xyXG4gICAgICAgICAgICAgICAgdCAtPSBzdWI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLkNIUl0gPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0gLSBhcnJbMF07XHJcbiAgICAgICAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5JTlRdID0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdIC0gYXJyWzFdO1xyXG4gICAgICAgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuU1RSXSA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFsxXSAtIGFyclsyXTtcclxuICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLk1OWV0gPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0gLSBhcnJbM107XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQWxsb2NhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblByb3BlcnR5QWxsb2NhdGUodHlwZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soXHJcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMF0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3R5cGVdICsgdmFsdWVcclxuICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB0aGlzLiNwcm9wZXJ0eVBvaW50cyxcclxuICAgICAgICAgICAgdGhpcy50b3RhbCArIHZhbHVlXHJcbiAgICAgICAgKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdHlwZV0gKz0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGxvY2F0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJvcGVydHlBbGxvY2F0ZUlucHV0KHR5cGUsIGlucHV0SXRlbSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGlucHV0SXRlbS50ZXh0KSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy50b3RhbDtcclxuICAgICAgICBpZiAodG90YWwgKyB2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMF0gKiA0IC0gdG90YWw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbCArIHZhbHVlID4gdGhpcy4jcHJvcGVydHlQb2ludHMpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiNwcm9wZXJ0eVBvaW50cyAtIHRvdGFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0pIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYWx0ZXIgPSB2YWx1ZSAtIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdHlwZV07XHJcbiAgICAgICAgaWYgKGFsdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlKHR5cGUsIGFsdGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsbG9jYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhbGVudChib3gpIHtcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gYm94LmRhdGFTb3VyY2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhYlRpdGxlID0gYm94LmdldENoaWxkQnlOYW1lKFwibGFiVGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgZ3JhZGUxID0gYm94LmdldENoaWxkQnlOYW1lKFwiZ3JhZGUxXCIpO1xyXG4gICAgICAgIGNvbnN0IGdyYWRlMiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImdyYWRlMlwiKTtcclxuICAgICAgICBjb25zdCBncmFkZTMgPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJncmFkZTNcIik7XHJcbiAgICAgICAgY29uc3QgbGFiRGVzY3JpcHRpb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJsYWJEZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICAgICAgbGFiVGl0bGUudGV4dCA9IGRhdGFTb3VyY2UubmFtZTtcclxuICAgICAgICBsYWJEZXNjcmlwdGlvbi50ZXh0ID0gZGF0YVNvdXJjZS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBzd2l0Y2ggKGRhdGFTb3VyY2UuZ3JhZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZ3JhZGUxLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZ3JhZGUyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGdyYWRlMy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgZ3JhZGUxLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGdyYWRlMi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdyYWRlMy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgZ3JhZGUxLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGdyYWRlMi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBncmFkZTMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGdyYWRlMS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBncmFkZTIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZ3JhZGUzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5544\n')}}]);