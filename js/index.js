$(function (){
    const slidepage = new slidePage();
    const $container = $('.works-container').masonry({
        columnWidth: 290,
        itemSelector: '.works',
        isFitWidth: true
    });
    $container.imagesLoaded().progress( function() {
        $container.masonry('layout');
      });
});