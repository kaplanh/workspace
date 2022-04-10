💡Objective:
To improve your boolean logical algorithm skills and to raise your awareness of coronavirus.
Write a Python code on your Playground/IDE and submit your code (answer) as a plain text.
Problem :

Task : Estimating the risk of death from coronavirus.

Consider the following questions in terms of True/False regarding anyone else.

Are you a cigarette addict older than 75 years old? Variable → age

Do you have a severe chronic disease? Variable → chronic

Is your immune system too weak? Variable → immune

Set a logical algorithm using boolean logic operators (and/or) and the given variables in order to give us True (there is a risk of death) or False (there is not a risk of death) as a result.
age =  # can be assigned only True/False
chronic =  # can be assigned only True/False
immune =  # can be assigned only True/False
risk = ? (True or False)

# Answer

age = booll(input("True yada False giriniz"))  #  Are you a cigarette addict older than 75 years old?

chronic = bool( input("True yada False giriniz")) # Do you have a severe chronic disease?

immune = bool(input("True yada False giriniz"))  # Is your immune system too weak?

risk = age or chronic or immune  # sonuc True ise ölüm riski vardir, sonuc False ise ölüm riski yoktur
print(risk)