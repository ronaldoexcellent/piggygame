loadApp();
$get_names = $$('#start form [type=text]');
submit($('form'), () => {
    html($('.p1 h2'), $get_names[0].value);
    html($('.p2 h2'), $get_names[1].value);
    css($('#game-play'), "width:100%");
});

function roll() {
    randomOf(6, () => {
        html($(".dice-container"), `<img class="red" val="${n}" src="files/images/red dice/${n}.png" />`);
    });
    randomOf(6, () => {
        pushAfter($(".dice-container"), `<img class="blue" val="${n}" src="files/images/blue dice/${n}.png" />`);
    });
    $points = parseInt(attrib($('.red'), 'val')) + parseInt(attrib($('.blue'),'val'));
    if (parseInt(attrib($('.red'), 'val')) == 1 || parseInt(attrib($('.blue'),'val')) == 1) {
        $totalPoints = 0;
        html($('#game-board h1'), $totalPoints);
        setTimeout(()=>summary(), 1500);
    } else {
        $totalPoints = Number(html($('#game-board h1'))) + $points;
        html($('#game-board h1'), $totalPoints);
    }
}

function summary() {
    $totalScore = Number(html($(`.${$current_player} h1`))) + Number(html($('#game-board h1')));
    html($(`.${$current_player} h1`), $totalScore);
    $('#game-board').style.display = "none";
    html($('#game-board h1'), 0);
    $change_player = setTimeout(()=> {
        switch_content('.players', $next_player);
        removeContent($('title'), `${$next_player} - `);
    }, 1500);
    if (html($(`.${$current_player} h1`)) > 149) {
        clearTimeout($change_player);
        app.messages();
        widgets.construct('div'), css(widget, 'width:100%; text-align:center;'), render($('.CodeJS-Console'), widget);
        $d1 = `<h3>${html($('.p1 h2'))}:</h3> <h1>${html($('.p1 h1'))}</h1>`;
        $d2 = `<h3>${html($('.p2 h2'))}:</h3> <h1>${html($('.p2 h1'))}</h1>`;
        $finalMSG = `${$d1}<br>${$d2}<br><h1>${html($(`.${$current_player} h2`))} wins!</h1> <br> <button onclick="window.location.replace('index.html')">Restart</button>`;
        html($('.CodeJS-Console div'), $finalMSG);
    }
}

click($(".dice-container"), ()=> roll());

click($('.p1 button'), () => {
    hide($('.p1 button'));
    unhide($('.p2 button'));
    $current_player = 'p1';
    $next_player = '.p2';
    $('#game-board').style.display = "grid";
    roll();
});

click($('.p2 button'), () => {
    hide($('.p2 button'));
    unhide($('.p1 button'));
    $current_player = 'p2';
    $next_player = '.p1';
    $('#game-board').style.display = "grid";
    roll();
});

click($('#game-board h1'), () => summary());
