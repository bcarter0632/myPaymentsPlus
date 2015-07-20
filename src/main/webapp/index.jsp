<!DOCTYPE html>
<html ng-app="App">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <script src="lib/jquery/dist/jquery.min.js"></script>
    <script src="lib/angular/angular.min.js"></script>
    <script src="lib/angular-route/angular-route.min.js"></script>
    <script src="lib/angular-animate/angular-animate.min.js"></script>
    <script src="lib/angular-sanitize/angular-sanitize.min.js"></script>
    <script src="lib/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="lib/angular-strap/dist/angular-strap.min.js"></script>
    <script src="lib/angular-strap/dist/angular-strap.tpl.min.js"></script>
    <script src="js/all.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="css/bootstrap-theme.min.css" type="text/css" />
    <link rel="stylesheet" href="lib/angular-motion/dist/angular-motion.min.css" type="text/css" />
    <title>MyPaymentsPlus Reworked</title>
  </head>
  <body class="container-fluid">
    <alert></alert>
    <nav class="navbar navbar-default" role="navigation">
      <title-header></title-header>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li ng-class="{dropdown: true, open: accountToggle == true}" ng-mouseleave="accountToggle = false" ng-mouseover="accountToggle=true" ng-init="accountToggle=false">
            <a class="dropdown-toggle" data-toggle="dropdown">Manage Account<b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#/profile">My Profile</a></li>
              <li><a href="#/students">Manage Students</a></li>
              <li><a href="#/creditCards">Manage Credit Cards</a></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><logout url="logout"></logout></li>
        </ul>
        <form class="navbar-form navbar-right" role="search">
          <div class="form-group">
            <input type="text" class="form-control" ng-model="search.jobInstanceId" placeholder="Find Students">
          </div>
          <button ng-click="search.search()" class="btn btn-default">Go</button>
        </form>
      </div>
    </nav>

    <div ui-view></div>

  </body>
</html>
