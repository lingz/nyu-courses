Meteor.startup(function () {
  // code to run on server at startup
});

// The full course list
Meteor.publish("course-list", function(){
  return Class.find();
});


// access control for server
Class.allow({
  insert: function(){
    return false;
  }
});


