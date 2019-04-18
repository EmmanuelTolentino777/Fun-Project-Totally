var image= [];
var products= [];
var price= [];


$(".itembutton").click(function(){
    var imageval = $(".image").val();
    var nameval = $(".product").val();
    var priceval =$(".price").val();
    image.push(imageval);
    products.push(nameval);
    price.push(priceval);
    $(".masters").append("<div class='master'><img src="+imageval+"><p>"+nameval+"</p><p>$"+priceval+"</p></div");
   // price.length;
$("button").click(function(){
});