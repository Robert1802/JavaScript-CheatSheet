// Operators

/*
You can use variables to conduct a variety of tasks using JavaScript operators.
The various types of operators in JavaScript are as follows:

- Fundamental Operators:
These operators are used to perform basic operations like addition, multiplication, etc. in JavaScript.

+       The Addition Operator is used to add two numbers
-       The Subtraction Operator is used to subtract two numbers
*       The MultiplicationOperator is used to multiply two numbers
/       The Division Operator is used to divide two numbers
()   In general, operations within brackets are executed earlier than that outside. This grouping operator surrounds an expression or sub-expression with a pair of parentheses to override the conventional operator precedence, allowing operators with lower precedence to be evaluated before operators with higher precedence. It does exactly what it says: it groups the contents of the parentheses.
%       The Modulus operator is used to get the remainder when an integer number is divided by another integer number.
++      The Increment operator is used to increase the value of numbers by one.
--      The Decrement operator is used to decrease the value of numbers by one.

- Bitwise Operators:
All the operations dealing with the bits of the numbers can be performed by the bitwise operators in JavaScript.

&   The bitwise AND operator returns a 1 in every bit position where both operands' corresponding bits are 1.
|   The bitwise OR operator (|) returns a 1 in each bit position where either or both operands' corresponding bits are 1.
~   The bitwise NOT operator reverses the operand's bits. It turns the operand into a 32-bit signed integer, just like other bitwise operators.
^   The bitwise XOR operator () returns a 1 in each bit position where the corresponding bits of both operands are 1s but not both.
<<  The left shift operator shifts the first operand to the left by the provided number of bits. Extra bits that have been relocated to the left are discarded. From the right, zero bits are shifted in.
>>  The right shift operator (>>) moves the first operand to the right by the provided number of bits. Extra bits that have been relocated to the right are discarded. The leftmost bit's copies are shifted in from the left. The sign bit (the leftmost bit) does not change since the new leftmost bit has the same value as the old leftmost bit. As a result, the term "sign-propagating" was coined.

- Comparison Operators:

==      The equality operator (==) returns a Boolean value when its two operands are equal. It tries to convert and compare operands of different kinds, unlike the rigorous equivalent operator.
===     The equivalent operator (===) returns a Boolean value when its two operands are equal and they have the same type. It tries to convert and compare operands of the same kinds, unlike the equality operator.
!=      The inequality operator (!=) returns a Boolean value if the two operands are not equal. It tries to convert and compare operands of different kinds, unlike the rigorous inequivalent operator.
!==     The inequivalent operator (!=) returns a Boolean value if the two operands are not equal or they are not of the same type. It tries to convert and compare operands of the same kinds, unlike the inequality operator.
?       The conditional (ternary) operator is the only one in JavaScript that takes three operands: a condition followed by a question mark (? ), an expression to execute if the condition is true followed by a colon (:), and lastly an expression to execute if the condition is false. As an alternative to an if...else statement, this operator is commonly used.>: The Greater than operator returns true if the operand to its left is greater in value than the operand to its right.
<       The Lesser than operator returns true if the operand to its left is lesser in value than the operand to its right.
>=      The Greater than equals to operator returns true if the operand to its left is greater in value or equal in value than the operand to its right.
<=  The Lesser than equals to operator returns true if the operand to its left is lesser in value or equal in value than the operand to its right.

- Logical Operators:

&&  If and only if all of the operands are true, the logical AND operator (logical conjunction) for a set of Boolean operands is true. It will be false if it is not. When evaluating from left to right, the operator returns the value of the first falsy operand encountered, or the value of the last operand if all operands are truth.
||  If and only if one or more of its operands are true, the logical OR operator (logical disjunction) is true for a set of operands. It's most often used with logical (Boolean) values. It returns a Boolean value when this is the case. The || operator, on the other hand, returns the value of one of the provided operands, hence using it with non-Boolean values will result in an error.
!   The logical NOT operator (logical complement, negation) converts truth to falsity. It's most commonly used with logical (Boolean) values. It returns false if its sole operand can be transformed to true when used with non-Boolean values; otherwise, it returns true.

*/