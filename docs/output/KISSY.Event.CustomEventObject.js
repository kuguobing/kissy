Ext.data.JsonP.KISSY_Event_CustomEventObject({"tagname":"class","name":"KISSY.Event.CustomEventObject","autodetected":{},"files":[{"filename":"object.js","href":"object3.html#KISSY-Event-CustomEventObject"}],"params":[{"tagname":"params","type":"Object","name":"data","doc":"<p>data which will be mixed into custom event instance</p>\n","html_type":"<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>"}],"extends":"KISSY.Event.Object","members":[{"name":"currentTarget","tagname":"property","owner":"KISSY.Event.CustomEventObject","id":"property-currentTarget","meta":{}},{"name":"target","tagname":"property","owner":"KISSY.Event.CustomEventObject","id":"property-target","meta":{}},{"name":"type","tagname":"property","owner":"KISSY.Event.Object","id":"property-type","meta":{}},{"name":"halt","tagname":"method","owner":"KISSY.Event.Object","id":"method-halt","meta":{}},{"name":"isDefaultPrevented","tagname":"method","owner":"KISSY.Event.Object","id":"method-isDefaultPrevented","meta":{}},{"name":"isImmediatePropagationStopped","tagname":"method","owner":"KISSY.Event.Object","id":"method-isImmediatePropagationStopped","meta":{}},{"name":"isPropagationStopped","tagname":"method","owner":"KISSY.Event.Object","id":"method-isPropagationStopped","meta":{}},{"name":"preventDefault","tagname":"method","owner":"KISSY.Event.Object","id":"method-preventDefault","meta":{}},{"name":"stopImmediatePropagation","tagname":"method","owner":"KISSY.Event.Object","id":"method-stopImmediatePropagation","meta":{}},{"name":"stopPropagation","tagname":"method","owner":"KISSY.Event.Object","id":"method-stopPropagation","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-KISSY.Event.CustomEventObject","short_doc":"Do not new by yourself. ...","component":false,"superclasses":["KISSY.Event.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/KISSY.Event.Object' rel='KISSY.Event.Object' class='docClass'>KISSY.Event.Object</a><div class='subclass '><strong>KISSY.Event.CustomEventObject</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/object3.html#KISSY-Event-CustomEventObject' target='_blank'>object.js</a></div></pre><div class='doc-contents'><p>Do not new by yourself.</p>\n\n<p>Custom event object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>data which will be mixed into custom event instance</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-currentTarget' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Event.CustomEventObject'>KISSY.Event.CustomEventObject</span><br/><a href='source/object3.html#KISSY-Event-CustomEventObject-property-currentTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.CustomEventObject-property-currentTarget' class='name expandable'>currentTarget</a> : <a href=\"#!/api/KISSY.Event.Target\" rel=\"KISSY.Event.Target\" class=\"docClass\">KISSY.Event.Target</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>current target which processes current event</p>\n</div><div class='long'><p>current target which processes current event</p>\n<p>Overrides: <a href=\"#!/api/KISSY.Event.Object-property-currentTarget\" rel=\"KISSY.Event.Object-property-currentTarget\" class=\"docClass\">KISSY.Event.Object.currentTarget</a></p></div></div></div><div id='property-target' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Event.CustomEventObject'>KISSY.Event.CustomEventObject</span><br/><a href='source/object3.html#KISSY-Event-CustomEventObject-property-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.CustomEventObject-property-target' class='name expandable'>target</a> : <a href=\"#!/api/KISSY.Event.Target\" rel=\"KISSY.Event.Target\" class=\"docClass\">KISSY.Event.Target</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>source target of current event</p>\n</div><div class='long'><p>source target of current event</p>\n<p>Overrides: <a href=\"#!/api/KISSY.Event.Object-property-target\" rel=\"KISSY.Event.Object-property-target\" class=\"docClass\">KISSY.Event.Object.target</a></p></div></div></div><div id='property-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/KISSY.Event.Object' rel='KISSY.Event.Object' class='defined-in docClass'>KISSY.Event.Object</a><br/><a href='source/object2.html#KISSY-Event-Object-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Object-property-type' class='name expandable'>type</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>current event type</p>\n</div><div class='long'><p>current event type</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-halt' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/KISSY.Event.Object' rel='KISSY.Event.Object' class='defined-in docClass'>KISSY.Event.Object</a><br/><a href='source/object2.html#KISSY-Event-Object-method-halt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Object-method-halt' class='name expandable'>halt</a>( <span class='pre'>[immediate]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the event propagation and prevents the default\nevent behavior. ...</div><div class='long'><p>Stops the event propagation and prevents the default\nevent behavior.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>immediate</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>if true additional listeners on the current target will not be executed</p>\n</div></li></ul></div></div></div><div id='method-isDefaultPrevented' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/KISSY.Event.Object' rel='KISSY.Event.Object' class='defined-in docClass'>KISSY.Event.Object</a><br/><a href='source/object2.html#KISSY-Event-Object-method-isDefaultPrevented' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Object-method-isDefaultPrevented' class='name expandable'>isDefaultPrevented</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Flag for preventDefault that is modified during fire event. ...</div><div class='long'><p>Flag for preventDefault that is modified during fire event. if it is true, the default behavior for this event will be executed.</p>\n</div></div></div><div id='method-isImmediatePropagationStopped' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/KISSY.Event.Object' rel='KISSY.Event.Object' class='defined-in docClass'>KISSY.Event.Object</a><br/><a href='source/object2.html#KISSY-Event-Object-method-isImmediatePropagationStopped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Object-method-isImmediatePropagationStopped' class='name expandable'>isImmediatePropagationStopped</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Flag for stopImmediatePropagation that is modified during fire event. ...</div><div class='long'><p>Flag for stopImmediatePropagation that is modified during fire event. true means to stop propagation to bubble targets and other listener.</p>\n</div></div></div><div id='method-isPropagationStopped' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/KISSY.Event.Object' rel='KISSY.Event.Object' class='defined-in docClass'>KISSY.Event.Object</a><br/><a href='source/object2.html#KISSY-Event-Object-method-isPropagationStopped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Object-method-isPropagationStopped' class='name expandable'>isPropagationStopped</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Flag for stopPropagation that is modified during fire event. ...</div><div class='long'><p>Flag for stopPropagation that is modified during fire event. true means to stop propagation to bubble targets.</p>\n</div></div></div><div id='method-preventDefault' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/KISSY.Event.Object' rel='KISSY.Event.Object' class='defined-in docClass'>KISSY.Event.Object</a><br/><a href='source/object2.html#KISSY-Event-Object-method-preventDefault' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Object-method-preventDefault' class='name expandable'>preventDefault</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Prevents the event's default behavior ...</div><div class='long'><p>Prevents the event's default behavior</p>\n</div></div></div><div id='method-stopImmediatePropagation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/KISSY.Event.Object' rel='KISSY.Event.Object' class='defined-in docClass'>KISSY.Event.Object</a><br/><a href='source/object2.html#KISSY-Event-Object-method-stopImmediatePropagation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Object-method-stopImmediatePropagation' class='name expandable'>stopImmediatePropagation</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the propagation to the next bubble target and\nprevents any additional listeners from being executed\non the curr...</div><div class='long'><p>Stops the propagation to the next bubble target and\nprevents any additional listeners from being executed\non the current target.</p>\n</div></div></div><div id='method-stopPropagation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/KISSY.Event.Object' rel='KISSY.Event.Object' class='defined-in docClass'>KISSY.Event.Object</a><br/><a href='source/object2.html#KISSY-Event-Object-method-stopPropagation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Object-method-stopPropagation' class='name expandable'>stopPropagation</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the propagation to the next bubble target ...</div><div class='long'><p>Stops the propagation to the next bubble target</p>\n</div></div></div></div></div></div></div>","meta":{}});