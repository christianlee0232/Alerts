Template.AlertDetail.onCreated(function() {
    var self = this;    
    //autorun is a reactive computation
    self.autorun(function(){
        //getParam = returns the value of a single URL parameter
        var id = FlowRouter.getParam('id');
        //Subscribe AlertDetail(Self) to detailAlerts specific to its id
        self.subscribe('detailAlert', id);    
    });
});


Template.AlertDetail.helpers({
    Alert: ()=> {
        var id = FlowRouter.getParam('id');
        //findOne: Returns one document that satisfies the specified query criteria
        return Alerts.findOne({_id: id});
    }
});
