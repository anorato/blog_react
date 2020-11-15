import React from 'react';
// @ts-ignore
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Post from "../components/PostComponent";

const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Post />
        </div>
    </BrowserRouter>
);

export default AppRouter;
