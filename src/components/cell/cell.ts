export enum cellAttributes{
    "color" = "color",
    "letter" = "letter"
}

class CellContainer extends HTMLElement {

    color?: string;
    letter?: string;

    static get observedAttributes(){
        const attrs:Record<>

        return attrs.Objectkeys
    }

    attributeChangedCallback(
        propName:string,
        _:unknown,
        newState:string){
            switch (key) {
                case value:
                    
                    break;
            
                default:
                    break;
            }

    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <div>${this.letter}</div>
            `


        }
    }
}

customElements.define('my-cell', CellContainer)