#!python

from ast import literal_eval
import cgi

FORM = cgi.FieldStorage()
print("Content-Type: text/plain\n")
ERROR = False

try:
    NAME = FORM['login'].value
except KeyError:
    print("please enter your name")
    ERROR = True
try:
    WORD = FORM['password'].value
except KeyError:
    print("please enter a password")
    ERROR = True
if not ERROR:
    if literal_eval(FORM['new'].value):
        print('Welcome ' + NAME)
    else:
        print('Welcome back ' + NAME)