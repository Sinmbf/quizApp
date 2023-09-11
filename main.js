// JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//         form.addEventListener('submit', event => {
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//             }

//             form.classList.add('was-validated')
//         }, false)
//     })
// })()

// Select Items
const formContainer=document.querySelector(".form-container");
const form=document.querySelector(".detailForm");
const uName=document.getElementById("name");
const email=document.getElementById("email");
const genders = document.querySelectorAll(".form-check-input");
let checkGender="male";

// Form Submission
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // Access the value of radio input
    genders.forEach(gender=>{
        if(gender.checked){
            checkGender=gender.value;
        }
    })
    let arr=[];
    arr.push({uName:uName.value,email:email.value,gender:checkGender});
    sessionStorage.setItem("participant",JSON.stringify(arr));
    if(sessionStorage.length>0){
        console.log("more than 0")
        formContainer.innerHTML = `
        <div class="alert alert-success" role="alert">
            Your form has been successfully submitted! <strong> Redirecting you to the questions page...</strong>
        </div>
    `
    console.log('middle')
    // Redirect to category page
    setTimeout(()=>{
        console.log("set")
        window.location.href = "category.html";
    },2000)
    }
    
})






