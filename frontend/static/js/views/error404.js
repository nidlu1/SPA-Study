import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("404"); 
    }
    async getHtml(){
        return `
            <h1>404</h1>
            <p>
                해당 주소는 없습니다.
            </p>
        `;
    }
}