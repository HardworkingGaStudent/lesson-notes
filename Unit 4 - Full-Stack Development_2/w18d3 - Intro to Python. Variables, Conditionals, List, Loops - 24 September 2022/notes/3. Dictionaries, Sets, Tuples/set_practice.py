# We Do: Creating a Set from a List
clothing_list = ["red", "blue", "green", "purple"]
print("Printing clothing_list..")
for i, clothing in enumerate(clothing_list):
    print("index {}: {}".format(i, clothing))

clothing_set = set(clothing_list)
print("Printing clothing_set..")
for clothing in clothing_set:
    print(clothing)

# We Do: Tuples
seasons = ("fall", "winter", "spring", "summer")
for index, season in enumerate(seasons):
    print("{}: {}".format(index, season))