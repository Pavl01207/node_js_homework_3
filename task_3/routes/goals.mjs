import { Router } from "express"
const router = Router()
router.get("/", (req, res) => {
  res.render("goals", { title: "Ваші цілі!" })
})
export default router
