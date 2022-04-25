// object/practice2.js
// 달력만들기.
function showTable(month) {

    let tableTag = "";
    tableTag += `<table border="1">`;
    tableTag += createLabel();

    tableTag += `<tBody>`;

    tableTag += writeBlank(month);
    tableTag += setDay(month);

    tableTag += `</tBody>`;
    tableTag += `</table>`;

    document.write(tableTag);
}

function createLabel() {
    let label = [`SUN`, `MON`, `TUE`, `WED`, `THR`,`FRI`, `SAT`]
    let labelTag = "";
    labelTag = `<thead><tr>`
    label.forEach(function (val) {
        labelTag += `<th>${val}</th>`;
    });
    labelTag += `</tr></thead>`;
    return labelTag;
}

function writeBlank(val) {
    let bk = ``;
    bk += `<tr>`
    let fd = getFirstDay(val);
    console.log(fd);
    for(i = 0; i < fd - 1; i++) {
        bk += `<td></td>`;
    }
    console.log(bk);
    return bk;
}

function setDay(val) {

    let dayTag = "";
    let day = 1;
    let lastDay = getLastDate(val);
    let firstDay = getFirstDay(val);

    for(let i=1; i < lastDay; i++) {
        if ( firstDay % 7 == 0 ) {
            dayTag += `<td>${i}</td></tr><tr>`;
            firstDay++;
        } else {
            dayTag += `<td>${i}</td>`;
            firstDay++;
        }
    }

    dayTag += `</tr>`
    return dayTag;

}

showTable(8);

function getLastDate(val) {
    switch(val) {
      case 1: return 31;
      case 2: return 28;
      case 3: return 31;
      case 4: return 30;
      case 5: return 31;
      case 6: return 30;
      case 7: return 31;
      case 8: return 31;
      case 9: return 30;
      case 10: return 31;
      case 11: return 30;
      case 12: return 31;
    }
  }
  
  function getFirstDay(val) {
    switch(val) {
      case 1: return 7;
      case 2: return 3;
      case 3: return 3;
      case 4: return 6;
      case 5: return 1;
      case 6: return 4;
      case 7: return 6;
      case 8: return 2;
      case 9: return 5;
      case 10: return 7;
      case 11: return 3;
      case 12: return 5;
    }
  }

  