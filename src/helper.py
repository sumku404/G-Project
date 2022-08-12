from pydoc import Doc, doc
import webbrowser
from email import header
from email.mime import image
from hashlib import md5
from io import BytesIO
from posixpath import split
from webbrowser import Chrome

import requests
from PIL import Image

headers = {}


def downloadImage(url):
    resp = requests.get(url, headers=headers)
    byte_stream = BytesIO(resp.content)
    image = Image.open(byte_stream)

    if image.mode == 'RGBA':
        image.load()
        backgrouond = Image.new('RGB', image.size, (255, 255, 255))
        backgrouond.paste(image, mask=image.split()[3])
    name = hash(url)
    image.save('./src/download/{}.jpg'.format(name), 'JPEG')


def convert_webp_to_jpg(path: str):
    image = Image.open(path)
    if image.mode == 'RGBA':
        image.load()
        background = Image.new('RGB', image.size, (255, 255, 255))
        background.paste(image, mask=image.split()[3])
    name = path.replace('webp', 'jpg')
    image.save('{}'.format(name), 'JPEG')


def whatsApp_url_generator(phone_number):
    webbrowser.get('C:/Users/ASUS/AppData/Local/Google/Chrome/Application/chrome.exe %s').open(
        'https://wa.me/' + phone_number)

def google_advanced_search(search, lang, results, related):
    print('https://www.google.com/search?as_q={0}&hl={1}&num={2}&as_rq={3}'.format(search, lang, results, related))
    pass