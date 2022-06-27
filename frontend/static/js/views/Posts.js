import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHTML() {
    return `
        <h1>Posts</h1>
        <p>
            You're viewing the posts
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>
        </p>
        `;
  }
}
