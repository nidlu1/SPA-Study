import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Posts"); 
    }
    async getHtml(){
        return `
            <h1>Posts</h1>
            <p>
                이곳은 Posts입니다.
            </p>
            <a href="/posts/ABCDEF" data-link>ABCDEF 파라미터로 받은 PostView 보기</a>.
        `;
    }
}