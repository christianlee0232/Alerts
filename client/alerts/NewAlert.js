Template.NewAlert.onCreated(function(){
    //reactive Variable:meant to store single values. better from local data
    this.mapOn = new ReactiveVar(false);
    //this.editMode.set(false);
});
Template.NewAlert.helpers({
    mapOn: function() {
        return Template.instance().mapOn.get();
    }
});
Template.NewAlert.events({
    'click .fa-close': function(){
        Session.set('newAlert', false);
    },
    'click .fa-minus-square': function(event, template) {
        template.mapOn.set(!template.mapOn.get());
    },
    'click .fa-plus-square': function(event, template) {
        template.mapOn.set(!template.mapOn.get());
    }
});