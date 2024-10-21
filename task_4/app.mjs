/*З використанням роутерів та шаблонізаторів розробити інтернет магазин з такими сторінками:
1) about – як статична сторінка (розмістити у public)
2) сторінка додавання продукту (поки лише відображаємо поля для заповнення інформації)
3) сторінка відображення продуктів (у формі таблиці і списку)
4) головна – знаходяться посилання на сторінки about і products і addproducts
*/
import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import { fileURLToPath } from "url"
import indexRouter from "./routes/index.mjs"
import usersRouter from "./routes/users.mjs"
import addproductsRouter from "./routes/addproducts.mjs"
import productsRouter from "./routes/products.mjs"
const app = express()
const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use("/", indexRouter)
app.use("/addproducts", addproductsRouter)
app.use("/products", productsRouter)
app.use("/users", usersRouter) // catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
}) // error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {} // render the error page
  res.status(err.status || 500)
  res.render("error")
})
export default app
