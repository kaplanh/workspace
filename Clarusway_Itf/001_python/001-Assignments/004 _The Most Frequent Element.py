Objective:
To improve your knowledge of collection types (list), working with several built-in functions skills.
After finishing the task correctly, then submit your answer (code) as plain text which shows you did correctly.
Task : Find out the most frequent number and its frequency.

Write a program that;

Finds out the most frequent number in the given list.
Calculates its frequency.
Prints out the result such as :
    
Example
Given list	Desired Output
numbers = [1, 3, 7, 4, 3, 0, 3, 6, 3]
the most frequent number is 3 and it was 4 times repeatedNote : You may need to use useful/necessary built-in functions and list methods other than the functions we haven't covered in the lessons yet. 
# Answer

numbers = [1, 2, 3, 1, 2, 1]
a = max(set(numbers), key = numbers.count)
b= numbers.count(a)
print('{} elemani dizi icinde {} adet bulunmakta'.format(a, b))