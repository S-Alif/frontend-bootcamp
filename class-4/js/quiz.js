// data
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HighText Machine Language", "None"],
        answer: "HyperText Markup Language"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: "CSS"
    },
    {
        question: "What is the correct syntax to link a CSS file?",
        options: ["<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<script href='style.css'>", "None of these"],
        answer: "<link rel='stylesheet' href='style.css'>"
    }
]

// quiz state
let currentQuestion = 0
let score = 0
let selectedOption = null
let userName = prompt("Enter your name:")

while(!userName){
    userName = prompt("Please enter your name to begin:")
}

// target elements
const questionEl = document.getElementById("questions")
const optionsEl = document.getElementById("options")
const nextBtn = document.getElementById("next-btn")
const scoreEl = document.getElementById("score")

// console.log(questions[0])
// const ques = questions[currentQuestion]
// console.log(ques.question)

// Add question progress display
const progressEl = document.createElement("div")
progressEl.id = "progress"
questionEl.parentNode.insertBefore(progressEl, questionEl)


// load question
// load questions
function loadQuestion() {
    selectedOption = null
    nextBtn.disabled = true

    const ques = questions[currentQuestion]
    questionEl.textContent = ques.question
    progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`
    optionsEl.innerHTML = ""

    ques.options.forEach(option => {
        // create option buttons dynamically
        const btn = document.createElement("button")
        btn.textContent = option

        // what happens when the option button is clicked
        btn.addEventListener("click", () => {
            selectedOption = option // enter the selected option
            nextBtn.disabled = false

            // Reset styles
            const allBtns = optionsEl.querySelectorAll("button")

            // remove all selected class from all buttons
            allBtns.forEach(b => b.classList.remove("selected"))

            // only add selected class to the clicked button
            btn.classList.add("selected")
        })
        optionsEl.appendChild(btn)
    })

    // Make sure all elements are visible again
    questionEl.classList.remove("hide")
    optionsEl.classList.remove("hide")
    nextBtn.classList.remove("hide")
    scoreEl.classList.add("hide")
    progressEl.classList.remove("hide")
}

// display score
function showScore() {
    questionEl.classList.add("hide")
    optionsEl.classList.add("hide")
    nextBtn.classList.add("hide")
    progressEl.classList.add("hide")

    scoreEl.classList.remove("hide")
    scoreEl.innerHTML = `
        <h3>Well done, ${userName}!</h3>
        <p>Your final score is <strong>${score}</strong> out of <strong>${questions.length}</strong>.</p>
        <a href="index.html" class="play-again-btn">Play Again</a>
    `
}

// go to next and score
nextBtn.addEventListener("click", () => {
    if (selectedOption === questions[currentQuestion].answer) {
        score++
    }

    currentQuestion++

    if (currentQuestion < questions.length) {
        loadQuestion()
    }
    else {
        showScore()
    }
})

// Start quiz
loadQuestion()