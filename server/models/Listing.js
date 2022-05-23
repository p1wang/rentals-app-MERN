import mongoose from "mongoose";

const listingSchema = mongoose.Schema(
  {
    unitType: String,
    bedrooms: String,
    parkings: String,
    bathrooms: String,
    agreementType: String,
    postalCode: String,
    price: String,
    description: String,
    creatorEmail: String,
    images: { type: [String], default: [] },
    creator: String,
    likes: { type: [String], default: [] },
  },
  { timestamps: true }
);

const ListingModel = mongoose.model("Listing", listingSchema);

export default ListingModel;
