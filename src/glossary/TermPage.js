import {useParams} from "react-router-dom";

const TermPage = () => {
    const urlParams = useParams();

    return (
        <div>
            {urlParams.id}
        </div>
    );
};

export default TermPage;