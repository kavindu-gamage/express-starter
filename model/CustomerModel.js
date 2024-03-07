const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    id: {
      type: number,
      required: true,
    },
    name: {
      type: string,
      required: true,
      minlength: 3,
      maxlenght: 50,
    },
    address: {
      type: string,
      required: true,
      minlength: 3,
      maxlenght: 50,
    },
    tel: {
      type: string,
      required: true,
      minlength: 3,
      maxlenght: 15,
    },
  },
  {
    timestamps: true,
  }
);