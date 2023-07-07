function colo()
{
    var col=["a4.jpg","b4.jpg","c4.jpg","d4.jpg","e4.jpg","f4.jpg","g4.jpg","h4.jpg"]
    var len=col.length
    var ran=Math.random()*len;
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage ="url(../Asset/Images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){colo()},1000)
}
function imgK(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgHeading").innerHTML=heading;
    document.getElementById("imgPara").innerHTML=discription;
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display: none")
}
