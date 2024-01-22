// lienhe.js
import FooterComponents from "../components/Footer";
import HeaderComponents from "../components/header";
import { danhmuckhachsan } from '../../db.json' assert { type: "json" };
import { khachsan } from '../../db.json' assert { type: "json" };

const datphong = function () {
  return `
    ${HeaderComponents()}
   
        <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
            Book A Room
          </div>
          <form class="py-4 px-6" action="" method="POST">
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
                id="email" type="email" placeholder="Enter your email">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="phone">
                Phone Number
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder="Enter your phone number">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="date">
                Date
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date" placeholder="Select a date">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="time">
                Time
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time" type="time" placeholder="Select a time">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="service">
              Hạng Khách Sạn
              </label>
              <select
              ${danhmuckhachsan.map(function (item) {
                return `
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">${item.categoryName}  </option>
                
                `;}).join('')}
              </select>
              
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="service">
              Service
              </label>
              <select
              ${khachsan.map(function (item) {
                return `
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">${item.name}  </option>
                
                `;}).join('')}
              </select>
              
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="message">
                Message
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter any additional information"></textarea>
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
