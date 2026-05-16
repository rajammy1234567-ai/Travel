const express = require("express");
const router = express.Router();

const PaymentController = require("../controller/paymentController");

// Routes
router.post("/create-order", PaymentController.createOrder);
router.post("/verify", PaymentController.verifyPayment);
router.get("/booking/:bookingId", PaymentController.getBooking);

module.exports = router;

const Razorpay = require("razorpay");
const crypto = require("crypto");

// 🧾 Dummy tour data (later DB se aayega)
//payment is being done by razorpay
const tours = [
  { id: 1, price: 27000 },
  { id: 2, price: 15000 },
  { id: 3, price: 32000 },
];

// 🔥 Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_xxxxxxxx",
  key_secret: "xxxxxxxxxxxx",
});

// ✅ CREATE ORDER (10% logic)
router.post("/create-order", async (req, res) => {
  try {
    const { tourId } = req.body;

    if (!tourId) {
      return res.status(400).json({ error: "Tour ID required" });
    }

    // 🔍 find tour
    const tour = tours.find((t) => t.id === Number(tourId));

    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }

    // 💰 calculate 10%
    const totalAmount = tour.price;
    const advance = Math.floor(totalAmount * 0.1);

    const options = {
      amount: advance * 100, // paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json({
      order,
      totalAmount,
      advance,
      remaining: totalAmount - advance,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

// ✅ VERIFY PAYMENT
router.post("/verify", (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", "xxxxxxxxxxxx")
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      return res.json({
        success: true,
        message: "Payment verified successfully ✅",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid signature ❌",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Verification failed" });
  }
});

module.exports = router;

