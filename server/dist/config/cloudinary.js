import { v2 as cloudinary } from "cloudinary";
// Cloudinary reads CLOUDINARY_URL from the environment. Calling config here makes
// that dependency explicit and ensures the SDK uses HTTPS for uploaded images.
cloudinary.config({
    secure: true,
});
export default cloudinary;
