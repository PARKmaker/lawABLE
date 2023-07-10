import React from "react";
import "./ChatRecommendationCards.css";
import ChatRecommendation from "../chatRecommendation/ChatRecommendation";
import categoryData from "./categoryData.json";
// const categoryData = {
//     1: "계약이행",
//     2: "매매",
//     3: "명예훼손",
//     4: "부동산",
//     5: "손해배상",
//     6: "용역",
//     7: "채무",
//     8: "통지",
// };

const ChatRecommendationCards = ({ certificationid }) => {
    const data = categoryData.categoryMessage;

    return (
        <div className="chat-recommendation-cards">
            {/* <ChatRecommendation
                data={data[Math.floor(Math.random() * (9 - 1)) + 1]}
            ></ChatRecommendation> */}
            <ChatRecommendation
                data={data[certificationid]}
            ></ChatRecommendation>
            {/* <ChatRecommendation
                data={data[Math.floor(Math.random() * (9 - 1)) + 1]}
            ></ChatRecommendation> */}
        </div>
    );
};

export default ChatRecommendationCards;
