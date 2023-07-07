function colo()
{
    var col=["a3.jpg","b3.jpg","c3.jpg","d3.jpg","e3.jpg","f3.jpg","g3.jpg","h3.jpg"]
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
