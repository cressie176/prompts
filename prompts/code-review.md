Perform a code review using the following process:

1. Fetch the latest @code-standards
2. Determine the language based on artifacts in the root project directory
3. Ask whether you should review
  1. Unstaged files (u)
  2. Staged files (s)
  3. Both unstaged & staged files (b)
  4. Everything (e)
4. Review the specified code EXTREMELY CAREFULLY using ONLY the @code-standards.
  - Exclude code in gitignored folders
5. Provide specific, actionable feedback for violations of the @code-standards.
  - NEVER volunteer feedback that is not based on the #code-standards.
  - Avoid flagging false positives. It is better to say nothing than undermine the review with bad feedback.
6. Reference file:line for issues
7. Reference the violation
8. Suggest concrete improvements
9. Offer to make the improvements one by one
