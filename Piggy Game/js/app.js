

$('form').onsubmit = () => {
    html($$('.players h2')[0], $$('[type=text]')[0].value);
    html($$('.players h2')[1], $$('[type=text]')[1].value);
    css($('#game-play'), "width:100%");
};

function roll() {
    randomOf(6, () => {
        html($(".dice-container"), `<img class="red" val="${n}" src="files/images/red dice/${n}.png" />`);
    });
    randomOf(6, () => {
        pushAfter($(".dice-container"), `<img class="blue" val="${n}" src="files/images/blue dice/${n}.png" />`);
    });
    $points = parseInt($('.red').getAttribute('val')) + parseInt($('.blue').getAttribute('val'));
    $totalPoints = Number(html($('#game-board h1'))) + $points;
    html($('#game-board h1'), $totalPoints);
}

click($('.p1 button'), () => {
    $current_player = 'p1';
    $('#game-board').style.display = "grid";
    roll();
    switch_content('.players', '.p2');
    $('.p2').style.display = "rgb(40, 0, 40)";
});

click($('.p2 button'), () => {
    $current_player = 'p2';
    switch_content();
    $('#game-board').style.display = "grid";
    roll();
    switch_content('.players', '.p1');
    $('.p1').style.display = "rgb(40, 0, 40)";
});

click($('#game-board h1'), () => {
    $totalScore = Number(html($(`.${$current_player} h1`))) + Number(html($('#game-board h1')));
    html($(`.${$current_player} h1`), $totalScore);
    $('#game-board').style.display = "none";
    html($('#game-board h1'), 0);
});

 // Add functionality to players
 /*
$('.p1 #dbat').addEventListener("click", ()=> {
     op2()
}); function op2() {
    css($('#game-board'), "display:grid"); n = 0;
    $("#game-board h1").addEventListener("click", ()=>{
        p1()
    });
} function p1() {
    $('.p1').classList.replace("active", "inactive"), $('.p2').classList.replace("inactive", "active");
    renderBefore($('.p2 h1'), $('#dbat'));
    $('.p2 #dbat').addEventListener("click", ()=> {op()})
}

function op() {
    css($('#game-board'), "display:grid"); n = 1
    $("#game-board h1").addEventListener("click", ()=>{
        p2()
    })
} function p2() {
    $('.p2').classList.replace("active", "inactive"), $('.p1').classList.replace("inactive", "active");
    renderBefore($('.p1 h1'), $('#dbat'));
    $('.p1 #dbat').addEventListener("click", ()=> {op2()})
}

// Minimize Game-Board
function minimize() {
    css($('#game-board'), "transform: translate(50%, 50%)");
    setTimeout(()=>css($('#game-board'), "display:none"), 500);
}

// Total Points
function calcPoints() {
    if ($('.red').getAttribute('val') == 1 || $('.blue').getAttribute('val') == 1) {
        $score = 0, restrict($('dice-container')); setTimeout(()=>minimize(), 1000);
        if (n == 0) {p1()} else if (n == 1) {p2()}
    } else {
        $getPoints = parseInt($('.red').getAttribute('val')) + parseInt($('.blue').getAttribute('val'));
        $score = eval(Number($("#game-board h1").innerHTML) + $getPoints);
    }
    html($("#game-board h1"), $score);
}

// Assign re-roll functionality
$(".dice-container").addEventListener("click", ()=> {
    swap($(".red"), $die_1[randomize($die_1)]), swap($(".blue"), $die_2[randomize($die_2)]);
    calcPoints();
});
// Add Total-Points To Score
$("#game-board h1").addEventListener("click", ()=>{
    html($('.active h1'), eval(Number($("#game-board h1").innerHTML) + Number($('.active h1').innerHTML)));
    html($("#game-board h1"), 0);
    
    if ($('.active h1').innerHTML >= 150) {
        $('.active h1').innerHTML = 150;
        $('.active h3').innerHTML = "(Winner)";
        widgets.construct('div');
        html(widget, "<img src='files/images/goldcup.png' />"), 
        renderBefore($('.active h1'), widget);
        css($('#dbat'), "display:none");
        setTimeout(()=>{css($('aside'), "display:block")}, 2500);

        if (screen.width <= 900) {
            loop($$('.players'), ()=>{
                css($$('.players')[i], "display:list-item; height:50%; position:relative; width: 100%;");
            });
            css($('#game-play'), "display:block; width:100%;");
        }
    }

    minimize();
});

// Restart Game
$('aside button').onclick = () => {
    window.location.href = 'index.html';
};*/