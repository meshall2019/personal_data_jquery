$(document).ready(function(){

    var name
    var age
    var work
    var emil
    var img
    
$("button").click(function(){


if(name==null){

    name=$(".name").val()
    $(".name").fadeOut(600, function(){$(".age").fadeIn()
    })
    
}
else if(age==null){

    age=$(".age").val()
    $(".age").fadeOut(600,function(){$(".work").fadeIn()})
    
}
else if(work==null){

    work=$(".work").val()
    $(".work").fadeOut(600,function(){$(".emil").fadeIn()})
    
}
else if(emil==null){

    emil=$(".emil").val()
    $(".emil").fadeOut(600,function(){$(".add_img").fadeIn()})
    
}
else if(img==null){

    img=$(".add_img").val()
    $(".input-data").fadeOut(600,function(){

    $(".name-show").html(name)
    $(".age-show").html(age)
    $(".work-show").html(work)
    $(".emil-show").html(emil)
    $("img").attr('src',img)
    $(".card-data").fadeIn(500)
})

} })



});

