// Array of questions
const questionGroup = [
    // History Category (10 questions)
    {
        question: "Who was the first President of the United States?",
        category: "History",
        answer: "George Washington",
        options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"]
    },
    {
        question: "Which ancient civilization built the Great Wall of China?",
        category: "History",
        answer: "The Qin Dynasty",
        options: ["The Han Dynasty", "The Qin Dynasty", "The Tang Dynasty", "The Zhou Dynasty"]
    },
    {
        question: "What event marked the start of World War I?",
        category: "History",
        answer: "The assassination of Archduke Franz Ferdinand",
        options: ["The Treaty of Versailles", "The assassination of Archduke Franz Ferdinand", "The sinking of the Lusitania", "The Battle of the Somme"]
    },
    {
        question: "Who was the Egyptian queen known for her relationship with Julius Caesar and Mark Antony?",
        category: "History",
        answer: "Cleopatra",
        options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Isis"]
    },
    {
        question: "Which year did Christopher Columbus first voyage to the Americas?",
        category: "History",
        answer: "1492",
        options: ["1492", "1501", "1498", "1510"]
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        category: "History",
        answer: "Margaret Thatcher",
        options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Jacinda Ardern"]
    },
    {
        question: "What was the name of the ship that carried the Pilgrims to America in 1620?",
        category: "History",
        answer: "Mayflower",
        options: ["Santa Maria", "Nina", "Mayflower", "Discovery"]
    },
    {
        question: "Which ancient civilization is known for creating the first system of writing known as cuneiform?",
        category: "History",
        answer: "Sumerians",
        options: ["Egyptians", "Sumerians", "Indus Valley Civilization", "Mayans"]
    },
    {
        question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
        category: "History",
        answer: "Nikita Khrushchev",
        options: ["Joseph Stalin", "Vladimir Putin", "Mikhail Gorbachev", "Nikita Khrushchev"]
    },
    {
        question: "What was the name of the ship that Charles Darwin sailed on during his voyage of evolution discovery?",
        category: "History",
        answer: "HMS Beagle",
        options: ["HMS Victory", "HMS Beagle", "HMS Discovery", "HMS Endeavour"]
    },

    // Sports Category (10 questions)
    {
        question: "Which country won the most gold medals in the 2016 Summer Olympics?",
        category: "Sports",
        answer: "United States",
        options: ["China", "United States", "Spain", "Great Britain"]
    },
    {
        question: "Who is often called 'The Sultan of Swing' in cricket?",
        category: "Sports",
        answer: "Wasim Akram",
        options: ["Kapil Dev", "Shane Warne", "Dale Steyn", "Wasim Akram"]
    },
    {
        question: "Which team won the Super Bowl in 2021?",
        category: "Sports",
        answer: "Tampa Bay Buccaneers",
        options: ["Kansas City Chiefs", "San Francisco 49ers", "Tampa Bay Buccaneers", "Green Bay Packers"]
    },
    {
        question: "Which athlete is known as 'The Flying Finn'?",
        category: "Sports",
        answer: "Paavo Nurmi",
        options: ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Paavo Nurmi"]
    },
    {
        question: "In which sport would you perform a slam dunk?",
        category: "Sports",
        answer: "Basketball",
        options: ["Soccer", "Basketball", "Tennis", "Golf"]
    },
    {
        question: "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
        category: "Sports",
        answer: "Just Fontaine",
        options: ["Pele", "Diego Maradona", "Just Fontaine", "Miroslav Klose"]
    },
    {
        question: "Which country hosted the 2014 Winter Olympics?",
        category: "Sports",
        answer: "Russia",
        options: ["Canada", "United States", "Russia", "Norway"]
    },
    {
        question: "Who is the all-time leading scorer in NBA history?",
        category: "Sports",
        answer: "Kareem Abdul-Jabbar",
        options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Kareem Abdul-Jabbar"]
    },
    {
        question: "Which country has won the most FIFA World Cup titles?",
        category: "Sports",
        answer: "Brazil",
        options: ["Germany", "Italy", "Brazil", "Argentina"]
    },
    {
        question: "In which year did the first modern Olympic Games take place?",
        category: "Sports",
        answer: "1896",
        options: ["1900", "1924", "1896", "1932"]
    },

    // Science and Technology Category (10 questions)
    {
        question: "What is the chemical symbol for gold?",
        category: "Science and Technology",
        answer: "Au",
        options: ["Ag", "Fe", "Au", "Cu"]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        category: "Science and Technology",
        answer: "Mars",
        options: ["Venus", "Earth", "Mars", "Jupiter"]
    },
    {
        question: "What is the process by which plants make their own food using sunlight?",
        category: "Science and Technology",
        answer: "Photosynthesis",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"]
    },
    {
        question: "Who is credited with the discovery of the laws of motion and universal gravitation?",
        category: "Science and Technology",
        answer: "Isaac Newton",
        options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"]
    },
    {
        question: "What is the smallest unit of matter?",
        category: "Science and Technology",
        answer: "Atom",
        options: ["Molecule", "Element", "Cell", "Atom"]
    },
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        category: "Science and Technology",
        answer: "Carbon dioxide (CO2)",
        options: ["Oxygen (O2)", "Carbon monoxide (CO)", "Nitrogen (N2)", "Carbon dioxide (CO2)"]
    },
    {
        question: "What is the main component of Earth's atmosphere?",
        category: "Science and Technology",
        answer: "Nitrogen (N2)",
        options: ["Oxygen (O2)", "Carbon dioxide (CO2)", "Argon (Ar)", "Nitrogen (N2)"]
    },
    {
        question: "Who is known as the father of modern physics?",
        category: "Science and Technology",
        answer: "Albert Einstein",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"]
    },
    {
        question: "What is the largest planet in our solar system?",
        category: "Science and Technology",
        answer: "Jupiter",
        options: ["Mars", "Saturn", "Earth", "Jupiter"]
    },
    {
        question: "What is the chemical symbol for water?",
        category: "Science and Technology",
        answer: "H2O",
        options: ["CO2", "O2", "H2O", "N2"]
    },

    // Economy Category (10 questions)
    {
        question: "What is the currency of Japan?",
        category: "Economy",
        answer: "Japanese Yen",
        options: ["Japanese Won", "Japanese Yen", "Japanese Dollar", "Japanese Euro"]
    },
    {
        question: "What is the stock market index of the top 30 companies in Germany?",
        category: "Economy",
        answer: "DAX",
        options: ["FTSE 100", "CAC 40", "DAX", "S&P 500"]
    },
    {
        question: "Which country has the largest economy in the world by GDP?",
        category: "Economy",
        answer: "United States",
        options: ["China", "United States", "Japan", "Germany"]
    },
    {
        question: "What is the central bank of the United States?",
        category: "Economy",
        answer: "Federal Reserve",
        options: ["Bank of America", "Federal Reserve", "Wells Fargo", "JPMorgan Chase"]
    },
    {
        question: "What is the term for a situation where the prices of goods and services rise over time?",
        category: "Economy",
        answer: "Inflation",
        options: ["Deflation", "Recession", "Inflation", "Depreciation"]
    },
    {
        question: "Which cryptocurrency is often referred to as 'digital gold'?",
        category: "Economy",
        answer: "Bitcoin",
        options: ["Ethereum", "Ripple", "Litecoin", "Bitcoin"]
    },
    {
        question: "What is the primary currency used in most European countries?",
        category: "Economy",
        answer: "Euro",
        options: ["Pound Sterling", "Euro", "Swiss Franc", "Krona"]
    },
    {
        question: "Which organization is responsible for regulating the global financial system?",
        category: "Economy",
        answer: "International Monetary Fund (IMF)",
        options: ["World Trade Organization (WTO)", "International Monetary Fund (IMF)", "World Bank", "Bank for International Settlements (BIS)"]
    },
    {
        question: "What is the term for a market condition where there is a prolonged period of declining stock prices?",
        category: "Economy",
        answer: "Bear Market",
        options: ["Bull Market", "Bear Market", "Stagnant Market", "Correction"]
    },
    {
        question: "Which country is known for having a 'Nordic model' of social welfare and high taxes?",
        category: "Economy",
        answer: "Sweden",
        options: ["Norway", "Denmark", "Sweden", "Finland"]
    },

    // Geography 
    {
        question: "What is the capital of France?",
        category: "Geography",
        answer: "Paris",
        options: ["Paris", "London", "Berlin", "Rome"]
    },
    {
        question: "Which river is the longest in the world?",
        category: "Geography",
        answer: "Nile",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"]
    },
    {
        question: "In which continent is the Sahara Desert located?",
        category: "Geography",
        answer: "Africa",
        options: ["Africa", "Asia", "North America", "Europe"]
    },
    {
        question: "What is the highest mountain in the world?",
        category: "Geography",
        answer: "Mount Everest",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        category: "Geography",
        answer: "Japan",
        options: ["Japan", "China", "South Korea", "Vietnam"]
    },
    {
        question: "Which ocean is the largest by surface area?",
        category: "Geography",
        answer: "Pacific Ocean",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
    },
    {
        question: "Which country is known for its fjords and Viking history?",
        category: "Geography",
        answer: "Norway",
        options: ["Norway", "Sweden", "Denmark", "Iceland"]
    },
    {
        question: "What is the largest desert in the Americas?",
        category: "Geography",
        answer: "Atacama Desert",
        options: ["Atacama Desert", "Sahara Desert", "Sonoran Desert", "Kalahari Desert"]
    },
    {
        question: "Which river flows through the Grand Canyon?",
        category: "Geography",
        answer: "Colorado River",
        options: ["Colorado River", "Mississippi River", "Amazon River", "Nile River"]
    },
    {
        question: "Which city is known as the 'City of Canals'?",
        category: "Geography",
        answer: "Venice",
        options: ["Venice", "Amsterdam", "Bruges", "Bangkok"]
    },

    // Current Affairs
    {
        question: "What was the main topic of discussion at the recent G7 summit?",
        category: "Current Affairs",
        answer: "Climate change and global economy",
        options: [
            "Climate change and global economy",
            "Technology and innovation",
            "Trade agreements",
            "Healthcare policies"
        ]
    },
    {
        question: "Which country recently launched a mission to explore Mars?",
        category: "Current Affairs",
        answer: "China",
        options: ["China", "USA", "Russia", "India"]
    },
    {
        question: "Who won the Nobel Peace Prize in the most recent award ceremony?",
        category: "Current Affairs",
        answer: "Journalists Maria Ressa and Dmitry Muratov",
        options: [
            "Journalists Maria Ressa and Dmitry Muratov",
            "Climate activists Greta Thunberg and Vanessa Nakate",
            "Doctors Without Borders",
            "UNICEF"
        ]
    },
    {
        question: "What major event led to significant changes in Afghanistan in recent months?",
        category: "Current Affairs",
        answer: "Taliban takeover",
        options: ["Taliban takeover", "Election results", "Natural disaster", "Peace treaty"]
    },
    {
        question: "Which country recently announced a plan to phase out gasoline-powered cars by 2035?",
        category: "Current Affairs",
        answer: "Germany",
        options: ["Germany", "Bhutan", "Nepal", "France"]
    },
    {
        question: "Which cryptocurrency gained significant popularity in recent years and faced regulatory scrutiny?",
        category: "Current Affairs",
        answer: "Bitcoin",
        options: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"]
    },
    {
        question: "What is the most recent country to officially recognize same-sex marriage?",
        category: "Current Affairs",
        answer: "Japan",
        options: ["Japan", "Australia", "South Korea", "Canada"]
    },
    {
        question: "Which COVID-19 vaccine received emergency use authorization first?",
        category: "Current Affairs",
        answer: "Pfizer-BioNTech",
        options: ["Pfizer-BioNTech", "Moderna", "Johnson & Johnson", "AstraZeneca"]
    },
    {
        question: "What major international sports event was postponed due to the COVID-19 pandemic?",
        category: "Current Affairs",
        answer: "Tokyo 2020 Olympics",
        options: ["Tokyo 2020 Olympics", "FIFA World Cup", "Wimbledon", "The Masters"]
    },
    {
        question: "Which social media platform faced controversies related to data privacy?",
        category: "Current Affairs",
        answer: "Facebook",
        options: ["Facebook", "Twitter", "Instagram", "LinkedIn"]
    },

    // Art and Literature
    {
        question: "Who is the author of the novel 'To Kill a Mockingbird'?",
        category: "Art and Literature",
        answer: "Harper Lee",
        options: ["Harper Lee", "J.K. Rowling", "George Orwell", "F. Scott Fitzgerald"]
    },
    {
        question: "Which famous artist is known for painting the 'Mona Lisa'?",
        category: "Art and Literature",
        answer: "Leonardo da Vinci",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        category: "Art and Literature",
        answer: "William Shakespeare",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"]
    },
    {
        question: "Which American poet wrote 'The Raven'?",
        category: "Art and Literature",
        answer: "Edgar Allan Poe",
        options: ["Edgar Allan Poe", "Robert Frost", "Emily Dickinson", "Walt Whitman"]
    },
    {
        question: "Which novel features a character named Holden Caulfield?",
        category: "Art and Literature",
        answer: "The Catcher in the Rye",
        options: ["The Catcher in the Rye", "Pride and Prejudice", "1984", "The Great Gatsby"]
    },
    {
        question: "Who is the author of '1984'?",
        category: "Art and Literature",
        answer: "George Orwell",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"]
    },
    {
        question: "Which famous artist painted 'Starry Night'?",
        category: "Art and Literature",
        answer: "Vincent van Gogh",
        options: ["Vincent van Gogh", "Salvador Dalí", "Pablo Picasso", "Claude Monet"]
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        category: "Art and Literature",
        answer: "F. Scott Fitzgerald",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger", "Mark Twain"]
    },
    {
        question: "Which Shakespearean play features the character Macbeth?",
        category: "Art and Literature",
        answer: "Macbeth",
        options: ["Macbeth", "Hamlet", "Othello", "Romeo and Juliet"]
    },
    {
        question: "Who is the author of 'Pride and Prejudice'?",
        category: "Art and Literature",
        answer: "Jane Austen",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Louisa May Alcott"]
    }
]

// Set Item to local storage
localStorage.setItem("questions", JSON.stringify(questionGroup));


// Select Items
const btnGroup = document.querySelector(".btn-collection");
const btnRow = document.querySelector(".btn-row");


// Function to create and show buttons
const showBtns = () => {
    // Filter repeated categories
    const filterArr = questionGroup.reduce((values, question) => {
        if (!values.includes(question.category)) {
            values.push(question.category);
        }
        return values;
    }, [])

    // Create buttons from the Filtered Array
    const categories = filterArr.map(element => {
        return `
        <button id=${element.split(" ").join("")} class = "category-btn btn btn-dark col-10 col-sm-5 col-md-3 p-3 rounded mb-2">${element}</button>
    `
    }).join("");
    btnRow.innerHTML = categories;
}

// Load Content
window.addEventListener("DOMContentLoaded", () => {
    // Display Buttons
    showBtns();
    // Add click event to category buttons
    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.id;
            // Filter the category of question that is selected
            const filterArr = questionGroup.filter(question => {
                if (question.category.split(" ").join("") === id) {
                    return question;
                }
            })
            localStorage.setItem("filterQuestions", JSON.stringify(filterArr));
            btnGroup.innerHTML = `
                <div class="alert alert-success" role="alert">
                    You have selected <strong>${id}</strong> category! <strong> Redirecting you to the ${id} quiz page...</strong>
                </div>
            
            `
            // Redirect to quiz page
            setTimeout(() => {
                window.location.href = "quiz-page.html"
            }, 2000)
        })
    })
})