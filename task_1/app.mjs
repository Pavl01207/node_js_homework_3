import express from "express"
const app = express()
const port = 3000
// Маршрут для GET запиту до кореневого шляху
app.get("/", (req, res) => {
  res.send("Hello, World!")
})
//Маршрут для отримання пори року
app.get("/season", (req, res) => {
  let month = new Date().getMonth() + 1
  let result
  switch (month) {
    case 1:
    case 2:
      result = "Winter"
      break
    case 3:
    case 4:
    case 5:
      result = "Spring"
      break
    case 6:
    case 7:
    case 8:
      result = "Summer"
      break
    case 9:
    case 10:
    case 11:
      result = "Autumn"
      break
    case 12:
      result = "Winter"
      break
    default:
      result = "Wrong"
      break
  }
  res.send(`The Season now is ${result}`)
})
//Маршрут для отримання дня
app.get("/day", (req, res) => {
  let day = new Date().getDay()
  let result
  switch (day) {
    case 0:
      result = "Sunday"
      break
    case 1:
      result = "Monday"
      break
    case 2:
      result = "Tuesday"
      break
    case 3:
      result = "Wednesday"
      break
    case 4:
      result = "Thursday"
      break
    case 5:
      result = "Friday"
      break
    case 6:
      result = "Saturday"
      break
    default:
      result = "Wrong"
      break
  }
  res.send(`The Day now is ${result}`)
})
//Маршрут для отримання періода дня
app.get("/time", (req, res) => {
  const time = () => {
    const hours = new Date().getHours()
    if (hours >= 5 && hours < 12) {
      return "Morning"
    } else if (hours >= 12 && hours < 17) {
      return "Afternoon"
    } else if (hours >= 17 && hours < 21) {
      return "Hight"
    } else {
      return "Error"
    }
  }
  let result = time()
  res.send(`The period of the day now is ${result}`)
})
// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`)
})
