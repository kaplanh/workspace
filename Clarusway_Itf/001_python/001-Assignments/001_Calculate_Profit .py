
import token


Objective:
token improve your arithmetic algorithm and problem solving skills.
Write a Python code on your Playground/IDE and submit your code (answer) as a plain text.
Problem : If you had deposited a coin on the cryptocurrency exchange that brought 7% fixed profit daily for a week, how much would your $ 1000 reach at the end of the 7th day?

a = 1000  # a:ana para($)
n = 0.07  # n:günlük kar($)
t = 7  # t: gün sayisi
s = a * (1 + n) ** t  # 7 gün sonundaki toplam para($)
s=1605.7814764784307