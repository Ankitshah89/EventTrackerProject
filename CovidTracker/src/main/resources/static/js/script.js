window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});
function init() {
	document.caseForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var caseId = document.caseForm.caseId.value;
		if (!isNaN(caseId) && caseId > 0) {
			getCasesById(caseId);
		}
	});
	document.caseForm.listAll.addEventListener('click', function(event){
		event.preventDefault();
		getAllCases();
	});

}

function getCasesById(caseId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/cases/' + caseId );
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			switch (xhr.status) {
			case 200:
				let casesJson = xhr.responseText;
				console.log(casesJson);
				let cases = JSON.parse(casesJson);
				console.log(cases);
				displaySingleCases(cases);
				break;
			case 404:
				displayNotFound("Invalid ID");
				break;
			default:
				displayNotFound("Error occurred: " + xhr.status);
				break;
			}
		}
	}
	xhr.send();
}


function getAllCases() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/cases');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			switch (xhr.status) {
			case 200:
				let casesJson = xhr.responseText;
				let cases = JSON.parse(casesJson);
				displayAllCases(cases);
				break;
			case 404:
				displayNotFound("Invalid  ID");
				break;
			default:
				displayNotFound("Error occurred: " + xhr.status);
				break;
			}
		}
	}
	xhr.send();
}


function displaySingleCases(cases) {
	var dataDiv = document.getElementById('caseData');
	dataDiv.textContent = '';
	//States (Header)
	let h1 = document.createElement('h1');
	h1.textContent = cases.state;
	dataDiv.appendChild(h1);
	//List 
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	//ordered lists
	let li = document.createElement('li');
	li.textContent = 'Positive : ' + cases.positive;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Negative : ' + cases.negative;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'In ICU : ' + cases.inIcu ;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'On Ventilator : ' + cases.onVentilator;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Recovered : ' + cases.recovered;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Death : ' + cases.death ;
	ul.appendChild(li);
	li.textContent = 'Hospitalized : ' + cases.hospitalized;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Total Test Results : ' + cases.totalTestResult ;
	ul.appendChild(li);
	
	
}
	
function displayAllCases(cases) {
let caseDiv = document.getElementById('caseData')

let table = document.createElement('table');
  let tableHead = document.createElement('thead');
  let tableHeaderRow = document.createElement('tr');

  let tableHeaderRowState = document.createElement('th');
  let tableHeaderRowPositive = document.createElement('th');
  let tableHeaderRowNegative = document.createElement('th');
  let tableHeaderRowInIcu = document.createElement('th');
  let tableHeaderRowOnVentilator = document.createElement('th');
  let tableHeaderRowRecovered = document.createElement('th');
  let tableHeaderRowDeath = document.createElement('th');
  let tableHeaderRowHospitalized = document.createElement('th');
  let tableHeaderRowTTR = document.createElement('th');
 
  // give a value to the column headers and append to tr
  tableHeaderRowState.textContent = 'State';
  tableHeaderRowPositive.textContent = 'Positive';
  tableHeaderRowNegative.textContent = 'Negative';
  tableHeaderRowInIcu.textContent = 'In Icu';
  tableHeaderRowOnVentilator.textContent = 'On Ventilator';
  tableHeaderRowRecovered.textContent = 'Recovered';
  tableHeaderRowDeath.textContent = 'Death';
  tableHeaderRowHospitalized.textContent = 'Hospitalized';
  tableHeaderRowTTR.textContent = 'Total Test Results';

  tableHeaderRow.appendChild(tableHeaderRowState);
  tableHeaderRow.appendChild(tableHeaderRowPositive);
  tableHeaderRow.appendChild(tableHeaderRowNegative);
  tableHeaderRow.appendChild(tableHeaderRowInIcu);
  tableHeaderRow.appendChild(tableHeaderRowOnVentilator);
  tableHeaderRow.appendChild(tableHeaderRowRecovered);
  tableHeaderRow.appendChild(tableHeaderRowDeath);
  tableHeaderRow.appendChild(tableHeaderRowHospitalized);
  tableHeaderRow.appendChild(tableHeaderRowTTR);


  tableHead.appendChild(tableHeaderRow);
  table.appendChild(tableHead);
  // create tbody, then loop over states to create each tr and tds 
  let tableBody = document.createElement('tbody');
  cases.forEach((item) => {
    // create table row and table data
	let tableRow = document.createElement('tr');
	
    let tableRowState = document.createElement('td');
	let tableRowPositive = document.createElement('td');
	let tableRowNegative = document.createElement('td');
	let tableRowInIcu = document.createElement('td');
	let tableRowOnVentilator = document.createElement('td');
	let tableRowRecovered = document.createElement('td');
	let tableRowDeath = document.createElement('td');
	let tableRowHospitalized = document.createElement('td');
	let tableRowTTR = document.createElement('td');


    // console.log(item['abbr']);
    tableRowState.textContent = item['state'];
	tableRowPositive.textContent = item['positive'];
	tableRowNegative.textContent = item['negative'];
	tableRowInIcu.textContent = item['inIcu'];
	tableRowOnVentilator.textContent = item['onVentilator'];
	tableRowRecovered.textContent = item['recovered'];
	tableRowDeath.textContent = item['death'];
	tableRowHospitalized.textContent = item['hospitalized'];
	tableRowTTR.textContent = item['totalTestResult'];
    // attach table data to table row, then the row to the overall body
    tableRow.appendChild(tableRowState);
	tableRow.appendChild(tableRowPositive);
	tableRow.appendChild(tableRowNegative);
	tableRow.appendChild(tableRowInIcu);
	tableRow.appendChild(tableRowOnVentilator);
	tableRow.appendChild(tableRowRecovered);
	tableRow.appendChild(tableRowDeath);
	tableRow.appendChild(tableRowHospitalized);
	tableRow.appendChild(tableRowTTR);
	

	tableBody.appendChild(tableRow);
	tableRow.addEventListener('click', function (e){
		getCasesById(item.id);
	 });
  });
  // finally, append the table body to the whole table
  tableBody.border = '1px solid black';
  table.border = '1 px solid black';
  table.appendChild(tableBody);
  caseDiv.appendChild(table);

 

}


function displayNotFound(msg) {
	var caseDiv = document.getElementById('caseData');
	// var actorDiv = document.getElementById('actorData');
	caseDiv.textContent = msg;	
	// actorDiv.textContent = '';
}
