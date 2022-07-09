import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    // this.setTitle("Suh youri");
  }

  async getHTML() {
    console.log(this.params.id);
    return `
        <div class="project_title">서유리</div>
        <div class="project_content">
        <b>몸 탐구가 Body Adventurer</b>
        <br>
        <br>
        실존의 증거로서 몸에 대한 관심을 바탕으로 시각예술과 테크놀로지 기술과의 접목을 모색하고 있다.
        <br>
        Based on interest about body as a clue of existence, 
        Researching and Studying Visual Art and Technology skills. Always
        open new experience !
        <br>
        <img src="./static/assets/0_about/2016_lizardbody.png" height="185" width="auto">
    </div>
        `;
  }
}
