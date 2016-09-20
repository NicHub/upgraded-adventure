"use strict";


$( document ).ready( function() {



  // Ajoute target="_blank" aux liens externes.
  ( function() {
    var internal = location.host.replace( "www.", "" );
    internal = new RegExp( internal, "i" );
    var a = document.getElementsByTagName( 'a' );
    for( var i = 0; i < a.length; i++ ) {
      var href = a[ i ].host;
      if( !internal.test( href ) ) {
        a[ i ].setAttribute( 'target', '_blank' );
      }
    }
  })();


  //
  ( function() {
    var menuLinks = $( "ul.nav li" );
    var
    $.each( menuLinks, function( index, value ){
      console.log( $( this ).children( "a" ).attr( 'href' ) );
      if( $( this ).hasClass( 'active' ) ){
        console.log( "BINGO" );
        return( false );
      }
    });
  })();


  // Navigation page suivante ou précédente avec les flèches
  // gauche-droite du clavier (Mousetrap, https://craig.is/killing/mice)
  // et le balayage gauche-droite de l’écran (jQuery Mobile, https://jquerymobile.com/).
  // !! Il faut discriminer les écrans tactiles des souris.
  // !! L’évènement “swipe” est activé lors d’un “pinch” si les dimensions de
  // la page sont fixées dans la balise <meta> "viewport". Il faut donc laisser
  // la possibilité de zoomer avec deux doigts.
/*  ( function() {

    var navigate_to_page = function( e, button_class ) {
      var target_page = $( button_class ).first().attr( 'href' );
      window.location.href = target_page;
    }

    Mousetrap.bind( 'left',       function( e ) { navigate_to_page( e, '.bouton-prec'    ); });
    Mousetrap.bind( 'esc',        function( e ) { navigate_to_page( e, '.bouton-accueil' ); });
    Mousetrap.bind( 'right',      function( e ) { navigate_to_page( e, '.bouton-suiv'    ); });

    $( 'body' ).on( 'mousedown',  function( e ) { disable_swipe( e ); });
    $( 'body' ).on( 'touchstart', function( e ) { enable_swipe( e );  });

    function disable_swipe( e ) {
      $( 'body' ).off( 'swiperight swipeleft' );
    }
    function enable_swipe( e ) {
      $( 'body' ).on( 'swiperight', function( e ) { navigate_to_page( e, '.bouton-prec' ); });
      $( 'body' ).on( 'swipeleft',  function( e ) { navigate_to_page( e, '.bouton-suiv' ); });
    }
  })();
*/




});