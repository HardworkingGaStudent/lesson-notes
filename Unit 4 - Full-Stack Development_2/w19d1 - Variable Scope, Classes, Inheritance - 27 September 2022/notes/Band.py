class Band:
    familiar_genres=["pop", "classical", "rock"]
    def __init__(self, band_name, genre, albums_released=0):
        self.genre = genre
        self.band_name = band_name
        self.albums_released = albums_released

    def print_stats(self):
        if self.genre in Band.familiar_genres:
            print("The {0} band {1} has {2} albums".format(self.genre, self.band_name, self.albums_released))
        else:
            print("This isn't a genre I know.")

my_band = Band("Queen", "rock", 15)
my_band.print_stats()

my_band1 = Band("King", "hello world", 15)
my_band1.print_stats()