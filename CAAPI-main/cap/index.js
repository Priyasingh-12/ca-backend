const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

const connectToDatabase = require("./config/db");
const port = process.env.PORT || 3000;


  app.use(cors({ origin: 'http://localhost:8080' }));
  app.use(cors())

const Partyy = require("./router/party.router");
const addItemm = require("./router/itemRouter");
const loginReg=require("./router/loginUserRouter");
const invoiceController=require("./controller/invoiceController")
const deliveryRouter = require("./router/deliveryChannal.route")
const estimateRoute = require("./router/estimate.route")
const paymentRouter = require("./router/paymentIn.route")
const saleOrderRouter = require("./router/saleOrder.route")
const saleReturnRouter = require("./router/saleReturn.route")
const logoRoute = require("./router/logo.route")
const exportItemRouter = require("./router/exportItem.route")
const exportToTallyRouter = require("./router/exportToTally.route")
const genrateBarcodeRouter = require("./router/genrateBarcode.route")
const imortItemRouter = require("./router/importItem.route")
const recycleBinRouter = require("./router/recycleBin.route")

const ProductRouter = require("./router/product.route")
const PurchaseRouter = require("./router/purchase.route")
const OrderRouter = require("./router/order.route")
 const ReturnRouter = require("./router/return.route")




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use("/party", Partyy);

app.use("/additem", addItemm);
app.use("/loginreg",loginReg);
app.use('/invoices', invoiceController);
app.use("/addDelivery", deliveryRouter)
app.use("/addEastimate", estimateRoute)
app.use("/addPayment", paymentRouter)
app.use("/addSaleOrder", saleOrderRouter)
app.use("/addSaleReturn", saleReturnRouter)
app.use("/addLogo", logoRoute)
app.use("/addExportItem", exportItemRouter)
app.use("/addExportToTally", exportToTallyRouter)
app.use("/addGenrateBarcode", genrateBarcodeRouter)
app.use("/addImportItem", imortItemRouter)
app.use("/addRecycleBin", recycleBinRouter)

app.use("/addProduct", ProductRouter)
app.use("/addPurchase", PurchaseRouter)
app.use("/addOrder", OrderRouter)
app.use("/addReturn", ReturnRouter)


app.listen(port, async() => {
  try {
      await connectToDatabase();
      console.log(`Server is running on port ${port}`) 
  } catch (err) {
      console.log({ message: "Failed to connect Database", err });
    }
});