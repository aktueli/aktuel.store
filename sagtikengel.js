<script language=’JavaScript1.2'>
//Disable select-text script (IE4+, NS6+)- By Andy Scott
//Exclusive permission granted to Dynamic Drive to feature script
//Visit http://www.dynamicdrive.com for this script
function disableselect(e){
return false
}
function reEnable(){
return true
}
//if IE4+
document.onselectstart=new Function (&quot;return false&quot;)
//if NS6
if (window.sidebar){
document.onmousedown=disableselect
document.onclick=reEnable
}
</script>
<script language=’JavaScript’>curPage=1;
document.oncontextmenu = function(){return false}
if(document.layers) {
window.captureEvents(Event.MOUSEDOWN);
window.onmousedown = function(e){
if(e.target==document)return false;
}
}
else {
document.onmousedown = function(){return false}
}</script>