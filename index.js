const io = require("socket.io")(3003);

let arrUserInfo = []

io.on("connection", (socket) => {
  socket.on('NGUOI_DUNG_DANG_KY', user => {
    arrUserInfo.push(user)
    io.emit('DANH_SACH_ONLINE', arrUserInfo)
  })
});
