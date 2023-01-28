
// import the style
import './style.css'

// the effect object can be used just like a normal object.
// it will update the elements and its children if they have the effect property, or $effect function
var data = state(
{
    name:"pedro",
    age:20
});

data.age = 21


// sample submit method that is called when you click on the button
function submit()
{
    alert("Submit logic here")
}

const app = 
<div class="main-container">
    <div>
        <div class="input-group">
            <div class="input-container half">
                <label>Name:</label>
                <input type="text" model={data.name}></input>
            </div>
            <div class="input-container half">
                <label>Age:</label>
                <input type="text" model={data.age}></input>
            </div>
        </div>
        <div class="tooltip">The model parameter makes the input in sync with any variable.</div>
    </div>
    <div class="card">
        <div> Name: {data.name} </div>
        <div> Age: {data.age} </div>
    </div>
    <div class="tooltip">You can also add them directly in the element that they will update either using state or manually using the "element.$update()".</div>
    <div class="footer-button-container">
        { /* you can add events, using the property on: and the name of the event*/ }
        <button on:click={submit}> Submit </button>
    </div>
</div>

// the $parent function will append an element to either another element or a dom element
app.$parent(document.body)