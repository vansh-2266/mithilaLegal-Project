var db = firebase.database();

let roleInp = document.getElementById("roleInp");
let imgUrlInp = document.getElementById("imgUrlInp");
let textContentInp = document.getElementById("textContentInp");
let positionInp = document.getElementById("positionInp");
let applyLinkInp = document.getElementById("applyLinkInp");

let addBtn = document.getElementById('addBtn');
let deleteBtn = document.getElementById('deleteBtn');
let updateBtn = document.getElementById('updateBtn');

let tableBody = document.querySelector("tbody");

var jobssRef = firebase.database().ref('jobsListing/');

//addData function
function AddData(){
    let jobId = jobssRef.push().key;
    jobssRef.child(jobId).set({
        title: roleInp.value,
        imgUrl: imgUrlInp.value,
        textContentInp: textContentInp.value,
        positionInp: Number(positionInp.value),
        applyLinkInp: applyLinkInp.value
    })
    .then(()=> {
        alert("Data added & updated on website succefully!");
    })
    .catch((err)=>{
        alert("Data Not Added!");
        console.log(err);
    })

}

// Read Data 

jobssRef.on('value', (snapshot) => {
    const jobs = snapshot.val();
    console.log(jobs);
  
    for(job in jobs)
    {
      // console.log(users[user]);
  
      let tr = `
      <tr data-id = ${job}>
          <td>${jobs[job].title}</td>
          <td>${jobs[job].imgUrl}</td>
          <td>${jobs[job].textContentInp}</td>
          <td>${jobs[job].positionInp}</td>
          <td>${jobs[job].applyLinkInp}</td>
          <td>
              <button class="delete">Delete</button>
          </td>
      </tr>
      `
  
      tableBody.innerHTML += tr;
  
    }

    
     //Delete
        let deleteButton = document.querySelectorAll(".delete");
        deleteButton.forEach(deleteBtn => {
            deleteBtn.addEventListener("click", () => {
                let jobId = deleteBtn.parentElement.parentElement.dataset.id;
                jobssRef.child(jobId).remove().then(() => {
                    alert("Job post Deleted");
                })
            })
        })

  
  });

// button functionality
addBtn.addEventListener("click", AddData);

//navbar menu 
const btn = document.getElementById('button');
const nav = document.getElementById('nav-ul');

btn.addEventListener('click', function() {
  nav.classList.toggle ('toggle');
});