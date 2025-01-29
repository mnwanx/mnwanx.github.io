#include <iostream>
#include <cstdlib>
#include <string>

using namespace std;

const string base_link = "https://github.com/mnwanx/mnwanx.github.io/raw/refs/heads/master/streameo_desktop_release/";
bool downloader(int part)   {
    if (part < 10)  {
        string command = "curl -L " + base_link + "Streameo.part0" + to_string(part) + ".rar -o Streameo.part0" + to_string(part) + ".rar";
        system(command.c_str());
        cout << "Streameo.part0" << part << ".rar" << endl;
    }   else    {
        string command = "curl -L " + base_link + "Streameo.part" + to_string(part) + ".rar -o Streameo.part" + to_string(part) + ".rar";
        system(command.c_str());
        cout << "Streameo.part" << part << ".rar" << endl;
    }
    return true;
}

int main()  {
    for (int i = 1; i <= 21; i++)   {
        downloader(i);
    }
    return 0;
}