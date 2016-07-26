Template.map.onCreated(function() {
    var self = this;    
    self.autorun(function(){
        self.subscribe('markers');    
    });
});

 
// create marker collection