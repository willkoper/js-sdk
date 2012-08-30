Ext.data.JsonP.Echo_API_Request({
  "tagname": "class",
  "name": "Echo.API.Request",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "enum": null,
  "override": null,
  "inheritable": null,
  "inheritdoc": null,
  "meta": {
  },
  "private": null,
  "id": "class-Echo.API.Request",
  "members": {
    "cfg": [
      {
        "name": "apiBaseUrl",
        "tagname": "cfg",
        "owner": "Echo.API.Request",
        "meta": {
        },
        "id": "cfg-apiBaseUrl"
      },
      {
        "name": "endpoint",
        "tagname": "cfg",
        "owner": "Echo.API.Request",
        "meta": {
          "required": true
        },
        "id": "cfg-endpoint"
      },
      {
        "name": "onClose",
        "tagname": "cfg",
        "owner": "Echo.API.Request",
        "meta": {
        },
        "id": "cfg-onClose"
      },
      {
        "name": "onData",
        "tagname": "cfg",
        "owner": "Echo.API.Request",
        "meta": {
        },
        "id": "cfg-onData"
      },
      {
        "name": "onError",
        "tagname": "cfg",
        "owner": "Echo.API.Request",
        "meta": {
        },
        "id": "cfg-onError"
      },
      {
        "name": "onOpen",
        "tagname": "cfg",
        "owner": "Echo.API.Request",
        "meta": {
        },
        "id": "cfg-onOpen"
      },
      {
        "name": "transport",
        "tagname": "cfg",
        "owner": "Echo.API.Request",
        "meta": {
        },
        "id": "cfg-transport"
      }
    ],
    "property": [

    ],
    "method": [
      {
        "name": "send",
        "tagname": "method",
        "owner": "Echo.API.Request",
        "meta": {
        },
        "id": "method-send"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 245,
  "files": [
    {
      "filename": "api.js",
      "href": "api.html#Echo-API-Request"
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Echo.StreamServer.API.Request",
    "Echo.IdentityServer.API.Request"
  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Echo.IdentityServer.API.Request' rel='Echo.IdentityServer.API.Request' class='docClass'>Echo.IdentityServer.API.Request</a></div><div class='dependency'><a href='#!/api/Echo.StreamServer.API.Request' rel='Echo.StreamServer.API.Request' class='docClass'>Echo.StreamServer.API.Request</a></div><h4>Files</h4><div class='dependency'><a href='source/api.html#Echo-API-Request' target='_blank'>api.js</a></div></pre><div class='doc-contents'><p>Class implementing API requests logic on the transport layer.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required Config options</h3><div id='cfg-endpoint' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.API.Request'>Echo.API.Request</span><br/><a href='source/api.html#Echo-API-Request-cfg-endpoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.API.Request-cfg-endpoint' class='name not-expandable'>endpoint</a><span> : String</span><strong class='required signature' >required</strong></div><div class='description'><div class='short'><p>Specifes the API endpoint.</p>\n</div><div class='long'><p>Specifes the API endpoint.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional Config options</h3><div id='cfg-apiBaseUrl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.API.Request'>Echo.API.Request</span><br/><a href='source/api.html#Echo-API-Request-cfg-apiBaseUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.API.Request-cfg-apiBaseUrl' class='name not-expandable'>apiBaseUrl</a><span> : String</span></div><div class='description'><div class='short'><p>Specifies the base URL for API requests</p>\n</div><div class='long'><p>Specifies the base URL for API requests</p>\n</div></div></div><div id='cfg-onClose' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.API.Request'>Echo.API.Request</span><br/><a href='source/api.html#Echo-API-Request-cfg-onClose' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.API.Request-cfg-onClose' class='name not-expandable'>onClose</a><span> : Function</span></div><div class='description'><div class='short'><p>Callback called after API request aborting.</p>\n</div><div class='long'><p>Callback called after API request aborting.</p>\n</div></div></div><div id='cfg-onData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.API.Request'>Echo.API.Request</span><br/><a href='source/api.html#Echo-API-Request-cfg-onData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.API.Request-cfg-onData' class='name not-expandable'>onData</a><span> : Function</span></div><div class='description'><div class='short'><p>Callback called after API request succeded.</p>\n</div><div class='long'><p>Callback called after API request succeded.</p>\n</div></div></div><div id='cfg-onError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.API.Request'>Echo.API.Request</span><br/><a href='source/api.html#Echo-API-Request-cfg-onError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.API.Request-cfg-onError' class='name not-expandable'>onError</a><span> : Function</span></div><div class='description'><div class='short'><p>Callback called after API request failed.</p>\n</div><div class='long'><p>Callback called after API request failed.</p>\n</div></div></div><div id='cfg-onOpen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.API.Request'>Echo.API.Request</span><br/><a href='source/api.html#Echo-API-Request-cfg-onOpen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.API.Request-cfg-onOpen' class='name not-expandable'>onOpen</a><span> : Function</span></div><div class='description'><div class='short'><p>Callback called before sending an API request.</p>\n</div><div class='long'><p>Callback called before sending an API request.</p>\n</div></div></div><div id='cfg-transport' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.API.Request'>Echo.API.Request</span><br/><a href='source/api.html#Echo-API-Request-cfg-transport' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.API.Request-cfg-transport' class='name expandable'>transport</a><span> : String</span></div><div class='description'><div class='short'>Specifies the transport name. ...</div><div class='long'><p>Specifies the transport name.</p>\n<p>Defaults to: <code>&quot;ajax&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-send' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.API.Request'>Echo.API.Request</span><br/><a href='source/api.html#Echo-API-Request-method-send' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.API.Request-method-send' class='name expandable'>send</a>( <span class='pre'>[Object args]</span> )</div><div class='description'><div class='short'>Method performing api request using given parameters. ...</div><div class='long'><p>Method performing api request using given parameters.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object (optional)<div class='sub-desc'><p>Request parameters.</p>\n<ul><li><span class='pre'>force</span> : Boolean (optional)<div class='sub-desc'><p>Flag to initiate aggressive polling.</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>"
});