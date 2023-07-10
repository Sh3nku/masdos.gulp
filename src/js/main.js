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

    $( '.js-show-on-map' ).on( 'click', function () {

        $( 'html,body' ).stop().animate({
            scrollTop: $('#Map').offset().top - 100
        }, 300);

        var id = $( this ).attr( 'data-id' ),
            lat = +$( this ).attr( 'data-lat' ),
            lng = +$( this ).attr( 'data-lon' ),
            placemark;

        myMapFooterContact.geoObjects.each( function( geoObject ) {
            if ( geoObject.properties.get( 'baloon_id' ) == id ) {
                placemark = geoObject;
            }
        });

        myMapFooterContact.panTo([lat,lng], {

            flying: true,
            duration: 600

        }).then(function () {

            myMapFooterContact.setCenter([lat,lng], 15);

            var position = myMapFooterContact.getGlobalPixelCenter();
            myMapFooterContact.setGlobalPixelCenter([ position[0] + 400, position[1] ]);

            placemark.balloon.open();
        }, this);

    })

});