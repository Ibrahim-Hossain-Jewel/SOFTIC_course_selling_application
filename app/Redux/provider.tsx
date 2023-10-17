"use client";
import React from "react";
import { store } from "./page";
import { Provider } from "react-redux";
export function ReduxProvider({children}: {children: React.ReactNode}){
    return <Provider store={store}>{children}</Provider>
}