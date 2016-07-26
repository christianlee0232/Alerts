Meteor.publish('alerts', function(){
    return Alerts.find({author: this.userId})
});
Meteor.publish('detailAlert', function(id){
    check(id, String);
    return Alerts.find({_id: id})
});