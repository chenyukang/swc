var _init_a, _init_b, _computedKey, _init_computedKey, _initProto;
const dec = () => { };
_computedKey = 'c';
var _A = /*#__PURE__*/new WeakMap();
var _B = /*#__PURE__*/new WeakMap();
var _C = /*#__PURE__*/new WeakMap();
class Foo {
  constructor() {
    classPrivateFieldInitSpec(this, _A, {
      writable: true,
      value: (_initProto(this), _init_a(this))
    });
    classPrivateFieldInitSpec(this, _B, {
      writable: true,
      value: _init_b(this, 123)
    });
    classPrivateFieldInitSpec(this, _C, {
      writable: true,
      value: _init_computedKey(this, 456)
    });
  }
  get a() {
    return classPrivateFieldGet(this, _A);
  }
  set a(v) {
    classPrivateFieldSet(this, _A, v);
  }
  get b() {
    return classPrivateFieldGet(this, _B);
  }
  set b(v) {
    classPrivateFieldSet(this, _B, v);
  }
  get [_computedKey]() {
    return classPrivateFieldGet(this, _C);
  }
  set [_computedKey](v) {
    classPrivateFieldSet(this, _C, v);
  }
}
[_init_a, _init_b, _init_computedKey, _initProto] = _applyDecs2203R(Foo, [[dec, 1, "a"], [dec, 1, "b"], [dec, 1, _computedKey]], []).e;
