/*package com.cds.cucumberdemo.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Sample1Test {

	@Given("user is already on Login Page")
	public void user_is_already_on_Login_Page() {
	    
		System.out.println("user on login page");
				
		System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\Drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://ui.cogmento.com/");
	}

	@When("user enters {string} and {string}")
	public void user_enters_and(String string, String string2) {
		System.out.println("user is enters username and password");
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
		System.out.println("user clicks on login button");
	}

	@Then("user verifies that he is on home page")
	public void user_verifies_that_he_is_on_home_page() {
		System.out.println("user on home page");
	}

	@Then("Close the browser")
	public void close_the_browser() {
		System.out.println("closing the browser");
	    
	}
}
*/