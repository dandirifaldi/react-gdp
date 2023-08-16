import HomeTemplate from '../../templates/home';
import { LoremIpsum } from 'react-lorem-ipsum';
function Home() {

    let arrayofContent1 =[
        {
            "title":"Declarative",
            "paraghraph":<LoremIpsum p={2} avgSentencesPerParagraph={3}/>
        },
        {
            "title":"Component-Based",
            "paraghraph":<LoremIpsum p={2} avgSentencesPerParagraph={3}/>
        },
        {
            "title":"Learn Once, Write Anywhere",
            "paraghraph":<LoremIpsum p={2} avgSentencesPerParagraph={3}/>
        },
    ]
    let arrayofContent2 =[
        {
            "title":"A Simple Content",
            "paraghraph":"React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.",
            "paraghraph2":"JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.",
            "img":"/img/code1.png"
        },
        {
            "title":"A Stateful Component",
            "paraghraph":"In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().",
            "img":"/img/code2.png"
        },
        {
            "title":"An Application",
            "paraghraph":"Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.",
            "img":"/img/code3.png"
        },
        {
            "title":"A Component Using External Plugins",
            "paraghraph":"React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time.",
            "img":"/img/code4.png"
        },
    ]


    return(
    <HomeTemplate 
    labelHeader="This is no longer Updated. &nbsp;"
    labelLink ="Go to react.dev"
    title="React"
    subtitle="A JavaScript library for building user interfaces"
    getStarted="Get Started"
    tutorial="Take the Tutorial" 
    content1={arrayofContent1}
    content2={arrayofContent2}>
    </HomeTemplate>
    )
}
export default Home;