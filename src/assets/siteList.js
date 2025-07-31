import daeseongImg from "../assets/daeseong.webp";
import diorImg from "../assets/dior.webp";
import albamonImg from "../assets/albamon.webp";
import gs25Img from "../assets/gs25.webp";
import gsshopImg from "../assets/gsshop.webp";
import dailycafeImg from "../assets/dailycafe.png";
import oliveyoungImg from "../assets/oliveyoung.png";
import tiffanyImg from "../assets/tiffanyco.png";
import mustitImg from "../assets/mustit.png";
import adidasImg from "../assets/adidas.png";

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
  {
    name: "일상카페",
    date: "2025-06-02 오후 6시 ~ 밤 12시",
    description:
      "서버에 접근하여 닉네임, 이메일, 생년월일, 암호화된 전화번호와 비밀번호 등 총 16개 항목이 유출되었습니다.",
    imgUrl: dailycafeImg,
  },
  {
    name: "올리브영",
    date: "2025-03-11 ~ 2025-03-12",
    description:
      "올리브영 홈페이지 해킹 공격으로 이름, 수령인 정보(받는 사람, 휴대전화번호, 주소, 공동현관 출입방법), 프로필 사진, 닉네임, 피부타입 등 다양한 항목이 유출되었습니다.",
    imgUrl: oliveyoungImg,
  },
  {
    name: "티파니",
    date: "2025-04-08",
    description:
      "티파니 코리아에 대한 무단 엑세스로 이름, 주소, 전화번호, 이메일 주소, 내부 고객 ID 번호 및 구매 내역이 유출되었습니다.",
    imgUrl: tiffanyImg,
  },
  {
    name: "머스트잇",
    date: "2025-05-06 ~ 05-14, 06-09",
    description:
      "두 차례 서버를 비정상적으로 접근한 것을 확인하여 회원정보, 아이디, 가입일, 이름, 생년월일, 성별, 휴대전화번호, 이메일 주소 등 9개 항목이 유출되었습니다.",
    imgUrl: mustitImg,
  },
  {
    name: "아디다스",
    date: "2025-05-16",
    description:
      "2024년 또는 그 이전 고객센터 문의 고객 정보가 외부 고객 서비스 제공업체를 통해 유출되었습니다. 이름, 이메일 주소, 전화번호, 생년월일 등이 포함됩니다.",
    imgUrl: adidasImg,
  },
];

export default siteList;
