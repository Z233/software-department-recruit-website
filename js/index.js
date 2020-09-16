
function initIndexPage(){
    const sp = window.sp = new slidePage();
    const $container = $('.works-container').masonry({
        columnWidth: 300,
        itemSelector: '.works',
        isFitWidth: true
    });
    $container.imagesLoaded().progress( function() {
        $container.masonry('layout');
    });
};