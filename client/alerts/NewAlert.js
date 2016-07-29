Template.NewAlert.onCreated(function(){
    //reactive Variable:meant to store single values. better from local data
    this.mapOn = new ReactiveVar(false);
    
    Session.set('lat');
    Session.set('lng');//this.editMode.set(false);
});

Template.NewAlert.helpers({
    mapOn: function() {
        return Template.instance().mapOn.get();
    },
    lat: () => {
        return Session.get('lat');
    },
    lng: () => {
        return Session.get('lng');
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

var preHooks = {
   before: {
       insert: (alert)=> {
           console.log('Session lat, lng: ' + Session.get('lat') + ','+ Session.get('lng'));
           console.log(alert);
           alert.LatLng = {};
           alert.LatLng.lat = Session.get('lat');
           alert.LatLng.lng = Session.get('lng');
           console.log(alert);
           return alert;
       }
   },
    onSubmit: function (insertDoc, updateDoc, currentDoc)  { 
        insertDoc.desc = Session.get('lat') + insertDoc.desc;
        console.log('on before' + insertDoc.desc);
        this.done();
             //return false;
     },
    onError: function(name, error, template) {
        console.log(name + " error:", error);
     }
};

AutoForm.addHooks('insertAlertForm', preHooks);

