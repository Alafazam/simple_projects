from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# driver = webdriver.PhantomJS()
driver = webdriver.Firefox()



driver.set_window_size(1120, 550)

driver.get("https://gmail.com")

assert "Gmail" in driver.title


driver.find_element_by_id('Email').send_keys("alafazam")
driver.find_element_by_id("next").click()


WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "Passwd")) )

driver.find_element_by_name('Passwd').send_keys("XXXXX")
driver.find_element_by_id("signIn").click()


WebDriverWait(driver, 25).until(EC.presence_of_element_located((By.CLASS_NAME, "UI")))
element = driver.find_element_by_class_name("UI")


print element.content


driver.quit()