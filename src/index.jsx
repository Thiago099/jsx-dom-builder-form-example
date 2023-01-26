import './style.css'

var data = effect(
{
    name:"pedro",
    age:20
});

console.log(JSON.stringify(data))

function submit()
{
    alert("Submit logic here")
}

const app = 
<div effect={data} class="main-container">
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
    <div class="tooltip">You can also add them directly in the element that they will update either using effect or manually using the "element.$update()".</div>
    <div class="footer-button-container">
        <button on:click={submit}> Submit </button>
    </div>
</div>

app.$parent(document.body)
