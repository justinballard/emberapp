'use strict';

define("quickstart/tests/integration/components/people-list-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | people-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xjcHuFm8",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"people-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "hW0aTInt",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"people-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("quickstart/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/people-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/people-list.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/scientists.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/scientists.js should pass ESLint\n\n');
  });
});
define("quickstart/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('quickstart/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'quickstart/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('quickstart/templates/components/people-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'quickstart/templates/components/people-list.hbs should pass TemplateLint.\n\nquickstart/templates/components/people-list.hbs\n  5:8  error  Incorrect indentation for `<li>` beginning at L5:C8. Expected `<li>` to be at an indentation of 4 but was found at 8.  block-indentation\n  5:12  error  Interaction added to non-interactive element  no-invalid-interactive\n');
  });
  QUnit.test('quickstart/templates/scientists.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'quickstart/templates/scientists.hbs should pass TemplateLint.\n\n');
  });
});
define("quickstart/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/people-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/people-list-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/scientists-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/scientists-test.js should pass ESLint\n\n');
  });
});
define("quickstart/tests/test-helper", ["quickstart/app", "quickstart/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("quickstart/tests/unit/routes/scientists-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | scientists', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:scientists');
      assert.ok(route);
    });
  });
});
define('quickstart/config/environment', [], function() {
  var prefix = 'quickstart';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('quickstart/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
