import HeaderComponentsadmin from "../../components/headeradmin";
import { router, useEffect, useState } from "../../libs";
import { danhmuckhachsan, khachsan } from "../../../db.json";

const updateDp = function (id) {
  // Define state outside the useEffect hook
  const [post, setPost] = useState({});

  // Fetch data using useEffect with an empty dependency array
  useEffect(() => {
    fetch(`http://localhost:3000/datphong/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  // Event listener setup
  useEffect(() => {
    const formupdatedp = document.querySelector("#form-updatedp");

    formupdatedp.addEventListener("submit", (e) => {
      e.preventDefault();
      // Retrieve input values
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const phone = document.querySelector("#phone").value;
      const checkin = document.querySelector("#checkin").value;
      const checkout = document.querySelector("#checkout").value;
      const categoryName = document.querySelector("#categoryName").value;
      const nameHotel = document.querySelector("#nameHotel").value;
      const description = document.querySelector("#description").value;

      let newRoom = {
        name: name,
        email: email,
        phone: phone,
        checkin: checkin,
        checkout: checkout,
        categoryName: categoryName,
        nameHotel: nameHotel,
        description: description,
      };

      // Make PUT request to update data
      fetch(`http://localhost:3000/datphong/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoom),
      }).then(() => router.navigate("./admin/listDp"));
    alert("Sửa thành công");
    });
  }); 

  return `
    ${HeaderComponentsadmin()}
    <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden w-76">
        <div class="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
           SỬA ĐẶT PHÒNG
        </div>
        <form class="py-4 px-6" action="" method="POST" id="form-updatedp">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                    Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Enter your name"  value ="${
                      post.name || ""
                    }" >
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text" placeholder="Enter your email" value="${
                      post.email || ""
                    }">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="phone">
                    Phone Number
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone" type="text" placeholder="Enter your phone number" value="${
                      post.phone || ""
                    }">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="checkin">
                    Check-in
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="checkin" type="text" placeholder="Select a date" value="${
                      post.checkin || ""
                    }">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="checkout">
                    Check-out
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="checkout" type="text" placeholder="Select a date" value="${
                      post.checkout
                    }">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="categoryName">
                    Hạng Khách Sạn
                </label>
                <select
                        id="categoryName"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        ${danhmuckhachsan
                          .map(
                            (item) =>
                              `<option value="${item.categoryName}" ${
                                item.categoryName === post.categoryName
                                  ? "selected"
                                  : ""
                              }>${item.categoryName}</option>`
                          )
                          .join("")}
                    </select>

            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="nameHotel">
                    Hotel
                </label>
                <select
                id="nameHotel"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                ${khachsan.map((item) => `<option value="${item.name}" ${item.name === post.nameHotel ? 'selected' : ''}>${item.name}</option>`).join('')}
            </select>
            
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="description">
                    Message
                </label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description" rows="4" placeholder="Enter any additional information">${
                      post.description || ""
                    }</textarea>
            </div>
            <div class="flex items-center justify-center mb-4">
                <button
                    class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                    type="submit">
                 Sửa Đặt Phòng
                </button>
            </div>
        </form>
    </div>
`;
};

export default updateDp;
