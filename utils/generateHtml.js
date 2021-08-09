// TODO: Create a function to generate HTML file
function generateHtml(data) {

    return `
    
    <!DOCTYPE html>
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
          </div>
          <!-- team header -->
    
          <!-- engineer employee template -->
          <div class="card-footer"><i>engineers</i></div>
    
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${data.enName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">ID : ${data.enId}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Email : ${data.enEmail}</h6>
              <h6 class="card-subtitle mb-2 text-muted">GitHub URL : ${data.git}</h6>
            </div>
          </div>
          
          <!-- engineer employee template -->
    
          <!-- intern employee template -->
          <div class="card-footer"><i>Interns</i></div>
          
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${data.inName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">ID : ${data.inId}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Email : ${data.inEmail}</h6>
              <h6 class="card-subtitle mb-2 text-muted">School : ${data.school} </h6>
            </div>
          </div>
          <!-- intern employee template -->
    
          <!-- signed in template -->
          <div class="card-footer"><i>Managers</i></div>
    
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Signed in as ${data.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">ID : ${data.id}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Email : ${data.email}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Office Number : ${data.office}</h6>
            </div>
          </div>
          <!-- signed in template -->
    
        </div>
    
      </div>
    </body>
    </html>`;

 
};
  
  module.exports = generateHtml;