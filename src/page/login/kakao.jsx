import kakaobutton from "../../components/login/img/kakao_login_medium_narrow.png";
import "../../components/login/btn.css";

const SocialKakao = () => {
    const Rest_api_key = "b063992c09670b48e6f579ffa0f1d3a6"; //REST API KEY
    const redirect_uri = "https://localhost:3000/kakao_callback"; //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    const handleLogin = () => {
        window.location.href = kakaoURL;
    };
    return (
        <button className="kakaobtn" onClick={handleLogin}>
            <img src={kakaobutton} />
        </button>
    );
};
export default SocialKakao;
