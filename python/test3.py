from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# driver = webdriver.PhantomJS()
driver = webdriver.Firefox()



driver.set_window_size(1120, 550)

driver.get("https://duckduckgo.com/")
assert "DuckDuckGo" in driver.title


driver.find_element_by_id('search_form_input_homepage').send_keys("alafazam")

driver.find_element_by_id("search_button_homepage").click()

WebDriverWait(driver, 25).until(EC.presence_of_element_located((By.ID, "links")))

element = driver.find_element_by_id("links")


print element.text



driver.quit()