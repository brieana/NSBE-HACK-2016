if (Meteor.isClient){
  Meteor.startup(function () {
    Session.setDefault("templateName", "About");
  });

  Template.body.helpers({
    template_name: function(){
      return Session.get("templateName")
    }
  });

  Template.body.events({
    "click .home": function() {
      Session.set("templateName", "About");
    },
    "click .about": function() {
       Session.set("templateName", "Evaluations");
    },
    "click .contact": function() {
       Session.set("templateName", "Feedback");
    },
    "click .register": function() {
      Session.set("templateName", "register")
    },

  })

Template.register.events({
  "submit form": function(event){
    event.preventDefault();
    var email = $("[name=email]").val();
    var password = $("[name=password]").val();
    usersId.insert({
      createdAt: new Date(),
      email: email,
      password: password
    });
    Session.set("templateName", "About");
  }

});
    // ..





}
