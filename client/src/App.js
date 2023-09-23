import './App.css';

function App() {
    return (
        <div className="container" >
            <form>
                <input className="input-field" type="text" name="text" placeholder=" ....." />
                <input className="btn" type="submit" name="btn" value="Add new task" />
            </form>

            <hr />
        </div>
    );
}

export default App;
