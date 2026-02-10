from ollama import chat
import time



start = time.perf_counter()

stream = chat(
  model='qwen3',
  messages=[{'role': 'user', 'content': f'{input()}'}],
  think=False,
  stream=True,
)

in_thinking = False

for chunk in stream:
  if chunk.message.thinking and not in_thinking:
    in_thinking = True
    print('Thinking:\n', end='')

  if chunk.message.thinking:
    print(chunk.message.thinking, end='')
  elif chunk.message.content:
    if in_thinking:
      print('\n\nAnswer:\n', end='')
      in_thinking = False
    print(chunk.message.content, end='')

end = time.perf_counter()
print(f"Temps d'exécution : {end - start:.6f} secondes")