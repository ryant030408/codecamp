window.onload = refresh;


function refresh() {
    var quotation = ["We look forward to the time when the Power of Love will replace the Love of Power. Then will our world know the blessings of peace.", "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.", "For success, attitude is equally as important as ability.", "Either you run the day, or the day runs you.", "When I die, I want to go peacefully like my grandfather did, in his sleep. Not yelling and screaming like the passengers in his car.", "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down \"happy.\" They told me I didn't understand the assignment, and I told them they didn't understand life."];
var author = ["- WILLIAM EWART GLADSTONE", "-MAURICE SWITZER", "-ANONYMOUS", "-JIM ROHN", "- BOB MONKHOUSE", "-ANONYMOUS"];
    var ind = Math.floor((Math.random() * 5) + 1);
    var wholeQuote = '"' + quotation[ind] + '"' + "\n" + author[ind];
    console.log(encodeURI(wholeQuote));
    document.getElementById("quotes").innerHTML=quotation[ind];
    document.getElementById("author").innerHTML=author[ind];
    document.getElementById("tweets").href = "https://twitter.com/intent/tweet?text=" + encodeURI(wholeQuote);
}

