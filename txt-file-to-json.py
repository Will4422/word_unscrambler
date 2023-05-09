import json;

def to_json():
    dict = {}
    for i in range(1, 100):
        dict[i] = []
   

    with open('words_alpha.txt') as word_file:
        for line in word_file:
            line.strip()
            str_len = line.__len__() - 1 # -1 to remove \n
            dict[str_len].append({line.strip() : 0})

    json_file = open('words_alpha.json', 'w')
    json.dump(dict, json_file, indent=4)
    json_file.close()


if __name__ == '__main__':
    to_json()