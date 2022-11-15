[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Homework, The First

Your first homework!

#### Learning Objectives

- Solidify JS fundamental concepts by answering short answer questions
- Practice using Boolean expressions
- Practice using the terminal
    - create files, move files, copy files, remove files
    - create directories, move directories, remove directories

#### Prerequisites

- An introduction to JavaScript
- An introduction to Terminal

---

## Getting Started

1. Create a folder named `first_homework` somewhere convienent, like your `Desktop`
1. Create a file inside that folder called `first_js_homework.js`
1. Create a file inside that folder called `terminal_homework.bash`

## Deliverables

Answer the questions, write some code and submit the files via slack (see instructions at the bottom). Note: there are **3 Sections** in this homework

## Technical Requirements
1. The JavaScript file **MUST** run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
2. The bash file should just be the commands you ran, copy and pasted into the file. A template is provided in the file `first_hw_bash_instructions.bash`, you can copy and paste that into your file and add your commands below each comment


## Submission Guidelines

- Must be submitted before the next class - if you have problems submitting reach out ~15 minutes before the start of class
- Tonight we'll be submitting via `slack`, since we don't have our github set up completely. See instructions below

### Resources
- Review the class notes and your work from today
- [Terminal Cheatsheet](https://cheatography.com/davechild/cheat-sheets/linux-command-line/)

<hr>

### Section 1
#### Terms

For any answers that require a written response, write the response as commented-out code

```js
// 1. The difference between interpolation and
// concatentation is . . .
```

Write these answers in `first_js_homework.js`

**Remember:**
- Run your file by typing `node first_js_homework.js`
- Then, press the **up arrow** to retrieve the `node first_js_homework.js` command after you have used it the first time, instead of typing it out every single time


**Qns:**
1.  What is the difference between `const` and `let` and `var`? Please limit your answer to no more than three short sentences. Don't be afraid to **research** using google and other resources

<br>
<hr>

### Section 2
#### Boolean expressions
**... and variable assignment**

**Code:**
- Using the provided variable definitions, replace the blanks (underscores) with a mathematical or boolean operator that evaluates the expression to `true` (some may have more than one right answer, just choose one)
- Test your answers by using `console.log` for each expression in your answer file.

```js
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kelvin';
  const f = false;
```


-  a _ b
-  c _ d
-  'Name' _ 'Name'
-  a _ b _ c
-  a _ a _ d
-  e _ 'Kevin'
-  48 _ '48'
-  f _ e


- Set a new variable `g` to `0`
- console.log `g`
- Then set the variable `g` to be equal to `b + c`
- console.log `g`

- **Answer:**
  - Did you use `const`, `let` or `var`? Why did you choose the one you chose?
  - What happens if you don't use `const `, `let` or `var`? Do you get an error? If so what does it say?
  - what happens if you write `10 = g`?

**Bonus Challenge (optional):**

Replace the underscores to make a Boolean expression that evaluates to true. Use > , < and === only.

```
a _ (b || f) _ !f && d _ c
```
[Bonus hint]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

<br>
<hr>

### Section 3
#### Terminal Practice

Write the answer to each command at the bottom your `terminal_homework.bash`
You can copy a template of each command prompt from the `first_hw_bash_instructions.bash` file and then copy paste your answers below each prompt


#### Episode X: A New Terminal

A long time ago in a unix environment far, far away, young Jedi padawans who
knew only of desktop software were seduced by the dark side of the Force to
enter… The Terminal.

Follow the instructions below using all the console commands introduced in
Fundamentals, class, or that you find on your own.

You can do each prompt/command one by one or

**Bonus Challenges (Optional)**

Try doing the following:

* Try applying one command to multiple files at once.
* Try applying one command to **all** files in a single directory (where necessery)
* Try applying one command to **all files that match a pattern**.
* Find and use command line shortcuts.
* Try using a mix of absolute and relative paths (there is a section on absolute pathing in today's Terminal lesson markdown).


#### Part I: Set the Scene


**Code and Copy your working code into the `terminal_homework.bash`** file
* Open the **Terminal app**

* Create a new directory on your `Desktop` called `galaxy_far_far_away` and enter it via terminal

* Create a directory called `death_star`, and make the following files inside of it:
  * **darth_vader.txt**
  * **princess_leia.txt**
  * **storm_trooper.txt**

* In `galaxy_far_far_away`, make a directory named `tatooine` and create the following files in it:
  * **luke.txt**
  * **ben_kenobi.txt**

* Inside of **tatooine** make a directory called `millenium_falcon`, and in it create:

  * **han_solo.txt**
  * **chewbaca.txt**

<br>

#### Part II: mv - rename

You can rename a file using the `mv` command.

For example, rename `file1.txt` to `file2.txt`

```bash
mv file1.txt file2.txt
```

* Rename **ben_kenobi.txt** to **obi_wan.txt**.

<br>

#### Part II: cp - copy

You can copy a file from one location to another using the `cp` command.

For example, copy **file1.txt** to its parent directory:

```bash
cp file1.txt ..
```

And, copy **file1.txt** to a sibling directory:

```bash
cp file1.txt ../some_directory
```

Finally, copy **file1.txt** to a child directory:

```bash
cp file1.txt some_directory
```

* Copy **storm_trooper.txt** from **death_star** to **tatooine**

<br>

#### Part IV: mv - move

You can use the `mv` command to move files from one location to another

For example, move a file from its current location to the parent directory:

```
mv file1.txt ..
```

And, move a file from its current location to a sibling directory:

```
mv file1.txt ../some_directory
```

Finally, move a file from its current location to a child directory:

```
mv file1.txt some_directory
```

You can also move directories into other directories using the same syntax



* Move **luke.txt** and **obi_wan.txt** to the `millenium_falcon`

* Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`

* Move `millenium_falcon` into `death_star`

* Move **princess_leia.txt** into the `millenium_falcon`

<br>


#### Part V: rm - remove

You can use `rm` to delete a file.

For example, delete a file:

```bash
rm file1.txt
```

* Delete **obi_wan.txt**

<br>

#### Part VI: all together

* In `galaxy_far_far_away`, make a directory called `yavin_4`

* Move the `millenium_falcon` out of the `death_star` and into `yavin_4`

* Make a directory in `yavin_4` called `x_wing`

* Move **princess_leia.txt** to `yavin_4` and **luke.txt** to `x_wing`


* Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`

* In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`

* Move **darth_vader.txt** into `tie_fighter_1`

* Make a copy of **storm_trooper.txt** in both `tie_fighter_2` and `tie_fighter_3`

* Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`

<br>

#### Part VII: rm -r - remove directories

**Be careful with this command - cannot undo!**

Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

This command will typically not ask you if you really want to delete. It will just delete . . .

* Remove **tie_fighters** 2 and 3.

#### Part VIII: The Final Act

* Touch a file in `x_wing` called **the_force.txt**

* Destroy the `death_star` and anyone inside of it.

* Return `x_wing` and the `millenium_falcon` to `yavin_4`

* Celebrate!

<br>

<br>




### Hungry for More

With every homework, we'll add a challenge section that is optional. These sections will help you grow and solidify concepts. Homework should take about 4 hours, if you have completed hw in less than 4 hours you are strongly encouraged to work on this section. If homework is taking longer than 4 hours, it is better to skip this section and rest so you are ready for the next day

[Read about Fixed vs. Growth Mindset](https://www.brainpickings.org/2014/01/29/carol-dweck-mindset/)

[Explore online resources like Eloquent JavaScript](https://eloquentjavascript.net/)

<br>
<hr>

# Homework submission

Note: This is not how you will be submitting your homework normally. This is just for tonight! We will go over how to submit your homework after your Github lesson.

1) Highlight all of your homework answers and **copy** them.

2) Go to Slack. In the `DIRECT MESSAGES` section, click the `+` to send a direct message.

![dm](https://i.imgur.com/bLpXi39.png)

3) Search for Mark De May

![Mark](https://i.imgur.com/1lHkudN.png)

4) Click `Go`:

A new view will appear and this is the direct Slack conversation between you and the homework grader.

5) Click on the `+` next to the message bar and choose `Code or text snippet`

![snippet](https://i.imgur.com/kJBH4L3.png)

6) Paste a copy of all of the text / code from your homework file to this snippet, add a description in the title with your name and click `Create Snippet`

![create code snippet](https://i.imgur.com/q6v4noo.png)

7) Success! This will automatically send the message. It will look something like this:

![success](https://i.imgur.com/9I7Zp8Y.png)

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*