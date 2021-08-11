function makeTemplates (employees) {


  const managerTemp = (data) => {
    return `
          <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">signed in as ${data.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: <a href="${data.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${data.OfficeNumber()}</li>
        </ul>
    </div>
</div>
    `
  }

  const engineerTemp = (data) => {
    return `
          <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${data.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: <a href="${data.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href="${data.getGithub()}"></a></li>
        </ul>
    </div>
</div>
    `

  }


  const internTemp = (data) => {
    return `
          <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${data.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: <a href="${data.getEmail()}</a></li>
            <li class="list-group-item">School: ${data.getSchool()}</li>
        </ul>
    </div>
</div>
    `
  }


  console.log('Hello', employees)

  const htmlTemp = [];

  htmlTemp.push(
    employees.filter(employee => employee.getRole() === 'Manager')
 .map((manager) => managerTemp(manager))
 )


 htmlTemp.push(employees.filter(employee => employee.getRole() === 'Engineer')
 .map((engineer) => engineerTemp(engineer)))

htmlTemp.push(
 employees.filter(employee => employee.getRole() === 'Intern')
 .map((intern) => internTemp(intern)))

 console.log(htmlTemp.join(''))
 return htmlTemp.join('')
}









function generateHtml(employees) {


return ` <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <!-- Bootstrap 4.4.x -->
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>  
      
      <title>test html</title>
    </head>
    <body>
      <div class="container">
    
        <div class="card text-center mt-4">
          <!-- team header -->
          <div class="card-body">
            <h5 class="card-title">team</h5>
            <p class="card-text">employee information file</p>
            ${makeTemplates(employees)}
          </div>
          </div>
        </div>
          </div>
        </body>
        </html>
`


    

 
};
  
  module.exports = generateHtml;