(function ( $ ) {
  $.fn.choridfy = function( options ) {

    // Options.
    var settings = $.extend({
      // Defaults.
      strings: 4,
      frets: 4,
      isHorizontal: true
      // width: 20,
      // height: 20,
      // direction: left-to-right
      // orientation: "horizontal"
    }, options );

    var iVertLimit = (!settings.isHorizontal)?settings.frets:settings.strings-1;
    var iHorLimit = (settings.isHorizontal)?settings.frets:settings.strings-1;
    
    var classOrient = "chord-" + ((settings.isHorizontal)?"hor":"vert");
    // Building chord
    for (var ind = 0; ind < 2; ind++) {
      for (var iVert = 0; iVert < parseInt(iVertLimit); iVert++) {
        for (var iHor = 0; iHor < parseInt(iHorLimit); iHor++) {
          var fret = (settings.isHorizontal)?iVert:iHor;
          var string = (!settings.isHorizontal)?iVert:iHor;
          // console.log(iVert + "/" + iVertLimit+ "; " + iHor + "/" + iHorLimit);
          var chordCell = $( "<div></div>" ).attr("data-fret", fret).attr("data-string", string)
            .addClass("chord-cell").addClass("chord-fret-" + fret).addClass("chord-string-" + string).addClass(classOrient);
          if (((iVert == 0) && (!settings.isHorizontal)) || ((iHor == 0) && (settings.isHorizontal))) {
            chordCell.addClass("chord-fret-first");
          }
          if (((iHor == 0) && (!settings.isHorizontal)) || ((iVert == 0) && (settings.isHorizontal))) {
            chordCell.addClass("chord-string-first");
          }
          if (((iVert == iVertLimit-1) && (!settings.isHorizontal)) || ((iHor == iHorLimit-1) && (settings.isHorizontal))) {
            chordCell.addClass("chord-fret-last");
          }
          if (((iVert == iVertLimit-1) && (settings.isHorizontal)) || ((iHor == iHorLimit-1) && (!settings.isHorizontal))) {
            chordCell.addClass("chord-string-last");
          }
          if (ind == 1) {
            chordCell.addClass("transparent");
          }
          this.append( chordCell );
          chordCell.empty();
        };
      };
    };
    return this;
  };
}( jQuery ));