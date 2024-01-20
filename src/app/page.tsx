"use client";

import React from 'react'
import './globals.css';
import { NavigatorView } from "@/components/navigator";
import { Content } from "@/containers/content";

export default function Home() {
    return (
        <div className={'main-container'}>
            <NavigatorView></NavigatorView>
            <Content></Content>
        </div>
    );
}
