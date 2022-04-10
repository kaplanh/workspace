💡Objective:
To improve your arithmetic algorithm and knowledge of several functions skills.
Write two Python codes on your Playground/IDE and submit your codes (answer) as plain text. When you are submitting your responses, leave two blank lines between two code blocks (answers) that you will submit.
Task-1:

Write a short Python program that asks the user to enter Celsius temperature (it can be a decimal number), converts the entered temperature into Fahrenheit degree and prints the result.

Task-2:
Write a short Python program that asks the user to enter a distance (it can be a decimal number) in kilometers, converts the entered distance into miles and prints the result.

sicaklik = input("Celsius cinsinden bir deger giriniz:")
print("celcius:", sicaklik)
print("Fahrenheit:",float(sicaklik) * 1.8 +32 )

kilo_metre = int(input("Kilometre giriniz:"))
katt_sayi = 0.621371192  # km'nin mil katsayiyi
mil = kilo_metre * katt_sayi
print("{0} kilometre = {1} mil.".format(kilo_metre, mil))
