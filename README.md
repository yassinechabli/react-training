# What is an error boundary?


Error boundaries are React components. Their role is to catch Javascript errors anywhere in their child component tree, log them and display an alternative UI instead of the component tree that crashed.

####Error boundaries catch errors during:

Rendering
Lifecycle methods
Constructors

####But it's important to know that error boundaries do not catch errors for:

Event handlers
Async code
Server side rendering (SSR)
Errors thrown in the error boundary itself
Error boundaries work like a Javascript catch {} block, but for components.