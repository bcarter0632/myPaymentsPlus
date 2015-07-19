/**
 * angular-strap
 * @version v2.2.4 - 2015-05-30
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
  'use strict';
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/home.html', '<div class="container bs-docs-container"><div class="row"><div class="col-md-2 hidden-sm hidden-xs"><div ng-include="\'views/partials/affixed-sidebar.html\'"></div></div><div class="col-md-10"><div ng-include="\'views/sections/getting-started.html\'"></div><div id="directives"><div ng-include="\'modal/docs/modal.demo.html\'"></div><div ng-include="\'aside/docs/aside.demo.html\'"></div><div ng-include="\'alert/docs/alert.demo.html\'"></div><div ng-include="\'tooltip/docs/tooltip.demo.html\'"></div><div ng-include="\'popover/docs/popover.demo.html\'"></div><div ng-include="\'typeahead/docs/typeahead.demo.html\'"></div><div ng-include="\'datepicker/docs/datepicker.demo.html\'"></div><div ng-include="\'timepicker/docs/timepicker.demo.html\'"></div><div ng-include="\'button/docs/button.demo.html\'"></div><div ng-include="\'select/docs/select.demo.html\'"></div><div ng-include="\'tab/docs/tab.demo.html\'"></div><div ng-include="\'collapse/docs/collapse.demo.html\'"></div><div ng-include="\'dropdown/docs/dropdown.demo.html\'"></div><div ng-include="\'navbar/docs/navbar.demo.html\'"></div><div ng-include="\'scrollspy/docs/scrollspy.demo.html\'"></div><div ng-include="\'affix/docs/affix.demo.html\'"></div></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/affixed-sidebar.html', '<div class="bs-sidebar hidden-print" role="complementary" data-offset-top="-100" bs-affix bs-scrollspy-list><ul class="nav bs-sidenav"><li><a href="#getting-started">Getting started</a></li><hr style="margin: 2px 0"><li><a href="#modals">Modal</a><ul class="nav"><li><a href="#modals-examples">Examples</a></li><li><a href="#modals-usage">Usage</a></li></ul></li><li><a href="#asides">Aside</a><ul class="nav"><li><a href="#asides-examples">Examples</a></li><li><a href="#asides-usage">Usage</a></li></ul></li><li><a href="#alerts">Alert</a><ul class="nav"><li><a href="#alerts-examples">Examples</a></li><li><a href="#alerts-usage">Usage</a></li></ul></li><li><a href="#tooltips">Tooltip</a><ul class="nav"><li><a href="#tooltips-examples">Examples</a></li><li><a href="#tooltips-usage">Usage</a></li></ul></li><li><a href="#popovers">Popover</a><ul class="nav"><li><a href="#popovers-examples">Examples</a></li><li><a href="#popovers-usage">Usage</a></li></ul></li><li><a href="#typeaheads">Typeahead</a><ul class="nav"><li><a href="#typeaheads-examples">Examples</a></li><li><a href="#typeaheads-usage">Usage</a></li></ul></li><li><a href="#datepickers">Datepicker</a><ul class="nav"><li><a href="#datepickers-examples">Examples</a></li><li><a href="#datepickers-usage">Usage</a></li></ul></li><li><a href="#timepickers">Timepicker</a><ul class="nav"><li><a href="#timepickers-examples">Examples</a></li><li><a href="#timepickers-usage">Usage</a></li></ul></li><li><a href="#buttons">Button</a><ul class="nav"><li><a href="#buttons-examples">Examples</a></li><li><a href="#buttons-usage">Usage</a></li></ul></li><li><a href="#selects">Select</a><ul class="nav"><li><a href="#selects-examples">Examples</a></li><li><a href="#selects-usage">Usage</a></li></ul></li><li><a href="#tabs">Tab</a><ul class="nav"><li><a href="#tabs-examples">Examples</a></li><li><a href="#tabs-usage">Usage</a></li></ul></li><li><a href="#collapses">Collapse</a><ul class="nav"><li><a href="#collapses-examples">Examples</a></li><li><a href="#collapses-usage">Usage</a></li></ul></li><li><a href="#dropdowns">Dropdown</a><ul class="nav"><li><a href="#dropdowns-examples">Examples</a></li><li><a href="#dropdowns-usage">Usage</a></li></ul></li><li><a href="#navbars">Navbar</a><ul class="nav"><li><a href="#navbars-examples">Examples</a></li><li><a href="#navbars-usage">Usage</a></li></ul></li><li><a href="#scrollspy">Scrollspy</a><ul class="nav"><li><a href="#scrollspy-examples">Examples</a></li><li><a href="#scrollspy-usage">Usage</a></li></ul></li><li><a href="#affix">Affix</a><ul class="nav"><li><a href="#affix-examples">Examples</a></li><li><a href="#affix-usage">Usage</a></li></ul></li></ul></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/aside.tpl.html', '<div class="aside bs-docs-aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind-html="title"></h4></div><div class="aside-body bs-sidebar" style="float:right" ng-click="$hide();"><div ng-include="\'views/partials/sidebar.html\'"></div></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/footer.html', '<footer class="bs-footer"><div class="container"><p class="pull-right"><a href="#">Back to top</a></p><p>Designed and built by <a href="//plus.google.com/+OlivierLouvignes/posts?rel=author" target="_blank">Olivier Louvignes</a>. <a href="https://twitter.com/olouv" class="twitter-follow-button" data-show-count="true" data-lang="en">Follow @olouv</a></p><hr><p>Using <a href="http://twitter.github.com/bootstrap" target="_blank">Twitter Bootstrap</a> and the <a href="css/docs.css" target="_blank">Bootstrap\'s docs styles</a> designed and built by <a href="http://twitter.com/mdo" target="_blank">@mdo</a> and <a href="http://twitter.com/fat" target="_blank">@fat</a>.</p><p>Code licensed under <a href="//github.com/mgcrea/angular-strap/blob/master/LICENSE.md" target="_blank">The MIT License</a>, documentation under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.</p><ul class="footer-links"><li><a href="https://github.com/mgcrea/angular-strap/issues?state=open">Issues</a></li><li class="muted">·</li><li><a href="https://github.com/mgcrea/angular-strap/wiki">Roadmap and changelog</a></li><li class="muted">·</li><li><a href="https://github.com/mgcrea/angular-strap/releases">Releases</a></li></ul></div></footer>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/header.html', '<div class="bs-header" id="content"><div class="container"><div class="col-md-9"><h1>AngularStrap</h1><p>AngularJS 1.2+ native directives for Bootstrap 3.</p></div><div class="bs-docs-social col-md-3"><ul><li class="github-btn"><iframe src="http://ghbtns.com/github-btn.html?user=mgcrea&repo=angular-strap&type=star&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe></li><li class="github-btn"><iframe src="http://ghbtns.com/github-btn.html?user=mgcrea&repo=angular-strap&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe></li><li class="github-btn"><iframe src="http://ghbtns.com/github-btn.html?user=mgcrea&type=follow&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="160" height="20"></iframe></li><li class="twitter-btn"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://mgcrea.github.io/angular-strap" data-text="AngularStrap - AngularJS 1.2+ directives for Twitter Bootstrap 3." data-related="olouv"></a></li><li><div class="g-plusone" data-size="medium" data-href="http://mgcrea.github.io/angular-strap"></div></li></ul></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/navbar.html', '<header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner"><div class="container"><div class="navbar-header"><button class="navbar-toggle" type="button" data-template="views/partials/aside.tpl.html" data-animation="am-fade-and-slide-left" data-placement="left" title="Menu" data-container="body" bs-aside><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a href="./" class="navbar-brand">AngularStrap</a></div><nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation"><ul class="nav navbar-nav"><li><a href="#directives">Directives</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a class="github-badge" href="//travis-ci.org/mgcrea/angular-strap" target="_blank"><img src="//img.shields.io/travis/mgcrea/angular-strap/master.svg?style=flat"></a></li><li><a class="github-badge" href="//codeclimate.com/github/mgcrea/angular-strap" target="_blank"><img src="//img.shields.io/codeclimate/coverage/github/mgcrea/angular-strap.svg?style=flat"></a></li><li><a href="//github.com/mgcrea/angular-strap" target="_blank"><i class="fa fa-github"></i>&nbsp;GitHub</a></li><li><a href="//github.com/mgcrea/angular-strap/releases" target="_blank"><i class="fa fa-download"></i>&nbsp;<span ng-bind="version"></span></a></li></ul></nav></div></header>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/sidebar.html', '<ul class="nav bs-sidenav"><li><a href="#getting-started">Getting started</a></li><hr style="margin: 2px 0"><li><a href="#modals">Modal</a><ul class="nav"><li><a href="#modals-examples">Examples</a></li><li><a href="#modals-usage">Usage</a></li></ul></li><li><a href="#asides">Aside</a><ul class="nav"><li><a href="#asides-examples">Examples</a></li><li><a href="#asides-usage">Usage</a></li></ul></li><li><a href="#alerts">Alert</a><ul class="nav"><li><a href="#alerts-examples">Examples</a></li><li><a href="#alerts-usage">Usage</a></li></ul></li><li><a href="#tooltips">Tooltip</a><ul class="nav"><li><a href="#tooltips-examples">Examples</a></li><li><a href="#tooltips-usage">Usage</a></li></ul></li><li><a href="#popovers">Popover</a><ul class="nav"><li><a href="#popovers-examples">Examples</a></li><li><a href="#popovers-usage">Usage</a></li></ul></li><li><a href="#typeaheads">Typeahead</a><ul class="nav"><li><a href="#typeaheads-examples">Examples</a></li><li><a href="#typeaheads-usage">Usage</a></li></ul></li><li><a href="#datepickers">Datepicker</a><ul class="nav"><li><a href="#datepickers-examples">Examples</a></li><li><a href="#datepickers-usage">Usage</a></li></ul></li><li><a href="#timepickers">Timepicker</a><ul class="nav"><li><a href="#timepickers-examples">Examples</a></li><li><a href="#timepickers-usage">Usage</a></li></ul></li><li><a href="#buttons">Button</a><ul class="nav"><li><a href="#buttons-examples">Examples</a></li><li><a href="#buttons-usage">Usage</a></li></ul></li><li><a href="#selects">Select</a><ul class="nav"><li><a href="#selects-examples">Examples</a></li><li><a href="#selects-usage">Usage</a></li></ul></li><li><a href="#tabs">Tab</a><ul class="nav"><li><a href="#tabs-examples">Examples</a></li><li><a href="#tabs-usage">Usage</a></li></ul></li><li><a href="#collapses">Collapse</a><ul class="nav"><li><a href="#collapses-examples">Examples</a></li><li><a href="#collapses-usage">Usage</a></li></ul></li><li><a href="#dropdowns">Dropdown</a><ul class="nav"><li><a href="#dropdowns-examples">Examples</a></li><li><a href="#dropdowns-usage">Usage</a></li></ul></li><li><a href="#navbars">Navbar</a><ul class="nav"><li><a href="#navbars-examples">Examples</a></li><li><a href="#navbars-usage">Usage</a></li></ul></li><li><a href="#scrollspy">Scrollspy</a><ul class="nav"><li><a href="#scrollspy-examples">Examples</a></li><li><a href="#scrollspy-usage">Usage</a></li></ul></li><li><a href="#affix">Affix</a><ul class="nav"><li><a href="#affix-examples">Examples</a></li><li><a href="#affix-usage">Usage</a></li></ul></li></ul>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/sections/getting-started.html', '<div class="bs-docs-section"><div class="page-header"><h1 id="getting-started">Getting started <a class="small" href="//github.com/mgcrea/angular-strap/blob/master/README.md" target="_blank">readme.md</a></h1><code>mgcrea.ngStrap</code></div><div class="callout callout-info"><h4 id="project-history">About the project</h4><p>AngularStrap is a set of native directives that enables seamless integration of Bootstrap#^3.0 into your AngularJS#^1.2 application.</p><p>With no external dependency except the Bootstrap CSS styles, AngularStrap is light and fast. It has been built from the ground up to leverage ngAnimate!</p></div><h2 id="project-quickstart">Quick Start</h2><p>Install and manage AngularStrap with <a href="http://bower.io">Bower</a>. <small>You can also use <a href="https://www.nuget.org/packages/angular-strap">NuGet</a>.</small> A <a href="http://cdnjs.com/libraries/angular-strap">CDN</a> is also provided by cdnjs.com.</p><div class="highlight"><pre>\n' + '      <code class="bash" highlight-block>\n' + '        $ bower install angular-strap --save\n' + '      </code>\n' + '    </pre></div><p>Load the required javascript libraries (Bootstrap scripts files are not needed).</p><div class="highlight"><pre>\n' + '      <code class="html" highlight-block>\n' + '        &lt;script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js"&gt;&lt;/script&gt;\n' + '        &lt;script src="//cdnjs.cloudflare.com/ajax/libs/angular-strap/2.1.2/angular-strap.min.js"&gt;&lt;/script&gt;\n' + '        &lt;script src="//cdnjs.cloudflare.com/ajax/libs/angular-strap/2.1.2/angular-strap.tpl.min.js"&gt;&lt;/script&gt;\n' + '      </code>\n' + '    </pre></div><p>Inject the <code>mgcrea.ngStrap</code>module into your application.</p><div class="highlight"><pre>\n' + '      <code class="javascript" highlight-block>\n' + '        angular.module(\'myApp\', [\'mgcrea.ngStrap\']);\n' + '      </code>\n' + '    </pre></div><div class="callout callout-info"><h4>Why are there two angular-strap files?</h4><p>AngularStrap provides two different files:</p><ul><li>angular-strap.js: library javascript code</li><li>angular-strap.tpl.js: default HTML inline templates used by the directives</li></ul><p>By keeping the HTML template definitions in a separate file, it makes it easier to customize the templates used by the directives by creating a custom copy of the file or by overriding some of the templates.</p></div><div class="callout callout-info"><h4>Custom builds</h4><p>AngularStrap provides independently built modules that can be loaded separately</p><div class="highlight"><pre>\n' + '        <code class="javascript" highlight-block>\n' + '          angular.module(\'myApp\', [ \'mgcrea.ngStrap.modal\', \'mgcrea.ngStrap.aside\', \'mgcrea.ngStrap.tooltip\' ]);\n' + '        </code>\n' + '      </pre></div></div><h2 id="project-contribute">Contribute</h2><p>Build and work on AngularStrap with <a href="http://gulpjs.com">Gulp</a>.</p><div class="highlight"><pre>\n' + '      <code class="bash" highlight-block>\n' + '        // Serve and watch docs, ideal to hack!\n' + '        $ gulp serve\n' + '        // Continuous integration\n' + '        $ gulp karma:server\n' + '        // Build AngularStrap\n' + '        $ gulp build\n' + '      </code>\n' + '    </pre></div><h2 id="project-animations">Animations</h2><p>AngularStrap leverages AngularJS <code>ngAnimate</code>module to provide animations to the directives. Therefore, it requires to load custom CSS code as <code>ngAnimate</code>comes with a very specific markup.</p><div class="callout callout-info"><h4>AngularMotion</h4><p>Theses docs rely on the <code>angular-motion.css</code>stylesheet from the <a href="//github.com/mgcrea/angular-motion" target="_blank">AngularMotion</a> project.</p><div class="highlight"><pre>\n' + '        <code class="bash" highlight-block>\n' + '          $ bower install angular-motion --save\n' + '        </code>\n' + '      </pre></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/sections/old-docs.html', '<div class="bs-old-docs"><div class="container"><strong><a href="http://mgcrea.github.io/angular-strap/1.0/">Looking for AngularStrap v1 docs?</a></strong> We\'ve moved it to a new home while we push forward with AngularStrap 2.</div></div>');
  } ]);
})(window, document);