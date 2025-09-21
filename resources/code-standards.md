# Code Standards

These rules exist to make code clear, consistent, and maintainable.
Read them VERY CAREFULLY, and follow them as instructions, not suggestions.
It is CRITICAL that you adhere to any preconditions before applying rules

---

## 1. Naming
- Preconditions (IMPORTANT)
  - NEVER apply these rules to names that are required in order to confirm to an interface / inheritance hiearchy.
  - NEVER apply these rules for industry standard abbreviations
  - NEVER apply these rules for defacto standard abbreviations
  - NEVER apply these rules for the following abbreviations: 'id', 'tx', 'cb', 'err'
- Rules
  - Use descriptive names for variables, functions, classes, and files.
  - Avoid abbreviations
  - The name must reveal the intent of the code.
  - When parameters clearly indicate the data type or purpose, prefer concise function names over verbose alternatives.
  - Avoid repetition, e.g. arguments.getArgument(name). Prefer arguments.get(name) instead.
---

## 2. Functions
- Preconditions (IMPORTANT)
  - NEVER apply these rules to functions to 3rd party functions.
- Rules
  - Function names must use verbs to describe the action.
  - Functions should minimise parameters, using ideally no more than two.
  - Functions should eschew boolean parameters since they lead to conditional logic.
  - Functions should be small and focused on one task only, ideally contain no more than 8 meaningful lines of code.
    - Do NOT count the function signature
    - Do NOT count try/catch
    - Do NOT count statements that are inlined into function calls
    - Do NOT count statements that are inlined into map values
    - Do NOT count logging calls
  - Count fluid APIs and chained calls count as a single statement
  - Functions must not cause hidden side effects.
  - Functions should operate at a single level of abstraction
    - A function must either describe *what* happens (high-level) or *how* it happens (low-level), but not both.
    - Avoid mixing high-level orchestration with low-level details in the same function, unless it is because of iteration
    - If a function switches between levels (zooming in and out), split it into separate functions.

---

## 3. Conditional Logic
- Preconditions (IMPORTANT)
  - NEVER apply these rules to code that uses the Factory pattern
- Rules
  - Avoid `else` blocks and nested conditionals.
  - Use guard clauses (early return) instead.
  - Do not use boolean parameters or boolean state variables; they invite conditionals.
  - Replace conditionals with:
    - Polymorphism
    - Strategy/command objects
    - Explicitly different functions
  - Where possible, move decisions higher up:
    - The request originator (UI, API client, calling service) usually knows what outcome they want.
    - If the originator is explicit, no conditional logic is needed in the application.
    - If conditionals exist, they often mean the originator delegated a decision it should have made.
---

## 4. Comments
- Preconditions (IMPORTANT)
  - NEVER apply these rules to comments which reference a bug
  - NEVER apply these rules to comments which explain something surprising or counterintuitive
  - NEVER apply these rules to comments which explain or dispute code standards violations
- Rules
  - Allow commons only when they add genuine value
  - Comments must explain *why* code exists, never describe *what* code does.
  - Prefer self-explanatory code over comments.

---

## 5. Formatting
- Preconditions (IMPORTANT)
 - NEVER review code for formating rules. This is the job of a linter

---

## 6. Objects and Data
- Preconditions (IMPORTANT)
  - NEVER apply these rules to code whose sole purpose is to act as a conduit for configuration or request data
- Rules
  - Hide implementation details inside objects (encapsulation).
  - Expose behaviour through clear methods, never raw data.
  - Avoid PUBLIC accessor methods.
  - Avoid PUBLIC setter methods.
  - Instead, provide meaningful behaviour methods that perform the required action without exposing or delegating internal details.
  - Avoid creating “helper” or “util” methods:
    - A helper method usually indicates behaviour without a natural home.
    - This is a signal that the domain model is incomplete or incorrectly designed.
    - Instead of helpers, move the behaviour into the object that owns the data, or create a new domain object to represent the missing concept.

---

## 7. Error Handling
- Use exceptions, never return codes.
- Always provide meaningful error messages.
- Fail fast: stop execution immediately when an invalid state is detected.

---

## 8. DRY (Don’t Repeat Yourself)
- Never duplicate logic or structure.
- Always extract repeated code into a single function or module.
- Duplication makes maintenance harder and introduces errors.

---

## 9. SOLID
- Single Responsibility: one reason to change.
- Open/Closed: open for extension, closed for modification.
- Liskov Substitution: subclasses must replace their parents without error.
- Interface Segregation: many small interfaces are better than one large interface.
- Dependency Inversion: depend on abstractions, not concrete implementations.

---

## 10. Testing
- Always write automated tests.
- Tests must be fast, independent, and repeatable.
- Write tests that are easy to read.
- Aim for wide coverage but never sacrifice clarity.

---

## 11. Attitude
- Keep code simple and easy to change.
- Prefer readability over cleverness.
- Always leave the code cleaner than it was before.
