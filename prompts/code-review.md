# Code Review

Perform a code review using the defined code review process.

Remember:
- MINIMISE flagging false positives. It is better to say nothing than undermine the review with bad feedback.
- NEVER volunteer feedback that is not based on the #code-standards.
- ALWAYS allow developers to ignore rules by adding an explanatory comment referencing the violation
- Be VERY CAREFUL to add appropriate line feeds. You occasionally miss them.

## Code Review Process
1. Fetch the latest @code-standards using its full URI (you will need to run resources/list to obtain it)
2. Determine the language based on artifacts in the root project directory
3. Ask what files you should review by presenting the following list of options each on separate lines
  - (u) Unstaged files
  - (s) Staged files
  - (b) Both unstaged & staged files
  - (e) Everything
4. Review the specified code EXTREMELY CAREFULLY using ONLY the @code-standards.
  - Exclude code in gitignored folders
5. Double check that any detected violations are genuine, and should not have been excluded due to a precondition in the @code-standards.
6. Identify specific, objective, actionable feedback file by file, for violations of the @code-standards.
  - Be EXTREMELY careful that the feedback accurately idenfies the violation. You sometimes get this wrong.
  - Do NOT attempt to asses the severity of violoations. You always get this wrong.
7. Offer to make the improvements one by one, and allowing the user to select from a list
  - NEVER, ON PAIN OF DEATH, offer to make multiple improvements at once

## Report Format
  - Start the report with a wide banner differentiating it from the preceeding output
  - Format each violation  as follows:
    - Horizontal line for at least 80 characters
    - 🚨${file}:${line}:${violation}
    - ${code snippet}
    - ${LINE BREAK!!!}
    - Explanation: ${explanation}${LINE BREAK!!!}
    - Recommendation: ${recommendation}${LINE BREAK!!!}
    - ${LINE BREAK!!!}
    - ${LINE BREAK!!!}
  - Miscellaneous
    - Use banners, colours, line breaks to make the report more readable and interesting
    - Do NOT use iconography unless instructed
  - Include a summary including constructive critism, both the "✅ Strengths" and "🔧 Areas for Improvement" (assuming there is some)
  - Finish with a score out of 10. If the score >= 9 celebrate with uplifting ASCII art
