
import pdfkit
import markdown
import os

sourceFilePath = r"./src/products.md"
outputFilePath = r"./products_export.pdf"

if os.path.exists(outputFilePath):
    os.remove(outputFilePath)

with open(sourceFilePath, encoding='utf-8') as file:
    content = file.read()
    
html = markdown.markdown(content, output_format='html', extensions=['toc', 'extra', 'smarty', 'tables'])

'''Convert markdown file to html'''
html2pdfDriver = r"D:\wkhtmltopdf\bin\wkhtmltopdf.exe"
configuration = pdfkit.configuration(wkhtmltopdf=html2pdfDriver)
pdfkit.from_string(html, output_path=outputFilePath, configuration=configuration, options={
    'encoding': 'utf-8'
})

