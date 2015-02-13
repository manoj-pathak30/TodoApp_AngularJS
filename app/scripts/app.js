
angular.module("todoApp",[])
    .controller("MainCtrl", function($scope){

        $scope.todos = [];

        $scope.add= function(){
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
            console.log($scope.todos)
        }

        $scope.delete= function(index){
            $scope.todos.splice(index, 1);
        }

        $scope.clear= function(){
            for(var idx = $scope.todos.length-1; idx>=0; idx--)
            {
                if($scope.todos[idx].completed == true){
                    $scope.todos.splice(idx, 1);
                }
            }
        }

    });