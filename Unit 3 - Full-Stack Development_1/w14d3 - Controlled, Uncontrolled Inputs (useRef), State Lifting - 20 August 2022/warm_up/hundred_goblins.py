def hundred_goblins(numOfGoblins):
	goblins_list = list()
	for i in range(numOfGoblins):
		goblins_list.append(False)

	for i in range(1, numOfGoblins):
		

		for j in range(i, numOfGoblins, i):
			print("j ", j)
			goblins_list[j] = not goblins_list[j]

	numOfCuredGoblins = list()
	for i in range(len(goblins_list)):
		if goblins_list[i] == True:
			numOfCuredGoblins.append(i)

	return numOfCuredGoblins



print(hundred_goblins(100))