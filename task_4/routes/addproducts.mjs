import { Router } from "express"
const router = Router()
router.get("/", (req, res) => {
  res.render("addproducts")
})
export default router
