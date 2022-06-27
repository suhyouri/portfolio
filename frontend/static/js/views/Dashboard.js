import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHTML() {
    return `
        <h1>Welcome back, Dom</h1>
        <p>
            Fusjdksdks
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>
        </p>
        `;
  }
}
