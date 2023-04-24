// src/controllers/hello_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["name"] // adds name to the controller's targets

    // connect() {
    //     console.log("Hello, Stimulus!", this.element)
    // }

    // update to greet using text in the input.
    // greet() {
    //     const element = this.nameTarget // this targets the first element in the DOM with data-hello-target="name"
    //     const name = element.value
    //     console.log(`Hello, ${name}!`)
    // }

    // clean up greet() method by extracting a name getter
    greet() {
        console.log(`Hello, ${this.name}!`)
    }

    get name() { // this get thes the value of the first element in the DOM with data-hello-target="name"
        return this.nameTarget.value
    }

}
