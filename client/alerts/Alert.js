Template.Alert.onCreated(function(){
    //reactive Variable:meant to store single values. better from local data
    this.editMode = new ReactiveVar(false);
    //this.editMode.set(false);
});

Template.Alert.helpers({
    updateAlertId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});
Template.Alert.events({
   'click .toggle-unresolved': function() {
       Meteor.call('toggleUnresolvedItem', this._id, this.inUnresolved);
   },
    //cannot use arrow function because it deletes entire window no individual recipe
    'click .fa-trash': function() {
        Meteor.call('deleteAlert', this._id);
    },
    //cannot use arrow function because it deletes entire window no individual recipe
    'click .fa-pencil': function(event, template) {
        template.editMode.set(!template.editMode.get());
    }
});
