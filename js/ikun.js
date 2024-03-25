var progress = 0;
var isstart = 0;
var px, py;
var map = [[[1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1], [1, 3, 2, 2, 3, 1], [1, 1, 0, 4, 1, 1], [1, 1, 1, 1, 1, 1]],
[[1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 1], [1, 0, 0, 2, 4, 1], [1, 1, 2, 0, 3, 1], [1, 1, 0, 0, 3, 1], [1, 1, 1, 1, 1, 1]],
[[1, 1, 1, 1, 1, 1], [1, 1, 4, 3, 3, 1], [1, 0, 2, 2, 1, 1], [1, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1]]];
var copy = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
var names = [["a1", "a2", "a3", "a4", "a5", "a6"], ["b1", "b2", "b3", "b4", "b5", "b6"], ["c1", "c2", "c3", "c4", "c5", "c6"],
["d1", "d2", "d3", "d4", "d5", "d6"], ["e1", "e2", "e3", "e4", "e5", "e6"], ["f1", "f2", "f3", "f4", "f5", "f6"]];
function load(x) {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (copy[i][j] == 1) {
                document.getElementById(names[i][j]).style.backgroundColor = "whitesmoke";
                document.getElementById(names[i][j]).innerHTML = "";
            }
            else if (copy[i][j] == 2) {
                document.getElementById(names[i][j]).style.backgroundColor = "#6781e0";
                document.getElementById(names[i][j]).innerHTML = "🏀";
            }
            else if (copy[i][j] == 3) {
                document.getElementById(names[i][j]).style.backgroundColor = "#6781e0";
                document.getElementById(names[i][j]).innerHTML = "🥅";
            }
            else if (copy[i][j] == 4) {
                document.getElementById(names[i][j]).style.backgroundColor = "#6781e0";
                document.getElementById(names[i][j]).innerHTML = "🐓";
            }
            else {
                document.getElementById(names[i][j]).style.backgroundColor = "#6781e0";
                document.getElementById(names[i][j]).innerHTML = "";
            }
            document.getElementById(names[i][j]).style.display = "block";
        }
    }
    if (x == 0) {
        px = 3;
        py = 4;
    }
    else if (x == 1) {
        px = 4;
        py = 2;
    }
    else if (x == 2) {
        px = 2;
        py = 1;
    }
    isstart = 1;
}
function continuegame() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            copy[i][j] = map[progress][i][j];
        }
    }
    load(progress);
    for (let i = 0; i < 4; i++)document.getElementsByClassName("menu")[i].style.display = "none";
    for (let i = 0; i < 2; i++)document.getElementsByClassName("side")[i].style.display = "block";
    document.getElementById("pic").style.display = "block";
}

function newgame() {
    progress = 0;
    continuegame();
}
function start(x) {
    progress = x;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            copy[i][j] = map[progress][i][j];
        }
    }
    load(progress);
    document.getElementById("g").style.display = "none";
    for (let i = 0; i < 2; i++)document.getElementsByClassName("side")[i].style.display = "block";
    document.getElementById("pic").style.display = "block";
}
function next() {
    document.getElementById("txz").innerHTML = "kunkun爱篮球";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            copy[i][j] = map[progress][i][j];
        }
    }
    load(progress);
    for (let i = 0; i < 3; i++)document.getElementsByClassName("win")[i].style.display = "none";
    for (let i = 0; i < 2; i++)document.getElementsByClassName("side")[i].style.display = "block";
    document.getElementById("pic").style.display = "block";
}

function select() {
    for (let i = 0; i < 4; i++)document.getElementsByClassName("menu")[i].style.display = "none";
    for (let i = 0; i < 3; i++)document.getElementsByClassName("choice")[i].style.display = "block";
    document.getElementById("g").style.display = "block";
}
function returnselect() {
    document.getElementById("txz").innerHTML = "kunkun爱篮球";
    for (let i = 0; i < 3; i++)document.getElementsByClassName("win")[i].style.display = "none";
    for (let i = 0; i < 3; i++)document.getElementsByClassName("choice")[i].style.display = "block";
    document.getElementById("g").style.display = "block";
}
function back() {
    document.getElementById("txz").innerHTML = "kunkun爱篮球";
    document.getElementById("notlast").innerHTML = "下一关";
    document.getElementById("notlast").onclick = function () { next(progress) };
    for (let i = 0; i < 3; i++)document.getElementsByClassName("win")[i].style.display = "none";
    for (let i = 0; i < 4; i++)document.getElementsByClassName("menu")[i].style.display = "block";
}
function leave() {
    for (let i = 0; i < 6; i++)for (let j = 0; j < 6; j++)document.getElementById(names[i][j]).style.display = "none";
    for (let i = 0; i < 2; i++)document.getElementsByClassName("side")[i].style.display = "none";
    for (let i = 0; i < 4; i++)document.getElementsByClassName("menu")[i].style.display = "block";
    document.getElementById("pic").style.display = "none";
}
function closewindow() {
    window.location.href = "about:blank";
	window.close();
}
function up() {
    if (copy[py - 1][px] == 0 || copy[py - 1][px] == 3) {
        if (copy[py][px] == 4) {
            document.getElementById(names[py][px]).innerHTML = "";
            copy[py][px] = 0;
        }
        else if (copy[py][px] == 6) {
            document.getElementById(names[py][px]).innerHTML = "🥅";
            copy[py][px] = 3;
        }
        if (copy[py - 1][px] == 3) {
            document.getElementById(names[py - 1][px]).innerHTML = "🐓";
            copy[py - 1][px] = 6;
        }
        else if (copy[py - 1][px] == 0) {
            document.getElementById(names[py - 1][px]).innerHTML = "🐓";
            copy[py - 1][px] = 4;
        }
        py--;
    }
    else if ((copy[py - 1][px] == 2 || copy[py - 1][px] == 5) && (copy[py - 2][px] == 0 || copy[py - 2][px] == 3)) {
        if (copy[py][px] == 4) {
            document.getElementById(names[py][px]).innerHTML = "";
            copy[py][px] = 0;
        }
        else if (copy[py][px] == 6) {
            document.getElementById(names[py][px]).innerHTML = "🥅";
            copy[py][px] = 3;
        }
        if (copy[py - 1][px] == 2) {
            document.getElementById(names[py - 1][px]).innerHTML = "🐓";
            copy[py - 1][px] = 4;
        }
        else if (copy[py - 1][px] == 5) {
            document.getElementById(names[py - 1][px]).innerHTML = "🐓";
            copy[py - 1][px] = 6;
        }
        if (copy[py - 2][px] == 0) {
            document.getElementById(names[py - 2][px]).innerHTML = "🏀";
            copy[py - 2][px] = 2;
        }
        else if (copy[py - 2][px] == 3) {
            document.getElementById(names[py - 2][px]).innerHTML = "🎉";
            copy[py - 2][px] = 5;
        }
        py--;
    }
}
function down() {
    if (copy[py + 1][px] == 0 || copy[py + 1][px] == 3) {
        if (copy[py][px] == 4) {
            document.getElementById(names[py][px]).innerHTML = "";
            copy[py][px] = 0;
        }
        else if (copy[py][px] == 6) {
            document.getElementById(names[py][px]).innerHTML = "🥅";
            copy[py][px] = 3;
        }
        if (copy[py + 1][px] == 3) {
            document.getElementById(names[py + 1][px]).innerHTML = "🐓";
            copy[py + 1][px] = 6;
        }
        else if (copy[py + 1][px] == 0) {
            document.getElementById(names[py + 1][px]).innerHTML = "🐓";
            copy[py + 1][px] = 4;
        }
        py++;
    }
    else if ((copy[py + 1][px] == 2 || copy[py + 1][px] == 5) && (copy[py + 2][px] == 0 || copy[py + 2][px] == 3)) {
        if (copy[py][px] == 4) {
            document.getElementById(names[py][px]).innerHTML = "";
            copy[py][px] = 0;
        }
        else if (copy[py][px] == 6) {
            document.getElementById(names[py][px]).innerHTML = "🥅";
            copy[py][px] = 3;
        }
        if (copy[py + 1][px] == 2) {
            document.getElementById(names[py + 1][px]).innerHTML = "🐓";
            copy[py + 1][px] = 4;
        }
        else if (copy[py + 1][px] == 5) {
            document.getElementById(names[py + 1][px]).innerHTML = "🐓";
            copy[py + 1][px] = 6;
        }
        if (copy[py + 2][px] == 0) {
            document.getElementById(names[py + 2][px]).innerHTML = "🏀";
            copy[py + 2][px] = 2;
        }
        else if (copy[py + 2][px] == 3) {
            document.getElementById(names[py + 2][px]).innerHTML = "🎉";
            copy[py + 2][px] = 5;
        }
        py++;
    }
}
function left() {
    if (copy[py][px - 1] == 0 || copy[py][px - 1] == 3) {
        if (copy[py][px] == 4) {
            document.getElementById(names[py][px]).innerHTML = "";
            copy[py][px] = 0;
        }
        else if (copy[py][px] == 6) {
            document.getElementById(names[py][px]).innerHTML = "🥅";
            copy[py][px] = 3;
        }
        if (copy[py][px - 1] == 3) {
            document.getElementById(names[py][px - 1]).innerHTML = "🐓";
            copy[py][px - 1] = 6;
        }
        else if (copy[py][px - 1] == 0) {
            document.getElementById(names[py][px - 1]).innerHTML = "🐓";
            copy[py][px - 1] = 4;
        }
        px--;
    }
    else if ((copy[py][px - 1] == 2 || copy[py][px - 1] == 5) && (copy[py][px - 2] == 0 || copy[py][px - 2] == 3)) {
        if (copy[py][px] == 4) {
            document.getElementById(names[py][px]).innerHTML = "";
            copy[py][px] = 0;
        }
        else if (copy[py][px] == 6) {
            document.getElementById(names[py][px]).innerHTML = "🥅";
            copy[py][px] = 3;
        }
        if (copy[py][px - 1] == 2) {
            document.getElementById(names[py][px - 1]).innerHTML = "🐓";
            copy[py][px - 1] = 4;
        }
        else if (copy[py][px - 1] == 5) {
            document.getElementById(names[py][px - 1]).innerHTML = "🐓";
            copy[py][px - 1] = 6;
        }
        if (copy[py][px - 2] == 0) {
            document.getElementById(names[py][px - 2]).innerHTML = "🏀";
            copy[py][px - 2] = 2;
        }
        else if (copy[py][px - 2] == 3) {
            document.getElementById(names[py][px - 2]).innerHTML = "🎉";
            copy[py][px - 2] = 5;
        }
        px--;
    }
}
function right() {
    if (copy[py][px + 1] == 0 || copy[py][px + 1] == 3) {
        if (copy[py][px] == 4) {
            document.getElementById(names[py][px]).innerHTML = "";
            copy[py][px] = 0;
        }
        else if (copy[py][px] == 6) {
            document.getElementById(names[py][px]).innerHTML = "🥅";
            copy[py][px] = 3;
        }
        if (copy[py][px + 1] == 3) {
            document.getElementById(names[py][px + 1]).innerHTML = "🐓";
            copy[py][px + 1] = 6;
        }
        else if (copy[py][px + 1] == 0) {
            document.getElementById(names[py][px + 1]).innerHTML = "🐓";
            copy[py][px + 1] = 4;
        }
        px++;
    }
    else if ((copy[py][px + 1] == 2 || copy[py][px + 1] == 5) && (copy[py][px + 2] == 0 || copy[py][px + 2] == 3)) {
        if (copy[py][px] == 4) {
            document.getElementById(names[py][px]).innerHTML = "";
            copy[py][px] = 0;
        }
        else if (copy[py][px] == 6) {
            document.getElementById(names[py][px]).innerHTML = "🥅";
            copy[py][px] = 3;
        }
        if (copy[py][px + 1] == 2) {
            document.getElementById(names[py][px + 1]).innerHTML = "🐓";
            copy[py][px + 1] = 4;
        }
        else if (copy[py][px + 1] == 5) {
            document.getElementById(names[py][px + 1]).innerHTML = "🐓";
            copy[py][px + 1] = 6;
        }
        if (copy[py][px + 2] == 0) {
            document.getElementById(names[py][px + 2]).innerHTML = "🏀";
            copy[py][px + 2] = 2;
        }
        else if (copy[py][px + 2] == 3) {
            document.getElementById(names[py][px + 2]).innerHTML = "🎉";
            copy[py][px + 2] = 5;
        }
        px++;
    }
}
function judge() {
    if ((progress == 0 && copy[3][1] == 5 && copy[3][4] == 5) || (progress == 1 && copy[3][4] == 5 && copy[4][4] == 5) || (progress == 2 && copy[1][3] == 5 && copy[1][4] == 5)) {
        for (let i = 0; i < 3; i++)document.getElementsByClassName("win")[i].style.display = "block";
        for (let i = 0; i < 6; i++)for (let j = 0; j < 6; j++)document.getElementById(names[i][j]).style.display = "none";
        for (let i = 0; i < 2; i++)document.getElementsByClassName("side")[i].style.display = "none";
        document.getElementById("pic").style.display = "none";
        document.getElementById("txz").innerHTML = "恭喜过关";
        if (progress != 2) progress++;
        else {
            document.getElementById("notlast").innerHTML = "确定";
            document.getElementById("notlast").onclick = function () { back() };
        }
    }
}
function direction(x) {
    if (x == 119) up();
    else if (x == 115) down();
    else if (x == 97) left();
    else if (x == 100) right();
    if (x == 119 || x == 115 || x == 97 || x == 100) judge();
}
document.addEventListener("keypress", function (e) {
    direction(e.keyCode);
})