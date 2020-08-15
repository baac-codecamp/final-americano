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
  notFoundData: "ไม่พบข้อมูล",
};

export const limitNews = 12;