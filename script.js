window.onload = function(){

    $('.price').each(function(){
       let a= $(this).text()
        a = a.replace(new RegExp("^(\\d{" + (a.length%3?a.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
let sep = "."
a = a.replace(/\s/g, sep);
$(this).text(a)
    })
    $('.old-price').each(function(){
        let a= $(this).text()
         a = a.replace(new RegExp("^(\\d{" + (a.length%3?a.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
 let sep = "."
 a = a.replace(/\s/g, sep);
 $(this).text(a)
     })
 
}

