if (Meteor.isClient) {
    Accounts.onLogin(function(){
        FlowRouter.go('all-alerts');

    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}



FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);


FlowRouter.route('/',{
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('all-alerts');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/all-alerts', {
    name: 'all-alerts',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Alerts'});
    }
});

FlowRouter.route('/alert/:id', {
    name: 'alert',
    action() {
        BlazeLayout.render('MainLayout', {main: 'AlertDetail'});
    }
});

FlowRouter.route('/unresolved-alerts', {
    name: 'unresolved',
    action (){
        BlazeLayout.render('MainLayout', {main:'Unresolved'});
}
});

FlowRouter.route('/in-progress', {
    name: 'inProgress',
    action (){
        BlazeLayout.render('MainLayout', {main:'InProgress'});
}
});

FlowRouter.route('/resolved-alerts', {
    name: 'resolved-alert',
    action (){
        BlazeLayout.render('MainLayout', {main:'Resolved'});
}
});