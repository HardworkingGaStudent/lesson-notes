# Problem 1: I Love You, Tuple

# My favorite romance movies
# title, release year, runtime, tagline, main characters
romantic_movie1 = ("The Princess Bride", 1987, 98, "The story of a man and a woman who lived happily ever after.", ["Buttercup", "Westley", "Fezzik", "Inigo Montoya", "Vizzini"])
romantic_movie2 = ("Groundhog Day", 1993, 101, "He's having the day of his life… over and over again.", ["Phil Connors"])
romantic_movie3 = ("Amélie", 2001, 122, "One person can change your life forever.", ["Amélie Poulain", "Nino Quincampoix", "The Garden Gnome"])

def romantic_movie(movie_tuple):
    print("{0} ({1}): {2}".format(movie_tuple[0], movie_tuple[1], movie_tuple[3]))

print("Here are some of my favourite romance movies:")
romantic_movie(romantic_movie1)
romantic_movie(romantic_movie2)
romantic_movie(romantic_movie3)