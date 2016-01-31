  survey = new Mongo.Collection("survey");
  survey.attachSchema(new SimpleSchema({
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
