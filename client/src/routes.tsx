import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import TicketDetail from './pages/TicketDetail'
export default function Routes() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/study" component={TicketDetail}/>
    </BrowserRouter>
    )
}
