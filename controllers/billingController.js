const Billing = require("../models/billingModel");

exports.createBilling = async (req, res) => {
  try {
    if (req.body.products.length < 5) {
      return res.status(400).json({
        message: "Minimum 5 products required",
      });
    }

    const billing = new Billing(req.body);

    await billing.save();

    res.status(201).json({
      message: "Billing Created Successfully",
      data: billing,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getBilling = async (req, res) => {
  const data = await Billing.find();

  res.json(data);
};
