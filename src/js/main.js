$( function () {

    document.querySelectorAll( 'input[type=tel]' ).forEach( e => IMask( e, {
        mask: '+{7} ( 000 ) 000-00-00'
    }));

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

    $( '.js-check-button' ).on( 'change', function () {

        let target_id = $( this ).data( 'target' ),
            button = $( '[data-check_button="' + target_id + '"]' );

        if ( $( this ).prop( 'checked' ) === true ) {
            button.prop( 'disabled', false );
        } else {
            button.prop( 'disabled', true );
        }

    });

    $( document ).on( 'submit', 'form[novalidate]', function ( e ) {

        e.preventDefault();

    });

});