var tweetlist=document.getElementById("tweetlist");
let searchString = "";
let new_data = [];
let searched_data = []

$(document).ready(function(){
    const url = "http://50.21.190.71/get_tweets"

    // reset any changes from the previous useage 
        // previous tweets
        // checkbox
        // if there is still text in search bar

    function autorefresh() {
        // Get the status of the checkbox
        var isChecked = document.getElementById("feedRefresh").checked;
        // If it is not checked, then we will call our fetch every X seconds
        if (isChecked == false) {
            time = setInterval(function () {
               getRequest();
            }, 10000);
        } else if (isChecked == true) {
            // If it is checked, we want it to pause, so we clear the interval
            clearInterval(time);
        }
    }
    
    const handleSearch = event => {
        searchString = event.target.value.trim(); 
        document.getElementById("tweetlist").innerHTML = "";
        appendTweets(searchArray(new_data,searchString));
    }

    // Function that automatically fetches new tweets
    autorefresh();
    // Get the checkbox, add a listener that activates when checked/unchecked
    document.getElementById('feedRefresh').addEventListener('click', autorefresh);
    document.getElementById('search').addEventListener('input',handleSearch);

    getRequest();

    function getRequest() {
        fetch(url)
        .then(res => res.json()) .then(data => { 
        // do something with data
            // new_data=removeDuplicates(data);
            new_data = new_data.concat(data);
            new_data = removeDuplicates(new_data);  // Remove duplicates  
            // Set the center div to be the tweets
            appendTweets(new_data);
            // When the search is activated:
            searched_data = new_data;
            if (searchString != ""){
                searched_data = searchArray(new_data,searchString);
                document.getElementById("tweetlist").innerHTML = "";
                appendTweets(searched_data);
            }
            // Search all tweets for matching values
            // Set the current tweets to be ones that match search value
        })
        .catch(err => {
            // error catching
        alert(err);
        console.log(err) }) 
    }

    function removeDuplicates(duplicatesDataArr) { //Done
        // For all of new tweets
        // Check the array of all previous tweets for any duplicates
        // Remove duplicates
        // If not a duplicate, add it to list of all previous tweets
        let uniquePrevious = [];
        let newArr = [];
        for (let i = 0; i < duplicatesDataArr.length; i++) { 
            if (!uniquePrevious.includes(duplicatesDataArr[i].text)) {      //If unique
                //Remove duplicate from duplicatesDataArr
                newArr.push(duplicatesDataArr[i]);
                uniquePrevious.push(duplicatesDataArr[i].text); //Push into unique array
            }
        }
        uniquePrevious.length = 0;
        return newArr;
    }

    function searchArray(dataArr, value) { //Done
        // Go through each tweet, and check if there is a matching value in the tweet
        // Return array of all matching tweets
        let newArr = [];
        for (let i = 0; i < dataArr.length; i++) { 
            if (dataArr[i].text.includes(value)){ //If tweet text has value
                newArr.push(dataArr[i]);
            }
        }
        return newArr;
    }

    function appendTweets(dataArrUnsort) {
        // Get the content-center element. We want to add tweets to this
        center = document.getElementById("content-center");
        // Suggest emptying the current tweets at some point
        document.getElementById("tweetlist").innerHTML = "";
        // Sort the array of tweets chronologically
        let dataArrSorted = dataArrUnsort.sort(function(a,b) {
            atime = a.date.slice(11,18).replace(/:/g,'');
            btime = b.date.slice(11,18).replace(/:/g,'');
            adate = a.date.slice(0,10).replace(/-/g,'');
            bdate = b.date.slice(0,10).replace(/-/g,'');
            atotal = adate + atime;
            btotal = bdate + btime;
            return parseFloat(btotal)-parseFloat(atotal);
        });
        // For each tweet  
        for(let i = 0; i < dataArrSorted.length; i++) {            
            // Create a div that you can append to content-center
            let fulltweet = document.createElement("div");
            fulltweet.classList.add("full-tweet");
            // We want to include the profile picture
                // Can check if the image exists 
                if(dataArrSorted[i].avatar) {
                    var http = new XMLHttpRequest();
                    imgURL = dataArrSorted[i].avatar;
                    http.open("HEAD", imgURL);
                    http.send();
                    if (http.status != 0 && http.status != 404) {    
                        // Success! 
                        // Add the img to the Tweet we are creating
                        let img = document.createElement("img");
                        img.src = imgURL;
                        img.classList = "profile-picture-tweets"
                        fulltweet.appendChild(img);

                    }
                    else {
                        let img = document.createElement("img");
                        img.src = "./images/ratatouille.jpg";
                        img.classList = "profile-picture-tweets"
                        fulltweet.appendChild(img);
                    }
                }
            // Create all of the additional pieces of information
            // Username
            let b = document.createElement("b");
            b.innerHTML = dataArrSorted[i].user_name;
            b.classList.add("twitter-handle-tweet");
            // Date (formatted)
            const date = new Date(dataArrSorted[i].date);            
            const options = {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit'
            };            
            const formattedTime = date.toLocaleTimeString('en-US', options);
            const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });            
            console.log(`${formattedDate} at ${formattedTime}`);
            let a = document.createElement("a");
            a.innerHTML = " @" + dataArrSorted[i].user_name + " " + (`${formattedDate}  ${formattedTime}`);
            a.classList.add("twitter-handle-tweet-date");
            // console.log(dataArrSorted[i].date);
            // Tweet contents
            let div = document.createElement("div");
            div.innerHTML = dataArrSorted[i].text;
            div.classList.add("tweet");
            
            // You can create all of these div elements with jquery
            // and then manually add them to the Tweet div
            fulltweet.appendChild(b);
            fulltweet.appendChild(a);
            fulltweet.appendChild(div);
            tweetlist.appendChild(fulltweet);
        }
            
    }
});