
//создание класса почтовый офис
class PostOffice {
  constructor () {
    this.observers = []
  }
//добавление подписчика
  subscribe (fn) {
    this.observers.push(fn)
  }
//отписка подписчика
  unsubscribe (fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }
 //уведомление всех подписчиков
  broadcast (data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}

const observer = new PostOffice()
//добавление подписчика (подписка)
observer.subscribe(data => {
  console.log('подписка на газету и журнал', data)
})
// еще одно добавление подписчика (подписка)
observer.subscribe(data => {
  console.log('подписка на газету и журнал ', data)
})
//рассылка уведомления
observer.broadcast({someData: 'Вышел новый выпуск журнала!'})