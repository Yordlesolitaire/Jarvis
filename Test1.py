import locale
from datetime import datetime
from ollama import chat, ChatResponse
import time



# Locale français
locale.setlocale(locale.LC_TIME, "fr_FR.UTF-8")
# --- TOOLS ---
def get_date():
    x = datetime.now()
    return f"{x.strftime('%A')}:{x.strftime('%d')}:{x.strftime('%B')}:{x.strftime('%Y')}"

def get_time():
    x = datetime.now()
    return f"{x.strftime('%H')}:{x.strftime('%M')}"

available_functions = {
    'get_date': get_date,
    'get_time': get_time,
}

# --- SYSTEM PROMPT (Jarvis) ---
messages = [
    {
        "role": "system",
        "content": (
            "Tu es JARVIS, un assistant intelligent et professionnel. "
            f"Tu réponds en {locale.getlocale()}, clairement et poliment. "
            "Pour toute question concernant la date ou l'heure, tu dois utiliser les outils get_date et get_time. "
            "Formule ensuite une phrase naturelle et différente à chaque réponse, sans inventer la date ou l'heure. "
            "Pour toutes les autres questions, réponds de façon précise, claire et concise. "
            "N’utilise jamais de markdown, ni de **, ni de caractères décoratifs."
        )
    },
    {"role": "user", "content": input("User : ")}
]

start = time.perf_counter()
# --- CHAT LOOP ---
MAX_TURNS = 5  # pour éviter boucle infinie

for _ in range(MAX_TURNS):
    response: ChatResponse = chat(
        model='qwen3',
        messages=messages,
        tools=[get_date, get_time],
        think=False,
    )

    # Si le modèle appelle un outil
    if response.message.tool_calls:
        for tc in response.message.tool_calls:
            func_name = tc.function.name
            if func_name in available_functions:
                result = available_functions[func_name]()
                messages.append({'role': 'tool', 'tool_name': func_name, 'content': str(result)})

        # Répondre après l’outil
        response_after_tool: ChatResponse = chat(
            model='qwen3',
            messages=messages,
            tools=[get_date, get_time],
            think=False,
        )
        messages.append(response_after_tool.message)
        print(response_after_tool.message.content)
        break  # tu peux enlever break si tu veux conversation continue

    else:
        # Pas d'outil appelé → afficher directement
        messages.append(response.message)
        print(response.message.content)
        break

end = time.perf_counter()
print(f"Temps d'exécution : {end - start:.6f} secondes")