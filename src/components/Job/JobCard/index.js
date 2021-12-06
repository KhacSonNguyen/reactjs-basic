import "./index.css";

function JobCard(props) {
    return (
        <div className="box">
            <div className="box-col box-80">
                <h3>{props.content.title}</h3>
                <span className="function">{props.content.description}</span>
            </div>

            <div className="box-col box-20 text-right">
                <a className="button" >Apply Now!</a>
            </div>
        </div>
    );
}

export default JobCard;