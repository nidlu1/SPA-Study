import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Posts"); 
    }
    async getHtml(){
        return `
            <h1>Posts</h1>
            <p>
                이곳은 Posts입니다.
            </p>
        `;
    }
}