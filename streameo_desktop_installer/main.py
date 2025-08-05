from os import system, mkdir, chdir, listdir, remove
from threading import Thread

base_link = "https://github.com/mnwanx/mnwanx.github.io/raw/refs/heads/master/streameo_desktop_release/"

complete_part = 0

def downloader(part):
    global complete_part
    if part < 10:
        command = "curl -s -L " + base_link + "Streameo.exe.part0" + str(part) + " -o Streameo.exe.part0" + str(part)
        system(command)
        
    else:    
        command = "curl -s -L " + base_link + "Streameo.exe.part" + str(part) + " -o Streameo.exe.part" + str(part)
        system(command)
        
    complete_part += 1
    updater()


banner = """
   _____ _                                         _____           _        _ _           
  / ____| |                                       |_   _|         | |      | | |          
 | (___ | |_ _ __ ___  __ _ _ __ ___   ___  ___     | |  _ __  ___| |_ __ _| | | ___ _ __ 
  \___ \| __| '__/ _ \/ _` | '_ ` _ \ / _ \/ _ \    | | | '_ \/ __| __/ _` | | |/ _ | '__|
  ____) | |_| | |  __| (_| | | | | | |  __| (_) |  _| |_| | | \__ | || (_| | | |  __| |   
 |_____/ \__|_|  \___|\__,_|_| |_| |_|\___|\___/  |_____|_| |_|___/\__\__,_|_|_|\___|_|
 v3.2 - Beta

Project Name: Streameo Desktop

Visit Streameo Project: https://streameo.onrender.com
Developed by Code                                                                                          

"""

system('cls')
print(banner)
try:
    mkdir("StreameoDesktop")
except:
    pass
chdir("StreameoDesktop")
for i in range(1, 23):
    Thread(target=downloader, args={i,}).start()

def updater():
    print(f"Downloading: {round(complete_part / 22.0 * 100, 1)} % | {complete_part} / 22", end="\r")
updater()


while True:
    if complete_part == 22:
        all_part = listdir()

        with open("Streameo.exe", "wb") as file:
            for i in range(len(all_part)):
                with open(all_part[i], 'rb') as file2:
                    file.write(file2.read())
                    print(f"Compiling {i / len(all_part) * 100} %", end="\r")
                    file2.close()
                remove(all_part[i])
            file.close()


        try:
            system('msg * Compilation done! Go to \"StreameoDesktop\" folder')
        except:
            print('Compilation done! Go to \"StreameoDesktop\" folder')
            system("pause")
        break
    else:
        pass