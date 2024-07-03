function iniRound(titolo, da, das, db, dbs, l, round) {

    var c = document.createElement("div");
    c.setAttribute("class", "poll");

    var h = document.createElement("h3");
    h.setAttribute("class", "poll__title");
    h.classList.add("hidden");
    h.textContent = titolo;

    var br = document.createElement("ul");
    br.setAttribute("class", "poll__row");
    br.setAttribute("data-poll", titolo);

    for (var i = 0; i < l; i++) {
        var mc = document.createElement("li");
        var code = titolo.replace('-', '')
        mc.setAttribute('id', 'p' + code + (i + 1));

        if (da[i] || db[i]) {
            var m = document.createElement("ul");
            m.setAttribute("class", "poll__match");
        }

        if (da[i]) {
            var a = document.createElement("li");
            a.setAttribute("class", "poll__cell");
            // a.textContent = da[i];
            m.appendChild(a);

            var at = document.createElement("span");
            at.setAttribute("class", "poll__team");
            at.textContent = da[i];
            a.appendChild(at);

            var as = document.createElement("span");
            as.setAttribute("class", "poll__score");
            as.textContent = das[i];
            a.appendChild(as);

        }

        if (db[i]) {
            var b = document.createElement("li");
            b.setAttribute("class", "poll__cell");
            // b.textContent = db[i];
            m.appendChild(b);

            var bs = document.createElement("span");
            bs.setAttribute("class", "poll__score");
            bs.textContent = dbs[i];
            b.appendChild(bs);

            var bt = document.createElement("span");
            bt.setAttribute("class", "poll__team");
            bt.textContent = db[i];
            b.appendChild(bt);
        }

        mc.appendChild(m);
        br.appendChild(mc);
        c.appendChild(h);
        c.appendChild(br);
    }

    if (document.getElementById("round" + round)) {
        var r = document.getElementById("round" + round);
        r.setAttribute("class", "round");
        //console.log(r);
    } else {
        var r = document.createElement("div");
        r.setAttribute("id", "round" + round);
        r.setAttribute("class", "round");
        //console.log(r);
    }
    var t = document.getElementById("torneo");
    r.appendChild(c);
    t.appendChild(r);
}

function iniResult(titolo, da, l, poll) {
    const c = document.querySelector('[data-poll="' + poll + '"]');

    var h = document.createElement("h3");
    h.setAttribute("class", "poll__title");
    h.classList.add("hidden");
    h.textContent = titolo;

    var pr = document.createElement("ul");
    pr.setAttribute("class", "poll__row " + titolo);
    pr.setAttribute("data-poll", titolo);

    for (var i = 0; i < l; i++) {
        if (da[i]) {
            var a = document.createElement("li");
            a.setAttribute("class", "poll__cell");
            var ac = document.createElement("span");
            ac.textContent = da[i];
            pr.appendChild(a);
            a.appendChild(ac);
        }
        c.insertAdjacentElement('afterend', pr);
        c.insertAdjacentElement('afterend', h);
    }
}

function iniLinktMatch(codice, type) {

    var clone = document.querySelector('#' + codice[0]).cloneNode(true);
    var nm = document.querySelector('.' + type + '-match');
    nm.querySelector('a').setAttribute('href', '#' + codice[0]);
    clone.setAttribute('id', type + '-' + codice[0]);

    document.querySelector('#' + type + '-match').appendChild(clone);
}

function iniTorneo(dataByColumn) {
    iniRound("0-0", dataByColumn["poll 0-0 squadra A"], dataByColumn["poll 0-0 squadra A punteggio"], dataByColumn["poll 0-0 squadra B"], dataByColumn["poll 0-0 squadra B punteggio"], 8, 1);

    iniRound("0-1", dataByColumn["poll 0-1 squadra A"], dataByColumn["poll 0-1 squadra A punteggio"], dataByColumn["poll 0-1 squadra B"], dataByColumn["poll 0-1 squadra B punteggio"], 4, 2);
    iniRound("1-0", dataByColumn["poll 1-0 squadra A"], dataByColumn["poll 1-0 squadra A punteggio"], dataByColumn["poll 1-0 squadra B"], dataByColumn["poll 1-0 squadra B punteggio"], 4, 2);

    iniRound("0-2", dataByColumn["poll 0-2 squadra A"], dataByColumn["poll 0-2 squadra A punteggio"], dataByColumn["poll 0-2 squadra B"], dataByColumn["poll 0-2 squadra B punteggio"], 2, 3);
    iniRound("1-1", dataByColumn["poll 1-1 squadra A"], dataByColumn["poll 1-1 squadra A punteggio"], dataByColumn["poll 1-1 squadra B"], dataByColumn["poll 1-1 squadra B punteggio"], 4, 3);
    iniRound("2-0", dataByColumn["poll 2-0 squadra A"], dataByColumn["poll 2-0 squadra A punteggio"], dataByColumn["poll 2-0 squadra B"], dataByColumn["poll 2-0 squadra B punteggio"], 2, 3);

    iniResult("lose", dataByColumn["lose 1"], 2, '0-2');
    iniRound("1-2", dataByColumn["poll 1-2 squadra A"], dataByColumn["poll 1-2 squadra A punteggio"], dataByColumn["poll 1-2 squadra B"], dataByColumn["poll 1-2 squadra B punteggio"], 3, 4);
    iniRound("2-1", dataByColumn["poll 2-1 squadra A"], dataByColumn["poll 2-1 squadra A punteggio"], dataByColumn["poll 2-1 squadra B"], dataByColumn["poll 2-1 squadra B punteggio"], 3, 4);
    iniResult("win", dataByColumn["win 1"], 2, '2-0');


    iniResult("lose", dataByColumn["lose 2"], 4, '1-2');
    iniRound("2-2", dataByColumn["poll 2-2 squadra A"], dataByColumn["poll 2-2 squadra A punteggio"], dataByColumn["poll 2-2 squadra B"], dataByColumn["poll 2-2 squadra B punteggio"], 4, 5);
    iniResult("win", dataByColumn["win 2"], 4, '2-1');

    iniResult("win", dataByColumn["win 3"], 4, '2-2');
    iniResult("lose", dataByColumn["lose 3"], 4, '2-2');

    iniRound("semifinali road to 13", dataByColumn["semifinali r13 squadra A"], dataByColumn["semifinali r13 squadra A punteggio"], dataByColumn["semifinali r13 squadra B"], dataByColumn["semifinali r13 squadra B punteggio"], 2, 7);
    iniRound("finali road to 13", dataByColumn["finali r13 squadra A"], dataByColumn["finali r13 squadra A punteggio"], dataByColumn["finali r13 squadra B"], dataByColumn["finali r13 squadra B punteggio"], 1, 8);

    iniRound("quarti", dataByColumn["quarti squadra A"], dataByColumn["quarti squadra A punteggio"], dataByColumn["quarti squadra B"], dataByColumn["quarti squadra B punteggio"], 4, 6);
    iniRound("semifinali", dataByColumn["semifinali squadra A"], dataByColumn["semifinali squadra A punteggio"], dataByColumn["semifinali squadra B"], dataByColumn["semifinali squadra B punteggio"], 2, 7);
    iniRound("finali", dataByColumn["finali squadra A"], dataByColumn["finali squadra A punteggio"], dataByColumn["finali squadra B"], dataByColumn["finali squadra B punteggio"], 1, 8);
	
	iniLinktMatch(dataByColumn["partita corrente"], 'current');
    iniLinktMatch(dataByColumn["prossima partita"], 'next');
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('risultati.csv')
        .then(response => response.text())
        .then(data => {
            const rows = Papa.parse(data, {
                header: true
            }).data;
            const columnNames = Object.keys(rows[0]);

            let dataByColumn = {};
            columnNames.forEach(columnName => {
                dataByColumn[columnName] = [];
            });

            for (let i = 0; i < rows.length; i++) {
                const rowData = rows[i];
                columnNames.forEach(columnName => {
                    let limit = 8;
                    if (columnName.includes("poll 0-1") || columnName.includes("poll 1-0") || columnName.includes("poll 1-1")) {
                        limit = limit / 2;
                    } else if (columnName.includes("poll 2-0") || columnName.includes("poll 0-2")) {
                        limit = limit / 4;
                    }
                    if (dataByColumn[columnName].length < limit) {
                        dataByColumn[columnName].push(rowData[columnName]);
                    }
                });
            }
            iniTorneo(dataByColumn);
            //console.log(dataByColumn);
        });
});
