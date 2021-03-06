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
    creatorPfp: String,
    images: [String],
    creator: { type: mongoose.Schema.Types.ObjectId, required: true },
    likes: [String],
  },
  { timestamps: true }
);

const ListingModel = mongoose.model("Listing", listingSchema);

export default ListingModel;
