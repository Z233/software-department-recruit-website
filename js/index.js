
function initIndexPage() {
    const sp = window.sp = new slidePage();
    const $container = $('.works-container').masonry({
        columnWidth: 300,
        itemSelector: '.works',
        isFitWidth: true
    });
    $container.imagesLoaded().progress(function () {
        $container.masonry('layout');
    });
    $("html, body").height(window.innerHeight);
};


document.addEventListener('DOMContentLoaded', function () {
    function createLink(text, href, newTab) {
        var link = { tag: 'a.nav-link', href: href, text: text };
        if (newTab)
            link.target = '_blank';
        if (window.location.pathname.endsWith(href)
                || (href == 'index.html' && window.location.pathname.endsWith('/')))
            link.tag += '.active';
        return link;
    }

    var nav = webfx.buildDOM({
        tag: 'nav.nav.nav-masthead.d-flex.mx-3.my-2',
        child: [
            createLink('首页', 'index.html'),
            createLink('报名', 'form.html'),
            createLink('FAQ', 'faq.html'),
            createLink('软件部WIKI', 'https://wiki.dsstudio.tech/', true),
            createLink('软件部OJ', 'https://oj.dsstudio.tech/', true),
        ]
    });

    document.body.insertBefore(nav, document.body.firstChild);
});