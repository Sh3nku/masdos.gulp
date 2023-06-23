$( function () {

    let lastscrolltop = 0;

    $( window ).on( 'scroll', function () {

        if ( $( window ).scrollTop() > lastscrolltop ) {
            $( 'header' ).addClass( '_hidden' );
        } else {
            $( 'header' ).removeClass( '_hidden' );
        }

        lastscrolltop = $( window ).scrollTop();

    });

    $( '.js-burger-button' ).on( 'click', function () {

        let body = $( 'body' );

        if ( body.hasClass( '_open-menu' ) ) {
            body.removeClass( '_open-menu' );
        } else {
            body.addClass( '_open-menu' );
        }

    });

});