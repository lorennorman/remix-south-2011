var Oscillator = function(min, max, step) {
  var current = (min+max)/2
    , growing = true;

  return function() {
    if(growing) {
      current += step;

      if(current >= max) {
        current -= (current - max);
        growing = false;
      }
    } else {
      current -= step;

      if(current <= min) {
        current += (current - min);
        growing = true;
      }
    }

    return current;
  }
};

$(function() {
  var consoleContainerEl = $('#console_container')
    , consoleEl          = $('#console')
    , canvasContainerEl  = $('#canvas_container')
    , bgColorEl          = $('#background_color')
    , strokeColorEl      = $('#stroke_color')
    , lineWidthEl        = $('#line_width')
    , fillColorEl        = $('#fill_color')
    , fpsEl              = $('#fps')
    , scaleEl            = $('#scale')
    , menu               = $('.menu')
    , basicMenuItems     = $('.control.basic', menu)
    , advancedMenuItems  = $('.control.advanced', menu)
    , stopButtons        = $('.stop')
    , runButtons         = $('.run')
    , editButtons        = $('.edit')
    , examplesEl         = $('#examples')
    , advancedToggle     = $('#advanced_toggle')
    , sandboxState       = 'basic';

  var setRunState = function() {
    consoleEl.fadeOut();
    // insert a new canvas into the dom
    var canvas = $('#canvas')[0]
      , ctx    = canvas.getContext("2d");

    if(sandboxState == 'basic') {
      ctx.fillStyle   = bgColorEl.val();
      ctx.fillRect(0,0,canvas.width, canvas.height);
      ctx.strokeStyle = strokeColorEl.val();
      ctx.fillStyle   = fillColorEl.val();
      ctx.lineWidth   = lineWidthEl.val();

      ctx.save();
      ctx.scale(scaleEl.val(), scaleEl.val());
    } else if(sandboxState == 'advanced') {
      // anything to prep before the app code?
    }

    eval(consoleEl.val());

    if(sandboxState == 'basic') {
      ctx.restore();
    } else if(sandboxState == 'advanced') {
      var functionsToCall = [];

      if(update == undefined) {
        var update;
        console.log("no update method");
      } else {
        functionsToCall.push(update);
      }

      if(render == undefined) {
        var render;
        console.log("no render method");
      } else {
        functionsToCall.push(render);
      }

      ctx.save();
      if(setup == undefined) {
        var setup;
      } else {
        setup();
      }

      startRenderLoop(functionsToCall, function() {
        if(teardown == undefined) {
          var teardown;
        } else {
          teardown();
        }

        ctx.restore();
      });
    }
  };

  var startRenderLoop = function(functionsToCall, onStop) {
    if(_(functionsToCall).isEmpty()) {
      return;
    }

    var framesPerSecond      = fpsEl.val()
      , millisecondsPerFrame = 1000 / framesPerSecond;

    intervalIds = _(functionsToCall).map(function(func) {
      return setInterval(func, millisecondsPerFrame);
    });

    stopButtons.attr("disabled", false);
    runButtons.attr("disabled", true);

    stopButtons.one('click', function() {
      stopButtons.attr("disabled", true);
      runButtons.attr("disabled", false);
      _(intervalIds).each(function(id) {
        clearInterval(id);
      });

      onStop();
    });
  }

  var setEditState = function() {
    consoleEl.fadeIn();
  };

  var replaceConsole = function() {
    var newConsole = $('<textarea id="console" rows="25" cols="40"></textarea>');
    consoleEl.replaceWith(newConsole);
    consoleEl = newConsole;
  };

  var checkAdvancedState = function() {
    if(advancedToggle.is(':checked')) {
      sandboxState = 'advanced';
      basicMenuItems.fadeOut(function() {
        advancedMenuItems.fadeIn();
      });
    } else {
      sandboxState = 'basic';
      advancedMenuItems.fadeOut(function() {
        basicMenuItems.fadeIn();
      });
    }
  };

  runButtons.click(setRunState);
  editButtons.click(setEditState);

  checkAdvancedState();
  advancedToggle.click(checkAdvancedState);

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

  $('input', menu).change(setRunState);
  scaleEl.change(setRunState);

  setRunState();
});
