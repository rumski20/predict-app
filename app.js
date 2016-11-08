// app.js


// paste raw value bins
var bins = document.getElementsByClassName("pasteValues");
for (var i = 0; i < bins.length; ++i) {
    bins[i].onchange = handleValues;
}

// set column click listeners for table sorting
var cols = document.getElementsByClassName("tg-header");
for (var i = 0; i < cols.length; ++i) {
    // add sort table listener
    cols[i].onclick = headerSortHandler;
}

// create caret nodes
var caretUp = document.createElement('span');
caretUp.className = "fontawesome-sort-up";
var caretDown = document.createElement('span');
caretDown.className = "fontawesome-sort-down";




function headerSortHandler(event) {
    event.stopPropagation();
    console.log(this);
    // add caret indicators, get direction of sort
    var dir = indicateWithCaret(this);
    // get parent
    var table = getTableParent(this);
    // get column index
    var colIndex = Array.prototype.indexOf.call(this.parentNode.children, this);
    // sort table
    sortTable(table, colIndex, dir);
    //symbolize column
    symbolizeColumn(this, table, colIndex);
}

function handleValues(event) {
    console.log(this.value);
    var tempArray = this.value.split('\n'),
        valArray = [];
    console.log(tempArray);
    tempArray.forEach(
        function(val, ind) {
            if (val.length > 1) {
                // alter array based on it's sequence
                // and add it to list of lists
                var splitVals = val.split(/\t/);
                console.log(splitVals);
                // check for full players
                if (splitVals.length > 1) {
                    valArray.push(cleanUpValues(splitVals));
                }
            }
        }
    );
    // alter array depending on where it was copied from
    // valArray = cleanUpValues(valArray);

    console.log(valArray);
    // check for which one
    if (this.id == 'batBin') {
        clearTable('bat');
        populateTable(valArray, 'bat');
    } else {
        clearTable('pit');
        populateTable(valArray, 'pit');
    }
}

function populateTable(data, type) {
    // data is an array of arrays
    // Find a <table> element with id="myTable":
    var table = document.getElementById(type + "Table").tBodies[0],
        hasFieldingData = ['1B', '2B', '3B', 'SS', 'LF', 'RF', 'CF'];
    // loop through formatted data
    data.forEach(
        function(player, ind) { // player is an array of values
            var row = table.insertRow(-1); // insert row
            row.insertCell(0).innerHTML = player[0];
            row.insertCell(1).innerHTML = player[1];
            row.insertCell(2).innerHTML = player[3];
            row.insertCell(3).innerHTML = player[4];
            if (type == 'bat') {
                row.insertCell(4).innerHTML = roundy(predict(player, 'AVG'), 3);
                row.insertCell(5).innerHTML = roundy(predict(player, 'OBP'), 3);
                row.insertCell(6).innerHTML = roundy(predict(player, 'SLG'), 3);
                row.insertCell(7).innerHTML = roundy(predict(player, 'wOBA'), 3);
                // wRAA = wOBA - leagueOBA(0.3) / 1 * PA
                // row.insertCell(8).innerHTML = roundy((predict(player, 'wOBA') - 0.3) / 1 * predict(player, 'PA'), 2);
                row.insertCell(8).innerHTML = roundy(predict(player, 'nSB'), 2);
                // check for fielding types
                if (hasFieldingData.indexOf(player[1]) != -1) {
                    row.insertCell(9).innerHTML = roundy(predict(player, 'FRAA'+'_'+player[1]), 3);
                }
                // if not insert -999
                else {
                    row.insertCell(9).innerHTML = 0.00;
                }

            } else { // pitching
                row.insertCell(4).innerHTML = player[5];
                row.insertCell(5).innerHTML = roundy(predict(player, 'WHIP'), 2);
                row.insertCell(6).innerHTML = roundy(predict(player, 'FIP'), 2);
                row.insertCell(7).innerHTML = roundy(predict(player, 'SOBB'), 2);
                // WAR = Mystery variable * IP / 9
                row.insertCell(8).innerHTML = roundy(predict(player, 'Myst') * predict(player, 'IP') / 9, 2);
            }
        }
    );
}

function predict(playerData, stat) {
    console.log(playerData, stat);
    var predValue = data[stat].Intercept;
    for (var rating in data[stat]) {
        switch (rating) {
            // batting
            case 'DU':
                predValue += data[stat].DU * parseInt(playerData[3]);
                break;
            case 'HE':
                predValue += data[stat].HE * parseInt(playerData[4]);
                break;
            case 'CN':
                predValue += data[stat].CN * parseInt(playerData[5]);
                break;
            case 'PW':
                predValue += data[stat].PW * parseInt(playerData[6]);
                break;
            case 'LH':
                predValue += data[stat].LH * parseInt(playerData[7]);
                break;
            case 'RH':
                predValue += data[stat].RH * parseInt(playerData[8]);
                break;
            case 'BE':
                predValue += data[stat].BE * parseInt(playerData[9]);
                break;
            case 'SP':
                predValue += data[stat].SP * parseInt(playerData[10]);
                break;
            case 'RA':
                predValue += data[stat].RA * parseInt(playerData[11]);
                break;
            case 'GL':
                predValue += data[stat].GL * parseInt(playerData[12]);
                break;
            case 'AS':
                predValue += data[stat].AS * parseInt(playerData[13]);
                break;
            case 'AA':
                predValue += data[stat].AA * parseInt(playerData[14]);
                break;
            // pitching
            case 'ST':
                predValue += data[stat].ST * parseInt(playerData[5]);
                break;
            case 'CT':
                predValue += data[stat].CT * parseInt(playerData[6]);
                break;
            case 'LH.1':
                predValue += data[stat]['LH.1'] * parseInt(playerData[7]);
                break;
            case 'RH.1':
                predValue += data[stat]['RH.1'] * parseInt(playerData[8]);
                break;
            case 'VE':
                predValue += data[stat].VE * parseInt(playerData[9]);
                break;
            case 'GB':
                predValue += data[stat].GB * parseInt(playerData[10]);
                break;
            case 'P1':
                predValue += data[stat].P1 * parseInt(playerData[11]);
                break;
            case 'P2':
                predValue += data[stat].P2 * parseInt(playerData[12]);
                break;
            case 'P3':
                predValue += data[stat].P3 * parseInt(playerData[13]);
                break;
            case 'P5':
                predValue += data[stat].P5 * parseInt(playerData[14]);
                break;
        }
        console.log(rating, predValue);
    }
    console.log(predValue);
    return predValue;
}

function roundy(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function clearTable(type) {
    var table = document.getElementById(type + "Table").tBodies[0];
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

// GM office = Player, Age, Pos, %
// FA, trade block = Player, Frn, Pos, Age
// Waiver = Player, Frn, Pos, %, Age
// IFA = Player, Pos, Age
// Player Search = Player, Lvl, Frn, Pos, %, Age
// Trades = Player, Lvl, Pos, %, Age
// Am Draft = Rnk, Player, Pos, B, T, Age

// Try to return in format: Player, Pos, Age, Dur, Health
// swap position in array: list[x] = [list[y],list[y]=list[x]][0]

function cleanUpValues(playerData) {
    var levelArr = ['RL','LoA','HiA','AA','AAA','ML','---'],
        posArr = ['C','1B','2B','SS','3B','LF','CF','RF','DH','P'];
    console.log('before', playerData);
    // check for GM office
    if (/\d{2}/.test(playerData[1])) {
        playerData[2] = [playerData[1], playerData[1] = playerData[2]][0];
        playerData.splice(3,1);
        console.log(playerData);
        return playerData;
    }
    // player search, trades
    else if (levelArr.indexOf(playerData[1]) > -1) {
        playerData.splice(1,1);  // remove lvl
        // trades
        if (posArr.indexOf(playerData[1]) > -1) {
            playerData.splice(2,1);
            console.log(playerData);
            return playerData;
        } else {  // player search
            playerData.splice(1,1);
            playerData.splice(2,1);
            console.log(playerData);
            return playerData;
        }
    }
    // check for FA, Waiver
    else if (posArr.indexOf(playerData[2]) > -1) {
        // //Am Draft
        if (/^\d+$/.test(playerData[0])) {
            console.log('before', playerData);
            playerData.splice(0,1);
            playerData.splice(2,2);
            console.log('after', playerData);
            return playerData;
        } else if (playerData.length >= 21) { // Waiver
            playerData.splice(1,1);  // remove frn
            playerData.splice(2,1);  // remove %
            console.log(playerData);
            return playerData;
        } else {  // FA
            playerData.splice(1,1);  // remove frn, fatigue
            console.log(playerData);
            return playerData;
        }
    } else {
        console.log(playerData);
        return playerData;
    }
}

// sort table by row
// http://stackoverflow.com/questions/14267781/sorting-html-table-with-js
function sortTable(table, col, reverse) {
    // console.log(table, col, reverse);
    var tb = table.tBodies[0], // use `<tbody>` to ignore `<thead>` and `<tfoot>` rows
    tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
    i;
    // console.log(tb);
    reverse = -((+reverse) || -1);
    tr = tr.sort(function(a, b) { // sort rows
        return reverse // `-1 *` if want opposite order
            * (a.cells[col].textContent.trim() // using `.textContent.trim()` for test
                .localeCompare(b.cells[col].textContent.trim())
            );
    });
    for (i = 0; i < tr.length; ++i) tb.appendChild(tr[i]); // append each row in order
}

// get table parent of clicked header
function getTableParent(element) {
    var parent = element.parentNode;
    var tagName = "table";

    while (parent) { //Loop through until you find the desired parent tag name
        if (parent.tagName && parent.tagName.toLowerCase() == tagName) {
            return parent;
        } else {
            parent = parent.parentNode;
        }
    }
}

// add or remove carets as necessary
function indicateWithCaret(el) {
    var direction;
    // check if header already has one
    if ( el.contains(caretUp) ) {
        el.replaceChild(caretDown, caretUp);
        return direction = true;
    } else if ( el.contains(caretDown) ) {
        el.replaceChild(caretUp, caretDown);
        return direction = false;
    } else {
        el.appendChild(caretDown);
        return direction = true;
    }
}

// provide some symbology for column based on sorted values
// uses https://github.com/anomal/RainbowVis-JS
function symbolizeColumn(el, table, column) {
    var rainbow = new Rainbow();
    rainbow.setSpectrum('#fd9196', '#9aff9b');
    var rows = table.rows.length - 1;
    // normalize values along spectrum (0-100)
    var scaledVals = rescale(table, column, rows);
    // loop through cells and change background color
    // start at one to skip the header
    for (var i = 1; i <= rows; i++) {
        // get hex color
        var hex = '#' + rainbow.colourAt(scaledVals[i-1]);
        // get cell
        var cell = table.getElementsByTagName('tr')[i].getElementsByTagName('td')[column];
        cell.style.background = hex;
        cell.style.color = '#000000';
    }
}

// rescales the array of values to the range of 0-100
function rescale(table, column, numRows) {
    var colStats = getColumnValues(table, column, numRows),
        output = [],
        newMax = 100,
        newMin = 0;
    for( var i=0; i<numRows; i++ ) {
        var newVal = (newMax - newMin) / (colStats.max - colStats.min) * (colStats.vals[i] - colStats.min) + newMin;
        output.push(newVal);
    }
    // console.log(colStats, output);
    return output;
}

function getColumnValues(table, column, numRows) {
    var vals = [],
        stats = {};
    for ( var i=1; i<=numRows; i++ ) {
        vals.push(parseFloat(table.getElementsByTagName('tr')[i].getElementsByTagName('td')[column].innerHTML));
    }
    stats.vals = vals;
    stats.max = Math.max.apply( Math, vals ),
    stats.min = Math.min.apply( Math, vals );
    return stats;
}