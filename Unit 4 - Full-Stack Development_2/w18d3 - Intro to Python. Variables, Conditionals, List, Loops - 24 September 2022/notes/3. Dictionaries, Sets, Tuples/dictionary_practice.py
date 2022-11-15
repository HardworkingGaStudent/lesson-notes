# Partner Exercise: Dictionary Practice
from collections import Counter
my_name = Counter("Callee")
print(dict(my_name))

# other way:
name = "Callee"
my_name1 = dict()
for letter in name:
    if letter in my_name1.keys():
        my_name1[letter] += 1
    else:
        my_name1[letter] = 1
print(my_name1)

# Partner Exercise: Most Popular Word
words = ["hello", "water", "hello"]

def mostPopularWord(words):
    word_freq = Counter(words)
    return dict(word_freq.most_common(1))

import heapq
def mostPopularWord1(words):
    word_freq = dict()
    for word in words:
        if word in word_freq:
            word_freq[word] += 1
        else:
            word_freq[word] = 1
    
    word_heap = list()
    for key, value in word_freq.items():
        word_heap.append((-1*value, key))
    heapq.heapify(word_heap)
    
    return heapq.heappop(word_heap)[1]

print(mostPopularWord(words))
print(mostPopularWord1(words))