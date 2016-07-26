Alerts = new Mongo.Collection('alerts'); 

Alerts.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    insert: function(){
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});
    
AlertSchema = new SimpleSchema({
    
    priority: {
        type: String,
        label: "Alert Priority",
        allowedValues: ['High', 'Medium', 'Low']
    },
    type: {
        type: String,
        label: "Alert Type",
        allowedValues: ['Intruder', 'Bomb Threat', 'Other']
    },
    desc: {
        type: String,
        label: "Alert Description"
    },
    reporter: {
        type: String,
        label: "Your Name"
    },
    badge: {
        type: String,
        label: "Badge Number"
    },
    location: {
        type: String,
        label: "Location of Incident",
        allowedValues: ['North Hall', 'South Hall', 'First Floor', 'Second Floor']
    },
    inUnresolved: {
        type: Boolean,
        defaultValue: false,
        optional: true, 
        autoform:{
        type: "hidden"
        }
    },
    author: {
        type: String,
        label:"Author",
        autoValue:function(){
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt:{
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    },
    
});
    
Alerts.attachSchema(AlertSchema);


