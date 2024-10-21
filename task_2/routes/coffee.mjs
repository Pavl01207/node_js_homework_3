import { Router } from "express"
const router = Router()
router.get("/", (req, res) => {
  res.render("coffee", { title: "Flat-White" })
})
export default router
