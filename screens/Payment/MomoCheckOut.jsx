import { React, useEffect, useState } from "react";
import axios from "axios";

function MomoCheckOut() {
  var amount = 10000;

  return (
    <div>
      <form action="/create_payment_url" method="post">
        <div>
          <label>Loại hàng hóa</label>
          <select name="orderType">
            <option value="topup">Nạp tiền điện thoại</option>
            <option value="billpayment">Nạp tiền điện thoại</option>
            <option value="fashion">Thời trang</option>
          </select>

          <label>Số tiền</label>
          <input name="amount" placeholder="Số tiền" value={amount} />

          <label>Nội dung thanh toán</label>
          <textarea name="orderDescription" placeholder="Nội dung thanh toán" />

          <select name="bankCode">
            <option value=""> Không chọn </option>
            <option value="VNPAYQR"> Ngân hàng VNPAYQR </option>
            <option value="NCB"> Ngân hàng NCB </option>
            <option value="SCB"> Ngân hàng SCB </option>
            <option value="SACOMBANK"> Ngân hàng SACOMBANK </option>
            <option value="EXIMBANK"> Ngân hàng EXIMBANK </option>
            <option value="MSBANK"> Ngân hàng MSBANK </option>
            <option value="NAMABANK"> Ngân hàng NAMABANK </option>
            <option value="VISA"> Ngân hàng VISA </option>
            <option value="VNMART"> Ngân hàng VNMART </option>
            <option value="VIETINBANK"> Ngân hàng VIETINBANK </option>
            <option value="VIETCOMBANK"> Ngân hàng VIETCOMBANK </option>
            <option value="HDBANK"> Ngân hàng HDBANK </option>
            <option value="DONGABANK"> Ngân hàng Dong A </option>
            <option value="TPBANK"> Ngân hàng Tp Bank </option>
            <option value="OJB"> Ngân hàng OceanBank </option>
            <option value="BIDV"> Ngân hàng BIDV </option>
            <option value="TECHCOMBANK"> Ngân hàng Techcombank </option>
            <option value="VPBANK"> Ngân hàng VPBank </option>
            <option value="AGRIBANK"> Ngân hàng AGRIBANK </option>
            <option value="MBBANK"> Ngân hàng MBBank </option>
            <option value="ACB"> Ngân hàng ACB </option>
            <option value="OCB"> Ngân hàng OCB </option>
            <option value="SHB"> Ngân hàng SHB </option>
            <option value="IVB"> Ngân hàng IVB </option>
          </select>
        </div>

        <div>
          <label>Ngôn ngữ</label>
          <select name="language">
            <option value="vn">Vietnamese</option>
            <option value="en">English</option>
          </select>
        </div>

        <div>
          <label>Cổng thanh toán</label>
          <select name="onlinePayment">
            <option value="momo">Momo</option>
            <option value="vnpay">VN Pay</option>
          </select>
        </div>

        <button type="submit"> Thanh toán </button>
      </form>
    </div>
  );
}

export default MomoCheckOut;
