import "./index.css";
import Job from "../Job";
import Pagination from "../Pagination";

function Center() {
    return (
        <div className="center">
            <Job/>
            <Pagination/>
        </div>
    );
}

export default Center;