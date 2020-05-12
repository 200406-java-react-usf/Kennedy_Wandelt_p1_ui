function addRow(table: string){
    let tableRef = document.getElementById(table);
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newText = document.
}

async function getAllUsers(url:string){
    const response = await fetch(url);
    const json = response.json();
    console.log(json);
}

let link = 'http://project1api-env.eba-2v5prypq.us-east-1.elasticbeanstalk.com/users';

console.log(getAllUsers(link))