var movieContainer = document.getElementById("movies");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', '/movie.json');
ourRequest.onload = function(){
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
};
ourRequest.send();
$(function () {


	$('#chooseDay').on('change', function () {
	
	
	
	
		console.log("Select has changed value",$(this).val());
		var changedValue = $(this).val();
		console.log("Select has changed value to %s", changedValue);
		
		//Hide all dayItems
		 $('.dayItem').hide();
		 //$('#movies').hide();
		 $('#seatingLayout').hide();
	
		
		//Build up an id and then use it to hide / show items	
		var dayId = '#' + changedValue; // eg # + mon
		$(dayId).show();
		
		
		var chosentext = $("#chooseDay :selected").text();
		console.log("Chosen text is now %s", chosentext);
	
	});
	
	})
	$(function () {

		var url = 'movie.json';
		$.ajax({
		  dataType: "json",
		  url: url,
		  
		  success: function (result) { 
		  
		   var tmpResult = result.slice(1,20);
			console.log(tmpResult);
			
			
			for(var i = 0; i < tmpResult.length; i++) {
			
				$('#ulMon').append("<li>" + "<h3><a href='#'> " + tmpResult[i]['title'] + "</a></h3></li>" +
			"<br>" + "<b>Year:</b> "+ tmpResult[i]['title'] + "<br> <b>Director:</b> " + tmpResult[i]['director'] + 
			"<br> <b>Casts:</b> " + tmpResult[i]['cast'] +
			"<br> <b>Genre:</b> " + tmpResult[i]['genre'] +
			"<br> <b>Notes:</b> " + tmpResult[i]['notes'] +  
			"<br>" + "<div><table cellspacing='0' cellpadding='0'><tr><td width='14%'>"
		
		);
				
				var ulString ="";
				for(var j = 0; j < tmpResult[i]['runningTimes']['mon'].length; j++) {
				
				ulString += "<ul><li><a href='#'>"
				 + tmpResult[i]['runningTimes']['mon'][j] + "</a></li></ul>";
		
				}
			
				ulString += "</td></tr></table></div><br><br>"
				
				$('#ulMon').append(ulString);
			}

			for(var i = 0; i < tmpResult.length; i++) {
			
				$('#ulTue').append("<li>" + "<h3><a href='#'> " + tmpResult[i]['title'] + "</a></h3></li>" +
			"<br>" + "<b>Year:</b> "+ tmpResult[i]['title'] + "<br> <b>Director:</b> " + tmpResult[i]['director'] + 
			"<br> <b>Casts:</b> " + tmpResult[i]['cast'] +
			"<br> <b>Genre:</b> " + tmpResult[i]['genre'] +
			"<br> <b>Notes:</b> " + tmpResult[i]['notes'] +  
			"<br>" + "<div><table cellspacing='0' cellpadding='0'><tr><td width='14%'>"
		
		);
				
				var ulString ="";
			for(var j = 0; j < tmpResult[i]['runningTimes']['tue'].length; j++) {
				
				ulString += "<ul><li><a href='#'>"
				 + tmpResult[i]['runningTimes']['tue'][j] + "</a></li></ul>";
		
				}
			
				ulString += "</td></tr></table></div><br>"
				
				$('#ulTue').append(ulString);
			
			
			}
			for(var i = 0; i < tmpResult.length; i++) {
			
				$('#ulWed').append("<li>" + "<h3><a href='#'> " + tmpResult[i]['title'] + "</a></h3></li>" +
			"<br>" + "<b>Year:</b> "+ tmpResult[i]['title'] + "<br> <b>Director:</b> " + tmpResult[i]['director'] + 
			"<br> <b>Casts:</b> " + tmpResult[i]['cast'] +
			"<br> <b>Genre:</b> " + tmpResult[i]['genre'] +
			"<br> <b>Notes:</b> " + tmpResult[i]['notes'] +  
			"<br>" + "<div><table cellspacing='0' cellpadding='0'><tr><td width='14%'>"
		
		);
				
				var ulString ="";
			for(var j = 0; j < tmpResult[i]['runningTimes']['wed'].length; j++) {
				
				ulString += "<ul><li><a href='#'>"
				 + tmpResult[i]['runningTimes']['wed'][j] + "</a></li></ul>";
		
				}
			
				ulString += "</td></tr></table></div><br>"
				
				$('#ulWed').append(ulString);
			
			
			}
			for(var i = 0; i < tmpResult.length; i++) {
			
				$('#ulThu').append("<li>" + "<h3><a href='#'> " + tmpResult[i]['title'] + "</a></h3></li>" +
			"<br>" + "<b>Year:</b> "+ tmpResult[i]['title'] + "<br> <b>Director:</b> " + tmpResult[i]['director'] + 
			"<br> <b>Casts:</b> " + tmpResult[i]['cast'] +
			"<br> <b>Genre:</b> " + tmpResult[i]['genre'] +
			"<br> <b>Notes:</b> " + tmpResult[i]['notes'] +  
			"<br>" + "<div><table cellspacing='0' cellpadding='0'><tr><td width='14%'>"
		
		);
				
				var ulString ="";
			for(var j = 0; j < tmpResult[i]['runningTimes']['thu'].length; j++) {
				
				ulString += "<ul><li><a href='#'>"
				 + tmpResult[i]['runningTimes']['thu'][j] + "</a></li></ul>";
		
				}
			
				ulString += "</td></tr></table></div><br>"
				
				$('#ulThu').append(ulString);
			
			
			}
			for(var i = 0; i < tmpResult.length; i++) {
			
				$('#ulFri').append("<li>" + "<h3><a href='#'> " + tmpResult[i]['title'] + "</a></h3></li>" +
			"<br>" + "<b>Year:</b> "+ tmpResult[i]['title'] + "<br> <b>Director:</b> " + tmpResult[i]['director'] + 
			"<br> <b>Casts:</b> " + tmpResult[i]['cast'] +
			"<br> <b>Genre:</b> " + tmpResult[i]['genre'] +
			"<br> <b>Notes:</b> " + tmpResult[i]['notes'] +  
			"<br>" + "<div><table cellspacing='0' cellpadding='0'><tr><td width='14%'>"
		
		);
				
				var ulString ="";
			for(var j = 0; j < tmpResult[i]['runningTimes']['fri'].length; j++) {
				
				ulString += "<ul><li><a href='#'>"
				 + tmpResult[i]['runningTimes']['fri'][j] + "</a></li></ul>";
		
				}
			
				ulString += "</td></tr></table></div><br>"
				
				$('#ulFri').append(ulString);
			
			
			}
			for(var i = 0; i < tmpResult.length; i++) {
			
				$('#ulSat').append("<li>" + "<h3><a href='#'> " + tmpResult[i]['title'] + "</a></h3></li>" +
			"<br>" + "<b>Year:</b> "+ tmpResult[i]['title'] + "<br> <b>Director:</b> " + tmpResult[i]['director'] + 
			"<br> <b>Casts:</b> " + tmpResult[i]['cast'] +
			"<br> <b>Genre:</b> " + tmpResult[i]['genre'] +
			"<br> <b>Notes:</b> " + tmpResult[i]['notes'] +  
			"<br>" + "<div><table cellspacing='0' cellpadding='0'><tr><td width='14%'>"
		
		);
				
				var ulString ="";
			for(var j = 0; j < tmpResult[i]['runningTimes']['sat'].length; j++) {
				
				ulString += "<ul><li><a href='#'>"
				 + tmpResult[i]['runningTimes']['sat'][j] + "</a></li></ul>";
		
				}
			
				ulString += "</td></tr></table></div><br>"
				
				$('#ulSat').append(ulString);
			
			
			}
			for(var i = 0; i < tmpResult.length; i++) {
			
				$('#ulSun').append("<li>" + "<h3><a href='#'> " + tmpResult[i]['title'] + "</a></h3></li>" +
			"<br>" + "<b>Year:</b> "+ tmpResult[i]['title'] + "<br> <b>Director:</b> " + tmpResult[i]['director'] + 
			"<br> <b>Casts:</b> " + tmpResult[i]['cast'] +
			"<br> <b>Genre:</b> " + tmpResult[i]['genre'] +
			"<br> <b>Notes:</b> " + tmpResult[i]['notes'] +  
			"<br>" + "<div><table cellspacing='0' cellpadding='0'><tr><td width='14%'>"
		
		);
				
				var ulString ="";
			for(var j = 0; j < tmpResult[i]['runningTimes']['sun'].length; j++) {
				
				ulString += "<ul><li><a href='#'>"
				 + tmpResult[i]['runningTimes']['sun'][j] + "</a></li></ul>";
		
				}
			
				ulString += "</td></tr></table></div><br>"
				
				$('#ulSun').append(ulString);
			
			
			}
		  }
		  
		  
		  
		});
		$('#bookSeating').on("click", function () {

			$('#seatingLayout').show();
		
			});
		
		});

		$(function () {

			$(".seat").on("click", function() {
			
			
				if (! $(this).hasClass("reserved") ) {
				
						//$(this).addClass("selected");
						$(this).toggleClass("selected");
						
						var countSelected = $(".seat.selected").length;
						
						console.log("Count selected is %d",countSelected);
						
						 $( ".seat.selected" ).each(function( index, element ) {
								console.log("You chose row %d and col %d", $(this).data("row"),$(this).data("col"));
			  });			
			}
			} );
			})

/*  function renderHTML(data){
	var htmlString = "";

for (i = 0; i < 30; i++){
	htmlString += "<p>" + "<h3><a>" + data[i].title  + "</a></h3>" +
	"<br> <b>Year:</b> " + data[i].year + "<br> <b>Director:</b> " + data[i].director + 
	"<br> <b>Casts:</b> " + data[i].cast +
	"<br> <b>Genre:</b> " + data[i].genre + 
	"<br>" + "<div><table cellspacing='0' cellpadding='0'><tr><td width='14%'>";
	
	htmlString += "</p>"

	// if ($(this).click("<a>" + data[i].title + "</a>")){
	// 	localStorage.setItem("new", "set")
	// }

}

	movieContainer.insertAdjacentHTML('beforeend', htmlString);

}  */
  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
