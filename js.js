$(document).ready(function(){

    var name
    var age
    var work
    var emil
    var img
    
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
    $(".emil").hide()
    $(".add_img").show()
}
else if(img==null){

    img=$(".add_img").val()
    $(".input-data").hide()

    $(".name-show").html(name)
    $(".age-show").html(age)
    $(".work-show").html(work)
    $(".emil-show").html(emil)
    $("img").attr('src',img)
    $(".card-data").show()

}



})




});

