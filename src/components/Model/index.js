import "./index.css";
import {useState} from "react";
function Model(props) {
    const [isOpen, setOpen] = useState(false);
    function open() {
        setOpen(true);
    }
    function close() {
        setOpen(false);
    }
    return (
        <>
            <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={() => {close()}}>&times;</span>
                        <h2>Modal Header</h2>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
                    </div>
                </div>
            </div>
            <button onClick={() => {open()}}>Open model</button>
        </>
    );
}

export default Model;