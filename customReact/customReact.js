function customRender(reactElement, Container){
    /* 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    Container.appendChild(domElement);
    */

    const domElement  = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        
    }
    Container.appendChild(domElement);

}
const reactElement = {
        type:'a',
        props:{
            href:"https://human.com/",
            target:'_blank'
        },
        children:'click me to visit human'
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer);

