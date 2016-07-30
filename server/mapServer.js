// marker collection
// Listen to incoming HTTP requests, can only be used on the server
WebApp.connectHandlers.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});

var Markers = new Meteor.Collection('markers');
Meteor.publish("markers", function (){
    return Markers.find();
});

Markers.allow({
    'insert': function(userId, doc) {
        console.log("Doc:" + doc);
        return !!userId;
    },
    remove: function(userId,doc){
        return !!userId;
    },
});