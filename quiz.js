
// Select Items
const questionForm = document.querySelector(".questionForm");
const title = document.querySelector(".title");

// Get selected questions from local storage
const filterQuestions = JSON.parse(localStorage.getItem("filterQuestions"));

// Total score(Total no. of questions)
const totalScore=filterQuestions.length;
let correctAns=0;

// Get participant information from session storage
const participant = JSON.parse(sessionStorage.getItem("participant"));

// Function to display questions
const displayQuestions = () => {
    // To make the name of the related radio buttons same
    let count = 0;
    // Shuffle the elements(questions) of the array
    shuffleArray(filterQuestions);
    // Loop through the questions of the array
    const questions = filterQuestions.map((question, index) => {
        // Select options array 
        const options = question.options;
        // Shuffle the elements(options) of the array
        shuffleArray(options);
        // Loop through the options of the array
        const option = options.map((element, index) => {
            return `
                <div class="form-check mb-4">
                        <input type="radio" value="${element}" class="form-check-input" id="${element.split(" ").join("")}${index}" name="radio-stacked${count}" required>
                        <label class="form-check-label" for="${element.split(" ").join("")}${index}">${element}</label>
                        <div class="invalid-feedback">Please choose one!</div>
                </div>
            `
        }).join("");
        count++;
        // Create an html for the questions
        return `
            <div class="col-md-7 col-10 border mt-4 rounded p-3 bg-warning p-2 text-dark bg-opacity-75">
                <!-- Question  -->
                <p class="fs-5">${index+1}. ${question.question}</p>
                ${option}
            </div>
                
        `
    }).join("");
    // Add the html to the document
    questionForm.innerHTML = questions;
    questionForm.innerHTML += `
        <!-- Submit Button -->
            <button id="submit" type= "submit" class="btn btn-primary p-3 col-10 col-md-7 mt-4">
            Submit
            </button> 
        <!-- Button trigger modal -->
            <button id="showAns" type="button" class="d-none btn btn-danger p-3 col-10 col-md-7 mt-2" data-bs-toggle="modal" data-bs-target="#score">
            Show Your Score
            </button>
        <!-- Modal -->
        <div class="modal fade" id="score" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel"><strong>Your Score</strong></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"         aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center fs-4">
                        <p class="score"></p>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal">Show Answers</button>
                        <button onclick="goToCategory()" type="button" class="btn btn-danger w-100" data-bs-dismiss="modal">Try another category</button>
                    </div>
                </div>
            </div>
        </div> 
         
    `;

}

// Function to shuffle the elements of an array
function shuffleArray(array) {
    // Use a random comparison function to shuffle the array
    array.sort(() => Math.random() - 0.5);
}

// Function to mark correct answer
const markCorrectAns=(ans)=>{
    ans.classList.add("bg-success");
    ans.disabled=false;
}

// Function to check answers
const checkAnswers = () => {
    // Select all the inputs(answers) provided
    const answers = document.querySelectorAll(".form-check-input");
    const answerArr = [...answers];
    const checkedAns = answerArr.filter(answer => {
        if (answer.checked) {
            return answer;
        }
    })
    // Mark the correct answer
    answerArr.forEach(ans=>{
        filterQuestions.forEach(question=>{
            if(question.answer===ans.value){
                markCorrectAns(ans);
            }
        })
    })
    // Check answers
    checkedAns.forEach(ans => {
        filterQuestions.forEach(question => {
            if (question.answer === ans.value) {
                correctAns++;
                // Change the container of correct ans to green
                const ansContainer = ans.parentElement.parentElement;
                ansContainer.classList.remove("bg-warning");
                ansContainer.classList.add("bg-success");
            }
            
        })
        // Change the container of wrong ans to red
        const ansContainer = ans.parentElement.parentElement;
        if (ansContainer.classList.contains("bg-warning")) {
            ansContainer.classList.remove("bg-warning");
            ansContainer.classList.add("bg-danger");
            ans.classList.add("bg-danger");
            ans.disabled=false;
        }
    })

}

// Function to insert modal(show score)
const showScore=()=>{
    document.getElementById("submit").disabled=true;
    document.getElementById("showAns").classList.remove("d-none");
    document.getElementById("showAns").classList.add("d-block");
    // Select modal title
    const modalTitle=document.querySelector(".modal-title");
    modalTitle.innerHTML = `<strong>Your Score: ${correctAns}/${totalScore}</strong>`
    // Show alert according to the score of the participant
    const scoreElement=document.querySelector(".score");
    showResponse(scoreElement,participant[0].uName,correctAns);
}

// Function to give response to the participant about his performance
const showResponse=(element,participant,score)=>{
    let text;
    if(score<1){
        text = `Thank you <strong>${participant}</strong> for participating in the quiz! It seems you didn't answer any of the questions. Feel free to try again in the future.`
    }
    else if(score>=Math.floor(totalScore/2)){
        text = `Good job on the quiz <strong>${participant}</strong>! Your performance was solid and shows potential for improvement. Keep it up!`
    }
    else if(score<Math.floor(totalScore/2)){
        text = `Thank you for taking part <strong>${participant}.</strong> Your performance was below average, but remember, every challenge is an opportunity to learn and grow. Keep it up!`
    }
    else if(score===totalScore){
        text = `Congratulations <strong>${participant}</strong>! You answered all the questions correctly. Impressive! 🎉👏`
    }
    element.innerHTML=`${text}`
}

// Function to go to category page
const goToCategory=()=>{
    window.location.href="./category.html";
}

// Function to disable input
const disableInput=()=>{
    const inputs=document.querySelectorAll("input");
    inputs.forEach(input=>{
        input.disabled=true;
    })
}

window.addEventListener("DOMContentLoaded", () => {
    // Welcome the participant
    title.innerHTML = `
        <h1 class = "fs-2 lh-base text-danger">Welcome <strong class="text-dark">${participant[0].uName}!</strong> Test Your Knowledge On <strong class="text-dark">${filterQuestions[0].category} </strong></h1>
    `
    // Display Questions
    displayQuestions();
})

// Submit form
questionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Disable Input
    disableInput();
    // Check answers
    checkAnswers();
    // Insert modal(show score)
    showScore();
    
})