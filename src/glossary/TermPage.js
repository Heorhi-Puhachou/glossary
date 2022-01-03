import {useNavigate, useParams} from "react-router-dom";

const TermPage = () => {
    const urlParams = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <div>
                {urlParams.id}
            </div>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
};

export default TermPage;