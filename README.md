# Web Crawler by Pardep Kumar

This project targets to scrape a google results page & links farmed on it. It opens the link to new window & with help of algo you can see the list of libraries used on web page. This is an attempt to Technical round, and is only for sole purpose.

![Web Crawler Demo](Web_crawler.gif)

## RUN json Server
npx json-server --watch db.json --port 3002

In the project directory, you can run:

### `npm start` 

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Step 0: Read a string (search term) from a URL parameter
Although the app has machenism to get Keyword inputted from User and return response. But to fetch searched keyword from URL i have created this algorithm :

        function getParameterByUrl(name,url) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(url);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        alert(getParameterByUrl('q',window.location.href));


### Step 1 : RUN the app 
The web scrapper has the capability to take any keyword and fetch Main links from the Google search listing page.
For now a jason server has been setup which takes a mock reponse same as google response(produced using a SERP - SERPMASTER).
It takes a fixed keyword 'Best Places'; 
(it can be made dynamic if you have key enabled SERP API/ or a way to fetch Google response | Due to limited time went with mock method)

### Step 2 : Click on the suggested links
It must take you to new the mainlink website.

### Step 3: Paste below Algorithm in mainlink website's Console. 
### It Fetches the top libraries :  <Just RUN in console of Opened web page>
###  document.querySelectorAll('cite') can be used for alternate coverage! 
    let arr = document.scripts; 
    const res = [];
    const map = new Map();
    for (let shrtLibrary of arr) {
        if(!map.has(shrtLibrary.src)){
            map.set(shrtLibrary.src, true);   
            res.push(
            shrtLibrary.src
            );
        }
    }
    res.sort();
    console.table('%O Final Sorted Libraries',res);


### 