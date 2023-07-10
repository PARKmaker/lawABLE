import naverbutton from "../../components/login/img/btnG_완성형.png";
import "../../components/login/btn.css";

const SocialNaver = () => {
    const NAVER_CLIENT_ID = "QfYkn_98wqhLx_q2GXue";
    const REDIRECT_URI = "https://localhost:3000/naver_callback";
    const STATE = "flase";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;

    const NaverLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    };
    return (
        <button className="naverbtn" onClick={NaverLogin}>
            <img className="naverimg" src={naverbutton} />
        </button>
    );
};
export default SocialNaver;
