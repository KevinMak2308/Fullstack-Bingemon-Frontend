import React from "react";
import httpService from "../../services/httpService";

export default async function Logout() {
    const logoutUrl = "auth/logout"
    const expirationDate = new Date()

    try {
        await httpService.post(logoutUrl)
        document.cookie = `user=; expires=${expirationDate.toUTCString()}; path=/`;
    } catch (error) {
        console.error("Logout Successful", error)
    }

}