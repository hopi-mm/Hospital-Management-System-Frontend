<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings, CalendarPlus } from "lucide-vue-next";
import { 
    Sidebar, 
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    } from "@/components/ui/sidebar";
import { RouterLink } from "vue-router";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Appointment",
    url: "/appointment",
    icon: CalendarPlus,
  },
  {
    title: "test",
    url: "/test",
    icon: CalendarPlus,
  }
];
</script>

<template>
  <Sidebar>
    <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem v-for="item in items" :key="item.title">
                        <SidebarMenuButton asChild>
                            <RouterLink :to="item.url">
                                <component :is="item.icon" />
                                <span>{{item.title}}</span>
                            </RouterLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        </SidebarContent> 
  </Sidebar>
</template>