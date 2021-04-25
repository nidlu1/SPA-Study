import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Settings"); 
    }
    async getHtml(){
        return `
            <h1>Settings</h1>
            <p>
                이곳은 Settings입니다.
            </p>
        `;
    }
}