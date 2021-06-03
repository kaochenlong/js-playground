import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["input"]

  connect() {
    console.log("hello world")
  }

  increment(e) {
    this.inputTarget.value = Number(this.inputTarget.value) + 1
  }
}
