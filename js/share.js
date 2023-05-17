const url = 'https://mbtitestfirsttry.netlify.app/';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = 'J 테스트 결과는 바로바로 .. ';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  Kakao.init('ef1b16b02d2eb1256c7e156b614c7572');

    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
      // social: {
      //   likeCount: 99999, //99999가 최대입니다
      //   commentCount: 99999, //99999가 최대입니다
      //   sharedCount: 99999, //99999가 최대입니다
      // },
      buttons: [
        {
          title: '나도 확인하러 가기',
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
      ],
    })
}  

  // Kakao.Share.sendDefault({
  //   objectType: 'feed',
  //   content: {
  //     title: '딸기 치즈 케익',
  //     description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
  //     imageUrl:
  //       'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
  //     link: {
  //       // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
  //       mobileWebUrl: 'https://developers.kakao.com',
  //       webUrl: 'https://developers.kakao.com',
  //     },
  //   },
  //   social: {
  //     likeCount: 286,
  //     commentCount: 45,
  //     sharedCount: 845,
  //   },
  //   buttons: [
  //     {
  //       title: '웹으로 보기',
  //       link: {
  //         mobileWebUrl: 'https://developers.kakao.com',
  //         webUrl: 'https://developers.kakao.com',
  //       },
  //     },
  //     {
  //       title: '앱으로 보기',
  //       link: {
  //         mobileWebUrl: 'https://developers.kakao.com',
  //         webUrl: 'https://developers.kakao.com',
  //       },
  //     },
  //   ],
  // });




// function kakaoShare(){
//   Kakao.Share.sendDefault({
//     objectType: 'feed',
//     content: {
//       title: '오늘의 디저트',
//       description: '아메리카노, 빵, 케익',
//       imageUrl:
//         'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
//       link: {
//         mobileWebUrl: 'https://developers.kakao.com',
//         webUrl: 'https://developers.kakao.com',
//       },
//     },
//     itemContent: {
//       profileText: 'Kakao',
//       profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
//       titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
//       titleImageText: 'Cheese cake',
//       titleImageCategory: 'Cake',
//       items: [
//         {
//           item: 'Cake1',
//           itemOp: '1000원',
//         },
//         {
//           item: 'Cake2',
//           itemOp: '2000원',
//         },
//         {
//           item: 'Cake3',
//           itemOp: '3000원',
//         },
//         {
//           item: 'Cake4',
//           itemOp: '4000원',
//         },
//         {
//           item: 'Cake5',
//           itemOp: '5000원',
//         },
//       ],
//       sum: '총 결제금액',
//       sumOp: '15000원',
//     },
//     social: {
//       likeCount: 10,
//       commentCount: 20,
//       sharedCount: 30,
//     },
//     buttons: [
//       {
//         title: '결과확인하기',
//         link: {
//           mobileWebUrl: 'https://developers.kakao.com',
//           webUrl: 'https://developers.kakao.com',
//         },
//       }
//     ],
//   });
// }