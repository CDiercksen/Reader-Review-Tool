console.log("hello world")
// EventListener 1 - User clicks a Best Seller List Category button and it fetches from New York Times Books API
    //grab buttons from html and assign to variables
    const fictionButton = document.querySelector("#get-fiction")
    const nonFictionButton = document.querySelector("#get-non-fiction")
    //save API address as variable
    const apiFiction = "https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json"
    const apiNonFiction = "https://api.nytimes.com/svc/books/v3/lists/hardcover-nonfiction.json"
    const apiKey = "?api-key=UF8xmakry6jkkIvUvg7AqjHObjVGD9y2"
    //make function to make GET requests from API
    function fetchFiction() {
        fetch(apiFiction+apiKey)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    function fetchNonFiction() {
        fetch(apiNonFiction+apiKey)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    
    //add event listener for click event
    fictionButton.addEventListener('click', () => fetchFiction())
    nonFictionButton.addEventListener('click', () => fetchNonFiction())
// Display list of books on current Best Seller list for selected category

// EventListener 2 - user can click a title and the review will be displayed

// EventListener 3 - user can click a heart icon and favorite the book

//get bootstrap for css
//learn how to use bootstrap grid for layouts

//stretch goals: use the Best Sellers List Names API to generate clickable buttons for every current list