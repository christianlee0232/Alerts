Template.Resolved.onCreated(function() {
    var self = this;    
    self.autorun(function(){
        self.subscribe('alerts');    
    });
});

//pulling from ShoppingList.html
Template.Resolved.helpers({
    //shoppingList will appear if the Recipe is inMenu
    //shoppingList is the actual list of ingredients
    //ShoppingList is just the template
    resolved: ()=> {
        return Alerts.find({inResolved: true});
    }
});
