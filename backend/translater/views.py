from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait




class translaterView(APIView):
    def post(self,request):
        data = request.data
        word = data['word']
        url = 'https://translate.google.co.in/?sl=en&tl=ml&op=translate'
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        driver = webdriver.Chrome(options=chrome_options)
        driver.get(url)
        input_field = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, f"//*[@aria-label='Source text']"))
        )
        input_field.send_keys(word)

        # Explicit wait for translated text
        translated_element = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "ryNqvb"))
        )
        translated_word = {
            'word': translated_element.text
        }

        driver.quit()

        return Response(translated_word, status = status.HTTP_200_OK)