# 1. Create list
numbers = [2,4,6,8]

# 2. Max number
max_numbers = max(numbers)

# 3. Pop last element in numbers off, re-insert @ index 2
last_num = numbers.pop()
numbers.insert(2, last_num)

# 4. Pop the 2nd no. in numbers off
numbers.pop(1)

# 5. Append 3 to numbers
numbers.append(3)

# 6. Print out average number
avg_num = sum(numbers)/len(numbers)
print("avg number is: {}".format(str(avg_num)))

# 7. Print numbers
print("numbers is: {}".format(numbers))