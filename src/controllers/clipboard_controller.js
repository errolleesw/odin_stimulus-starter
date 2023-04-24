// src/controllers/clipboard_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["source"] // adds source to the controller's targets
    static classes = ["supported"] // adds supported to the controller's classes

    connect() { // the connect() method checks if if there is an element connected.
        if ("clipboard" in navigator) { // if the clipboard API is supported
            this.element.classList.add(this.supportedClass) // add the supported class to the controller's element
        }
    }

    copy() {
        event.preventDefault()
        navigator.clipboard.writeText(this.sourceTarget.value) // this.sourceTarget evaluates to the first source target in the controller's scope. i.e. within the controller's element
    }
}