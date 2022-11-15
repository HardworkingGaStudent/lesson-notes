# Problem: decoding R2D2
R2D2_hash_map = dict()
for i in range(1, 27):
    R2D2_hash_map[i] = chr(i+64)

input_list = [
    ["2 beeps", "6 boops"],
    ["0 beeps", "5 boops"],
    ["9 beeps", "3 boops"],
    ["4 beeps", "8 boops"],
    ["10 beeps", "5 boops"],
    "BOP!",
    ["11 beeps", "12 boops"],
    ["5 beeps", "10 boops"],
    ["1 beep", "17 boops"],
    ["5 beeps", "7 boops"],
    ["4 beeps", "0 boops"]
]

expected_output = str()

for item in input_list:
    if type(item) is str:
        continue
    if type(item) is list and len(item) == 2:
        beepboop = int(0)
        for noise in item:
            beepboop += int(noise.split(" ")[0])
        # print("beepboop is: {}".format(beepboop))
        expected_output += R2D2_hash_map[beepboop]

print("expected_output is {}".format(expected_output))