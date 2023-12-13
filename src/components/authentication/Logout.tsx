import httpService from "../../services/httpService";

export default async function Logout() {
    const logoutUrl = "auth/logout"
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() - 1);
    document.cookie = `user=; expires=${expirationDate.toUTCString()}; path=/`;
    try {
        await httpService.post(logoutUrl)
        document.cookie = `user=; expires=${expirationDate.toUTCString()}; path=/`;
        document.cookie = `user_id=; expires=${expirationDate.toUTCString()}; path=/`;
    } catch (error) {
        console.error("Logout Successful", error)
    }
}