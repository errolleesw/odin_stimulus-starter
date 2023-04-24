import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static values = { url: String, refreshInterval: Number }

    connect() {
        this.load()

        // if the controller has a refreshInterval value, start refreshing
        if (this.hasRefreshIntervalValue) {
            this.startRefreshing()
        }
    }

    disconnect() {
        this.stopRefreshing()
    }

    load() {
        fetch(this.urlValue)
            .then(response => response.text())
            .then(html => this.element.innerHTML = html)
    }

    startRefreshing() {
        this.refreshTimer = setInterval(() => { // add a reference to the refreshtimer to the controller, this can be stopped by the stopRefreshing() method
            this.load()
        }, this.refreshIntervalValue)
    }

    stopRefreshing() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer)
        }
    }
}