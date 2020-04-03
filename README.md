# Independent Project #3

###### created by **Ryan Duff**
---
## Purpose
###### This project is intended to display competency working with Jquery, HTML forms as well as arrays, array methods, branching and looping in Javascript. The html page takes a number, inputted by the user. When the user submits his/her entry the page then displays a range of numbers counting up from 1 to the users number. All numbers containing a "1" are replaced with the word "Beep", all numbers containing a "2" are replaced with the word "Boop" and all numbers containing a "3" are replaced with the words "Won't you be my neighbor?"
---
### Specs
| Spec | Input | Output |
|:-|:-|:-|
|Page should return numbers other than "1","2","3" as themselves|4|4|
|Page should return "beep" when user enters "1" |1|beep|
|Page should return "boop" when user entry contains the digit "2" |2|boop|
|Page should return "won't you be my neighbor" when user entry contains the digit "3" |3|won't you be my neighbor|
|Page should prioritize the replacement of "3" over the replacement of "1"|13|won't you be my neighbor|
|Page should prioritize the replacement of "3" over the replacement of "2"|32|won't you be my neighbor|
|Page should prioritize the replacement of "2" over the replacement of "1"|21|boop|

---
## Setup Requirements
 * Any web browser will be able to display contents of this program. 
 1. Open web browser of your choosing.
 2. Use toolbar: File>Open File...> *select* index.html
---
### Tech Used
* *HTML*
* *CSS*
* *git*
* *gitHub*
* *Bootstrap*
* *jQuery*
* *JavaScript*
---
### Known Bugs
 * site does not filter user input. input will only work is user correctly inputs number.
---
### Licensing
###### MIT License, copyright Ryan Duff (c) 2020
---