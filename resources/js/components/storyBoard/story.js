//imports
import anime from '../../../../node_modules/animejs/lib/anime.es.js';

//components

//import '../bars/imagebar/imagebar'

//images
//import bg from '../../../img/ws38.jpg'
//import bgO from '../../../img/UTArtboard-1-20.gif'
import one from '../../../img/Asset4.png'
import two from '../../../img/Asset2.png'
import three from '../../../img/espiiforweb.png'
import four from '../../../img/jasenalogo.png'
import five from '../../../img/Asset5.png'
import six from '../../../img/Asset6.png'
import seven from '../../../img/phone.png'
import { initial } from 'lodash';

export class Story extends HTMLElement {
    constructor() {
        super()
        console.log('story constructed')
        this.shadow = this.attachShadow({ mode: 'open' })
        this.setup()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        console.log('STORY: '+ this.getAttribute('class') + ' ATTRIBUTE-CHANGE:' + prop)
        switch (prop) {
            case 'active':
                switch (newVal) {
                    case null:
                        console.log('STORY: '+ this.getAttribute('class') + ' ACTIVE: moveback')
                        this.moveInactive()
                        return
                    case '':
                        console.log('STORY: '+ this.getAttribute('class') +' ACTIVE: none')
                        return
                    case 'right':
                        console.log('STORY: '+ this.getAttribute('class') +' ACTIVE: right')
                        this.moveMe('right')
                        return
                    case 'left':
                        console.log('STORY: '+ this.getAttribute('class') +' ACTIVE: left')
                        this.moveMe('left')
                }
                return
            case 'cssmove':
                switch (this.hasAttribute('active')) {
                    case true:
                        console.log('STORY: '+ this.getAttribute('class') + ' has ACTIVE: cssmove change')
                        return
                    case false:
                        console.log('STORY: '+ this.getAttribute('class') + ' has NO ACTIVE: cssmove change')
                        this.moveInactive()
                        return
                }
            case 'expandstory':
                switch (this.hasAttribute('expandstory')){
                    case true:
                        console.log('STORY: '+ this.getAttribute('class') +' EXPAND')
                        this.xpand()
                        this.backface = 0
                        this.render()
                        return
                    case false:
                        return
                }
            case 'close':
                console.log('STORY: '+ this.getAttribute('class') +' CONTRACT')
                this.cloze()
                return
            case 'resize':
                console.log('STORY: '+ this.getAttribute('class') +' RESIZE')
                this.resize()
                this.removeAttribute('resize')
                this.render()
                return
            case 'imgset':
                this.imgset
                return
            case 'ptext':
                this.ptext
                return
        }

    }
    get backface() {
        return this.getAttribute('backface')
    }
    set backface(val) {
        return this.setAttribute('backface', true)
    }
    get storyOffset() {
        return this.getAttribute('storyoffset')
    }
    set storyOffset(val) {
        return this.setAttribute('storyoffset', val)
    }
    get closeLeft() {
        return this.getAttribute('closeleft')
    }
    set closeLeft(val) {
        return this.setAttribute('closeleft', val)
    }
    get cssMove() {
        return this.getAttribute('cssmove')
    }
    set cssMove(val) {
        return this.setAttribute('cssmove', val)
    }
    get cssMoveClose() {
        return this.getAttribute('cssmoveclose')
    }
    set cssMoveClose(val) {
        return this.setAttribute('cssmoveclose', val)
    }
    get img() {
        console.log('GET img')
        return this.getAttribute('img')
    }
    set img(val) {
        console.log('SET IMG setting image')
        return this.setAttribute('img', val)
    }
    get h1() {
        return this.getAttribute('h1')
    }
    set h1(val) {
        return this.setAttribute('h1', val)
    }
    get h2() {
        return this.getAttribute('h2')
    }
    set h2(val) {
        return this.setAttribute('h2', val)
    }
    get expandStory() {
        return this.getAttribute('expandstory')
    }
    set expandStory(val) {
        return this.setAttribute('expandstory', val)
    }
    get expandLeft() {
        return this.getAttribute('expandleft')
    }
    set expandLeft(val) {
        return this.setAttribute('expandleft', val)
    }
    get imgset() {
        return this.getAttribute('imgset')
    }
    set imgset(val) {
        for (var i = 0; i < val.length; i++) {
            //console.log(i)
            let img = document.createElement('es-imagebar')
            img.setAttribute('src', val[i][0])
            img.setAttribute('text', val[i][1])
            img.setAttribute('description', val[i][2])
            console.log(this.shadowRoot.lastElementChild)
            this.shadowRoot.lastElementChild.shadowRoot.lastElementChild.appendChild(img)
        }
        return
    }
    get firstTouch(){
        return this.getAttribute('firsttouch')
    }
    set firstTouch(val){
        return this.setAttribute('firsttouch',val)
    }
    get lastTouch(){
        return this.getAttribute('lasttouch')
    }
    set lastTouch(val){
        return this.setAttribute('lasttouch',val)
    }
    get ptext() {
        return this.getAttribute('ptext')
    }
    set ptext(val) {
        return this.setAttribute('ptext')
    }
    get active() {
        return this.getAttribute('active')
    }
    set active(val) {
        return this.setAttribute('active', '')
    }
    get inactive() {
        return this.getAttribute('inactive')
    }
    set inactive(val) {
        return this.setAttribute('inactive', '')
    }
    get touchMove(){
        return this.getAttribute('touchmove')
    }
    set touchMove(val){
        return this.setAttribute('touchmove', val)
    }
    setup() {
        // fullWidth = outerWidth
        // textBoardSpace = 20% of outerWidth
        // storySpace = offset to left of screen
        // storyWidth = storywidth
        // storyOffset = story offset
        // centerPosition = central position of story
        // next = next position
        // previous = previous position
        // expandLeft = expand story positon
        // cd = close position

        var fullWidth = window.outerWidth * 0.95
        var textBoardSpace = Math.round(0.2 * fullWidth)
        var storyOffset = this.offsetLeft
        // if (fullWidth <= 850) {
        //     var storySpace = Math.round(fullWidth)
        //     var expandLeft = Math.round(-storyOffset)
        // }
        // else {
        //     var storySpace = Math.round(fullWidth + textBoardSpace)
        //     var expandLeft = Math.round(-storyOffset + textBoardSpace)
        // }
        var storySpace = Math.round(fullWidth)
        var expandLeft = Math.round(-storyOffset)
        var storyWidth = 300
        var centerPosition = Math.round((storySpace - storyWidth) / 2)
        var cPosition = Math.round((fullWidth - storyWidth) / 2)

        this.setAttribute('cssmove', centerPosition + 'px')
        this.setAttribute('storyoffset', storyOffset)
        this.setAttribute('expandleft', expandLeft)
        this.setAttribute('Cposition', cPosition)
        switch (this.hasAttribute('active')) {
            case true:
                this.moveActive()
                return
            case false:
                this.setAttribute('inactive','')
                this.moveInactive()
        }
    }
    moveMe(val) {
        switch (val) {
            case 'right':
                console.log('STORY: '+ this.getAttribute('class')+ ' moveRIGHT')
                var cssmove = this.cssMove
                var moveStory = parseInt(cssmove) - 300
                var moveStoryPx = moveStory + 'px'
                this.setAttribute('cssmove',moveStoryPx)
                this.moveActive()
                var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                storyInacitve.forEach(element => {
                    element.setAttribute('cssmove', moveStoryPx)
                });
                return
            case 'left':
                console.log('STORY: '+ this.getAttribute('class')+ 'moveLEFT')
                var moveStory = parseInt(this.cssMove) + 300
                var moveStoryPx = moveStory + 'px'
                this.setAttribute('cssmove',moveStoryPx)
                this.moveActive()
                var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                storyInacitve.forEach(element => {
                    element.setAttribute('cssmove', moveStoryPx)
                });

        }
    }
    xpand() {
        var fullWidth = window.outerWidth 
        var textBoardSpace = Math.round(0.2 * fullWidth)
        if (fullWidth <= 850) {
            var storyOffset = this.offsetLeft
            var expandLeft = Math.round(-storyOffset)
        }
        else {
            var storyOffset = this.offsetLeft
            //var expandLeft = Math.round(-storyOffset + textBoardSpace)
            var expandLeft = Math.round(-storyOffset)
        }
        var expandLeftPx = expandLeft + 'px'
        this.setAttribute('cssmove',expandLeftPx)
        this.moveActive()
        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('cssmove', expandLeftPx)
        });
        return
    }
    cloze() {
        var fullWidth = window.outerWidth * 0.95
        var textBoardSpace = Math.round(0.2 * fullWidth)
        var storyOffset = this.offsetLeft
        var storyWidth = 300

        // if (fullWidth <= 850) {
        //     var storySpace = Math.round(fullWidth)
        // }
        // else {
        //     var storySpace = Math.round(fullWidth + textBoardSpace)
        // }
        var storySpace = Math.round(fullWidth)
        var centerPosition = Math.round((storySpace - storyWidth) / 2) - storyOffset
        var centerPositionPx = centerPosition + 'px'

        this.storyOffset = storyOffset

        this.setAttribute('cssmove',centerPositionPx)
        this.removeAttribute('expandstory')
        this.removeAttribute('backface')
        this.moveActive()
        this.render()
        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('cssmove', centerPositionPx)
        });
    }
    resize() {
        console.log(window.innerHeight)
        var fullWidth = window.outerWidth * 0.95
        var textBoardSpace = Math.round(0.2 * fullWidth)
        var storyOffset = this.offsetLeft
        var storyWidth = 300

        // if (fullWidth <= 850 ){
        //     var storySpace = Math.round(fullWidth)
        // }
        // else {
        //     var storySpace = Math.round(fullWidth + textBoardSpace)
        // }
        var storySpace = Math.round(fullWidth)
        if(this.hasAttribute('active')){
            var centerPosition = Math.round((storySpace - storyWidth) / 2) - storyOffset
            var centerPositionPx = centerPosition + 'px'
            this.cssMove = centerPositionPx
            this.setAttribute('storyoffset', storyOffset)
            this.moveActive()
            var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
            storyInacitve.forEach(element => {
                 element.setAttribute('cssmove', centerPositionPx)
            });
        }




        console.log("RESIZED")
        return
    }
    moveActive() {
        var cssmove = this.cssMove
        console.log('STORY: ' + this.getAttribute('class') +" transform: translateX(" + cssmove + ") scale(0.8)")
        if (this.hasAttribute('active')) {
            anime({
                targets: this,
                translateX: parseInt(cssmove),
                rotateY: 0,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuart'
            })
            // this.animate([
            //     { transform: "translateX(" + cssmove + ")" }
            // ],
            //     {
            //         duration: 500,
            //         fill: 'forwards',
            //         easing: 'cubic-bezier(.39,.11,.61,.84)'

            //     }
            // )
        }
        else {
            anime({
                targets: this,
                translateX: parseInt(cssmove),
                scale: 0.7,
                rotateY: 45,
                easing: 'easeOutQuart',
                duration: 200
            })
            // this.animate([
            //     { transform: "translateX(" + cssmove + ") scale3d(0.7,0.7,0.7) rotateY(45deg)" }
            // ],
            //     {
            //         duration: 500,
            //         fill: 'forwards',
            //         easing: 'cubic-bezier(.39,.11,.61,.84)'

            //     }
            // )
        }

    }
    moveInactive() {
        let cssmove = this.cssMove
        console.log('STORY: ' + this.getAttribute('class') + " INACTIVE-TRANSFORM: translateX(" + cssmove + ") scale(0.8)")
        anime({
            targets: this,
            translateX: parseInt(cssmove),
            scale: 0.7,
            rotateY: 20,
            easing: 'easeOutQuart',
            duration: 200
        })
        // this.animate([
        //     { transform: "translateX(" + cssmove + ") scale3d(0.7,0.7,0.7) rotateY(45deg)" }
        // ],
        //     {
        //         duration: 500,
        //         fill: 'forwards',
        //         easing: 'cubic-bezier(.39,.11,.61,.84)'

        //     }
        // )
    }
    connectedCallback() {
        console.log('story connected: ' + this.classList)
        // Handle the start of gestures
        window.addEventListener('resize',e=>{
            console.log('resizing')
            this.setAttribute('resize','true')

        })
        this.addEventListener('touchstart',e=>{
            console.log('start')
            if(this.hasAttribute('expandstory')){
                return
            }
            else{
                var touches = e.changedTouches
                this.firstTouch = touches[0].screenX
                this.touchMove = false
            }
            return
        })
        this.addEventListener('touchmove',e=>{
            console.log('move')
            this.touchMove = true
        })
        this.addEventListener('touchend',e=>{
            console.log('end')
            if(this.hasAttribute('expandstory')){
                return
            }
            else{
            var touches = e.changedTouches
            this.lastTouch = touches[touches.length - 1].screenX
            var firstTouch = this.firstTouch
            var lastTouch = touches[touches.length - 1].screenX
            if(firstTouch > lastTouch && this.touchMove === 'true' ){
                document.querySelector('es-carousel').shadowRoot.querySelector('es-next').click()
            }
            if(firstTouch < lastTouch && this.touchMove === 'true' ){
                document.querySelector('es-carousel').shadowRoot.querySelector('es-previous').click()

            }
        }
            
        })
        this.addEventListener('touchcancel',e=>{
            console.log('cancel')
        })
        this.render();
        this.disconnectedCallback()
    }
    static get observedAttributes() {
        return [
            'active', 'move', 'cssmove', 'expandstory', 'close', 'resize', 'expandleft', 'imgset', 'ptext'
        ];
    }
    render() {
        if (this.backface) {
            console.log(' story render backface')
            this.shadow.innerHTML = `
            ${this.styleTemplate}
            <div>
                <es-closebutton></es-closebutton>
                <es-heading text=${this.h1} textafter=${this.h2}></es-heading>
            </div>
            <es-storybackface ></es-storybackface>
            `
            if (this.classList.contains('0')) {
                this.imgset = [
                    [one,
                    'Coart of Arms',
                    'We design family, company, organizational or state escutcheons with personalized mottos. '], 
                    [two,
                    'Escutcheons',
                    'Rolls of arms are the primary sentiment for brand recognition. Shields have been used across time by noble families and organizations to inform the public about genealogy.'],
                    [three,
                    'Corporate Logos',
                    'Make creative graphic symbols to aid and promote brand recognition across different platforms.'],
                    [four,
                    'Production Logos',
                    'Get digitized logos that can be animated and be used accross multiple digital platforms.'
                    ]
                ]
            }
            if (this.classList.contains('1')) {
                this.imgset = [[five, 'Social Media Design'], [six, 'App Design'], [seven, 'App Design']]
            }
        }
        else {
            console.log('story render')
            this.shadow.innerHTML = `
        ${this.styleTemplate}
        <es-image alt="${this.h1 + this.h2}" img = ${this.img}></es-image>
        <es-heading text=${this.h1} textafter=${this.h2}></es-heading>
        <es-p text='${this.ptext}'></es-p>
        <es-button></es-button>`}
    }
    disconnectedCallback() {
        console.log('story disconnected')
    }
    get styleTemplate() {
        return `<style>
        *{
            box-sizing:border-box;
            outline:none;
        }
        ::-webkit-scrollbar {
            width: 0;
        }
        :host{
        width:300px;
        min-width:300px;
        max-width:300px;
        position: relative;
        border-radius: 3px;
        height:calc(78vh * 0.9);
        background-color: #b1b1;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        transform-style: preserve-3d;
        transform-origin:center;
        transition: 0.5s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        opacity: 0.5;
        z-index:0;

    }
    :host([backface]){
        display:flex;
        flex-direction:row;
        align-items:flex-start;
    }
    div{
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: calc(80vw * 0.12);
        position:absolute;
        top:0;
        margin:10px;
        z-index:2;
        padding-left:20px;
    }
    :host([active]){
        opacity: 1;
        position: relative;
        box-shadow: 2px 3px 19px 2px rgb(0 0 0 / 71%), 0 0 2px 1px rgb(0 0 0 / 76%);
        transform-style: preserve-3d;
        transform-origin:center;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-right: 1px outset;
        border-left: 1px outset;
        border-image: linear-gradient(transparent, transparent,#e63380,transparent,transparent);
        border-image-slice:1;
        z-index:1;

    }
    :host([active])::after,
    :host::after{
        content: " ";
        border-radius: 10px;
        width: 100%;
        height: 10%;
        box-shadow: -10px 20px 16px 5px #00000008;
        position: absolute;
        background: linear-gradient(to top, currentColor, transparent, transparent);
        bottom: 0;
        transform-style: preserve-3d;
        transform-origin: top;
        backdrop-filter:opacity(0.5);
        -webkit-backdrop-filter:opacity(0.5);
        z-index: -1;
    }
    @supports (-webkit-box-reflect: below;) {
        :host([active])::after,
    :host::after{
        -webkit-box-reflect: below;
        }
    }
    :host([expandstory]){
        background-image:none;
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        min-width:calc(95vw * 0.8);
        max-width:calc(95vw * 0.8);
        flex-wrap: wrap;
        justify-content: end;
        flex-direction: column;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08);
        background:border-box;
    }
    @media only Screen and (max-width:850px){
        :host([expandstory]){
            max-width:95vw;
            min-width:95vw;
            flex-wrap:nowrap;
        }
        div{
            //margin-left: 5%;
        }
    }
    :host([expandstory]:hover){
        transform: scale(var(--ggs,1)) rotate(360deg);

    }
        </style>
    `
    }
}
customElements.define('es-story', Story);