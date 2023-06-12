- Code explanation
    - I made the choice to club the conditional statments such that the code flow of original code snippet should remain the same.

    - While doing so I have made use of conditional OR operators and ternary operators, this has made code more readable as two conditions are clubbed together in one line which enhances the readability and removed redundancy.

    - In the end I have also made a final condition as a summarised version of whole code flow which eventually will return the calculated value of candidate till now or return the max length partition key

- Test Cases
    - First test case just checks if the partition key exists in the event so it checks it against the expected partition key mock value

    - Second test case is to handle the scenario where we don't have any partition key in the event and we generate it using sha512 algorithm. Again we check the generated value with the mock value persisting in event object

    - Third test case checks against the falsy event value like null with expected falsy value (TRIVIAL_PARTITION_KEY) which is 0 in this case.

    - Last condition checks where the partition key length is greater than 256 so here we have created a string of character 'a' repeated 300 times and check it against the expected partition key