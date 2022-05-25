/* const TimeRender = document.querySelector('.heading-list__time_1')

const APITimes = 'http://worldtimeapi.org/api/timezone/Asia/Bangkok'

setInterval(() => {

    fetch(APITimes)
        .then((Response) => {
            return Response.json()
        })
        .then((Response) => {
            TimeRender.title = Response.datetime.slice(11, 19)
            TimeRender.innerHTML = Response.datetime.slice(11, 19)
        })

}, 1000) */