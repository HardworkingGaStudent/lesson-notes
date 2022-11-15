# <span><img src="../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Welcome to Week 1 Day 3

##  At the end of this lesson, you should know:
1. Python's brief history
1. Python's goals
1. Python's advantages
1. Python's disadvantages
1. Installing python 3

---

## Python in brief

- Created by **Guido van Rossum** in 1989 & released in 1991
- Built during his winter break, as a hobby project

## Python's Goals

- an easy and intuitive language just as powerful as those of the major competitors;
- open source, so anyone can contribute to its development;
- code that is as understandable as plain English;
- suitable for everyday tasks, allowing for short development times.

## Python's Advantages

- High-level language (closer to english than machine code)
- Interpreted (as opposed to compiled) programming language
  - Double-edged sword
- General purpose scripting language that runs outside a browser
- Free and open source
- Comes with a huge library of builtin functions
- FANTASTIC [documentation](https://www.python.org/)

## Python's Disadvantages

- Significantly slower than C/C++ as it is a high-level language
  - Easy for humans to understand, hard to machine to understand, vice versa
- Memory-intensive
- Dynamically-typed
  - Less predictability
- Interpreted on the fly (as opposed to compiled)
  - Again, double-edged sword

---

## Python Installfest

- There are **two** major versions of Python as of now
  - Python 2 & Python 3
- We will used **Python 3** in our course
- Python 2 is still being used, for legacy reasons
  - Many apps and libraries are still using Python 2
- Code that runs in Python 3 might not run on Python 2, vice versa
- Most computers comes with Python 2 & Python 3 already installed

*Check system python version:

1. Open your terminal & run the following code:

```
python3 --version
python --version
```

### Installing python3

1. Mac
  - Should already come preinstalled. Else, do the following:
    - `brew install python`
    - If you get some error complaining about Apple Command Line Tools,
      - Run `xcode-select --install`
      - Then try `brew install python` again

1. Windows: https://www.python.org/downloads/windows/
1. Linux: https://www.python.org/downloads/source/

Once done, run `python3 --version` in your terminal to ensure it is showing version 3

## Running local python files

1. Create a file: `my_file.py` (note it's extension: `.py`)
1. Put in the following the file:
    ```python
    favorite_tv_show = "Ninja Warrior"
    obstacles_cleared = 5
    time = "3 min, 20 sec"
    print("I cleared", obstacles_cleared, "on", favorite_tv_show, "in", time)
    ```
1. Save the file
1. Run `python3 my_file.py`. It should print `I cleared 5 on Ninja Warrior in 3 min, 20 sec`