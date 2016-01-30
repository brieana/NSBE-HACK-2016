<!-- add code to the <head> of the page -->
<head>
  <title> My website! </title>
</head>

<!-- add code to the <body> of the page -->
<body>
  <h1>Hello!</h1>
  {{> welcomePage}}
</body>

<!-- define a template called welcomePage -->
<template name="welcomePage">
  <p>Welcome to my website!</p>
</template>

// Creates dropdown menu//
<template name="dropdown">
    {{> Template.dynamic template=templateName data=templateData}}
</template>
// if the ESC key is pressed or a mouse is clicked anywhere, close any open dropdowns
//
$(document).keyup(function(evt) {
    if (evt.keyCode === 27) {
        Session.set('dropdown', null);
    }
});
Template.layout.events({
    'click': function() {
        Session.set('dropdown', null);
    }
});

Template.dropdown.helpers({

    "templateName": function() {
        return 'dropdown_' + this.name;
    },

    "templateData": function() {
        // add an 'open' property to the template for the child to tell if it is open
        // _.extend(dest, src) copies all the properties in src to dest and returns dest
        return _.extend({open: Session.equals('dropdown', this.name)}, this);
    }

});

Template.dropdown.events({

    'click button': function(evt) {
        evt.preventDefault();
        evt.stopPropagation();  // stops the full-page click handler above from firing
        Session.set('dropdown', this.name);
    },

    'click .dropdown-menu li a': function(evt) {
        evt.preventDefault();
        Session.set('dropdown', null);
    }

});
{{>dropdown name='example'}}
<template name="dropdown_example">
    {{#if open}}
        <ul class="dropdown-menu x">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
        </ul>
        <button class="invisible btn">Try this</button>
    {{else}}
        <button class="btn">Try this</button>
    {{/if}}
</template>


