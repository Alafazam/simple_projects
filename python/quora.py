from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import ConfigParser


# driver = webdriver.PhantomJS()
driver = webdriver.Firefox()

config = ConfigParser.ConfigParser()
config.readfp(open(r'config.pcgf'))
username = config.get('credentials', 'username')
userpassword = config.get('credentials', 'password')


driver.set_window_size(1120, 550)

driver.get("https://quora.com/")
assert "Quora" in driver.title


driver.find_element_by_name('email').send_keys(username)

driver.find_element_by_name('password').send_keys(userpassword)

# driver.find_element_by_class_name('submit_button').click()
# hello = driver.find_element_by_class_name('input_validation_error_text')
# print hello

print 'done'

driver.quit()