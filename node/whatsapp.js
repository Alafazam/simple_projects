// Author Alafazam

var log = "";

var current_status = false;


function check_for_presence($) {

    let t = document.getElementsByClassName('chat-status ellipsify');

    if (t.length > 0) {
        // means online
        if (current_status == false) {
            console.log('online');
            log+= (new Date()).toLocaleTimeString() + "  ";
            log+= "online   \n";
        }
        current_status = true;


    } else {
    	// means offline
        if (current_status == true) {
            console.log('offline');
            log+= (new Date()).toLocaleTimeString() + "  ";
            log+= "offline   \n";
        }
        current_status = false;


    }


}




setInterval(function() {
    check_for_presence();
}, 1000);
