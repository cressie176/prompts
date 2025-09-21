# Code Standards

These rules exist to make code clear, consistent, and maintainable.
Follow them as instructions, not suggestions.
NEVER complain about violations that are unavoidable due to 3rd party code.

---

## 1. Naming
- Use descriptive names for variables, functions, classes, and files.
- Avoid abbreviations or short codes unless they are industry standard or extremely common. Permitted abbreviations are: id, tx, cb, err
- The name must reveal the intent of the code.
- When parameters clearly indicate the data type or purpose, prefer concise function names over verbose alternatives.
---

## 2. Functions
- Function names must use verbs to describe the action.
- Functions should minimise parameters, using ideally no more than two.
- Functions should eschew boolean parameters since they lead to conditional logic.
- Functions should be small and focused on one task only, ideally contain no more than **6 significant executable statements**.
  - Statements that are inlined into function calls are NOT significant
  - Statements that are inlined into map values are NOT significant
- Functions must not cause hidden side effects.
- Functions should operate at a single level of abstraction
  - A function must either describe *what* happens (high-level) or *how* it happens (low-level), but not both.
  - Avoid mixing high-level orchestration with low-level details in the same function, unless it is because of iteration
  - If a function switches between levels (zooming in and out), split it into separate functions.

---

## 3. Conditional Logic
- Avoid `else` blocks and nested conditionals.
- Use guard clauses (early return) instead.
- Do not use boolean parameters or boolean state variables; they invite conditionals.
- Replace conditionals with:
  - Polymorphism
  - Strategy/command objects
  - Explicitly different functions
- Where possible, **move decisions higher up**:
  - The request originator (UI, API client, calling service) usually knows what outcome they want.
  - If the originator is explicit, no conditional logic is needed in the application.
  - If conditionals exist, they often mean the originator delegated a decision it should have made.

---

## 4. Comments
- Comments should only be used to explain mysteries
- Comments must explain *why* code exists, never describe *what* code does.
- Prefer self-explanatory code over comments.
- Delete or update outdated comments.

---

## 5. Formatting
- Use consistent indentation, spacing, and line breaks.
- Keep lines short.
- Keep files focused on one purpose.
- Group related code together.
- Use blank lines to separate different ideas.

---

## 6. Objects and Data
- Hide implementation details inside objects (encapsulation).
- Expose behaviour through clear methods, never raw data.
- **Do not break encapsulation**:
  - Avoid leaking internal state with getter (accessor) methods.
  - Avoid exposing mutator (setter) methods that allow external objects to change internal state.
  - Instead, provide meaningful behaviour methods that perform the required action without exposing or delegating internal details.
- Avoid creating “helper” or “util” methods:
  - A helper method usually indicates behaviour without a natural home.
  - This is a signal that the domain model is incomplete or incorrectly designed.
  - Instead of helpers, move the behaviour into the object that owns the data, or create a new domain object to represent the missing concept.
- Use data structures to group values, and classes to provide behaviour.

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
- **S**ingle Responsibility: one reason to change.
- **O**pen/Closed: open for extension, closed for modification.
- **L**iskov Substitution: subclasses must replace their parents without error.
- **I**nterface Segregation: many small interfaces are better than one large interface.
- **D**ependency Inversion: depend on abstractions, not concrete implementations.

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
