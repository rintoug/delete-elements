const url = window.location.href;


function init() {

  if(url.match('reddit.com')) {  
    
    $( "body" ).on( "mousemove", function( event ) {
      directDelete(".h-header-large");
      directDelete("#right-sidebar-container");
      directDelete("#left-sidebar-container");
    })

  }


  if(url.match('youtube.com')) {

    constPolling('#related');   
    
  }
}

function directDelete(targetElement) {
  if($(targetElement).length > 0) {
    $(targetElement).remove();
  }
}

function constPolling(targetElement) {
  const targetInterval = setInterval(function() {
    if($(targetElement).length > 0) {
      $(targetElement).remove();
      console.log(targetElement);
    }
    else {
      clearInterval(targetInterval);
    }
  },1000);  
}


init();

