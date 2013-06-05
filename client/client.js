// subscriptions
Meteor.subscribe("course-list");


// rendering templates
Template.hello.greeting = function () {
  return "Welcome to nyu-courses.";
};

Template.hello.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});
