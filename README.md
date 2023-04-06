# Youtube Clone
<p align="center">
<img src="https://img.shields.io/badge/made by-smosco-red">
<img src="https://img.shields.io/badge/React-blue">
<img src="https://img.shields.io/badge/Tailwind CSS-green">
<img src="https://img.shields.io/badge/Rapid API-indigo">
</p>
  
<img width="100%" alt="thumbnail" src="https://user-images.githubusercontent.com/69305320/116347815-e1c66a80-a827-11eb-9e32-6a7ccb82031c.PNG">
  
### 👉 [Live Demo](https://pangtube.netlify.app)


## **📜 Description**
Youtube에서 제공하는 Data API를 이용한 클론 코딩 프로젝트로, Youtube의 필수 기능들(검색, 인기 영상, 연관 영상, 동영상 재생)을 구현했습니다.

1. Skills: React, React Router, Tailwind CSS
2. Use: Rapid API(Youtube v3), Axios
3. Deploy: Netlify

## **How to use ❓**
### **1. 비디오를 클릭해보세요!**
📌 썸네일 클릭시 해당 영상을 재생할 수 있는 페이지가 뜨고, 관련된 영상들을 추천해 줍니다.

📌 하단의 `더보기`를 클릭하면 영상의 자세한 정보를 확인할 수 있습니다. 

### **2. 채널 프로필을 클릭해보세요!**
📌 채널 디테일 페이지가 뜨고, 채널 정보와 비디오 리스트를 확인할 수 있습니다.

📌 하단의 `더보기`를 클릭하면 영상의 자세한 정보를 확인할 수 있습니다. 


### **2. 보고싶은 영상을 검색창에 입력하세요.**

📌 검색 결과가 영상만 나오도록 필터링 되어 있어, 채널 관련 결과는 나오지 않습니다.  


## **Advanced Feature**

### **✅ 반응형 UI**
📌 `flex`를 사용해 화면 크기에 따라 영상을 배치하였고, `rem`과 `em`단위로 작성해 `media query`에 따라 자동으로 크기(폰트, 여백, 요소 크기)가 조절되도록 만들었습니다.  

### **✅ 로딩 스피너**
📌 서버에서 데이터를 받아오는 동안 로딩 중임을 사용자가 인지할 수 있도록 로딩 스피너를 구현했습니다.

## **Future scope**

- Firebase 로그인 기능 추가하기
- 실시간 데이터베이스를 더해 개인 id별로 '좋아요'한 동영상 저장할 수 있게 하기
- 영상 플레이 화면에서 버튼들('좋아요', '싫어요', ...) 활성화 하기
- 다크모드, 라이트 모드 전활할 수 있게 하기
