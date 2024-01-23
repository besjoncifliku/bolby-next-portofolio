"use client";

import React  from 'react'
import './globals.css';
import { Content } from "@/containers/content";
import { SidebarView } from "@/components/sidebar";

export default function Home() {
    return (
        <section>
            <SidebarView></SidebarView>
            <Content></Content>
        </section>
    );
}
