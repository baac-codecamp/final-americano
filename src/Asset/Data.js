export const projectName = "ตรวจสลากออมทรัพย์";
export const menuList = [
  { name: "หน้าหลัก", url: "/" },
  { name: "ตรวจรางวัลจากเลขบัตรประชาชน", url: "/cid" },
  { name: "ตรวจรางวัลด้วยตนเอง", url: "/self" },
  { name: "ข่าวสาร", url: "/news" },
];
export const dateFormat = "DD/MM/YYYY";
export const dateFormatAPI = "YYYY-MM-DD";

export const requiredMsg = {
  cid: "กรุณากรอกหมายเลขบัตรประชาชน",
  bod: "กรุณาเลือก วัน/เดือน/ปีเกิด",
};

export const validateMsg = {
  cidLength: "กรุณากรอกหมายเลขบัตรประชาชนให้ครบ 13 หลัก",
};

export const labelMsg = {
  cid: "หมายเลขบัตรประชาชน",
  name: "ชื่อ-นามสกุล",
  bod: "วัน/เดือน/ปีเกิด",
  roundDate: "เลือกงวด",
};

export const errorMsg = {
  notConnectServer: "ไม่สามารถเชื่อมต่อ Server ได้",
};

export const listRewardAtDate = [
  "2020-06-16T00:00:00.000Z",
  "2020-07-16T00:00:00.000Z",
];

export const resultData = {
  _id: "5f2ac61462e0850a0269d0fc",
  cid: "1770200005105",
  cif: "32588666",
  cusName: "ก็ หน่อทิม",
  bod: "1991-09-03T00:00:00.000Z",
  arrReward: [
    {
      accNo: "400031732942",
      accName: "นางสาว ก็ หน่อทิม",
      accType: "1",
      salakNoStart: "80000000",
      salakNoEnd: "80000199",
      rewardAtDate: "2020-06-16T00:00:00.000Z",
      rewardAtSeq: "1",
      rewardPrice: 1000000,
      rewardNo: "80000023",
    },
    {
      accNo: "400031732942",
      accName: "นางสาว ก็ หน่อทิม",
      accType: "1",
      salakNoStart: "80000000",
      salakNoEnd: "80000199",
      rewardAtDate: "2020-06-16T00:00:00.000Z",
      rewardAtSeq: "4",
      rewardPrice: 400,
      rewardNo: "80000198",
    },
    {
      accNo: "400031732942",
      accName: "นางสาว ก็ หน่อทิม",
      accType: "1",
      salakNoStart: "80000000",
      salakNoEnd: "80000199",
      rewardAtDate: "2020-06-16T00:00:00.000Z",
      rewardAtSeq: "5",
      rewardPrice: 50,
      rewardNo: "80000199",
    },
    {
      accNo: "400031732942",
      accName: "นางสาว ก็ หน่อทิม",
      accType: "1",
      salakNoStart: "80000000",
      salakNoEnd: "80000199",
      rewardAtDate: "2020-07-16T00:00:00.000Z",
      rewardAtSeq: "1",
      rewardPrice: 1000000,
      rewardNo: "80000023",
    },
    {
      accNo: "400031732942",
      accName: "นางสาว ก็ หน่อทิม",
      accType: "1",
      salakNoStart: "80000000",
      salakNoEnd: "80000199",
      rewardAtDate: "2020-07-16T00:00:00.000Z",
      rewardAtSeq: "4",
      rewardPrice: 400,
      rewardNo: "80000198",
    },
    {
      accNo: "400031732942",
      accName: "นางสาว ก็ หน่อทิม",
      accType: "1",
      salakNoStart: "80000000",
      salakNoEnd: "80000199",
      rewardAtDate: "2020-07-16T00:00:00.000Z",
      rewardAtSeq: "5",
      rewardPrice: 50,
      rewardNo: "80000199",
    },
  ],
};

export const limitNews = 12;
export const newsList = [
  {
    id: "1",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 1",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "2",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 2",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "3",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 3",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "4",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 4",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "5",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 5",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "6",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 6",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "7",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 7",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "8",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 8",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "9",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 9",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "10",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 10",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "11",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 11",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "12",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 12",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "13",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 13",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "14",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 14",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "15",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 15",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "16",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 16",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "17",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 17",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "18",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 18",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "19",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 19",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "20",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 20",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "21",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 21",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "22",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 22",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "23",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 23",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "24",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 24",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "25",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 25",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "26",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 26",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "27",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 27",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "28",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 28",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "29",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 29",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "30",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 30",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "31",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 31",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "32",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 32",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "33",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 33",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
  {
    id: "34",
    url: "/",
    imgCover:
      "https://www.baac.or.th/file-upload/14266-1-สลากออมทรัพย์_ธ.ก.ส._ชุดเกษตรมั่งคั่ง%203_1.jpg",
    title: "สลากออมทรัพย์ 34",
    description: "ชุด เกษตรมั่งคั่ง 3",
  },
];
