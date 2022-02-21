# name = input('what is your name?')
# print(name)

# if name == 'spencer':
#     print(f"Hello my name is {name}")
# else:
#     print(f"not sure what my name is.")

from re import search


searchString = 'MyCompany'
filePath = "/Users/spencerp/Documents/kontakt_python_tests/blankFile.txt"

file = open(filePath, 'r', encoding = "ISO-8859-1")

flag = 0
index = 0

for line in file:
    index += 1
    
    if searchString in line:
        flag = 1
        break
    if flag == 0:
        print('String', searchString, 'not found.')
    else:
        print('String', searchString, 'found in line ', index)
    # file.close()
    