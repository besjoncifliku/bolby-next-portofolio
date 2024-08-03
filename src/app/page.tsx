"use client";

import React from "react";
import "./globals.css";
import { Content } from "@/containers/content";
import { SidebarView } from "@/components/sidebar";
import { ResponsivenessProvider } from "../contexts/breakpoint-context";

export default function Home() {
  return (
    <ResponsivenessProvider>
      <section>
        <SidebarView></SidebarView>
        <Content></Content>
      </section>
    </ResponsivenessProvider>
  );
}
