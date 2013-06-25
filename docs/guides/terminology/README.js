Ext.data.JsonP.terminology({
  "guide": "<h1 id='terminology-section-terminology-and-dev-tips'>Terminology and dev tips</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/terminology-section-overview'>Overview</a></li>\n<li><a href='#!/guide/terminology-section-terms'>Terms</a></li>\n<li><a href='#!/guide/terminology-section-creating-a-javascript-closure-for-the-components-and-jquery-plugins'>Creating a JavaScript closure for the components and jQuery plugins</a></li>\n<li><a href='#!/guide/terminology-section-rendering-engine'>Rendering engine</a></li>\n<li><a href='#!/guide/terminology-section-minified-scripts-and-debugging'>Minified scripts and debugging</a></li>\n</ol>\n</div>\n\n<h2 id='terminology-section-overview'>Overview</h2>\n\n<p>This guide contains the definition of the terms used throughout the JS SDK docs, various development tips and a description of core SDK concepts.</p>\n\n<h2 id='terminology-section-terms'>Terms</h2>\n\n<h3 id='terminology-section-manifest'>Manifest</h3>\n\n<p>The unified structure which describes a certain application, control or a plugin is called a <em>manifest</em>. Each component type has a special \"manifest\" function (<a href=\"#!/api/Echo.App-static-method-manifest\" rel=\"Echo.App-static-method-manifest\" class=\"docClass\">Echo.App.manifest</a> and <a href=\"#!/api/Echo.Plugin-static-method-manifest\" rel=\"Echo.Plugin-static-method-manifest\" class=\"docClass\">Echo.Plugin.manifest</a>) to generate an empty <em>manifest</em> skeleton which can be filled in with the business logic. In addition to the \"manifest\" function, there is a set of \"create\" functions to turn static definition into the JS classes (<a href=\"#!/api/Echo.App-static-method-create\" rel=\"Echo.App-static-method-create\" class=\"docClass\">Echo.App.create</a> and <a href=\"#!/api/Echo.Plugin-static-method-create\" rel=\"Echo.Plugin-static-method-create\" class=\"docClass\">Echo.Plugin.create</a>). More information about the use of the <em>manifest</em> can be found in the <a href=\"#!/guide/how_to_develop_control\">Contol</a>, <a href=\"#!/guide/how_to_develop_plugin\">Plugin</a> or <a href=\"#!/guide/how_to_develop_app\">App</a> development guides.</p>\n\n<h3 id='terminology-section-application-aka-app-'>Application (aka App)</h3>\n\n<p><em>Application</em> (or <em>App</em>) is a JavaScript class with the pre-defined structure (generated out of the app manifest) which can represent a certain set of discrete functionality or combine multiple apps and plugins into a package to achieve a certain functionality. Application examples: <a href=\"#!/api/Echo.StreamServer.Controls.Stream\" rel=\"Echo.StreamServer.Controls.Stream\" class=\"docClass\">Stream control</a>, <a href=\"#!/api/Echo.StreamServer.Controls.Submit\" rel=\"Echo.StreamServer.Controls.Submit\" class=\"docClass\">Submit control</a>, <a href=\"#!/api/Echo.IdentityServer.Controls.Auth\" rel=\"Echo.IdentityServer.Controls.Auth\" class=\"docClass\">Auth control</a>, etc. More information about the App development can be found in <a href=\"#!/guide/how_to_develop_app\">the hands-on guide</a>.</p>\n\n<h3 id='terminology-section-plugin'>Plugin</h3>\n\n<p><em>Plugin</em> is a JavaScript class with the pre-defined structure (generated out of the plugin manifest) which extends a certain part of an App. Plugin examples: <a href=\"#!/api/Echo.StreamServer.Controls.Stream.Item.Plugins.Reply\" rel=\"Echo.StreamServer.Controls.Stream.Item.Plugins.Reply\" class=\"docClass\">Reply</a>, <a href=\"#!/api/Echo.StreamServer.Controls.Stream.Item.Plugins.Edit\" rel=\"Echo.StreamServer.Controls.Stream.Item.Plugins.Edit\" class=\"docClass\">Edit</a>, <a href=\"#!/api/Echo.StreamServer.Controls.Stream.Item.Plugins.Like\" rel=\"Echo.StreamServer.Controls.Stream.Item.Plugins.Like\" class=\"docClass\">Like</a>. More information about the Plugins development can be found in <a href=\"#!/guide/how_to_develop_plugin\">the hands-on guide</a>.</p>\n\n<h3 id='terminology-section-renderer'>Renderer</h3>\n\n<p>The appearance of an application can be considered as a composition of its visual components, which are in fact DOM elements with its own structure. Function which produces specific component or modifies it is called <em>Renderer</em> and is in fact the minimal entity in terms of Echo component visual design.</p>\n\n<h2 id='terminology-section-creating-a-javascript-closure-for-the-components-and-jquery-plugins'>Creating a JavaScript closure for the components and jQuery plugins</h2>\n\n<p>Any Echo JS SDK component should be placed to a separate JS closure to provide a unique namespace for the component and avoid code intersection.</p>\n\n<pre><code>(function(jQuery) {\n\"use strict\";\n\nvar $ = jQuery;\n\n// component or jQuery plugin code goes here\n\n})(Echo.jQuery);\n</code></pre>\n\n<p>Due to the fact that Echo JS SDK uses a separate jQuery instance (available as Echo.jQuery), we pass the Echo.jQuery reference as the anonymous function argument and accept is as jQuery variable. In addition to that we add the $ variable and link it to the same jQuery reference. So inside the JS closure both \"jQuery\" and \"$\" vars are available, like on a regular page with the jQuery lib included.</p>\n\n<p>Also we add the directive to switch the JS code execution to the strict mode (<em>\"use strict\"</em>). It helps to avoid the mistakes (such as using the global vars in inappropriate places, etc) while developing the code + the code which works in the strict mode will be minified without any issues.</p>\n\n<h2 id='terminology-section-rendering-engine'>Rendering engine</h2>\n\n<p>Rendering is the process of transformation from declarative templates, css rules and renderer handlers to the complete DOM structures. Basically one has to create an Echo template (just a HTML structure with some meta placeholders actually), add a bunch of renderer functions and call the <code>render</code> method of <a href=\"#!/api/Echo.View\" rel=\"Echo.View\" class=\"docClass\">Echo.View</a> class.</p>\n\n<h3 id='terminology-section-echo-html-templates'>Echo HTML Templates</h3>\n\n<p>Echo HTML template is a HTML declarative structure with placeholders in curly brackets.</p>\n\n<pre><code>var template =\n    '&lt;span class=\"{class:container}\"&gt;' +\n        '&lt;span class=\"{class:avatar}\"&gt;' +\n            '&lt;img src=\"{self:avatar}\"&gt;'\n        '&lt;/span&gt;' +\n        '&lt;span class=\"{class:title}\"&gt;{label:title} - {data:title}&lt;/span&gt;' +\n    '&lt;/span&gt;';\n</code></pre>\n\n<p>There are several types of placeholders:</p>\n\n<ul>\n<li>{class:KEY} - the placeholder will be replaced with the auto generated CSS class name + the KEY value</li>\n<li>{label:KEY} - the placeholder to access the corresponding label text using the KEY as a key</li>\n<li>{self:KEY}  - provides the ability to access the component field using the KEY as a key</li>\n<li>{config:KEY} - the placeholder to access the config value using the KEY as a key</li>\n<li>{data:KEY} - the placeholder to be replaced with a value from the object provided as an argument</li>\n</ul>\n\n\n<h3 id='terminology-section-echo-css-templates'>Echo CSS Templates</h3>\n\n<p>Echo CSS template is a CSS declarative structure with placeholders in curly brackets.</p>\n\n<pre><code>var css = \n    '.{class:avatar} img { width: 16px; height: 16px; margin: 3px; }' +\n    '.{class:container}, .{class:container} span { white-space: nowrap; }' +\n    '.{class:title} { font-weight: bold; }';\n</code></pre>\n\n<h3 id='terminology-section-echo-renderer-functions'>Echo Renderer functions</h3>\n\n<p>Echo renderer function is a javascript function with fixed interface which produces or modifies the particular DOM element.</p>\n\n<pre><code>var renderer = function(element) {\n    if (condition) {\n        element.empty().append(title));\n    } else {\n        element.hide();\n    }\n    return element;\n};\n</code></pre>\n\n<h2 id='terminology-section-minified-scripts-and-debugging'>Minified scripts and debugging</h2>\n\n<p>All the files in the <em>http://cdn/echoenabled.com/sdk/v3/</em> directory are minified using UglifyJS. Dev versions (non-minified) of these files are located in <em>/sdk/v3/dev/</em> directory.\nBy default all dependencies specified in the source code will be downloaded minified but there is a way to specify which version to download. Here it is:</p>\n\n<ol>\n<li>if page includes <strong>/sdk/v3/dev/loader.js</strong> then dev versions will be used else go to 2.</li>\n<li><p>if URL contains <strong>echo.debug:true</strong> or <strong>echo.debug:false</strong> after # (known as fragment/anchor) then we save its value in the special <strong>echo-debug</strong> cookie and:</p>\n\n<p> &bull; use dev versions if <strong>echo.debug:true</strong>;\n &bull; use min versions if <strong>echo.debug:false</strong>;\n &bull; go to 3 otherwise.<br><br></p></li>\n<li><p>If cookie with the name <strong>echo-debug</strong> exists and its value is <em>true</em> then we use dev versions.</p></li>\n</ol>\n\n",
  "title": "Terminology and dev tips"
});