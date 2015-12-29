from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import ConfigParser
LOGIN_FORM_SELECTOR = '.inline_login_form'
ERROR_MSG_SELECTOR = '.input_validation_error_text[style*="display: block"]'
CONTENT_PAGE_ITEM_SELECTOR = '.UserContentList .pagedlist_item'
QUORA_TITLE = 'Quora - The best answer to any question'
HOME_TITLE = 'Quora - Home'
CONTENT_TILE = 'Your Content - Quora'
CONTENT_URL = 'https://www.quora.com/content?content_types=answers'
PROFILE_IMG_SELECTOR = '.nav_item_link .expanded .profile_photo_img'


# driver = webdriver.PhantomJS()
driver = webdriver.Firefox()

config = ConfigParser.ConfigParser()
config.readfp(open(r'config.pcgf'))
username = config.get('credentials', 'username')
userpassword = config.get('credentials', 'password')


driver.set_window_size(1120, 550)

print 'loading quora now'
driver.get("https://quora.com/")
print 'quora loaded'


print 'We have to login with email and password'
email_input = driver.find_element_by_css_selector(
  LOGIN_FORM_SELECTOR + ' input[type=text]')
password_input = driver.find_element_by_css_selector(
  LOGIN_FORM_SELECTOR + ' input[type=password]')

# assert email_input.is_displayed() and email_input.is_enabled()
# assert password_input.is_displayed() and password_input.is_enabled()

print 'input login details'
email_input.clear()
password_input.clear()
email_input.send_keys(username)
password_input.send_keys(userpassword + Keys.RETURN)

# driver.find_element_by_class_name('submit_button').click()
# hello = driver.find_element_by_class_name('input_validation_error_text')
# print hello

print 'done'

driver.quit()