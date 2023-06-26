/*if (!Modernizr.adownload) 
{
    var $link = $('a');
      
    $link.each(function() 
    {
        var $download = $(this).attr('download');
      
        if (typeof $download !== typeof undefined && $download !== false) 
        {
        var $el = $('<div>').addClass('download-instruction').text('Right-click and select "Download Linked File"');
        $el.insertAfter($(this));
        }
    });
}*/

document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.querySelector('.buttonDownload');
  
    downloadButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Avvia l'animazione
      downloadButton.classList.add('downloading');
  
      // Aggiungi un ritardo per mostrare l'animazione
      setTimeout(function() {
        // Rimuovi l'animazione dopo un certo periodo di tempo
        downloadButton.classList.remove('downloading');
  
        // Avvia il download del file
        var fileURL = downloadButton.getAttribute('href');
        var fileName = downloadButton.getAttribute('download');
        var link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        link.click();
      }, 2000);
    });
  });