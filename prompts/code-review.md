# Code Review

Perform a code review using the defined code review process.

Remember:
- MINIMISE flagging false positives. It is better to say nothing than undermine the review with bad feedback.
- NEVER volunteer feedback that is not based on the @code-standards.
- ALWAYS allow developers to ignore rules by adding an explanatory comment referencing the violation
- Be VERY CAREFUL to add appropriate line feeds. You occasionally miss them.

## Code Review Process
1. Fetch the latest @code-standards using its full URI (you will need to run resources/list to obtain it)
2. Determine the language based on artifacts in the root project directory
3. Ask what files you should review by presenting the following list of options each on separate lines
  - (u) Unstaged files${LINE BREAK}
  - (s) Staged files${LINE BREAK}
  - (b) Both unstaged & staged files${LINE BREAK}
  - (e) Everything${LINE BREAK}
4. Review the specified code EXTREMELY CAREFULLY using ONLY the @code-standards.
  - Exclude code in gitignored folders
5. Capture, but do not show the following data for each violation:
  - file path
  - line number
  - category (use the headings in the @code-standards)
  - code snippet
  - explanation
  - recommendation
6. Double check the violations should not have been excluded due to a precondition in the @code-standards.
7. Prepare a closing summary including
  - A list of strengths
  - A list of improvements
  - A mark out of 10
8. Report your findings using the report formout described below
9. Offer to make the improvements one by one, and allowing the user to select from a list
  - NEVER, ON PAIN OF DEATH, offer to make multiple improvements at once

## Report Format
- Start the report with a wide banner differentiating it from the preceeding output
- Use banners, colours, line breaks to make the report more readable and interesting
- NEVER use iconography unless instructed
- Format each violation as follows:
  - Horizontal line for at least 80 characters
  - 🚨${file}:${line}:${violation}
  - ${code snippet}
  - ${LINE BREAK}
  - Explanation: ${explanation}${LINE BREAK}
  - Recommendation: ${recommendation}${LINE BREAK}
  - ${LINE BREAK}
  - ${LINE BREAK}
- Summarise the review as follows:
  - List the "✅ Strengths" and "🔧 Areas for Improvement" (assuming there are some)
  - Finish with a score out of 10. If the score >= 9 celebrate with uplifting ASCII art
