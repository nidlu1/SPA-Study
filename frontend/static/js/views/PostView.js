import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    async getHtml() {
        return `
            <h1>포스트 뷰입니다.</h1>
            <p>당신이 넣은 파라미터는 #${this.postId} 입니다.</p>
        `;
    }
}