import daeseongImg from "../assets/daeseong.webp";
import diorImg from "../assets/dior.webp";
import albamonImg from "../assets/albamon.webp";
import gs25Img from "../assets/gs25.webp";
import gsshopImg from "../assets/gsshop.webp";

const siteList = [
  {
    name: "대성마이맥",
    date: "2025-07-18",
    description:
      "성명, 휴대전화번호, 유선전화번호, 이메일 주소, 아이디, 생년월일, 주소, 카카오 ID, 네이버 ID 등이 암호화 없이 유출되었습니다.",
    imgUrl: daeseongImg,
  },
  {
    name: "디올",
    date: "2025-05-07",
    description:
      "외부의 개인정보 접근이 확인되었으며, 고객의 연락처 정보, 구매 데이터 및 선호 데이터가 유출된 것으로 확인되었습니다.",
    imgUrl: diorImg,
  },
  {
    name: "알바몬",
    date: "2025-04-30",
    description:
      "임시로 저장된 이력서 정보(이름, 휴대폰번호, 이메일주소 등)가 유출된 것을 확인하였습니다.",
    imgUrl: albamonImg,
  },
  {
    name: "GS25",
    date: "2024-12-27 ~ 2025-01-04",
    description:
      "홈페이지 해킹 공격으로 이름, 성별, 생년월일, 연락처, 주소, 아이디, 이메일 등 7개 항목이 유출되었습니다.",
    imgUrl: gs25Img,
  },
  {
    name: "GS Shop",
    date: "2024-06-21 ~ 2025-02-13",
    description:
      "웹사이트 해킹 공격으로 이름, 성별, 생년월일, 연락처, 주소, 아이디, 이메일, 기혼 여부, 결혼기념일, 개인통관고유부호 등 10개 항목이 유출되었습니다.",
    imgUrl: gsshopImg,
  },
];

export default siteList;
