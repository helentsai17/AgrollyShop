import React, { Component } from 'react'
import Card from './newsTemplet'

export default class AgrollyNews extends Component {
    render() {
        return (
            <div >

                <Card image={"https://miro.medium.com/max/700/1*BY3la24IxECa-GginN7kXQ.png"}
                    title={"In the news: Agrolly, a one-stop-shop for farmers"}
                    country={"Brazil"}
                    date={"Oct, 29, 2020"} />
                <Card image={"https://tr3.cbsistatic.com/hub/i/r/2018/12/05/76416dcd-e893-4119-89d5-fa5bd3a416bc/resize/770x/42cd7e1cc30f55eca40974f40a134140/figuremhfhacombine.jpg"}
                    title={"Farming assistant app Agrolly wins IBM's Call for Code contest"}
                    country={"Brazil"}
                    date={"Oct, 13, 2020"} />
                <Card image={"https://redesuldenoticias.com.br/content/uploads/2020/11/manu.jpg"}
                    title={"Partnership with Campo Real University in Parana"}
                    country={"Brazil"}
                    date={"Oct, 11, 2020"} />
                <Card image={"https://s.w-x.co/util/image/w/Call%20for%20Code%202020.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"}
                    title={"IBM 2020 Call for Code Top 5 Global Finalists Announced"}
                    country={"USA"}
                    date={"Sep, 28, 2020"} />
            </div>
        )
    }
}