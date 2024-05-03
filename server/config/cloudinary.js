const cloudinary = require("cloudinary").v2 //! Cloudinary is being required
require("dotenv").config()
exports.cloudinaryConnect = () => {
  try {
    cloudinary.config({
      //!    ########   Configuring the Cloudinary to Upload MEDIA ########
      cloud_name: "daugzluqp",
      api_key: "754451317157326",
      api_secret: "7PPjq5xXtP8a0SkYFzQtqLzDhQg",
    })
  } catch (error) {
    console.log(error)
  }
}
