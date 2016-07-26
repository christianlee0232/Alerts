Template.Unresolved.onCreated(function() {
    var self = this;    
    self.autorun(function(){
        self.subscribe('alerts');    
    });
});

Template.Unresolved.helpers({
    alerts: ()=> {
        return Alerts.find({inUnresolved: true});
    }
});

Template.Unresolved.events({
    //cannot use arrow function because it deletes entire window no individual recipe
    'click .fa-trash': function() {
        Meteor.call('deleteAlert', this._id);
    },
    //cannot use arrow function because it deletes entire window no individual recipe
    'click .fa-pencil': function(event, template) {
        template.editMode.set(!template.editMode.get());
    }
});
