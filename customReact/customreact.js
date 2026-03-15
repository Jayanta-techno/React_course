function customRender(reactelement,container){
    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    // domelement.setAttribute('href',reactelement.props.href)
    // domelement.setAttribute('target',reactelement.props.target)
    // for better code
    for(prop in reactelement.props){
        if(prop==='children'){
            //if children is there inside the reactelement's prop
            continue;
        }
        domelement.setAttribute(prop,reactelement.props[prop]);
    }
    container.appendChild(domelement)
}

const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const maincontainer=document.querySelector("#root")

customRender(reactelement,maincontainer)