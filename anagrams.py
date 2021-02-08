def anagrams(value1, value2):
    
    value1 = value1.lower()
    value2 = value2.lower()

    print(sorted(value1) == sorted(value2))

anagrams('CharM', 'mARcH')
