//const scrape = require('website-scraper');
import scrape from 'website-scraper';
const websiteUrl = 'https://yourwebsitedomainname.com/'; 
 
scrape({ 
    urls: [websiteUrl], 
    urlFilter: function (url) { 
        return url.indexOf(websiteUrl) === 0; 
    }, 
    recursive: true, 
    maxDepth: 50, 
    prettifyUrls: true, 
    filenameGenerator: 'bySiteStructure', 
    directory: './node-website' 
}).then((data) => { 
    console.log("Entire website succesfully downloaded"); 
}).catch((err) => { 
    console.log("An error ocurred", err); 
}); 
