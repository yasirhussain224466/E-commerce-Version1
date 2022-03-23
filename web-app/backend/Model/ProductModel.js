const mongoose = require("mongoose");
const Product = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Product must have Name"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "A Product must have price"],
    maxlength: [8, "price cannot exceed 8 character"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  noOfRatingReviews: {
    type: Number,
    default: 0,
  },
  country: {
    type: String,
    required: true,
  },
  isInstallment: {
    type: Boolean,
  },

  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "A product must have category"],
  },
  description: {
    type: String,
    required: [true, "A Product must have description"],
    trim: true,
  },
  stock: {
    type: Number,
    required: [true, "A Product must have stock"],
    maxlength: [4, "stock cannot exceeds 4 character"],
    default: 1,
  },
  discount: {
    type: Number,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  brand: {
    type: String,
    required: true,
  },
  brandWarranty: {
    type: String,
    required: true,
  },
  deliveryCharges: {
    type: Number,
    default: "FREE",
  },
});

module.exports = mongoose.model("Product", Product);
