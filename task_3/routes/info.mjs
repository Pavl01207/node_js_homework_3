import { Router } from "express"
const router = Router()
router.get("/:myLinks", (req, res) => {
  const myLinks = req.params["myLinks"]

  if (myLinks === "sites") {
    res.send(`
            <h1>Улюблені сайти</h1>
            <ul>
                <li><a href="https://google.com">Google</a></li>
                <li><a href="https://stackoverflow.com">Stack Overflow</a></li>
                <li><a href="https://github.com">GitHub</a></li>
            </ul>
        `)
  } else if (myLinks === "films") {
    res.send(`
            <h1>Улюблені онлайн кінотеатри</h1>
            <ul>
                <li><a href="https://netflix.com">Netflix</a></li>
                <li><a href="https://hbomax.com">HBO Max</a></li>
                <li><a href="https://disneyplus.com">Disney+</a></li>
            </ul>
        `)
  } else if (myLinks === "me") {
    res.send(`
            <h1>Інформація про мене</h1>
            <p>Привіт! Мене звати Павло, я веб-розробник.</p>
        `)
  } else {
    res.send(`<h1>404 - Сторінку не знайдено</h1>`)
  }
})
export default router
