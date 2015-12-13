from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import ConfigParser


config = ConfigParser.ConfigParser()
config.readfp(open(r'config.pcgf'))
username = config.get('credentials', 'username')
userpassword = config.get('credentials', 'password')



# # driver = webdriver.PhantomJS()
driver = webdriver.Firefox()



driver.set_window_size(1120, 550)

driver.get("https://gmail.com")

assert "Gmail" in driver.title


driver.find_element_by_id('Email').send_keys(username)
driver.find_element_by_id("next").click()


WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "Passwd")) )

driver.find_element_by_name('Passwd').send_keys(userpassword)
driver.find_element_by_id("signIn").click()


WebDriverWait(driver, 25).until(EC.presence_of_element_located((By.CLASS_NAME, "UI")))
element = driver.find_element_by_class_name("UI")


print element.get_attribute("innerHTML")

driver.quit()