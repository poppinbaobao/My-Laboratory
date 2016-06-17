function prepareGallery()
{
	if(!document.getElementById)
	{
		return false;
	}
	if(!document.getElementsByTagName)
	{
		return false;
	}
	var gallery=document.getElementById("image_gallery");
	var linkss=gallery.getElementsByTagName("a");
	for(var i=0;i<linkss.length;i++)
	{
		linkss[i].onclick=function()
		{
			return showPic(this)?false:true;

		}
	}
}

function showPic(whichPic)
{
	
	if(!document.getElementById("mainPage"))
	{
		return false;
	}

	var source=whichPic.getAttribute("href");
	var placeholder=document.getElementById("mainPage");
	if(placeholder.nodeName!="IMG")
	{
		return false;
	}
	placeholder.setAttribute("src",source);
	if(document.getElementById("description"))
	{
		var text=whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
		var place_text=document.getElementById("description");
		if(place_text.firstChild.nodeType==3)
		{
			place_text.firstChild.nodeValue=text;
		}
	}
    return true;
}
window.onload=prepareGallery;
