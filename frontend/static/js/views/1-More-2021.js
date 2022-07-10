import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    // this.setTitle("Suh youri");
  }

  async getHTML() {
    console.log(this.params.id);
    return `
        <div class="project_title">1 More(2021)</div>
        <div class="project_content">
          <div class="boxs">
              <img src="./static/assets/2_game/1-more/0-1landing page.png" alt="pilates" width="150" height=auto/>
              <img src="./static/assets/2_game/1-more/0-2credit.png" alt="pilates" width="150" height="auto"/>
              <img src="./static/assets/2_game/1-more/0-3info.png" alt="pilates" width="150" height="auto"/>
              <img src="./static/assets/2_game/1-more/1-1Ingame.png" alt="pilates" width="150" height="auto"/>
              <img src="./static/assets/2_game/1-more/1-2GameOver.png" alt="pilates" width="150" height="auto"/>
              <img src="./static/assets/2_game/1-more/1-3GameOver.png" alt="pilates" width="150" height="auto"/>
          </div>
          <br>
          경기문화재단 2021 예기술술 지원작<br>
          평면작업의 웹게임 확장연구

        </div> 
        `;
  }
}
