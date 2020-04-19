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

	document.newForm.submit.addEventListener('click', function(event) {
		event.preventDefault();
		let form = document.newForm;
		let cases = {
				state: form.state.value,
				positive: form.positive.value,
				negative: form.negative.value,
				inIcu: form.inIcu.value,
				onVentilator: form.onVentilator.value,
				recovered: form.recovered.value,
				death: form.death.value,
				hospitalized: form.hospitalized.value,
				totalTestResult: form.totalTestResults.value
		};
		createCases(cases);
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
	li.textContent = 'Death : ' + cases.death;
	ul.appendChild(li);
	li.textContent = 'Hospitalized : ' + cases.hospitalized;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Total Test Results : ' + cases.totalTestResult ;
	ul.appendChild(li);
	
	let editButton = document.createElement('button');
	editButton.innerHTML = "Edit Case";
	dataDiv.appendChild(editButton);
	editButton.addEventListener('click',function(event){
		event.preventDefault();
		showUpdateForm(cases);
	});

	document.getElementById('update').addEventListener('click',function(event){
		event.preventDefault();
		console.log("need to update"+ cases.id);
		// let form = document.getElementById('updateForm');
		updateCase(cases);
	});

	let deleteButton = document.createElement('button');
	deleteButton.innerHTML = "Delete Case";
	dataDiv.appendChild(deleteButton);
	deleteButton.addEventListener('click',function(event){
		event.preventDefault();
		deleteCase(cases.id);
	});

	
}

function deleteFunction(e) {
	confirm("Are you sure you want to delete this case?");
	var fastId = e.id;
	
	if (fastId != null ) {
	  
	}
	  
	else window.prompt("Please enter a valid ID")
	
	  deleteRow(caseId);
	
  }


function showUpdateForm(cases){
   console.log("old state " + cases.state);
   let updateForm = document.getElementById('updateForm');
   updateForm.state.value = cases.state; 
   updateForm.positive.value = cases.positive;
   updateForm.negative.value = cases.negative;
   updateForm.inIcu.value = cases.inIcu;
   updateForm.onVentilator.value =cases.onVentilator;
   updateForm.recovered.value = cases.recovered;
   updateForm.death.value = cases.death;
   updateForm.hospitalized.value = cases.hospitalized;
   updateForm.totalTestResults.value = cases.totalTestResults;

   console.log("New state "+ cases.state)


}

function getAllCases() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/cases',true);
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


function createCases(cases) {
	let caseJson = JSON.stringify(cases);
	console.log(caseJson);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/cases');
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			switch (xhr.status) {
			case 200:
			case 201:
				caseJson = xhr.responseText;
				let cases = JSON.parse(caseJson);
				displaySingleCases(cases);
				break;
			case 400:
				displayNotFound("Invalid  data: " + caseJson);
				break;
			default:
				displayNotFound("Error occurred: " + xhr.status);
				break;
			}
		}
	}
	xhr.send(caseJson);
	
}





	
function displayAllCases(cases) {
let caseDiv = document.getElementById('caseData');

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
	tableRow.addEventListener('click', function (event){
		getCasesById(item.id);
	 });
	 tableBody.border = '1px solid black';
	 table.border = '1 px solid black';
	 table.appendChild(tableBody);
	
  });
  // finally, append the table body to the whole table
  caseDiv.appendChild(table);

}



function updateCase(cases){
	console.log("old state: " + cases.state);
	var xhr = new XMLHttpRequest();
	xhr.open('PUT','api/cases/'+ cases.id,true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var cases = JSON.parse(xhr.responseText);
			displaySingleCases(cases);
		}

};

let form = document.getElementById('updateForm');
let data = {
				state: form.state.value,
				positive: form.positive.value,
				negative: form.negative.value,
				inIcu: form.inIcu.value,
				onVentilator: form.onVentilator.value,
				recovered: form.recovered.value,
				death: form.death.value,
				hospitalized: form.hospitalized.value,
				totalTestResult: form.totalTestResults.value

}
console.log("updated state " + data.state);
xhr.send(JSON.stringify(data));
}


function deleteCase(caseId){
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/cases/'+caseId);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function(){
		let dataDiv = document.getElementById('caseData');
		dataDiv.textContent = ' ';
		let delMsg = document.createElement('li');
		delMsg.textContent = "Deleted !!"
		dataDiv.appendChild(delMsg);
	
	}
	xhr.send();
}

function displayNotFound(msg) {
	var caseDiv = document.getElementById('caseData');
	caseDiv.textContent = msg;	
	
}
