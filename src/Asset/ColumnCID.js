export const columns = [
  {
    title: "ลำดับ",
    dataIndex: "no",
    align: "center",
    sorter: {
      compare: (a, b) => a.no - b.no,
      multiple: 1,
    },
  },
  {
    title: "งวดที่",
    dataIndex: "rewardAtDate",
    align: "center",
    sorter: {
      compare: (a, b) => a.rewardAtDate - b.rewardAtDate,
      multiple: 2,
    },
  },
  {
    title: "ชุด",
    dataIndex: "accType",
    align: "center",
    sorter: {
      compare: (a, b) => a.accType - b.accType,
      multiple: 3,
    },
  },
  {
    title: "เริ่มต้น-สิ้นสุด",
    dataIndex: "salakNo",
    align: "center",
  },
  {
    title: "หมายเลขที่ถูกรางวัล",
    dataIndex: "rewardNo",
    align: "center",
  },
  {
    title: "รางวัลที่",
    dataIndex: "rewardAtSeq",
    align: "center",
    sorter: {
      compare: (a, b) => a.rewardAtSeq - b.rewardAtSeq,
      multiple: 4,
    },
  },
  {
    title: "จำนวนเงิน",
    dataIndex: "rewardPrice",
    align: "right",
    sorter: {
      compare: (a, b) => a.no - b.no,
      multiple: 1,
    },
  },
];
