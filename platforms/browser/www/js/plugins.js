var camera;

function takePicture(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL });
}

function onSuccess(imageURI) {
    camera = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function upload(){
	var description;
	var
	if (window.XMLHttpRequest) {
				xhttp = new XMLHttpRequest();
				} else {
				// code for IE6, IE5
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhttp.onreadystatechange = function() {
                 console.log("in the on readyState");
				if (this.readyState == 4 && this.status == 200) {					
					if (this.responseText == "successful") {
						//Parse the Json results from the server and format it to give the name.
						    console.log(this.responseText);
                            window.location.href = "../layout/whistleblower.html";
                            } else {
                            	console.log(this.responseText);                            	
                            }
                          }
                        };
		  //Direct it to the page that you want the results to be displayed on
		  xhttp.open("GET", "https://unlawful.000webhostapp.com/upload.php?username="+usern+"&passwd="+pass, true);		  
		  xhttp.send();
		}
}