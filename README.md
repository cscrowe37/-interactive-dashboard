# Interactive Productivity Dashboard
  *This project is a web-based dashboard for my WEB115 class*

## TO DO FUTURE
  - [x] add weekly task goal calculator
  - [ ] task 2
  - [ ] task 3

## WEEKLY TASK GOALS
 This calculates the amount of tasks the users has by taking the inputed data and returning a name and number.

## Imperial/Metric Converter
  converts inches to centimeters, feet to centimeters, yards to meters, miles to kilometers,
  centimeters to inches, centimeters to feet, meters to yards, kilometers to miles.

### logic and pseudocode
  BEGIN
DISPLAY “Code converts Imperial to Metric and vis versa”
DISPLAY Imperial measurements (inch as in , foot as ft , yard as yd , mile as mi)
DISPLAY Metric measurements (centimeter as cm , meter as m , kilometer as km)

INPUT numeric
INPUT string “Imperial to Metric or Metric to Imperial”
INPUT string “current measure type”
INPUT string “Desired measure type”

IF first string = “Imperial to Metric”
	IF second string = “inch”
		THEN number multiply by 2.54
	IF second string = “foot”
		THEN number multiply by 30.48
	IF second string = “yd”
		THEN number multiply by 0.91
	IF second string = "mi”
		THEN number multiply by 1.61
IF first string = “Metric to Imperial”
	IF second string = "centimeter”
		IF third string = "inch”
			THEN number multiply by 0.39
		IF third string = “foot”
			THEN number multiply by 0.0328
	IF second string = “meter”
		THEN number multiply by 1.09
	IF second string = “kilometer”
		THEN number multiply by 0.62
		
OUTPUT number

