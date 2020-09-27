  //Code That Goes At Bottom Of login page

  var Test = __st; //We are getting the checkout url and storing it in a variable
  localStorage.setItem('Test', JSON.stringify(Test));

//Code That Goes At Top Of Index
var retrievedObject = localStorage.getItem('Test'); 
    //console.log(retrievedObject);
  var domain = '';

  var theUrl = JSON.parse(retrievedObject)["pageurl"];
      //console.log(theUrl);
var url_dec = decodeURIComponent(theUrl);


      //console.log(url_dec);

if (url_dec.includes(".myshopify.com")) { 
          
            redirectURL = domain.concat((window.location['host']), "/account/login?checkout_url=https://", Shopify.shop, "/",);
        
                                        }  else { 
            
            redirectURL = domain.concat((window.location['host']), "/account/login?checkout_url=https://", (window.location['host']), "/",);
}

        var newCheckout = url_dec.replace(redirectURL, '');  

        window.location.replace(newCheckout);
          localStorage.removeItem("Test"); 

