package com.cds.cucumberdemo.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Login_stepdefinition {
	
	WebDriver driver;
	@Given("user is already on Login Page")
	public void user_is_already_on_Login_Page() {	
		System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\Drivers\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://ui.cogmento.com/");   
	}

	@When("user enters {string} and {string}")
	public void user_enters_and(String username, String password) throws InterruptedException {	
		//Thread.sleep(3000);
		driver.findElement(By.name("email")).sendKeys(username);
		Thread.sleep(3000);
		driver.findElement(By.name("password")).sendKeys(password);  
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() throws InterruptedException {
		//Thread.sleep(2000);
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();  
	}

	@Then("user verifies that he is on home page")
	public void user_verifies_that_he_is_on_home_page() throws InterruptedException {
		//Thread.sleep(3000);
		String title = "Cogmento CRM";	
		Assert.assertEquals(driver.getTitle(), title);    
	}

	@Then("Close the browser")
	public void close_the_browser() {
		driver.close();    
	}

}
