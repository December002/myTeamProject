const images_eName=[
  "GANGNEUNG",
  "GYEONGJU",
  "DAEGU",
  "BUSAN",
  "SEOUL",
  "SOKCHO",
  "YEOSU",
  "YEONGWOL",
  "INCHEON",
  "JUNJU",
  "JEJU"

]



//-----------------------------------------------------------------------



const images = [
  "http://localhost:3000/locimages/gangneung.jpg",
  "http://localhost:3000/locimages/gyeongju.jpg",
  "http://localhost:3000/locimages/daegu.jpg",
  "http://localhost:3000/locimages//busan.jpg",
  "http://localhost:3000/locimages//seoul.jpg",
  "http://localhost:3000/locimages//sokcho.jpg",
  "http://localhost:3000/locimages//yeosu.jpg",
  "http://localhost:3000/locimages//Yeongwol.jpg",
  "http://localhost:3000/locimages//incheon.jpg",
  "http://localhost:3000/locimages//junju.jpg",
  "http://localhost:3000/locimages//jeju.jpg",
 
]

// ----------------------------------------------------------------------

const images_name = [
  "강릉",
  "경주",
  "대구",
  "부산",
  "서울",
  "속초",
  "여수",
  "영월군",
  "인천",
  "전주",
  "제주"

];


// ----------------------------------------------------------------------

const products = [...Array(11)].map((_, index) => {
  return {
    name: images_name[index],
    cover : images[index],
    eName : images_eName[index]
  };
});

export default products;