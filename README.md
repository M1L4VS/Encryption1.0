# Encryption1.0
Type node .\encrypt1.0.js (can just do e then tab)
Window Terminal
PS C:\Users\milan> cd C:\code\Encryption1.0\
PS C:\code\Encryption1.0> ls (that is ls not 1s)


    Directory: C:\code\Encryption1.0


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       11/09/2020   2:41 PM                .vscode
-a----       14/02/2021   2:32 PM           2443 encrypt1.0.js
-a----       14/02/2021   2:24 PM            963 README.md


PS C:\code\Encryption1.0> node .\encrypt1.0.js
So you have a secret message...? ¯(°_o)/¯
Invalid arguments (╯°□°）╯︵ ┻━┻. Please use E <message> or D <secret>.
PS C:\code\Encryption1.0> node .\encrypt1.0.js E nuddle
So you have a secret message...? ¯(°_o)/¯
Clear text = nuddle
Encoded text = !-31!20!320!3022!3122!48
Decoded text = nuddle

Encrypt stuff.

Instructions for encoding:
1 - Shift
2 - Encode into bases.

3 - If first, sixth, twelfth (etc.) letter, use b-2 version.
4 - Write out words like normal English layout.

Shift:
y = 5 if x < 75
    3 if 75 < x < 82
    2 if 82 < x
x = letter's position in alphabet (a = 1)

Shift first letter = x*156/7.x + (150-yx) 
Shift not first letter = x*156/7.x + (150-yx) + shift previous letter/12.
If ans = neg, * 4.

Instructions for decoding:
1 - Either memorise all the variations of letters, or use the computer program that encoded it.
2 - Hopefully you can understand the language the message was encoded into. If not, the encoding may have been a bit
of a waste of time on you. And why is someone sending you a ultra-encoded message when you don't understand the language
it was originally written in? Yes, you could use a translating thing, but really?