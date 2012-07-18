(function($) {

var plugin = Echo.Plugin.skeleton("SubmitTextCounter", "Echo.StreamServer.Controls.Submit");

if (Echo.Plugin.isDefined(plugin)) return;

plugin.init = function() {
	var component = this.component;
	this.extendTemplate(plugin.templates.counter, "insertAfter", "content");
	this.extendRenderer("text", plugin.renderers.Submit.text);
	this.extendRenderer("counterLabel", plugin.renderers.Submit.counterLabel);
};

plugin.labels = {
	"limited": "{typed}/{left} characters",
	"unlimited": "{typed} characters"
};

plugin.events = {
	"Echo.StreamServer.Controls.Submit.onPostComplete": function(topic, args) {
		this.component.render({"element": "counterLabel"});
	}
};

plugin.templates.counter = '<div class="{class:counterLabel} echo-primaryFont echo-primaryColor"></div>';

plugin.renderers.Submit = {};

plugin.renderers.Submit.text = function(element, dom) {
	var plugin = this;
	plugin.parentRenderer("text", arguments);
	var limit = plugin.config.get("limit", 0);
	var handler = function() {
		if (limit) {
			var text = element.val();
			if (text.length <= limit) {
				plugin.set("text", text);
			} else if (text.length > limit) {
				element.val(plugin.get("text"));
				return;
			}
		}
		plugin.component.render({"element": "counterLabel"});
	};
	return element.bind("blur focus keyup keypress", handler);
};

plugin.renderers.Submit.counterLabel = function(element, dom) {
	var plugin = this;
	var limit = plugin.config.get("limit", 0);
	var typed = dom.get("text").val().length;
	var label = this.labels.get(
		plugin.config.get("label", limit ? "limited" : "unlimited"),
		{"typed": typed, "left": Math.max(limit - typed, 0), "limit": limit}
	);
	return element.text(label);
};

Echo.Plugin.create(plugin);

})(jQuery);