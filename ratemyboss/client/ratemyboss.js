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
    template_isResClicked: function(){
      return Session.get("isResClicked");
    }
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
      Session.set("isResClicked", false);

    },
    "click .about": function() {
       Session.set("templateName", "Evaluations");
       Session.set("isHomeClicked", false);
       Session.set("isEvalClicked", true);
       Session.set("isFeedClicked", false);
       Session.set("isRegClicked", false);
       Session.set("isResClicked", false);

    },
    "click .contact": function() {
       Session.set("templateName", "Feedback");
       Session.set("isHomeClicked", false);
       Session.set("isEvalClicked", false);
       Session.set("isFeedClicked", true);
       Session.set("isRegClicked", false);
       Session.set("isResClicked", false);


    },
    "click .resources": function() {
      Session.set("templateName", "Resources")
      Session.set("isHomeClicked", false);
      Session.set("isEvalClicked", false);
      Session.set("isFeedClicked", false);
      Session.set("isRegClicked", false);
      Session.set("isResClicked", true);

    },
    "click .register": function() {
      Session.set("templateName", "register")
      Session.set("templateName", "Registration");
      Session.set("isHomeClicked", false);
      Session.set("isEvalClicked", false);
      Session.set("isFeedClicked", false);
      Session.set("isRegClicked", true);
      Session.set("isResClicked", false);
    }

  });
   }

  Template.register.events({
    "submit form": function(event){
      event.preventDefault();
      var email = $("[name=email]").val();
      var password = $("[name=password]").val();
      usersId.insert({
      createdAt: new Date(),
      email: email,
      password: password
      }
    )},
  });

  
