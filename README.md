postman대신 rapid api를 사용하여 구현

mock 데이터 사용

반응형 웹 구현

재사용 가능한 컴포넌트 구

포폴 리드미에서는 프로젝트의 페이지 구조를 보여줄것

트렌드, 음악, 게임, 카테고리 별로 데이터를 불러오도록 함

⇒ 카테고리가 변경될때 useEffect에 디펜던시로 카테고리를 넣고 fetch하도록 만듦

⇒ 추후 fetch를 axios로 변경

서치기능을 추가함

네트워크 통신을 하는 코드는 api파일에서 따로 관리함

api키는 git에 올라가지 않도록 .env파일에 넣어서 관리하고 gitignore하도록 함

특정 비디오 카드를 클릭하면 비디오의 아이디 페이지로 이동하는데 처음에는 id를 useparams로 받아와서 다시 id별로 fetch를 다시하려했으나 비효율적이라고 판단해 useNavigate의 useLocation매소드를 사용해서 비디오 정보를 넘김

비디오 카드의 채널썸네일을 클릭하면 채널 페이지로 이동하도록 만듦

⇒ 이거 할때 채널 디테일 컴포넌트를 어떻게 나눠야 할지 고민을 많이함

⇒ 컴포넌트를 나누는 기준이 뭔지 공부함 기능, 오로지 반복되는 디자인(버튼), like처럼 작지만 네트워크 통신도 해야하고 하는 친구들

채널 설명이나, 댓글이 너무 긴경우 readmore을 눌러야 전체를 확인할 수 있도록 아코디언 구현

# 리액트로 만든 Youtube 🧑🏻‍💻

![youtube](image.png)

👉 [VintzTube](https://vintztube.netlify.app)

## VintzTube의 목표

- 리액트 정말 쓸만한지 알아보기 ➡️ 단순히 유명해서가 아닌 정말 내가 필요하고, 배울 가치가 있는지 생각하기 🤔
- 하나의 뷰를 컴포넌트별로 나누기 ➡️ 리액트만의 안경 갖기 😎
- 리액트 문법과 친해지기 ➡️ 함수형 컴포넌트, Hooks
- 리액트에 대한 질문에 답하기 ➡️ 내가 정말 리액트를 이해하고 있는지, 작성한 코드에 대해 설명이 가능한지 스스로 되묻기

## 개선할 점들, 구현하고 싶은 것들

- 보기좋은 코드는 아닌 것 같다.
  - 좀 더 로직이 보이는 가독성이 좋은 코드를 생각해보자.
  - 네이밍에 대한 고민
- 실제 유튜브처럼 무한 스크롤 구현하기.

### 사용한 기술들 🛠

<p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=PostCSS&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/>
 </p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/aea01573-e082-44b4-8617-12e71bf71494/deploy-status)](https://app.netlify.com/sites/vintztube/deploys)

### BYTube 프로젝트는 💭

- 함수형 컴포넌트 사용
  - Hooks를 통해 렌더링 최적화, 동적인 페이지 구현
- 유튜브의 search, videos, relatedVidoes, comments, channels API 사용
  - Rapid api 통해 API 통신 테스트 및 fetch 코드 활용
- API를 불러오는 통신(service)과 View 컴포넌트 분리
- API Key를 숨기기 위해 .env 파일 사용
- Tailwind CSS 스타일링

---

### 프로젝트를 진행하면서 배운 것들 💡

#### 1. View 컴포넌트는 멍청해야한다?

- 컴포넌트 안에서 네트워크 통신을 하는 로직이 있으면 좋지 않다. Why?

  - 다양한 디자인 패턴 중 리액트는 View를 중점적으로 다루는 라이브러리이기 때문에 컴포넌트 안에는 view에 대한 책임만 갖도록, view에 관련된 로직만 넣는 것이 좋다.
  - 유닛 테스트를 할 때마다 네트워크 통신을 하게 되면 속도면에서나 효율성면에서 좋지 않다.
  - 이렇게 네트워크 통신하는 것을 따로 만들어서(클래스 혹은 함수로) 컴포넌트 안에 주입해주는 것을 dependency injection(의존성 주입)이라 한다.

  > 의존성 주입이란? 하나의 객체가 다른 객체의 의존성을 제공하는 테크닉이다. 여기서 의존성은 서비스(통신)를 뜻하고 주입은 이 서비스(통신)를 사용하려는 객체로 전달하는 것을 의미한다. 의존성 주입의 의도는 객체의 생성과 사용의 관심을 분리하는 것이다. 이는 가독성과 코드 재사용을 높혀준다. - 위키백과

#### 2. Hooks로 생명주기 관리

- React 16.8 버전부터 Hooks가 등장하면서 주로 정적인 페이지에서만 사용하던 함수형 컴포넌트도 동적인 페이지에서 사용할 수 있게 되었다.

  - 다시 말해 함수형 컴포넌트에도 생명주기와 상태(데이터를 담을 수 있는 박스) 관리를 할 수 있게 되었다.

- 굳이 Hooks까지 도입하면서 함수형 컴포넌트를 사용하는 이유?
  - 개인적으로 코드의 가독성도 좋고 `this.`의 사용을 하지 않는 점(코드 중복❌)이 좋은 것 같다. 그리고 class 문법은 상대적으로 어려운 것 같다.(익숙하지 않음)
  - 리액트에서도 함수형 컴포넌트를 권장하는 듯하다. [Hook의 개요](https://ko.reactjs.org/docs/hooks-intro.html)
  - 하지만 클래스형 컴포넌트도 현존하며 많은 프로젝트에 쓰였기 때문에 알아야한다.
- `use`로 시작하는 함수들을 통해 불러올 수 있다. ex) `useState()`, `useRef()`, `useCallback()`, `React.memo()` 등
  - `useState()` : 데이터를 기억하고 사용자 인터랙션에 따라 바뀐 부분을 표시할 때 사용한다.
  - `useRef()` : 자바스크립트의 `querySelector`처럼 특정 DOM에 접근해야 할 때 사용한다.
    - 검색기능을 구현할 때 input의 값을 불러오기 위해 사용하였다.
    - 이 외에도 특정 엘리먼트의 크기, 포커스 설정, 그래프 관련 라이브러리 사용(외부 라이브러리 사용) 등에도 특정 DOM에 적용하기 때문에 `ref`를 사용한다.
  - `useCallback()` : 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다. `useCallback()` 함수같은 경우 한 번 만들면 메모리에 계속 보관하기 때문에 많이 사용할 경우 메모리에 영향이 갈 수 있다. 따라서 써야할 때만 사용한다.
    - 해당 프로젝트에선 함수형 컴포넌트의 특성상 state나 props가 바뀔 때 해당 컴포넌트에서 정의한 함수도 다시 새롭게 만들어진다. 따라서 자식 컴포넌트에 이 함수를 props로 전달 할 경우 새로운 props이 전달되는 거와 동일하기 때문에 무조건적으로 리렌더가 발생하는 것을 막기 위해 사용했다.
  - `React.memo()` : `useCallback()`가 특정 함수를 재사용하기 위해 사용한다면 `React.memo()`는 특정 결과값을 재사용하기 위해 사용한다. 해당 프로젝트에선 컴포넌트가 동일한 props를 렌더링할 경우 리렌더링 하지 않고 마지막 렌더링 결과값을 재사용하기 위해 사용했다. -> 성능 최적화

#### 3. .env 파일로 API key 숨기기

- API Key를 코드상에 그대로 노출하고 깃허브에 올리는 것은 보안상 좋지 않다. 개인이 쓰는 Key인 만큼 본인만 사용하도록 한다.
- .env로 따로 관리하고 해당 파일을 .gitignore에 추가한다.
- 참고 : [Environment Variables In .env](https://create-react-app.dev/docs/adding-custom-environment-variables)

#### Tailwind CSS로 반응형 페이지 만들기 💨

프로젝트의 결과물을 공유할 때 모바일로 보는 경우가 훨씬 많다는 걸 깨달았다. VintzTube 프로젝트는 PC 화면에서만 정상적으로 보였기 때문에 반응형 웹 페이지를 구현하려 했다. 하지만 기존에 사용하던 CSS 방식으로는 반응형 웹 페이지를 구현하기에 너무 오랜 시간이 걸릴 것 같아서 이를 쉽게 구현하기 위한 도구를 찾다가 tailwind css 프레임워크를 발견해서 적용해보았다. 결과적으로 너무 만족스러웠고 생각보다 빠르게 레이아웃과 스타일 구현을 마쳐서 로직에 집중 할 수 있게 되었다. [Tailwind CSS 사용법, 장점과 단점](https://onlydev.tistory.com/127)을 블로그에 정리 해두었다.

<img width="400" height="600" alt="스크린샷 2021-04-29 오후 6 42 16" src="https://user-images.githubusercontent.com/66554164/116531966-b07a9700-a91a-11eb-84b1-20ab6687407c.png">

#### 5. Netlify로 배포하기

- 처음 사용해 보았는데 UI도 깔끔하고 무엇보다 무료로 배포할 수 있어서 좋았다. 깃허브 페이지보다 훨씬 사용범위가 넓었고 yarn을 통해 쉽게 배포할 수 있다. 처음 1시간 정도 투자한 것에 비해 리턴이 굉장히 좋다.(심지어 HTTPS로 배포를 해준다.)

#### 6. Promise.all 사용하기

- 유튜브 API 중 channels API는 채널의 썸네일을 불러오기 위해 사용하였는데 불러오기 위해선 parameter로 videos API의 channelId를 입력했어야 했다. 다시 말해 videos API를 다 불러온 후 channelId를 가져와 channels API를 불러와야 했다. 또한 channels API를 전부 불러오기 전에 렌더링이 먼저 되어 이미지를 제대로 불러오지 못했다. 이에 대한 해결책이 `Promise.all` 메서드였다.

> Promise.all() 메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가 주어지지 않았을 때 이행하는 Promise를 반환합니다 - MDN

```js
// youtube.js
 channel(videos, promises) {
    for (let i = 0; i < videos.length; i++) {
      const response = this.youtube
        .get('channels', {
          params: {
            part: 'snippet',
            maxResults: '36',
            id: videos[i].snippet.channelId,
          },
        })
        .then((result) => result.data.items[0].snippet.thumbnails.default.url)
        .then((url) => (videos[i].channelThumbnails = url));
      promises.push(response);
    }
    return promises;
  }
}
```

```js
// app.jsx
useEffect(() => {
  youtube
    .mostPopular() //
    .then((videos) => {
      const promises = [];
      Promise.all(youtube.channel(videos, promises)).then(() =>
        setVideos(videos)
      );
    });
}, [youtube]);
```

- 이걸 해결하는데 이틀 내내 밤새 고통을 맛봤다..정말 별의별 방법을 사용했었던 것 같다. 결국 해당 문제를 해결한 깃허브를 찾아서 코드를 참고하고 내 코드에 적용했다. [AhyeongLee](https://github.com/AhyeongLee/youtube-clone)님께 이 자리를 빌어 정말 감사드립니다 👏

#### 7. 링크 공유할 때 썸네일 보여주기

- 나는 프로젝트를 완성하면 지인에게 공유하곤 하는데 링크만 달랑 보내기엔 뭔가 볼품없기도 하고 사기(?)같아 보여서 링크를 보낼 때 썸네일이 보이도록 했다.

```HTML
<meta property="og:type" content="website" />
<meta property="og:title" content="BYTube" />
<meta property="og:url" content="https://bytube.netlify.app/" />
<meta property="og:image" content="/thumbnail.png" />
<meta
    property="og:description"
    content="*PC 화면에 최적화* 리액트로 만든 유튜브 클론 프로젝트입니다."
/>
```

<img width="500" alt="스크린샷 2021-04-29 오후 6 35 20" src="https://user-images.githubusercontent.com/66554164/116531091-c50a5f80-a919-11eb-9a7e-af5240d7ddb0.png">

- 썸네일을 추가해서 그런지 지인들의 칭찬이 끊이질 않았다(???)

#### 8. Axios로 코드 간결화, 크로스브라우징 두 마리 토끼 잡기

- axios는 `XMLHttpRequests` 요청을 하기 때문에 `fetch`보다 더 예전의 브라우저까지 지원이 가능하다.
- 현재(21.4.29) axios 러닝 가이드와 axios 깃허브의 브라우저 호환성이 약간 차이가 있는듯 하다.

| axios 러닝 가이드                                                                                                                                                             | axios 깃허브                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="575" alt="스크린샷 2021-04-29 오후 10 45 22" src="https://user-images.githubusercontent.com/66554164/116560768-a9648080-a93c-11eb-8f4a-2b436051a92b.png"> | <img width="576" alt="스크린샷 2021-04-29 오후 10 42 38" src="https://user-images.githubusercontent.com/66554164/116560754-a7022680-a93c-11eb-9550-e7abc410b532.png"> |

- `Promise`를 지원하며 `fetch`와 달리 JSON 데이터로 자동 변환을 시켜준다.
- Postman처럼 params로 파트를 나눠서 좀 더 가독성 있게 코드를 쓸 수 있다.

| Axios                                                                                                                                                                          | Fetch                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img width="1500" alt="스크린샷 2021-04-29 오후 10 58 13" src="https://user-images.githubusercontent.com/66554164/116562863-7f13c280-a93e-11eb-87e6-4c26f1297523.png"> | <img width="1500" alt="스크린샷 2021-04-29 오후 10 57 55" src="https://user-images.githubusercontent.com/66554164/116562849-7d49ff00-a93e-11eb-95db-aeb906b3bbb0.png"> |

#### (4/30 추가) 9. 유튜브 API 관련 title 이슈

- 확인해보니 유튜브 API 호출 시 유효한 JSON 텍스트를 불러오지만 HTML 인코딩 이슈가 있는 것 같다. 나같은 경우 영상의 제목이 제대로 출력되지 않았다(따옴표).
- 참고 👇
  - [How to fix Youtube API results title that are returned encoded](https://stackoverflow.com/questions/55385560/how-to-fix-youtube-api-results-title-that-are-returned-encoded?noredirect=1&lq=1#comment97569523_55385560)
  - [API doesn't escape nested quotes](https://issuetracker.google.com/issues/128673539#comment8)
- 관련된 라이브러리가 있었지만 좀 더 간편한 코드로 구현했다.
- 영상의 제목이 출력되는 video_item.jsx와 video_detail.jsx에 `DOMParser.parseFromString()` 메서드로 해결했다.

```js
const parser = new DOMParser();
const title = parser.parseFromString(snippet.title, "text/html");
<p className={styles.title}>{title.body.innerHTML}</p>;
```

| 해결 전                                                                                                                                                                       | 해결 후                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="1500" alt="스크린샷 2021-04-30 오후 4 02 18" src="https://user-images.githubusercontent.com/66554164/116664623-aff20700-a9d3-11eb-8ac8-2aabaec15408.png"> | <img width="1500" alt="스크린샷 2021-04-30 오후 4 03 52" src="https://user-images.githubusercontent.com/66554164/116664647-b7b1ab80-a9d3-11eb-81a6-c4bd145c684b.png"> |

#### (5/19 추가) 10. 필요한 JSON 데이터만 쏙쏙 뽑아 가독성, 유지보수 두 마리 토끼 잡기🐰

- 기존 서비스 로직은 유튜브 API에서 제공하는 모든 데이터를 받아와서 가독성이 떨어지고 코드 중복이 많았다.
- 내가 필요한 JSON 데이터만 받아오도록 객체를 재구성해 새로 만들었다.

```jsx
// 기존 인기동영상 JSON 데이터 불러오기 코드
async mostPopular() {
  const response = await this.youtube.get('videos', {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      regionCode: 'KR',
      maxResults: '36',
    },
  });
  return response.data.items;
}
```

```jsx
// 리팩토링한 인기동영상 코드
async mostPopular() {
  const response = await this.youtube.get('videos', {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      regionCode: 'KR',
      maxResults: '36',
    },
  });
  return response.data.items.map((item) => {
    return {
      id: item.id,
      channelId: item.snippet.channelId,
      thumbnailURL: item.snippet.thumbnails.medium.url,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
    };
  });
}
```

| 기존                                                                                                                                                                          | 리팩토링 후                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="1300" alt="스크린샷 2021-05-20 오후 9 11 05" src="https://user-images.githubusercontent.com/66554164/118976446-fa9de800-b9af-11eb-96ec-775cf642de5f.png"> | <img width="1500" alt="스크린샷 2021-05-20 오후 9 13 43" src="https://user-images.githubusercontent.com/66554164/118976743-4e103600-b9b0-11eb-8939-beb1506bdb1d.png"> |

- 기존의 데이터 접근은 items -> snippet -> thumbnails -> ... 이런식의 뎁스가 깊어서 구조가 복잡했다.
- 리팩토링 후의 접근은 items -> thumbnailURL로 구조도 간단해지고 내가 필요한 데이터를 쉽게 추가, 제거 할 수 있다.
  - 하위 컴포넌트에 데이터를 props로 넘겨서 사용 할 때도 구조가 간단하기 때문에 코드 중복이 줄어들고 가독성도 좋아졌다.
  - 개발 유지보수가 좋아졌다! 👍

#### (9/3 추가) 11. 성능을 개선하려다 더 느려지다. 🤔

성능을 개선하고자 리팩토링을 하다가 오히려 성능이 더 안좋아졌다. Promise.all을 사용하지 않고 깔끔한 코드를 만들려다 페이지 로드 속도가 확 느려졌다.

1. 비디오 목록 API를 호출한다.
2. 비디오 목록 내 데이터를 이용해 채널아이디 썸네일을 불러온다.
3. 1번과 2번 데이터를 사용해 비디오 목록을 렌더링 한다.

2번에서 Promise.all 없이 구현해보니 36개의 데이터를 개별적으로 처리하는 게 생각보다 느렸고, 페이지 로드 속도차이가 **3초 이상** 차이가 나서 다시 사용하기로 결정.

| Promise.all 사용 ✅                                                                                                                                                          | Promise.all 사용 ❎                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="256" alt="스크린샷 2021-09-03 오후 4 20 44" src="https://user-images.githubusercontent.com/66554164/131973612-6944dc0a-2937-429f-90ed-07231f5ff127.png"> | <img width="326" alt="스크린샷 2021-09-03 오후 4 19 59" src="https://user-images.githubusercontent.com/66554164/131973674-aedb508a-f9b5-4e44-86a6-f4b0d63b85a1.png"> |
| <img width="625" alt="스크린샷 2021-09-03 오후 4 03 11" src="https://user-images.githubusercontent.com/66554164/131974235-94680f2d-bc79-4243-869c-984a245ae4a7.png"> | <img width="617" alt="스크린샷 2021-09-03 오후 5 19 43" src="https://user-images.githubusercontent.com/66554164/131974182-143f75c7-a982-4e3e-9ce2-95ab000b9474.png"> |
