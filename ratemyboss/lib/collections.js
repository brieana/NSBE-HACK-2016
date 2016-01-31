  evaluations = new Mongo.Collection("evaluations");
  evaluations.attachSchema(new SimpleSchema({
    question1: {
      type: String,
      label: "When asking to get a task done, does your boss tell you in a well fair and respectable manner?\n",
      max: 500
    },
    question2: {
       type: String,
       label: "Do they respect everyone one in the work space?\n",
       max: 500
    }
  }));


  feedback = new Mongo.Collection("feedback");
  feedback.attachSchema(new SimpleSchema({
    question: {
      type: String,
      label: "question",
      max: 500
    },
    comment: {
      type: String,
      label: "comment",
      optional: true,
      max: 1000
    }   
   }));
  
  usersId = new Mongo.Collection("usersId");
  Photos = new Mongo.Collection("photos");
