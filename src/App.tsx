import "swiper/css"
import "swiper/css/navigation"
import "./index.scss"
import {Main} from "./pages/Main"
import {data} from "./data"

function App() {
    return (
        <>
            <Main data={data}/>
        </>
    )
}

export default App
