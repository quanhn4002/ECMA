import HeaderComponentsadmin from "../../components/headeradmin";
import { danhmuckhachsan } from '../../../db.json';

import { router, useEffect } from "../../libs";

const addKs = function () {
  useEffect(() => {
    const formadddm = document.querySelector("#form-addks");
    const name = document.querySelector("#name");
    const image = document.querySelector("#image");
    const categoryName = document.querySelector("#categoryName");
    const location = document.querySelector("#location");
    const price = document.querySelector("#price");
    const numRooms = document.querySelector("#numRooms");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    
   formadddm.addEventListener("submit", (e) => {
      e.preventDefault();

      let newks = {
        "categoryName": categoryName.value,
        "name": name.value,
        "image": image.value,
        "categoryName": categoryName.value,
        "location": location.value,
        "priceRange": price.value,
        "numRooms": numRooms.value,
        "contactInformation": {
          "email": email.value,
          "phone": phone.value
        }
      };

      fetch("http://localhost:3000/khachsan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newks),
      }).then(() => router.navigate("./admin/listKs"));
    });
  });

  return `
  ${HeaderComponentsadmin()}
  <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden w-76">
    <div class="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
      THÊM LOẠI PHÒNG
    </div>
    <form class="py-4 px-6" action="" method="POST" id="form-addks">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">Tên Khách Sạn</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nhập Tên Khách Sạn">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="image">Image</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" placeholder="Image">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="categoryName">Hạng Khách Sạn</label>
        <select id="categoryName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          ${danhmuckhachsan.map((item) => `<option value="${item.categoryName}">${item.categoryName}</option>`).join('')}
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="location">Địa chỉ</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Nhập Địa Chỉ">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="price">Giá</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Nhập Giá">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="numRooms">Số lượng phòng</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numRooms" type="text" placeholder="Nhập số lượng phòng">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="contactInformation[email]">Liên hệ Email</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Nhập liên hệ Email">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="contactInformation[phone]">Liên hệ số điện thoại</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Nhập liên hệ số điện thoại">
      </div>
      <div class="flex items-center justify-center mb-4">
        <button class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline" type="submit">Thêm</button>
      </div>
    </form>
  </div>
`;

};

export default addKs;
