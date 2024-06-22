# 🤬 Handling errors

A study of the ways of handling errors on different programming paradigms and languages

<img alt="license url" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=F03A17">

## 📖 About

Error handling is a crucial aspect of software development, ensuring that applications can gracefully handle and recover from unexpected situations. Different programming paradigms and languages offer various strategies for managing errors.

It is structured into multiple sub-projects, each focusing on different programming paradigms and languages, including Go, C#, and JavaScript. The project is hosted in a workspace that includes directories for different approaches to error handling, such as "error-as-value," "railway-oriented programming," and the "result pattern". Each of these directories contains source code and project files relevant to their respective error handling strategies.

Additionally, this project includes references to external resources for further reading on error handling, suggesting a comprehensive approach to understanding and implementing error management in software projects.

> [!NOTE]
> This project is a resource to help me improve my error handling strategies across different programming languages and paradigms and understanding more the concepts of "error", "failures", "exception", etc.

### Pros and cons of each strategy

#### Try-Catch

- Pros:
  - Clarity: The try-catch blocks explicitly delineate code that might throw exceptions from the handling logic, making it clear where errors are expected and handled.
  - Centralized Error Handling: Allows for centralized error handling within the catch block, simplifying the management of multiple error types.

- Cons:
  - Performance Overhead: Exception handling mechanisms can introduce performance overhead, especially if exceptions are used for control flow.
  - Exception Swallowing: Improper use can lead to swallowed exceptions if not rethrown or logged, potentially hiding bugs.
  - Boilerplate Code: Can lead to repetitive code for treating exceptions, increasing verbosity.

#### Error as Values

- Pros:
  - Explicit Error Handling: Forces the programmer to explicitly handle errors by checking the returned value, leading to more robust code.
  - Performance: Generally more performant than exceptions as it avoids the overhead associated with stack unwinding.

- Cons:
  - Boilerplate Code: Can lead to repetitive code for checking error values, increasing verbosity.
  - Error Ignorance: Programmers might ignore the returned error value, leading to unhandled errors.

#### Result Pattern

- Pros:
  - Type Safety: Encapsulates success and failure in a single type, making it clear which functions can return errors and ensuring errors are handled.
  - Composability: Facilitates chaining operations that might fail, making code more readable and maintainable.

- Cons:
  - Learning Curve: Requires understanding of the pattern and how to use it effectively, which might be a barrier for new developers.
  - Complexity: Can introduce complexity in simple scenarios where traditional error handling might suffice.

#### Railway-Oriented Programming (ROP)

- Pros:
  - Functional Approach: Encourages a functional programming style, making error handling a part of the function composition, leading to cleaner and more predictable code.
  - Error Propagation: Automatically propagates errors down the chain without explicit checks at each step, reducing boilerplate.

- Cons:
  - Conceptual Overhead: The concept might be unfamiliar to developers not versed in functional programming, requiring a learning period.
  - Integration: Might be challenging to integrate with codebases that do not follow functional paradigms or where exceptions are the norm.

## 🧱 This project was built with

- [.NET 8](https://dotnet.microsoft.com/pt-br/download/dotnet/8.0)
- [Go](https://go.dev/)
- JavaScript

## 📚 References

- [The Error Handbook, Part 1 – Two Ways to Categorize Errors](https://spin.atomicobject.com/categorize-software-errors/)
- [The Error Handbook, Part 2 – How to Shape and Represent Your Error Data](https://spin.atomicobject.com/capturing-representing-errors/)
- [The Error Handbook, Part 3 – How to Handle Your Errors](https://spin.atomicobject.com/error-handling-process/)
- [Railway oriented programming - A recipe for a functional app, part 2](https://fsharpforfunandprofit.com/posts/recipe-part2/)
- [Functional Error Handling in .NET With the Result Pattern](https://www.milanjovanovic.tech/blog/functional-error-handling-in-dotnet-with-the-result-pattern)
- [Completely Get Rid of Exceptions Using This Technique](https://www.youtube.com/watch?v=C1oGnDEnS14)
