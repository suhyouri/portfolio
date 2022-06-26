import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
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