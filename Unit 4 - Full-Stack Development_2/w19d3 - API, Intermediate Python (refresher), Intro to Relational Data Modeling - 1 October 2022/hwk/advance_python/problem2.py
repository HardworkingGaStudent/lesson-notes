from random import random

print("I'm thinking of a number between {} and {}".format(1, 10))
random_num = int(random()*10 // 1)

while True:

	try:
		player_guess = int(input("Please guess what it is: "))

		if player_guess < random_num:
			print("That is too low!")
			pass
			
		elif player_guess > random_num:
			print("That is too high!")
			pass

		else:
			print("Yes, the answer is: {}".format(random_num))
			break
			
	except ValueError:
		print("D'oh! That is NOT a number, Bart!")
		pass
