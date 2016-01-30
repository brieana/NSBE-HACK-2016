<!-- add code to the <head> of the page -->
<head>
  <title>My website!</title>
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
