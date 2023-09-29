<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@page import="java.util.Locale"%>
<%@ page import="java.util.ResourceBundle"%>


<% 

ResourceBundle versions = null; 
try {
	 versions = ResourceBundle.getBundle("Versions");
}
catch (Exception e) {
	 System.out.println("Bundle ERROR");	 
//	logger.error(e.getMessage());	
}

Locale loc = request.getLocale(); 
Locale loc1 = request.getLocale(); 
Locale loc2 = request.getLocale();

String lang = loc.getLanguage();
String country = loc.getCountry();

System.out.println("locale set to:" + lang + "-" + country );	

if (lang.equals("en")) {
	loc1 = new Locale("en","US");	
	loc2 = new Locale("es","US");	
}
else {
	loc1 = new Locale("es","US");	
	loc2 = new Locale("en","US");		
}
		
ResourceBundle rb = null;

ResourceBundle rb1 = null;
try {
	rb1 = ResourceBundle.getBundle("MSContentServer",loc1);
}
catch (Exception e) {
//	logger.error(e.getMessage());
}
ResourceBundle rb2 = null;
try {
	rb2 = ResourceBundle.getBundle("MSContentServer",loc2);
}
catch (Exception e) {
//	logger.error(e.getMessage());
}

if (lang.equals("en")) {
	rb = rb1;
}
else {
	rb = rb2;	
}
%>

<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title><%= rb.getString("welcome") %></title>

  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link href="css/common_new.css?ver=<%=versions.getString("css_version")%>" rel="stylesheet" type="text/css" />
  <link href="js/jquery-ui-1.10.4.custom/css/spring/jquery-ui-1.10.4.custom.min.css" rel="stylesheet">

    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js"></script>


</head>
<body>






    <div class="container">          
    	<div class="container-fluid col-md-6 col-sm-6">
    		<br>
         	<div class="row">
            	<div class="col-md-12 col-sm-12 hidden">
			        <div class="col-md-6 col-sm-6" align="right" ><%= rb.getString("server_name") %>: </div>
			        <div class="col-md-6 col-sm-6"><input type="text" name="servername" id="servername" value="dev" /></div>
			    </div>
			</div>
         	<div class="row">
            	<div class="col-md-12 col-sm-12">
			        <div class="col-md-6 col-sm-6" align="right" ><%= rb.getString("companion_name") %>:</div>
			        <div class="col-md-6 col-sm-6"><input type="text" name="lcname" id="lcname" /></div>
			    </div>
            	<div class="col-md-12 col-sm-12">
            		<div class="col-md-6 col-sm-6" align="right" ><%= rb.getString("spoken_message") %>:</div>
            		<div class="col-md-6 col-sm-6"><input type="text" name="lcmessage" id="lcmessage" /></div>
            	</div>
            </div>
            <br><br>
         	<div class="row">
            	<div class="col-md-12 col-sm-12" align="center">
                	<button class="btn btn-primary btn-medium" aria-disabled="true" onclick="loadIframe()"><%= rb.getString("choose_animation") %></button>
           		</div>
        	</div>
        </div>
        <br>
    	<div class="container-fluid col-md-6 col-sm-6">
	      	<div class="row">
				<div class="huytran-practice">
					<div class="huytran-practice__container">
						<div class="huytran-practice__character">
							<div class="huytran-practice__hide-button"
								onclick="toggleCharacter()">
								<span class="fa fa-minus"></span>
							</div>
							<div class="huytran-practice__character-window">
								<div class="learningCompanionContainer">
									<iframe id="learningCompanionWindow" name="lciframe" width="280"
										height="600" src="";
										scrolling="no" allow="autoplay">
									</iframe>
								</div>
							</div>
						</div>
						<div class="huytran-practice__character-collapse hide">
							<span class="huytran-practice__show-button"
								onclick="toggleCharacter()"> <span
								class="fa fa-plus"></span>
							</span> <span><%= rb.getString("character") %></span>
						</div>
					</div>
				</div>
			</div>		
	</div>
</div>



<script>

var pgContext = "${pageContext.request.contextPath}";


	$(document).ready(function() {
		
		var url = pgContext+"/tt/tt/contentServices";

	    $.ajax({
	        type : "POST",
	        url : url,
	        data : {
	        	type: 'LC',
	            name: 'Jane',
	            lang: 'en_US'
	        },
	        success : function(data) {
	        	console.log(data);
	        	
	        }
	    });
        
	});
	
	function loadIframe () {
		var server = "";
		var lcname = document.getElementById("lcname").value;
		var serverName = document.getElementById("servername").value;

		if ( (lcname == 'Isabel') || (lcname == 'Isabella')) {
			server = "https://dev.mathspring.org:8443/TestLCs";
		}
		else {
			
			server = "https://s3.amazonaws.com/ec2-54-225-52-217.compute-1.amazonaws.com/mscontent";
		}
		var url = server + '/LearningCompanion/' + document.getElementById("lcname").value + '/' + 'idle.html';
        httpHead(url, successfulLCResult, failureLCResult);
        
        alert("<%= rb.getString("run_animation") %>");
        
		var url = server + '/LearningCompanion/' + document.getElementById("lcname").value + '/' + document.getElementById("lcmessage").value + '.html';
        httpHead(url, successfulLCResult, failureLCResult);

	}
	
	function toggleNav() {
        $('.huytran-sitenav__main').toggleClass('hide');
    }

    function toggleCharacter() {
        $('.huytran-practice__character').toggleClass('hide');
        $('.huytran-practice__character-collapse').toggleClass('hide');
    }

    function successfulLCResult (url) {
        console.log("Showing LC " + url);
		var fid = document.getElementById("learningCompanionWindow");
        $(fid).attr("src", url);
    }

    function failureLCResult (url) {

    }
    
    function httpHead(url, successCallbackFn, failureCallbackFn) {
        $.ajax({
            type: "GET",
            dataType: "HTML",
            crossDomain: true,
            async: true,
            url: url,
            success: function (data, textStatus, jqXHR) { 
            	successCallbackFn(url);
            	} ,
            error: function (jqXHR, textStatus, errorThrown) {
            	var msg = "";
            	
            	if (errorThrown == "Not Found") {
            		msg =  "<%= rb.getString("file_not_found") %>" + ": ";
            	}
            	else {
            		msg = "<%= rb.getString("device_not_accessible") %>:" + '\n' +  url;
            	}
            	alert(msg);
            	failureCallbackFn(msg);
            }
        });
    }    
</script>





</body>
</html>
