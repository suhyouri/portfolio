import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    // this.setTitle("Suh youri");
  }

  async getHTML() {
    console.log(this.params.id);
    return `
        <div class="project_title"></div>
        <div class="project_content">
            works!
        </div>
        `;
  }
}
