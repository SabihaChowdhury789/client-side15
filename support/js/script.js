function setCookie(name,value,days){
    const d = new Date();

    d.setTime(d.getTime() +(days * 24 * 60 *1000));
    const expires="expire= " + d.toUTCString();
    document.cookie = name + "_" + value + ";" + expires + ";path/"
} 

function getCookie(name){
    const cname = name + "=";
    const decodedCookie=  decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');

    for(let c of cookies){
       while( c.charAt(0) ==='')c = c.substring(1);
       if(c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
    }
    return "";
}
 function acceptCokie(){
    setCookie("cookieAccepted", "true", 365);
    document.getElementById("cookie-banner").style.display ="none"
 }

 window.addEventListener("DOMContentLoaded",function(){
    if(!getCookie("cookieAccepted")){
        this.document.getElementById("cookie-banner").style.display="block";
        this.document.getElementById("accept-btn").addEventListener("click", acceptCokie);
    }
 })