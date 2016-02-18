$('.knoppen').each( function() {
	var thisButton = $(this);
	var activeButton = thisButton.find('li.actief');
	var link = activeButton.find('a');
	var activePanel = $(link.attr('href'));
	
	thisButton.on('click', 'a', function(e){
		e.preventDefault();
		var link = $(this);
// 			alert(link.attr('href'));
		var ID = this.hash;
// 			alert(ID);

		if(ID && !link.parent().is('.actief')){
			activePanel.removeClass('actief');
			activeButton.removeClass('actief');
			
			activePanel = $(ID).addClass('actief');
			activeButton = link.parent().addClass('actief');
		}
	})
});

// unobrusive weghalen van niet actieve vensters
$('.paneel').css('display','none')