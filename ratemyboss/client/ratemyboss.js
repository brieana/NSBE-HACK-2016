if (Meteor.isClient){
  Meteor.startup(function () {
    Session.setDefault("templateName", "About");
    Session.setDefault("isHomeClicked", true);


  });

  Template.body.helpers({
    template_name: function(){
      return Session.get("templateName");
    },
    template_isHomeClicked: function(){
      return Session.get("isHomeClicked");
    },
    template_isEvalClicked: function(){
      return Session.get("isEvalClicked");
    },
    template_isFeedClicked: function(){
      return Session.get("isFeedClicked");
    },
    template_isRegClicked: function(){
      return Session.get("isRegClicked");
    },
    /*username: function(){
      return userId.find().fetch();
    }*/

  });

  Template.body.events({
    "click .home": function() {
      Session.set("templateName", "About");
      Session.set("isHomeClicked", true);
      Session.set("isEvalClicked", false);
      Session.set("isFeedClicked", false);
      Session.set("isRegClicked", false);
    },
    "click .about": function() {
       Session.set("templateName", "Evaluations");
       Session.set("isHomeClicked", false);
       Session.set("isEvalClicked", true);
       Session.set("isFeedClicked", false);
       Session.set("isRegClicked", false);

    },
    "click .contact": function() {
       Session.set("templateName", "Feedback");
       Session.set("isHomeClicked", false);
       Session.set("isEvalClicked", false);
       Session.set("isFeedClicked", true);
       Session.set("isRegClicked", false);

    },
    "click .register": function() {
      Session.set("templateName", "register")
      Session.set("templateName", "Registration");
      Session.set("isHomeClicked", false);
      Session.set("isEvalClicked", false);
      Session.set("isFeedClicked", false);
      Session.set("isRegClicked", true);
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
};
