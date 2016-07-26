Template.AlertDetail.onCreated(function() {
    var self = this;    
    self.autorun(function(){
        var id = FlowRouter.getParam('id');
        self.subscribe('detailAlert', id);    
    });
});
Template.AlertDetail.helpers({
    Alert: ()=> {
        var id = FlowRouter.getParam('id');
        return Alerts.findOne({_id: id});
    }
});
