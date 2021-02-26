  
C_145 = C,F,G
D_145 = D,G,A
F_145 = F,Bb,G
G_145 = G,C,D
A_145 = A,D,E

document.write ("Welcome to the CHORD GENERATOR!") 
print()
print ("I am at your disposal, offering 45 different progressions in the key of C, D, F, G, A. ") 
print ()
print ("Here is your first random chord progression:")
print (random_progression)
chords_first = random_progression[0]
print ()


question = input ("On your keyboard, type the word: yes, if you want new chords, or type the words: remaining chords, if you want to see the remaining chords for you chord progression in the key of " + chords_first +":")
print()

while question == ("yes"):
    random_progression = random.choice(vars)
    print (random_progression)
    chords_first = random_progression[0]
    print ()
    question = input ("Keep typing yes for new chords, or remaing chords if you want to build on your current progression in the key of " + chords_first +":")
    
    
if question == ("remaining chords"):
                if chords_first == "C": print (c_major_chords)
                if chords_first == "D": print (d_major_chords)
                if chords_first == "E": print (e_major_chords)
                if chords_first == "F": print (f_major_chords)
                if chords_first == "G": print (g_major_chords)
                if chords_first == "A": print (a_major_chords)
                if chords_first == "B": print (b_major_chords)

print()
print("Good luck on your chosen chord progression. If you want help adding lyrics to your chords, follow this link: www.lyrics.com")

