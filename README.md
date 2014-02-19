# JavaScript Coding Test

This is a sliding scale coding test for the Junior Web Developer position at SatMap.

## Applying

To apply send a pull request with the fixes to one or more of the problem sets below with your name and email address in the commit message.

## Problem Set 1
The code for problem set 1 can be found in the ``pset1`` folder of this repo.

#### Function
This problem set contains a script to capitalise the first letter of each sentence within a paragraph.

#### Bugs
This code contains the following bugs to be fixed.
- The script failes with the error
```Uncaught ReferenceError: sentence is not defined```
- The output of the script does not match the one given below.

#### Output
The output of this script should be EXACTLY as below.

> Two households, both alike in dignity, in fair Verona, where we lay our scene. From ancient grudge break to new mutiny, where civil blood makes civil hands unclean. From forth the fatal loins of these two foes, a pair of star-cross'd lovers take their life. Whose misadventured piteous overthrows, do with their death bury their parents' strife. The fearful passage of their death-mark'd love, and the continuance of their parents' rage. Which, but their children's end, nought could remove, is now the two hours' traffic of our stage. The which if you with patient ears attend, what here shall miss, our toil shall strive to mend.

## Problem Set 2
The code for problem set 2 can be found in the ``pset2`` folder of this repo.

#### Function
This problem set contains a script to ask for a name from the user on page load and display that name in the welcome message.

#### Bugs
This code contains the following bugs
- The name variable always returns ``undefined``

## Problem Set 3
The code for problem set 3 can be found in the ``pset3`` folder of this repo.

#### Function
This problem set contains the same broken code from problem set 2, this code must be fixed and amended so that if more than one name is given in the promopt only the first name shall be shown.

#### Bugs
This code contains the following bugs
- The name variable always returns ``undefined``
- When a first name and second name is entered ONLY the first name should be shown.

#### Output

```js
> Input: John Bloggs
< Output: John
```