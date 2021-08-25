# Typescripts

#### Course: https://frontendmasters.com/courses/typescript-v3/introduction/
#### Docs: https://www.typescriptlang.org/docs/handbook/intro.html

What's TS?
(Simple way) It's a Javascript's typification language 😅 (please, It's not that simple)

```
This means that your existing working JavaScript code is also TypeScript code. 
The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
```

* It has the potential to move some kinds of errors from runtime to compile time 💌 (TYPE CHECKING constanly; that's other way to prevent regression)

So far!
TS is not a vacine!

### Coding:

[tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
[Options details](https://www.typescriptlang.org/tsconfig)


### Important

* **Narrowing**

  https://www.typescriptlang.org/docs/handbook/2/narrowing.html
  Validate the variable's operection types
  
  ** Type guard 

* **Union and Intersection Types**
https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html

  **Union** | define that the value of variable could be of different types

  **Discriminating Union** seems the value could be of different, we should have causion because could have different property too
  A common technique for working with Union types is to have a single property that allows TS to **narrowing** types with the possible type

  **Intersection** &  Allows combine multiple types into one!

* **Type Alises**
TBD

* **Interfaces**
TBD


#### Notes:
Using `any` as a type declaration a doable case is when the data source is unknown! (saw some projects that use it a lot).

Be as explicit as you can (defining interfaces, functions, anything...)!! (we code for human not to  machine).

TS is not a vaccine!

### ToDo

* [ ] Migrate to JS https://www.geeksforgeeks.org/javascript-project-on-todo-list/

### Quations

* How do we migrate projects to TS?
`tsconfig.json` allows to segregate into small pieces of code (split and conquer 🎖)
https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html 