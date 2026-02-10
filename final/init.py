import locale
from pathlib import Path
from babel import Locale

PATH = Path(__file__).parent / "Personalitypromp.txt"


def start_prompt():
    return ()

with open(PATH,"r",encoding="utf-8") as f:
   lang_code = locale.getlocale()[0] or "en_US"
   lang = Locale.parse(lang_code).get_display_name("fr")
   data = f.read()
   data += f'"\nTu réponds en {lang}"'


print(data)