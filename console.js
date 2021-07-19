var sum =0 ; 
var x=0;
var quantity1=0;
var quantity2=0;
var qunatity3=0;



function add_to_card(btn_id){
        
               
        x++ ;
        
    
        
        var btn_plus_of_smartphone = document.getElementById(btn_id).value; 

       btn_plus_of_smartphone = Number(btn_plus_of_smartphone);
       sum+=btn_plus_of_smartphone ; 

        //var x = document.getElementById("btn").value; 
        //x=Number(x);
        document.getElementById("total").innerHTML=sum + "$" ;
      var nextSibling =  document.getElementById(btn_id).nextSibling ;
        while(nextSibling && nextSibling.nodeType != 1) {
                nextSibling = nextSibling.nextSibling;
                nextSibling.innerHTML = x;
            }
      
}
function Add(btn_id){
        
        var x = document.getElementsById(btn_id).value;

        document.getElementsById("total").innerHTML=x; 
       
}