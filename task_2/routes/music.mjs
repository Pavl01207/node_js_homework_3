import { Router } from "express"
const router = Router()
router.get("/", (req, res) => {
  res.render("music", { title: "Image Dragons" })
})
export default router
