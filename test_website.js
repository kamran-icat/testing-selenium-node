import { Builder, By, Key, until } from 'selenium-webdriver';

async function runTest() {
  // Initialize the WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Step 1: Open the website
    await driver.get('https://www.google.com');

    // Step 2: Find the search box by name attribute and enter a search term
    let searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);

    // Step 3: Wait for the results page to load and display the results
    await driver.wait(until.titleContains('Selenium WebDriver'), 6000);

    // Step 4: Get the title of the results page and print it
    let title = await driver.getTitle();
    console.log('Page title is: ' + title);

  } finally {
    
    await driver.quit();
  }
}

runTest();
