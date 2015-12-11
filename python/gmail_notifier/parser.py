from selenium import webdriver

# driver = webdriver.PhantomJS()
driver = webdriver.Firefox()



driver.set_window_size(1120, 550)

driver.get("https://gmail.com")

assert "Gmail" in driver.title


driver.find_element_by_id('Email').send_keys("alafazam")

driver.find_element_by_id("next").click()

driver.find_element_by_id('Passwd').send_keys("trilok786")

driver.find_element_by_id("signIn").click()

element = driver.find_element_by_class_name("UI")


print element


driver.quit()