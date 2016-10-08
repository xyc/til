```html
<html ng-app="Eggly">
  <head>

  </head>
  <body ng-controller="MainCtrl">
    <div ng-init="hello='world'">
      <h1>{{hello}}</h1>
      <input type="text" ng-model="hello"/>
      <li ng-repeat="category in categories | filter:{category:currentCategory.name}">
        <a href="#">{{category.name}}</a>
      </li>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"/>
    <script>
      angular.module('Eggly', [
      ])
      .controller('MainController', function($scope) {
        $scope.hello = 'world';
        $scope.categories = [
          {"id": 0, "name": "Development"},
        ];

        function setCurrentCategory(category) {
          $scope.currentCategory = category;
        }

        function isCurrentCategory(category) {
          return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }

        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;
      })
    </script>
  </body>
</html>
```
