import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    // this.setTitle("Suh youri");
  }

  async getHTML() {
    console.log(this.params.id);
    return `
        <div class="project_title">영-영, Pointless Sight(2018)</div>
        <div class="project_content">
          <img src="./static/assets/2_game/main-img.gif" alt="pointlessSight" width="600" height=auto/>
          <br>
          <br>
          <b>영-영, Pointless Sight, 서유리,가상현실, 2018, ∞, 가변크기</b><br>
          <br>
          유령을 포착하려는 움직임.<br>
          없지만 있는 것. 있지만 없는 것.<br>
          없지만 있다고 믿고 싶은 것. 있지만 없다고 믿고 싶은 것.<br>
          이건 결국 믿음의 이야기일까 ?<br>
          <br>
          끝 없이 어두워 지는 어둠.<br>
          어둠을 응시하며 생겨나는 잔상.<br>
          어둠 속의 만화경. 그림자의 그림자.<br>
          눈의 오류. 실수.<br>
          감각의 실수가 만드는 이 곳과 저 곳 사이의 시, 공간.<br>
          <br>
          시각의 불신은 몸을 어떻게 다시 감각할까.<br>
          <br>
          더듬으며 보는 것. 눈으로 더듬는 행위.<br>
          어둠에 익숙해지는데 걸리는 시간.<br>
          어둠이 보여주는 것.<br>
          어둠이 보게 하는 것.<br>
          어둠에 익숙한 눈이 보게 되는 곳.<br>
          <br>
          다시 그림자 뒤로 숨기. 어둠 이불.<br>
          <br>
        
        
        <b>[ Download Link ]</b>
        <a href="https://youriiiiiiiiiiii.itch.io/0-0-pointless-sight" class="nav__link">Itch.io</a>
        <a href="https://kiia.creatorlink.net/%EC%84%9C%EC%9C%A0%EB%A6%AC" class="nav__link">Graduation Exhibition</a>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OGwQoQVzR0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img src="./static/assets/2_game/concept.jpeg" alt="pointlessSight" width="560" height=auto/>
        <img src="./static/assets/2_game/10.gif" alt="pointlessSight" width="560" height=auto/>
        <img src="./static/assets/2_game/scene.jpg" alt="pointlessSight" width="560" height=auto/>
        <br>
        [작가노트 중]<br>
        <br>
        어둠은 나를 덮는 큰 이불.<br>
        그림자를 지우기 위해 그림자가 되는 곳이다.<br>
        내가 나를 볼 수 없고 남도 나를 볼 수 없는 곳.<br>
        난 무엇도 될 수 있으며 무엇이 아닐 수도 있다.<br>
        더 정확히는 그 무엇이 아니어도 된다.<br>
        하나의 어둠이 되면 된다.<br>
        <br>
        :<br>
        <br>
        어둠 속에서는 누구의 몸도 그냥 몸일 뿐이었다. 어둠은 모두를 조심스럽게 만들었다. <br>
        천천히. 어둠속에서 달리는 사람은 없었다. <br>
        눈이 어둠에 익숙해 질 때를 기다렸다. <br>
        어둠 속에선 눈을 뜬 것이나 눈을 감은 것이나 다를게 없었다.<br>
        눈이 어둠에 익숙해진다는건 어둠에 익숙해지는 일이 아니라 눈이 빛을 최대한 찾아내는 일이었다.<br>
        빛이 없는 어둠에선 찾을 수 있는 게 아무것도 없었다.<br>
        어둠 속에 있으니 어디까지가 내 몸인지, 몸이 있긴 했었는지 헷갈리기 시작했다.<br>
        어둠 속에선 그런 것들이 다 상관 없는지도 모른다. 경계가 사라지고 모든게 한 덩어리인 곳에선.<br>
        <br>
        :<br>
        <br>
        “책상 모서리에 몸이 스칠 때<br>
        아, 내가 아직 여기 있구나 하는 생각,<br>
        물로 채워진 어떤 덩어리에 대한 생각:<br>
        그리고 가끔 죽은 사람 생각이 들곤 하는데”<br>
        <br>
        <우울한 거울1> , 황지우<br>
        <br>
        
        </div> 
        `;
  }
}
