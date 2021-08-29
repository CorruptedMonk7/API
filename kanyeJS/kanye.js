//writing an arrow function where there is no parameter inside
const kanyeQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}
const displayQuotes = quote =>{
    console.log(quote)
    const quoteText = document.getElementById('quote')
    quoteText.innerText = quote.quote;
}