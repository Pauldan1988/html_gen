

function generateCard(teamMember) {
    let roleSpecInfo
    let roleIcon
    switch (teamMember.getRole()) {
      case "Manager":
        roleSpecInfo =  `<p>Office Number: ${teamMember.officeNumber}</p>`
        roleIcon = `<i class="fa-solid fa-mug-hot"></i>`
        break;
      case "Engineer":
        roleSpecInfo = `<p>GitHub: ${teamMember.getGithub()}</p>`
        roleIcon = `<i class="fa-solid fa-glasses"></i>`
        break;
      case "Intern":
        roleSpecInfo = `<p>School: ${teamMember.getSchool()}</p>`
        roleIcon = `<i class="fa-solid fa-graduation-cap"></i>`
    }
  
        return `
  <div class="row team-area col-12 d-flex justify-content-center">
    <div class="col-3 mt-4">
      <div class="card h-100" id="cardBody">
        <div class="card-header" id="cardHeader">
          <h3>${teamMember.getName()}</h3>
          <h4>${teamMember.getRole()}</h4>${roleIcon}
        </div>
        <div class="card-body" id="manageBody">
          <p class="id">ID: ${teamMember.getId()}</p>
          <p class="email">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></p>
          ${roleSpecInfo}
        </div>
      </div>
    </div>
  </div>
    `;
}
function generateHtml(teamMembers) {
  const teamCards = teamMembers.map(generateCard)
  console.log(teamCards)
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/dist/style.css" />
        <script src="https://kit.fontawesome.com/dd0ed8af3d.js" crossorigin="anonymous"></script>
        <title>Document</title>
    </head>

    <body>
        <nav
        class="p-4 bg-secondary text-white text-center border border-4 rounded-2">
        <h1>My Team</h1>
        </nav>

        <div class="container">
            <div class="row">
            ${teamCards}
            </div>
        </div>
    </body>
    </html>
    `
}
export default generateHtml




/* <p class="email">Email: <a href="mailto:Email">${teamMember.getEmail()}</a></p>
<p class="github">Github: <a href="mailto:Email"></a></p>
<p class="school">School: </p> */


  // const specificData =
  //   teamMember.getRole() === "Engineer"
  //     ? //@ts-ignore
  //       teamMember.getGithub()
  //     : teamMember.getRole() === "Intern"
  //       ? //@ts-ignore
  //         teamMember.getSchool()
  //       : teamMember.getRole() === "Manager" ? teamMember.officeNumber : "";