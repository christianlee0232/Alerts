//When each Alert is created, it sets reactiveVar editMode to false
Template.Alert.onCreated(function(){
    //reactive Variable:means to store single values. better from local data
    //Setting ReactiveVar to false means that each alert starts with editMode off
    this.editMode = new ReactiveVar(false);
});

//helpers pass js code into templates 
Template.Alert.helpers({
    //
    updateAlertId: function() {
        return this._id;
    },
    //return the editMode Template 
    editMode: function() {
        return Template.instance().editMode.get();
    }
});

//Event listeners
Template.Alert.events({
   'click .toggle-unresolved': function() {
       Meteor.call('toggleUnresolvedItem', this._id, this.inUnresolved);
   },
    //cannot use arrow function because it deletes entire window no individual recipe
    //When you click on the trash icon, you delete the alert
    'click .fa-trash': function() {
        Meteor.call('deleteAlert', this._id);
    },
    //cannot use arrow function because it deletes entire window no individual recipe
    //When you click on the pencil icon, you turn on the editMode template
    'click .fa-pencil': function(event, template) {
        template.editMode.set(!template.editMode.get());
    }
});
