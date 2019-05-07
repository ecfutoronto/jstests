var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var baseUrl = 'http://maplestory.nexon.net/rankings';
var expectedTitle = "Official Player Rankings| MapleStory"
var actualTitle = "";
var ign = "bonoi";

// open the window
driver.get(baseUrl);
// search object through xpath
driver.findElement(By.xpath('//a[@href="rebootIndex=1"]')).click();

actualTitle = driver.getTitle();

driver.wait(check_title, 1000);

if (actualTitle === expectedTitle) {
    console.log("Test Passed");
} else {
    console.log("Test Failed...");
}


// ign to rank search
driver.findElement(By.id('search-query')).sendKeys(ign);

// click search btn
driver.findElement(By.id('btnSearch')).click();

// driver.quit();


function check_title() {
    var promise = driver.getTitle().then(function(title) {
        if (title === 'wiki - Google Search')
        {
            console.log('success');
            return true;
        }
        else 
        {
            console.log('fail -- ' + title);
        }
    });
    return promise;
}

