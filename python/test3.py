from selenium import webdriver

# driver = webdriver.PhantomJS()
driver = webdriver.Firefox()



driver.set_window_size(1120, 550)

driver.get("https://duckduckgo.com/")
assert "DuckDuckGo" in driver.title


driver.find_element_by_id('search_form_input_homepage').send_keys("alafazam")

driver.find_element_by_id("search_button_homepage").click()

print driver.current_url


driver.quit()