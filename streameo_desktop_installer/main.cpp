#include <iostream>
#include <cstdlib>
#include <string>

using namespace std;

const string base_link = "https://github.com/mnwanx/mnwanx.github.io/raw/refs/heads/master/streameo_desktop_release/";
bool downloader(int part)   {
    if (part < 10)  {
        string command = "curl -s -L " + base_link + "Streameo.part0" + to_string(part) + ".rar -o Streameo.part0" + to_string(part) + ".rar";
        system(command.c_str());
        
    }   else    {
        string command = "curl -s -L " + base_link + "Streameo.part" + to_string(part) + ".rar -o Streameo.part" + to_string(part) + ".rar";
        system(command.c_str());
        
    }
    return true;
}

int main()  {
    system("echo off");
    for (int i = 1; i <= 21; i++)   {
        downloader(i);
        float percentage = i / 21.0 * 100;
        if (i < 10) {
            cout << "[ " <<  int(percentage) <<  "% ] Streameo.part0" << i << ".rar" << endl;
        }   else    {
            cout << "[ " << int(percentage) <<  "% ] Streameo.part" << i << ".rar" << endl;
        }
    }
    system("echo on && msg * Done! Combine all parts with WinRAR and enjoy!");
    
    return 0;
}