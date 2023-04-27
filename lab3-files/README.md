# Functions

## autorefresh()
Checks the status of the Pause Feed Checkbox and pauses the timer if it is checked, if it isn't checked, a timer for 10 seconds is set and calls getRequest() every 10 seconds

## getRequest()
Fetchs url into an array named data, removes duplicates from the array, and puts the tweets on the page. If the search bar is active and there is input, searchArray is called and filters out the relevant tweets. The tweet list is cleared beforehand to remove previous tweets. 

## removeDuplicates()
A new empty array is created that will contain all the unique tweets. It then looks through the current tweets and if a tweet is not repeated, it is added to the new array and added to the array that keeps track of seen tweets. Returns an array of tweets without duplicates. 

## searchArray()
Looks through tweets's texts to check for keyword from search bar and returns array with tweets with the phrase.

## appendTweets()
Sorts the tweets by chronological order. This is done by getting the time and date, removing all non numerical characters, and converting to floating point. This is then used to compare values to determine chronological order. Elements are then created in the HTML to put the tweets on the page. If the profile picture is not valid, a default one is given. Creates all other required elements such as username, handle, and time.


# Additional Notes
- ChatGPT was used to format the date 
