Template.Alerts.onCreated(function() {
    var self = this;    
    self.autorun(function(){
        self.subscribe('alerts');    
    });
});
Template.Alerts.helpers({
    Alerts: ()=> {
        return Alerts.find({});
    }
});
//When you click New Recipe button, newRecipe template comes out
Template.Alerts.events({
      'click .new-alert':()=> {
        Session.set('newAlert', true);
      }
});  
