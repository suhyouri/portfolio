import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    // this.setTitle("Suh youri");
  }

  async getHTML() {
    console.log(this.params.id);
    return `
        <div class="project_title">1 More(2021) 개발중</div>
        <div class="project_content">
        
        </div> 
        `;
  }
}
