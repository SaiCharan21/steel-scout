//$(window).on('load', function() {
//	let token = getCookie("token");
//	if(token != null) {
//		$.ajax({
//			url:'http://localhost/steel-scout-frontend/php/confirmlogin.php',
//			data: {token: token},
//			type: "POST", //or type:"GET" or type:"PUT"
//			success: function (result) {
//				result = JSON.parse(result);
//				if(!result['authenticated'] || result['role'] !== 'LEAD') {
//					window.location.assign("http://"+ip+"/steel-scout-frontend/login.html");
//				}
//				load_matches();
//			},
//			error: error()
//		});
//    }
//    else{
//        window.location.assign("http://"+ip+"/steel-scout-frontend/login.html");
//    }
//});

function error(jqXHR, textStatus, errorThrown, result) {
	console.log("FAILURE");
	$('#result').html('<p>status code: </p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div></div>');
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function load_matches()
{
    
}
