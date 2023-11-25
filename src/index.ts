import "./components/export"
import { addObserver } from "./store/index";
import { sendData, getInfo } from "./firebaseConfig";
import { dispatch } from "./store/index";
import { cellAttributes } from "./components/cell/cell";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
        addObserver(this)
    }

    async addInfo(){
        try{
            const name = this.ownerDocument.querySelector('.name') as HTMLInputElement;
            const letter = this.ownerDocument.querySelector('.letter') as HTMLInputElement;
            const color = this.ownerDocument.querySelector('.color') as HTMLInputElement;

            const nameValue = name.value;
            const letterValue = letter.value;
            const colorValue = color.value;

            await sendData(nameValue,letterValue,colorValue)
        }
        catch{

        }
    }

    async printInfo(){
            try{
            const celdas = this.ownerDocument.querySelector('.celdas')
               const data = await getInfo() 
               data.forEach((data:any) => {
                const cell = this.ownerDocument.createElement('div')
                cell.setAttribute(cellAttributes.letter,data.letter)
                cell.setAttribute(cellAttributes.color,data.color)
               });
            }
            catch{}
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <form>
                <input class="name"><input>
                <input class="letter"><input>
                <input class="color"><input>
                <button class="button"><button>
            </form>
            <div class="celdas">
            `
            const button = this.ownerDocument.querySelector('.button')
            button?.addEventListener('click', ()=>{
                this.addInfo()
                this.printInfo()
            })
        }
    }
}

customElements.define('app-container', AppContainer)