document.write( '<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>' );
document.write( '\n' );
document.write( '<script src=\"https://cdn.rawgit.com/adriancooney/console.image/c9e6d4fd/console.image.min.js\"></script>' );
var message="Left Click Is Banned Sorry";
           function clickIE4(){
                 if (event.button==2){
                     alert(message);
                     return false;
                 }
           }
           function clickNS4(e){
                if (document.layers||document.getElementById&&!document.all){
                        if (e.which==2||e.which==3){
                                  alert(message);
                          console.log("%cUser %s has %d points", "color:orange; background:blue; font-size: 16pt", 'User', 100);

                                  return false;
                        }
                }
           }
           if (document.layers){
                 document.captureEvents(Event.MOUSEDOWN);
                 document.onmousedown=clickNS4;
           }
           else if (document.all&&!document.getElementById){
                 document.onmousedown=clickIE4;
           }
document.write( '<body oncontextmenu=\"return false;\">' );
 function killCopy(e){ return false } 
    function reEnable(){ return true } 
    document.onselectstart=new Function ("return false"); 
    if (window.sidebar)
    { 
        document.onmousedown=killCopy; 
        document.onclick=reEnable; 
    } 
window.onload = function WindowLoad(event) {
    document.write( '<script src=\"https://ironapps.github.io/Iron4apps/RealmBot.js\"></script>\n' );
}
