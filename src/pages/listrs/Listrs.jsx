import "./listrs.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablers from "../../components/datatablers/Datatablers";


const Listrs = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatablers/>
            </div>
        </div>
    ) 
}

export default Listrs