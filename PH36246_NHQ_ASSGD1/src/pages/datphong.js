import FooterComponents from "../components/Footer";
import HeaderComponents from "../components/header";
import { danhmuckhachsan } from '../../db.json';
import { khachsan } from '../../db.json';
import { router, useEffect } from "../libs";

const datphong = function () {

  useEffect(() => {
    const formDatPhong = document.querySelector("#form-datphong");

    formDatPhong.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const phone = document.querySelector("#phone").value;
      const checkin = document.querySelector("#checkin").value;
      const checkout = document.querySelector("#checkout").value;
      const categoryName = document.querySelector("#categoryName").value;
      const nameHotel = document.querySelector("#nameHotel").value;
      const description = document.querySelector("#description").value;

      let newRoom = {
        "name": name,
        "email": email,
        "phone": phone,
        "checkin": checkin,
        "checkout": checkout,
        "categoryName": categoryName,
        "nameHotel": nameHotel,
        "description": description
      };

      fetch("http://localhost:3000/datphong", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRoom)
      }).then(() => router.navigate("./lienhe"));
    });
  }, []);

  return `
    ${HeaderComponents()}
   
        <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden w-76">
          <div class="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
            Book A Room
          </div>
          <form class="py-4 px-6" action="" method="POST" id="form-datphong">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="text" placeholder="Enter your email">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="phone">
                Phone Number
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="text" placeholder="Enter your phone number">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="date">
                Check-in
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="checkin" type="text" placeholder="Select a date">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="date">
                Check-out
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="checkout" type="text" placeholder="Select a date">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="service">
              Hạng Khách Sạn
              </label>
              <select
                id="categoryName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                ${danhmuckhachsan.map((item) => `<option value="${item.categoryName}">${item.categoryName}</option>`).join('')}
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="service">
              Hotel
              </label>
              <select
                id="nameHotel"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                ${khachsan.map((item) => `<option value="${item.name}">${item.name}</option>`).join('')}
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="message">
                Message
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description" rows="4" placeholder="Enter any additional information"></textarea>
            </div>
            <div class="flex items-center justify-center mb-4">
              <button
                class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    ${FooterComponents()}
  `;
};

export default datphong;
