//EventListener 1 - DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("hello DOM")
    
})
    // EventListener 2 and 3 - User clicks a Best Seller List Category button and it fetches from New York Times Books API
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
            displayList(data.results.books)
            // debugger
        })
    }
    function fetchNonFiction() {
        fetch(apiNonFiction+apiKey)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            displayList(data.results.books)
        })
    }
    
    //add event listener for click event
    fictionButton.addEventListener('click', () => fetchFiction())
    nonFictionButton.addEventListener('click', () => fetchNonFiction())
    // Display list of books on current Best Seller list for selected category
    function displayList(books) {
        const main = document.querySelector("#review-list")
        //if #review-list has > 0 li, remove them from the DOM
        books.forEach(bookObject => {
            const li = document.createElement('li');
            li.id = "item" + bookObject.rank
            // li.innerHTML = `<a href=${bookObject.amazon_product_url}>${bookObject.title + ", by " + bookObject.author}</a>`;
            // debugger
            li.innerText = bookObject.title + ", by " + bookObject.author
            // add heart icon
            main.appendChild(li);
        })
    }
    // const saveButton = document.createElement('button');
    // saveButton.setAttribute("class", "btn btn-default",
    // "aria-label", "Star",
    //  "html", "<span class="glyphicon glyphicon-star" aria-hidden="true"></span>")
    // )
    // write a function that listens for a click on the heart icon, and copies the li into #saved-review-container
    
    
    //get bootstrap for css
    //learn how to use bootstrap grid for layouts
    
    //stretch goals: 
    // EventListener 4 - user can click a heart icon and favorite the book
    // EventListener 5 - user can click a title and the description will be displayed
    //use the Best Sellers List Names API to generate clickable buttons for every current list