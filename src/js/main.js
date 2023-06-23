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

});