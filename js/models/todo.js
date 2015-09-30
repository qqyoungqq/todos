var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has 'title' and 'completed' attributes

app.Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},

	//Toggle the 'complted' state of this to do item
	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
});