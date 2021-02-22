$(document).ready(function(){

    var name
    var age
    var work
    var emil
    
$("button").click(function(){


if(name==null){

    name=$(".name").val()
    $(".name").hide()
    $(".age").show()
}
else if(age==null){

    age=$(".age").val()
    $(".age").hide()
    $(".work").show()
}
else if(work==null){

    work=$(".work").val()
    $(".work").hide()
    $(".emil").show()
}
else if(emil==null){

    emil=$(".emil").val()
    $(".input-data").hide()

    $(".name-show").html(name)
    $(".age-show").html(age)
    $(".work-show").html(work)
    $(".emil-show").html(emil)
    $(".card-data").show()

}



})




});

