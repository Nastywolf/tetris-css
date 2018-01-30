function keyPress( key )
{
  var tetrimino = $("tetromino");
  var gauche = tetromino.style.left;
    // gestion des déplacements de la forme et de la rotation
    switch ( key )
    {
        case 'left':
            // if ( valid( -1 ) )
                --currentX;
                tetromino.left = gauche-35;
            break;

        case 'right':
            // if ( valid( 1 ) )
                ++currentX;
                tetromino.left = gauche+35;
            break;

        case 'down':
            // if ( valid( 0, 1 ) )
                ++currentY;
                tetromino.top = top+35;
            break;

        // case 'rotate':
        //     var rotated = rotate( current );
        //
        //     if ( valid( 0, 0, rotated ) )
        //         current = rotated;
        //     break;
    }
}
