import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Suh Youri");
  }

  async getHTML() {
    return `
    
        <div class="set_title_thumbnails">Conceptual Work</div>
        <div class="project_content">
        <section class="container">
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/2_game/onemore_title.gif" alt="pilates" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>1 More(2021)</span>
              </div>
            </a>

            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/onemore_title.gif" alt="pilates" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>1 More(2021)</span>
              </div>
            </a>

            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/6_etc/spareNose(2018).jpeg" alt="nose" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>여분의 코(2018)</span>
              </div>
            </a>

            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/6_etc/emojidialogue(2017).png" alt="emojis" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>Emoji Dialogue(2017)</span>
              </div>
            </a>

            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/6_etc/privatelessonToughLife(2016).jpeg" alt="privatelesson" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>고생개인지도(2016)</span>
              </div>
            </a>

            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/6_etc/evilpigeon(2016).png" alt="pigeon" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>악덕한 비둘기(2016)</span>
              </div>
            </a>
        </section>

        <div class="set_title_thumbnails">Books</div>
        <div class="project_content">
        <section class="container">
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/4_design/SNM_mockup-1.jpg" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>해봄집(2022)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/4_design/VPL_mockup-1.jpg" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>아주 사적인 편지(2021)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/4_design/SN-2020-seongnam.jpg" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>성남(2020)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/4_design/door(2019)-1.png" width="200px" aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>문(2019)</span>
              </div>
            </a>
        </section>

        
        <div class="set_title_thumbnails">Illustrations</div>
        <div class="project_content">
        <section class="container">
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/buddy(2020).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>2인조(2020)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/bombom.gif" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>봄봄아라(2020)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/gossan-high-2019-orange-teaser-download-1080p.gif" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>Gosaan-high(2019)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/dance(2017).png" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>댠스(2017)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/postcard(2016).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>엽서(2016)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/end2015_1.gif" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>끝(2015)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/simsim(2015).gif" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>심심(2015)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/bath(2015).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>목욕(2015)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/swim(2015).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>수영(2015)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/play(2015).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>연극(2015)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/diary(2015).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>그림일기(2013)~</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/sketchbooking(2015).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>Sketchbook-ing(2015)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/sister(2014).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>언니랑(2014)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/namecardPortrait(2013~).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>명함그림프로젝트(2013~)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/1_Illustration/scar(2013~).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>상처(2013~)</span>
              </div>
            </a>
        </section>


        <div class="set_title_thumbnails">Photography & Moving Image</div>
        <div class="project_content">
        <section class="container">
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/7_movingImage/wayhome(2017).png" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>Way Home(2017)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/7_movingImage/desert(2016).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>각자의 사막(2016)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/7_movingImage/find(2015).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>ㅊ(2015)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/7_movingImage/reflection(2016).jpeg" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>Reflection(2016)</span>
              </div>
            </a>
            <a href="/1-More-2021" class="card" data-link>
              <div class="thumb_image">
                <img src="./static/assets/7_movingImage/home-2015.png" alt="pilates" width="200px" 
    aspect-ratio="auto 200 / 134" height="134px"/>
              </div>
              <div class="thumb_title">
                <span>은행2동(2015)</span>
              </div>
            </a>
        </section>


        </div>

        `;
  }
}
