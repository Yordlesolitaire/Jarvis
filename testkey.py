import keyboard

print("Appuie sur des touches (ESC pour quitter)")

def on_key(event):
    if event.event_type == "down":
        print(f"Touche pressée : {event}")
        print(f"Touche pressée : {event.name}")

keyboard.hook(on_key)

keyboard.wait("esc")