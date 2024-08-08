import * as express from "express"
import { createInvoiceController, deleteInvoiceController, getInvoiceByIdController, getInvoicesController, updateInvoiceController } from "./invoice.controller"
import { protectRoute } from "../middleware/confirmAuthorisation"

const router = express.Router()

router.get('/:invoiceId', protectRoute, getInvoiceByIdController)
router.get('/', protectRoute, getInvoicesController)
router.post('/create', protectRoute, createInvoiceController)
router.post('/update/:invoiceId', protectRoute, updateInvoiceController)
router.post('/delete/:invoiceId', protectRoute, deleteInvoiceController)


export default router