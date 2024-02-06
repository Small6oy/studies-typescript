type node = {
    type: 'file' | 'folder'
    children: node[] | null
    name: string
}

const files: node[] =
    [{
        type: 'folder',
        name: 'root',
        children: null
    }]

function App() {

    return (
        <div className="App"> test </div>
    )
}

export default App;
