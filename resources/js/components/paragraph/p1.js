class P1 extends HTMLElement{
    constructor(){
        super()
        console.log('p1 constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('p1 attribute change')
    }
    connectedCallback(){
        console.log('p1 connected')
        this.render()
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        return this.setAttribute('text',val)
    }
    render(){
        console.log('p1 rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <slot>${this.text}</slot>
            `
    }
    get styledTemplate(){
        return `<style>
        *{
            outline:none;
        }
        :host{
            width: auto;
            position: relative;
            font-family:ACLight;
            color: palegoldenrod;
            font-size: calc(78vh * 0.025);
            padding:10px;
        }
        </style>`
    }
    disconnectedCallback(){
        console.log('p1 disconnect')
    }
}
customElements.define('es-p', P1);