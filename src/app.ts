
function dataTable(table: string){
    
    document.getElementById(table).innerHTML = 
    
    `<table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>`
}


async function getFunction(url:string){
    const response = await fetch(url);
    const json = response.json();
    console.log(json);
    return(json);
}

//console.log(getFunction("http://project1api-env.eba-2v5prypq.us-east-1.elasticbeanstalk.com/users"))

dataTable('user-table');