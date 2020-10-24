# Expressions Calculator
The goal is to calculate the value of `H` and `K`, which are dependant on the inputs provided.

## Architecture

I divided the exercise into:
- backend: Where all the node/express code lives, and where the logic was loaded to calculate the expressions
- frontend: It's a bootstrapped app created with Create React App. It consists of a little form where the user can modify the parameters and send a request to the backend to get the result.

### Backend
---
#### Stack Selection
- Node
- Express
- [express-validator](https://express-validator.github.io/docs/): to validate the request body
- [cors](https://www.npmjs.com/package/cors): middleware to enable CORS in a local environment
- [morgan](https://github.com/expressjs/morgan): middleware to debug routes

#### File Structure
- **routes**: Where all the routes live (`/base`, `/custom1` and `/custom2`). Each route uis associated with a function inside a `controller`
- **controllers**: It has a multiplexor function that process the request depending on the route reached
- **models**: It contains the class definition to perform the calculations. I created a base calculator, and the custom ones are just classes thet inherit from the base class. This gives extra flexibility to crerate more custom expressions which are easily pluggable into the routes file.

To create a new custom calculator, use this boilerplate:

```
class YourCustomClass extends BaseExpressions {
  constructor(input) {
    super(input)
  }

  calcValues() {
    var {A, B, C, D, E, F} = this.input
    super.calcValues()
    // put your custom logic here
    return {H: this.h, K: this.k}
  }
}
```

#### Code Quality
- I added unit tests for the calculator classes since they contain most of the important logic.


### Frontend
---
#### Stack Selection
- React
- TypeScript: For extra compilation-time typechecking. Since I defined the payload structure in the backend, it made a lot of sense to map that into the frontend as well.
- [TailwindCSS](https://tailwindcss.com/): for rapid UI prototyping

#### File Structure
- **components**: I split the UI into more manageable pieces. I created one component for the `form`, one for the form fields and one for the `results`
- **assets**: It contains the CSS for the app, which is mostly covered by TailwindCSS.

# How to run the project
---

1. Clone this repo in any folder of your liking (namely `expr-evaluator`)
2. cd into `expr-evaluator`

#### Run the backend
- cd into `backend`
- run the command `yarn install` and wait for the dependencies to be installed
- run the command `yarn start`. You'll see on the console a message announcing that the server was started at `http://localhost:5000/
- You can start making requests (read more below)

#### Create requests
There are 3 routes that accept `POST` requests:
- http://localhost:5000/api/v1/expressions/base
- http://localhost:5000/api/v1/expressions/custom1
- http://localhost:5000/api/v1/expressions/custom2

The server is expecting a JSON with this shape in the body:
```
{
	"A": true,      // boolean
	"B": true,      // boolean
	"C": false,     // boolean
	"D": 1.45,     // float
	"E": 1,        // int
	"F": 2         // int
}
```

#### Run the frontend
- cd into `frontend`
- run the command `yarn install` and wait for the dependencies to be installed
- run the command `yarn start`. You'll see on the console a message announcing that the server was started at `http://localhost:3000/`
- You can start using the UI to send requests. Please notice that for it to work **you need to simultaneously run the backend and frontend servers**.


