$(function() {
  var consoleContainerEl = $('#console_container')
    , consoleEl          = $('#console')
    , canvasContainerEl  = $('#canvas_container')
    , bgColorEl          = $('#background_color')
    , strokeColorEl      = $('#stroke_color')
    , lineWidthEl        = $('#line_width')
    , fillColorEl        = $('#fill_color')
    , scaleEl            = $('#scale')
    , menu               = $('.menu')
    , runButtons         = $('.run')
    , editButtons        = $('.edit')
    , examplesEl         = $('#examples');

  var setRunState = function() {
    consoleEl.fadeOut();
    // insert a new canvas into the dom
    var canvas = $('#canvas')[0]
      , ctx    = canvas.getContext("2d");

    ctx.fillStyle   = bgColorEl.val();
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.strokeStyle = strokeColorEl.val();
    ctx.fillStyle   = fillColorEl.val();
    ctx.lineWidth   = lineWidthEl.val();

    // ctx.save();
    // ctx.scale(scaleEl.val(), scaleEl.val());

    eval(consoleEl.val());

    // ctx.restore();
  };

  var setEditState = function() {
    consoleEl.fadeIn();
  };

  var replaceConsole = function() {
    var newConsole = $('<textarea id="console" rows="25" cols="40"></textarea>');
    consoleEl.replaceWith(newConsole);
    consoleEl = newConsole;
  };

  runButtons.click(setRunState);
  editButtons.click(setEditState);

  examplesEl.change(function() {
    var key = examplesEl.val(); //$('#examples option:selected').attr('value');

    if(key && examples[key]) {
      replaceConsole();
      setEditState();

      consoleEl.html(examples[key]);
    }
  });

  _(examples).each(function(evalString, name) {
    // add an option to #examples
    var exampleOption = $("<option value="+name+">"+name+"</option>");
    examplesEl.append(exampleOption);
  });

  $('input').change(setRunState);
  scaleEl.change(setRunState);

  setRunState();
});
