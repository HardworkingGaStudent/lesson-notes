# Problem 1 - IOU!
disney_characters = ["simba", "ariel", "pumba", "flounder", "nala", "ursula", "scar", "flotsam", "timon"]

for character in disney_characters:
    if "u" in character:
        print(character + " U are so uniquely U!")
    elif "i" in character:
        print(character + " I bet you're Impressively Intelligent!")
    elif "o" in character:
        print(character + " O My! How Original!")
    else:
        print("Ehh, a's and e's are so ordinary.")

# Problem 2: If You're Cold, Sit in a Corner. It's 90 Degrees!
temperature = 90

while temperature != 75:
    print("Temperature is {} — crank the AC!".format(temperature))
    temperature -= 3
else:
    print("{}. Ahh, that's better.".format(temperature))

# Reading Material
"""
Read through the examples in these two articles about for loops and while loops from Digital Ocean. 
Then, answer the following questions.
"""

# Qn: What is a nested loop?
# a loop within a loop. Time complexity = O(N^2)

# Qn: Which kind of loop is based on a conditional statement: while loops or for loops?
# while loop

# Qn: When you want to iterate a specific number of times, would you typically use a while loop or a for loop?
# For loop (can specify the number of times it loops)

# Qn: Is it possible to loop through a string one letter at a time? What is the example given in the article?
# Yes. the example given loops through letter in name "Sammy"

# Qn: Extrapolate from what you learned in the articles: 
# Do you think a for loop can be nested inside a while loop? Why or why not?
# Yes, because for loop iterates across array, but while loop iterates based on conditions (they are different "iterables")
# The nested loop can be while>while, for>for, while>for, for>while
